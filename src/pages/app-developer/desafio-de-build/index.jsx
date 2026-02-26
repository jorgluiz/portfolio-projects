import Head from "next/head";
import { useGlobalState } from "../../../context/GlobalStateContext";
import {
  Container,
  CodeContainer,
  DividerWithText,
  Paragraph,
  Subtitle,
  List,
  Underline
} from "@/styles/globalStyles";

import { MainLayout } from "@/components/layout/mainLayout";
import SideBarLayout from "@/components/layout/sideBarLayout";
import HeaderLayout from "@/components/layout/headerLayout";
import MainContentLayout from "@/components/layout/contentLayout";
import Overlay from "@/components/overlay";
import VoltarParaTopo from "@/components/backToTop";

import CodeBlock from "@/components/codeBlock";

// Renomeando o componente para refletir o novo conteúdo
const AndroidStudioSetup = () => {
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
          <MainLayout>
            <SideBarLayout />
            <HeaderLayout />
            <MainContentLayout>
              <CodeContainer>
                <Container>
                  <DividerWithText>
                    Desafio de Build: O Aplicativo que Não Queria Ser Desinstalado
                  </DividerWithText>

                  <Paragraph>
                    <strong>Um Guia para Resolver Conflitos de Assinatura entre Versões de Debug e Release</strong>
                  </Paragraph>

                  <Subtitle>Parte 1: O Cenário do Desafio</Subtitle>
                  <Paragraph>
                    Você está na reta final do desenvolvimento. Seu aplicativo funciona perfeitamente no modo de teste, instalado diretamente no seu celular através do comando npx react-native run-android. Agora, você segue o guia para gerar sua chave de assinatura (keystore) e compila seu primeiro APK de release.
                  </Paragraph>
                  <Paragraph>
                    Cheio de expectativa, você transfere o arquivo app-release.apk para o seu celular, mas ao tentar instalar, a instalação falha sem um motivo claro. Pior ainda, ao tentar desinstalar a versão de teste que já estava no aparelho, a desinstalação também falha!
                  </Paragraph>
                  <Paragraph>
                    Você vai até a lista de aplicativos nas configurações e encontra seu app em um estado "fantasma": ele está na lista, mas com a mensagem "Não instalado para o usuário". Nenhum método convencional parece capaz de removê-lo.
                  </Paragraph>
                  <Paragraph>
                    <strong>A Causa do Problema:</strong> Um conflito de assinaturas digitais.
                    <br />
                    A versão instalada pelo <code>run-android</code> é assinada com uma chave de debug automática e genérica.
                    <br />
                    A versão <code>release</code> é assinada com a sua chave de release pessoal e segura.
                    <br />
                    O Android vê dois aplicativos com a mesma identidade (ex: <code>com.CacaPalavrasGame</code>), mas com "passaportes" (assinaturas) diferentes. O sistema de segurança entra em um estado de confusão, se recusa a instalar o novo ou remover o antigo, e acaba criando o "app fantasma".
                  </Paragraph>

                  <Subtitle>Parte 2: A Missão</Subtitle>
                  <Paragraph>
                    Nossa missão é forçar a remoção completa e limpa do "app fantasma" para, finalmente, liberar o caminho para a instalação da versão de release oficial e assinada.
                  </Paragraph>

                  <Subtitle>Parte 3: Passo a Passo da Solução</Subtitle>
                  <Paragraph>
                    Esta solução foi descoberta através de uma estratégia inteligente: se não podemos lutar contra o fantasma, vamos trazê-lo de volta à vida para então derrotá-lo de vez.
                  </Paragraph>

                  <List>
                    <li>
                      <strong>Passo 1: "Ressuscitar" o App com a Assinatura de Debug</strong>
                      <br />
                      A lógica é simples: para tomar controle do app fantasma, precisamos sobrescrevê-lo com uma versão que tenha a mesma assinatura que o originou – a chave de debug. Conecte seu celular ao computador via cabo USB, com a depuração USB ativada. Abra o terminal na pasta raiz do seu projeto e execute novamente o comando de instalação de debug:
                      <CodeBlock language="bash">
                        {`npx react-native run-android`}
                      </CodeBlock>
                      Aguarde a conclusão. O processo de build irá compilar a versão de debug e forçar a instalação sobre a versão "fantasma". Ao final, o aplicativo deverá aparecer normalmente no seu celular.
                    </li>
                    <li>
                      <strong>Passo 2: A Remoção Completa e Definitiva</strong>
                      <br />
                      Agora que o aplicativo está em um estado normal, podemos desinstalá-lo usando o método mais poderoso. No seu celular, vá em <strong>Configurações > Apps</strong>. Encontre e toque no seu aplicativo. Na tela de "Informações do app", procure o menu de três pontinhos ( ⋮ ) no canto superior direito e selecione a opção crucial: <strong>"Desinstalar para todos os usuários"</strong>. Confirme a desinstalação.
                    </li>
                    <li>
                      <strong>Passo 3: O Caminho Livre para o Sucesso</strong>
                      <br />
                      Com o celular 100% limpo, transfira seu arquivo de release assinado (<code>app-release.apk</code>) para o celular e toque no arquivo para instalá-lo. Lembre-se de permitir a instalação de "Fontes Desconhecidas" e de aprovar o aviso do "Play Protect" ("Instalar assim mesmo"), se aparecerem.
                    </li>
                  </List>

                  <Subtitle>Parte 4: Missão Cumprida</Subtitle>
                  <Paragraph>
                    Parabéns! Você enfrentou e resolveu um dos desafios mais frustrantes do ciclo de publicação Android. O problema não era um erro no seu código ou na sua assinatura, mas um estado de conflito no próprio sistema operacional do aparelho de teste.
                  </Paragraph>
                  <Paragraph>
                    A chave para a vitória foi entender que o conflito era de assinaturas e que a solução era usar a própria assinatura de debug para retomar o controle antes da remoção final.
                  </Paragraph>

                </Container>
                <VoltarParaTopo></VoltarParaTopo>
              </CodeContainer>
            </MainContentLayout>
          </MainLayout>
        </>
      )
      }
    </>
  );
};

// Exporte com o novo nome
export default AndroidStudioSetup;