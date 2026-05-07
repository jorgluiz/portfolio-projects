import { useEffect } from 'react';
import Head from "next/head";
import { useGlobalState } from "../../context/GlobalStateContext";
import {
  Container,
  SectionTitle,
  Subtitle,
  Paragraph,
  List,
  Link,
  CodeContainer
  // BoldText removed
} from "@/styles/globalStyles";

import { MainLayout } from "@/components/layout/mainLayout";
import SideBarLayout from "@/components/layout/sideBarLayout";
import HeaderLayout from "@/components/layout/headerLayout";
import MainContentLayout from "@/components/layout/contentLayout";
import Overlay from "@/components/overlay";
import VoltarParaTopo from "@/components/backToTop";

import CodeBlock from '@/components/codeBlock';

import ImageSlider from '@/components/imageSlider';

// Array de imagens de exemplo para o slider
const retopologyImages = [
  { src: '/assets/blenderAnimateShapeKeys/01.png', alt: '???' },
  { src: '/assets/blenderAnimateShapeKeys/02.png', alt: '???' },
  { src: '/assets/blenderAnimateShapeKeys/03.png', alt: '???' },
];

const GA4NextJsIntegration = () => {
  const { isLoaded, isHamburguerOpen, setIsHamburguerOpen } = useGlobalState();
  const handleOverlayClick = () => setIsHamburguerOpen(false);


  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Passo a Passo: Integrar Google Analytics 4 (GA4) no Next.js | Guia Completo</title>
        <meta
          name="description"
          content="Guia completo para integrar o Google Analytics 4 (GA4) em projetos Next.js. Aprenda as melhores práticas de SEO, rastreamento e análise de dados para melhorar o desempenho do seu site."
        />
        <meta
          name="keywords"
          content="Google Analytics 4, GA4, Next.js, SEO, integração, análise de dados, rastreamento de usuários, Google Tag Manager"
        />
        <meta name="author" content="Jorge Luiz" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:site_name" content="https://portfolio-projects-production.up.railway.app" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://portfolio-projects-production.up.railway.app/menu-secreto/analytics-ga4-install" />
        <meta property="og:title" content="Portfólio de Projetos | Desenvolvedor Full Stack com React, Next.js e Node.js" />
        <meta property="og:description" content="Conheça meu portfólio de projetos de desenvolvimento web! Trabalho com tecnologias como ReactJS, NextJS, Node.js e muito mais." />
        <meta property="og:image" content="https://portfolio-projects-production.up.railway.app/perfil.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://portfolio-projects-production.up.railway.app/menu-secreto/analytics-ga4-install" />
        <meta property="twitter:title" content="Portfólio de Projetos | Desenvolvedor Full Stack com React, Next.js e Node.js" />
        <meta property="twitter:description" content="Olá! Eu sou Jorge Luiz, desenvolvedor web especializado em frontend com ReactJS, NextJS e backend com Node.js. Explore meus projetos de sites modernos e aplicações robustas." />
        <meta property="twitter:image" content="https://portfolio-projects-production.up.railway.app/perfil.png" />
      </Head>

      {!isLoaded ? null : (
        <>
          {isHamburguerOpen && <Overlay onClick={handleOverlayClick} />}
          <MainLayout>
            {/* <SideBarLayout /> */}
            {/* <HeaderLayout /> */}
            <MainContentLayout>
              <CodeContainer>
                <Container>
                  <SectionTitle>
                    2. LevelManager: O Maestro do Nível
                  </SectionTitle>

                  <Subtitle>Visão Geral</Subtitle>
                  <Paragraph>
                    O <strong>LevelManager</strong> é o coração do gameplay. Ele é responsável por instanciar o nível dinâmico, gerenciar as caixas de cores, ditar para onde os parafusos devem voar e verificar as condições de vitória. Sua maior força é usar uma arquitetura orientada a eventos para não se acoplar à UI e atuar como um gerente inteligente de recursos através de Object Pooling e regras lógicas rigorosas.
                  </Paragraph>

                  <Subtitle>1. O Inspetor e Dependências</Subtitle>
                  <Paragraph>
                    O script utiliza GameEvents para se comunicar sem criar dependências diretas e delega responsabilidades específicas para gerenciadores menores.
                  </Paragraph>

                  <Paragraph><strong>Events (Comunicação via Scriptable Objects)</strong></Paragraph>
                  <List>
                    <li><strong>onLevelCompletedEvent:</strong> Disparado quando todas as caixas do nível são finalizadas. É o "grito de vitória".</li>
                    <li><strong>onPercentageChangedEvent (Int):</strong> Envia o valor do progresso (0 a 100) para quem for responsável por atualizar a UI.</li>
                    <li><strong>onStarFlyRequestedEvent (Vector3):</strong> Envia a posição 3D de onde uma estrelinha deve começar a voar (VFX).</li>
                    <li><strong>onLevelLoadedEvent (Int):</strong> Avisa aos outros sistemas que o nível foi instanciado, passando o índice da fase.</li>
                  </List>

                  <Paragraph><strong>Sistemas Desacoplados e Controle</strong></Paragraph>
                  <List>
                    <li><strong>creditsSystem (HammeredCreditsSystem):</strong> Gerencia as lógicas de moedas, recompensas e o power-up do Martelo.</li>
                    <li><strong>surpriseSpawner:</strong> Cuida exclusivamente de invocar e gerenciar as caixas do tipo "surpresa". O Manager agora possui uma lista <code>activeSurpriseColors</code> para rastrear quem está na mesa.</li>
                    <li><strong>uiDistributor (BoxUITargetDistributor):</strong> Vincula as posições 3D (sockets) aos elementos corretos da UI.</li>
                    <li><strong>screwRegistry (ScrewRegistry):</strong> Um cartório independente. O Manager não precisa mais varrer a cena para saber se acabaram os parafusos; ele simplesmente pergunta ao registro (<code>CheckIfScrewsExist</code>).</li>
                  </List>

                  <Paragraph><strong>A Piscina de Objetos (Object Pooling)</strong></Paragraph>
                  <List>
                    <li><strong>piscinaDeCaixas:</strong> O "estoque" fixo de caixas pré-carregadas no <code>level_base</code>. O jogo recicla essas caixas em vez de usar Instantiate/Destroy, economizando bateria e processamento.</li>
                    <li><strong>activeBoxes / allBoxesInLevel:</strong> Listas internas de controle para saber quais caixas estão fisicamente na mesa e a totalidade da "fila" requerida pela fase.</li>
                  </List>

                  <Subtitle>2. Fluxo de Inicialização (LoadLevel e Configuração Data-Driven)</Subtitle>
                  <Paragraph>
                    A inicialização é 100% orientada a dados. Tudo começa no <code>Start()</code>, que aciona o <code>LoadLevel()</code>.
                  </Paragraph>
                  <List>
                    <li><strong>O Cardápio (LevelData):</strong> O LevelManager lê o <code>LevelData</code> atual. Instancia o prefab 3D super leve (apenas malhas e parafusos) dentro do <code>levelParent</code> e manda o <code>screwRegistry</code> mapear a cena.</li>
                    <li><strong>ConfigurarCaixasDaFase():</strong> O Manager vai na <code>piscinaDeCaixas</code> escondida e pesca exatamente as cores pedidas no cardápio. Ele ativa as 2 primeiras caixas e deixa o resto na fila. <em>Detalhe vital:</em> Ele repassa a variável <code>surpriseColorToSpawn</code> do cardápio diretamente para a inteligência da caixa selecionada.</li>
                    <li><strong>A Busca Dupla de Conectores (Sockets):</strong> Antes de avisar a UI, ele faz uma varredura inteligente: coleta os conectores (<code>AlignToUI</code>) das caixas ativadas <strong>E</strong> os conectores fixos que possam ter vindo no chão do prefab 3D. Então, ele envia esse pacote completo para o <code>uiDistributor</code> mapear na tela.</li>
                  </List>

                  <Subtitle>3. Core Gameplay: O Roteamento de Parafusos</Subtitle>
                  <Paragraph>
                    A lógica principal de "para onde o parafuso vai" reside no método <strong>GetTargetForScrew()</strong>.
                  </Paragraph>
                  <List>
                    <li><strong>Passo 1:</strong> Chama <code>FindActiveBoxForColor()</code> para achar uma caixa ativa da mesma cor que ainda tenha espaço.</li>
                    <li><strong>Passo 2:</strong> Se a caixa existir e estiver "pronta" (<code>isReady</code>), o parafuso recebe o Transform do soquete da caixa como alvo.</li>
                    <li><strong>Passo 3:</strong> Se NÃO houver caixa, ou se a caixa estiver em animação (não pronta), o parafuso é redirecionado para a barra extra chamando <code>extraSlotsManager.GetFreeSlot()</code>.</li>
                  </List>

                  <Subtitle>4. Atualização e Vitória</Subtitle>
                  <Paragraph>
                    A cada parafuso que chega no destino, o ciclo se repete.
                  </Paragraph>
                  <List>
                    <li><strong>OnScrewCollected:</strong> Registra que o parafuso chegou e aciona a verificação de vitória e atualização da barra de progresso.</li>
                    <li><strong>UpdatePercentageUI:</strong> Calcula a % de caixas completas e grita o novo número exato (arredondado para baixo via <code>Mathf.FloorToInt</code>) pelo <code>onPercentageChangedEvent</code>.</li>
                    <li><strong>CheckWinCondition:</strong> Varre todas as caixas de <code>allBoxesInLevel</code>. Se todas retornarem <code>IsComplete() == true</code>, ele desativa os Slots Extras, dispara o evento de vitória e usa um <code>Invoke</code> para esperar 5 segundos (tempo para os confetes caírem) antes de carregar a tela de sucesso via <code>LevelComplete()</code>.</li>
                  </List>

                  <Subtitle>5. Métodos Auxiliares e Inteligência Avançada</Subtitle>
                  <List>
                    <li><strong>ActivateBoxByColor:</strong> Acorda uma caixa inativa quando chega a vez dela aparecer na mesa, e a registra nas caixas ativas.</li>
                    <li><strong>CheckSlotsForWaitingScrews:</strong> Sempre que uma nova caixa aparece, o Manager manda os parafusos da fila de espera que combinam com aquela cor decolarem imediatamente.</li>
                    <li><strong>A Inteligência da Caixa Surpresa (GetNextHiddenBoxColor):</strong> Quando o sistema precisa invocar uma surpresa, este método varre a fila procurando uma cor escondida. <em>A grande sacada:</em> Ele verifica se a cor sorteada <strong>não está ativa atualmente na mesa</strong>, garantindo que o jogador não fique com duas caixas da mesma cor pedindo parafusos simultaneamente.</li>
                  </List>

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

export default GA4NextJsIntegration;
