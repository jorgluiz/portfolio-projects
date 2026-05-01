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
  { src: '/assets/blenderIndependentObjects/01.png', alt: '???' },
  { src: '/assets/blenderIndependentObjects/02.png', alt: '???' },
  { src: '/assets/blenderIndependentObjects/03.png', alt: '???' },
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
                    Guia de Animação: Objetos Independentes (Props e Interações)
                  </SectionTitle>

                  <Subtitle>1. O Contexto: Animando Props (Adereços)</Subtitle>
                  <Paragraph>
                    Neste cenário, temos 3 parafusos que o gato irá "abraçar" e que cairão em seu colo. Como esses objetos não fazem parte do Rig (não estão conectados aos ossos), nós os animamos separadamente, gravando suas coordenadas globais diretamente no <strong>Object Mode</strong>.
                  </Paragraph>

                  <Subtitle>2. Preparação do Ambiente</Subtitle>
                  <Paragraph>
                    Antes de mover qualquer objeto, precisamos configurar a interface para capturar os movimentos:
                  </Paragraph>
                  <List>
                    <li>Abra a <strong>Timeline</strong> e o <strong>Action Editor</strong> (dentro do Dope Sheet) na parte inferior da tela.</li>
                    <li>Ative o botão de <strong>Auto Keying</strong> (ícone de gravação circular) na Timeline.</li>
                    <li>Certifique-se de que a agulha azul do tempo esteja no <strong>Frame 1</strong>.</li>
                  </List>

                  <Subtitle>3. Posicionamento Inicial e o Primeiro Keyframe</Subtitle>
                  <Paragraph>
                    Vamos definir onde a animação começa.
                  </Paragraph>
                  <List>
                    <li>No <strong>Object Mode</strong>, posicione os três parafusos flutuando perto do peito do gato, um pouco acima do focinho (posição de início do abraço).</li>
                    <li>Selecione o primeiro parafuso (ex: o vermelho).</li>
                    <li>Pressione a tecla <strong>I (Insert Keyframe)</strong> e escolha <strong>Location & Rotation</strong>.</li>
                    <li>Você verá um keyframe aparecer no frame 1 da Timeline e os valores de Transform (no painel direito) ficarão amarelos.</li>
                    <li>Repita esse processo rápido (Selecionar &gt; I) para os outros dois parafusos, garantindo que todos tenham um ponto de partida gravado.</li>
                  </List>

                  <Subtitle>4. Criando o Movimento (A Queda para o Colo)</Subtitle>
                  <Paragraph>
                    Com o Auto Keying ativado, o Blender fará o trabalho pesado de gravar o destino final.
                  </Paragraph>
                  <List>
                    <li>Avance a agulha azul da Timeline para o tempo em que a ação deve terminar (por exemplo, <strong>Frame 30</strong>).</li>
                    <li>Selecione o parafuso vermelho novamente.</li>
                    <li>Use a tecla <strong>G (Grab/Mover)</strong> e posicione o parafuso descansando no colo do gato.</li>
                    <li><em>Mágica do Auto Keying:</em> Assim que você soltar o objeto, um novo keyframe será criado automaticamente no frame 30!</li>
                    <li>Repita o processo de mover com a tecla <strong>G</strong> para os outros parafusos, organizando-os no colo do personagem.</li>
                  </List>

                  <Subtitle>💡 Dica Hacker de Workflow</Subtitle>
                  <Paragraph>
                    Se você quiser que os parafusos não caiam todos exatamente ao mesmo tempo (o que parece muito mecânico), você pode criar um "delay" (atraso) visual. Basta ir no Dope Sheet, selecionar os keyframes finais (no frame 30) do parafuso verde e arrastá-los para o frame 35, e os do amarelo para o 40. Isso criará um efeito de queda em sequência, muito mais orgânico e interessante para o jogador assistir!
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
