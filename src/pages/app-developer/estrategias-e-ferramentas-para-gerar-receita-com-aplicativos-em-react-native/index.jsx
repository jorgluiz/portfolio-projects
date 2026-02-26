import Head from "next/head";
import { useGlobalState } from "../../../context/GlobalStateContext";
import {
  Container,
  CodeContainer,
  DividerWithText,
  Paragraph,
  Subtitle,
  HighlightText,
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
                    Estratégias e Ferramentas para Gerar Receita com Aplicativos em React Native
                  </DividerWithText>

                  <Paragraph>
                    Desenvolvedores que utilizam React Native para criar aplicativos móveis dispõem de um ecossistema robusto de ferramentas e estratégias para monetizar seus projetos. Desde a exibição de anúncios e a implementação de compras no aplicativo até a oferta de assinaturas e a integração com gateways de pagamento, as opções são variadas e podem ser adaptadas a diferentes modelos de negócio.
                  </Paragraph>

                  <Subtitle>Principais Modelos de Monetização</Subtitle>
                  <Paragraph>
                    A escolha do modelo de monetização ideal dependerá do tipo de aplicativo, do público-alvo e da proposta de valor oferecida. Os métodos mais comuns incluem:
                    <br /><br />
                    <strong>Publicidade (In-App Advertising):</strong> Exibição de anúncios dentro do aplicativo. É um modelo popular para aplicativos gratuitos e pode incluir banners, anúncios intersticiais (tela cheia), vídeos recompensados e anúncios nativos.
                    <br /><br />
                    <strong>Compras no Aplicativo (In-App Purchases - IAP):</strong> Venda de itens virtuais, funcionalidades extras, conteúdo premium ou desbloqueio de níveis diretamente no aplicativo.
                    <br /><br />
                    <strong>Assinaturas (Subscriptions):</strong> Cobrança de uma taxa recorrente (mensal ou anual) para acesso a conteúdo exclusivo, serviços contínuos ou funcionalidades premium.
                    <br /><br />
                    <strong>Venda de Produtos e Serviços Físicos:</strong> Utilização do aplicativo como uma plataforma de e-commerce, exigindo a integração com gateways de pagamento.
                  </Paragraph>

                  <Subtitle>Ferramentas e Bibliotecas para Implementação</Subtitle>
                  <Paragraph>
                    Para cada um desses modelos, existem bibliotecas e SDKs específicos que facilitam a integração com o código React Native.
                  </Paragraph>

                  <Subtitle>Publicidade (In-App Advertising)</Subtitle>
                  <Paragraph>
                    Para exibir anúncios de diversas redes, a mediação é uma abordagem comum. Plataformas de mediação permitem que o desenvolvedor se conecte a múltiplas fontes de anúncios, otimizando a receita ao exibir o anúncio que paga mais.
                  </Paragraph>

                  <Paragraph>
                    <strong>react-native-google-mobile-ads:</strong> Biblioteca oficial do Google para integrar anúncios da AdMob em aplicativos React Native. Suporta Google AdMob.
                  </Paragraph>
                  <Paragraph>
                    <strong>react-native-fbsdk-next:</strong> Permite a integração com o Audience Network do Facebook, oferecendo anúncios nativos e outros formatos. Suporta Facebook Audience Network.
                  </Paragraph>
                  <Paragraph>
                    <strong>AppLovin:</strong> Plataforma de monetização e marketing que oferece um SDK para React Native e atua como uma rede de anúncios e mediadora. Suporta AppLovin e redes parceiras.
                  </Paragraph>
                  <Paragraph>
                    <strong>Appodeal:</strong> Um SDK de mediação que simplifica a integração com dezenas de redes de anúncios. Suporta AdMob, Facebook, AppLovin, etc.
                  </Paragraph>

                  <Paragraph>
                    Exemplo de implementação (conceitual) com react-native-google-mobile-ads:
                  </Paragraph>
                  <CodeBlock language="javascript">
                    {`import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-xxxxxxxxxxxxxxxx/yyyyyyyyyy';

function MyBannerAd() {
  return (
    <BannerAd
      unitId={adUnitId}
      size={BannerAdSize.FULL_BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
    />
  );
}`}
                  </CodeBlock>

                  <Subtitle>Compras no Aplicativo (IAP) e Assinaturas</Subtitle>
                  <Paragraph>
                    Gerenciar compras e assinaturas envolve a comunicação com as <strong>APIs da Apple App Store e da Google Play Store</strong>.
                  </Paragraph>

                  <Paragraph>
                    <strong>react-native-iap:</strong> Uma das bibliotecas mais populares e de código aberto para gerenciar compras no aplicativo e assinaturas em ambas as plataformas.
                  </Paragraph>
                  <Paragraph>
                    <strong>Adapty:</strong> Um serviço que simplifica a implementação de IAP e assinaturas, oferecendo validação de recibos no lado do servidor, análises e testes A/B de paywalls.
                  </Paragraph>
                  <Paragraph>
                    <strong>RevenueCat:</strong> Plataforma similar ao Adapty que gerencia a complexidade das compras e assinaturas, fornecendo um backend robusto e fácil de integrar.
                  </Paragraph>

                  <Paragraph>
                    <strong>Fluxo geral de implementação com react-native-iap:</strong><br />
                    1. <strong>Instalação e configuração:</strong> Adicionar a biblioteca ao projeto e configurar os produtos na App Store Connect (iOS) e no Google Play Console (Android).<br />
                    2. <strong>Busca de produtos:</strong> Utilizar a biblioteca para buscar os produtos disponíveis para compra.<br />
                    3. <strong>Realização da compra:</strong> Iniciar o fluxo de compra quando o usuário clica em um item.<br />
                    4. <strong>Validação do recibo:</strong> Após a compra, validar o recibo com os servidores da Apple/Google para garantir a autenticidade da transação.
                  </Paragraph>

                  <Subtitle>Gateways de Pagamento para Produtos e Serviços Físicos</Subtitle>
                  <Paragraph>
                    Para aplicativos que funcionam como e-commerce, a integração com gateways de pagamento é essencial, especialmente no mercado brasileiro.
                  </Paragraph>

                  <Paragraph>
                    <strong>Stripe:</strong> Um dos gateways de pagamento mais populares globalmente, com um SDK oficial para React Native (@stripe/stripe-react-native) que facilita a criação de formulários de pagamento seguros.
                  </Paragraph>
                  <Paragraph>
                    <strong>Mercado Pago:</strong> Gateway de pagamento líder na América Latina, oferece um SDK e APIs que podem ser integradas em aplicativos React Native para processar pagamentos.
                  </Paragraph>
                  <Paragraph>
                    <strong>PagSeguro (agora PagBank):</strong> Outra opção popular no Brasil, com APIs que permitem a integração de pagamentos em aplicativos móveis.
                  </Paragraph>

                  <Paragraph>
                    Exemplo de uso (conceitual) do SDK do Stripe:
                  </Paragraph>
                  <CodeBlock language="javascript">
                    {`import { useStripe } from '@stripe/stripe-react-native';

function CheckoutScreen() {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();

  const handleCheckout = async () => {
    // 1. Criar um PaymentIntent no seu servidor
    const { paymentIntent, ephemeralKey, customer } = await fetchPaymentSheetParams();

    // 2. Inicializar o Payment Sheet
    const { error } = await initPaymentSheet({
      merchantDisplayName: "Example, Inc.",
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: paymentIntent,
    });

    // 3. Apresentar o Payment Sheet para o usuário
    const { error: paymentError } = await presentPaymentSheet();

    if (paymentError) {
      // Lidar com o erro
    } else {
      // Pagamento bem-sucedido
    }
  };
}`}
                  </CodeBlock>

                  <Paragraph>
                    Em resumo, a escolha da ferramenta certa para gerar receita com um aplicativo React Native está diretamente ligada à estratégia de monetização definida. Para publicidade, soluções como Google AdMob e mediadores como AppLovin são ideais. Para conteúdo digital e assinaturas, react-native-iap, Adapty e RevenueCat são as soluções mais robustas. Já para a venda de produtos físicos, a integração com gateways como Stripe e Mercado Pago é o caminho a seguir.
                  </Paragraph>
                </Container>
                <Container>
                  <DividerWithText>
                    Ideias de Aplicativos React Native "Offline-First"
                  </DividerWithText>

                  <Paragraph>
                    É totalmente possível criar uma vasta gama de aplicativos úteis e criativos em React Native que funcionam de forma independente, sem a necessidade de um backend ou banco de dados externo. A utilização de bancos de dados internos como AsyncStorage, WatermelonDB e Realm é a chave para isso, permitindo que todos os dados sejam armazenados e processados diretamente no dispositivo do usuário.
                  </Paragraph>

                  <Paragraph>
                    A principal vantagem dessa abordagem é o funcionamento 100% offline, maior privacidade para o usuário (já que os dados não saem do aparelho) e custos de desenvolvimento e manutenção reduzidos por não precisar de servidores.
                  </Paragraph>

                  <Paragraph>
                    Aqui estão diversas ideias de aplicativos que se encaixam perfeitamente nesse modelo, com sugestões de qual banco de dados interno seria mais adequado para cada caso.
                  </Paragraph>

                  <DividerWithText>
                    Categorias e Ideias de Aplicativos "Offline-First"
                  </DividerWithText>

                  <Subtitle>1. Ferramentas de Produtividade e Organização Pessoal</Subtitle>
                  <Paragraph>
                    Esses aplicativos se beneficiam da rapidez do acesso local e da funcionalidade offline, pois os usuários precisam deles a qualquer momento.
                  </Paragraph>

                  <Paragraph>
                    <HighlightText>Aplicativo de Lista de Tarefas (To-Do List):</HighlightText><br />
                    <strong>Descrição:</strong> Um clássico. O usuário pode criar múltiplas listas, adicionar tarefas, definir prazos, prioridades e marcar como concluídas.<br />
                    <strong>Banco de Dados Ideal:</strong> AsyncStorage para uma versão muito simples. WatermelonDB ou Realm para funcionalidades avançadas como listas múltiplas, tags e tarefas recorrentes. WatermelonDB é excelente aqui pela sua capacidade de lidar com relações complexas (listas -> tarefas -> subtarefas).
                  </Paragraph>

                  <Paragraph>
                    <HighlightText>Diário ou Journaling:</HighlightText><br />
                    <strong>Descrição:</strong> Um espaço privado para o usuário escrever seus pensamentos, registrar seu humor e anexar fotos (salvas localmente). A privacidade é o maior atrativo.<br />
                    <strong>Banco de Dados Ideal:</strong> Realm. É muito rápido para consultas de texto e criptografia, o que é um grande diferencial para um aplicativo de diário, garantindo a segurança das anotações do usuário.
                  </Paragraph>

                  <Paragraph>
                    <HighlightText>Rastreador de Hábitos (Habit Tracker):</HighlightText><br />
                    <strong>Descrição:</strong> Ajuda o usuário a construir novos hábitos (beber água, ler, fazer exercícios) ou largar os ruins. O app exibe calendários, sequências e estatísticas de progresso.<br />
                    <strong>Banco de Dados Ideal:</strong> WatermelonDB. Lidar com séries temporais e calcular estatísticas complexas é um ponto forte do WatermelonDB, que é otimizado para performance em apps com muitos dados relacionados.
                  </Paragraph>

                  <Paragraph>
                    <HighlightText>Gerenciador de Despesas Simples:</HighlightText><br />
                    <strong>Descrição:</strong> O usuário lança suas despesas e receitas diárias, categoriza os gastos e visualiza relatórios simples.<br />
                    <strong>Banco de Dados Ideal:</strong> Realm ou WatermelonDB. Ambos são capazes de lidar com as consultas necessárias para gerar relatórios e agregar dados de forma eficiente.
                  </Paragraph>

                  <Subtitle>2. Criatividade e Utilidades</Subtitle>
                  <Paragraph>
                    Aplicativos que servem a um propósito específico e criativo, geralmente focados em uma única tarefa.
                  </Paragraph>

                  <Paragraph>
                    <HighlightText>Bloco de Notas ou Anotações Rápidas:</HighlightText><br />
                    <strong>Descrição:</strong> Um aplicativo minimalista para anotações rápidas, listas de compras, ou para salvar trechos de texto.<br />
                    <strong>Banco de Dados Ideal:</strong> AsyncStorage é perfeito para isso. O modelo de chave-valor simples é mais do que suficiente.
                  </Paragraph>

                  <Paragraph>
                    <HighlightText>Cronômetro de Treinos (Workout Timer):</HighlightText><br />
                    <strong>Descrição:</strong> Criação de rotinas de treino personalizadas, como HIIT ou Tabata. O usuário define os tempos de exercício, descanso e o número de séries.<br />
                    <strong>Banco de Dados Ideal:</strong> AsyncStorage para salvar as rotinas criadas pelo usuário, pois são estruturas de dados simples.
                  </Paragraph>

                  <Paragraph>
                    <HighlightText>Contador Universal:</HighlightText><br />
                    <strong>Descrição:</strong> Um aplicativo simples que permite ao usuário criar múltiplos contadores para qualquer coisa que queira contar.<br />
                    <strong>Banco de Dados Ideal:</strong> AsyncStorage ou Realm (se quiser persistência mais robusta e consultas rápidas).
                  </Paragraph>

                  <Paragraph>
                    <HighlightText>Aplicativo de Receitas Pessoais:</HighlightText><br />
                    <strong>Descrição:</strong> Um livro de receitas digital onde o usuário pode salvar suas próprias receitas, com ingredientes, passo a passo e fotos.<br />
                    <strong>Banco de Dados Ideal:</strong> Realm ou WatermelonDB. Ambos são excelentes para estruturar os dados e permitir buscas rápidas.
                  </Paragraph>

                  <Subtitle>3. Aplicativos de Nicho e Referência</Subtitle>
                  <Paragraph>
                    Esses aplicativos armazenam um conjunto de dados para consulta rápida, que não precisa de atualização constante pela internet.
                  </Paragraph>

                  <Paragraph>
                    <HighlightText>Guia de Referência Rápida:</HighlightText><br />
                    <strong>Descrição:</strong> Um guia de consulta para um tópico específico (ex: "Guia de Primeiros Socorros", "Dicionário de Acordes de Violão").<br />
                    <strong>Banco de Dados Ideal:</strong> Os dados podem vir em arquivos JSON no próprio app. Se o usuário puder favoritar ou fazer anotações, AsyncStorage é suficiente.
                  </Paragraph>

                  <Paragraph>
                    <HighlightText>Gerador de Ideias ou Sorteador:</HighlightText><br />
                    <strong>Descrição:</strong> Um app que ajuda a quebrar bloqueios criativos, gerando ideias ou sorteando nomes de uma lista.<br />
                    <strong>Banco de Dados Ideal:</strong> AsyncStorage para salvar as listas personalizadas do usuário.
                  </Paragraph>

                  <Subtitle>Qual Banco de Dados Usar? Um Resumo Prático</Subtitle>
                  <Paragraph>
                    <strong>Use AsyncStorage quando:</strong> Os dados são simples (chave-valor), você não precisa de consultas complexas ou alta performance. É o mais simples de implementar para necessidades básicas.
                  </Paragraph>
                  <Paragraph>
                    <strong>Use Realm quando:</strong> A performance é crítica, você precisa de criptografia (apps com dados sensíveis) e prefere uma API orientada a objetos.
                  </Paragraph>
                  <Paragraph>
                    <strong>Use WatermelonDB quando:</strong> Seu app possui dados complexos e altamente relacionados, você pode precisar de sincronização futura e a performance com milhares de registros é uma preocupação.
                  </Paragraph>

                  <Paragraph>
                    Começar com um projeto que não depende de backend é uma excelente forma de focar na experiência do usuário, na lógica da interface e de publicar um aplicativo completo de forma mais rápida e econômica.
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