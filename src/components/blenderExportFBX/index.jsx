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
  { src: '/assets/blenderExportFBX/01.png', alt: '???' },
  { src: '/assets/blenderExportFBX/02.png', alt: '???' },
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
                    Guia de Exportação: Configurando o .FBX para a Engine
                  </SectionTitle>

                  <Subtitle>1. Iniciando a Exportação</Subtitle>
                  <Paragraph>
                    Com o Rig e as animações finalizadas, vá no menu superior em <strong>File &gt; Export &gt; FBX (.fbx)</strong>. Uma janela se abrirá com as propriedades de exportação no painel direito. Siga este checklist rigorosamente:
                  </Paragraph>


                  <Subtitle>2. Include (O que será exportado)</Subtitle>
                  <List>
                    <li><strong>Limit to:</strong> Deixe tudo desmarcado. Queremos exportar o conjunto completo da cena.</li>
                    <li><strong>Object Types:</strong> Selecione apenas <strong>Armature</strong>, <strong>Mesh</strong> e <strong>Other</strong> (importante marcar o "Other" para incluir objetos independentes, como os parafusos do nosso projeto).</li>
                  </List>

                  <Subtitle>3. Transform (Escala e Eixos)</Subtitle>
                  <Paragraph>
                    Esta é a seção que evita que o personagem chegue na engine deitado ou com o tamanho de um prédio.
                  </Paragraph>
                  <List>
                    <li><strong>Scale:</strong> 1.00</li>
                    <li><strong>Apply Scalings:</strong> Mude para <strong>FBX All</strong>.</li>
                    <li><strong>Apply Unit:</strong> Deixe MARCADO.</li>
                    <li><strong>Use Space Transform:</strong> Deixe MARCADO. Isso alinha o sistema de coordenadas do Blender (onde o Z é para cima) com o da Unity (onde o Y é para cima).</li>
                  </List>

                  <Subtitle>4. Geometry</Subtitle>
                  <List>
                    <li>Deixe marcado apenas <strong>Apply Modifiers</strong>. Isso vai consolidar qualquer modificador extra na malha para que a engine leia corretamente o formato final.</li>
                  </List>

                  <Subtitle>5. Armature (O Segredo dos Ossos Extras)</Subtitle>
                  <Paragraph>
                    Nesta seção, o padrão do Blender costuma atrapalhar a importação na engine.
                  </Paragraph>
                  <List>
                    <li><strong>Only Deform Bones:</strong> DESMARQUE. Precisamos que a estrutura completa vá para o arquivo.</li>
                    <li><strong>Add Leaf Bones:</strong> DESMARQUE. <em>Dica de Ouro:</em> Se essa opção ficar ativada, a engine criará um osso falso (dummy bone) totalmente inútil na ponta de cada membro do seu rig, sujando a hierarquia.</li>
                  </List>

                  <Subtitle>6. Bake Animation (A Tradução do IK)</Subtitle>
                  <Paragraph>
                    Engines de jogos não entendem nativamente o Inverse Kinematics (IK) ou os Constraints do Blender. Precisamos transformar essa mecânica em dados brutos.
                  </Paragraph>
                  <List>
                    <li>Deixe marcado apenas <strong>Key All Bones</strong> (desmarque as opções de NLA Strips, etc., se não estiver usando).</li>
                    <li><strong>Por que isso é vital?</strong> O "Bake" vai analisar cada frame da sua animação e transformar o movimento que era controlado por IK em keyframes simples de Location/Rotation em cada osso. Assim, a engine reproduzirá o movimento perfeitamente.</li>
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
