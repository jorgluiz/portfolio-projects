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
  { src: '/assets/unityPipeline/astlasConfetes.png', alt: '???' },
  { src: '/assets/unityPipeline/particles.png', alt: '???' },
  { src: '/assets/unityPipeline/shaderFake.png', alt: '???' },
  { src: '/assets/unityPipeline/shaderFakeLight.png', alt: '???' },
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
                    1. Pipeline Visual: Otimização Mobile, Atlas e Shaders
                  </SectionTitle>

                  <Subtitle>Visão Geral</Subtitle>
                  <Paragraph>
                    Em jogos mobile, a performance gráfica dita o sucesso do projeto. O uso de materiais nativos complexos (Lit) com transparência e iluminação em tempo real pode causar superaquecimento, drenagem de bateria e quedas drásticas de FPS. Para contornar isso, o projeto utiliza texturas agrupadas (Atlases) e Shaders customizados (Unlit) com matemática de luz simulada (Fake Light), garantindo visuais de alta qualidade com um custo computacional quase nulo.
                  </Paragraph>

                  <Subtitle>1. Sprite Atlas (Atlas_Confetes)</Subtitle>
                  <Paragraph>
                    Utilizado pelo sistema de VFX (VFX_Manager) para gerar a explosão de fogos de artifício e confetes ao finalizar um nível.
                  </Paragraph>
                  <List>
                    <li><strong>Texturas em Branco (A Regra de Ouro):</strong> Todas as imagens dentro do atlas (estrelas, fitas, círculos) foram desenhadas puramente na cor branca. Isso permite que o Particle System da Unity pinte esses sprites dinamicamente com qualquer cor desejada durante o runtime. Em vez de importar dezenas de texturas coloridas pesando na memória, o jogo carrega apenas um pequeno atlas branco e multiplica as cores matematicamente.</li>
                  </List>

                  <Subtitle>2. O Problema da Iluminação em Dispositivos de Entrada</Subtitle>
                  <Paragraph>
                    O objetivo de arte do jogo era ter peças mecânicas (fatias do puzzle) feitas de "Acrílico" translúcido com reflexos duros de luz.
                  </Paragraph>
                  <List>
                    <li><strong>O Gargalo:</strong> Usar o material padrão da Unity (Simple Lit ou Lit) no modo "Transparent" exigia cálculos de Global Illumination, reflexos físicos e sombras projetadas. Isso derrubava a taxa de quadros (FPS) em celulares de 4GB de RAM.</li>
                    <li><strong>O Erro IMGSRV:</strong> Em GPUs mobile mais antigas ou simples, o excesso de instruções de transparência causava o temido erro de compilação <code>IMGSRV</code>, travando completamente a renderização da cena.</li>
                  </List>

                  <Subtitle>3. A Solução: Shader_FakeLight (Criado no Shader Graph)</Subtitle>
                  <Paragraph>
                    A solução técnica foi abandonar o motor de luz da Unity e criar um material <strong>Unlit</strong> (sem luz nativa), embutindo as reações visuais puramente através de matemática barata na placa de vídeo.
                  </Paragraph>
                  <List>
                    <li><strong>Volume Simulado (Facing Ratio):</strong> A sensação de profundidade 3D da peça é calculada comparando a normal do objeto com a direção da câmera, sem usar luzes da cena.</li>
                    <li><strong>Brilho Especular Falso (Blinn-Phong Fake Specular):</strong> O brilho do plástico é gerado matematicamente com operações aritméticas simples (nós de Multiply e Power), criando um "ponto de luz" que se move conforme o jogador gira a câmera. Variáveis como <code>Brilho_Força</code> e <code>Brilho_Tamanho</code> ficam expostas no Inspetor.</li>
                  </List>

                  <Subtitle>4. O "Truque do Vidro" (Manipulação de Alpha)</Subtitle>
                  <Paragraph>
                    O maior desafio do acrílico é que a peça precisa ser semi-transparente, mas o ponto de reflexo da luz (o brilho especular) precisa ser 100% sólido. Se você simplesmente baixar a opacidade do material, o brilho some junto.
                  </Paragraph>
                  <List>
                    <li><strong>A Matemática da Transparência:</strong> Dentro do Shader Graph, pegamos o resultado final do nosso <em>Brilho Falso</em> e usamos um nó <strong>Add (Somar)</strong> para juntá-lo com a variável base de <code>Opacidade</code> (ex: 0.3).</li>
                    <li><strong>Saturate e Alpha:</strong> O resultado dessa soma passa por um nó <strong>Saturate</strong> (que corta qualquer valor que passe de 1.0 ou fique abaixo de 0, garantindo que não existam "cores impossíveis" ou estouradas que quebrem a renderização mobile). Esse valor seguro é então conectado diretamente na saída de <strong>Alpha</strong> do material.</li>
                    <li><strong>Resultado Visual:</strong> A peça fica perfeitamente translúcida nas áreas de sombra, mas onde o brilho falso incide, o Alpha é empurrado para 1.0 (sólido), simulando perfeitamente a refração e o reflexo de um acrílico grosso, custando praticamente nada para a GPU do celular.</li>
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
