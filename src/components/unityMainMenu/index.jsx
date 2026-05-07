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
                    1. Cena: MainMenu e Gerenciadores Globais Persistentes
                  </SectionTitle>

                  <Subtitle>Visão Geral</Subtitle>
                  <Paragraph>
                    A cena <strong>MainMenu</strong> não é apenas a tela inicial onde o jogador clica em "Jogar". Ela atua como o berço dos sistemas globais do jogo. É aqui que os gerentes persistentes (Singletons) nascem, carregam os dados salvos do dispositivo e se blindam para não serem destruídos quando o jogador muda de fase.
                  </Paragraph>

                  <Subtitle>1. MenuManager (A Ponte da Interface)</Subtitle>
                  <Paragraph>
                    Um script enxuto e de responsabilidade única focado apenas na UI do menu.
                  </Paragraph>
                  <List>
                    <li><strong>Função IniciarJogo():</strong> Vinculada ao botão de "Play" da tela. Em vez de ditar regras, ela simplesmente chama o <code>GameManager.Instance.StartGameFromMenu()</code>, passando o índice da cena principal (<code>levelBaseSceneIndex = 3</code>). Se o GameManager não existir, ela emite um erro no console, garantindo a segurança do fluxo.</li>
                  </List>

                  <Subtitle>2. GameManager (O Cérebro Persistente)</Subtitle>
                  <Paragraph>
                    O maestro global do projeto. Utiliza o padrão Singleton (<code>public static GameManager Instance</code>) e o comando <code>DontDestroyOnLoad</code> para sobreviver a todas as trocas de cenas.
                  </Paragraph>
                  <List>
                    <li><strong>Lista de Níveis (LevelData[] levels):</strong> O catálogo mestre de todas as fases do jogo. É daqui que o <em>LevelManager</em> (lá na cena do jogo) puxa o "cardápio" de caixas e regras de cada fase.</li>
                    <li><strong>Carregamento de Progresso (LoadProgress):</strong> Chamado logo no <code>Awake()</code>. Ele acessa o banco de dados local do celular (<code>PlayerPrefs</code>) usando a chave constante <code>PROGRESS_KEY</code> para descobrir em qual fase o jogador parou. Se o índice salvo for maior que a lista de níveis (jogador zerou o jogo), ele reseta para 0 com segurança.</li>
                    <li><strong>Salvamento Imediato (RegisterNextLevel):</strong> Quando o jogador vence uma fase, o <em>LevelManager</em> avisa o GameManager, que imediatamente salva o novo índice no disco (<code>PlayerPrefs.Save()</code>). Isso garante que, se o aplicativo for fechado abruptamente na tela de vitória, o progresso não será perdido.</li>
                  </List>

                  <Subtitle>3. VibrationManager (Motor Háptico Otimizado)</Subtitle>
                  <Paragraph>
                    Também um Singleton persistente, responsável por dar "peso" tátil aos parafusos e marteladas, mas com uma arquitetura focada em altíssima performance para Android.
                  </Paragraph>
                  <List>
                    <li><strong>Cache Nativo (Otimização Mobile):</strong> Fazer chamadas diretas para a API do Android (Java) durante a gameplay (como na hora de soltar um parafuso) gera "lixo" na memória e trava o jogo. Este script resolve isso executando a busca pesada (<code>getSystemService</code>) <strong>uma única vez</strong> no <code>Awake()</code> e guardando a referência na variável <code>vibrator</code>.</li>
                    <li><strong>Níveis de Vibração:</strong> Oferece métodos expostos <code>VibrateLight()</code> (30ms) e <code>VibrateHeavy()</code> (150ms) para que os parafusos e ferramentas causem sensações físicas diferentes nas mãos do jogador.</li>
                    <li><strong>Fallback Seguro:</strong> O método <code>VibrateCustom</code> tenta usar o sistema rápido de cache. Se houver qualquer falha ou se o jogo estiver rodando em iOS/Editor, ele possui rotas alternativas de segurança (<code>Handheld.Vibrate()</code>), garantindo que o código nunca quebre o jogo por falta de hardware compatível.</li>
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
