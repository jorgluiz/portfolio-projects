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
                    8. Mecânica Base: Extra Slots 3D (A Fila de Espera)
                  </SectionTitle>

                  <Subtitle>Visão Geral</Subtitle>
                  <Paragraph>
                    O objeto <strong>Extra_Slots_3D</strong> gerencia os buracos extras onde o jogador pode "estacionar" temporariamente os parafusos que não têm uma caixa correspondente aberta na mesa. Diferente da UI tradicional, esses slots são objetos 3D reais (cilindros) que se posicionam na tela para receber os parafusos de forma visualmente coesa.
                  </Paragraph>

                  <Subtitle>1. O Gerenciador: Extra_Slots_3D</Subtitle>
                  <Paragraph>
                    Este objeto atua como o pai hierárquico e o controlador lógico da fila de espera.
                  </Paragraph>
                  <List>
                    <li><strong>Hierarquia:</strong> Contém sete filhos predefinidos (<code>Slot_3D_01</code> a <code>Slot_3D_07</code>).</li>
                    <li><strong>Script ExtraSlotsManager:</strong> O cérebro do sistema.
                      <ul>
                        <li><em>Slots 3D (Array):</em> Mantém uma lista estrita com as referências (Transforms) de cada um dos 7 slots filhos. É essa lista que o <code>LevelManager</code> consulta quando precisa saber "onde tem um buraco vazio?".</li>
                        <li><em>Initial Slots Count (5):</em> Uma variável de configuração excelente. Embora existam 7 slots na cena, o jogo começa com apenas 5 disponíveis. Os outros 2 (Slot 06 e 07) estão ali para serem liberados dinamicamente via mecânicas de gameplay (como o botão de Power-Up "Unlockable_Slot_Button" que vimos anteriormente).</li>
                      </ul>
                    </li>
                  </List>

                  <Subtitle>2. O Prefab do Slot (P_Dock_Slot_3D)</Subtitle>
                  <Paragraph>
                    Cada <code>Slot_3D_XX</code> é uma instância do prefab <strong>P_Dock_Slot_3D</strong>. Este prefab resolve o desafio de alinhar um objeto 3D perfeitamente com a UI (que está no Canvas 2D).
                  </Paragraph>
                  <List>
                    <li><strong>Visual (Mesh e Material):</strong> Usa o modelo de um cilindro (<code>Cylinder.001</code>). Para otimização de performance no mobile, a opção <em>Cast Shadows</em> está desativada (Off), pois buracos não precisam projetar sombras na cena.</li>
                    <li><strong>Script AlignToUI:</strong> O segredo do posicionamento.
                      <ul>
                        <li><em>UI Target:</em> Referência a um objeto do Canvas (ex: <code>Slot_Guide_01 (Rect Transform)</code>). O slot 3D persegue e se fixa fisicamente onde esse guia 2D estiver na tela do celular.</li>
                        <li><em>World Camera:</em> Aponta para a <code>Main Camera</code> para fazer os cálculos de projeção da tela para o mundo 3D.</li>
                        <li><em>Z Distance (0.89):</em> Define o quão perto ou longe da câmera o cilindro ficará estacionado no espaço 3D, garantindo que os parafusos não fiquem cortados ou minúsculos.</li>
                        <li><em>Continuous Update (Ativado):</em> Garante que, se o layout da tela mudar (giro do celular ou redimensionamento), o slot 3D recalculará sua posição instantaneamente para não descolar da UI.</li>
                      </ul>
                    </li>
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
