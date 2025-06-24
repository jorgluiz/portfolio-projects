import { useEffect } from 'react';
import Head from "next/head";
import { useGlobalState } from "../../../context/GlobalStateContext";
import {
  Container,
  SectionTitle,
  Subtitle,
  Paragraph,
  List,
  CodeContainer,
  DividerWithText
} from "@/styles/globalStyles";
import styled from 'styled-components';
import { MainLayout } from "@/components/layout/mainLayout";
import SideBarLayout from "@/components/layout/sideBarLayout";
import HeaderLayout from "@/components/layout/headerLayout";
import MainContentLayout from "@/components/layout/contentLayout";
import Overlay from "@/components/overlay";
import CodeBlock from '@/components/codeBlock';
import VoltarParaTopo from '@/components/backToTop';

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
                    Guia Completo para o Desenvolvimento do Seu App
                  </DividerWithText>
                  <Paragraph>
                    Esta é uma versão aprimorada do seu guia, detalhando cada passo com base na arquitetura de pastas que você definiu.
                  </Paragraph>

                  <Subtitle>Passo 0: Entendendo a Estrutura do Projeto</Subtitle>
                  <Paragraph>
                    Antes de começar a codificar, é fundamental entender o papel de cada pasta que você criou. Essa organização é o seu mapa.
                  </Paragraph>
                  <Paragraph><strong>src/:</strong> Coração do seu aplicativo. Todo o código-fonte principal vive aqui.</Paragraph>
                  <Paragraph><strong>assets/:</strong> Para arquivos estáticos como imagens, ícones e fontes.</Paragraph>
                  <Paragraph><strong>components/:</strong> Peças de UI reutilizáveis. Ex: <strong>CustomHeader.tsx</strong> (um cabeçalho padrão para as telas) e <strong>InputModal.tsx</strong> (um modal para inserir o link do vídeo).</Paragraph>
                  <Paragraph><strong>constants/:</strong> Para valores que não mudam, como cores da marca, chaves de API ou URLs base. Isso evita "números mágicos" e textos repetidos no código.</Paragraph>
                  <Paragraph><strong>hooks/:</strong> Para seus próprios hooks customizados do React. Ex: <strong>useDownloader()</strong>, que pode encapsular a lógica de estado de um download.</Paragraph>
                  <Paragraph><strong>locales/:</strong> Para internacionalização (i18n). Os arquivos <strong>translation.json</strong> dentro de <strong>en-US</strong> e <strong>pt-BR</strong> conterão os textos do app em cada idioma, permitindo que ele seja multilíngue.</Paragraph>
                  <Paragraph><strong>navigation/:</strong> Aqui ficará toda a lógica de navegação. Você pode criar seus Stacks, Tabs e Drawers aqui e apenas importá-los em <strong>App.tsx</strong>.</Paragraph>
                  <Paragraph><strong>screens/:</strong> As telas principais do seu app. Cada arquivo representa uma tela, como <strong>HomeScreen.tsx</strong> (tela inicial) ou <strong>HistoryScreen.tsx</strong> (tela de histórico de downloads).</Paragraph>
                  <Paragraph><strong>services/:</strong> Para a lógica de negócios que não está diretamente ligada à UI. <strong>videoService.ts</strong> é o lugar perfeito para colocar as funções que fazem chamadas de API e gerenciam o download dos vídeos.</Paragraph>
                  <Paragraph><strong>utils/:</strong> Funções utilitárias genéricas que podem ser usadas em qualquer lugar. Ex: uma função para formatar datas, validar URLs, etc.</Paragraph>
                  <Paragraph><strong>__tests__/:</strong> Para os testes automatizados do seu aplicativo, garantindo que tudo funcione como esperado.</Paragraph>

                  <Subtitle>Passos para o Desenvolvimento</Subtitle>

                  <Subtitle>1. Configurar a Navegação do App</Subtitle>
                  <Paragraph>Sua estrutura já tem uma pasta <strong>navigation/</strong>. Vamos usá-la.</Paragraph>
                  <Paragraph><strong>Instalar dependências:</strong> Seus comandos estão corretos. Para garantir, aqui estão todos os pacotes essenciais para uma navegação em stack:</Paragraph>
                  <CodeBlock language="bash">
                    {`npm install @react-navigation/native @react-navigation/stack
npm install react-native-screens react-native-safe-area-context react-native-gesture-handler`}
                  </CodeBlock>
                  <Paragraph><strong>Criar o Navegador:</strong> Dentro da pasta <strong>navigation/</strong>, crie um arquivo como <strong>RootNavigator.tsx</strong>. Nele, defina seu Stack Navigator com todas as telas da pasta <strong>screens/</strong>.</Paragraph>
                  <CodeBlock language="typescript">
                    {`import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import HistoryScreen from '../screens/HistoryScreen';
// Importe outras telas...

const Stack = createStackNavigator();

export function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="History" component={HistoryScreen} />
      {/* Adicione outras telas aqui */}
    </Stack.Navigator>
  );
}`}
                  </CodeBlock>
                  <Paragraph><strong>Integrar no App.tsx:</strong> Seu <strong>App.tsx</strong> ficará bem limpo, apenas envolvendo o <strong>RootNavigator</strong> com o <strong>NavigationContainer</strong>.</Paragraph>

                  <Subtitle>2. Desenvolver as Telas e Componentes</Subtitle>
                  <Paragraph>Com a navegação pronta, comece a construir a interface.</Paragraph>
                  <Paragraph><strong>Tela Inicial (HomeScreen.tsx):</strong> Crie a UI principal onde o usuário irá colar o link. Use o componente <strong>InputModal.tsx</strong> ou um input direto na tela para receber a URL. Adicione um botão "Baixar" que, ao ser pressionado, chamará a função de download.</Paragraph>
                  <Paragraph><strong>Componentes Reutilizáveis (components/):</strong> Desenvolva o <strong>CustomHeader.tsx</strong>. Ele pode receber o título da tela como uma prop e ser usado em todas as telas do seu Stack Navigator, garantindo um visual consistente. O <strong>InputModal.tsx</strong> pode ser um modal que aparece ao clicar em um botão, mantendo a tela principal mais limpa.</Paragraph>

                  <Subtitle>3. Implementar a Lógica de Download (Services)</Subtitle>
                  <Paragraph>Esta é a funcionalidade principal e deve ficar bem isolada na sua pasta de serviços.</Paragraph>
                  <Paragraph><strong>Bibliotecas Necessárias:</strong> Para baixar arquivos, você precisará de uma biblioteca para fazer requisições HTTP e outra para acessar o sistema de arquivos do dispositivo.</Paragraph>
                  <Paragraph><strong>Axios:</strong> Ótimo para as requisições. <strong>npm install axios</strong></Paragraph>
                  <Paragraph><strong>React Native FS:</strong> Essencial para salvar o vídeo na memória do celular. <strong>npm install react-native-fs</strong></Paragraph>
                  <Paragraph><strong>Criar o videoService.ts:</strong> Dentro de <strong>services/videoService.ts</strong>, crie uma função assíncrona, como <strong>downloadVideoFromURL(url: string)</strong>. Esta função usará o Axios para se comunicar com uma possível API e depois usará o React Native FS para baixar o arquivo e salvá-lo em uma pasta no dispositivo.</Paragraph>

                  <Subtitle>4. Gerenciar o Estado Global</Subtitle>
                  <Paragraph>Você precisará saber o status dos downloads ou a lista de vídeos baixados em várias telas.</Paragraph>
                  <Paragraph><strong>React Context com Hooks:</strong> Para um app como este, é uma ótima escolha. Crie um <strong>DownloadProvider</strong> que gerencia uma lista de downloads e o status atual. Você pode colocar essa lógica na pasta <strong>hooks/</strong> ou criar uma nova pasta <strong>context/</strong>.</Paragraph>
                  <Paragraph><strong>Zustand ou Redux:</strong> Se o app crescer muito, considere uma biblioteca de estado mais robusta. Zustand é uma alternativa moderna e mais simples que o Redux.</Paragraph>

                  <Subtitle>5. Internacionalização (i18n)</Subtitle>
                  <Paragraph>Seu app está preparado para ser multilíngue!</Paragraph>
                  <Paragraph><strong>Preencha os translation.json:</strong> Em <strong>locales/pt-BR/translation.json</strong>: <strong>{`{ "download_button": "Baixar Vídeo" }`}</strong>. Em <strong>locales/en-US/translation.json</strong>: <strong>{`{ "download_button": "Download Video" }`}</strong>.</Paragraph>
                  <Paragraph><strong>Use nos Componentes:</strong> No seu componente, em vez de escrever o texto diretamente, use a função <strong>t</strong> do i18next.</Paragraph>
                  <CodeBlock language="jsx">
                    {`import { useTranslation } from 'react-i18next';
const { t } = useTranslation();

<Button title={t('download_button')} />`}
                  </CodeBlock>

                  <Subtitle>6. Adicionar Testes</Subtitle>
                  <Paragraph>A pasta <strong>__tests__</strong> está lá para ser usada. Crie testes para seus componentes com a <strong>React Native Testing Library</strong> e testes unitários para suas funções em <strong>utils/</strong> e <strong>services/</strong>.</Paragraph>

                  <Subtitle>7. Configurações Nativas e Permissões</Subtitle>
                  <Paragraph>Para salvar arquivos, você precisará de permissões do usuário. Edite o <strong>main/AndroidManifest.xml</strong> (para Android) para adicionar a permissão de escrita no armazenamento externo:</Paragraph>
                  <CodeBlock language="xml">
                    {`<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />`}
                  </CodeBlock>
                  <Paragraph>No código, use a API de <strong>PermissionsAndroid</strong> do React Native para solicitar essa permissão ao usuário antes de tentar baixar o primeiro vídeo.</Paragraph>

                  <Subtitle>Resumo das Ações Iniciais (Refinado)</Subtitle>
                  <List>
                    <li><strong>Estrutura:</strong> Entenda o propósito de cada pasta que você criou.</li>
                    <li><strong>Navegação:</strong> Implemente o <strong>RootNavigator.tsx</strong> na pasta <strong>navigation/</strong>.</li>
                    <li><strong>Telas:</strong> Comece a desenvolver a <strong>HomeScreen.tsx</strong> e seus componentes.</li>
                    <li><strong>Serviço:</strong> Crie a função de download em <strong>services/videoService.ts</strong> usando Axios e react-native-fs.</li>
                    <li><strong>Estado:</strong> Crie um Contexto para gerenciar a lista de histórico de downloads.</li>
                    <li><strong>Tradução:</strong> Adicione os textos nos arquivos .json e use-os nos componentes.</li>
                    <li><strong>Permissões:</strong> Configure o <strong>AndroidManifest.xml</strong> e adicione a lógica para solicitar permissão de armazenamento.</li>
                  </List>
                </Container>

                <Container>
                  <DividerWithText>
                    Passo 2: Construindo a Interface e a Arquitetura de Navegação
                  </DividerWithText>
                </Container>

                <Container>
                  <SectionTitle>
                    Componente em Foco: App.tsx (A Arquitetura de Navegação)
                  </SectionTitle>

                  <Paragraph>
                    O arquivo App.tsx é o ponto de entrada da interface e a espinha dorsal de toda a aplicação. O objetivo foi ir além de uma simples lista de telas e construir uma arquitetura de navegação robusta, escalável e com uma experiência de usuário (UX) intuitiva, utilizando a biblioteca React Navigation.
                  </Paragraph>

                  <Subtitle>Desafio Técnico</Subtitle>
                  <Paragraph>
                    O desafio arquitetural era criar um fluxo de navegação que atendesse a dois requisitos distintos e, por vezes, conflitantes:
                  </Paragraph>
                  <List>
                    <li><strong>Navegação Principal:</strong> Prover um menu de acesso global e fácil (um menu lateral) para as seções principais do aplicativo, como "Home" e "Histórico".</li>
                    <li><strong>Navegação Contextual:</strong> Permitir um fluxo de "detalhe" dentro de uma seção, como Histórico (lista) -> Player de Vídeo, sem adicionar a tela do player ao menu principal, o que poluiria a navegação global.</li>
                  </List>

                  <Subtitle>Solução: Arquitetura de Navegadores Aninhados</Subtitle>
                  <Paragraph>
                    A solução para este desafio foi a implementação de navegadores aninhados, uma técnica avançada que consiste em colocar um navegador dentro de outro.
                  </Paragraph>

                  <Paragraph><strong>1. O Navegador Principal (DrawerNavigator)</strong></Paragraph>
                  <Paragraph>
                    Um DrawerNavigator (menu lateral) foi escolhido como o navegador de nível superior. Ele é responsável por apresentar as seções principais do aplicativo.
                  </Paragraph>
                  <Paragraph><strong>Tecnologias Utilizadas:</strong></Paragraph>
                  <List>
                    <li><strong>@react-navigation/drawer:</strong> Biblioteca usada para criar a funcionalidade do menu lateral.</li>
                    <li><strong>Dimensions (API do React Native):</strong> Utilizado para definir a largura do menu de forma responsiva, como 80% da largura da tela (width * 0.8), garantindo uma boa aparência em diferentes tamanhos de dispositivos.</li>
                  </List>

                  <Paragraph><strong>2. O Navegador Aninhado (StackNavigator)</strong></Paragraph>
                  <Paragraph>
                    Para resolver o fluxo contextual, um StackNavigator (navegação em pilha) foi criado e aninhado dentro da rota "Histórico" do Drawer.
                  </Paragraph>
                  <Paragraph><strong>Tecnologias Utilizadas:</strong></Paragraph>
                  <List>
                    <li><strong>@react-navigation/native-stack:</strong> Biblioteca usada para criar a navegação em pilha, que permite "empurrar" novas telas por cima das anteriores.</li>
                  </List>
                  <Paragraph>
                    <strong>Implementação Estratégica:</strong> Foi criado um componente (HistoryStackNavigator) que encapsula a lógica da pilha. Este componente foi então usado como o component da tela "Histórico" no DrawerNavigator.
                    <br /><br />
                    <em>Aprendizado Chave:</em> Esta abordagem resolveu o desafio de forma elegante. Quando o usuário navega para "Histórico", ele entra na pilha. A partir dali, ele pode navegar para a VideoPlayerScreen, e o StackNavigator automaticamente adiciona um botão "voltar", mantendo o usuário no contexto correto, sem alterar o menu principal.
                  </Paragraph>

                  <Paragraph><strong>3. Consistência Visual e Experiência do Usuário</strong></Paragraph>
                  <Paragraph>
                    Para garantir uma UI coesa e evitar problemas visuais, duas técnicas foram aplicadas:
                  </Paragraph>
                  <List>
                    <li><strong>Cabeçalho Centralizado (CustomHeader.tsx):</strong> A propriedade screenOptions do DrawerNavigator foi utilizada para definir o CustomHeader como o cabeçalho padrão para todas as telas, garantindo uma identidade visual única e consistente.</li>
                    <li><strong>Prevenção de Cabeçalho Duplo:</strong> Na definição da rota "Histórico" no Drawer, a opção headerShown: false foi utilizada. Este foi um detalhe crucial para dizer ao Drawer para "não renderizar seu próprio cabeçalho aqui", deixando o StackNavigator aninhado no controle total de seu próprio cabeçalho. Isso evitou o bug visual de um cabeçalho sobreposto a outro.</li>
                  </List>

                  <Paragraph><strong>4. Segurança de Tipos com TypeScript</strong></Paragraph>
                  <Paragraph>
                    Para aumentar a robustez e a manutenibilidade do código, a navegação foi totalmente tipada.
                  </Paragraph>
                  <Paragraph>
                    <strong>Implementação:</strong> Foi definido um tipo RootStackParamList que mapeia o nome de cada rota aos seus parâmetros esperados.
                  </Paragraph>
                  <Paragraph>
                    <CodeBlock language="javascript">
                      {`export type RootStackParamList = VideoPlayer: {filePath: string };`}
                    </CodeBlock>
                  </Paragraph>
                  <Paragraph>
                    <em>Aprendizado e Vantagens:</em> Essa abordagem permitiu que o TypeScript verificasse em tempo de compilação se as chamadas de navegação (navigation.navigate(...)) estavam corretas, prevenindo erros de digitação nos nomes das rotas e garantindo que os parâmetros corretos fossem sempre passados.
                  </Paragraph>

                  <Subtitle>Resultado Final</Subtitle>
                  <Paragraph>
                    O App.tsx tornou-se um exemplo de arquitetura de navegação limpa e escalável. Ele demonstra o uso de navegadores aninhados para criar fluxos de usuário complexos, a aplicação de screenOptions para uma UI consistente, a resolução de problemas de UI como o cabeçalho duplo e a implementação de TypeScript para um código mais seguro e à prova de erros.
                  </Paragraph>
                </Container>

                <Container>
                  <SectionTitle>
                    Componente em Foco: CustomHeader.tsx
                  </SectionTitle>

                  <Paragraph>
                    O desenvolvimento de um cabeçalho personalizado e reutilizável foi um dos primeiros passos para estabelecer a identidade visual e a usabilidade do aplicativo. O objetivo era ir além de um simples título, criando um componente funcional que servisse como o principal ponto de interação de navegação em todo o app.
                  </Paragraph>

                  <Subtitle>Desafio Técnico</Subtitle>
                  <Paragraph>
                    O desafio não era apenas exibir um título, mas construir um componente que fosse ao mesmo tempo:
                  </Paragraph>
                  <List>
                    <li><strong>Reutilizável:</strong> Capaz de exibir diferentes títulos em diferentes telas.</li>
                    <li><strong>Interativo:</strong> Precisava conter um botão para abrir e fechar o menu lateral (Drawer).</li>
                    <li><strong>Esteticamente Equilibrado:</strong> O layout deveria manter o título perfeitamente centralizado, independentemente dos ícones à esquerda ou à direita.</li>
                    <li><strong>Profissional:</strong> Utilizar ícones em vez de texto para as ações, seguindo as melhores práticas de design mobile.</li>
                  </List>

                  <Subtitle>Tecnologias e Conceitos Aplicados</Subtitle>
                  <Paragraph>
                    Para resolver esses desafios, as seguintes tecnologias e conceitos foram implementados:
                  </Paragraph>

                  <Paragraph><strong>Componentização com Props (React & TypeScript)</strong></Paragraph>
                  <Paragraph>
                    A base da solução foi criar um componente funcional, CustomHeader, que recebe props. A propriedade title: string foi tipada com TypeScript, garantindo que qualquer tela que use este cabeçalho precise obrigatoriamente fornecer um título, evitando erros e tornando o código mais previsível.
                  </Paragraph>

                  <Paragraph><strong>Interação com a Navegação (@react-navigation/native)</strong></Paragraph>
                  <Paragraph>
                    Para controlar o menu lateral, não foi necessário passar a função de navegação como prop. Em vez disso, o Hook useNavigation foi utilizado diretamente dentro do componente para obter acesso ao objeto de navegação. A ação de abrir o menu foi implementada com:
                    <br />
                    <CodeBlock language="javascript">
                      {`navigation.dispatch(DrawerActions.toggleDrawer())`}
                    </CodeBlock>
                    <br />
                    <em>Aprendizado:</em> Esta abordagem desacopla o componente da tela pai, tornando-o mais autônomo e fácil de reutilizar em qualquer parte do aplicativo que esteja dentro de um DrawerNavigator.
                  </Paragraph>

                  <Paragraph><strong>Ícones Vetoriais (react-native-vector-icons)</strong></Paragraph>
                  <Paragraph>
                    Para uma aparência profissional, a biblioteca react-native-vector-icons foi escolhida. Em vez de usar texto ou imagens estáticas, foram utilizados os componentes &lt;Icon /&gt; do conjunto Ionicons.
                    <br />
                    <CodeBlock language="javascript">
                      {`Icon name='menu' size={30} color='#fff'`}
                    </CodeBlock>
                    <br />
                    <em>Aprendizado:</em> O uso de ícones vetoriais melhora a qualidade visual (sem perda de resolução em diferentes telas) e a performance do aplicativo em comparação com o uso de múltiplos arquivos de imagem.
                  </Paragraph>

                  <Paragraph><strong>Layout com Flexbox (StyleSheet)</strong></Paragraph>
                  <Paragraph>
                    O desafio do alinhamento foi resolvido com uma estratégia de layout Flexbox no StyleSheet.
                  </Paragraph>
                  <List>
                    <li>O contêiner principal (headerContainer) foi definido com flexDirection: 'row'.</li>
                    <li>O contêiner do título (titleWrapper) recebeu a propriedade flex: 1.</li>
                  </List>
                  <Paragraph>
                    <em>Aprendizado Chave:</em> A propriedade flex: 1 no elemento central faz com que ele se expanda para ocupar todo o espaço disponível entre os elementos da esquerda e da direita. Combinado com alignItems: 'center', isso garante que o título permaneça perfeitamente centralizado, criando um layout robusto e visualmente equilibrado.
                  </Paragraph>

                  <Paragraph><strong>Áreas de Toque (TouchableOpacity)</strong></Paragraph>
                  <Paragraph>
                    Em vez do componente &lt;Button&gt; padrão, foi utilizado o TouchableOpacity para envolver os ícones.
                    <br /><br />
                    <em>Aprendizado:</em> Esta escolha permitiu um controle total sobre o design (mostrando apenas o ícone, sem um fundo de botão padrão) e forneceu um feedback visual sutil de opacidade ao ser pressionado, melhorando a experiência do usuário.
                  </Paragraph>

                  <Subtitle>Resultado Final</Subtitle>
                  <Paragraph>
                    O resultado é um componente CustomHeader limpo, reutilizável e totalmente funcional, que serve como a "assinatura" visual do aplicativo. Ele demonstra a aplicação de conceitos importantes como componentização, hooks de navegação, layout com flexbox e o uso de bibliotecas externas para enriquecer a interface.
                  </Paragraph>
                </Container>

                <Container>
                  <SectionTitle>
                    Componente em Foco: HomeScreen.tsx (O Centro de Comando)
                  </SectionTitle>

                  <Paragraph>
                    A HomeScreen é o coração da aplicação. É muito mais do que um simples formulário; é um orquestrador complexo que gerencia a interação do usuário, a comunicação com o backend e a manipulação de arquivos no dispositivo.
                  </Paragraph>

                  <Subtitle>Desafio Central</Subtitle>
                  <Paragraph>
                    O principal desafio técnico desta tela foi gerenciar um fluxo de trabalho assíncrono e de múltiplos estágios:
                  </Paragraph>
                  <List>
                    <li>Enviar um pedido ao backend.</li>
                    <li>Esperar pelo processamento, que pode levar tempo.</li>
                    <li>Verificar o status periodicamente ("polling").</li>
                    <li>Baixar o arquivo final para o dispositivo.</li>
                    <li>Processar o arquivo baixado (gerar thumbnail).</li>
                    <li>Salvar o resultado no histórico.</li>
                  </List>
                  <Paragraph>
                    Tudo isso enquanto fornece feedback claro e constante ao usuário, sem travar a interface.
                  </Paragraph>

                  <Subtitle>Solução Arquitetural e Tecnologias Aplicadas</Subtitle>
                  <Paragraph>
                    Para resolver este desafio, uma combinação de Hooks do React e APIs nativas foi utilizada, transformando a tela em um gestor de estado eficiente.
                  </Paragraph>

                  <Paragraph><strong>Gerenciamento de Estado e Lógica Assíncrona</strong></Paragraph>
                  <Paragraph>
                    A base da solução foi o uso inteligente dos Hooks do React para controlar o ciclo de vida do processo.
                  </Paragraph>
                  <Paragraph><strong>Tecnologias-Chave:</strong></Paragraph>
                  <List>
                    <li><strong>useState:</strong> Para gerenciar o estado da UI em tempo real (isLoading, statusMessage, currentJob).</li>
                    <li><strong>useEffect:</strong> Essencial para a lógica de "polling". O Hook foi configurado para "observar" o estado currentJob. Quando um ID de trabalho era recebido do backend, o useEffect disparava um setInterval para verificar o status periodicamente.</li>
                    <li><strong>useRef:</strong> Utilizado para guardar a referência do setInterval. Isso permitiu limpar o intervalo de forma segura (clearInterval) quando o trabalho era concluído ou falhava, prevenindo vazamentos de memória.</li>
                  </List>
                  <Paragraph>
                    <em>Aprendizado:</em> A combinação de useState, useEffect, e useRef provou ser uma arquitetura poderosa para gerenciar fluxos assíncronos complexos dentro de um componente React, mantendo o código limpo e o estado previsível.
                  </Paragraph>

                  <Paragraph><strong>Comunicação com o Backend</strong></Paragraph>
                  <Paragraph>
                    Toda a interação com o servidor foi realizada através da API fetch.
                  </Paragraph>
                  <Paragraph><strong>Tecnologias-Chave:</strong></Paragraph>
                  <List>
                    <li><strong>API fetch:</strong> Utilizada para realizar as chamadas POST /download e GET /status/:id.</li>
                    <li><strong>async/await:</strong> Para lidar com as Promises do fetch, resultando em um código mais legível e síncrono na aparência.</li>
                  </List>
                  <Paragraph>
                    <em>Aprendizado:</em> Foi superado o desafio de conectividade entre o emulador Android e o servidor local, utilizando o endereço de IP especial 10.0.2.2 para acessar o localhost da máquina de desenvolvimento.
                  </Paragraph>

                  <Paragraph><strong>Interação com o Dispositivo e Sistema de Arquivos</strong></Paragraph>
                  <Paragraph>
                    Esta tela orquestrou o uso de múltiplas bibliotecas para acessar recursos nativos do dispositivo.
                  </Paragraph>
                  <Paragraph><strong>Tecnologias-Chave:</strong></Paragraph>
                  <List>
                    <li><strong>react-native-permissions:</strong> Implementou a função requestStoragePermission, que se adapta a diferentes versões do Android (pré e pós Scoped Storage), garantindo a compatibilidade.</li>
                    <li><strong>react-native-fs:</strong> Usado para o download final do arquivo do backend para o dispositivo. A implementação incluiu a callback progress para atualizar a statusMessage com a porcentagem do download, melhorando drasticamente a experiência do usuário.</li>
                    <li><strong>react-native-create-thumbnail:</strong> Utilizado para resolver o "bug do fantasma" da FlatList, gerando um preview estático do vídeo após o download. O aprendizado crucial aqui foi a necessidade de usar o prefixo file:// no caminho do arquivo para que a biblioteca nativa funcionasse corretamente.</li>
                    <li><strong>@react-native-async-storage/async-storage:</strong> Para persistir a entrada do novo vídeo no histórico local, garantindo que os dados do usuário não fossem perdidos ao fechar o app.</li>
                  </List>
                </Container>

                <Container>
                  <SectionTitle>
                    Componente em Foco: HistoryScreen.tsx
                  </SectionTitle>

                  <Paragraph>
                    O desenvolvimento da tela de Histórico foi um passo crucial para transformar o aplicativo de uma simples ferramenta para uma experiência completa de gestão de mídia. O objetivo era criar uma interface que não apenas listasse os downloads, mas que também fosse intuitiva, com bom desempenho e repleta de funcionalidades úteis para o usuário.
                  </Paragraph>

                  <Subtitle>Desafio Técnico</Subtitle>
                  <Paragraph>
                    A construção desta tela apresentou múltiplos desafios que exigiram a combinação de diversas tecnologias e conceitos:
                  </Paragraph>
                  <List>
                    <li><strong>Desempenho em Listas:</strong> Como exibir uma lista potencialmente longa de vídeos sem causar lentidão ou consumo excessivo de memória?</li>
                    <li><strong>UI Rica e Interativa:</strong> Como criar um item de lista visualmente atraente, com um preview de vídeo, informações e múltiplos botões de ação (tocar, compartilhar, abrir menu) sem sobrecarregar a interface?</li>
                    <li><strong>Gestão de Estado Complexo:</strong> Como gerenciar o estado de seleção de itens, a visibilidade do menu de opções (Modal) e a confirmação de ações destrutivas como apagar um arquivo?</li>
                    <li><strong>Ações de Sistema de Arquivos:</strong> Como dar ao usuário o poder de apagar não apenas a entrada do histórico, mas também os arquivos físicos (vídeo e thumbnail) do dispositivo de forma segura?</li>
                  </List>

                  <Subtitle>Tecnologias e Conceitos Aplicados</Subtitle>
                  <Paragraph>
                    Para superar estes desafios, foi implementada uma stack de tecnologias robusta dentro deste único componente.
                  </Paragraph>

                  <Paragraph><strong>1. Estrutura da UI e Renderização de Listas</strong></Paragraph>
                  <List>
                    <li><strong>FlatList:</strong> Foi a escolha principal para renderizar a lista. Sua capacidade de "virtualização" foi essencial para garantir o desempenho, renderizando apenas os itens visíveis na tela. A propriedade windowSize foi ajustada para otimizar ainda mais a renderização.</li>
                    <li><strong>Image:</strong> Para exibir os previews. Com base no aprendizado anterior ("Bug do Fantasma"), o componente &lt;Image&gt; foi usado para mostrar o thumbnail estático, garantindo uma rolagem suave e sem falhas visuais.</li>
                    <li><strong>Layout com position: 'absolute':</strong> Para criar a sobreposição dos ícones de "Play", "Compartilhar" e "Menu" sobre a imagem do thumbnail, foi utilizada a posição absoluta, criando uma interface rica e contextual.</li>
                  </List>

                  <Paragraph><strong>2. Gestão de Estado e Ciclo de Vida</strong></Paragraph>
                  <Paragraph><strong>Hooks do React:</strong> Foram utilizados múltiplos hooks para gerenciar a lógica complexa:</Paragraph>
                  <List>
                    <li>useState: Para controlar o que estava sendo carregado (isLoading), a lista de histórico (history), o item atualmente selecionado para o menu (selectedItem) e a opção do checkbox (deleteLocalFiles).</li>
                    <li>useCallback: Para memoizar a função loadHistory, otimizando sua recriação e garantindo que o useFocusEffect não entrasse em loops desnecessários.</li>
                  </List>
                  <Paragraph><strong>Hook do React Navigation:</strong></Paragraph>
                  <List>
                    <li>useFocusEffect: Foi a escolha estratégica para carregar os dados. Isso garante que a lista seja sempre atualizada a partir do AsyncStorage toda a vez que o usuário navega para a tela de Histórico, refletindo imediatamente quaisquer novos downloads.</li>
                  </List>

                  <Paragraph><strong>3. Interatividade Avançada do Usuário</strong></Paragraph>
                  <List>
                    <li><strong>Modal e Pressable:</strong> Para o menu de opções, foi utilizado um componente &lt;Modal&gt; com um fundo transparente. A tela inteira foi envolvida por um &lt;Pressable&gt; para detectar cliques fora do menu e fechá-lo, uma técnica de UX moderna.</li>
                    <li><strong>Propagação de Eventos (event.stopPropagation()):</strong> Este foi um detalhe técnico crucial. Para que o clique no ícone de "Menu" (dentro do TouchableOpacity do item) não acionasse também a navegação para o player, o event.stopPropagation() foi usado para parar a propagação do evento de clique, isolando a ação de cada botão.</li>
                    <li><strong>Alert para Confirmação:</strong> Para a ação destrutiva de apagar, foi usado o Alert.alert com uma matriz de botões (Cancelar e Apagar), forçando uma confirmação do usuário e prevenindo ações acidentais.</li>
                  </List>

                  <Paragraph><strong>4. Integração com APIs do Dispositivo</strong></Paragraph>
                  <List>
                    <li><strong>react-native-fs:</strong> Além de baixar, a biblioteca foi usada aqui para sua função de apagar arquivos, o RNFS.unlink(caminho). Foi implementada uma lógica para apagar tanto o arquivo de vídeo quanto o arquivo de thumbnail correspondente.</li>
                    <li><strong>react-native-share:</strong> Para a funcionalidade de compartilhamento, foi utilizada a função Share.open(), passando o caminho do arquivo local {`(file://$ {item.filePath})`} para que o sistema operacional do Android mostrasse o menu de compartilhamento nativo.</li>
                    <li><strong>@react-native-community/checkbox:</strong> Utilizado para dar ao usuário o controle sobre se a ação de apagar também deveria remover os arquivos físicos.</li>
                  </List>

                  <Subtitle>Resultado Final</Subtitle>
                  <Paragraph>
                    O HistoryScreen.tsx evoluiu de uma simples lista para um centro de gestão de mídia completo e interativo. Ele demonstra não apenas a capacidade de exibir dados, mas também de gerenciar estados complexos, interagir com o sistema de arquivos, integrar APIs nativas de compartilhamento e fornecer uma experiência de usuário segura e polida.
                  </Paragraph>
                </Container>

                <Container>
                  <SectionTitle>
                    Componente em Foco: VideoPlayerScreen.tsx (Controles Customizados e UX Avançada)
                  </SectionTitle>

                  <Paragraph>
                    O objetivo para esta tela foi evoluir de um simples reprodutor de vídeo para uma experiência de mídia imersiva e completa. Isso exigiu a substituição dos controles padrão por uma interface totalmente personalizada, construída do zero para oferecer ao utilizador controlo total e uma interação fluida.
                  </Paragraph>

                  <Subtitle>Desafio Técnico</Subtitle>
                  <Paragraph>
                    A construção de um player de vídeo personalizado envolve a orquestração de múltiplos desafios técnicos em simultâneo:
                  </Paragraph>
                  <List>
                    <li><strong>Gestão de Estado Complexa:</strong> Como controlar de forma síncrona o estado de reprodução (pausado, a tocar, finalizado), o tempo atual, a duração total, o estado de carregamento e a visibilidade dos próprios controlos?</li>
                    <li><strong>Sincronização da UI:</strong> Como garantir que a barra de progresso (Slider) reflita com precisão o tempo do vídeo, e que o vídeo "salte" para o ponto correto quando o utilizador arrasta o slider?</li>
                    <li><strong>Experiência do Utilizador (UX) Inteligente:</strong> Como criar uma interface que seja útil, mas não intrusiva? Os controlos devem aparecer quando necessários e desaparecer automaticamente para não obstruir o vídeo.</li>
                    <li><strong>Integração Nativa:</strong> Como acionar funcionalidades do sistema operativo, como o menu de partilha, diretamente a partir da interface do player?</li>
                  </List>

                  <Subtitle>Tecnologias e Conceitos Aplicados</Subtitle>
                  <Paragraph>
                    Para superar estes desafios, foi implementada uma combinação de múltiplos hooks do React, APIs de componentes de vídeo e bibliotecas de UI.
                  </Paragraph>

                  <Paragraph><strong>1. Arquitetura da UI: Controles Sobrepostos (Overlay)</strong></Paragraph>
                  <Paragraph>
                    Em vez de usar a propriedade controls, foi construída uma camada de controlos (controlsOverlay) que flutua sobre o vídeo.
                  </Paragraph>
                  <Paragraph><strong>Tecnologias Utilizadas:</strong></Paragraph>
                  <List>
                    <li><strong>TouchableWithoutFeedback e Pressable:</strong> Componentes usados para detetar toques. Um TouchableWithoutFeedback envolve todo o ecrã para mostrar/esconder os controlos, enquanto um Pressable interno impede que os toques nos controlos se "propaguem" e fechem o menu.</li>
                    <li><strong>@react-native-community/slider:</strong> A biblioteca escolhida para a barra de progresso, permitindo uma interação de "arrastar" precisa.</li>
                    <li><strong>react-native-vector-icons:</strong> Para exibir ícones contextuais e universalmente reconhecidos (play, pause, reload, share-social-outline).</li>
                  </List>

                  <Paragraph><strong>2. Gestão de Estado e Ciclo de Vida do Vídeo</strong></Paragraph>
                  <Paragraph>O coração do player é a sua máquina de estados, gerida com Hooks do React.</Paragraph>
                  <Paragraph><strong>Tecnologias Utilizadas:</strong></Paragraph>
                  <List>
                    <li><strong>useState:</strong> Essencial para gerir todos os aspetos do player: isPaused, isLoading, showControls, duration, currentTime, hasEnded, e isSliding.</li>
                    <li><strong>Callbacks do react-native-video:</strong> A sincronização entre o vídeo e a UI foi alcançada através dos callbacks do componente &lt;Video&gt;:
                      <List>
                        <li>onLoad: Disparado quando o vídeo carrega, usado para definir a duration total.</li>
                        <li>onProgress: Disparado continuamente durante a reprodução, usado para atualizar o currentTime.</li>
                        <li>onEnd: Disparado quando o vídeo termina, usado para definir hasEnded e isPaused como true.</li>
                      </List>
                    </li>
                    <li><strong>useRef:</strong> Utilizado de duas formas cruciais:
                      <List>
                        <li>videoRef: Para obter uma referência direta ao componente &lt;Video&gt;, permitindo chamar métodos imperativos como videoRef.current.seek().</li>
                        <li>controlsTimeoutRef: Para armazenar o ID do setTimeout, permitindo que o temporizador que esconde os controlos seja limpo de forma segura.</li>
                      </List>
                    </li>
                  </List>

                  <Paragraph><strong>3. Implementação da Lógica de UX Avançada</strong></Paragraph>
                  <Paragraph><strong>Conflito do Slider (O Desafio da Sincronização):</strong></Paragraph>
                  <Paragraph><em>Problema:</em> O que acontece se o utilizador arrasta o slider (onSlidingComplete) ao mesmo tempo que o vídeo envia uma atualização de progresso (onProgress)?</Paragraph>
                  <Paragraph><em>Solução:</em> Foi criado um estado booleano isSliding. A função onProgress só atualiza o currentTime se isSliding for false. Isso garante que a ação do utilizador tenha sempre prioridade sobre as atualizações automáticas do vídeo, resultando numa experiência de "scrubbing" suave.</Paragraph>

                  <Paragraph><strong>Controles com "Auto-Hide":</strong></Paragraph>
                  <Paragraph><em>Solução:</em> O Hook useEffect foi implementado para "observar" as mudanças nos estados showControls e isPaused. Se os controlos estiverem visíveis e o vídeo estiver a tocar, ele inicia um setTimeout de 3 segundos. Se qualquer um desses estados mudar, a função de "limpeza" do useEffect cancela o temporizador anterior, prevenindo comportamentos inesperados.</Paragraph>

                  <Paragraph><strong>4. Integração com API de Partilha Nativa</strong></Paragraph>
                  <Paragraph><strong>Tecnologias Utilizadas:</strong></Paragraph>
                  <List>
                    <li><strong>react-native-share:</strong> A função Share.open() foi chamada, passando a URI do ficheiro local {`(file://$ {filePath})`}, para acionar o menu de partilha nativo do Android.</li>
                  </List>
                  <Paragraph>
                    <em>Aprendizado:</em> A lógica incluiu a pausa do vídeo antes de abrir o menu de partilha e o tratamento do erro comum "User did not share", que ocorre quando o utilizador simplesmente fecha o menu sem escolher uma ação.
                  </Paragraph>

                  <Subtitle>Resultado Final</Subtitle>
                  <Paragraph>
                    O VideoPlayerScreen.tsx evoluiu para um componente de nível profissional que demonstra um profundo entendimento de gestão de estado complexa, manipulação de eventos, ciclo de vida de componentes e integração de APIs nativas em React Native. O resultado é uma experiência de utilizador polida, intuitiva e funcional, que eleva a qualidade geral da aplicação.
                  </Paragraph>
                </Container>

                <Container>
                  <DividerWithText>
                    Refinamento Funcional e de Interface
                  </DividerWithText>

                  <Paragraph>
                    Com o fluxo principal da aplicação a funcionar, esta fase de desenvolvimento foi dedicada ao refinamento funcional. O objetivo foi transformar as telas básicas numa experiência interativa e completa, adicionando funcionalidades avançadas de comunicação, gestão de mídia e aprimorando a interface do utilizador em toda a aplicação.
                  </Paragraph>

                  <Subtitle>Tela Principal (HomeScreen.tsx)</Subtitle>
                  <Paragraph>
                    Esta tela evoluiu de um simples formulário para o "centro de comando" do aplicativo, orquestrando todo o complexo fluxo de download.
                  </Paragraph>
                  <List>
                    <li><strong>Comunicação Assíncrona com Backend:</strong> Foi implementada uma lógica de "polling" utilizando os Hooks useState, useEffect e useRef. A tela envia o pedido de download, recebe um ID de trabalho e verifica o estado periodicamente através da API fetch, atualizando uma mensagem de status (statusMessage) em tempo real para o utilizador.</li>
                    <li><strong>Feedback de Download em Tempo Real:</strong> A função de download final com react-native-fs foi aprimorada com a callback progress. Isto permitiu exibir a percentagem de download em tempo real (ex: "Baixando para o dispositivo: 75%"), oferecendo uma experiência muito mais informativa e transparente.</li>
                    <li><strong>Geração de Thumbnails:</strong> Para resolver o "bug do fantasma" na FlatList e melhorar a performance, foi implementada a biblioteca react-native-create-thumbnail. Após o sucesso de cada download, esta função gera automaticamente uma imagem de preview estática a partir do ficheiro de vídeo local.</li>
                    <li><strong>Persistência de Dados (AsyncStorage):</strong> Ao final do processo, a função saveToHistory foi acionada para salvar um objeto completo no AsyncStorage, contendo não apenas a URL e o caminho do ficheiro, mas também o caminho para o novo thumbnail gerado, garantindo que a tela de histórico tivesse toda a informação necessária.</li>
                  </List>

                  <Subtitle>Tela de Histórico (HistoryScreen.tsx)</Subtitle>
                  <Paragraph>
                    Esta tela foi transformada de uma lista de texto num centro de gestão de mídia interativo.
                  </Paragraph>
                  <List>
                    <li><strong>Previews Visuais:</strong> A FlatList foi configurada para renderizar um componente &lt;Image&gt; leve para cada item, exibindo o thumbnail gerado. Esta abordagem resolveu os problemas de performance e de renderização incorreta da solução anterior, que usava o componente &lt;Video&gt;.</li>
                    <li><strong>Menu de Ações Contextual:</strong> Um ícone de "menu" em cada item abre um &lt;Modal&gt; com opções. A interface utiliza um &lt;Pressable&gt; como overlay para fechar o menu ao clicar fora dele. O método event.stopPropagation() foi usado para evitar que o clique no menu acionasse a navegação para o player.</li>
                    <li><strong>Funcionalidade de Exclusão Segura:</strong> O menu de opções contém um botão "Apagar" que aciona um Alert de confirmação. Se confirmado, a função utiliza RNFS.unlink() para apagar os ficheiros físicos (vídeo e thumbnail) do dispositivo. Um Checkbox permite ao utilizador decidir se os ficheiros devem ou não ser apagados.</li>
                    <li><strong>Funcionalidade de Partilha Nativa:</strong> Um ícone de "partilhar" utiliza a função Share.open() da biblioteca react-native-share para abrir o menu de partilha nativo do Android, permitindo que o utilizador envie o ficheiro de vídeo para outros aplicativos.</li>
                  </List>

                  <Subtitle>Tela do Player de Vídeo (VideoPlayerScreen.tsx)</Subtitle>
                  <Paragraph>
                    O objetivo aqui foi criar uma experiência de reprodução de vídeo totalmente personalizada e imersiva, substituindo os controlos padrão.
                  </Paragraph>
                  <List>
                    <li><strong>Controlos de Reprodução Customizados:</strong> Uma camada de interface (overlay) foi construída sobre o componente &lt;Video&gt;. Ícones da biblioteca react-native-vector-icons foram utilizados para as ações de play, pause e reload.</li>
                    <li><strong>Barra de Progresso Interativa:</strong> Foi implementado o componente Slider para criar uma barra de progresso visual. Foi criada uma lógica com o estado isSliding para que a ação de "arrastar" do utilizador tivesse prioridade sobre as atualizações de tempo do vídeo.</li>
                    <li><strong>Controlos com "Auto-Hide":</strong> Através de useEffect e setTimeout, foi implementada uma lógica que esconde os controlos de vídeo automaticamente após 3 segundos de inatividade, proporcionando uma visualização limpa.</li>
                    <li><strong>Layout Imersivo:</strong> A tela foi configurada com headerShown: false. Um botão de "voltar" flutuante foi posicionado sobre o vídeo, utilizando o hook useSafeAreaInsets para garantir o seu posicionamento seguro abaixo do "notch" do dispositivo.</li>
                  </List>

                  <Subtitle>Componente de Cabeçalho (CustomHeader.tsx)</Subtitle>
                  <Paragraph>
                    Para garantir uma identidade visual consistente, um componente de cabeçalho reutilizável foi criado.
                  </Paragraph>
                  <List>
                    <li><strong>Layout Flexível e Centralizado:</strong> Foi utilizada a propriedade flex: 1 no contentor do título para garantir que o texto permanecesse sempre perfeitamente centralizado, independentemente dos ícones à esquerda ou à direita, criando um layout robusto.</li>
                    <li><strong>Interação com a Navegação:</strong> O Hook useNavigation e a função navigation.dispatch(DrawerActions.toggleDrawer()) foram usados para encapsular a lógica de abrir/fechar o menu lateral dentro do próprio componente, tornando-o autônomo e fácil de reutilizar.</li>
                  </List>
                </Container>

                <Container>
                  <DividerWithText>
                    Resumo Técnico e Stack de Tecnologias
                  </DividerWithText>
                  <Subtitle>Stack de Tecnologias Utilizadas</Subtitle>

                  <Paragraph><strong>Frontend (Aplicativo React Native)</strong></Paragraph>
                  <Table>
                    <THead>
                      <tr>
                        <Th>Categoria</Th>
                        <Th>Tecnologia/Biblioteca</Th>
                        <Th>Finalidade Principal</Th>
                      </tr>
                    </THead>
                    <TBody>
                      <tr>
                        <Td>Linguagem & Framework</Td>
                        <Td>TypeScript & React Native</Td>
                        <Td>Construir um aplicativo robusto, com segurança de tipos, para a plataforma Android.</Td>
                      </tr>
                      <tr>
                        <Td>Arquitetura de Navegação</Td>
                        <Td>React Navigation</Td>
                        <Td>Gerir o fluxo entre telas com uma arquitetura avançada de Drawer (menu) e Stack (pilha) aninhados.</Td>
                      </tr>
                      <tr>
                        <Td>UI & Ícones</Td>
                        <Td>React Native Vector Icons</Td>
                        <Td>Exibir ícones vetoriais de alta qualidade na interface, como nos controlos do player e do cabeçalho.</Td>
                      </tr>
                      <tr>
                        <Td>Sistema de Ficheiros</Td>
                        <Td>React Native FS</Td>
                        <Td>Baixar o ficheiro de vídeo final do backend, salvá-lo no dispositivo e apagá-lo quando solicitado.</Td>
                      </tr>
                      <tr>
                        <Td>Geração de Preview</Td>
                        <Td>React Native Create Thumbnail</Td>
                        <Td>Criar uma imagem de preview (thumbnail) a partir do ficheiro de vídeo baixado, otimizando a performance da lista de histórico.</Td>
                      </tr>
                      <tr>
                        <Td>Permissões Nativas</Td>
                        <Td>React Native Permissions</Td>
                        <Td>Solicitar permissões de armazenamento ao utilizador de forma segura e compatível com diferentes versões do Android.</Td>
                      </tr>
                      <tr>
                        <Td>Armazenamento Local</Td>
                        <Td>@react-native-async-storage/async-storage</Td>
                        <Td>Persistir o histórico de downloads (metadados como URL, caminhos de ficheiro, etc.) no dispositivo do utilizador.</Td>
                      </tr>
                      <tr>
                        <Td>Reprodução de Mídia</Td>
                        <Td>React Native Video</Td>
                        <Td>Exibir os previews de vídeo na lista e tocar os vídeos em tela cheia no player.</Td>
                      </tr>
                      <tr>
                        <Td>Partilha Nativa</Td>
                        <Td>React Native Share</Td>
                        <Td>Acionar o menu de partilha nativo do Android para que o utilizador possa enviar o ficheiro de vídeo para outras aplicações.</Td>
                      </tr>
                      <tr>
                        <Td>Componentes de UI</Td>
                        <Td>@react-native-community/slider & /checkbox</Td>
                        <Td>Criar controlos de interface interativos e nativos para a barra de progresso do vídeo e para as opções do menu.</Td>
                      </tr>
                    </TBody>
                  </Table>
                </Container>
                <Container>
                  <DividerWithText>
                    Principais Desafios Superados e Aprendizados
                  </DividerWithText>

                  <Paragraph>
                    Esta é uma síntese dos desafios técnicos mais significativos encontrados durante o desenvolvimento do aplicativo e os aprendizados fundamentais que moldaram a sua arquitetura e funcionalidade final.
                  </Paragraph>

                  <Subtitle>1. Configuração do Ambiente de Desenvolvimento</Subtitle>
                  <Paragraph>
                    <strong>Desafio:</strong> Superar os erros de init do React Native, que estavam desatualizados, e configurar corretamente a variável PATH para o Android SDK moderno, que já não utilizava a pasta tools.
                    <br /><br />
                    <strong>Aprendizado:</strong> A importância de diagnosticar erros de ferramentas com base na documentação oficial e recente, em vez de seguir tutoriais mais antigos. A configuração manual e correta das variáveis de ambiente (ANDROID_HOME e PATH) é a fundação para um ambiente de desenvolvimento estável.
                  </Paragraph>

                  <Subtitle>2. Adaptação a uma Arquitetura Cliente-Servidor</Subtitle>
                  <Paragraph>
                    <strong>Desafio:</strong> A análise inicial provou que a estratégia de fazer "scraping" no lado do cliente era instável e arriscada. O desafio foi mudar a mentalidade de um "app tudo-em-um" para um sistema distribuído.
                    <br /><br />
                    <strong>Aprendizado:</strong> A decisão estratégica de delegar o trabalho pesado para um backend assíncrono com uma fila de trabalhos foi a mais importante do projeto. Isso ensinou a importância da separação de responsabilidades, resultando num frontend muito mais leve, estável e focado exclusivamente na experiência do utilizador.
                  </Paragraph>

                  <Subtitle>3. Comunicação com Componentes Nativos</Subtitle>
                  <Paragraph>
                    <strong>Desafio:</strong> Após baixar um vídeo, o app fechava inesperadamente ao tentar gerar um thumbnail, e o player de vídeo não conseguia reproduzir o arquivo salvo.
                    <br /><br />
                    <strong>Aprendizado:</strong> O aprendizado técnico crucial foi a necessidade do prefixo file:// ao passar caminhos de arquivos do dispositivo para bibliotecas nativas como react-native-create-thumbnail e react-native-video. Foi um detalhe que resolveu "crashes" e erros de reprodução.
                  </Paragraph>

                  <Subtitle>4. Renderização de Listas com Performance</Subtitle>
                  <Paragraph>
                    <strong>Desafio:</strong> Diagnosticar e resolver o "bug do fantasma" na FlatList, onde o preview de um vídeo aparecia no item de outro ao rolar a lista.
                    <br /><br />
                    <strong>Aprendizado:</strong> Entendeu-se que usar um componente pesado como &lt;Video&gt; para previews numa lista é uma má prática. A solução performática e correta foi refatorar a lógica para gerar um thumbnail estático (&lt;Image&gt;), o que não só resolveu o bug, mas melhorou drasticamente a fluidez da rolagem.
                  </Paragraph>

                  <Subtitle>5. Permissões Complexas do Android</Subtitle>
                  <Paragraph>
                    <strong>Desafio:</strong> Implementar uma lógica de pedido de permissões de armazenamento que funcionasse tanto em versões antigas do Android quanto nas mais recentes, que possuem o Scoped Storage.
                    <br /><br />
                    <strong>Aprendizado:</strong> Utilizando react-native-permissions, foi criada uma função que primeiro verifica a versão do sistema (Platform.Version). Ela só solicita as permissões READ/WRITE_EXTERNAL_STORAGE em versões do Android onde é estritamente necessário (API &lt; 29), garantindo compatibilidade e seguindo as boas práticas modernas.
                  </Paragraph>
                </Container>
                <VoltarParaTopo></VoltarParaTopo>
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