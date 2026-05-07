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
                    1. Arquitetura de Prefabs: Modularidade e Organização
                  </SectionTitle>

                  <Subtitle>Visão Geral</Subtitle>
                  <Paragraph>
                    Os Prefabs são blocos de montar pré-configurados. No projeto, eles separam claramente o que é interface (UI 2D), o que é mundo físico (3D) e os sistemas de controle. Essa divisão permite que o jogo escale infinitamente, mantendo a cena <code>level_base</code> leve e organizada.
                  </Paragraph>

                  <Subtitle>1. Gerenciadores Globais</Subtitle>
                  <List>
                    <li><strong>P_GameManager (Cena: MainMenu):</strong> O "Deus" do jogo. É o Singleton persistente que carrega os dados salvos do celular, segura a lista de fases (LevelData) e sobrevive à troca de cenas (DontDestroyOnLoad). Ele nasce no menu principal e acompanha o jogador até o fim.</li>
                  </List>

                  <Subtitle>2. Interface Principal e Telas (Canvas Overlay)</Subtitle>
                  <List>
                    <li><strong>P_UI_Container_Gameplay (Cena: base_level):</strong> É a raiz da interface (o Main_Canvas). Contém todos os botões, menus, engrenagens e a HUD do jogador. Transformar isso em prefab garante que, se você adicionar um botão novo, todos os níveis recebem a atualização de uma vez.</li>
                    <li><strong>P_LevelCleared_Panel (Cena: base_level > Main_Canvas):</strong> A tela de vitória. Fica escondida e só aparece quando o <code>LevelManager</code> dá o grito de <em>onLevelCompletedEvent</em>. Provavelmente hospeda o botão de "Próxima Fase" e as pontuações.</li>
                    <li><strong>VFX_Canvas (Cena: base_level > LevelCleared_Panel):</strong> Um Canvas dedicado exclusivamente a renderizar efeitos visuais 2D (como o nosso Atlas de Confetes). Ficar isolado garante que as partículas estourem <em>por cima</em> de qualquer outro elemento da UI.</li>
                    <li><strong>P_UI_Checkpoint_Node (Cena: base_level > BarraProgresso_Container):</strong> O "tijolinho" visual da barra de progresso. Cada vez que uma caixa é completada, um desses nós é ativado ou preenchido para mostrar ao jogador o quão perto ele está de vencer.</li>
                  </List>

                  <Subtitle>3. As Pontes (Guias de Alinhamento 2D para 3D)</Subtitle>
                  <Paragraph>
                    Estes são os "alvos fantasmas" invisíveis no Canvas que alimentam a mágica do script <code>AlignToUI</code>.
                  </Paragraph>
                  <List>
                    <li><strong>P_Guide_UI_LevelBoxes (Cena: base_level > Level_Boxes_UI):</strong> Os marcadores 2D que dizem onde as caixas de parafusos devem se estacionar na tela. O Distribuidor de UI pega esses guias e os injeta nas caixas que saem da piscina.</li>
                    <li><strong>P_Guide_UI_Slot (Cena: base_level > Extra_Slots_UI):</strong> Os marcadores 2D na barra inferior/lateral que ditam onde os "buracos de espera" devem flutuar.</li>
                  </List>

                  <Subtitle>4. Ferramentas e Power-Ups</Subtitle>
                  <List>
                    <li><strong>P_Tool_Hammer (Cena: base_level):</strong> O power-up do Martelo. Como vimos no script <code>LockablePart</code>, quando ativado, permite ao jogador esmagar uma placa de madeira/metal e libertar todos os parafusos dela de uma vez só.</li>
                    <li><strong>P_Tool_Drill (Cena: base_level):</strong> O power-up da Furadeira. (Geralmente usado neste gênero para furar um buraco extra na placa ou destravar instantaneamente um parafuso problemático).</li>
                  </List>

                  <Subtitle>5. Objetos 3D de Gameplay</Subtitle>
                  <List>
                    <li><strong>Mesh_Box (Cena: base_level > Level_Boxes_3D):</strong> A estrela do Object Pooling. É a caixa física 3D que contém o <code>BoxController</code>. Ela nasce invisível no estoque, é ativada quando o cardápio da fase a chama, alinha-se aos guias da UI, recebe os parafusos, e depois se recicla.</li>
                    <li><strong>P_Dock_Slot_3D (Cena: base_level > Extra_Slots_3D):</strong> O cilindro sem sombras que serve de "fila de espera" para os parafusos. Ele passa a vida toda perseguindo seu par <code>P_Guide_UI_Slot</code> graças ao script <code>AlignToUI</code>.</li>
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
