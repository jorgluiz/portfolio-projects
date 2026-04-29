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
  { src: '/assets/blenderControllerCustomization/01.png', alt: '???' },
  { src: '/assets/blenderControllerCustomization/02.png', alt: '???' },
  { src: '/assets/blenderControllerCustomization/03.png', alt: '???' },
  { src: '/assets/blenderControllerCustomization/04.png', alt: '???' },
  { src: '/assets/blenderControllerCustomization/05.png', alt: '???' },
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
                    Guia de Rigging Profissional: Personalização de Controladores (Custom Shapes)
                  </SectionTitle>

                  <Subtitle>1. Criando as Formas Base (Meshes)</Subtitle>
                  <Paragraph>
                    Antes de substituir o visual dos ossos, precisamos criar os objetos 3D que servirão de molde. Estes objetos devem ser simples (geralmente feitos a partir de círculos ou curvas) e não serão renderizados no final.
                  </Paragraph>
                  <List>
                    <li>No <strong>Object Mode</strong>, crie as formas desejadas (ex: setas, círculos, caixas).</li>
                    <li>Nomeie esses objetos de forma clara e organizada no Outliner. Para o nosso projeto, usaremos três categorias principais:
                      <ul>
                        <li><code>extremity controller</code> (Para as pontas dos membros)</li>
                        <li><code>guidance controller</code> (Para direcionar as dobras)</li>
                        <li><code>general controller</code> (Para movimentações amplas do corpo)</li>
                      </ul>
                    </li>
                    <li><em>Dica: Mova essas formas para uma Collection separada (ex: "Wigets" ou "Shapes") e oculte-a da visualização principal para não poluir a cena.</em></li>
                  </List>

                  <Subtitle>2. Aplicando a Personalização (Custom Object)</Subtitle>
                  <Paragraph>
                    Com os moldes criados, é hora de dizer ao Blender qual osso deve assumir qual forma visual.
                  </Paragraph>

                  <List>
                    <li>Selecione o seu esqueleto e entre no <strong>Pose Mode</strong>.</li>
                    <li>Selecione o osso controlador que você deseja personalizar.</li>
                    <li>Vá no painel lateral direito e clique na aba <strong>Bone Properties</strong> (ícone do osso verde).</li>
                    <li>Desça até encontrar a seção <strong>Viewport Display</strong> e abra o submenu <strong>Custom Shape</strong>.</li>
                    <li>No campo <strong>Custom Object</strong>, use o conta-gotas (ou a barra de pesquisa) e selecione o molde que você criou (ex: <code>extremity controller</code>). O osso assumirá imediatamente a nova forma!</li>
                  </List>

                  <Subtitle>3. Mapeamento de Controladores: Onde usar cada forma?</Subtitle>
                  <Paragraph>
                    Para manter o rig intuitivo, cada tipo de controlador deve ter um visual correspondente à sua função mecânica. Segue a estrutura aplicada ao nosso personagem:
                  </Paragraph>

                  <Subtitle>🔴 Extremity Controller (Controladores de Extremidade)</Subtitle>
                  <Paragraph>
                    Usados nas partes mais externas que funcionam como os "puxadores" principais do IK.
                  </Paragraph>
                  <List>
                    <li><strong>Mãos/Braços:</strong> <code>Cont_LowerArm.L</code></li>
                    <li><strong>Pés:</strong> <code>Cont_Knee.L</code> (Controlador base do pé)</li>
                    <li><strong>Cauda:</strong> <code>Cont_Tail.10</code> (A ponta que guia o resto do rabo)</li>
                    <li><strong>Orelhas:</strong> <code>Cont_Ear.01.L</code></li>
                  </List>

                  <Subtitle>🟡 Guidance Controller (Controladores de Direção)</Subtitle>
                  <Paragraph>
                    Usados para os <em>Pole Targets</em> flutuantes. Eles não movem o membro, apenas dizem para onde a articulação deve apontar (como o joelho ou cotovelo).
                  </Paragraph>
                  <List>
                    <li><strong>Joelhos:</strong> <code>Cont_Upper_Knee.L</code></li>
                    <li><strong>Cotovelos:</strong> (Se houver Pole Targets para os braços)</li>
                  </List>

                  <Subtitle>🔵 General Controller (Controladores Gerais)</Subtitle>
                  <Paragraph>
                    Usados para controles de massa central ou focos de direção globais. Eles geralmente flutuam à frente do personagem ou ficam na base.
                  </Paragraph>
                  <List>
                    <li><strong>Pélvis / Root:</strong> <code>Cont_Bone</code> (Posicionado no centro de gravidade, de frente para a pélvis, responsável por agachar ou mover o tronco do personagem).</li>
                    <li><strong>Cabeça / Look Target:</strong> <code>Cont_Head</code> (Posicionado flutuando à frente do rosto, serve como alvo para os olhos ou para a rotação geral da cabeça).</li>
                  </List>

                  <Subtitle>💡 Dicas Finais de Ajuste</Subtitle>
                  <List>
                    <li>Se a forma do controlador ficar muito grande, pequena ou virada para o lado errado, você não precisa refazer o molde! Logo abaixo do campo <em>Custom Object</em> na aba <em>Viewport Display</em>, você encontrará opções de <strong>Scale</strong> (Escala) e <strong>Translation/Rotation</strong> para ajustar perfeitamente o visual sem afetar a mecânica do osso.</li>
                  </List>
                  <List>
                    <li>Certifique-se de desmarcar a opção <strong>Wireframe</strong> nas propriedades do Custom Shape se quiser ver a forma preenchida (caso esteja usando visualização sólida).</li>
                  </List>

                  <ImageSlider images={retopologyImages} />

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
