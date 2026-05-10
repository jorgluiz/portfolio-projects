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
  { src: '/assets/unityScriptableObjects/gameEvent.png', alt: '???' },
  { src: '/assets/unityScriptableObjects/gameEventInt.png', alt: '???' },
  { src: '/assets/unityScriptableObjects/gameEventVector3.png', alt: '???' },
  { src: '/assets/unityScriptableObjects/levelData.png', alt: '???' },
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
                    1. Guia de Sobrevivência: Checklist e Detalhes Críticos
                  </SectionTitle>

                  <Subtitle>Visão Geral</Subtitle>
                  <Paragraph>
                    Com uma arquitetura tão robusta, desacoplada e cheia de automações (Object Pooling, Eventos, UI Dinâmica), alguns detalhes no Inspetor da Unity tornam-se pontos críticos de falha. Este é o mapa mental do que <strong>NUNCA</strong> esquecer ao criar novas fases, caixas ou parafusos.
                  </Paragraph>

                  <Subtitle>1. Criação de Níveis (Level Design)</Subtitle>
                  <Paragraph>
                    Atenção aos detalhes ao fatiar o modelo 3D e configurar o LevelData.
                  </Paragraph>
                  <List>
                    <li><strong>LockablePart (numberOfLocks):</strong> A regra de ouro. A quantidade escrita aqui tem que ser EXATAMENTE igual ao número de parafusos que seguram essa placa. Se colocar 4 e tiver só 3 parafusos, a placa nunca vai cair e o jogador ficará travado (Softlock).</li>
                    <li><strong>RemovablePart (isBlocked):</strong> Se você colocou uma placa de madeira por cima de um parafuso, você <strong>DEVE</strong> marcar <code>isBlocked = true</code> no parafuso de baixo. Caso contrário, o jogador poderá clicar através do vidro/madeira e puxar o parafuso antes da hora, quebrando a lógica do puzzle.</li>
                    <li><strong>LevelData (Textos Exatos):</strong> O Cardápio de Caixas (<code>boxColorName</code> e <code>surpriseColorToSpawn</code>) funciona com base em <em>Strings</em> (textos). Se a caixa na piscina se chama "Purple" e você digitar "purple" (com 'p' minúsculo) ou "Purple " (com espaço no final), o <code>LevelManager</code> vai dar erro fatal dizendo que faltou caixa!</li>
                  </List>

                  <Subtitle>2. Sistema de Caixas e Martelo (BoxController)</Subtitle>
                  <Paragraph>
                    As caixas são autônomas, mas dependem das suas referências visuais.
                  </Paragraph>
                  <List>
                    <li><strong>O Prefab de Crédito (screwPrefab):</strong> <strong>CRÍTICO!</strong> Nunca deixe esse campo vazio (Missing) no BoxController. Se o jogador der uma martelada e essa caixa entrar em cena depois para cobrar o crédito, ela vai tentar instanciar o <em>GhostScrew</em>. Sem o prefab, o jogo vai cuspir um erro de <code>NullReferenceException</code> e o crédito do jogador vai sumir no limbo invisível.</li>
                    <li><strong>Limite da Piscina de Caixas:</strong> Se o seu LevelData pedir 4 caixas amarelas simultâneas ou na mesma fase, você <strong>PRECISA</strong> garantir que o array <code>piscinaDeCaixas</code> do LevelManager tenha pelo menos 4 cópias do <code>BoxController</code> amarelo atreladas. Caso contrário, o jogo trava por falta de estoque.</li>
                  </List>

                  <Subtitle>3. Parafusos (RemovablePart)</Subtitle>
                  <Paragraph>
                    A coreografia depende das cores e alinhamentos.
                  </Paragraph>
                  <List>
                    <li><strong>A Cor (screwColor):</strong> A string da cor do parafuso tem que bater exatamente com a string da cor da caixa alvo.</li>
                    <li><strong>Ajuste Fino de Rotação (finalRotationOffset):</strong> Lembrar que a regra base é geralmente <code>Z = 180</code> para que o parafuso fique de cabeça para cima quando entrar na caixa final. Se esquecer isso, o parafuso vai pousar de ponta-cabeça na UI.</li>
                  </List>

                  <Subtitle>4. Interface e Otimização Visual</Subtitle>
                  <Paragraph>
                    Regras para não estourar a tela ou a memória.
                  </Paragraph>
                  <List>
                    <li><strong>Atlas de Confetes e Partículas:</strong> Qualquer nova imagem que você adicionar ao <code>Atlas_Confetes</code> para o sistema de partículas precisa ser desenhada na cor <strong>BRANCA PURA</strong>. Se você colocar um confete já vermelho no Atlas, a Unity não conseguirá mudar a cor dele via código depois.</li>
                    <li><strong>Guias da UI (BoxUITargetDistributor):</strong> O número de <code>P_Guide_UI_LevelBoxes</code> (aqueles alvos vazios no Canvas) tem que ser igual ou maior que a quantidade máxima de caixas que você permite ativas na tela ao mesmo tempo (ex: Se seu jogo permite 3 caixas na mesa, tem que ter 3 Guias na UI, senão a terceira caixa não tem pra onde ir).</li>
                  </List>

                  {/* <ImageSlider images={retopologyImages} /> */}

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
