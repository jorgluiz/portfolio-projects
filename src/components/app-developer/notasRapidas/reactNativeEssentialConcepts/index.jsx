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
const ReactNativeEssentialConcepts = () => {
  const { isLoaded, isHamburguerOpen, setIsHamburguerOpen } = useGlobalState();

  const handleOverlayClick = () => setIsHamburguerOpen(false);

  return (
    <>
      <Head>
        {/* Primary Meta Tags Atualizados para "Conceitos Essenciais do React Native" */}
        <title>Guia Fundamental de React Native: Conceitos Essenciais para Iniciantes</title>
        <meta
          name="description"
          content="Aprenda os conceitos essenciais do React Native: componentes nativos (View, Text), estilização com StyleSheet, React Navigation e a diferença entre Expo e Bare."
        />
        <meta
          name="keywords"
          content="React Native, Guia para Iniciantes, Conceitos Fundamentais, Expo, React Navigation, StyleSheet, Componentes Nativos, Desenvolvimento Mobile, Flexbox"
        />
        <meta name="author" content="Jorge Luiz" />

        {/* Open Graph / Facebook Atualizados */}
        <meta property="og:site_name" content="https://portfolio-projects-production.up.railway.app" />
        <meta property="og:type" content="website" />
        {/* URL mantida conforme solicitado */}
        <meta property="og:url" content="https://portfolio-projects-production.up.railway.app/app-developer/notas-rapidas" />
        <meta property="og:title" content="Guia Fundamental de React Native: Conceitos Essenciais para Iniciantes" />
        <meta property="og:description" content="Um guia completo para quem está começando no React Native, cobrindo os pilares da tecnologia: componentes, estilização, navegação e o ecossistema Expo." />
        <meta property="og:image" content="https://portfolio-projects-production.up.railway.app/perfil.png" />

        {/* Twitter Atualizados */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://portfolio-projects-production.up.railway.app/app-developer/notas-rapidas" />
        <meta property="twitter:title" content="Guia Fundamental de React Native: Conceitos Essenciais para Iniciantes" />
        <meta property="twitter:description" content="Vindo da web? Entenda as bases do React Native, de <View> e <Text> à navegação e a escolha entre Expo e Bare workflow." />
        <meta property="twitter:image" content="https://portfolio-projects-production.up.railway.app/perfil.png" />
      </Head>

      {!isLoaded ? null : (
        <>
          {isHamburguerOpen && <Overlay onClick={handleOverlayClick} />}
          <Container>
            <DividerWithText>
              Guia Fundamental do React Native: Conceitos Essenciais
            </DividerWithText>

            <Subtitle>1. O Coração do React, o Corpo Nativo</Subtitle>
            <Paragraph>
              A filosofia do React Native não é "escreva uma vez, rode em qualquer lugar" e sim "<strong>aprenda uma vez, escreva em qualquer lugar</strong>". Isso significa que sua lógica de negócio (como buscar dados, calcular totais, validar formulários) pode ser 99% a mesma que você usaria na web.
            </Paragraph>
            <Paragraph>
              O que muda é a "camada de visualização" (a UI). Em vez de renderizar para tags HTML no DOM do navegador, o React Native renderiza para componentes de UI nativos da plataforma.
            </Paragraph>
            <List>
              <li><strong>&lt;div&gt;</strong> se torna <strong>&lt;View&gt;</strong>: O bloco de construção mais fundamental para layout.</li>
              <li><strong>&lt;p&gt;</strong>, <strong>&lt;h1&gt;</strong>, <strong>&lt;span&gt;</strong> se tornam <strong>&lt;Text&gt;</strong>: Tudo que é texto deve estar dentro de um componente <strong>&lt;Text&gt;</strong>.</li>
              <li><strong>&lt;img&gt;</strong> se torna <strong>&lt;Image&gt;</strong>: Para exibir imagens locais ou da internet.</li>
              <li><strong>&lt;input&gt;</strong> se torna <strong>&lt;TextInput&gt;</strong>: Para entrada de dados do usuário.</li>
              <li><strong>&lt;button&gt;</strong> se torna <strong>&lt;Button&gt;</strong> (simples) ou <strong>&lt;TouchableOpacity&gt;</strong> (altamente customizável).</li>
            </List>

            <Subtitle>2. As Grandes Diferenças: Onde o Mobile se Separa da Web</Subtitle>
            <Paragraph>
              Aqui estão os conceitos que são fundamentalmente diferentes da web e que você precisa dominar:
            </Paragraph>
            <Paragraph>
              <strong>Estilização:</strong> Não existe CSS. Os estilos são escritos em JavaScript usando a API <strong>StyleSheet</strong>. É muito parecido com CSS, mas em <strong>camelCase</strong> (ex: <strong>backgroundColor</strong> em vez de <strong>background-color</strong>). O layout é quase que exclusivamente baseado em <strong>Flexbox</strong>, então dominar <strong>flexDirection</strong>, <strong>justifyContent</strong> e <strong>alignItems</strong> é crucial.
            </Paragraph>
            <Paragraph>
              <strong>Navegação:</strong> No mobile não temos URLs e links <strong>&lt;a&gt;</strong>. A navegação entre telas é gerenciada por uma biblioteca. A mais popular e padrão da indústria é a <strong>React Navigation</strong>. Você definirá "pilhas" de telas (Stack Navigator), menus de abas (Tab Navigator) e gavetas laterais (Drawer Navigator).
            </Paragraph>
            <Paragraph>
              <strong>A "Bridge" (Ponte):</strong> Este é o conceito mágico por trás do React Native. Existe uma "ponte" que permite que seu código JavaScript se comunique com o código nativo (Java/Kotlin no Android, Swift/Objective-C no iOS). É por isso que o app tem performance nativa. Você raramente interage com a ponte diretamente, mas entender que ela existe ajuda a depurar problemas de performance.
            </Paragraph>
            <Paragraph>
              <strong>APIs do Dispositivo:</strong> Para usar recursos como a câmera, GPS, acelerômetro, contatos ou armazenamento local, você precisa de módulos nativos. Muitas vezes, você usará bibliotecas de terceiros que já fizeram o trabalho de criar a "ponte" para essas APIs.
            </Paragraph>

            <Subtitle>3. O Ecossistema: Expo vs. "Bare"</Subtitle>
            <Paragraph>
              Quando você inicia um projeto, tem uma escolha fundamental a fazer:
            </Paragraph>
            <Paragraph>
              <strong>Fluxo Gerenciado (Expo Go):</strong> Recomendado para iniciantes e muitos projetos comerciais. O Expo é um conjunto de ferramentas e serviços construído em cima do React Native. Ele gerencia todo o trabalho pesado de configuração nativa para você. Você escreve apenas JavaScript/TypeScript e pode testar seu app em seu próprio celular em minutos usando o app Expo Go. Ele já vem com uma vasta biblioteca de APIs nativas pré-construídas (câmera, sensores, autenticação, etc.).
              <br />
              <strong>Vantagem:</strong> Incrivelmente rápido para começar, fácil de compartilhar, sem precisar abrir Xcode ou Android Studio.
              <br />
              <strong>Desvantagem:</strong> Menos flexível se você precisar de um módulo nativo muito específico que o Expo não suporte.
            </Paragraph>
            <Paragraph>
              <strong>Fluxo "Bare" (React Native CLI):</strong> Você tem controle total. Seu projeto terá as pastas <strong>android</strong> e <strong>ios</strong> e você precisará do Xcode (para iOS) e do Android Studio (para Android) instalados para compilar o app.
              <br />
              <strong>Vantagem:</strong> Liberdade total para adicionar qualquer código nativo que desejar.
              <br />
              <strong>Desvantagem:</strong> Configuração inicial muito mais complexa e demorada.
            </Paragraph>
            <Paragraph>
              <strong>Meu conselho:</strong> Comece sempre com Expo. É uma ferramenta fantástica e, se um dia você precisar de algo que ela não oferece, você pode "ejetar" seu projeto para o fluxo "Bare".
            </Paragraph>

            <Subtitle>4. Pontos Críticos para o Sucesso do seu App</Subtitle>
            <Paragraph>
              <strong>Performance de Listas:</strong> Para listas longas, nunca use <strong>.map()</strong>. Sempre use os componentes otimizados <strong>&lt;FlatList&gt;</strong> ou <strong>&lt;SectionList&gt;</strong>. Eles virtualizam as listas, renderizando apenas os itens visíveis na tela, o que economiza uma quantidade imensa de memória e mantém a rolagem suave.
            </Paragraph>
            <Paragraph>
              <strong>Código Específico da Plataforma:</strong> Às vezes, você quer que um componente pareça ou se comporte de maneira diferente no iOS e no Android. O React Native oferece duas maneiras fáceis de fazer isso:
            </Paragraph>
            <List>
              <li>
                1. <strong>API Platform:</strong>
                <Paragraph>
                  <strong>import {'{ Platform }'} from 'react-native';</strong> e use <strong>Platform.OS === 'ios'</strong> ou <strong>Platform.OS === 'android'</strong> para lógicas condicionais.
                </Paragraph>
              </li>
              <li>
                2. <strong>Extensões de Arquivo:</strong>
                <Paragraph>
                  Crie arquivos como <strong>MeuComponente.ios.js</strong> e <strong>MeuComponente.android.js</strong>. O React Native automaticamente importará o arquivo correto para cada plataforma.
                </Paragraph>
              </li>
            </List>
            <Paragraph>
              <strong>Build e Lojas de Aplicativos:</strong> Diferente da web, onde você sobe o código para um servidor, no mobile você precisa compilar um arquivo binário (<strong>.apk</strong> ou <strong>.aab</strong> para Android, <strong>.ipa</strong> para iOS) e enviá-lo para a Google Play Store e a Apple App Store. Este é um processo com suas próprias regras e etapas (certificados, assinaturas, revisões). O Expo simplifica muito este processo com seu serviço de build na nuvem, o <strong>EAS Build</strong>.
            </Paragraph>

            <Paragraph>
              Em resumo, se você já domina React, a curva de aprendizado para o React Native é focada no ambiente mobile: componentes de UI nativos, navegação, estilização via JavaScript e o processo de build para as lojas. É uma habilidade extremamente valiosa e divertida de aprender.
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
export default ReactNativeEssentialConcepts;