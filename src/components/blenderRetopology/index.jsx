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

import ImageSlider from '@/components/imageSlider'

// Array de imagens de exemplo para o slider
const retopologyImages = [
  { src: '/assets/blenderRetopology/passo1.png', alt: 'Modelo High Poly centralizado' },
  { src: '/assets/blenderRetopology/passo2.png', alt: 'Plane posicionado no nariz' },
  { src: '/assets/blenderRetopology/passo3.png', alt: 'Configuração do Shrinkwrap e Mirror' },
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
                    Guia de Retopologia Profissional no Blender
                  </SectionTitle>

                  <Subtitle>1. Preparação do Modelo High Poly</Subtitle>
                  <Paragraph>
                    Antes de iniciar, é crucial que o seu modelo original (sculpt ou high poly) esteja
                    corretamente posicionado para que os modificadores funcionem sem erros.
                  </Paragraph>
                  <List>
                    <li>Coloque o modelo no centro do mundo (Eixo X em zero).</li>
                    <li>Certifique-se de que a base do modelo está acima da linha do chão.</li>
                    <li><strong>Importante:</strong> Em Object Mode, selecione o modelo e use <code>Ctrl + A</code> (Apply All Transforms).</li>
                  </List>

                  <Subtitle>2. Criando a Malha de Retopologia</Subtitle>
                  <Paragraph>
                    Agora vamos criar o objeto que será a sua nova malha (Low Poly).
                  </Paragraph>
                  <List>
                    <li>Adicione um <strong>Plane</strong> (Shift + A).</li>
                    <li>Posicione este Plane no centro do rosto do objeto (geralmente no início do nariz).</li>
                    <li>Aplique todas as transformações no Plane também (Apply All Transforms).</li>
                  </List>

                  <Subtitle>3. Configuração do Ambiente (Snapping & Edit Mode)</Subtitle>
                  <Paragraph>
                    Para que a malha "grude" no modelo original, configure as seguintes opções:
                  </Paragraph>
                  <List>
                    <li>Ative o <strong>Snap</strong> e selecione a opção <strong>Face Project</strong>.</li>
                    <li>Entre em <strong>Edit Mode</strong> (Tab).</li>
                    <li>Ative o <strong>Auto Merge Vertices</strong> (ícone no canto superior direito).</li>
                    <li>Nas propriedades do objeto (Object Properties > Visibility), ative o <strong>In Front</strong> para enxergar a malha sobre o modelo.</li>
                  </List>

                  <Subtitle>4. Modificadores Essenciais</Subtitle>
                  <Paragraph>
                    Configure os modificadores no seu Plane para automatizar o trabalho:
                  </Paragraph>

                  <Subtitle>Mirror Modifier</Subtitle>
                  <List>
                    <li>Adicione o modificador <strong>Mirror</strong>.</li>
                    <li>Use o conta-gotas para selecionar o modelo High Poly como objeto de referência.</li>
                    <li>Ative a opção <strong>Clipping</strong> para evitar que os vértices do centro se separem.</li>
                  </List>

                  <Subtitle>Shrinkwrap Modifier</Subtitle>
                  <List>
                    <li>Adicione o modificador <strong>Shrinkwrap</strong> abaixo do Mirror.</li>
                    <li>Use o conta-gotas e selecione o modelo High Poly.</li>
                    <li>Isso garantirá que cada movimento seu force o vértice a colar na superfície do modelo.</li>
                  </List>

                  <Subtitle>5. Execução</Subtitle>
                  <Paragraph>
                    Com tudo configurado, mude para o <strong>Edge Select Mode</strong> (tecla 2).
                    Agora basta selecionar as arestas e usar o <strong>Extrude (E)</strong> livremente para
                    desenhar a nova topologia seguindo os loops do rosto ou do corpo.
                  </Paragraph>

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
