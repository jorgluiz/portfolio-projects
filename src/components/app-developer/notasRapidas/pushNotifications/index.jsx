import Head from "next/head";
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
const PushNotifications = () => {
  const { isLoaded, isHamburguerOpen, setIsHamburguerOpen } = useGlobalState();

  const handleOverlayClick = () => setIsHamburguerOpen(false);

  return (
    <>
      <Head>
        {/* Primary Meta Tags Atualizados */}
        <title>Guia Completo: Configurando o Ambiente Android Studio para React Native</title>
        <meta
          name="description"
          content="Passo a passo detalhado para configurar o Android Studio, SDK, AVD e variáveis de ambiente para desenvolvimento React Native. Solucione problemas comuns e domine o setup."
        />
        <meta
          name="keywords"
          content="React Native, Android Studio, Configuração de Ambiente, SDK, AVD, Gradle, adb, Desenvolvimento Mobile"
        />
        <meta name="author" content="Jorge Luiz" />

        {/* Open Graph / Facebook Atualizados */}
        <meta property="og:site_name" content="https://portfolio-projects-production.up.railway.app" />
        <meta property="og:type" content="website" />
        {/* URL atualizada para refletir o novo conteúdo */}
        <meta property="og:url" content="https://portfolio-projects-production.up.railway.app/menu-secreto/configuracao-ambiente-android" />
        <meta property="og:title" content="Guia Completo: Configurando o Ambiente Android Studio para React Native" />
        <meta property="og:description" content="Aprenda o passo a passo para preparar seu ambiente de desenvolvimento Android para projetos React Native, desde a instalação até a resolução de problemas comuns." />
        <meta property="og:image" content="https://portfolio-projects-production.up.railway.app/perfil.png" />

        {/* Twitter Atualizados */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://portfolio-projects-production.up.railway.app/menu-secreto/configuracao-ambiente-android" />
        <meta property="twitter:title" content="Guia Completo: Configurando o Ambiente Android Studio para React Native" />
        <meta property="twitter:description" content="Um guia detalhado sobre como configurar o Android Studio, SDK, AVD e variáveis de ambiente para começar a desenvolver com React Native." />
        <meta property="twitter:image" content="https://portfolio-projects-production.up.railway.app/perfil.png" />
      </Head>

      {!isLoaded ? null : (
        <>
          {isHamburguerOpen && <Overlay onClick={handleOverlayClick} />}
          <Container>
            <DividerWithText>
              Guia de Notificações em React Native
            </DividerWithText>

            <Subtitle>Os Dois Tipos de Notificações</Subtitle>
            <Paragraph>
              Primeiro, é crucial entender que existem duas categorias de notificações:
            </Paragraph>
            <Paragraph>
              <strong>Notificações Locais (Local Notifications):</strong>
              <br />
              <strong>O que são?</strong> São notificações que o próprio aplicativo agenda e dispara no dispositivo do usuário, sem precisar de um servidor.
              <br />
              <strong>Quando usar?</strong> Para lembretes, alarmes, notificações baseadas em tempo ou ações dentro do app. Por exemplo: um app de tarefas que te lembra de "Comprar leite às 17h", ou um jogo que te avisa "Sua energia está cheia!".
              <br />
              <strong>Como funciona?</strong> Você usa uma biblioteca para agendar a notificação com um gatilho (<strong>trigger</strong>), que pode ser um tempo específico (em 5 minutos) ou um evento (como chegar em um local).
            </Paragraph>
            <Paragraph>
              <strong>Notificações Push (Remote/Push Notifications):</strong>
              <br />
              <strong>O que são?</strong> São notificações enviadas por um servidor remoto para o dispositivo do usuário através da internet.
              <br />
              <strong>Quando usar?</strong> Para tudo que depende de eventos externos: uma nova mensagem de chat, uma atualização de status de um pedido, uma notícia de última hora, uma promoção.
              <br />
              <strong>Como funciona?</strong> Este é o processo mais complexo, pois envolve três partes: seu <strong>Servidor (Backend)</strong>, um <strong>Serviço de Notificação da Plataforma</strong> (APNs da Apple ou FCM do Google), e seu <strong>Aplicativo no Celular</strong>.
            </Paragraph>

            <Subtitle>O Fluxo de uma Notificação Push (Passo a Passo)</Subtitle>
            <Paragraph>
              Entender este fluxo é a chave para dominar as notificações:
            </Paragraph>
            <List>
              <li><strong>1. Pedir Permissão:</strong> Você não pode simplesmente enviar notificações. A primeira vez que seu app abre, você deve pedir a permissão do usuário para recebê-las. Isso é uma exigência do iOS e do Android.</li>
              <li><strong>2. Obter o Push Token:</strong> Se o usuário der permissão, seu aplicativo se comunica com os servidores da Apple/Google e recebe de volta um <strong>Push Token</strong>. Este token é um endereço único e anônimo que identifica seu aplicativo naquele dispositivo específico.</li>
              <li><strong>3. Enviar o Token para seu Servidor:</strong> Seu aplicativo pega esse Push Token e o envia para o seu próprio backend, onde ele é armazenado e associado àquele usuário.</li>
              <li><strong>4. Enviar a Notificação:</strong> Quando algo acontece, seu servidor procura o Push Token do usuário, cria a mensagem e envia tudo para o serviço da plataforma (APNs ou FCM).</li>
              <li><strong>5. Recebimento no Dispositivo:</strong> O serviço da Apple/Google se encarrega de encontrar o dispositivo e entregar a notificação de forma eficiente, mesmo que o aplicativo esteja fechado.</li>
            </List>

            <Subtitle>Como Implementar em React Native</Subtitle>
            <Paragraph>
              Sua abordagem dependerá se você está usando Expo ou um projeto "bare".
            </Paragraph>

            <Subtitle>1. A Maneira Fácil: Expo Push Notifications</Subtitle>
            <Paragraph>
              Se você está usando Expo, o processo é drasticamente simplificado. O serviço <strong>Expo Push Notifications</strong> atua como um intermediário que lida com as complexidades de falar com APNs e FCM.
            </Paragraph>
            <Paragraph>
              <strong>Fluxo com Expo:</strong>
            </Paragraph>
            <List>
              <li>1. Seu Servidor envia a notificação para os Servidores da Expo.</li>
              <li>2. Os Servidores da Expo encaminham para o serviço correto (APNs para iOS, FCM para Android).</li>
              <li>3. O serviço da plataforma entrega a notificação no dispositivo do usuário.</li>
            </List>
            <Paragraph>
              <strong>Exemplo de código para obter o token (lado do cliente):</strong>
            </Paragraph>
            <CodeBlock language="jsx">
              {`import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

// Esta função deve ser chamada quando seu app inicia ou o usuário faz login
async function registerForPushNotificationsAsync() {
  let token;
  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
    });
  }

  // 1. Pedir Permissão
  const { status } = await Notifications.requestPermissionsAsync();
  if (status !== 'granted') {
    alert('Permissão para notificações negada!');
    return;
  }
  
  // 2. Obter o Token
  token = (await Notifications.getExpoPushTokenAsync()).data;
  console.log('Seu Expo Push Token:', token);

  // 3. Enviar para o seu servidor (exemplo com fetch)
  // await fetch('https://meu-servidor.com/api/save-token', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ token, userId: '123' }),
  // });

  return token;
}`}
            </CodeBlock>

            <Subtitle>2. A Maneira "Bare": Firebase + Notifee</Subtitle>
            <Paragraph>
              Em um projeto React Native "bare", você tem mais controle, mas também mais responsabilidade.
            </Paragraph>
            <Paragraph>
              <strong>Firebase Cloud Messaging (FCM):</strong> Você usará a biblioteca <strong>react-native-firebase</strong> para integrar o serviço do Google, que funciona tanto para Android quanto para iOS. É a biblioteca que obtém o token e recebe as notificações.
            </Paragraph>
            <Paragraph>
              <strong>Notifee:</strong> Para criar e gerenciar as notificações no dispositivo (criar canais no Android, definir sons, exibir a notificação quando o app está em primeiro plano), a biblioteca <strong>Notifee</strong> é a mais recomendada. Ela oferece um controle granular incrível sobre a aparência e o comportamento da notificação.
            </Paragraph>

            <Subtitle>Resumo:</Subtitle>
            <Paragraph>
              Notificações são um pilar do desenvolvimento mobile. Comece entendendo a diferença entre <strong>locais</strong> e <strong>push</strong>. Se você for implementar, comece com o fluxo do Expo, pois ele abstrai a maior parte da complexidade e permite que você se concentre na lógica do seu aplicativo. Depois de dominar os conceitos, você pode explorar as implementações "bare" se precisar de mais controle.
            </Paragraph>
          </Container>
          <VoltarParaTopo></VoltarParaTopo>
        </>
      )
      }
    </>
  );
};

// Exporte com o novo nome
export default PushNotifications;