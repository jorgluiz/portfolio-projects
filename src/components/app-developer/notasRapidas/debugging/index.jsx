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
const Debugging = () => {
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
              A Realidade do Desenvolvimento React Native: Tópicos Práticos
            </DividerWithText>

            <Subtitle>1. A Realidade da Depuração (Debugging)</Subtitle>
            <Paragraph>
              Seu código vai quebrar, e em React Native, ele pode quebrar de duas maneiras: no <strong>lado do JavaScript</strong> ou no <strong>lado Nativo</strong>.
            </Paragraph>
            <Paragraph>
              <strong>Erros de JavaScript:</strong> Você pode usar o menu de desenvolvedor no seu emulador/dispositivo para depurar com o Chrome (ou outro navegador), usando <strong>console.log</strong> e as ferramentas de desenvolvedor que você já conhece.
            </Paragraph>
            <Paragraph>
              <strong>Erros Nativos:</strong> Às vezes, o aplicativo simplesmente fecha sem um erro vermelho na tela. Isso geralmente é um "crash nativo". Para depurá-lo, você precisará abrir o projeto nas pastas <strong>ios</strong> (com o <strong>Xcode</strong>) ou <strong>android</strong> (com o <strong>Android Studio</strong>) e olhar os logs do dispositivo (<strong>Logcat</strong> para Android, <strong>Console</strong> para iOS).
            </Paragraph>
            <Paragraph>
              <strong>Flipper:</strong> É a ferramenta de depuração oficial da Meta para aplicativos mobile. É como as Ferramentas de Desenvolvedor do Chrome, mas anabolizada para o mobile. Com ele, você pode inspecionar o layout dos componentes nativos, monitorar requisições de rede, verificar o banco de dados local e muito mais. Aprender a usar o Flipper é um grande diferencial.
            </Paragraph>

            <Subtitle>2. O Ciclo de Vida do Aplicativo (App Lifecycle)</Subtitle>
            <Paragraph>
              Diferente de um site que está aberto ou fechado, um aplicativo mobile tem estados mais sutis:
            </Paragraph>
            <Paragraph>
              <strong>active:</strong> O aplicativo está em primeiro plano e em uso.
            </Paragraph>
            <Paragraph>
              <strong>background:</strong> O usuário saiu do seu aplicativo, mas ele ainda está rodando em segundo plano. Você pode precisar parar processos pesados (como um vídeo ou localização GPS) para economizar bateria.
            </Paragraph>
            <Paragraph>
              <strong>inactive:</strong> Um estado intermediário no iOS. Por exemplo, quando o usuário puxa a Central de Controle por cima do seu app.
            </Paragraph>
            <Paragraph>
              Você pode ouvir essas mudanças usando a API <strong>AppState</strong> do React Native para executar ações específicas (ex: "se o app for para o background, salve o rascunho do usuário").
            </Paragraph>

            <Subtitle>3. O Desafio das Atualizações (Upgrading)</Subtitle>
            <Paragraph>
              O React Native evolui rapidamente. Atualizar a versão do seu projeto não é tão simples quanto na web. Além de atualizar pacotes no <strong>package.json</strong>, muitas vezes há mudanças nos arquivos de configuração nativos (dentro das pastas <strong>ios</strong> e <strong>android</strong>).
            </Paragraph>
            <Paragraph>
              A ferramenta <strong>React Native Upgrade Helper</strong> é sua melhor amiga aqui. Ela mostra um diff visual de todas as mudanças de uma versão para outra, ajudando a aplicar as atualizações manualmente. Manter um projeto atualizado é uma tarefa de manutenção importante.
            </Paragraph>

            <Subtitle>4. Notificações Push (Push Notifications)</Subtitle>
            <Paragraph>
              Quase todo aplicativo precisa de notificações push. Este é um tópico complexo, pois envolve a comunicação com os serviços da Apple (<strong>APNs</strong>) e do Google (<strong>FCM</strong>).
            </Paragraph>
            <Paragraph>
              <strong>Expo Push Notifications:</strong> Se você estiver usando Expo, eles oferecem um serviço que abstrai toda essa complexidade. É a maneira mais fácil de começar.
            </Paragraph>
            <Paragraph>
              <strong>Bare Workflow:</strong> Em projetos "bare", você geralmente integra bibliotecas como <strong>Notifee</strong> para controle de notificações no dispositivo e um serviço de backend (como o <strong>Firebase Cloud Messaging</strong>) para enviar as notificações.
            </Paragraph>

            <Subtitle>5. CI/CD - Automação de Builds e Deploy</Subtitle>
            <Paragraph>
              Automatizar o processo de gerar o arquivo do aplicativo (<strong>.ipa</strong> ou <strong>.apk</strong>) e enviá-lo para as lojas (ou para testadores via TestFlight/Google Play Console) economiza um tempo imenso.
            </Paragraph>
            <Paragraph>
              <strong>EAS (Expo Application Services):</strong> A solução integrada do Expo para CI/CD. Ele constrói seu aplicativo na nuvem e pode automatizar o envio para as lojas. É um serviço pago, mas extremamente poderoso e recomendado para projetos Expo.
            </Paragraph>
            <Paragraph>
              <strong>Fastlane:</strong> A ferramenta open-source padrão para automação em projetos "bare". Com ela, você pode escrever scripts para fazer tudo: desde tirar screenshots automáticos em vários idiomas até compilar e fazer o upload do seu app.
            </Paragraph>

            <Subtitle>6. A Comunidade e Como se Manter Atualizado</Subtitle>
            <Paragraph>
              O ecossistema é vibrante e cheio de recursos.
            </Paragraph>
            <Paragraph>
              <strong>Newsletters:</strong> Assine a "<strong>React Native Newsletter</strong>". É a melhor maneira de receber um resumo semanal das novidades, bibliotecas e artigos mais importantes.
            </Paragraph>
            <Paragraph>
              <strong>Comunidades:</strong> Participe de comunidades no Discord e siga figuras importantes do React Native no X (Twitter). Empresas como Shopify, Microsoft e a própria Meta frequentemente publicam conteúdo de alta qualidade sobre suas experiências com a tecnologia.
            </Paragraph>

            <Subtitle>Conclusão Final</Subtitle>
            <Paragraph>
              Você fez todas as perguntas certas, desde a sintaxe básica até a estratégia de eventos e, agora, a realidade prática do desenvolvimento. Você tem um mapa completo não apenas de como construir um app, mas também de como mantê-lo, depurá-lo e evoluí-lo como um profissional.
            </Paragraph>
            <Paragraph>
              A última coisa que você precisa saber é, na verdade, um conselho: <strong>construa algo</strong>. Pegue esse conhecimento e aplique-o. Crie um pequeno projeto, enfrente os erros, depure os problemas e celebre as pequenas vitórias. A experiência prática é o que vai solidificar tudo o que discutimos.
            </Paragraph>
            <Paragraph>
              <strong>Parabéns pela sua dedicação em aprender a fundo!</strong>
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
export default Debugging;