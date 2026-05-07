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
                    11. Game Managers: Os Sistemas Desacoplados (level_base)
                  </SectionTitle>

                  <Subtitle>Visão Geral</Subtitle>
                  <Paragraph>
                    Dentro da cena <code>level_base</code>, o objeto pai <strong>[Game Managers]</strong> atua como um contêiner organizacional para todos os sistemas periféricos do jogo. Esses scripts trabalham de forma totalmente desacoplada, escutando os "gritos" (Game Events) do <em>LevelManager</em> e reagindo de forma independente, seja tocando um som, atualizando a UI ou disparando efeitos visuais.
                  </Paragraph>

                  <Subtitle>1. Audio_Manager</Subtitle>
                  <Paragraph>
                    O maestro sonoro da cena. Ele contém um componente <em>Audio Source</em> nativo e o script <strong>Audio Manager</strong>.
                  </Paragraph>
                  <List>
                    <li><strong>Configuração de Áudio:</strong> Referencia o seu próprio <em>Audio Source</em> (Priority: 128, 2D Sound) para tocar os SFX.</li>
                    <li><strong>Efeitos Sonoros (Variáveis):</strong> Possui referências diretas para os arquivos de som do projeto: <code>Box Complete Sound</code>, <code>Screw Click Sound</code>, <code>Screw Enter Box Sound</code>, <code>Star Arrived Sound</code> e <code>Screw Enter Extra Slot Sound</code>.</li>
                    <li><strong>Integração via Eventos:</strong> Possui múltiplos <em>Game Event Listeners</em>. Ele fica escutando em silêncio. Quando, por exemplo, o evento <code>OnBoxCompleted</code> é disparado no jogo, ele captura o sinal e executa a função <code>AudioManager.PlayBoxCompleteSound</code>. O mesmo ocorre para cliques e movimentação de parafusos.</li>
                  </List>

                  <Subtitle>2. UI_Manager</Subtitle>
                  <Paragraph>
                    Responsável por animações e atualizações flutuantes da interface.
                  </Paragraph>
                  <List>
                    <li><strong>Referências:</strong> Conectado ao <code>Percentage Text</code> (Txt_Porcentagem) para atualizar o número do progresso.</li>
                    <li><strong>Efeitos da UI (Estrela):</strong> Gerencia a animação da estrelinha voando ao completar algo. Usa o prefab <code>P_VFX_Star_Fly</code>, com <code>Star Fly Time</code> (0.8) e <code>Star Ui Scale</code> (0.7). Quando a estrela termina de voar, ele dispara o evento de saída <code>On Star Arrived Event</code> (que o AudioManager escuta para tocar o som de plim!).</li>
                    <li><strong>Listeners:</strong> Escuta <code>OnPercentageChanged (Int)</code> para chamar <code>UIManager.UpdatePercentageText</code> e <code>OnStarFlyRequested (Vector3)</code> para instanciar a estrela via <code>UIManager.SpawnFlyingStar</code>.</li>
                  </List>

                  <Subtitle>3. VFX_Manager</Subtitle>
                  <Paragraph>
                    Controla os grandes efeitos visuais de conclusão de fase.
                  </Paragraph>
                  <List>
                    <li><strong>Referências:</strong> Possui espaço para um <code>Fireworks Prefab</code> (atualmente vazio) e gerencia o <code>Confetti UI Prefab</code> (usando o painel <em>P_LevelCleared_Panel</em>) que é instanciado dentro do <code>Main Canvas</code>.</li>
                    <li><strong>Listeners:</strong> Aguarda o evento <code>OnLevelCompleted</code>. Quando escuta, aciona o método <code>VFXManager.PlayVictoryVFX</code> para chover confetes na tela.</li>
                  </List>

                  <Subtitle>4. Surprise_Spawner</Subtitle>
                  <Paragraph>
                    Gerencia exclusivamente a mecânica da caixa misteriosa/surpresa.
                  </Paragraph>
                  <List>
                    <li><strong>Referências e Parâmetros:</strong> Conectado ao <em>Level Manager</em>. Define a coreografia de surgimento da caixa surpresa com extrema precisão 3D: <code>Surprise Box Slide Distance</code> (0.3), <code>Surprise Box Slide Depth</code> (0.905), <code>Surprise Box Slide Time</code> (0.3) e <code>Surprise Box Spawn Scale</code> (4, 4, 1). Possui interpolação do tipo <code>Linear</code>.</li>
                  </List>

                  <Subtitle>5. Sistemas de Apoio Silenciosos</Subtitle>
                  <Paragraph>
                    Scripts vitais que operam sem expor variáveis complexas no Inspetor:
                  </Paragraph>
                  <List>
                    <li><strong>UI_Distributor:</strong> Contém o script <em>Box UI Target Distributor</em>. Conectado ao <code>Level Boxes UI_Container</code>, sua função é espalhar os "alvos" da UI sobre as caixas 3D que o LevelManager instanciar.</li>
                    <li><strong>Screw_Registry:</strong> Contém o script <em>Screw Registry</em>. É o "cartório" da cena, onde todos os parafusos disponíveis registram sua cor e posição para o LevelManager poder consultá-los rapidamente.</li>
                    <li><strong>Credits_System:</strong> Contém o script <em>Hammered Credits System</em>. Responsável pela lógica da economia interna, moedas e pontuações do nível (sem variáveis visíveis no print).</li>
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
