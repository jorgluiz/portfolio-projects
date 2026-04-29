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
  { src: '/assets/blenderUV/01.png', alt: '???' },
  { src: '/assets/blenderUV/02.png', alt: '???' },
  { src: '/assets/blenderUV/03.png', alt: '???' },
  { src: '/assets/blenderUV/04.png', alt: '???' },
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
                    Guia de Mapeamento UV no Blender
                  </SectionTitle>

                  <Subtitle>1. Configuração Inicial (Preparação)</Subtitle>
                  <Paragraph>
                    Antes de começar a fazer os cortes na malha, é fundamental configurar o ambiente do
                    UV Editor para ter feedback visual e automatizar o processo.
                  </Paragraph>
                  <List>
                    <li>Abra o painel do <strong>UV Editor</strong>.</li>
                    <li>Ative o <strong>UV Sync Selection</strong> (ícone de setas no canto superior esquerdo do UV Editor).</li>
                    <li>No menu Overlays do UV Editor, ative <strong>Display Stretch</strong> e mude o tipo para <strong>Area</strong> (isso mostrará cores indicando se a textura está sendo esticada).</li>
                    <li>
                      No menu lateral (N), vá em <strong>Tool &gt; UVs</strong> e ative o <strong>Live Unwrap</strong>.
                      <br />
                      <em>Nota: O Live Unwrap serve para atualizar o mapa UV automaticamente em tempo real a cada nova costura (seam) que você cria, poupando o trabalho de refazer o comando unwrap repetidas vezes.</em>
                    </li>
                  </List>

                  <Subtitle>2. O Primeiro Unwrap</Subtitle>
                  <Paragraph>
                    Com as configurações prontas, vamos dar o pontapé inicial no mapeamento:
                  </Paragraph>
                  <List>
                    <li>Na tela <strong>3D View</strong>, entre no <strong>Edit Mode</strong> (Tab).</li>
                    <li>Selecione todo o modelo apertando a tecla <strong>A</strong>.</li>
                    <li>
                      Aperte a tecla <strong>U</strong> e clique em <strong>Unwrap</strong> (ou vá no menu superior UV &gt; Unwrap).
                      <br />
                      <em>Nota: Este comando inicial serve para fazer a primeira projeção do seu modelo 3D no espaço 2D. Como não há cortes ainda, a malha pode parecer uma bagunça, mas é o ponto de partida necessário para o Live Unwrap começar a organizar as ilhas conforme você corta.</em>
                    </li>
                  </List>

                  <Subtitle>3. O Processo de Mapeamento (Criando Costuras)</Subtitle>
                  <Paragraph>
                    O mapeamento UV funciona como "descascar uma laranja" ou planejar os moldes de uma roupa.
                    Precisamos dizer ao Blender onde cortar a malha para ela ficar plana.
                  </Paragraph>
                  <List>
                    <li>
                      <strong>Passo 1:</strong> Mude para a seleção de arestas (<strong>Edge Select</strong>, tecla 2).
                      Faça a seleção da linha de arestas onde você quer criar o corte. Aperte <strong>U</strong> (ou clique com o botão direito) e escolha <strong>Mark Seam</strong>. As arestas ficarão vermelhas.
                    </li>
                    <li>
                      <strong>Passo 2:</strong> Graças ao <em>Live Unwrap</em> que ativamos, o modelo já vai começar a se abrir sozinho no UV Editor a cada <em>Seam</em> (costura) que você marcar.
                    </li>
                    <li>
                      <strong>Passo 3:</strong> Continue analisando a geometria e marcando <em>Seams</em> para separar partes lógicas (ex: separar braços do tronco, base do pescoço, etc.) sempre tentando colocar as costuras em locais escondidos da visão do jogador.
                    </li>
                    <li>
                      <strong>Passo 4:</strong> Fique de olho no <em>Display Stretch</em>. Áreas azuis escuro estão perfeitas. Se o mapa ficar verde, amarelo ou vermelho, significa que aquela área precisa de mais cortes (<em>Seams</em>) para relaxar a malha.
                    </li>
                  </List>

                  <Subtitle>4. Otimização Final (Pack Islands)</Subtitle>
                  <Paragraph>
                    Após finalizar todas as costuras e garantir que não há distorção severa (tudo azul),
                    é hora de organizar as "ilhas" (pedaços do mapa UV) para aproveitar melhor o espaço da textura.
                  </Paragraph>
                  <List>
                    <li>Vá para a janela do <strong>UV Editor</strong>.</li>
                    <li>Selecione todas as ilhas apertando <strong>A</strong>.</li>
                    <li>Vá no menu superior <strong>UV &gt; Pack Islands</strong>.</li>
                    <li><em>Dica:</em> No menu que aparece no canto inferior esquerdo após o Pack Islands, você pode ajustar a <strong>Margin</strong> (margem) para garantir que as ilhas não fiquem coladas umas nas outras, evitando sangramento de textura (texture bleeding) na Unity.</li>
                  </List>

                  <Subtitle>5. 💡 Dica Hacker 1: Espelhamento de Costuras (Mirror Seams)</Subtitle>
                  <Paragraph>
                    Se o seu modelo for simétrico (e você já tiver aplicado o modificador Mirror), você não precisa marcar os cortes dos dois lados manualmente:
                  </Paragraph>
                  <List>
                    <li>Faça todas as marcações de costura (<strong>Mark Seam</strong>) apenas de um lado do modelo.</li>
                    <li>Com essas arestas vermelhas selecionadas, vá no menu superior da 3D View em <strong>Select &gt; Select Mirror</strong>.</li>
                    <li>O Blender vai selecionar magicamente as mesmas arestas do outro lado do modelo.</li>
                    <li>Aperte <strong>U</strong> e escolha <strong>Mark Seam</strong> para aplicar as costuras na nova seleção.</li>
                  </List>

                  <Subtitle>6. 💡 Dica Hacker 2: Seleção em Massa de Costuras (Select Similar)</Subtitle>
                  <Paragraph>
                    Precisa limpar ou revisar todas as costuras do seu modelo de uma vez só? Não clique uma por uma, use o poder da seleção por similaridade:
                  </Paragraph>
                  <List>
                    <li>Selecione apenas <strong>uma única aresta</strong> que já esteja marcada como costura (linha vermelha).</li>
                    <li>Vá no menu superior em <strong>Select &gt; Select Similar &gt; Seam</strong> (ou use o atalho <strong>Shift + G</strong> e escolha <em>Seam</em>).</li>
                    <li>O Blender selecionará instantaneamente todas as arestas do modelo que possuem essa mesma propriedade.</li>
                    <li>Com tudo selecionado, você pode remover as costuras apertando <strong>U &gt; Clear Seam</strong> ou fazer ajustes estruturais rápidos.</li>
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
