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
const HomeScreen = () => {
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
            <DividerWithText>Análise Técnica do Componente HomeScreen.tsx</DividerWithText>
            <Subtitle>HomeScreen.tsx</Subtitle>
            <CodeBlock language="jsx">{`
            // src/screens/HomeScreen.tsx
import React, {useState, useEffect, useRef, useCallback} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  Keyboard,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';

import Clipboard from '@react-native-clipboard/clipboard';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import type {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../App';
import Icon from 'react-native-vector-icons/Ionicons';
import {createThumbnail} from 'react-native-create-thumbnail';
import {PERMISSIONS, requestMultiple, RESULTS} from 'react-native-permissions';
import RNFS from 'react-native-fs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useTranslation} from 'react-i18next';

// --- Interfaces e Tipos ---

/**
 * @interface HistoryEntry
 * @description Define a estrutura de um item do histórico de downloads.
 * @property {string} id - Identificador único da entrada (timestamp).
 * @property {string} url - A URL original do vídeo fornecida pelo usuário.
 * @property {string} filePath - O caminho local no dispositivo onde o vídeo foi salvo.
 * @property {string} thumbnailPath - O caminho local no dispositivo onde a miniatura do vídeo foi salva.
 * @property {string} downloadedAt - A data e hora do download no formato ISO.
 */
export interface HistoryEntry {
  id: string;
  url: string;
  filePath: string;
  thumbnailPath: string;
  downloadedAt: string;
}

/**
 * @type {HomeScreenNavigationProp}
 * @description Define o tipo para a propriedade de navegação da tela Home,
 * garantindo a tipagem correta para o hook 'useNavigation'.
              */
              type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

              // --- Constantes ---

              const STORAGE_KEY = '@video_history';
              const HEADER_HEIGHT = 100;
              const BACKEND_URL = 'https://api-production-3306.up.railway.app';

              // --- Componente Principal: HomeScreen ---

              /**
               * @component HomeScreen
               * @description A tela principal da aplicação. Permite ao usuário colar uma URL de vídeo,
               * iniciar o processo de download, visualizar o progresso e ver o vídeo mais recente baixado.
               */
              function HomeScreen() {
  // --- Hooks ---
  const {t} = useTranslation();
              const navigation = useNavigation<HomeScreenNavigationProp>();

                // --- Estados (States) ---
                const [videoUrl, setVideoUrl] = useState<string>('');
                  const [isLoading, setIsLoading] = useState<boolean>(false);
                    const [statusMessage, setStatusMessage] = useState<string>(t('status.initial'));
                      const [currentJob, setCurrentJob] = useState<{id: string; url: string} | null>(null);
                      const [recentVideo, setRecentVideo] = useState<HistoryEntry | null>(null);

                      // --- Referências (Refs) ---
                      const pollingIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // --- Lógica de Histórico e Foco da Tela ---

  /**
   * @function loadRecentVideo
   * @description Carrega o vídeo mais recente do histórico a partir do AsyncStorage.
   * A função é memoizada com 'useCallback' para evitar recriações desnecessárias.
              */
  const loadRecentVideo = useCallback(async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
              const history = jsonValue != null ? JSON.parse(jsonValue) : [];
      setRecentVideo(history.length > 0 ? history[0] : null);
    } catch (e) {
                console.error('Falha ao carregar o vídeo recente.', e);
    }
  }, []);

              /**
               * @hook useFocusEffect
               * @description Executa a função 'loadRecentVideo' toda vez que a tela entra em foco,
              * garantindo que o vídeo mais recente seja sempre exibido.
              */
              useFocusEffect(
    useCallback(() => {
                loadRecentVideo();
    }, [loadRecentVideo]),
              );

  /**
   * @function saveToHistory
   * @description Salva uma nova entrada de vídeo no histórico do AsyncStorage.
   * @param {string} originalUrl - A URL original do vídeo.
              * @param {string} finalFilePath - O caminho final do arquivo de vídeo salvo.
              * @param {string} thumbnailPath - O caminho do arquivo da miniatura gerada.
              */
  const saveToHistory = async (originalUrl: string, finalFilePath: string, thumbnailPath: string) => {
    try {
      const newEntry: HistoryEntry = {
                id: new Date().getTime().toString(),
              url: originalUrl,
              filePath: finalFilePath,
              thumbnailPath: thumbnailPath,
              downloadedAt: new Date().toISOString(),
      };
              const existingHistoryJson = await AsyncStorage.getItem(STORAGE_KEY);
              const existingHistory: HistoryEntry[] = existingHistoryJson ? JSON.parse(existingHistoryJson) : [];
              const updatedHistory = [newEntry, ...existingHistory];
              await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedHistory));
              setRecentVideo(newEntry);
    } catch (e) {
                console.error('Falha ao salvar no histórico.', e);
    }
  };

  // --- Lógica Principal de Download ---

  /**
   * @function handleDownloadPress
   * @description Função principal que inicia o processo de download. Ela valida a URL,
   * solicita permissões de armazenamento, e envia a requisição inicial para o backend.
   */
  const handleDownloadPress = async () => {
    const trimmedUrl = videoUrl.trim();
              if (!trimmedUrl) {
                Alert.alert(t('alerts.invalid_input_title'), t('alerts.invalid_input_message'));
              return;
    }

              Keyboard.dismiss();
              const hasPermission = await requestStoragePermission();
              if (!hasPermission) return;

              setIsLoading(true);
              setStatusMessage(t('status.sending_request'));

              try {
      const response = await fetch('$ {BACKEND_URL}/download', {
                method: 'POST',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({url: trimmedUrl}),
      });

              const data = await response.json();
              if (!response.ok) {
        throw new Error(data.message || t('alerts.unknown_server_error_message'));
      }

              setStatusMessage(t('status.request_queued'));
              setCurrentJob({id: data.requestId, url: trimmedUrl});
              setVideoUrl('');
    } catch (error: any) {
                console.error('Erro ao iniciar download:', error);
              Alert.alert(t('alerts.connection_error_title'), error.message);
              setIsLoading(false);
    }
  };

  /**
   * @function requestStoragePermission
   * @description Verifica e solicita permissões de leitura e escrita no armazenamento externo para Android.
   * Para Android 10 (API 29) e superior, ou outras plataformas, retorna 'true' diretamente,
              * pois o acesso via 'RNFS.ExternalDirectoryPath' não exige permissão explícita.
              * @returns {Promise < boolean >} Retorna 'true' se a permissão for concedida, 'false' caso contrário.
              */
              const requestStoragePermission = async (): Promise<boolean> => {
    if (Platform.OS !== 'android' || Platform.Version >= 29) {
      return true;
    }
                try {
      const granted = await requestMultiple([PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE, PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE]);
                const writePermission = granted[PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE];
                const readPermission = granted[PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE];

                if (writePermission === RESULTS.GRANTED && readPermission === RESULTS.GRANTED) {
        return true;
      } else {
                  Alert.alert(t('alerts.permission_needed_title'), t('alerts.permission_needed_message'));
                return false;
      }
    } catch (error) {
                  console.error('Erro ao solicitar permissões:', error);
                return false;
    }
  };

  /**
   * @hook useEffect (Polling)
   * @description Observa o estado 'currentJob'. Quando um novo job é definido,
   * inicia um "polling" (verificação periódica) para consultar o status do job no backend.
   * Limpa o intervalo quando o componente é desmontado ou o job é finalizado.
   */
  useEffect(() => {
    if (currentJob) {
                  pollingIntervalRef.current = setInterval(() => {
                    checkStatus(currentJob.id, currentJob.url);
                  }, 5000); // Verifica a cada 5 segundos
    }
    return () => {
                  stopPolling(); // Função de limpeza
    };
  }, [currentJob]);

  /**
   * @function checkStatus
   * @description Consulta o endpoint de status do backend para verificar o progresso do job de download.
   * Com base na resposta, atualiza a UI ou inicia a próxima etapa (download final).
   * @param {string} jobId - O ID do job retornado pelo backend.
                * @param {string} originalUrl - A URL original do vídeo, para salvar no histórico.
                */
  const checkStatus = async (jobId: string, originalUrl: string) => {
    try {
      const response = await fetch('$ {BACKEND_URL}/status/$ {jobId}');
                const data = await response.json();

                switch (data.status) {
        case 'completed':
                stopPolling();
                setStatusMessage(t('status.processed_downloading'));
                if (data.fileKey) {
            const backendDownloadUrl = '$ {BACKEND_URL}/download/$ {data.fileKey}';
                await startFinalDownload(jobId, originalUrl, backendDownloadUrl);
          } else {
            throw new Error(t('alerts.invalid_filekey_message'));
          }
                break;

                case 'failed':
                stopPolling();
                Alert.alert(t('alerts.processing_failed_title'), t('alerts.processing_failed_message', {reason: data.reason}));
                setIsLoading(false);
                setCurrentJob(null);
                break;

                case 'processing':
                setStatusMessage(t('status.processing_server'));
                break;

                case 'not_found':
                stopPolling();
                Alert.alert(t('alerts.error_title'), t('alerts.job_not_found_message'));
                setIsLoading(false);
                setCurrentJob(null);
                break;
      }
    } catch (error) {
                  stopPolling();
                Alert.alert(t('alerts.connection_error_title'), t('alerts.status_check_failed_message'));
                setIsLoading(false);
                setCurrentJob(null);
    }
  };

  /**
   * @function startFinalDownload
   * @description Baixa o arquivo de vídeo processado do backend para o armazenamento local do dispositivo.
   * Após o download, gera uma miniatura, salva no histórico e notifica o usuário.
   * @param {string} jobId - O ID do job para nomear o arquivo.
                * @param {string} originalUrl - A URL original para salvar no histórico.
                * @param {string} backendDownloadUrl - A URL do backend para baixar o arquivo.
                */
  const startFinalDownload = async (jobId: string, originalUrl: string, backendDownloadUrl: string) => {
    const downloadDestPath = '$ {RNFS.ExternalDirectoryPath}/DownloadedVideos/video_$ {jobId}.mp4';
                try {
                  await RNFS.mkdir('$ {RNFS.ExternalDirectoryPath}/DownloadedVideos');

                const response = await fetch(backendDownloadUrl);
                const finalCloudflareUrl = response.url; // URL final após redirecionamentos
                if (!response.ok) {
        throw new Error(t('alerts.server_response_error', {status: response.status}));
      }

                const download = RNFS.downloadFile({
                  fromUrl: finalCloudflareUrl,
                toFile: downloadDestPath,
        progress: res => {
          const percentage = ((res.bytesWritten / res.contentLength) * 100).toFixed(0);
                setStatusMessage(t('status.downloading_device', {percentage}));
        },
      });

                const result = await download.promise;

                if (result.statusCode === 200) {
                  setStatusMessage(t('status.generating_thumbnail'));
                const thumbnail = await createThumbnail({
                  url: 'file://$ {downloadDestPath}',
                timeStamp: 1000,
        });
                await saveToHistory(originalUrl, downloadDestPath, thumbnail.path);
                Alert.alert(t('alerts.success_title'), t('alerts.success_message'));
      } else {
        throw new Error(t('alerts.file_server_response_error', {status: result.statusCode}));
      }
    } catch (error) {
                  console.error('Erro no download final:', error);
                Alert.alert(t('alerts.save_error_title'), t('alerts.save_error_message'));
                setStatusMessage(t('status.save_error'));
    } finally {
                  setIsLoading(false);
                setCurrentJob(null);
    }
  };

  /**
   * @function stopPolling
   * @description Para a verificação periódica de status, limpando o intervalo.
   */
  const stopPolling = () => {
    if (pollingIntervalRef.current) {
                  clearInterval(pollingIntervalRef.current);
                pollingIntervalRef.current = null;
    }
  };

  // --- Funções Utilitárias ---

  /**
   * @function handlePaste
   * @description Pega o conteúdo da área de transferência (clipboard) e o insere no campo de texto da URL.
   */
  const handlePaste = async () => {
    try {
      const text = await Clipboard.getString();
                setVideoUrl(text);
                setStatusMessage(t('status.pasted'));
    } catch (e) {
                  console.error('Falha ao colar do clipboard', e);
                setStatusMessage(t('status.paste_error'));
    }
  };

                // --- Renderização do Componente ---
                return (
                <SafeAreaView style={styles.safeArea}>
                  <StatusBar backgroundColor='transparent' translucent={false} barStyle='dark-content' />
                  <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.keyboardAvoidingContainer} keyboardVerticalOffset={HEADER_HEIGHT}>
                    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps='handled'>
                      {/* Seção de Vídeo Recente */}
                      {recentVideo && (
                        <View style={styles.recentVideoSection}>
                          <Text style={styles.sectionTitle}>{t('homeScreen.recent_video')}</Text>
                          <TouchableOpacity
                            style={styles.thumbnailTouchable}
                            onPress={() =>
                              navigation.navigate('VideoPlayer', {
                                filePath: recentVideo.filePath,
                              })
                            }>
                            <Image source={{ uri: 'file://$ {recentVideo.thumbnailPath}' }} style={styles.thumbnail} />
                            <View style={styles.playIconContainer}>
                              <Icon name='play-circle' size={60} color='rgba(255, 255, 255, 0.9)' />
                            </View>
                          </TouchableOpacity>
                        </View>
                      )}

                      {/* Seção do Formulário de Download */}
                      <View style={styles.formSection}>
                        <Text style={styles.title}>{t('homeScreen.new_download')}</Text>
                        <Text style={styles.status}>{statusMessage}</Text>
                        <TextInput
                          style={styles.input}
                          placeholder={t('homeScreen.url_input_placeholder')}
                          placeholderTextColor='#999'
                          value={videoUrl}
                          onChangeText={setVideoUrl}
                          editable={!isLoading && !currentJob}
                        />
                        {isLoading ? (
                          <ActivityIndicator size='large' color='#841584' style={styles.activityIndicator} />
                        ) : (
                          <View style={styles.buttonContainer}>
                            <View style={styles.buttonWrapper}>
                              <Button title={t('homeScreen.paste_link_button')} onPress={handlePaste} color='#5bc0de' />
                            </View>
                            <View style={styles.buttonWrapper}>
                              <Button title={t('homeScreen.download_button')} onPress={handleDownloadPress} color='#841584' />
                            </View>
                            <View style={styles.buttonWrapper}>
                              <Button title={'Go to Details'} onPress={() => navigation.navigate('MainLayoutScreen')} />
                            </View>
                          </View>
                        )}
                      </View>
                    </ScrollView>
                  </KeyboardAvoidingView>
                </SafeAreaView>
                );
}

                // --- Estilos (StyleSheet) ---
                const styles = StyleSheet.create({
                  safeArea: {flex: 1, backgroundColor: '#f4f4f8'},
                keyboardAvoidingContainer: {flex: 1},
                container: {
                  flexGrow: 1,
                padding: 20,
  },
                recentVideoSection: {
                  marginBottom: 40,
  },
                sectionTitle: {
                  fontSize: 20,
                fontWeight: 'bold',
                color: '#333',
                marginBottom: 15,
  },
                thumbnailTouchable: {
                  width: '100%',
                height: 200,
                borderRadius: 12,
                backgroundColor: '#000',
                justifyContent: 'center',
                alignItems: 'center',
                elevation: 4,
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
  },
                thumbnail: {
                  width: '100%',
                height: '100%',
                borderRadius: 12,
  },
                playIconContainer: {
                  position: 'absolute',
  },
                formSection: { },
                title: {
                  fontSize: 26,
                fontWeight: 'bold',
                textAlign: 'center',
                marginBottom: 10,
                color: '#333',
  },
                status: {
                  fontSize: 16,
                textAlign: 'center',
                marginBottom: 20,
                color: '#555',
                minHeight: 40,
  },
                input: {
                  height: 50,
                backgroundColor: '#FFFFFF',
                borderColor: '#DDD',
                borderWidth: 1,
                borderRadius: 8,
                paddingHorizontal: 15,
                marginBottom: 20,
                fontSize: 16,
                color: '#333',
  },
                buttonContainer: {
                  flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
  },
                buttonWrapper: {
                  flex: 1,
                marginHorizontal: 5,
  },
                activityIndicator: {
                  marginTop: 10,
                alignSelf: 'center',
  },
});

            `}
            </CodeBlock>
          </Container>
          <Container>
            <DividerWithText>
              Análise Técnica do Componente HomeScreen.tsx
            </DividerWithText>

            <Subtitle>1. Interfaces e Tipos: Definindo as Estruturas de Dados</Subtitle>
            <Paragraph>
              Esta seção define os "contratos" ou "plantas" para os dados que o componente irá manipular. Usar TypeScript aqui garante que os dados tenham sempre o formato esperado, evitando erros.
            </Paragraph>
            <Paragraph><strong>Interface HistoryEntry:</strong> Define a estrutura de um único item no histórico de downloads.</Paragraph>
            <CodeBlock language="typescript">
              {`export interface HistoryEntry {
  id: string;
  url: string;
  filePath: string;
  thumbnailPath: string;
  downloadedAt: string;
}`}
            </CodeBlock>
            <Paragraph><strong>Tipo HomeScreenNavigationProp:</strong> Este é um tipo customizado para o hook <strong>useNavigation</strong>. Ele informa ao TypeScript que o objeto <strong>navigation</strong> nesta tela pode navegar para as rotas definidas em <strong>RootStackParamList</strong>.</Paragraph>
            <CodeBlock language="typescript">
              {`type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;`}
            </CodeBlock>

            <Subtitle>2. Constantes: Valores Fixos e de Configuração</Subtitle>
            <Paragraph>
              Aqui são declaradas variáveis que não mudarão durante a execução do componente. Centralizá-las facilita a manutenção do código.
            </Paragraph>
            <List>
              <li><strong>STORAGE_KEY:</strong> A chave única usada para salvar e recuperar a lista de histórico do <strong>AsyncStorage</strong>.</li>
              <li><strong>HEADER_HEIGHT:</strong> Um valor para ajudar no cálculo do deslocamento do teclado.</li>
              <li><strong>BACKEND_URL:</strong> A URL base do servidor que processa os vídeos.</li>
            </List>
            <CodeBlock language="javascript">
              {`const STORAGE_KEY = '@video_history';
const HEADER_HEIGHT = 100;
const BACKEND_URL = 'https://api-production-3306.up.railway.app';`}
            </CodeBlock>

            <Subtitle>3. Lógica Interna do Componente HomeScreen</Subtitle>
            <Paragraph>Aqui começa a definição do componente em si, contendo toda a sua lógica e comportamento.</Paragraph>

            <Subtitle>3.1. Hooks, Estados e Referências: O Cérebro do Componente</Subtitle>
            <Paragraph>Este bloco inicializa os "mecanismos" que o componente usará para gerenciar seus dados e estado.</Paragraph>
            <List>
              <li><strong>Hooks de Inicialização:</strong> <strong>useTranslation()</strong> prepara a função de tradução e <strong>useNavigation()</strong> fornece o objeto para mudar de tela.</li>
              <li><strong>Estados (useState):</strong> São as variáveis que guardam os dados que mudam e afetam o que é exibido na tela (<strong>videoUrl</strong>, <strong>isLoading</strong>, <strong>statusMessage</strong>, etc.).</li>
              <li><strong>Referências (useRef):</strong> Guarda valores que precisam persistir entre renderizações, mas que não devem causar uma nova renderização quando alterados, como o ID de um timer (<strong>pollingIntervalRef</strong>).</li>
            </List>
            <CodeBlock language="typescript">
              {`function HomeScreen() {
  // --- Hooks ---
  const {t} = useTranslation();
  const navigation = useNavigation<HomeScreenNavigationProp>();

  // --- Estados (States) ---
  const [videoUrl, setVideoUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<string>(t('status.initial'));
  const [currentJob, setCurrentJob] = useState<{id: string; url: string} | null>(null);
  const [recentVideo, setRecentVideo] = useState<HistoryEntry | null>(null);

  // --- Referências (Refs) ---
  const pollingIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // ... resto da lógica
}`}
            </CodeBlock>

            <Subtitle>3.2. Lógica de Histórico e Foco da Tela</Subtitle>
            <Paragraph>Este bloco de código gerencia como os dados do histórico são carregados, salvos e atualizados.</Paragraph>
            <List>
              <li><strong>loadRecentVideo():</strong> Lê o histórico do <strong>AsyncStorage</strong> e atualiza o estado <strong>recentVideo</strong>.</li>
              <li><strong>useFocusEffect():</strong> Um hook que executa <strong>loadRecentVideo()</strong> toda vez que o usuário entra nesta tela, garantindo que a UI esteja sempre atualizada.</li>
              <li><strong>saveToHistory():</strong> Salva um novo item no histórico do <strong>AsyncStorage</strong> após um download ser concluído.</li>
            </List>
            <CodeBlock language="typescript">
              {`// --- Lógica de Histórico e Foco da Tela ---
const loadRecentVideo = useCallback(async () => { /* ... */ });

useFocusEffect(
  useCallback(() => { loadRecentVideo(); }, [loadRecentVideo])
);

const saveToHistory = async (/*...*/) => { /* ... */ };`}
            </CodeBlock>

            <Subtitle>3.3. Lógica Principal de Download</Subtitle>
            <Paragraph>Este é o fluxo central da aplicação, dividido em funções que representam cada etapa do processo.</Paragraph>

            <Paragraph><strong>handleDownloadPress():</strong> É o ponto de partida. Valida a URL, pede permissão de armazenamento e envia a requisição inicial para o backend, obtendo um <strong>requestId</strong> para iniciar o processo.</Paragraph>
            <CodeBlock language="typescript">{`const handleDownloadPress = async () => { /* ... */ };`}</CodeBlock>

            <Paragraph><strong>requestStoragePermission():</strong> Uma função auxiliar que lida com a lógica de permissões de acesso a arquivos no Android.</Paragraph>
            <CodeBlock language="typescript">{`const requestStoragePermission = async (): Promise<boolean> => { /* ... */ };`}</CodeBlock>

            <Paragraph><strong>useEffect() (Polling):</strong> Este hook "observa" a variável <strong>currentJob</strong>. Quando ela é preenchida, ele inicia um timer (<strong>setInterval</strong>) que chama a função <strong>checkStatus()</strong> repetidamente.</Paragraph>
            <CodeBlock language="typescript">{`useEffect(() => { /* ... */ }, [currentJob]);`}</CodeBlock>

            <Paragraph><strong>checkStatus():</strong> Consulta o backend para saber o progresso do trabalho. Dependendo da resposta ('completed', 'failed', 'processing'), ele toma a próxima ação.</Paragraph>
            <CodeBlock language="typescript">{`const checkStatus = async (jobId: string, originalUrl: string) => { /* ... */ };`}</CodeBlock>

            <Paragraph><strong>startFinalDownload():</strong> A etapa final. Usa <strong>RNFS.downloadFile</strong> para baixar o vídeo, cria uma miniatura com <strong>createThumbnail()</strong> e salva no histórico com <strong>saveToHistory()</strong>.</Paragraph>
            <CodeBlock language="typescript">{`const startFinalDownload = async (/*...*/) => { /* ... */ };`}</CodeBlock>

            <Subtitle>3.4. Funções Utilitárias</Subtitle>
            <Paragraph>Funções de apoio que realizam tarefas menores.</Paragraph>
            <List>
              <li><strong>stopPolling():</strong> Limpa o timer <strong>setInterval</strong> para parar as verificações repetidas.</li>
              <li><strong>handlePaste():</strong> Usa a API do <strong>Clipboard</strong> para colar texto no campo de URL.</li>
            </List>
            <CodeBlock language="typescript">
              {`const stopPolling = () => {
  if (pollingIntervalRef.current) {
    clearInterval(pollingIntervalRef.current);
    pollingIntervalRef.current = null;
  }
};

const handlePaste = async () => { /* ... */ };`}
            </CodeBlock>
          </Container>
          <Container>
            <DividerWithText>
              Análise do JSX: A Estrutura Visual da Tela
            </DividerWithText>
            <Paragraph>
              O bloco <strong>return (...)</strong> descreve o que o usuário vê na tela. Ele monta a interface do usuário (UI) usando componentes do React Native e conecta as ações do usuário (toques, digitação) às funções lógicas que definimos anteriormente. A estrutura é analisada de fora para dentro.
            </Paragraph>

            <Subtitle>4.1. Componentes Estruturais Principais</Subtitle>
            <Paragraph>
              Estes são os componentes que organizam o layout geral da tela, lidando com o teclado e a área visível do dispositivo.
            </Paragraph>
            <List>
              <li><strong>&lt;SafeAreaView&gt;:</strong> O contêiner mais externo. Sua função técnica é aplicar um padding automático para garantir que o conteúdo não seja cortado por elementos físicos da tela, como o "notch" (entalhe) em iPhones ou a barra de gestos do Android.</li>
              <li><strong>&lt;StatusBar&gt;:</strong> Controla a aparência da barra de status do sistema (onde ficam o relógio, sinal de wi-fi, etc.). As props <strong>backgroundColor</strong> e <strong>barStyle</strong> definem a cor de fundo e a cor dos ícones, respectivamente.</li>
              <li><strong>&lt;KeyboardAvoidingView&gt;:</strong> Um componente essencial para telas com formulários. Ele ajusta a altura ou o padding da tela quando o teclado aparece, evitando que ele cubra o campo de texto. A prop <strong>behavior</strong> define como esse ajuste é feito, sendo diferente para <strong>ios</strong> e <strong>android</strong>.</li>
              <li><strong>&lt;ScrollView&gt;:</strong> Permite que todo o conteúdo filho seja rolável verticalmente caso o tamanho total do conteúdo ultrapasse a altura da tela. A prop <strong>keyboardShouldPersistTaps='handled'</strong> melhora a experiência do usuário, permitindo que toques em botões funcionem mesmo com o teclado aberto.</li>
            </List>
            <CodeBlock language="jsx">
              {`return (
  <SafeAreaView style={styles.safeArea}>
    <StatusBar backgroundColor='transparent' translucent={false} barStyle='dark-content' />
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
      style={styles.keyboardAvoidingContainer} 
      keyboardVerticalOffset={HEADER_HEIGHT}
    >
      <ScrollView 
        contentContainerStyle={styles.container} 
        keyboardShouldPersistTaps='handled'
      >
        {/* O conteúdo da tela vai aqui */}
      </ScrollView>
    </KeyboardAvoidingView>
  </SafeAreaView>
);`}
            </CodeBlock>

            <Subtitle>4.2. Seção de Vídeo Recente</Subtitle>
            <Paragraph>
              Este bloco é responsável por exibir o último vídeo baixado. Ele só aparece na tela se houver um vídeo no histórico.
            </Paragraph>
            <List>
              <li><strong>Renderização Condicional ({'{recentVideo && ...}'}):</strong> Esta é uma sintaxe JavaScript. O bloco de código JSX à direita do <strong>&&</strong> só será renderizado se a variável de estado <strong>recentVideo</strong> for "truthy" (ou seja, não for <strong>null</strong> ou <strong>undefined</strong>).</li>
              <li><strong>&lt;TouchableOpacity&gt;:</strong> Um invólucro que torna seus filhos "tocáveis" e dá um feedback visual de opacidade ao ser pressionado. A prop <strong>onPress</strong> é acionada no toque.</li>
              <li><strong>onPress={"{() => navigation.navigate(...)}"}</strong>: Quando o usuário toca na thumbnail, esta função é chamada, instruindo o React Navigation a navegar para a tela <strong>VideoPlayer</strong> e passando o caminho do arquivo (<strong>filePath</strong>) como um parâmetro de rota.</li>
              <li><strong>&lt;Image&gt;:</strong> Exibe a miniatura (thumbnail) do vídeo. A <strong>source</strong> usa uma <strong>uri</strong> com o prefixo <strong>file://</strong> para carregar a imagem a partir do armazenamento local do dispositivo.</li>
              <li><strong>&lt;Icon&gt;:</strong> Renderiza o ícone de "play" sobre a imagem.</li>
            </List>
            <CodeBlock language="jsx">
              {`{/* Seção de Vídeo Recente */}
{recentVideo && (
  <View style={styles.recentVideoSection}>
    <Text style={styles.sectionTitle}>{t('homeScreen.recent_video')}</Text>
    <TouchableOpacity
      style={styles.thumbnailTouchable}
      onPress={() =>
        navigation.navigate('VideoPlayer', {
          filePath: recentVideo.filePath,
        })
      }>
      <Image source={{uri: \`file://\${recentVideo.thumbnailPath}\`}} style={styles.thumbnail} />
      <View style={styles.playIconContainer}>
        <Icon name='play-circle' size={60} color='rgba(255, 255, 255, 0.9)' />
      </View>
    </TouchableOpacity>
  </View>
)}`}
            </CodeBlock>

            <Subtitle>4.3. Seção do Formulário de Download</Subtitle>
            <Paragraph>
              Esta é a principal área de interação, onde o usuário insere a URL e inicia o download.
            </Paragraph>
            <List>
              <li><strong>&lt;Text style={"{styles.status}"}&gt;{'{statusMessage}'}&lt;/Text&gt;:</strong> Exibe a mensagem de status. Como <strong>statusMessage</strong> é uma variável de estado, o texto na tela é atualizado automaticamente sempre que o estado muda na lógica do componente.</li>
              <li><strong>&lt;TextInput&gt;:</strong> O campo de entrada de texto. Suas propriedades conectam a UI à lógica:
                <ul>
                  <li><strong>value={'{videoUrl}'}:</strong> O texto exibido no campo é sempre o valor do estado <strong>videoUrl</strong>.</li>
                  <li><strong>onChangeText={'{setVideoUrl}'}:</strong> A cada mudança no texto, a função <strong>setVideoUrl</strong> é chamada para atualizar o estado.</li>
                  <li><strong>editable={'{!isLoading && !currentJob}'}:</strong> A propriedade <strong>editable</strong> é controlada dinamicamente. O campo só é editável se <strong>isLoading</strong> for <strong>false</strong> e <strong>currentJob</strong> for <strong>null</strong>.</li>
                </ul>
              </li>
              <li><strong>Renderização Condicional ({'{isLoading ? ... : ...}'}):</strong> É um operador ternário que funciona como um <strong>if/else</strong> para a renderização. Se <strong>isLoading</strong> for <strong>true</strong>, o componente <strong>&lt;ActivityIndicator /&gt;</strong> (o círculo giratório) é renderizado. Senão, a <strong>&lt;View&gt;</strong> com os botões é renderizada.</li>
              <li><strong>&lt;Button&gt;:</strong> Componentes de botão padrão da plataforma. A prop <strong>onPress</strong> é ligada diretamente às funções da lógica do componente, como <strong>handlePaste()</strong> e <strong>handleDownloadPress()</strong>.</li>
            </List>
            <CodeBlock language="jsx">
              {`{/* Seção do Formulário de Download */}
<View style={styles.formSection}>
  <Text style={styles.title}>{t('homeScreen.new_download')}</Text>
  <Text style={styles.status}>{statusMessage}</Text>
  <TextInput
    style={styles.input}
    placeholder={t('homeScreen.url_input_placeholder')}
    value={videoUrl}
    onChangeText={setVideoUrl}
    editable={!isLoading && !currentJob}
  />
  {isLoading ? (
    <ActivityIndicator size='large' color='#841584' style={styles.activityIndicator} />
  ) : (
    <View style={styles.buttonContainer}>
      <View style={styles.buttonWrapper}>
        <Button title={t('homeScreen.paste_link_button')} onPress={handlePaste} />
      </View>
      <View style={styles.buttonWrapper}>
        <Button title={t('homeScreen.download_button')} onPress={handleDownloadPress} />
      </View>
    </View>
  )}
</View>`}
            </CodeBlock>
          </Container>
          <Container>
            <Subtitle>5. Análise dos Estilos (StyleSheet)</Subtitle>
            <Paragraph>
              O objeto <strong>styles</strong> é criado usando <strong>StyleSheet.create()</strong>. Essa é a maneira recomendada e otimizada de definir estilos no React Native. Ele transforma o objeto JavaScript em referências internas, o que melhora a performance e ajuda a detectar erros.
            </Paragraph>

            <Subtitle>5.1. Estilos Estruturais Principais</Subtitle>
            <Paragraph>
              Estes estilos controlam o layout dos contêineres principais da tela.
            </Paragraph>
            <Paragraph>
              <strong>safeArea e keyboardAvoidingContainer:</strong>
            </Paragraph>
            <List>
              <li><strong>flex: 1:</strong> Esta é a regra mais importante do layout. Ela instrui o componente a se expandir para ocupar todo o espaço vertical disponível em seu contêiner pai. Como o <strong>SafeAreaView</strong> é o componente raiz, ele ocupa 100% da tela, e o <strong>KeyboardAvoidingView</strong>, seu filho, faz o mesmo.</li>
            </List>
            <CodeBlock language="javascript">
              {`const styles = StyleSheet.create({
  safeArea: {
    flex: 1, 
    backgroundColor: '#f4f4f8'
  },
  keyboardAvoidingContainer: {
    flex: 1
  },`}
            </CodeBlock>
            <Paragraph>
              <strong>container:</strong>
            </Paragraph>
            <List>
              <li><strong>flexGrow: 1:</strong> Aplicado ao <strong>contentContainerStyle</strong> de um <strong>ScrollView</strong>. Significa que, se o conteúdo for menor que a tela, o contêiner crescerá para preencher o espaço vazio. Se o conteúdo for maior, ele simplesmente será rolável.</li>
              <li><strong>padding: 20:</strong> Adiciona um espaçamento interno de 20 pixels em todos os lados do contêiner do conteúdo.</li>
            </List>
            <CodeBlock language="javascript">
              {`  container: {
    flexGrow: 1,
    padding: 20,
  },`}
            </CodeBlock>

            <Subtitle>5.2. Estilos da Seção de Vídeo Recente</Subtitle>
            <Paragraph>
              Estilos aplicados aos elementos que exibem o último vídeo baixado.
            </Paragraph>
            <Paragraph>
              <strong>recentVideoSection e sectionTitle:</strong> O primeiro adiciona uma margem inferior para criar espaçamento, enquanto o segundo estiliza o título da seção.
            </Paragraph>
            <CodeBlock language="javascript">
              {`  recentVideoSection: {
    marginBottom: 40,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },`}
            </CodeBlock>
            <Paragraph>
              <strong>thumbnailTouchable, thumbnail e playIconContainer:</strong>
            </Paragraph>
            <List>
              <li><strong>thumbnailTouchable:</strong> Estiliza o contêiner da miniatura, definindo dimensões, cantos arredondados, centralização de conteúdo (com <strong>justifyContent</strong> e <strong>alignItems</strong>) e sombra (com <strong>elevation</strong> e <strong>shadow*</strong>).</li>
              <li><strong>thumbnail:</strong> Faz com que a imagem preencha 100% do contêiner pai.</li>
              <li><strong>playIconContainer:</strong> Usa <strong>position: 'absolute'</strong> para remover o ícone do fluxo normal e fazê-lo flutuar sobre a imagem, perfeitamente centralizado devido às propriedades do seu pai.</li>
            </List>
            <CodeBlock language="javascript">
              {`  thumbnailTouchable: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    /* ... shadow props ... */
  },
  thumbnail: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
  playIconContainer: {
    position: 'absolute',
  },`}
            </CodeBlock>

            <Subtitle>5.3. Estilos do Formulário de Download</Subtitle>
            <Paragraph>
              Estilos aplicados à área de interação principal.
            </Paragraph>
            <Paragraph>
              <strong>formSection, title, status e input:</strong> Estilizam os textos e o campo de entrada. Note o <strong>minHeight: 40</strong> no estilo <strong>status</strong>, que garante que o layout não "salte" visualmente quando o texto da mensagem muda de uma para duas linhas.
            </Paragraph>
            <CodeBlock language="javascript">
              {`  formSection: { },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  status: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    minHeight: 40,
  },
  input: {
    height: 50,
    backgroundColor: '#FFFFFF',
    borderColor: '#DDD',
    /* ... outros estilos ... */
  },`}
            </CodeBlock>
            <Paragraph>
              <strong>buttonContainer, buttonWrapper e activityIndicator:</strong>
            </Paragraph>
            <List>
              <li><strong>buttonContainer:</strong> Usa <strong>flexDirection: 'row'</strong> para alinhar os botões horizontalmente e <strong>justifyContent: 'space-between'</strong> para distribuí-los com espaço igual entre eles.</li>
              <li><strong>buttonWrapper:</strong> Usa <strong>flex: 1</strong> para que cada "invólucro" de botão ocupe uma porção igual do espaço horizontal disponível.</li>
              <li><strong>marginHorizontal: 5:</strong> Adiciona um pequeno espaçamento nas laterais de cada botão para que não fiquem colados.</li>
              <li><strong>activityIndicator:</strong> Adiciona uma margem e centraliza o círculo de carregamento.</li>
            </List>
            <CodeBlock language="javascript">
              {`  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  buttonWrapper: {
    flex: 1,
    marginHorizontal: 5,
  },
  activityIndicator: {
    marginTop: 10,
    alignSelf: 'center',
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
export default HomeScreen;