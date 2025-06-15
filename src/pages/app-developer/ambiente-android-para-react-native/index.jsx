import { useEffect } from 'react';
import Head from "next/head";
import { useGlobalState } from "../../../context/GlobalStateContext";
import {
  Container,
  SectionTitle,
  Subtitle,
  Paragraph,
  List,
  Link, // Mantive o Link caso precise usar em algum momento
  CodeContainer
} from "@/styles/globalStyles";
import styled from 'styled-components';
import { MainLayout } from "@/components/layout/mainLayout";
import SideBarLayout from "@/components/layout/sideBarLayout";
import HeaderLayout from "@/components/layout/headerLayout";
import MainContentLayout from "@/components/layout/contentLayout";
import Overlay from "@/components/overlay";

import hljs from 'highlight.js'; // Importando o highlight.js
import 'highlight.js/styles/atom-one-dark.css'; // Estilo para colorir a sintaxe

/* Responsividade da tabela */
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  overflow-x: auto;
  display: block;
  white-space: nowrap;
  margin-left: auto;
  margin-right: auto;
`;

const Th = styled.th`
  padding: 10px;
  text-align: center;
  border: 1px solid #ddd;
`;

const Td = styled.td`
  padding: 10px;
  text-align: center;
  border: 1px solid #ddd;
`;

const THead = styled.thead`
  background-color: #f4f4f4;
`;

const TBody = styled.tbody`
  background-color: #fff;
`;

// Renomeando o componente para refletir o novo conteúdo
const AndroidStudioSetup = () => {
  const { isLoaded, isHamburguerOpen, setIsHamburguerOpen } = useGlobalState();

  const handleOverlayClick = () => setIsHamburguerOpen(false);

  useEffect(() => {
    // Só executa a estilização se o conteúdo estiver carregado e visível
    if (isLoaded) {
      hljs.highlightAll();
    }
  }, [isLoaded]); // Adicione 'isLoaded' como dependência!

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
                  <Subtitle>1. A Dependência Esquecida: O JDK (Java Development Kit)</Subtitle>
                  <Paragraph>
                    Você mencionou o Gradle, mas o Gradle depende de uma versão específica do Java para funcionar. Este é, talvez, o ponto que mais causa erros de build para iniciantes.
                    <br /><br />
                    <strong>Ação a Adicionar:</strong> Verificar a versão do Java instalada (java -version) e garantir que seja compatível com a versão do React Native/Gradle que está sendo usada. Para versões recentes do React Native, o JDK 17 é o padrão.
                    <br /><br />
                    <strong>Aprendizado a Adicionar:</strong> "Percebi que o build falhava com um erro de 'Unsupported Java version'. O aprendizado foi que o Gradle, o motor de build do Android, precisa de uma versão específica do JDK (Java Development Kit) para funcionar. Foi necessário instalar o JDK 17 e configurar a variável de ambiente JAVA_HOME no sistema, apontando para a pasta de instalação do JDK."
                  </Paragraph>

                  <Subtitle>2. Otimização e Aceleração do Emulador (AVD)</Subtitle>
                  <Paragraph>
                    Você criou o emulador, mas um problema comum é ele ser extremamente lento, a ponto de ser inutilizável.
                    <br /><br />
                    <strong>Ação a Adicionar:</strong> Verificar se a virtualização de hardware (Intel HAXM / AMD Hyper-V) está ativada na BIOS do computador e instalada via Android Studio.
                    <br /><br />
                    <strong>Aprendizado a Adicionar:</strong> "Inicialmente, meu emulador era muito lento. A dúvida foi: 'Isso é normal?'. A pesquisa mostrou que a performance depende da aceleração de hardware. O aprendizado foi entrar na BIOS do computador para ativar a 'Virtualization Technology' e depois usar o SDK Manager para instalar o 'Intel HAXM' (ou garantir que o Hyper-V estivesse ativo no Windows). Isso transformou a performance do emulador, tornando-o rápido e responsivo para os testes."
                  </Paragraph>

                  <Subtitle>3. Detalhes Importantes no SDK Manager</Subtitle>
                  <Paragraph>
                    Além da "SDK Platform", outras duas ferramentas são essenciais.
                    <br /><br />
                    <strong>Ação a Adicionar:</strong> No SDK Manager, na aba "SDK Tools", garantir que as versões mais recentes do "Android SDK Build-Tools" e do "NDK (Side by side)" estão marcadas e instaladas.
                    <br /><br />
                    <strong>Aprendizado a Adicionar:</strong> "Além da plataforma principal da API 35, aprendi que o React Native também depende de outras duas peças do SDK Manager: as 'Build-Tools', que compilam o código, e o 'NDK', usado para bibliotecas nativas. Garantir que ambos estavam atualizados resolveu avisos e possíveis erros futuros durante o build."
                  </Paragraph>

                  <Subtitle>4. O Significado de minSdkVersion vs. targetSdkVersion</Subtitle>
                  <Paragraph>
                    Você mencionou que alterou a minSdkVersion para 24, o que é ótimo. Explicar o porquê de forma mais completa pode ajudar muito.
                    <br /><br />
                    <strong>Aprendizado a Adicionar:</strong> "Ao editar o arquivo build.gradle, encontrei três propriedades importantes: minSdkVersion, compileSdkVersion e targetSdkVersion. O aprendizado foi o seguinte:
                    <br />
                    <strong>minSdkVersion (24):</strong> Define a versão mínima do Android em que meu app pode ser instalado (Android 7.0). Isso afeta o alcance do meu público.
                    <br />
                    <strong>compileSdkVersion (35):</strong> Diz ao Gradle para usar as ferramentas da API 35 para compilar o código, me dando acesso aos recursos mais recentes.
                    <br />
                    <strong>targetSdkVersion (35):</strong> Informa ao Android que meu app foi testado e otimizado para a API 35, permitindo que o sistema aplique as otimizações e restrições de segurança mais recentes."
                  </Paragraph>

                  <Subtitle>Resumo das Sugestões:</Subtitle>
                  <List>
                    <li>Adicione uma seção sobre o JDK: É uma fonte gigantesca de erros.</li>
                    <li>Mencione a aceleração de hardware (HAXM/Hyper-V): Resolve o problema de emuladores lentos.</li>
                    <li>Detalhe as "SDK Tools": Fale sobre a importância de ter Build-Tools e NDK.</li>
                    <li>Expanda a explicação do build.gradle: Diferencie minSdkVersion de targetSdkVersion para enriquecer o conhecimento do leitor.</li>
                  </List>
                </Container>
                <Container>
                  <SectionTitle>
                    Passo a Passo Detalhado: A Configuração do Ambiente Android Studio
                  </SectionTitle>

                  <Paragraph>
                    O objetivo desta etapa foi preparar o computador para ser capaz de compilar, instalar e testar um aplicativo React Native na plataforma Android.
                  </Paragraph>

                  <Subtitle>1. Instalação e Propósito da Ferramenta</Subtitle>
                  <Paragraph>
                    <strong>Ferramenta Principal:</strong> Android Studio
                    <br />
                    <strong>Ação Realizada:</strong> Foi feita a instalação do Android Studio.
                    <br />
                    <strong>Aprendizado e Estratégia:</strong> O entendimento chave foi que o Android Studio não seria usado para escrever o código do dia a dia do aplicativo (que é feito em TypeScript no VS Code), mas sim como um "pacote de ferramentas" essencial que fornece todo o ecossistema necessário para o desenvolvimento Android.
                  </Paragraph>

                  <Subtitle>2. Ferramentas Essenciais Utilizadas (Dentro do Android Studio)</Subtitle>
                  <Paragraph>
                    Uma vez instalado, duas áreas internas do Android Studio foram cruciais:
                  </Paragraph>
                  <List>
                    <li>
                      <strong>A) Android SDK Manager (O "Gerenciador de Peças" do Android)</strong>
                      <br />
                      <strong>Ação:</strong> Navegou-se até o SDK Manager para instalar as plataformas e ferramentas de build necessárias.
                      <br />
                      <strong>Dúvida e Aprendizado:</strong> A dúvida inicial foi: "Qual versão do Android SDK devo usar?". A solução foi instalar a Plataforma SDK para a API 35, garantindo que o app seja compilado e otimizado para as versões mais recentes do Android.
                    </li>
                    <li>
                      <strong>B) AVD (Android Virtual Device) Manager (A "Fábrica de Emuladores")</strong>
                      <br />
                      <strong>Ação:</strong> Foi criado um dispositivo virtual (Pixel_3a_API_35_extension_level_13_x86_64) para os testes.
                      <br />
                      <strong>Aprendizado:</strong> Aprendeu-se a criar, configurar e iniciar um emulador, o que eliminou a necessidade de um dispositivo físico para a maioria dos testes de desenvolvimento.
                    </li>
                  </List>

                  <Subtitle>3. Configuração do Sistema Operacional (Fora do Android Studio)</Subtitle>
                  <Paragraph>
                    Para que a linha de comando e o React Native pudessem "encontrar" as ferramentas, foi necessário configurar o sistema.
                    <br />
                    <strong>Ação:</strong> Edição das Variáveis de Ambiente do Windows.
                    <br />
                    <strong>Dúvida Principal Resolvida:</strong> "Eu segui um tutorial, mas não consigo achar a pasta ...\Sdk\tools."
                    <br />
                    <strong>Solução e Aprendizado:</strong> O aprendizado crucial foi diagnosticar que a pasta `tools` foi descontinuada. A solução foi identificar e adicionar os caminhos corretos e modernos (`.../Sdk/platform-tools` e `.../Sdk/cmdline-tools/latest/bin`) à variável `PATH`, além de criar a variável `ANDROID_HOME`.
                  </Paragraph>

                  <Subtitle>4. Arquivos de Configuração de Build (Gradle)</Subtitle>
                  <Paragraph>
                    Foi entendido que o React Native usa o Gradle para construir o aplicativo Android.
                    <br />
                    <strong>Ação:</strong> Edição manual do arquivo `android/build.gradle`.
                    <br />
                    <strong>Aprendizado:</strong> Aprendeu-se que é neste arquivo que se definem as versões globais do SDK. A propriedade `minSdkVersion` foi alterada para 24 para garantir compatibilidade com Android 7.0+.
                  </Paragraph>
                </Container>
              </CodeContainer>
            </MainContentLayout>
          </MainLayout>
        </>
      )}
    </>
  );
};

// Exporte com o novo nome
export default AndroidStudioSetup;

{/* <Subtitle>5. Comandos de Verificação e Execução (Linha de Comando)</Subtitle>
                  <Paragraph>
                    Finalmente, foram utilizados comandos no terminal para validar toda a configuração.
                  </Paragraph>

                  <Paragraph><strong>Comando de Verificação:</strong></Paragraph>
                  <pre>
                    <code className="language-bash">
                      adb devices
                    </code>
                  </pre>
                  <Paragraph>
                    <strong>Finalidade e Aprendizado:</strong> Usado para confirmar que o computador conseguia detectar e se comunicar com o emulador em execução.
                  </Paragraph>

                  <Paragraph><strong>Comando de Limpeza e Manutenção (Crucial):</strong></Paragraph>
                  <pre>
                    <code className="language-bash">
                      cd android && ./gradlew clean && cd ..
                    </code>
                  </pre>
                  <Paragraph>
                    <strong>Finalidade e Aprendizado:</strong> Foi um comando chave para resolver "crashes" do aplicativo. Aprendeu-se que ele limpa builds antigos e força o Gradle a reconstruir o projeto do zero, resolvendo muitos erros "inexplicáveis".
                  </Paragraph>

                  <Paragraph><strong>Comando Final de Execução:</strong></Paragraph>
                  <pre>
                    <code className="language-bash">
                      npm run android
                    </code>
                  </pre>
                  <Paragraph>
                    <strong>Finalidade e Aprendizado:</strong> Este foi o teste final que validou todo o setup. Um `BUILD SUCCESSFUL` neste passo significou que toda a configuração do Android Studio e do ambiente foi bem-sucedida.
                  </Paragraph> */}