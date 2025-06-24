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
                    Método de Desinstalação Forçada de Aplicativos Android (ADB) 💥
                  </DividerWithText>

                  <Paragraph>
                    Este método, que utiliza o **Android Debug Bridge (ADB)**, é a solução mais robusta para desinstalação de aplicativos quando os métodos convencionais falham. É particularmente útil para desenvolvedores, garantindo a remoção completa de versões anteriores de um aplicativo, o que permite a instalação de novas compilações (incluindo versões de lançamento) sem conflitos.
                  </Paragraph>

                  <Subtitle>Pré-requisitos</Subtitle>
                  <List>
                    <li>**Celular Android:** Acesso às "Opções do Desenvolvedor".</li>
                    <li>**Computador:** Cabo USB e terminal (Prompt de Comando/PowerShell no Windows ou Terminal no Mac/Linux).</li>
                    <li>**ADB instalado:** Ferramenta de linha de comando que permite a comunicação entre o computador e o dispositivo Android. (Inclua aqui um link ou instruções para a instalação do ADB, se aplicável, para o seu portfólio.)</li>
                  </List>

                  <Subtitle>Passos para Desinstalação</Subtitle>
                  <List>
                    <li>
                      <strong>1. Configuração do Celular:</strong>
                      <br />
            No seu celular, vá em **Configurações > Sobre o telefone**.
                      <br />
                      Toque em "**Número da versão**" 7 vezes consecutivas para ativar as "Opções do desenvolvedor".
                      <br />
            Retorne ao menu principal de Configurações, acesse **Sistema > Opções do desenvolvedor**.
                      <br />
                      Ative a "**Depuração USB**".
                    </li>
                    <li>
                      <strong>2. Conexão e Verificação (Computador):</strong>
                      <br />
                      Conecte o celular ao computador via cabo USB.
                      <br />
                      Abra o terminal no seu computador.
                      <br />
                      Navegue até a pasta do seu projeto, e em seguida, para a pasta `android` (ou o diretório onde você gerencia seus projetos Android).
                      <br />
                      Digite o seguinte comando para verificar a conexão do dispositivo:
                      <CodeBlock language="bash">
                        {`adb devices`}
                      </CodeBlock>
                      Se for a primeira vez, uma solicitação de permissão de "Depuração USB" aparecerá na tela do seu celular. Marque "**Sempre permitir para este computador**" e confirme.
                    </li>
                    <li>
                      <strong>3. Desinstalação Forçada:</strong>
                      <br />
                      Com o celular conectado e a depuração USB permitida, utilize o seguinte comando para forçar a desinstalação:
                      <CodeBlock language="bash">
                        {`adb uninstall com.baixarvideos`}
                      </CodeBlock>
                      <strong>Observação:</strong> Substitua `com.baixarvideos` pelo `applicationId` do aplicativo que você deseja desinstalar. Este `applicationId` pode ser encontrado no arquivo `build.gradle` do seu projeto.
                      <br />
                      Se o processo for bem-sucedido, o terminal exibirá a mensagem "**Success**". O aplicativo terá sido removido completamente do seu dispositivo.
                    </li>
                  </List>

                  <Subtitle>Benefícios</Subtitle>
                  <Paragraph>
                    Este método garante a remoção completa do aplicativo, eliminando resíduos que poderiam causar problemas na instalação de novas versões, especialmente útil para testes e homologação de aplicativos.
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