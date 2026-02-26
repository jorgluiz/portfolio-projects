import Head from "next/head";
import { useGlobalState } from "../../../context/GlobalStateContext";
import {
  Container,
  CodeContainer,
  DividerWithText,
  Paragraph,
  Subtitle,
  List,
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
                    Guia de Geração e Assinatura do APK de Release 📦
                  </DividerWithText>

                  <Paragraph>
                    Esta foi a nossa jornada para transformar o código-fonte em um arquivo de aplicativo (.apk) final, assinado e pronto para distribuição. Cada etapa foi crucial para garantir a segurança e a funcionalidade do app.
                  </Paragraph>

                  <Subtitle>1. Criação da Chave de Assinatura (Keystore) 🔑</Subtitle>
                  <Paragraph>
                    O primeiro passo foi criar uma identidade digital para o aplicativo. A chave de assinatura garante que apenas o desenvolvedor original possa enviar atualizações para a Play Store, protegendo os usuários.
                  </Paragraph>
                  <List>
                    <li>
                      <strong>Ação:</strong> Usamos o comando `keytool` no terminal para gerar um arquivo de chave.
                      <br />
                      <strong>Comando Executado:</strong>
                      <CodeBlock language="bash">
                        {`keytool -genkeypair -v -keystore sua-chave-de-release.keystore -alias seu-alias-da-chave -keyalg RSA -keysize 2048 -validity 10000`}
                      </CodeBlock>
                      <li>
                        1. Enter keystore password:
                      </li>
                      <li>
                        2. Re-enter new password:
                      </li>
                      <li>
                        3. What is your first and last name?
                      </li>
                      <li>
                        4. What is the name of your organizational unit?
                      </li>
                      <li>
                        5. What is the name of your organization?
                      </li>
                      <li>
                        6. What is the name of your City or Locality?
                      </li>
                      <li>
                        7. What is the name of your State or Province?
                      </li>
                      <li>
                        8. What is the two-letter country code for this unit?
                      </li>
                      <br />
                      <strong>Resultado:</strong> Um arquivo `sua-chave-de-release.keystore` foi criado. Ele foi movido para a pasta `android/app` do projeto e suas senhas foram guardadas em um local seguro.
                    </li>
                  </List>

                  <Subtitle>2. Configuração das Variáveis de Segurança 🔒</Subtitle>
                  <Paragraph>
                    Para não expor as senhas da keystore diretamente no código, nós as armazenamos de forma segura como variáveis no arquivo de propriedades do Gradle.
                  </Paragraph>
                  <List>
                    <li>
                      <strong>Ação:</strong> Editamos o arquivo <strong>android/gradle.properties</strong> e adicionamos as seguintes linhas, que são lidas pelo sistema de build, mas não são expostas no controle de versão se o arquivo estiver no `.gitignore`.
                      <CodeBlock language="properties">
                        {`MYAPP_UPLOAD_STORE_FILE=sua-chave-de-release.keystore
MYAPP_UPLOAD_KEY_ALIAS=seu-alias-da-chave
MYAPP_UPLOAD_STORE_PASSWORD=sua-senha-do-keystore
MYAPP_UPLOAD_KEY_PASSWORD=sua-senha-da-chave`}
                      </CodeBlock>
                    </li>
                  </List>

                  <Subtitle>3. Configuração do `build.gradle` para Assinatura ✍️</Subtitle>
                  <Paragraph>
                    Nesta etapa, instruímos o sistema de build do Android (Gradle) a usar nossa chave para assinar a versão de `release` do aplicativo.
                  </Paragraph>
                  <List>
                    <li>
                      <strong>Ação:</strong> Editamos o arquivo <strong>android/app/build.gradle</strong>. Primeiro, adicionamos um bloco `signingConfigs` para carregar as variáveis do passo anterior. Em seguida, no bloco `buildTypes`, garantimos que o tipo `release` usasse essa nova configuração de assinatura.
                      <CodeBlock language="groovy">
                        {`...
android {
    ...
    signingConfigs {
        release {
            if (project.hasProperty('MYAPP_UPLOAD_STORE_FILE')) {
                storeFile file(MYAPP_UPLOAD_STORE_FILE)
                storePassword MYAPP_UPLOAD_STORE_PASSWORD
                keyAlias MYAPP_UPLOAD_KEY_ALIAS
                keyPassword MYAPP_UPLOAD_KEY_PASSWORD
            }
        }
    }
    buildTypes {
        release {
            ...
            signingConfig signingConfigs.release
        }
    }
}`}
                      </CodeBlock>
                    </li>
                  </List>

                  <Subtitle>4. Gerenciando a Versão do App (versionCode & versionName) 📊</Subtitle>
                  <Paragraph>
                    Esta parte é crucial para publicar e, principalmente, atualizar seu aplicativo na <strong>Google Play Store</strong>. As configurações ficam em <strong>android/app/build.gradle</strong>.
                  </Paragraph>
                  <List>
                    <li>
                      <strong>Entendendo os Campos:</strong>
                      <CodeBlock language="groovy">
                        {`defaultConfig {
    ...
    versionCode 1
    versionName "1.0"
}`}
                      </CodeBlock>
                      - <strong>versionName "1.0":</strong> Este é o número da versão que <strong>seus usuários veem</strong> na loja. É um texto livre (ex: "1.0.1", "2.0-beta").
                      <br />
                      - <strong>versionCode 1:</strong> Este é o número que a <strong>Google Play Store usa internamente</strong> para controle. Deve ser um número inteiro e **sempre crescente** a cada nova publicação.
                    </li>
                    <li>
                      <strong>O que fazer a cada atualização:</strong>
                      <br />
                      1. <strong>Aumentar o `versionCode`:</strong> Mudar de `1` para `2`, depois `3`, e assim por diante. A loja rejeitará um APK com `versionCode` igual ou inferior ao já publicado.
                      <br />
                      2. <strong>Atualizar o `versionName`:</strong> Mudar de `"1.0"` para `"1.1"` ou `"2.0"`, para que os usuários saibam que é uma nova versão.
                    </li>
                  </List>

                  <Subtitle>5. Geração do APK Final 🚀</Subtitle>
                  <Paragraph>
                    Com tudo configurado, o passo final é compilar o aplicativo no terminal. A sequência de ações é a seguinte:
                  </Paragraph>
                  <List>
                    <li>
                      <strong>1. Preparar o Terminal (Obrigatório):</strong>
                      <br />
                      Antes de tudo, posicione seu terminal dentro da pasta `android` do seu projeto. Este passo é essencial para que os comandos do Gradle sejam encontrados.
                      <CodeBlock language="bash">
                        {`cd android`}
                      </CodeBlock>
                    </li>
                    <li>
                      <strong>2. Executar a Compilação:</strong>
                      <br />
                      Com o terminal no local certo, escolha uma das opções de comando abaixo.
                      <br /><br />
                      <strong>Opção A (Recomendado para o build final): Compilação Limpa</strong>
                      <br />
                      Garante que nenhum arquivo antigo cause problemas, ideal para a versão que será publicada.
                      <br />
                      - Para Windows:
                      <CodeBlock language="bash">
                        {`gradlew clean && gradlew assembleRelease`}
                      </CodeBlock>
                      - Para Mac/Linux:
                      <CodeBlock language="bash">
                        {`./gradlew clean && ./gradlew assembleRelease`}
                      </CodeBlock>
                      <br />
                      <strong>Opção B (Para o dia a dia): Compilação Direta</strong>
                      <br />
                      É mais rápido, ideal para gerar um APK de teste quando não há grandes mudanças na configuração.
                      <br />
                      - Para Windows:
                      <CodeBlock language="bash">
                        {`gradlew assembleRelease`}
                      </CodeBlock>
                      - Para Mac/Linux:
                      <CodeBlock language="bash">
                        {`./gradlew assembleRelease`}
                      </CodeBlock>
                    </li>
                    <li>
                      <strong>3. Localizar o APK Gerado:</strong>
                      <br />
                      Em ambos os casos, o arquivo de instalação, `app-release.apk`, será criado (ou sobrescrito) com sucesso na pasta `android/app/build/outputs/apk/release/`. Este é o arquivo final, pronto para ser instalado ou enviado para a Google Play Store.
                    </li>
                  </List>
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