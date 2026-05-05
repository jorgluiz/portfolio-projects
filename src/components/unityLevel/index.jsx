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
                    1. Os Modelos 3D e Parafusos: Física, Lógica e Game Feel
                  </SectionTitle>

                  <Subtitle>Visão Geral</Subtitle>
                  <Paragraph>
                    Esta é a camada interativa do jogo. As malhas 3D não são apenas objetos estáticos; elas são placas inteligentes presas por parafusos altamente animados. O sistema une uma lógica rigorosa de quebra-cabeça com simulações físicas e disparo de áudios que dão peso e satisfação à ação de desmontar. Abaixo, a anatomia exata dos componentes na ordem do Inspetor:
                  </Paragraph>

                  <Subtitle>1. Eventos de Áudio</Subtitle>
                  <Paragraph>
                    O parafuso atua como um emissor silencioso. Em vez de ter um <code>AudioSource</code> próprio, ele apenas "grita" os eventos que vimos mapeados no <code>Audio_Manager</code>:
                  </Paragraph>
                  <List>
                    <li>Dispara <strong>OnScrewClicked</strong> ao ser tocado (dando o plim inicial).</li>
                    <li>Dispara <strong>OnScrewEnteredBox</strong> ao finalizar o pouso em uma caixa de cor correspondente.</li>
                    <li>Dispara <strong>OnScrewEnteredExtraSlot</strong> se for redirecionado para a fila de espera.</li>
                  </List>

                  <Subtitle>2. Bloqueio (Lockable Part)</Subtitle>
                  <Paragraph>
                    O script anexado à placa 3D (ex: <code>Lantern_Base</code>) que dita como e quando ela cai da parede.
                  </Paragraph>
                  <List>
                    <li><strong>Number Of Locks (3):</strong> A dependência lógica da peça. Ela "sabe" que está sendo segurada por 3 parafusos. Quando a contagem chega a zero, a placa é liberada.</li>
                    <li><strong>Fall Effect (Efeito Pena):</strong> Física de queda programada (Torque, Push Force, Air Drag). Quando liberada, a placa sofre uma física controlada antes de ser destruída (Destroy Delay: 2s) para não pesar na memória.</li>
                  </List>

                  <Subtitle>3. Game Logic (A Lógica do Jogo)</Subtitle>
                  <Paragraph>
                    As regras brutas dentro do script do parafuso (<code>RemovablePart</code>).
                  </Paragraph>
                  <List>
                    <li><strong>Cor e Identidade:</strong> Define a cor do parafuso (ex: Purple), informando ao <code>LevelManager</code> para qual caixa ele deve ir.</li>
                    <li><strong>Liberação e Alvo:</strong> É aqui que ele subtrai a trava da placa mãe e pede ao Maestro (LevelManager) o seu <code>Target 3D Slot</code> (destino final).</li>
                  </List>

                  <Subtitle>4. 3D Flight Settings (Configurações de Voo)</Subtitle>
                  <Paragraph>
                    Como o parafuso se comporta ao viajar pelo espaço 3D até a caixa ou slot extra.
                  </Paragraph>
                  <List>
                    <li><strong>Flight Time 3D (0.3):</strong> A viagem toda dura apenas 0.3 segundos.</li>
                    <li><strong>Target Scale In Slot (0.65, 0.65, 0.9):</strong> Ele encolhe dinamicamente no ar para caber perfeitamente nos buraquinhos da caixa ou da UI sem sobrepor os outros parafusos.</li>
                    <li><strong>Flight Rotation Speed (300):</strong> Gira agressivamente no ar, parecendo que foi arremessado.</li>
                  </List>

                  <Subtitle>5. Animation Settings - Arrival Effects (Efeitos de Chegada)</Subtitle>
                  <Paragraph>
                    O charme do pouso quando ele chega na caixa de destino.
                  </Paragraph>
                  <List>
                    <li><strong>Tilt Angle (80) & Tilt Time (0.3):</strong> O parafuso chega "deitado" ou inclinado.</li>
                    <li><strong>Screw Time (0.2) & Screw Degrees (360):</strong> Ele executa uma animação de "rosquear" para dentro do buraco da caixa, finalizando com o <em>Final Rotation Offset</em> para ficar perfeitamente alinhado visualmente.</li>
                  </List>

                  <Subtitle>6. Animation Settings - 3D Click Effect (Efeito de Clique)</Subtitle>
                  <Paragraph>
                    O feedback imediato na exata hora em que o dedo do jogador toca a tela.
                  </Paragraph>
                  <List>
                    <li><strong>Pop Out / Pop Forward (0.09):</strong> O parafuso dá um "pulinho" para fora do buraco da placa.</li>
                    <li><strong>Pop Time (0.3) & Rotation Degrees (360):</strong> Em 0.3s, usando uma curva suave <em>Ease Out Quad</em>, ele desrosqueia rapidamente antes de iniciar o voo (Flight Settings).</li>
                  </List>

                  <Subtitle>7. Detecção (Clique vs Arraste)</Subtitle>
                  <Paragraph>
                    Proteção de usabilidade mobile invisível, mas vital.
                  </Paragraph>
                  <List>
                    <li><strong>Click Drag Threshold (15):</strong> Se o jogador tocar no parafuso, mas arrastar o dedo 15 pixels pela tela, o jogo cancela o clique. Isso permite que o jogador gire a câmera livremente sem tirar parafusos sem querer pelo caminho.</li>
                  </List>

                  <Subtitle>8. Box Collider (Colisores Físicos)</Subtitle>
                  <Paragraph>
                    Tanto a placa (LockablePart) quanto o parafuso (RemovablePart) possuem seus próprios colliders.
                  </Paragraph>
                  <List>
                    <li>A placa possui um collider maior (geralmente adaptado ao tamanho do objeto 3D) para impedir cliques vazios e auxiliar em cálculos de física caso seja empurrada.</li>
                    <li>O parafuso possui um collider menor (adaptado à cabeça do parafuso), que é o alvo exato que o <code>GraphicRaycaster / EventSystem</code> tenta acertar quando o jogador toca na tela do celular.</li>
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
