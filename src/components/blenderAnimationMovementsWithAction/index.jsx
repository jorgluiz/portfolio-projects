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
  { src: '/assets/blenderAnimationMovementsWithAction/01.png', alt: '???' },
  { src: '/assets/blenderAnimationMovementsWithAction/02.png', alt: '???' },
  { src: '/assets/blenderAnimationMovementsWithAction/03.png', alt: '???' },
  { src: '/assets/blenderAnimationMovementsWithAction/04.png', alt: '???' },
  { src: '/assets/blenderAnimationMovementsWithAction/05.png', alt: '???' },
  { src: '/assets/blenderAnimationMovementsWithAction/06.png', alt: '???' },
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
                    Guia de Animação: Criando Movimentos com Action Editor
                  </SectionTitle>

                  <Subtitle>1. Preparação da Workspace</Subtitle>
                  <Paragraph>
                    Para animar com eficiência, precisamos de ferramentas específicas de controle de tempo e poses.
                  </Paragraph>
                  <List>
                    <li>Selecione o seu esqueleto (Armature) e mude para o <strong>Pose Mode</strong> (Ctrl + Tab).</li>
                    <li>Na parte inferior da tela, abra duas janelas essenciais: a <strong>Timeline</strong> e o <strong>Dope Sheet</strong>.</li>
                    <li><strong>Reset de Pose:</strong> Antes de começar qualquer animação, selecione todos os ossos (A) e use <strong>Alt + G</strong> (Reset Location) e <strong>Alt + R</strong> (Reset Rotation) para garantir que o personagem comece na posição de descanso.</li>
                  </List>

                  <Subtitle>2. Criando uma Action e o "Fake User"</Subtitle>
                  <Paragraph>
                    No Blender, cada animação (correr, pular, cair) é tratada como uma <strong>Action</strong> independente no Dope Sheet.
                  </Paragraph>
                  <List>
                    <li>No menu do Dope Sheet, mude o modo para <strong>Action Editor</strong>.</li>
                    <li>Clique em <strong>+ New</strong> e dê um nome claro, como <code>Falling_Position</code>.</li>
                    <li><strong>🛡️ O que é o Fake User (ícone de escudo)?</strong> Ative sempre o escudo ao lado do nome da Action. Isso garante que o Blender salve a animação permanentemente no arquivo .blend, mesmo que ela não esteja sendo usada por nenhum objeto no momento. Sem isso, você corre o risco de perder a animação ao fechar o programa.</li>
                  </List>

                  <Subtitle>3. Inserindo o Primeiro Keyframe</Subtitle>
                  <Paragraph>
                    O keyframe avisa ao Blender onde o osso deve estar em um momento exato da linha do tempo.
                  </Paragraph>
                  <List>
                    <li>Coloque o cursor da Timeline no frame 1.</li>
                    <li>Selecione todos os ossos (A) e aperte a tecla <strong>K</strong> (ou <strong>I</strong>, dependendo da sua versão).</li>
                    <li>No menu que abrir, selecione <strong>Location & Rotation</strong>. Você verá vários pontos aparecerem no Dope Sheet, marcando a posição inicial de todo o corpo do gato.</li>
                  </List>

                  <Subtitle>4. Auto Keying e Movimentação</Subtitle>
                  <Paragraph>
                    Para facilitar o fluxo, podemos deixar o Blender registrar os movimentos automaticamente.
                  </Paragraph>
                  <List>
                    <li>Ative o ícone de <strong>Auto Keying</strong> (o círculo de gravação na Timeline). Agora, qualquer movimento que você fizer nos controladores criará um novo keyframe automaticamente.</li>
                    <li>Mova o cursor da Timeline para o frame onde deseja a próxima pose e use <strong>G</strong> (Move) e <strong>R</strong> (Rotate) nos controladores.</li>
                  </List>

                  <Subtitle>5. 🔄 Hacker: Espelhamento de Poses (Ctrl + C / Shift + Ctrl + V)</Subtitle>
                  <Paragraph>
                    Ao animar caminhadas ou quedas, você muitas vezes quer que o lado esquerdo repita exatamente a pose que o lado direito fez em outro momento.
                  </Paragraph>
                  <List>
                    <li>Selecione o controlador de um pé (ex: o direito) e aperte <strong>Ctrl + C</strong> para copiar a pose.</li>
                    <li>Vá para o frame desejado e selecione o controlador do outro pé (o esquerdo).</li>
                    <li>Pressione <strong>Shift + Ctrl + V</strong> (Paste X-Flipped Pose). O Blender espelhará a posição perfeitamente, economizando metade do trabalho manual.</li>
                  </List>

                  <Subtitle>6. Dicas de Refinamento e Snap</Subtitle>

                  <List>
                    <li><strong>Simetria em tempo real:</strong> Ative o ícone da borboleta (X-Axis Mirror) no canto superior direito para que movimentos em um lado sejam replicados no outro instantaneamente.</li>
                    <li><strong>Ajuste de Tempo:</strong> No Dope Sheet ou Timeline, você pode selecionar um keyframe com o botão direito e arrastá-lo (G) para mudar quando aquele movimento começa ou termina.</li>
                    <li><strong>Snap (O Ímã):</strong> Mantenha o Snap ativado (configurado para <em>Nearest Marker</em>). Isso evita que seus keyframes fiquem em posições quebradas (como frame 55.2), o que causaria trepidações na animação dentro da Unity.</li>
                  </List>

                  <Subtitle>7. 📈 Curvas de Interpolação (Quintic Easing)</Subtitle>
                  <Paragraph>
                    A interpolação define como o Blender faz a transição entre dois keyframes.
                  </Paragraph>
                  <List>
                    <li>Selecione dois keyframes (ex: o do frame 55 e o do 70).</li>
                    <li>Clique com o botão direito e vá em <strong>Interpolation Mode &gt; Quintic</strong>.</li>
                    <li><strong>Por que usar?</strong> Diferente do movimento linear (constante), o modo Quintic cria um efeito de "aceleração e desaceleração". O movimento que termina no frame 70 começará de forma mais lenta e suave a partir do 55, dando um peso muito mais natural e orgânico à queda ou ao salto do personagem.</li>
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
