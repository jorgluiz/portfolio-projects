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
                    O <strong>LevelManager</strong> é o coração do gameplay. Ele é responsável por instanciar o nível dinâmico, gerenciar as caixas de cores, ditar para onde os parafusos devem voar e verificar as condições de vitória. Sua maior força é usar uma arquitetura orientada a eventos para não se acoplar à UI e atuar como um gerente inteligente de recursos através de Object Pooling.
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

                  <Paragraph><strong>Sistemas Desacoplados</strong></Paragraph>
                  <List>
                    <li><strong>creditsSystem (HammeredCreditsSystem):</strong> Gerencia as lógicas de moedas, recompensas ou pontuação atreladas ao nível.</li>
                    <li><strong>surpriseSpawner (SurpriseBoxSpawner):</strong> Cuida exclusivamente de invocar e gerenciar as caixas do tipo "surpresa".</li>
                    <li><strong>uiDistributor (BoxUITargetDistributor):</strong> Responsável por pegar as posições 3D (sockets) das caixas e vinculá-las aos elementos corretos da UI.</li>
                    <li><strong>screwRegistry (ScrewRegistry):</strong> Um registro independente que mapeia e controla as quantidades e cores dos parafusos disponíveis no tabuleiro.</li>
                  </List>

                  <Paragraph><strong>Estrutura e Controle de Estado (A "Dieta" dos Níveis e Piscina de Objetos)</strong></Paragraph>
                  <List>
                    <li><strong>levelParent:</strong> O objeto (Transform) pai onde o prefab do nível atual é instanciado. O nível em si passou por uma "Dieta": agora é super leve, carregando apenas a malha 3D, os buracos e os parafusos, separando totalmente as caixas dos prefabs de fase.</li>
                    <li><strong>Piscina de Objetos (Object Pooling no level_base):</strong> Em vez de instanciar e destruir caixas a cada fase — o que consome muita bateria e processamento —, o jogo recicla as caixas. Existe um "estoque" fixo no <code>Level_Boxes_3D</code> dentro da cena principal.</li>
                    <li><strong>extraSlotsManager:</strong> O gerenciador da barra de buracos extras, usado quando não há caixas prontas para receber um parafuso.</li>
                    <li><strong>activeBoxes / allBoxesInLevel:</strong> Listas de controle interno para saber, respectivamente, quais caixas estão ativas na mesa e a totalidade de caixas que a fase atual requisitou da piscina.</li>
                  </List>

                  <Subtitle>2. Fluxo de Inicialização (LoadLevel e Configuração Data-Driven)</Subtitle>
                  <Paragraph>
                    A inicialização foi reescrita para ser 100% orientada a dados. O LevelManager agora é super inteligente. Tudo começa no <code>Start()</code>, que aciona o <code>LoadLevel()</code>.
                  </Paragraph>
                  <List>
                    <li><strong>O Sistema de "Cardápio" (LevelData):</strong> O ScriptableObject (LevelData) virou um garçom. Ele dita as regras através de uma lista pré-configurada no Inspector (ex: "Nesta fase preciso de 3 caixas Amarelas e 1 Rosa"). O LevelManager lê esse cardápio.</li>
                    <li>Instancia o prefab "emagrecido" do nível dentro do <code>levelParent</code>.</li>
                    <li><strong>ConfigurarCaixasDaFase():</strong> O LevelManager vai na piscina de caixas escondidas (Object Pool) e busca exatamente as cores que o nível pediu.</li>
                    <li><strong>Regra de Visibilidade:</strong> Por Game Design, o LevelManager liga fisicamente apenas as 2 primeiras caixas. As demais ficam invisíveis na fila, esperando a vez delas.</li>
                    <li><strong>Remapeamento de Sockets:</strong> Ele remapeia os buracos (Sockets) para que a UI e os parafusos saibam exatamente para onde voar, mesmo que a caixa comece o jogo invisível.</li>
                    <li>Manda o <code>screwRegistry</code> se inicializar (mapear os parafusos recém-criados da cena).</li>
                    <li>Dispara o evento <code>onLevelLoadedEvent</code> avisando que o jogo começou, e manda o <code>uiDistributor</code> distribuir os alvos na tela baseados nas caixas pescadas da piscina.</li>
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
                    <li><strong>UpdatePercentageUI:</strong> Calcula a % de caixas completas (<code>completedBoxes / totalBoxes</code>) e grita o novo número pelo <code>onPercentageChangedEvent</code>.</li>
                    <li><strong>CheckWinCondition:</strong> Varre todas as caixas. Se todas estiverem com <code>IsComplete() == true</code>, ele desativa os Slots Extras, dispara o evento de vitória e inicia a rotina <code>LevelComplete()</code> (com delay) para carregar a tela de sucesso. O Reset das caixas da piscina para o próximo nível também acontece neste fluxo.</li>
                  </List>

                  <Subtitle>5. Métodos Auxiliares e Mecânicas Específicas</Subtitle>
                  <List>
                    <li><strong>ActivateBoxByColor:</strong> Acorda uma caixa inativa quando chega a vez dela aparecer na mesa, a registra nas caixas ativas e gerencia a fila da piscina.</li>
                    <li><strong>CheckSlotsForWaitingScrews:</strong> Sempre que uma nova caixa aparece, o Manager olha para os <em>Extra Slots</em> para ver se há parafusos aguardando daquela cor e manda eles voarem para a nova caixa.</li>
                    <li><strong>SpawnFlyingStar:</strong> Dispara o evento de VFX da estrelinha (usado ao completar uma caixa).</li>
                    <li><strong>GetNextHiddenBoxColor:</strong> Usado pela mecânica de "Surpresa". Olha para o tabuleiro e acha uma cor de caixa que ainda está escondida na fila da piscina, garantindo que não escolha uma cor que já está ativa na mesa.</li>
                  </List>

                </Container>
                <VoltarParaTopo />
              </CodeContainer>
            </MainContentLayout>
          </MainLayout>
        </>
      )}
    </>
  );
};

export default GA4NextJsIntegration;
