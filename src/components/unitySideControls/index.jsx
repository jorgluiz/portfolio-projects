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
                    4. Interface de Usuário (UI): Controles Laterais (Zoom e Câmera)
                  </SectionTitle>

                  <Subtitle>Visão Geral</Subtitle>
                  <Paragraph>
                    Ainda dentro da cena <code>level_base</code>, temos um conjunto de controles laterais dedicados à manipulação da visão pelo jogador. Estes elementos permitem dar zoom no puzzle e redefinir a rotação da câmera para o estado original. Eles estão organizados de forma responsiva e ancorados no canto inferior esquerdo da tela.
                  </Paragraph>

                  <Subtitle>1. Hierarquia Principal</Subtitle>
                  <Paragraph>
                    A árvore de objetos segue esta estrutura modular para garantir que os elementos se movam juntos conforme o tamanho da tela:
                  </Paragraph>
                  <List>
                    <li><strong>Side_Controls_Container:</strong> O pai que agrupa e organiza os controles.</li>
                    <ul>
                      <li><strong>Reset_View_Button:</strong> Botão superior responsável por resetar a visão.</li>
                      <li><strong>Zoom_Slider:</strong> Controle deslizante inferior responsável pelo zoom.</li>
                      <ul>
                        <li><strong>Background:</strong> A trilha visual (fundo) do slider.</li>
                        <li><strong>Handle Slide Area:</strong> Área de segurança e limite de movimento do puxador.</li>
                        <ul>
                          <li><strong>Handle:</strong> O botão em si (o "Knob") que o jogador arrasta com o dedo.</li>
                        </ul>
                      </ul>
                    </ul>
                  </List>

                  <Subtitle>2. Container e Layout (Side_Controls_Container)</Subtitle>
                  <Paragraph>
                    O contêiner principal está ancorado perfeitamente no canto inferior esquerdo (Min/Max X:0, Y:0) do Canvas. Ele estrutura seus filhos de forma automática utilizando um <strong>Vertical Layout Group</strong>:
                  </Paragraph>
                  <List>
                    <li><strong>Spacing (20):</strong> Garante um respiro visual constante de 20 pixels entre o botão de reset e o slider.</li>
                    <li><strong>Child Alignment (Lower Center):</strong> Mantém os elementos centralizados entre si, mas empurrados para a base do contêiner (de baixo para cima).</li>
                  </List>

                  <Subtitle>3. Botão de Reset (Reset_View_Button)</Subtitle>
                  <Paragraph>
                    Responsável por devolver a câmera à sua posição e rotação originais.
                  </Paragraph>
                  <List>
                    <li><strong>Visual e Componente UI:</strong> Utiliza a sprite <code>S_UI_Icon_ResetView</code>. O componente nativo <em>Button</em> está com o <em>Transition</em> definido como "None", o que significa que o botão não pisca ou muda de cor sozinho ao ser clicado (provavelmente a animação é gerida via script).</li>
                    <li><strong>Script (ResetViewManager):</strong> Este é o cérebro da ação anexado ao botão. Ele expõe propriedades cruciais de animação diretamente no Inspetor:
                      <ul>
                        <li><em>Target Rotation (X: 0, Y: 360, Z: 0):</em> Define a rotação final exata que a câmera ou a mesa/objeto deve atingir ao resetar.</li>
                        <li><em>Animation Time (0.2):</em> O tempo em segundos para a animação acontecer, garantindo uma transição rápida e suave.</li>
                        <li><em>Ease Type (Not Used):</em> Indicador de que a curva de interpolação padrão está sendo usada ou será tratada via código interno.</li>
                      </ul>
                    </li>
                  </List>

                  <Subtitle>4. Controle de Zoom (Zoom_Slider)</Subtitle>
                  <Paragraph>
                    Um componente interativo que traduz o arrastar do jogador em um valor contínuo para o sistema de câmera.
                  </Paragraph>
                  <List>
                    <li><strong>Configuração do Componente Slider:</strong>
                      <ul>
                        <li><em>Direction (Bottom To Top):</em> Configuração fundamental para o mobile. O nível mínimo (0) fica embaixo e o máximo (1) em cima. O jogador arrasta para cima para dar zoom in.</li>
                        <li><em>Min Value (0) / Max Value (1):</em> Valores normalizados. Excelente prática, pois facilita multiplicar esse valor (0 a 1) por qualquer script de field of view (FOV) da câmera.</li>
                        <li><em>Fill Rect (None):</em> Deixado vazio propositalmente, pois o design deste slider não preenche uma barra de cor (como uma barra de vida), ele serve apenas como um trilho para o puxador.</li>
                      </ul>
                    </li>
                    <li><strong>Componentes Visuais Internos:</strong> O objeto <code>Background</code> recebe a sprite <code>S_UI_Slider_Zoom_Background</code>. O objeto <code>Handle</code> utiliza o sprite padrão <code>Knob</code> da Unity, com a cor da imagem alterada via Inspetor para um tom de azul vibrante.</li>
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
