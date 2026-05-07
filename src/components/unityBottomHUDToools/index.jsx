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
                    6. Interface de Usuário (UI): Bottom HUD (Power-Ups e Ferramentas)
                  </SectionTitle>

                  <Subtitle>Visão Geral</Subtitle>
                  <Paragraph>
                    Ancorado na parte inferior da cena <code>level_base</code> (Pos Y: 300), o <strong>Bottom_HUD_Container</strong> é o cinto de utilidades do jogador. Ele abriga os botões de assistência (Power-Ups) como a Furadeira, o Martelo e o desbloqueio de slots, que interagem diretamente com o ambiente 3D do jogo utilizando animações complexas parametrizadas via código.
                  </Paragraph>

                  <Subtitle>1. Hierarquia e Layout Dinâmico</Subtitle>
                  <Paragraph>
                    A árvore de objetos garante que os botões fiquem perfeitamente centralizados na base da tela:
                  </Paragraph>
                  <List>
                    <li><strong>Bottom_HUD_Container:</strong> O contêiner mestre. Utiliza uma combinação poderosa de dois componentes:
                      <ul>
                        <li><em>Horizontal Layout Group:</em> Mantém os botões lado a lado com um <code>Spacing</code> de 100 e alinhamento <code>Middle Center</code>.</li>
                        <li><em>Content Size Fitter:</em> Com o <code>Horizontal Fit</code> configurado para <code>Preferred Size</code>, a largura deste contêiner abraça exatamente a quantidade de botões que estiverem ativos, garantindo que todo o bloco fique sempre centralizado no meio da tela.</li>
                      </ul>
                    </li>
                  </List>

                  <Subtitle>2. Botão da Furadeira (PowerUp_Drill_Button)</Subtitle>
                  <Paragraph>
                    Visualmente usa a sprite <code>drill</code>. Seu comportamento é regido pelo script <strong>Unlock Slot FX</strong>, que invoca uma furadeira 3D para (provavelmente) abrir um novo buraco na madeira. O script expõe um controle minucioso de animação:
                  </Paragraph>
                  <List>
                    <li><strong>Referências:</strong> Conectado ao <code>Extra_Slots_3D</code>, ao prefab <code>P_Tool_Drill</code> e ao próprio botão da UI.</li>
                    <li><strong>Distância Blindada e Visual:</strong> <code>Fixed Distance From Camera</code> (0.42), <code>Drill Scale</code> (5), e <code>Fixed Flight Rotation</code> (-90, 70, 0) para garantir que a ferramenta surja na perspectiva correta.</li>
                    <li><strong>Posicionamento Híbrido (Mobile):</strong> Possui ajustes finos para diferentes telas: <code>Side Offset X</code> (0.03), <code>Offset Y_With Notch</code> (0.005) e <code>Offset Y_Normal</code> (0.03).</li>
                    <li><strong>Animação e Vibração:</strong> Controla o voo (<code>Fly Time: 0.5</code>), a perfuração (<code>Drill Time: 0.5</code>) e o impacto com <code>Drill Depth Amount</code> (0.01) e <code>Drill Shake Amount</code> (0.1).</li>
                    <li><strong>Saída:</strong> Como a ferramenta vai embora da tela: <code>Exit Distance X</code> (1), <code>Exit Time</code> (1) e <code>Retract Time</code> (0.2).</li>
                  </List>

                  <Subtitle>3. Botão do Martelo (PowerUp_Hammer_Button)</Subtitle>
                  <Paragraph>
                    Visualmente usa a sprite <code>hammer</code>. Controlado pelo script <strong>Hammer Power Up</strong>, que gerencia a invocação do prefab <code>P_Tool_Hammer</code>. Ele possui uma física visual de "preparo e pancada" bastante detalhada:
                  </Paragraph>
                  <List>
                    <li><strong>Distância e Rotação:</strong> <code>Fixed Distance From Camera</code> (0.36) e <code>Fixed Flight Rotation</code> (-120, -30, 0). (<em>Nota: O script reaproveita o nome de variável "Drill Scale: 4" para definir o tamanho da ferramenta</em>).</li>
                    <li><strong>Fases da Animação (O Pulo do Gato):</strong> O movimento é dividido em etapas precisas:
                      <ul>
                        <li><em>Voo inicial:</em> <code>Fly Time</code> (1).</li>
                        <li><em>Preparo (Levantar o martelo):</em> <code>Prepare Up Offset</code> (0.04), <code>Prepare Side Offset</code> (0.02) e <code>Prepare Time</code> (1).</li>
                        <li><em>O Golpe:</em> <code>Hit Time</code> (0.5), com um <code>Hit Scale</code> agressivo de (X:3, Y:3, Z:2) e um deslocamento de impacto <code>Impact Offset</code> (0.09).</li>
                      </ul>
                    </li>
                    <li><strong>Saída:</strong> Após o golpe, a ferramenta sai de cena rapidamente baseada no <code>Exit Distance X</code> (5) e <code>Exit Time</code> (1).</li>
                  </List>

                  <Subtitle>4. Botão de Desbloqueio (Unlockable_Slot_Button)</Subtitle>
                  <Paragraph>
                    Visualmente representado pela sprite <code>brush</code> (pincel ou vassoura). Ocupa o terceiro espaço no layout dinâmico. Pela nomenclatura, atua como um recurso para limpar ou liberar espaços para o jogador manipular mais parafusos na mesa.
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
