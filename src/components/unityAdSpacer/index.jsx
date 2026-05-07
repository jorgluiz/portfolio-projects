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
                    7. Interface de Usuário (UI): Área Reservada para Anúncios (Ad Spacer)
                  </SectionTitle>

                  <Subtitle>Visão Geral</Subtitle>
                  <Paragraph>
                    O objeto <strong>Ad_Banner_Area_Spacer</strong> atua como um espaço "fantasma" na cena level_base. Atualmente vazio, sua função é estrutural: ele reserva área física no layout da Unity para futuras integrações de monetização e performance marketing (como banners do Google AdMob). Isso previne que a sobreposição de anúncios quebre o layout ou bloqueie os cliques do jogador no menu inferior (Bottom HUD).
                  </Paragraph>

                  <Subtitle>1. Estrutura e Posicionamento (Rect Transform)</Subtitle>
                  <Paragraph>
                    A configuração de ancoragem garante que o espaço responda corretamente a qualquer proporção de tela de celular:
                  </Paragraph>
                  <List>
                    <li><strong>Anchors (Stretch Bottom):</strong> Com o Min(X:0) e Max(X:1), o objeto estica para ocupar exatamente 100% da largura da tela, acompanhando do modelo mais estreito ao mais largo.</li>
                    <li><strong>Pivot (X:0.5, Y:0):</strong> O ponto de ancoragem e cálculo de escala fica no exato centro inferior.</li>
                    <li><strong>Height (120):</strong> A altura cravada em 120 unidades define a margem de segurança visual. É o espaço que o restante da UI sabe que não pode invadir.</li>
                  </List>

                  <Subtitle>2. Blindagem de Layout (Layout Element)</Subtitle>
                  <Paragraph>
                    Uma proteção adicional contra quebras de responsividade:
                  </Paragraph>
                  <List>
                    <li><strong>Preferred Width / Height (100):</strong> Ao marcar a altura preferencial como 100, este componente "exige" do Canvas que, caso haja um redimensionamento agressivo, ele tente preservar esse tamanho mínimo. É uma garantia para que o layout group pai não esmague o espaço do banner.</li>
                  </List>

                  <Subtitle>3. Configuração Visual e Interação</Subtitle>
                  <List>
                    <li><strong>Image (Sem Sprite):</strong> O componente <em>Image</em> está sem arte (<code>None</code>), utilizando apenas a cor de fundo preta como bloco delimitador.</li>
                    <li><strong>Raycast Target (Ativado):</strong> Como está marcado, este objeto invisível intercepta toques na tela. <em>Observação de Arquitetura:</em> Se o SDK de anúncios for instanciar a publicidade "por cima" de tudo, essa configuração ajuda a blindar cliques vazios; se o anúncio for instanciado "dentro" desse espaço, isso pode precisar ser revisto para não roubar o clique do banner.</li>
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
