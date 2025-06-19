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
                    Guia: Internacionalização (Tradução) em React Native 🌐
                  </DividerWithText>

                  <Paragraph>
                    Este guia mostra como adicionar suporte a múltiplos idiomas (inglês e português) em um aplicativo React Native, utilizando o seu projeto como base. Usaremos as bibliotecas <strong>i18next</strong>, <strong>react-i18next</strong> e <strong>react-native-localize</strong>.
                  </Paragraph>

                  <Subtitle>Etapa 0: Instalação das Dependências</Subtitle>
                  <Paragraph>
                    Primeiro, precisamos instalar as bibliotecas necessárias no terminal do seu projeto.
                  </Paragraph>
                  <CodeBlock language="bash">
                    {`npm install i18next react-i18next react-native-localize`}
                  </CodeBlock>
                  <Paragraph>
                    Ou, se você usa Yarn:
                  </Paragraph>
                  <CodeBlock language="bash">
                    {`yarn add i18next react-i18next react-native-localize`}
                  </CodeBlock>

                  <Subtitle>Etapa 1: Estrutura de Pastas e Arquivos de Tradução</Subtitle>
                  <Paragraph>
                    Vamos criar os "dicionários" da nossa aplicação. Dentro da pasta `src`, crie a seguinte estrutura:
                  </Paragraph>
                  <CodeBlock language="text">
                    {`src/
└── locales/
    ├── en-US/
    │   └── translation.json
    └── pt-BR/
        └── translation.json`}
                  </CodeBlock>

                  <Paragraph>
                    <strong>Arquivo src/locales/pt-BR/translation.json (Português):</strong>
                    <br />
                    Este arquivo contém as chaves e seus respectivos textos em português.
                  </Paragraph>
                  <CodeBlock language="json">
                    {`{
  "home": {
    "recent_video": "Último Vídeo Baixado",
    "new_download": "Novo Download",
    "url_input_placeholder": "Cole a URL do vídeo aqui",
    "paste_link_button": "Colar Link",
    "download_button": "Baixar Vídeo"
  },
  "navigation": {
    "home": "Baixar Vídeo",
    "history": "Histórico"
  }
}`}
                  </CodeBlock>

                  <Paragraph>
                    <strong>Arquivo src/locales/en-US/translation.json (Inglês):</strong>
                    <br />
                    Este arquivo tem as mesmas chaves, mas com os textos em inglês.
                  </Paragraph>
                  <CodeBlock language="json">
                    {`{
  "home": {
    "recent_video": "Last Downloaded Video",
    "new_download": "New Download",
    "url_input_placeholder": "Paste the video URL here",
    "paste_link_button": "Paste Link",
    "download_button": "Download Video"
  },
  "navigation": {
    "home": "Download Video",
    "history": "History"
  }
}`}
                  </CodeBlock>

                  <Subtitle>Etapa 2: Configurando o Cérebro da Tradução (i18n.js)</Subtitle>
                  <Paragraph>
                    Este arquivo é o responsável por inicializar o sistema de tradução, detectar o idioma do dispositivo e carregar o dicionário correto. Crie o arquivo `src/i18n.js`.
                  </Paragraph>
                  <CodeBlock language="javascript">
                    {`import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import * as RNLocalize from 'react-native-localize';

// 1. Importe seus arquivos de tradução
import enTranslation from './locales/en-US/translation.json';
import ptTranslation from './locales/pt-BR/translation.json';

// 2. Defina os recursos (dicionários)
const resources = {
  'en-US': { translation: enTranslation },
  'pt-BR': { translation: ptTranslation },
  // Adicione fallbacks para códigos de idioma curtos
  en: { translation: enTranslation },
  pt: { translation: ptTranslation },
};

// 3. Detecte o melhor idioma disponível no dispositivo
const bestLanguage = RNLocalize.findBestAvailableLanguage(Object.keys(resources));

i18n
  .use(initReactI18next) // Conecta o i18n com o React
  .init({
    resources,
    // Usa o idioma detectado ou o fallback 'pt-BR'
    lng: bestLanguage?.languageTag || 'pt-BR', 
    fallbackLng: 'pt-BR', // Idioma padrão caso a detecção falhe
    
    // Configurações importantes para React Native
    compatibilityJSON: 'v3', 
    interpolation: {
      escapeValue: false, // O React já protege contra XSS
    },
  });

export default i18n;`}
                  </CodeBlock>

                  <Subtitle>Etapa 3: Inicializando no Ponto de Entrada do App (App.tsx)</Subtitle>
                  <Paragraph>
                    Para que o sistema de tradução "acorde" quando o aplicativo iniciar, precisamos importar o arquivo de configuração `i18n.js` logo na primeira linha do nosso componente principal, o `App.tsx`.
                  </Paragraph>
                  <CodeBlock language="typescript">
                    {`// 👇 ESTA É A LINHA MAIS IMPORTANTE! DEVE SER A PRIMEIRA IMPORTAÇÃO.
import './i18n'; 

import 'react-native-gesture-handler';
import React from 'react';
import {Dimensions} from 'react-native';
// ... resto do seu arquivo App.tsx`}
                  </CodeBlock>

                  <Subtitle>Etapa 4: Usando as Traduções na Tela (HomeScreen.tsx)</Subtitle>
                  <List>
                    <li>
                      <strong>1. Importe o hook `useTranslation`:</strong>
                      <CodeBlock language="typescript">
                        {`import {useTranslation} from 'react-i18next';`}
                      </CodeBlock>
                    </li>
                    <li>
                      <strong>2. Instancie a função `t` dentro do componente:</strong>
                      <CodeBlock language="typescript">
                        {`function HomeScreen() {
  const {t} = useTranslation(); // <-- Adicione esta linha
  // ... resto dos seus estados e refs`}
                      </CodeBlock>
                    </li>
                    <li>
                      <strong>3. Substitua o texto fixo pelas chaves de tradução:</strong>
                      <Paragraph>Exemplo 1: Título</Paragraph>
                      <CodeBlock language="typescript">
                        {`// ANTES
<Text style={styles.title}>Novo Download</Text>

// DEPOIS
<Text style={styles.title}>{t('home.new_download')}</Text>`}
                      </CodeBlock>
                      <Paragraph>Exemplo 2: Placeholder do Input</Paragraph>
                      <CodeBlock language="typescript">
                        {`// ANTES
<TextInput
  style={styles.input}
  placeholder='Cole a URL do vídeo aqui'
  // ...
/>

// DEPOIS
<TextInput
  style={styles.input}
  placeholder={t('home.url_input_placeholder')}
  // ...
/>`}
                      </CodeBlock>
                      <Paragraph>Exemplo 3: Botões</Paragraph>
                      <CodeBlock language="typescript">
                        {`// ANTES
<Button title='Colar Link' onPress={handlePaste} color='#5bc0de' />
<Button title='Baixar Vídeo' onPress={handleDownloadPress} color='#841584' />

// DEPOIS
<Button title={t('home.paste_link_button')} onPress={handlePaste} color='#5bc0de' />
<Button title={t('home.download_button')} onPress={handleDownloadPress} color='#841584' />`}
                      </CodeBlock>

                      <Paragraph>Exemplo 4: Alertas com Variáveis (Interpolação)</Paragraph>
                      <CodeBlock language="typescript">
                        {`// ANTES: A mensagem de erro é montada com uma template string.
Alert.alert('Falha no Processamento', \`O servidor falhou: \${data.reason}\`);

// DEPOIS: A função 't' recebe um objeto com as variáveis a serem inseridas.
// A chave 'reason' no objeto corresponde ao placeholder '{{reason}}' no arquivo de tradução.
Alert.alert(
  t('alerts.processing_failed_title'),
  t('alerts.processing_failed_message', { reason: data.reason })
);`}
                      </CodeBlock>

                      <Paragraph>Exemplo 5: Alertas Simples</Paragraph>
                      <CodeBlock language="typescript">
                        {`// ANTES: O título e a mensagem estão fixos no código.
Alert.alert('Sucesso!', 'Vídeo salvo!');

// DEPOIS: Cada parte do alerta é traduzida usando sua respectiva chave.
Alert.alert(t('alerts.success_title'), t('alerts.success_message'));`}
                      </CodeBlock>
                    </li>
                  </List>

                  <Subtitle>Etapa 5: Traduzindo Textos da Navegação</Subtitle>
                  <Paragraph>
                    Você também pode usar a função `t` para definir os títulos nas opções de navegação, como no seu `DrawerNavigator` dentro do `App.tsx`.
                  </Paragraph>
                  <CodeBlock language="typescript">
                    {`// Em App.tsx, dentro do DrawerNavigator

// Importe o hook no topo do arquivo
import { useTranslation } from 'react-i18next';

// ...

function DrawerNavigator() {
  const { t } = useTranslation(); // Use o hook aqui

  return (
    <Drawer.Navigator
      // ...
    >
      <Drawer.Screen 
        name='Home' 
        component={HomeScreen} 
        options={{title: t('navigation.home')}} // <-- Tradução aqui
      />
      <Drawer.Screen 
        name='Histórico' 
        component={HistoryScreen} 
        options={{title: t('navigation.history')}} // <-- Tradução aqui
      />
    </Drawer.Navigator>
  );
}`}
                  </CodeBlock>

                  <Subtitle>Etapa 6: Compilação Final</Subtitle>
                  <Paragraph>
                    Como a biblioteca `react-native-localize` contém código nativo, uma simples atualização do Metro Bundler não é suficiente. Você precisa reinstalar o app no seu dispositivo para que as mudanças nativas tenham efeito.
                  </Paragraph>
                  <CodeBlock language="bash">
                    {`npx react-native run-android`}
                  </CodeBlock>

                  <Subtitle>Pronto!</Subtitle>
                  <Paragraph>
                    Seguindo estes 6 passos, você terá implementado com sucesso um sistema de tradução robusto no seu aplicativo. Ao mudar o idioma do seu celular (de português para inglês, por exemplo) e reabrir o app, toda a interface traduzida aparecerá automaticamente.
                  </Paragraph>
                </Container>
                <VoltarParaTopo></VoltarParaTopo>
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