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
                    1. Cena: Loading (A Porta de Entrada)
                  </SectionTitle>

                  <Subtitle>Visão Geral</Subtitle>
                  <Paragraph>
                    A cena de <strong>Loading</strong> é a primeira coisa que a engine processa ao abrir o aplicativo. Ela serve como uma "cortina" visual (geralmente mostrando a logo do jogo) enquanto os dados mais pesados da próxima cena são carregados em segundo plano (background). Isso garante que o aplicativo não pareça ter travado durante a inicialização.
                  </Paragraph>

                  <Subtitle>1. Configurações Expostas (Inspetor)</Subtitle>
                  <Paragraph>
                    O script <code>SceneLoader</code> centraliza as regras de transição através de duas variáveis simples:
                  </Paragraph>
                  <List>
                    <li><strong>sceneToLoad ("MainMenu"):</strong> Define qual será o próximo destino. Manter isso como uma variável pública permite reaproveitar essa mesma cena de Loading no futuro, caso precise ir para outras partes do jogo.</li>
                    <li><strong>minLoadingTime (2.0f):</strong> Uma trava de segurança visual. Se o celular carregar a cena em 0.1 segundos, a tela piscaria de forma agressiva. Esse tempo mínimo força a engine a exibir a arte de loading por pelo menos 2 segundos reais, garantindo uma transição suave.</li>
                  </List>

                  <Subtitle>2. O Carregamento Assíncrono (LoadAsyncOperation)</Subtitle>
                  <Paragraph>
                    Tudo começa no <code>Start()</code>, que dispara a Coroutine responsável por fazer o trabalho pesado sem congelar a tela.
                  </Paragraph>
                  <List>
                    <li><strong>SceneManager.LoadSceneAsync:</strong> O comando de ouro da Unity. Ele começa a carregar a cena alvo na memória enquanto o jogo continua rodando a cena atual.</li>
                    <li><strong>allowSceneActivation = false:</strong> Imediatamente após pedir o carregamento, o script bloqueia a ativação automática. Isso diz à engine: "Carregue tudo, mas não mude a tela até eu mandar".</li>
                  </List>

                  <Subtitle>3. O Loop de Verificação e o "Truque do 0.9f"</Subtitle>
                  <Paragraph>
                    Dentro do loop <code>while (!gameLevel.isDone)</code>, o script mede o tempo passado (<code>elapsedTime += Time.deltaTime</code>) e verifica duas condições vitais antes de liberar a entrada no jogo:
                  </Paragraph>
                  <List>
                    <li><strong>Condição 1 (Tempo):</strong> O <code>elapsedTime</code> precisa ser maior ou igual ao <code>minLoadingTime</code> (2 segundos).</li>
                    <li><strong>Condição 2 (O Progresso da Unity):</strong> A Unity tem uma peculiaridade no carregamento assíncrono: quando o <code>allowSceneActivation</code> é falso, o progresso (<code>gameLevel.progress</code>) para exatamente em <strong>0.9f</strong> (90%). O último 10% é justamente a ativação da cena. Por isso, a verificação <code>gameLevel.progress >= 0.9f</code> é a confirmação de que os dados estão 100% prontos na memória.</li>
                    <li><strong>A Liberação:</strong> Quando as duas condições são verdadeiras, o script inverte a chave (<code>gameLevel.allowSceneActivation = true</code>), e a engine instantaneamente descarta a cena de Loading e exibe o MainMenu.</li>
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
