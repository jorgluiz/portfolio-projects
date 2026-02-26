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
const AdvancedReactNativeconcepts = () => {
  const { isLoaded, isHamburguerOpen, setIsHamburguerOpen } = useGlobalState();

  const handleOverlayClick = () => setIsHamburguerOpen(false);

  return (
    <>
      <Head>
        {/* Primary Meta Tags Atualizados para "Notas Rápidas / Tópicos Avançados" */}
        <title>Tópicos Avançados em React Native: Guia para Desenvolvedores</title>
        <meta
          name="description"
          content="Explore tópicos avançados em React Native: gerenciamento de estado (Zustand, Redux), testes (Jest, Maestro), otimização de performance, animações com Reanimated e a nova arquitetura."
        />
        <meta
          name="keywords"
          content="React Native, Tópicos Avançados, Gerenciamento de Estado, Zustand, Redux, Testes, Otimização de Performance, Reanimated, JSI, Desenvolvimento Mobile Avançado"
        />
        <meta name="author" content="Jorge Luiz" />

        {/* Open Graph / Facebook Atualizados */}
        <meta property="og:site_name" content="https://portfolio-projects-production.up.railway.app" />
        <meta property="og:type" content="website" />
        {/* URL atualizada para refletir a nova página */}
        <meta property="og:url" content="https://portfolio-projects-production.up.railway.app/app-developer/notas-rapidas" />
        <meta property="og:title" content="Tópicos Avançados em React Native: Guia para Desenvolvedores" />
        <meta property="og:description" content="Domine conceitos avançados de React Native, incluindo Zustand, Redux, testes, otimização de performance, animações fluidas e muito mais." />
        <meta property="og:image" content="https://portfolio-projects-production.up.railway.app/perfil.png" />

        {/* Twitter Atualizados */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://portfolio-projects-production.up.railway.app/app-developer/notas-rapidas" />
        <meta property="twitter:title" content="Tópicos Avançados em React Native: Guia para Desenvolvedores" />
        <meta property="twitter:description" content="Um guia completo sobre gerenciamento de estado, testes, performance e as melhores práticas para desenvolvimento avançado com React Native." />
        <meta property="twitter:image" content="https://portfolio-projects-production.up.railway.app/perfil.png" />
      </Head>

      {!isLoaded ? null : (
        <>
          {isHamburguerOpen && <Overlay onClick={handleOverlayClick} />}
          <Container>
            <DividerWithText>
              Tópicos Avançados para Desenvolvedores React Native
            </DividerWithText>

            <Subtitle>1. Gerenciamento de Estado Avançado</Subtitle>
            <Paragraph>
              Quando seu aplicativo cresce, passar dados por props entre muitas telas (<strong>prop drilling</strong>) se torna insustentável. Para gerenciar dados que precisam ser acessados em vários lugares (como informações de login do usuário, tema do app, itens no carrinho de compras), você usará uma biblioteca de gerenciamento de estado.
            </Paragraph>
            <Paragraph>
              <strong>Zustand:</strong> Uma opção moderna, minimalista e muito popular. É incrivelmente fácil de configurar e usar, sendo uma excelente primeira escolha depois de <strong>useState</strong> e <strong>useContext</strong>.
            </Paragraph>
            <Paragraph>
              <strong>Redux Toolkit:</strong> O padrão da indústria por muitos anos. É mais robusto, um pouco mais complexo, mas extremamente poderoso para aplicações grandes e complexas.
            </Paragraph>
            <Paragraph>
              <strong>TanStack Query (React Query):</strong> Essencial para gerenciar o "estado do servidor". Ele simplifica drasticamente a busca de dados (caching, retentativas automáticas, atualização em segundo plano), tratando o estado de "carregando" e "erro" de forma muito elegante.
            </Paragraph>

            <Subtitle>2. Estratégias de Teste</Subtitle>
            <Paragraph>
              Para garantir que seu aplicativo funcione corretamente e que novas alterações não quebrem funcionalidades existentes, testar é fundamental.
            </Paragraph>
            <Paragraph>
              <strong>Testes Unitários/Componentes:</strong> Use o <strong>Jest</strong> (que já vem configurado em projetos React Native) junto com a <strong>React Native Testing Library</strong>. Ela permite que você teste seus componentes da mesma forma que um usuário interagiria com eles, garantindo que a UI se comporte como esperado.
            </Paragraph>
            <Paragraph>
              <strong>Testes End-to-End (E2E):</strong> Ferramentas como <strong>Maestro</strong> ou <strong>Detox</strong> automatizam o aplicativo real em um emulador ou dispositivo físico. Elas executam um script que simula um usuário tocando em botões, digitando texto e navegando entre telas, garantindo que os fluxos completos funcionem.
            </Paragraph>

            <Subtitle>3. Otimização de Performance na Prática</Subtitle>
            <Paragraph>
              Manter o aplicativo rápido e fluido é crucial para a experiência do usuário.
            </Paragraph>
            <Paragraph>
              <strong>Memoização:</strong> Use <strong>React.memo</strong> para componentes e os hooks <strong>useCallback</strong> e <strong>useMemo</strong> para evitar que funções e cálculos desnecessários sejam re-executados a cada renderização. Isso é vital em telas com muitas informações.
            </Paragraph>
            <Paragraph>
              <strong>Motor Hermes:</strong> Certifique-se de que o <strong>Hermes</strong>, o motor JavaScript da Meta otimizado para React Native, esteja ativado (ele é padrão em novos projetos). Ele melhora o tempo de inicialização do aplicativo e o uso de memória.
            </Paragraph>
            <Paragraph>
              <strong>Otimização de Imagens:</strong> Imagens grandes podem consumir muita memória. Use formatos de imagem otimizados (como <strong>WebP</strong>) e bibliotecas como <strong>react-native-fast-image</strong> para um melhor controle de cache e performance.
            </Paragraph>
            <Paragraph>
              <strong>Análise de Bundle:</strong> Ferramentas como <strong>react-native-bundle-visualizer</strong> ajudam a ver o que está ocupando mais espaço no seu aplicativo final, permitindo que você otimize o tamanho do download.
            </Paragraph>

            <Subtitle>4. Animações Fluidas</Subtitle>
            <Paragraph>
              Animações bem-feitas dão vida ao seu aplicativo.
            </Paragraph>
            <Paragraph>
              <strong>React Native Reanimated:</strong> Embora o React Native tenha uma API Animated nativa, a biblioteca <strong>React Native Reanimated</strong> é o padrão ouro hoje em dia. Sua principal vantagem é que ela permite que as animações rodem na "thread de UI" (nativa) em vez da "thread de JS". Isso significa que suas animações permanecerão fluidas (60 FPS) mesmo que a lógica JavaScript do seu aplicativo esteja ocupada.
            </Paragraph>
            <Paragraph>
              <strong>Moti:</strong> Uma biblioteca construída sobre o Reanimated que oferece uma sintaxe declarativa e ainda mais simples para criar animações poderosas.
            </Paragraph>

            <Subtitle>5. Funcionalidade Offline e Persistência de Dados</Subtitle>
            <Paragraph>
              Usuários de celular esperam que os aplicativos funcionem mesmo com uma conexão de internet ruim ou inexistente.
            </Paragraph>
            <Paragraph>
              <strong>AsyncStorage:</strong> Para armazenar pequenas quantidades de dados simples (como configurações do usuário ou um token de autenticação), o <strong>AsyncStorage</strong> é a solução ideal. É um simples armazenamento de chave-valor.
            </Paragraph>
            <Paragraph>
              <strong>Bancos de Dados Locais:</strong> Para dados mais complexos e estruturados (como uma lista de mensagens de chat ou produtos), você precisará de um banco de dados local. <strong>WatermelonDB</strong> e <strong>Realm</strong> são duas opções poderosas e populares no ecossistema React Native.
            </Paragraph>

            <Subtitle>6. A Nova Arquitetura (JSI - JavaScript Interface)</Subtitle>
            <Paragraph>
              Este é o futuro do React Native, já disponível e ativado por padrão em novos projetos. Você não precisa escrever código diferente no dia a dia, mas é importante saber que ela existe. A "Ponte" (Bridge) está sendo substituída por uma camada de comunicação mais direta e rápida chamada <strong>JSI</strong>, e o sistema de renderização está sendo atualizado para o <strong>"Fabric"</strong>.
            </Paragraph>
            <Paragraph>
              <strong>O que isso significa para você?</strong> Aplicativos mais rápidos, melhor performance de animações e uma integração muito mais fluida com código nativo. Saber que seu projeto está usando a "Nova Arquitetura" é um sinal de que você está trabalhando com a tecnologia mais recente.
            </Paragraph>

            <Paragraph>
              <strong>Conselho final:</strong> Não tente aprender tudo isso de uma vez. Escolha um tópico que pareça interessante (por exemplo, "Vou adicionar animações com Reanimated no meu projeto" ou "Vou refatorar meu app para usar Zustand") e mergulhe nele. Construir pequenos projetos focados em cada um desses pontos é a melhor maneira de solidificar seu conhecimento e se tornar um desenvolvedor React Native altamente competente.
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
export default AdvancedReactNativeconcepts;