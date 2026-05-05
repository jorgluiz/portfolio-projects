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
                    Interface de Usuário (UI): Main Canvas (A Tela Principal)
                  </SectionTitle>

                  <Subtitle>Visão Geral</Subtitle>
                  <Paragraph>
                    O <strong>Main_Canvas</strong> é a raiz de toda a interface visual do jogador dentro da cena <code>level_base</code>. Construído a partir do prefab <code>P_UI_Container_Gameplay</code>, ele funciona como a camada de "vidro" da tela do celular, renderizando textos, botões e barras sobre o ambiente 3D onde as caixas e parafusos existem.
                  </Paragraph>

                  <Subtitle>1. A Hierarquia Raiz (Os Filhos do Canvas)</Subtitle>
                  <Paragraph>
                    Como um quebra-cabeça montado, o Canvas agrupa todos os módulos de UI que detalhamos anteriormente, mantendo-os organizados no mesmo nível hierárquico para não haver conflito de sobreposição:
                  </Paragraph>
                  <List>
                    <li><strong>TopBar_Master_Container:</strong> Barra superior (Progresso e Menu).</li>
                    <li><strong>Side_Controls_Container:</strong> Controles laterais (Zoom e Reset de Câmera).</li>
                    <li><strong>Bottom_HUD_Container:</strong> Ferramentas e Power-ups inferiores.</li>
                    <li><strong>Modal_Settings_Overlay:</strong> A tela popup de configurações que se sobrepõe ao jogo quando chamada.</li>
                    <li><strong>Ad_Banner_Area_Spacer:</strong> O espaço fantasma reservado para anúncios na base.</li>
                  </List>

                  <Subtitle>2. Configurações de Renderização (Componente Canvas)</Subtitle>
                  <List>
                    <li><strong>Render Mode (Screen Space - Overlay):</strong> Uma configuração fundamental. Isso diz à engine que a UI deve ser desenhada "por cima de tudo" em um espaço de tela 2D puro, não importando onde a câmera 3D esteja apontando. Isso garante que os botões nunca fiquem escondidos atrás de um parafuso gigante.</li>
                  </List>

                  <Subtitle>3. Responsividade e Escala (Canvas Scaler)</Subtitle>
                  <Paragraph>
                    O segredo de fazer o jogo ficar bonito em qualquer aparelho celular está neste componente:
                  </Paragraph>
                  <List>
                    <li><strong>UI Scale Mode (Scale With Screen Size):</strong> Em vez de ter o mesmo tamanho em pixels em todas as telas, os elementos da UI crescem ou diminuem proporcionalmente ao tamanho físico do visor do usuário.</li>
                    <li><strong>Reference Resolution (1080 x 2400):</strong> A resolução "perfeita" na qual a UI foi desenhada. Fica claro que o foco do jogo é em orientação Retrato (celular em pé), seguindo os padrões de telas modernas (mais compridas).</li>
                    <li><strong>Match Width or Height (Valor: 1 / Height):</strong> Como a barra deslizante está totalmente voltada para "Height" (1), o Canvas prioriza a altura da tela para fazer seus cálculos de escala. Isso é perfeito para jogos em modo retrato, pois garante que elementos fixados no topo ou na base não fiquem esticados ou esmagados se o celular do jogador for um pouco mais largo que o padrão.</li>
                  </List>

                  <Subtitle>4. Interatividade (Graphic Raycaster)</Subtitle>
                  <List>
                    <li><strong>Graphic Raycaster:</strong> Este componente trabalha em dupla com o <em>EventSystem</em>. Ele é o responsável por disparar raios invisíveis a partir de onde o jogador toca na tela, detectando qual botão gráfico (como o martelo ou o reset de câmera) foi acertado.</li>
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
