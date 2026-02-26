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
const DemystifyingReactNavigation = () => {
  const { isLoaded, isHamburguerOpen, setIsHamburguerOpen } = useGlobalState();

  const handleOverlayClick = () => setIsHamburguerOpen(false);

  return (
    <>
      <Head>
        {/* Primary Meta Tags Atualizados para "Realidade do Desenvolvimento" */}
        <title>Debugging e Tópicos Práticos em React Native: Guia Essencial</title>
        <meta
          name="description"
          content="Aprenda sobre a realidade do desenvolvimento React Native: debugging nativo e JS com Flipper, ciclo de vida do app, upgrades, notificações push e automação com CI/CD."
        />
        <meta
          name="keywords"
          content="React Native, Debugging, Flipper, Ciclo de Vida do App, AppState, Upgrade, Notificações Push, CI/CD, Fastlane, EAS, Desenvolvimento Prático"
        />
        <meta name="author" content="Jorge Luiz" />

        {/* Open Graph / Facebook Atualizados */}
        <meta property="og:site_name" content="https://portfolio-projects-production.up.railway.app" />
        <meta property="og:type" content="website" />
        {/* URL mantida conforme solicitado */}
        <meta property="og:url" content="https://portfolio-projects-production.up.railway.app/app-developer/notas-rapidas" />
        <meta property="og:title" content="Debugging e Tópicos Práticos em React Native: Guia Essencial" />
        <meta property="og:description" content="Guia prático sobre os desafios reais do desenvolvimento React Native, cobrindo debugging, upgrades, ciclo de vida do app, notificações e CI/CD." />
        <meta property="og:image" content="https://portfolio-projects-production.up.railway.app/perfil.png" />

        {/* Twitter Atualizados */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://portfolio-projects-production.up.railway.app/app-developer/notas-rapidas" />
        <meta property="twitter:title" content="Debugging e Tópicos Práticos em React Native: Guia Essencial" />
        <meta property="twitter:description" content="Explore a realidade do desenvolvimento React Native: de depurar erros nativos com Flipper a automatizar deploys com Fastlane e EAS." />
        <meta property="twitter:image" content="https://portfolio-projects-production.up.railway.app/perfil.png" />
      </Head>

      {!isLoaded ? null : (
        <>
          {isHamburguerOpen && <Overlay onClick={handleOverlayClick} />}
          <Container>
            <DividerWithText>
              A Análise Técnica do App.tsx
            </DividerWithText>

            <Subtitle>App.tsx</Subtitle>
            <CodeBlock language="jsx">
              {`// src/App.tsx (Versão Corrigida)
import 'react-native-gesture-handler';
import React from 'react';
import {Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useTranslation} from 'react-i18next';

// Importe as suas telas e componentes
import HomeScreen from './screens/HomeScreen';
import HistoryScreen from './screens/HistoryScreen';
import MainLayoutScreen from './screens/footer';
import VideoPlayerScreen from './screens/VideoPlayerScreen';
import CustomHeader from './components/CustomHeader';

import './i18n';

// --- 1. ATUALIZAR OS TIPOS PARA A NOVA ESTRUTURA ---
export type RootStackParamList = {
  MainDrawer: undefined; // Rota para o navegador do menu lateral
  VideoPlayer: {filePath: string}; // A tela do player agora é de nível superior
};

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();
const {width} = Dimensions.get('window');

// --- 2. O MENU LATERAL AGORA É UM COMPONENTE SEPARADO ---
function DrawerNavigator() {
  const {t} = useTranslation();
  return (
    <Drawer.Navigator
      screenOptions={{
        header: props => <CustomHeader {...props} />, // O seu header customizado
        drawerStyle: {
          backgroundColor: '#f4f4f8',
          width: width * 0.8,
        },
      }}>
      <Drawer.Screen name='Home' component={HomeScreen} options={{title: t('app_navigation.home_screen_title')}} />
      <Drawer.Screen name='Histórico' component={HistoryScreen} options={{title: t('app_navigation.history_screen_title')}} />
      <Drawer.Screen name='MainLayoutScreen' component={MainLayoutScreen} />
    </Drawer.Navigator>
  );
}

// --- 3. O COMPONENTE PRINCIPAL AGORA É O STACK NAVIGATOR ---
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* A primeira tela da pilha é o nosso menu lateral inteiro */}
        <Stack.Screen
          name='MainDrawer'
          component={DrawerNavigator}
          options={{headerShown: false}} // Esconde o cabeçalho do Stack para esta tela
        />
        {/* A segunda tela da pilha é o nosso player de vídeo global */}
        <Stack.Screen
          name='VideoPlayer'
          component={VideoPlayerScreen}
          options={{headerShown: false}} // O player tem o seu próprio botão de voltar
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
`}
            </CodeBlock>

            <Subtitle>Passo 1: &lt;NavigationContainer&gt;</Subtitle>
            <Paragraph>
              <strong>O que é?</strong> O componente raiz que encapsula toda a estrutura de navegação.
            </Paragraph>
            <Paragraph>
              <strong>Qual sua função técnica?</strong>
            </Paragraph>
            <List>
              <li>É um provedor de Contexto (<strong>React Context</strong>). Ele mantém o estado da navegação (o histórico de rotas, parâmetros, qual rota está ativa) e o disponibiliza para todos os componentes descendentes.</li>
              <li>Ele gerencia a integração com a plataforma, como o botão de voltar do hardware no Android e a manipulação de URLs para <strong>deep linking</strong>.</li>
              <li>É obrigatório. Nenhuma função de navegação (como o hook <strong>useNavigation</strong> ou <strong>useRoute</strong>) funcionará fora dele.</li>
            </List>

            <Subtitle>Passo 2: &lt;Stack.Navigator&gt;</Subtitle>
            <Paragraph>
              <strong>O que é?</strong> Um componente que implementa um modelo de navegação do tipo "pilha" (<strong>LIFO - Last-In, First-Out</strong>).
            </Paragraph>
            <Paragraph>
              <strong>Qual sua função técnica?</strong>
            </Paragraph>
            <List>
              <li>Ele lê a configuração de todos os seus filhos <strong>Stack.Screen</strong>.</li>
              <li>Ele mantém internamente um array de objetos de rota, que representa a pilha de navegação.</li>
              <li>Quando <strong>navigation.navigate('NovaTela')</strong> é chamado, ele adiciona (empurra) um novo objeto de rota a esse array. Quando <strong>navigation.goBack()</strong> é chamado, ele remove (desempilha) o último objeto.</li>
              <li>Ele renderiza o componente associado à rota que está no topo da pilha e controla as animações de transição (por padrão, slide horizontal).</li>
            </List>

            <Subtitle>Passo 3: &lt;Stack.Screen name='MainDrawer' ... /&gt;</Subtitle>
            <Paragraph>
              <strong>O que é?</strong> Um componente declarativo de configuração para uma rota dentro de um navegador.
            </Paragraph>
            <Paragraph>
              <strong>Qual sua função técnica?</strong>
            </Paragraph>
            <List>
              <li><strong>Stack.Screen</strong> não renderiza UI diretamente. Seu único propósito é passar suas props (<strong>name</strong>, <strong>component</strong>, <strong>options</strong>) para o <strong>Stack.Navigator</strong> pai.</li>
              <li>O navegador pai usa essas informações para construir um mapa interno: <strong>{`{ 'MainDrawer': { component: DrawerNavigator, options: {...} } }`}</strong>.</li>
              <li><strong>Aninhamento (component={'{DrawerNavigator}'}):</strong> Ao definir o <strong>component</strong> como outro navegador, você instrui o <strong>Stack.Navigator</strong> a renderizar todo o componente <strong>DrawerNavigator</strong> quando a rota <strong>'MainDrawer'</strong> estiver ativa na pilha.</li>
              <li><strong>options={'{ { headerShown: false } }'}:</strong> É uma instrução direta para o <strong>Stack.Navigator</strong> que diz: "Para esta rota específica ('MainDrawer'), não renderize a sua própria UI de cabeçalho".</li>
            </List>

            <Subtitle>Passo 4: O Componente DrawerNavigator e suas Props</Subtitle>
            <Paragraph>
              Agora, analisamos o componente que é renderizado pela <strong>Stack.Screen</strong> anterior.
            </Paragraph>
            <CodeBlock language="jsx">
              {`function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{...}}
    >
      <Drawer.Screen ... />
      {/* ... */}
    </Drawer.Navigator>
  );
}`}
            </CodeBlock>
            <Paragraph>
              <strong>O que é Drawer.Navigator?</strong> Um componente que implementa um modelo de navegação com um menu lateral (gaveta).
            </Paragraph>
            <Paragraph>
              <strong>Qual sua função técnica?</strong>
            </Paragraph>
            <List>
              <li>Assim como o Stack, ele lê a configuração de seus filhos <strong>Drawer.Screen</strong>.</li>
              <li>Ele renderiza a UI do componente da rota ativa.</li>
              <li>Adicionalmente, ele renderiza a UI da gaveta lateral e gerencia seu estado (aberto/fechado) e as interações.</li>
            </List>

            <Subtitle>Passo 5: A Prop screenOptions e a Função header</Subtitle>
            <CodeBlock language="jsx">
              {`screenOptions={{
    header: props => <CustomHeader {...props} />,
    // ...
}}`}
            </CodeBlock>
            <Paragraph>
              <strong>O que é a prop screenOptions?</strong> É uma prop que permite definir <strong>options</strong> padrão para todos os componentes <strong>Screen</strong> filhos, evitando repetição de código.
            </Paragraph>
            <Paragraph>
              <strong>O que é a opção header?</strong> É uma chave que aceita uma função para renderizar um componente customizado no lugar do cabeçalho padrão.
            </Paragraph>
            <Paragraph>
              <strong>Qual a função técnica de <code>header: props {'=>'} &lt;CustomHeader {"'{...props}'"} /&gt;</code>?</strong>
            </Paragraph>
            <List>
              <li>Para cada <strong>Drawer.Screen</strong>, o <strong>Drawer.Navigator</strong> executa a função que você forneceu.</li>
              <li>Ao executar, ele passa um objeto <strong>props</strong> contendo o estado e funções da tela específica:
                <ul>
                  <li><strong>props.navigation:</strong> O objeto de navegação para disparar ações.</li>
                  <li><strong>props.route:</strong> O objeto da rota atual (com <strong>name</strong> e <strong>params</strong>).</li>
                  <li><strong>props.options:</strong> O objeto de opções da tela (de onde vem o <strong>title</strong>).</li>
                </ul>
              </li>
              <li>Sua função então retorna o <strong>&lt;CustomHeader /&gt;</strong>, passando todas as props recebidas para ele.</li>
            </List>

            <Subtitle>Passo 6: &lt;Drawer.Screen&gt; e a Conexão Final</Subtitle>
            <CodeBlock language="jsx">
              {`<Drawer.Navigator ...>
    {/* TELA INICIAL */}
    <Drawer.Screen name='Home' component={HomeScreen} options={{title: 'Início'}} />
    
    {/* OUTRAS TELAS */}
    <Drawer.Screen name='Histórico' component={HistoryScreen} options={{title: 'Meu Histórico'}} />
    <Drawer.Screen name='MainLayoutScreen' component={MainLayoutScreen} />
</Drawer.Navigator>`}
            </CodeBlock>
            <Paragraph>
              <strong>Sua observação:</strong> "essas telas vai renderizar com header"
            </Paragraph>
            <Paragraph>
              <strong>Análise técnica:</strong> Correto. Como <strong>screenOptions</strong> define um header customizado, todas as telas (Home, Histórico, MainLayoutScreen) filhas diretas deste <strong>Drawer.Navigator</strong> serão renderizadas com o componente <strong>&lt;CustomHeader /&gt;</strong>.
            </Paragraph>
            <Paragraph>
              <strong>Sua nova observação:</strong> "a ordem dos componentes importam para quem vai aparecer primeiro!"
            </Paragraph>
            <Paragraph>
              <strong>Análise técnica:</strong> Correto, e este é um ponto crucial. Por padrão, o React Navigation usa a ordem de declaração dos componentes <strong>Screen</strong> para definir duas coisas:
            </Paragraph>
            <List>
              <li><strong>A Rota Inicial:</strong> O primeiro <strong>Drawer.Screen</strong> declarado (neste caso, <strong>Home</strong>) será a tela inicial padrão que o usuário verá quando este navegador for carregado.</li>
              <li><strong>A Ordem no Menu:</strong> A ordem em que você declara as telas é a mesma ordem em que elas aparecerão como itens no menu lateral.</li>
            </List>
            <Paragraph>
              Portanto, ao organizar suas telas, a primeira da lista tem esse papel especial de ser o ponto de partida daquele navegador. Você pode mudar a rota inicial explicitamente usando a prop <strong>initialRouteName</strong> no <strong>Drawer.Navigator</strong>, mas o comportamento padrão e mais comum é controlar pela ordem.
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
export default DemystifyingReactNavigation;