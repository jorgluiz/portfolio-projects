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
  { src: '/assets/blenderCreatingShapeKeys/01.png', alt: '???' },
  { src: '/assets/blenderCreatingShapeKeys/02.png', alt: '???' },
  { src: '/assets/blenderCreatingShapeKeys/03.png', alt: '???' },
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
                    Guia de Expressões Faciais: Criando Shape Keys no Blender
                  </SectionTitle>

                  <Subtitle>1. O que são Shape Keys e onde aplicar?</Subtitle>
                  <Paragraph>
                    As Shape Keys (ou Morph Targets) são usadas para criar deformações e expressões que seriam muito complexas de fazer apenas com ossos. Você pode aplicar essa técnica em várias partes:
                  </Paragraph>
                  <List>
                    <li><strong>Olhos:</strong> Para criar piscadas (Blink), estreitar as pálpebras, etc.</li>
                    <li><strong>Boca:</strong> Para sorrisos, tristezas e sincronia labial (Lip Sync).</li>
                    <li><strong>Sobrancelhas e Nariz:</strong> Para microexpressões faciais.</li>
                  </List>

                  <Subtitle>2. Criando a Base e a Key de Movimento (Object Mode)</Subtitle>
                  <Paragraph>
                    O processo começa na preparação dos grupos de dados da malha, antes de qualquer edição.
                  </Paragraph>
                  <List>
                    <li>No <strong>Object Mode</strong>, selecione a malha do personagem.</li>
                    <li>Vá na aba <strong>Object Data Properties</strong> (ícone do triângulo verde no painel direito).</li>
                    <li>Na seção <strong>Shape Keys</strong>, clique no botão <strong>+</strong> pela primeira vez. Isso criará o grupo <strong>Basis</strong> (a forma original e neutra do modelo que nunca deve ser alterada).</li>
                    <li>Clique no botão <strong>+</strong> novamente para criar a <strong>Key 1</strong>. Dê um nome de acordo com a sua implementação (ex: <code>Blink_Left</code>).</li>
                    <li>Deixe a nova chave (Key 1) selecionada e mude para o <strong>Edit Mode</strong> (Tab).</li>
                  </List>

                  <Subtitle>3. Estratégia de Pivot para a Pálpebra</Subtitle>
                  <Paragraph>
                    Para que o movimento de descer a pálpebra seja natural e não "quebre" a malha para dentro do olho, usamos uma técnica de ancoragem:
                  </Paragraph>
                  <List>
                    <li>Ative o modo de seleção de arestas (Edge Select).</li>
                    <li>No menu superior central, mude o <strong>Transform Pivot Point</strong> para <strong>3D Cursor</strong>.</li>
                    <li>Posicione o <strong>Cursor 3D</strong> mais ou menos abaixo do olho. Isso fará com que toda a movimentação da malha use este ponto como referência.</li>
                  </List>

                  <Subtitle>4. Esculpindo o Movimento (A Piscada)</Subtitle>
                  <Paragraph>
                    Com o Pivot configurado, agora puxamos a geometria para formar a expressão.
                  </Paragraph>
                  <List>
                    <li>Selecione as arestas da pálpebra superior que vão descer.</li>
                    <li>Pressione <strong>G</strong> (Grab) e em seguida <strong>Z</strong> (para travar no eixo vertical).</li>
                    <li>Puxe os vértices para baixo em direção ao Cursor 3D até que o olho se feche perfeitamente.</li>
                  </List>

                  <Subtitle>💡 Observação de Ouro para Realismo</Subtitle>
                  <Paragraph>
                    Na vida real, os músculos do rosto estão conectados. Quando você cria a Shape Key da piscada, você pode (e deve) puxar ou animar outras partes do rosto em paralelo dentro dessa mesma Key.
                  </Paragraph>
                  <Paragraph>
                    <strong>Exemplo:</strong> Enquanto você desce a pálpebra, selecione também a geometria da sobrancelha e desça-a levemente. Isso traz um nível de realismo e expressividade muito maior para o seu modelo!
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
