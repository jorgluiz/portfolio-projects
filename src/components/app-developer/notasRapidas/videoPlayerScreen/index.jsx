import { useEffect, useState } from "react";
import { useGlobalState } from "../../../../context/GlobalStateContext";
import {
  Container,
  DividerWithText,
  Paragraph,
  Subtitle,
  List,
} from "@/styles/globalStyles";

import Overlay from "@/components/overlay";
import VoltarParaTopo from "@/components/backToTop";
import CodeBlock from "@/components/codeBlock";

// Renomeando o componente para refletir o novo conteúdo
const VideoPlayerScreen = () => {
  const { isLoaded, isHamburguerOpen, setIsHamburguerOpen } = useGlobalState();
  const handleOverlayClick = () => setIsHamburguerOpen(false);
  // const [code, setCode] = useState('');

  // useEffect(() => {
  //   const fetchCode = async () => {
  //     try {
  //       const response = await fetch('/api/get-code');
  //       const data = await response.json();
  //       setCode(data.code);
  //     } catch (error) {
  //       console.error("Failed to fetch code:", error);
  //       setCode('// Erro ao carregar o código.');
  //     }
  //   };

  //   fetchCode();
  // }, []); // Roda apenas uma vez

  return (
    <>
      {!isLoaded ? null : (
        <>
          {isHamburguerOpen && <Overlay onClick={handleOverlayClick} />}
          <Container>
            <DividerWithText>Análise Técnica do Componente VideoPlayerScreen.tsx</DividerWithText>
            <Subtitle>VideoPlayerScreen.tsx</Subtitle>
            <CodeBlock language="jsx">
              {`
// src/screens/VideoPlayerScreen.tsx
import React, {useState, useRef, useCallback, useEffect} from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  ActivityIndicator,
  Text,
  TouchableOpacity,
  Pressable, // Mantido para o overlay
} from 'react-native';
import Video, {OnLoadData, OnProgressData} from 'react-native-video';
import Slider from '@react-native-community/slider';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useFocusEffect, RouteProp} from '@react-navigation/native';
import type {StackNavigationProp} from '@react-navigation/stack';
import Share from 'react-native-share';
import {RootStackParamList} from '../App';
import {useTranslation} from 'react-i18next';

// --- Tipos e Props ---
type VideoPlayerScreenRouteProp = RouteProp<RootStackParamList, 'VideoPlayer'>;
type VideoPlayerScreenNavigationProp = StackNavigationProp<RootStackParamList, 'VideoPlayer'>;
type Props = {
  route: VideoPlayerScreenRouteProp;
  navigation: VideoPlayerScreenNavigationProp;
};

// --- Funções Utilitárias ---
const formatTime = (seconds: number) => {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return '$ {m}:$ {s < 10 ? '0' : ''}$ {s}';
};

// =============================================================================
// Componente da Tela Principal
// =============================================================================
function VideoPlayerScreen({route, navigation}: Props) {
  const {t} = useTranslation();
  const {filePath} = route.params;

  // --- Hooks, Refs e State ---
  const insets = useSafeAreaInsets();
  const videoRef = useRef<Video>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [isPaused, setIsPaused] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showControls, setShowControls] = useState(true);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [hasEnded, setHasEnded] = useState(false);
  const [isSliding, setIsSliding] = useState(false);

  // --- Efeitos (Lifecycle e Timers) ---

  // Gerencia o estado de play/pause quando a tela ganha ou perde foco.
  useFocusEffect(
    useCallback(() => {
      // Tela ganha foco
      setIsPaused(false);
      return () => {
        // Tela perde foco
        setIsPaused(true);
      };
    }, []),
  );

  // Gerencia o auto-ocultamento dos controles.
  useEffect(() => {
    // Limpa qualquer timeout anterior
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }

    // Se os controles devem ser mostrados e o vídeo está tocando, agenda para ocultá-los
    if (showControls && !isPaused && !hasEnded && !isSliding) {
      controlsTimeoutRef.current = setTimeout(() => setShowControls(false), 3000);
    }

    // Função de limpeza para evitar memory leaks
    return () => {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, [showControls, isPaused, hasEnded, isSliding]);

  // --- Manipuladores de Eventos do Componente <Video> ---

  const handleLoad = (data: OnLoadData) => {
    setDuration(data.duration);
    setIsLoading(false);
  };

  const handleProgress = (data: OnProgressData) => {
    // Apenas atualiza o tempo se o usuário não estiver arrastando o slider
    if (!isSliding) {
      setCurrentTime(data.currentTime);
    }
  };

  const handleEnd = () => {
    setIsPaused(true);
    setHasEnded(true);
    setShowControls(true); // Mostra os controles no final
  };

  // --- Manipuladores de Interação do Usuário (Controles) ---

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleScreenTouch = () => {
    setShowControls(prev => !prev);
  };

  const handlePlayPause = () => {
    // Se o vídeo terminou, reinicia ao pressionar play
    if (hasEnded) {
      videoRef.current?.seek(0);
      setHasEnded(false);
    }
    setIsPaused(prev => !prev);
  };

  const handleSlidingStart = () => {
    setIsSliding(true);
  };

  const handleSlidingComplete = (value: number) => {
    videoRef.current?.seek(value);
    setCurrentTime(value); // Atualiza o tempo imediatamente para feedback visual
    setIsSliding(false);
    if (hasEnded) {
      setHasEnded(false);
    }
  };

  const handleShare = async () => {
    setIsPaused(true); // Pausa o vídeo antes de compartilhar
    const shareOptions = {
      title: t('videoPlayerScreen.share_video_title'),
      url: 'file://$ {filePath}',
      type: 'video/mp4',
    };
    try {
      await Share.open(shareOptions);
    } catch (error) {
      // Ignora erro comum quando o usuário cancela o compartilhamento
      if ((error as any).message !== 'User did not share') {
        console.log('Erro ao compartilhar:', error);
      }
    }
  };

  // --- Renderização ---

  if (!filePath) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{t('videoPlayerScreen.file_path_error')}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handleScreenTouch}>
        <View style={StyleSheet.absoluteFill}>
          <Video
            ref={videoRef}
            source={{uri: 'file://$ {filePath}'}}
            style={StyleSheet.absoluteFill}
            resizeMode='contain'
            paused={isPaused}
            onLoad={handleLoad}
            onProgress={handleProgress}
            onEnd={handleEnd}
            onError={e => console.error('Erro ao tocar o vídeo:', e)}
          />

          {isLoading && (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size='large' color='white' />
            </View>
          )}

          {showControls && (
            <Pressable style={styles.controlsOverlay}>
              {/* Botão de Voltar */}
              <TouchableOpacity style={[styles.headerButton, {top: insets.top + 10, left: 15}]} onPress={handleGoBack}>
                <Icon name='arrow-back' size={30} color='#FFFFFF' />
              </TouchableOpacity>

              {/* Botão de Play/Pause Central */}
              <TouchableOpacity style={styles.playPauseButton} onPress={handlePlayPause}>
                <Icon name={hasEnded ? 'reload' : isPaused ? 'play' : 'pause'} size={50} color='white' />
              </TouchableOpacity>

              {/* Controles Inferiores (Progresso e Compartilhar) */}
              <View style={[styles.bottomControls, {bottom: insets.bottom + 10}]}>
                <Text style={styles.timeText}>{formatTime(currentTime)}</Text>
                <Slider
                  style={styles.slider}
                  minimumValue={0}
                  maximumValue={duration}
                  value={currentTime}
                  onSlidingStart={handleSlidingStart}
                  onSlidingComplete={handleSlidingComplete}
                  minimumTrackTintColor='#FFFFFF'
                  maximumTrackTintColor='rgba(255, 255, 255, 0.5)'
                  thumbTintColor='#FFFFFF'
                />
                <Text style={styles.timeText}>{formatTime(duration)}</Text>
                <TouchableOpacity style={styles.footerButton} onPress={handleShare}>
                  <Icon name='share-social-outline' size={26} color='#FFFFFF' />
                </TouchableOpacity>
              </View>
            </Pressable>
          )}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

// --- Estilos ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  errorText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  controlsOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerButton: {
    position: 'absolute',
    padding: 5,
    zIndex: 10,
  },
  playPauseButton: {},
  bottomControls: {
    position: 'absolute',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  slider: {
    flex: 1,
    marginHorizontal: 10,
  },
  timeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
  footerButton: {
    paddingLeft: 10,
  },
});

export default VideoPlayerScreen;

              `}
            </CodeBlock>
          </Container>
          <Container>
            <DividerWithText>
              Análise Técnica do Componente VideoPlayerScreen.tsx
            </DividerWithText>

            <Subtitle>1. Tipos e Props: Definindo a Comunicação do Componente</Subtitle>
            <Paragraph>
              Esta seção define os tipos para as props que o componente <strong>VideoPlayerScreen</strong> recebe do React Navigation. Isso garante que o acesso a <strong>route.params</strong> e <strong>navigation</strong> seja seguro e com autocompletar.
            </Paragraph>
            <List>
              <li><strong>VideoPlayerScreenRouteProp:</strong> Define o tipo para a prop <strong>route</strong>, o que nos dá acesso tipado a <strong>route.params.filePath</strong>.</li>
              <li><strong>VideoPlayerScreenNavigationProp:</strong> Define o tipo para a prop <strong>navigation</strong>.</li>
              <li><strong>Props:</strong> Agrupa os tipos de <strong>route</strong> e <strong>navigation</strong> em um único tipo para ser usado na declaração do componente.</li>
            </List>
            <CodeBlock language="typescript">
              {`// --- Tipos e Props ---
type VideoPlayerScreenRouteProp = RouteProp<RootStackParamList, 'VideoPlayer'>;
type VideoPlayerScreenNavigationProp = StackNavigationProp<RootStackParamList, 'VideoPlayer'>;
type Props = {
  route: VideoPlayerScreenRouteProp;
  navigation: VideoPlayerScreenNavigationProp;
};`}
            </CodeBlock>

            <Subtitle>2. Funções Utilitárias: Helpers Reutilizáveis</Subtitle>
            <Paragraph>
              <strong>formatTime():</strong> Recebe um número total de segundos e o converte para um formato de minutos:segundos (ex: 1:05). É usada para exibir a duração e o tempo atual do vídeo de forma legível.
            </Paragraph>
            <CodeBlock language="typescript">
              {`// --- Funções Utilitárias ---
const formatTime = (seconds: number) => {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return \`\${m}:\${s < 10 ? '0' : ''}\${s}\`;
};`}
            </CodeBlock>

            <Subtitle>3. Lógica Interna do Componente VideoPlayerScreen</Subtitle>
            <Paragraph>Aqui começa a definição do componente do player, contendo toda a sua lógica de estado e interatividade.</Paragraph>

            <Subtitle>3.1. Hooks, Refs e State: O Painel de Controle do Player</Subtitle>
            <Paragraph>Este bloco inicializa os mecanismos para gerenciar o estado do vídeo, os controles e as interações.</Paragraph>
            <List>
              <li><strong>Hooks de Inicialização:</strong> <strong>useTranslation()</strong>, <strong>route.params</strong> e <strong>useSafeAreaInsets()</strong> para preparar o ambiente.</li>
              <li><strong>Referências (useRef):</strong>
                <ul>
                  <li><strong>videoRef:</strong> Uma referência direta ao componente <strong>&lt;Video&gt;</strong> para chamar métodos como <strong>seek()</strong>.</li>
                  <li><strong>controlsTimeoutRef:</strong> Armazena o ID do timer <strong>setTimeout</strong> usado para esconder os controles.</li>
                </ul>
              </li>
              <li><strong>Estados (useState):</strong>
                <ul>
                  <li><strong>isPaused:</strong> Controla se o vídeo está pausado ou tocando.</li>
                  <li><strong>isLoading:</strong> Controla o indicador de carregamento inicial.</li>
                  <li><strong>showControls:</strong> Controla a visibilidade dos controles do player.</li>
                  <li><strong>duration / currentTime:</strong> Armazenam a duração total e o tempo de reprodução atual.</li>
                  <li><strong>hasEnded / isSliding:</strong> Indicam se o vídeo chegou ao fim ou se o usuário está arrastando o slider.</li>
                </ul>
              </li>
            </List>
            <CodeBlock language="typescript">
              {`function VideoPlayerScreen({route, navigation}: Props) {
  const {t} = useTranslation();
  const {filePath} = route.params;

  // --- Hooks, Refs e State ---
  const insets = useSafeAreaInsets();
  const videoRef = useRef<Video>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [isPaused, setIsPaused] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  // ... outros estados ...
}`}
            </CodeBlock>

            <Subtitle>3.2. Efeitos (Lifecycle e Timers)</Subtitle>
            <Paragraph>Esta seção lida com a lógica que responde a mudanças no ciclo de vida do componente ou no estado.</Paragraph>
            <List>
              <li><strong>useFocusEffect():</strong> Gerencia o estado de play/pause automaticamente. Quando a tela ganha foco, o vídeo toca; quando perde o foco, ele pausa.</li>
              <li><strong>useEffect() para Controles:</strong> Gerencia o auto-ocultamento dos controles. Ele inicia um <strong>setTimeout</strong> para esconder os controles após 3 segundos, mas cancela e reinicia o timer se o estado do player mudar (ex: se for pausado).</li>
            </List>
            <CodeBlock language="typescript">
              {`// --- Efeitos (Lifecycle e Timers) ---
useFocusEffect(
  useCallback(() => {
    setIsPaused(false);
    return () => { setIsPaused(true); };
  }, [])
);

useEffect(() => {
  // ... lógica para esconder os controles com setTimeout e clearTimeout ...
}, [showControls, isPaused, hasEnded, isSliding]);`}
            </CodeBlock>

            <Subtitle>3.3. Manipuladores de Eventos do Componente &lt;Video&gt;</Subtitle>
            <Paragraph>Estas são as funções de "callback" que são passadas como props para o componente <strong>&lt;Video&gt;</strong>.</Paragraph>
            <List>
              <li><strong>handleLoad():</strong> Acionada quando o vídeo carrega, atualizando o estado <strong>duration</strong>.</li>
              <li><strong>handleProgress():</strong> Acionada continuamente enquanto o vídeo toca, atualizando o <strong>currentTime</strong>.</li>
              <li><strong>handleEnd():</strong> Acionada quando o vídeo chega ao fim.</li>
            </List>
            <CodeBlock language="typescript">
              {`const handleLoad = (data: OnLoadData) => { /* ... */ };
const handleProgress = (data: OnProgressData) => { /* ... */ };
const handleEnd = () => { /* ... */ };`}
            </CodeBlock>

            <Subtitle>3.4. Manipuladores de Interação do Usuário (Controles)</Subtitle>
            <Paragraph>Estas funções são acionadas por toques do usuário nos controles customizados.</Paragraph>
            <List>
              <li><strong>handleGoBack():</strong> Usa <strong>navigation.goBack()</strong> para fechar a tela.</li>
              <li><strong>handleScreenTouch():</strong> Alterna a visibilidade dos controles.</li>
              <li><strong>handlePlayPause():</strong> Alterna o play/pause e reinicia o vídeo se ele já tiver terminado.</li>
              <li><strong>handleSlidingStart() / handleSlidingComplete():</strong> Gerenciam o ato de arrastar a barra de progresso.</li>
              <li><strong>handleShare():</strong> Pausa o vídeo e usa <strong>react-native-share</strong> para compartilhar o arquivo.</li>
            </List>
            <CodeBlock language="typescript">
              {`const handleGoBack = () => { /* ... */ };
const handleScreenTouch = () => { /* ... */ };
const handlePlayPause = () => { /* ... */ };
const handleSlidingStart = () => { /* ... */ };
const handleSlidingComplete = (value: number) => { /* ... */ };
const handleShare = async () => { /* ... */ };`}
            </CodeBlock>

            <Subtitle>3.5. Renderização</Subtitle>
            <Paragraph><strong>Guarda de Segurança:</strong> O <strong>if (!filePath)</strong> no início da renderização é uma guarda. Se por algum motivo a tela for aberta sem um <strong>filePath</strong>, ele exibe uma mensagem de erro em vez de quebrar o aplicativo.</Paragraph>
            <CodeBlock language="typescript">
              {`if (!filePath) {
  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>{t('videoPlayerScreen.file_path_error')}</Text>
    </View>
  );
}`}
            </CodeBlock>
          </Container>
          <Container>
            <Subtitle>4. Análise do JSX: A Interface do Player de Vídeo</Subtitle>
            <Paragraph>
              Este código define a estrutura visual do player, posicionando o vídeo e os controles na tela e conectando-os à lógica do componente.
            </Paragraph>

            <Subtitle>4.1. Estrutura Principal e Camadas</Subtitle>
            <Paragraph>
              A base do player é construída com camadas de componentes para permitir que os controles flutuem sobre o vídeo.
            </Paragraph>
            <List>
              <li><strong>&lt;View style={"{styles.container}"}&gt;:</strong> O contêiner mais externo, que ocupa toda a tela e tem um fundo preto.</li>
              <li><strong>&lt;TouchableWithoutFeedback onPress={"{handleScreenTouch}"}&gt;:</strong> Um componente invisível que envolve toda a área do vídeo. Sua única função é detectar um toque em qualquer lugar da tela para chamar a função <strong>handleScreenTouch()</strong>, que alterna a visibilidade dos controles.</li>
              <li><strong>&lt;View style={"{StyleSheet.absoluteFill}"}&gt;:</strong> Um contêiner que usa um atalho de estilo do React Native para se posicionar de forma absoluta e preencher completamente seu pai. Ele serve como a base onde todas as outras camadas serão colocadas.</li>
            </List>
            <CodeBlock language="jsx">
              {`return (
  <View style={styles.container}>
    <TouchableWithoutFeedback onPress={handleScreenTouch}>
      <View style={StyleSheet.absoluteFill}>
        {/* Camadas do player vão aqui */}
      </View>
    </TouchableWithoutFeedback>
  </View>
);`}
            </CodeBlock>

            <Subtitle>4.2. Camada de Vídeo (&lt;Video&gt;)</Subtitle>
            <Paragraph>
              Este é o componente principal da biblioteca <strong>react-native-video</strong>, responsável por decodificar e exibir o vídeo.
            </Paragraph>
            <List>
              <li><strong>ref={"{videoRef}"}:</strong> Associa esta instância do componente à <strong>videoRef</strong>, permitindo chamá-lo de forma imperativa (ex: <strong>videoRef.current.seek(...)</strong>).</li>
              <li><strong>source={"{ {uri: `file://...`} }"}:</strong> Especifica o caminho do arquivo de vídeo local a ser tocado.</li>
              <li><strong>style={"{StyleSheet.absoluteFill}"}:</strong> Faz com que o componente de vídeo se expanda para preencher toda a tela.</li>
              <li><strong>resizeMode='contain':</strong> Uma prop crucial que garante que o vídeo inteiro seja visível, mantendo sua proporção original sem distorção ou corte.</li>
              <li><strong>Props de Controle e Eventos:</strong> <strong>paused</strong>, <strong>onLoad</strong>, <strong>onProgress</strong>, e <strong>onEnd</strong> conectam os eventos do player às nossas funções de callback (<strong>handleLoad</strong>, <strong>handleProgress</strong>, <strong>handleEnd</strong>).</li>
            </List>
            <CodeBlock language="jsx">
              {`<Video
  ref={videoRef}
  source={{uri: \`file://\${filePath}\`}}
  style={StyleSheet.absoluteFill}
  resizeMode='contain'
  paused={isPaused}
  onLoad={handleLoad}
  onProgress={handleProgress}
  onEnd={handleEnd}
/>`}
            </CodeBlock>

            <Subtitle>4.3. Camadas de Overlay (Sobreposição)</Subtitle>
            <Paragraph>
              Estas camadas são renderizadas condicionalmente sobre o vídeo.
            </Paragraph>
            <Paragraph>
              <strong>Indicador de Carregamento:</strong> A expressão <strong>{'{isLoading && ...}'}</strong> garante que o <strong>&lt;ActivityIndicator /&gt;</strong> só seja renderizado se o estado <strong>isLoading</strong> for <strong>true</strong>.
            </Paragraph>
            <CodeBlock language="jsx">
              {`{isLoading && (
  <View style={styles.loadingContainer}>
    <ActivityIndicator size='large' color='white' />
  </View>
)}`}
            </CodeBlock>
            <Paragraph>
              <strong>Controles do Player:</strong> O contêiner <strong>&lt;Pressable&gt;</strong> com todos os botões e o slider só é renderizado se o estado <strong>showControls</strong> for <strong>true</strong>.
            </Paragraph>
            <List>
              <li><strong>Botão de Voltar:</strong> Posicionado no canto superior esquerdo, usando <strong>insets.top</strong> para garantir que fique abaixo da barra de status.</li>
              <li><strong>Botão de Play/Pause Central:</strong> O ícone exibido é dinâmico, mudando entre 'reload', 'play' e 'pause' com base nos estados <strong>hasEnded</strong> e <strong>isPaused</strong>.</li>
              <li><strong>Controles Inferiores:</strong> Uma <strong>&lt;View&gt;</strong> posicionada na parte inferior (usando <strong>insets.bottom</strong>) que contém:
                <ul>
                  <li>Dois componentes <strong>&lt;Text&gt;</strong> que usam a função <strong>formatTime()</strong> para exibir o tempo de forma legível.</li>
                  <li>O componente <strong>&lt;Slider&gt;</strong>, cuja aparência e posição são controladas pelos estados <strong>duration</strong> e <strong>currentTime</strong>.</li>
                  <li>Um <strong>&lt;TouchableOpacity&gt;</strong> para o botão de compartilhar.</li>
                </ul>
              </li>
            </List>
            <CodeBlock language="jsx">
              {`{showControls && (
  <Pressable style={styles.controlsOverlay}>
    {/* Botão de Voltar */}
    <TouchableOpacity style={[styles.headerButton, {top: insets.top + 10}]} onPress={handleGoBack}>
      <Icon name='arrow-back' size={30} color='#FFFFFF' />
    </TouchableOpacity>

    {/* Botão de Play/Pause Central */}
    <TouchableOpacity style={styles.playPauseButton} onPress={handlePlayPause}>
      <Icon name={hasEnded ? 'reload' : isPaused ? 'play' : 'pause'} size={50} color='white' />
    </TouchableOpacity>

    {/* Controles Inferiores */}
    <View style={[styles.bottomControls, {bottom: insets.bottom + 10}]}>
      {/* ... Text, Slider, Ícone de Compartilhar ... */}
    </View>
  </Pressable>
)}`}
            </CodeBlock>
          </Container>
          <Container>
            <Subtitle>5. Análise dos Estilos (StyleSheet)</Subtitle>
            <Paragraph>
              Este objeto define a aparência de todos os componentes que compõem a interface do player de vídeo.
            </Paragraph>

            <Subtitle>5.1. Estilos do Contêiner Principal</Subtitle>
            <List>
              <li><strong>container:</strong> O estilo para a <strong>&lt;View&gt;</strong> mais externa. <strong>flex: 1</strong> faz com que ocupe toda a tela, <strong>backgroundColor: 'black'</strong> define o fundo preto, e <strong>justifyContent: 'center'</strong> centraliza conteúdo verticalmente.</li>
              <li><strong>errorText:</strong> Estilo para a mensagem de erro, caso o <strong>filePath</strong> não seja encontrado.</li>
            </List>
            <CodeBlock language="javascript">
              {`const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  errorText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },`}
            </CodeBlock>

            <Subtitle>5.2. Estilos das Camadas de Sobreposição (Overlays)</Subtitle>
            <Paragraph>
              Estes estilos são usados para as camadas que ficam sobre o vídeo, como o loading e os controles.
            </Paragraph>
            <List>
              <li><strong>loadingContainer e controlsOverlay:</strong> Ambos usam <strong>...StyleSheet.absoluteFillObject</strong>, um atalho que aplica <strong>position: 'absolute'</strong> e preenche completamente o contêiner pai. <strong>justifyContent</strong> e <strong>alignItems</strong> são usados para centralizar seus filhos (o spinner ou o botão de play).</li>
              <li><strong>backgroundColor: 'rgba(0,0,0,0.3)':</strong> No <strong>controlsOverlay</strong>, isso cria um filtro escuro semi-transparente sobre o vídeo, melhorando a visibilidade dos controles brancos.</li>
            </List>
            <CodeBlock language="javascript">
              {`  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  controlsOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },`}
            </CodeBlock>

            <Subtitle>5.3. Estilos dos Controles Individuais</Subtitle>
            <Paragraph>
              Estes estilos definem a aparência e o posicionamento de cada botão e elemento interativo.
            </Paragraph>
            <Paragraph>
              <strong>headerButton e playPauseButton:</strong> O primeiro usa <strong>position: 'absolute'</strong> para poder ser posicionado livremente no topo da tela, e <strong>zIndex: 10</strong> para garantir que fique acima de outros elementos. O segundo está vazio, pois sua centralização já é feita pelo contêiner pai.
            </Paragraph>
            <CodeBlock language="javascript">
              {`  headerButton: {
    position: 'absolute',
    padding: 5,
    zIndex: 10,
  },
  playPauseButton: {},`}
            </CodeBlock>
            <Paragraph>
              <strong>bottomControls:</strong> O contêiner para a barra inferior. Usa <strong>position: 'absolute'</strong> para ser fixado na parte de baixo e <strong>flexDirection: 'row'</strong> para alinhar seus filhos (textos, slider, botão) horizontalmente.
            </Paragraph>
            <CodeBlock language="javascript">
              {`  bottomControls: {
    position: 'absolute',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },`}
            </CodeBlock>
            <Paragraph>
              <strong>slider, timeText e footerButton:</strong> O <strong>slider</strong> usa <strong>flex: 1</strong> para ocupar todo o espaço horizontal que sobrar. O <strong>timeText</strong> estiliza os textos de tempo e o <strong>footerButton</strong> adiciona um espaçamento ao botão de compartilhar.
            </Paragraph>
            <CodeBlock language="javascript">
              {`  slider: {
    flex: 1,
    marginHorizontal: 10,
  },
  timeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
  footerButton: {
    paddingLeft: 10,
  },
});`}
            </CodeBlock>
          </Container>
          <VoltarParaTopo></VoltarParaTopo>
        </>
      )
      }
    </>
  );
};

// Exporte com o novo nome
export default VideoPlayerScreen;