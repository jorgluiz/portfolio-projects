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
                    1. Build Settings e Fluxo de Cenas (Scene List)
                  </SectionTitle>

                  <Subtitle>Visão Geral</Subtitle>
                  <Paragraph>
                    A base do projeto foi estruturada para garantir transições rápidas e otimizadas no Android. A ordem das cenas no <strong>Build Settings</strong> dita o fluxo principal do aplicativo, isolando a inicialização, a interface principal e o núcleo do gameplay.
                  </Paragraph>

                  <Subtitle>Ordem das Cenas (Índices)</Subtitle>
                  <List>
                    <li><strong>0 - Scenes/Loading:</strong> A porta de entrada do jogo. Essencial para carregar dados salvos, inicializar serviços de anúncios/analytcs em segundo plano e preparar o jogo sem congelar a tela do jogador.</li>
                    <li><strong>1 - Scenes/MainMenu:</strong> O menu principal. Ponto de encontro onde o jogador seleciona os níveis, acessa a loja ou ajusta configurações.</li>
                    <li><strong>2 - Scenes/LevelCompleteScreen:</strong> A tela de vitória ou conclusão. Mantê-la como uma cena separada (ou pronta para ser sobreposta) modulariza a interface e deixa o projeto muito mais limpo.</li>
                    <li><strong>3 - Scenes/Level_Base:</strong> O coração do projeto! A cena universal que carrega a lógica e os dados de todos os níveis de forma dinâmica, evitando a replicação desnecessária de arquivos e economizando muita memória.</li>
                  </List>

                  <Subtitle>Estratégia de Navegação</Subtitle>
                  <Paragraph>
                    Com esse setup, o fluxo natural do jogador é passar do <em>Loading</em> para o <em>MainMenu</em>. Ao iniciar uma fase, a engine carrega o <em>Level_Base</em>. Ao vencer, o fluxo chama a <em>LevelCompleteScreen</em>, de onde o jogador pode retornar ao menu ou pedir para o <em>Level_Base</em> apenas recarregar os dados do próximo nível (parafusos e placas) sem precisar destruir a cena inteira.
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

export default GA4NextJsIntegration;
