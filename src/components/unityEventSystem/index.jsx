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
                    7. EventSystem: O Motor de Interação da Cena
                  </SectionTitle>

                  <Subtitle>Visão Geral</Subtitle>
                  <Paragraph>
                    O <strong>EventSystem</strong> é um objeto nativo e obrigatório da Unity que também vive dentro da cena <code>level_base</code>. Ele atua como o "sistema nervoso" da interface de usuário. Sem ele, nenhum botão, slider ou elemento de UI que criamos funcionaria, pois é ele quem detecta os toques na tela do celular (ou cliques do mouse no editor) e envia a mensagem para a UI de que ela foi interagida.
                  </Paragraph>

                  <Subtitle>1. Componente: Event System</Subtitle>
                  <Paragraph>
                    Este é o gerente principal de qual elemento da tela está sendo focado ou clicado:
                  </Paragraph>
                  <List>
                    <li><strong>First Selected (None):</strong> Define qual botão começa selecionado. Como o jogo é desenhado para o toque no celular, não é necessário ter um elemento pré-selecionado (como seria em um jogo de console).</li>
                    <li><strong>Send Navigation Events (Ativado):</strong> Permite o envio de eventos genéricos de navegação de UI.</li>
                    <li><strong>Drag Threshold (10):</strong> Uma configuração vital para a usabilidade mobile! Isso define a quantidade de pixels que o dedo do jogador precisa se mover na tela para que a Unity entenda a ação como um "arrastar" (Drag) em vez de um "clique" (Tap). O valor de 10 evita que tremores naturais no dedo cancelem os cliques nos botões.</li>
                  </List>

                  <Subtitle>2. Componente: Standalone Input Module</Subtitle>
                  <Paragraph>
                    Enquanto o Event System gerencia a UI, este módulo é o responsável por ler fisicamente as entradas do hardware e repassá-las adiante.
                  </Paragraph>
                  <List>
                    <li><strong>Axes e Buttons (Horizontal, Vertical, Submit, Cancel):</strong> Mapeamentos padrão da engine. Embora o jogo seja jogado primariamente com o toque na tela (Touch Input, que a Unity mescla nativamente aqui), manter essas configurações permite testar a UI no editor pelo teclado ou controle sem problemas.</li>
                    <li><strong>Input Actions Per Second (10) / Repeat Delay (0.5):</strong> Controlam a velocidade em que cliques contínuos são disparados caso o jogador segure um botão que suporte essa função.</li>
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
