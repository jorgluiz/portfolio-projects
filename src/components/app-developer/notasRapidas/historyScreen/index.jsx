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
const HistoryScreen = () => {
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
            <DividerWithText>Análise Técnica do Componente HistoryScreen.tsx</DividerWithText>
            <Subtitle>HistoryScreen.tsx</Subtitle>
            <CodeBlock language="jsx">
              {`
// src/screens/HistoryScreen.tsx
import React, {useState, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  Alert,
  Modal,
  Pressable,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import type {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../App';
import RNFS from 'react-native-fs';
import Checkbox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/Ionicons';
import Share from 'react-native-share';
import {useTranslation} from 'react-i18next';

// --- Tipos e Constantes ---
type HistoryEntry = {
  id: string;
  url: string;
  filePath: string;
  thumbnailPath: string;
  downloadedAt: string;
};
const STORAGE_KEY = '@video_history';
type HistoryScreenNavigationProp = StackNavigationProp<RootStackParamList, 'History'>;

// =============================================================================
// Componente de Item da Lista (Otimizado e Separado)
// Responsável por renderizar um único item do histórico.
// =============================================================================
const HistoryItem = React.memo(({item, onMenuPress}: {item: HistoryEntry; onMenuPress: (item: HistoryEntry) => void}) => {
    const {t} = useTranslation();
    const navigation = useNavigation<HistoryScreenNavigationProp>();

    const handleNavigateToPlayer = () => {
      navigation.navigate('VideoPlayer', {filePath: item.filePath});
    };

    const handleShare = async (event: any) => {
      event.stopPropagation(); // Impede que o clique acione o handleNavigateToPlayer
      const shareOptions = {
        title: t('historyScreen.share_video_title'),
        url: 'file://$ {item.filePath}',
        type: 'video/mp4',
      };
      try {
        await Share.open(shareOptions);
      } catch (error) {
        console.log('Erro ao compartilhar:', error);
      }
    };

    return (
      <TouchableOpacity style={styles.itemContainer} onPress={handleNavigateToPlayer}>
        <View style={styles.thumbnailContainer}>
          <Image source={{uri: 'file://$ {item.thumbnailPath}'}} style={styles.thumbnail} resizeMode='cover' />
          <View style={styles.playIconContainer}>
            <Icon name='play-circle' size={60} color='rgba(255, 255, 255, 0.85)' />
          </View>
          <View style={styles.iconOverlay}>
            <TouchableOpacity style={styles.overlayIcon} onPress={handleShare}>
              <Icon name='share-social-outline' size={24} color='#FFFFFF' />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.overlayIcon}
              onPress={e => {
                e.stopPropagation();
                onMenuPress(item);
              }}>
              <Icon name='ellipsis-vertical' size={24} color='#FFFFFF' />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  },
);

// =============================================================================
// Componente da Tela Principal
// Gerencia o estado e a lógica da tela de histórico.
// =============================================================================
function HistoryScreen() {
  // --- Estados ---
  const {t} = useTranslation();
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState<HistoryEntry | null>(null);
  const [deleteLocalFiles, setDeleteLocalFiles] = useState(true);

  // --- Lógica de Carregamento e Manipulação de Dados ---

  const loadHistory = useCallback(async () => {
    // Não precisa de setIsLoading(true) aqui, pois o useFocusEffect já lida com isso
    try {
      const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
      setHistory(jsonValue != null ? JSON.parse(jsonValue) : []);
    } catch (e) {
      console.error('Failed to load history.', e);
      Alert.alert(t('historyScreen.load_error_title'), t('historyScreen.load_error_message'));
    } finally {
      setIsLoading(false);
    }
  }, [t]);

  useFocusEffect(
    useCallback(() => {
      setIsLoading(true);
      loadHistory();
    }, [loadHistory]),
  );

  const handleDeleteItem = async () => {
    if (!selectedItem) return;

    const itemToDelete = {...selectedItem};
    handleCloseMenu(); // Fecha o menu imediatamente para melhor feedback visual

    // Atualiza a UI primeiro
    const newHistory = history.filter(item => item.id !== itemToDelete.id);
    setHistory(newHistory);

    try {
      // Salva o novo histórico no AsyncStorage
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newHistory));

      // Apaga os arquivos físicos se a opção estiver marcada
      if (deleteLocalFiles) {
        if (itemToDelete.filePath) {
          await RNFS.unlink(itemToDelete.filePath).catch(err =>
            console.warn('Could not delete video file: $ {err.message}'),
          );
        }
        if (itemToDelete.thumbnailPath) {
          await RNFS.unlink(itemToDelete.thumbnailPath).catch(err =>
            console.warn('Could not delete thumbnail file: $ {err.message}'),
          );
        }
      }
      Alert.alert(t('historyScreen.delete_success_title'), t('historyScreen.delete_success_message'));
    } catch (error) {
      console.error('Erro ao apagar item ou arquivos:', error);
      Alert.alert(t('historyScreen.delete_error_title'), t('historyScreen.delete_error_message'));
      // Reverte a UI em caso de erro
      loadHistory();
    }
  };

  // --- Manipuladores do Menu Modal ---

  const handleOpenMenu = (item: HistoryEntry) => {
    setSelectedItem(item);
  };

  const handleCloseMenu = () => {
    setSelectedItem(null);
  };

  // --- Renderização ---

  if (isLoading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size='large' color='#841584' />
      </View>
    );
  }

  return (
    <View style={styles.pageContainer}>
      {history.length === 0 ? (
        <View style={styles.center}>
          <Text>{t('historyScreen.empty_state')}</Text>
        </View>
      ) : (
        <FlatList
          data={history}
          keyExtractor={item => item.id}
          renderItem={({item}) => <HistoryItem item={item} onMenuPress={handleOpenMenu} />}
          contentContainerStyle={styles.list}
          windowSize={5}
          initialNumToRender={5}
          maxToRenderPerBatch={10}
        />
      )}

      {/* Modal de Opções */}
      <Modal animationType='slide' transparent={true} visible={selectedItem !== null} onRequestClose={handleCloseMenu}>
        <Pressable style={styles.modalOverlay} onPress={handleCloseMenu}>
          <Pressable>
            {/* Adicionado para impedir que o clique feche o modal */}
            <View style={styles.menuContainer}>
              <Text style={styles.menuTitle}>{t('historyScreen.menu.title')}</Text>
              <TouchableOpacity
                style={styles.menuButton}
                onPress={() => {
                  Alert.alert(
                    t('historyScreen.menu.delete_confirmation_title'),
                    t('historyScreen.menu.delete_confirmation_message'),
                    [
                      {
                        text: t('historyScreen.menu.cancel_button'),
                        style: 'cancel',
                      },
                      {
                        text: t('historyScreen.menu.confirm_button'),
                        style: 'destructive',
                        onPress: handleDeleteItem,
                      },
                    ],
                  );
                }}>
                <Icon name='trash-outline' size={24} color='#d9534f' />
                <Text style={[styles.menuButtonText, {color: '#d9534f'}]}>{t('historyScreen.menu.delete_button')}</Text>
              </TouchableOpacity>
              <View style={styles.checkboxContainer}>
                <Checkbox value={deleteLocalFiles} onValueChange={setDeleteLocalFiles} />
                <Text style={styles.checkboxLabel}>{t('historyScreen.menu.checkbox_label')}</Text>
              </View>
            </View>
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
}

// --- Estilos ---
const styles = StyleSheet.create({
  pageContainer: {flex: 1, backgroundColor: '#E8E8E8'},
  center: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  list: {padding: 10, paddingBottom: 20},
  itemContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  thumbnailContainer: {
    width: '100%',
    height: 200,
    backgroundColor: '#000',
    borderRadius: 8,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  thumbnail: {width: '100%', height: '100%', position: 'absolute'},
  playIconContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    padding: 5,
    borderRadius: 50,
  },
  iconOverlay: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    flexDirection: 'row',
    padding: 8,
  },
  overlayIcon: {
    marginLeft: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 20,
    padding: 8,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  menuContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  menuTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  menuButton: {flexDirection: 'row', alignItems: 'center', paddingVertical: 15},
  menuButtonText: {fontSize: 17, marginLeft: 16},
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    alignSelf: 'center',
  },
  checkboxLabel: {marginLeft: 12, fontSize: 16, color: '#444'},
});

export default HistoryScreen;

              `}
            </CodeBlock>
          </Container>
          <Container>
            <DividerWithText>
              Análise Técnica do Componente HistoryScreen.tsx
            </DividerWithText>

            <Subtitle>1. Tipos e Constantes</Subtitle>
            <Paragraph>
              Esta seção define os tipos de dados e os valores constantes que serão utilizados em toda a tela, garantindo consistência e facilitando a manutenção.
            </Paragraph>
            <List>
              <li><strong>HistoryEntry:</strong> Reutiliza a mesma interface da HomeScreen para definir a estrutura de um item do histórico.</li>
              <li><strong>STORAGE_KEY:</strong> A mesma chave para acessar os dados corretos no <strong>AsyncStorage</strong>.</li>
              <li><strong>HistoryScreenNavigationProp:</strong> Um tipo específico para o hook <strong>useNavigation</strong> nesta tela.</li>
            </List>
            <CodeBlock language="typescript">
              {`// --- Tipos e Constantes ---
type HistoryEntry = {
  id: string;
  url: string;
  filePath: string;
  thumbnailPath: string;
  downloadedAt: string;
};
const STORAGE_KEY = '@video_history';
type HistoryScreenNavigationProp = StackNavigationProp<RootStackParamList, 'History'>;`}
            </CodeBlock>

            <Subtitle>2. Componente HistoryItem: O Item da Lista</Subtitle>
            <Paragraph>
              Este é um componente separado e otimizado, cuja única responsabilidade é renderizar um único item da lista do histórico. Separar a lógica do item da lógica da lista inteira é uma excelente prática de programação.
            </Paragraph>
            <List>
              <li><strong>React.memo(...):</strong> Este é um "Higher-Order Component" que otimiza a performance. Ele "memoriza" o resultado da renderização do componente. Se as props (<strong>item, onMenuPress</strong>) não mudarem, o React reutilizará a última renderização em vez de recriar o componente, o que torna a rolagem de listas longas muito mais fluida.</li>
              <li><strong>Lógica Interna:</strong> Inclui a função <strong>handleNavigateToPlayer()</strong> para ir à tela de vídeo, <strong>handleShare()</strong> para compartilhar o arquivo, e a importante chamada <strong>event.stopPropagation()</strong>, que impede que o toque nos ícones se propague para o contêiner principal.</li>
              <li><strong>Props:</strong> O componente recebe <strong>item</strong> (os dados a serem exibidos) e <strong>onMenuPress</strong> (uma função do componente pai para ser chamada quando o menu de opções é clicado).</li>
            </List>
            <CodeBlock language="typescript">
              {`const HistoryItem = React.memo(({item, onMenuPress}: {item: HistoryEntry; onMenuPress: (item: HistoryEntry) => void}) => {
    // ... lógica de navegação e compartilhamento ...
    return (
      <TouchableOpacity style={styles.itemContainer} onPress={handleNavigateToPlayer}>
        {/* ... Imagem, Ícone de Play e Ícones de Opções ... */}
        <View style={styles.iconOverlay}>
            <TouchableOpacity style={styles.overlayIcon} onPress={handleShare}>
              <Icon name='share-social-outline' size={24} color='#FFFFFF' />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.overlayIcon}
              onPress={e => {
                e.stopPropagation();
                onMenuPress(item);
              }}>
              <Icon name='ellipsis-vertical' size={24} color='#FFFFFF' />
            </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  },
);`}
            </CodeBlock>

            <Subtitle>3. Componente HistoryScreen: A Tela Principal</Subtitle>
            <Paragraph>Gerencia a lista completa de vídeos, o carregamento dos dados e a lógica de exclusão.</Paragraph>

            <Subtitle>3.1. Estados do Componente</Subtitle>
            <List>
              <li><strong>history:</strong> Um array que armazena todos os objetos <strong>HistoryEntry</strong> carregados do <strong>AsyncStorage</strong>.</li>
              <li><strong>isLoading:</strong> Um booleano para controlar a exibição do indicador de carregamento inicial.</li>
              <li><strong>selectedItem:</strong> Armazena o objeto do item que o usuário selecionou para abrir o menu de opções (o modal).</li>
              <li><strong>deleteLocalFiles:</strong> Um booleano que controla se os arquivos físicos devem ser apagados do dispositivo.</li>
            </List>
            <CodeBlock language="typescript">
              {`function HistoryScreen() {
  // --- Estados ---
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState<HistoryEntry | null>(null);
  const [deleteLocalFiles, setDeleteLocalFiles] = useState(true);

  // ... resto da lógica
}`}
            </CodeBlock>

            <Subtitle>3.2. Lógica de Carregamento e Manipulação de Dados</Subtitle>
            <Paragraph><strong>loadHistory():</strong> Função assíncrona responsável por buscar os dados do <strong>AsyncStorage</strong> e atualizar o estado <strong>history</strong>.</Paragraph>
            <Paragraph><strong>useFocusEffect():</strong> Garante que a função <strong>loadHistory()</strong> seja chamada toda vez que a tela entra em foco, mantendo a lista sempre atualizada.</Paragraph>
            <Paragraph><strong>handleDeleteItem():</strong> Lida com a exclusão de um item. Ele primeiro remove o item da UI para um feedback imediato (<strong>Atualização Otimista</strong>), e depois tenta apagar os dados do <strong>AsyncStorage</strong> e os arquivos físicos. Se algo der errado, ele reverte a UI ao seu estado original para garantir a consistência.</Paragraph>
            <CodeBlock language="typescript">
              {`const loadHistory = useCallback(async () => { /* ... */ });

useFocusEffect(
  useCallback(() => {
    setIsLoading(true);
    loadHistory();
  }, [loadHistory])
);

const handleDeleteItem = async () => {
  if (!selectedItem) return;
  // ... lógica de atualização otimista
  try {
    // ... apaga do AsyncStorage e RNFS
  } catch (error) {
    // ... reverte a UI em caso de erro
    loadHistory();
  }
};`}
            </CodeBlock>

            <Subtitle>3.3. Manipuladores do Menu Modal</Subtitle>
            <Paragraph>Estas são funções simples para controlar a visibilidade do menu de opções.</Paragraph>
            <List>
              <li><strong>handleOpenMenu():</strong> Chamada pelo <strong>HistoryItem</strong>. Ela recebe o item selecionado e o armazena no estado <strong>selectedItem</strong>, fazendo o modal aparecer.</li>
              <li><strong>handleCloseMenu():</strong> Define <strong>selectedItem</strong> como <strong>null</strong>, o que esconde o modal.</li>
            </List>
            <CodeBlock language="typescript">
              {`const handleOpenMenu = (item: HistoryEntry) => {
  setSelectedItem(item);
};

const handleCloseMenu = () => {
  setSelectedItem(null);
};`}
            </CodeBlock>

            <Subtitle>3.4. Renderização</Subtitle>
            <Paragraph>O <strong>if (isLoading)</strong> no início do bloco de renderização é uma "guarda". Se <strong>isLoading</strong> for <strong>true</strong>, ele retorna apenas um indicador de carregamento e interrompe a execução do resto da função de renderização.</Paragraph>
            <CodeBlock language="typescript">
              {`if (isLoading) {
  return (
    <View style={styles.center}>
      <ActivityIndicator size='large' color='#841584' />
    </View>
  );
}`}
            </CodeBlock>
          </Container>
          <Container>
            <Subtitle>4. Análise do JSX: A Interface do Usuário (HistoryScreen)</Subtitle>
            <Paragraph>
              Este é o código que define o que é efetivamente desenhado na tela, baseado no estado atual do componente.
            </Paragraph>

            <Subtitle>4.1. Contêiner Principal e Renderização Condicional</Subtitle>
            <Paragraph>
              A primeira decisão que a UI toma é: "Eu tenho itens no histórico para mostrar ou a lista está vazia?".
            </Paragraph>
            <List>
              <li><strong>&lt;View style={"{styles.pageContainer}"}&gt;:</strong> Um contêiner que envolve toda a página para aplicar um estilo base.</li>
              <li><strong>Renderização Condicional (history.length === 0 ? ... : ...):</strong> Um operador ternário que funciona como um <strong>if/else</strong> para a renderização. Se o array <strong>history</strong> estiver vazio, ele renderiza uma mensagem; caso contrário, renderiza o componente <strong>&lt;FlatList&gt;</strong>.</li>
            </List>
            <CodeBlock language="jsx">
              {`return (
  <View style={styles.pageContainer}>
    {history.length === 0 ? (
      <View style={styles.center}>
        <Text>{t('historyScreen.empty_state')}</Text>
      </View>
    ) : (
      // ... A FlatList é renderizada aqui
    )}
    {/* ... O Modal é renderizado aqui */}
  </View>
);`}
            </CodeBlock>

            <Subtitle>4.2. A Lista de Histórico (&lt;FlatList&gt;)</Subtitle>
            <Paragraph>
              <strong>&lt;FlatList&gt;</strong> é o componente principal do React Native para exibir listas longas de dados de forma eficiente.
            </Paragraph>
            <List>
              <li><strong>data={"{history}"}:</strong> A prop mais importante. Informa à <strong>FlatList</strong> que a fonte de dados é o array que está no estado <strong>history</strong>.</li>
              <li><strong>keyExtractor={"{item => item.id}"}:</strong> Uma função de otimização crucial. Ela diz à <strong>FlatList</strong> como encontrar um identificador único para cada item, permitindo que o React gerencie a lista de forma eficiente.</li>
              <li><strong>renderItem={"{({item}) => ...}"}:</strong> Diz à <strong>FlatList</strong> como renderizar cada item. Aqui, estamos usando nosso componente customizado <strong>HistoryItem</strong> e passando a ele a prop <strong>item</strong> (os dados do item) e a prop <strong>onMenuPress</strong> (a função para abrir o menu de opções).</li>
              <li><strong>Props de Performance:</strong> <strong>windowSize</strong>, <strong>initialNumToRender</strong>, e <strong>maxToRenderPerBatch</strong> otimizam o uso de memória e a velocidade de renderização em listas muito longas.</li>
            </List>
            <CodeBlock language="jsx">
              {`<FlatList
  data={history}
  keyExtractor={item => item.id}
  renderItem={({item}) => <HistoryItem item={item} onMenuPress={handleOpenMenu} />}
  contentContainerStyle={styles.list}
  windowSize={5}
  initialNumToRender={5}
  maxToRenderPerBatch={10}
/>`}
            </CodeBlock>

            <Subtitle>4.3. O Menu Modal de Opções (&lt;Modal&gt;)</Subtitle>
            <Paragraph>
              <strong>&lt;Modal&gt;</strong> é um componente que apresenta conteúdo por cima da tela atual. É usado aqui para o menu de opções de cada item.
            </Paragraph>
            <List>
              <li><strong>Props do Modal:</strong> As props <strong>animationType</strong>, <strong>transparent</strong>, <strong>visible</strong> e <strong>onRequestClose</strong> controlam como o modal aparece, seu fundo, sua visibilidade (ligada ao estado <strong>selectedItem</strong>) e como ele se fecha.</li>
              <li><strong>Lógica de Fechamento do Overlay:</strong> O <strong>&lt;Pressable&gt;</strong> externo funciona como um fundo escurecido que, ao ser tocado, fecha o modal. O <strong>&lt;Pressable&gt;</strong> interno "captura" o toque no menu, impedindo que o modal se feche acidentalmente.</li>
              <li><strong>Conteúdo do Menu:</strong> O botão de deletar usa a API <strong>Alert.alert</strong> para mostrar uma caixa de diálogo de confirmação nativa antes de executar a exclusão. O <strong>&lt;Checkbox&gt;</strong> é um componente controlado, cujo estado está ligado diretamente à variável <strong>deleteLocalFiles</strong>.</li>
            </List>
            <CodeBlock language="jsx">
              {`{/* Modal de Opções */}
<Modal 
  animationType='slide' 
  transparent={true} 
  visible={selectedItem !== null} 
  onRequestClose={handleCloseMenu}
>
  <Pressable style={styles.modalOverlay} onPress={handleCloseMenu}>
    <Pressable> 
      <View style={styles.menuContainer}>
        <Text style={styles.menuTitle}>{t('historyScreen.menu.title')}</Text>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => {
            Alert.alert(
              t('historyScreen.menu.delete_confirmation_title'),
              t('historyScreen.menu.delete_confirmation_message'),
              [
                { text: t('historyScreen.menu.cancel_button'), style: 'cancel' },
                { text: t('historyScreen.menu.confirm_button'), style: 'destructive', onPress: handleDeleteItem },
              ],
            );
          }}>
          {/* ... Ícone e Texto do Botão ... */}
        </TouchableOpacity>
        <View style={styles.checkboxContainer}>
          <Checkbox value={deleteLocalFiles} onValueChange={setDeleteLocalFiles} />
          <Text style={styles.checkboxLabel}>{t('historyScreen.menu.checkbox_label')}</Text>
        </View>
      </View>
    </Pressable>
  </Pressable>
</Modal>`}
            </CodeBlock>
          </Container>
          <Container>
            <Subtitle>5. Análise dos Estilos (StyleSheet)</Subtitle>
            <Paragraph>
              O objeto <strong>styles</strong> define a aparência de todos os componentes visuais que acabamos de analisar no JSX.
            </Paragraph>

            <Subtitle>5.1. Estilos Gerais da Página</Subtitle>
            <Paragraph>
              Estes estilos definem o layout e a aparência da tela como um todo.
            </Paragraph>
            <List>
              <li><strong>pageContainer:</strong> Aplica-se à <strong>&lt;View&gt;</strong> principal da tela. <strong>flex: 1</strong> faz com que o contêiner ocupe todo o espaço vertical disponível, e <strong>backgroundColor</strong> define a cor de fundo.</li>
              <li><strong>center:</strong> Um estilo utilitário para centralizar conteúdo tanto vertical (<strong>justifyContent: 'center'</strong>) quanto horizontalmente (<strong>alignItems: 'center'</strong>).</li>
            </List>
            <CodeBlock language="javascript">
              {`const styles = StyleSheet.create({
  pageContainer: {
    flex: 1, 
    backgroundColor: '#E8E8E8'
  },
  center: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },`}
            </CodeBlock>

            <Subtitle>5.2. Estilos da Lista e Itens</Subtitle>
            <Paragraph>
              Estes estilos controlam a aparência da <strong>&lt;FlatList&gt;</strong> e de cada item (<strong>HistoryItem</strong>) dentro dela.
            </Paragraph>
            <Paragraph><strong>list:</strong> Aplica espaçamento (<strong>padding</strong>) ao redor de toda a lista para que os itens não colem nas bordas da tela.</Paragraph>
            <CodeBlock language="javascript">
              {`  list: {
    padding: 10, 
    paddingBottom: 20
  },`}
            </CodeBlock>
            <Paragraph><strong>itemContainer:</strong> O estilo do "card" de cada item. Define a cor de fundo, cantos arredondados (<strong>borderRadius</strong>), espaçamento entre os cards (<strong>marginBottom</strong>) e um efeito de sombra (<strong>elevation</strong> e <strong>shadow*</strong>).</Paragraph>
            <CodeBlock language="javascript">
              {`  itemContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    /* ...outras props de sombra... */
  },`}
            </CodeBlock>
            <Paragraph><strong>thumbnailContainer e thumbnail:</strong> O primeiro cria a área da imagem com tamanho fixo e cantos arredondados, usando <strong>overflow: 'hidden'</strong> para cortar qualquer conteúdo que exceda esses limites. O segundo (<strong>thumbnail</strong>) usa <strong>position: 'absolute'</strong> para se posicionar como um fundo que preenche 100% do seu pai.</Paragraph>
            <CodeBlock language="javascript">
              {`  thumbnailContainer: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  thumbnail: {
    width: '100%', 
    height: '100%', 
    position: 'absolute'
  },`}
            </CodeBlock>
            <Paragraph><strong>playIconContainer, iconOverlay e overlayIcon:</strong> Estilos para os ícones que ficam sobre a imagem. <strong>playIconContainer</strong> centraliza o ícone de play principal. <strong>iconOverlay</strong> usa <strong>position: 'absolute'</strong> e <strong>flexDirection: 'row'</strong> para posicionar os ícones de ação no canto inferior direito, lado a lado.</Paragraph>
            <CodeBlock language="javascript">
              {`  playIconContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    padding: 5,
    borderRadius: 50,
  },
  iconOverlay: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    flexDirection: 'row',
    padding: 8,
  },
  overlayIcon: {
    marginLeft: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 20,
    padding: 8,
  },`}
            </CodeBlock>

            <Subtitle>5.3. Estilos do Menu Modal</Subtitle>
            <Paragraph>
              Estilos que definem a aparência do menu de opções que desliza de baixo para cima.
            </Paragraph>
            <Paragraph><strong>modalOverlay e menuContainer:</strong> O primeiro cria o fundo escurecido que ocupa toda a tela (<strong>flex: 1</strong>) e empurra o menu para baixo (<strong>justifyContent: 'flex-end'</strong>). O segundo é o contêiner branco do menu, com cantos superiores arredondados.</Paragraph>
            <CodeBlock language="javascript">
              {`  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  menuContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },`}
            </CodeBlock>
            <Paragraph><strong>Estilos de Texto e Botões do Menu:</strong> Estiliza o título, os botões e os textos dentro do menu, usando <strong>flexDirection: 'row'</strong> para alinhar ícones e textos horizontalmente.</Paragraph>
            <CodeBlock language="javascript">
              {`  menuTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    /* ... */
  },
  menuButton: {
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingVertical: 15
  },
  menuButtonText: {
    fontSize: 17, 
    marginLeft: 16
  },`}
            </CodeBlock>
            <Paragraph><strong>Estilos do Checkbox:</strong> O <strong>checkboxContainer</strong> usa <strong>flexDirection: 'row'</strong> e <strong>alignItems: 'center'</strong> para alinhar o checkbox e seu texto lado a lado.</Paragraph>
            <CodeBlock language="javascript">
              {`  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    alignSelf: 'center',
  },
  checkboxLabel: {
    marginLeft: 12, 
    fontSize: 16, 
    color: '#444'
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
export default HistoryScreen;