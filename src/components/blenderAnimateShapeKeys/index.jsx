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
                    Guia de Animação: Como Animar Shape Keys (Expressões Faciais)
                  </SectionTitle>

                  <Subtitle>1. Preparação: Timeline e Auto Keying</Subtitle>
                  <Paragraph>
                    Diferente dos ossos, a animação de Shape Keys acontece direto no painel de propriedades. Vamos preparar o ambiente para gravar essa piscada.
                  </Paragraph>
                  <List>
                    <li>Certifique-se de que a malha do personagem está selecionada e você está no <strong>Object Mode</strong>.</li>
                    <li>Na parte inferior, coloque o cursor da sua <strong>Timeline</strong> no frame 1.</li>
                    <li>Ative o botão de <strong>Auto Keying</strong> (o ícone circular de gravação) na Timeline.</li>
                  </List>

                  <Subtitle>2. Encontrando o "Controle de Volume"</Subtitle>
                  <List>
                    <li>No painel da direita, vá em <strong>Object Data Properties</strong> (ícone do triângulo verde).</li>
                    <li>Abra a aba <strong>Shape Keys</strong>.</li>
                    <li>Clique na chave que você criou para a piscada (ex: <code>Eyelids</code> ou <code>Key 1</code>) para deixá-la selecionada.</li>
                  </List>

                  <Subtitle>3. Inserindo o Keyframe Inicial (Atalho I)</Subtitle>
                  <Paragraph>
                    Precisamos dizer ao Blender que, no frame 1, o olho está totalmente aberto (Valor 0).
                  </Paragraph>
                  <List>
                    <li>Coloque o ponteiro do mouse exatamente <strong>em cima da barra "Value"</strong> da sua Shape Key (que deve estar em 0.000).</li>
                    <li>Pressione a tecla <strong>I</strong> (Insert Keyframe).</li>
                    <li>Você notará duas coisas: um keyframe aparecerá no frame 1 da Timeline, e a cor do campo Value mudará (geralmente para amarelo), indicando que aquele valor agora possui uma chave gravada naquele exato frame.</li>
                  </List>

                  <Subtitle>4. Gravando o Fechamento do Olho</Subtitle>
                  <Paragraph>
                    Agora vamos dar o tempo para a piscada acontecer e alterar o valor.
                  </Paragraph>
                  <List>
                    <li>Mova a agulha azul da Timeline para frente, escolhendo o tempo do movimento (ex: frame 10 ou 15).</li>
                    <li>Ao mover a agulha, a cor do campo Value vai mudar novamente (geralmente para verde), avisando que você está em um frame livre de gravação.</li>
                    <li>Arraste o slider <strong>Value</strong> para <strong>1.000</strong> (olho totalmente fechado).</li>
                    <li>Como o <em>Auto Keying</em> está ativado, um novo keyframe será criado automaticamente nesse frame 10/15. A cor do Value voltará a ficar amarela.</li>
                  </List>

                  <Subtitle>5. Teste e Camadas de Animação</Subtitle>
                  <Paragraph>
                    Pressione <strong>Espaço</strong> (Space) para dar o play na Timeline e veja a animação do olho acontecer!
                  </Paragraph>
                  <Paragraph>
                    <em>💡 Observação Importante:</em> A grande vantagem desse sistema é que as Shape Keys rodam de forma independente. Você não precisa obrigatoriamente animar os ossos para testar as expressões. Porém, se o seu gato já tiver uma animação corporal completa gravada nos ossos, a piscada se mesclará perfeitamente ao movimento do corpo, rodando em paralelo sem nenhum conflito.
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
