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
const lockablePart = [
  { src: '/assets/unityLevels/lockablePart.png', alt: '???' },
];

const removablePart = [
  { src: '/assets/unityLevels/removablePart.png', alt: '???' },
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

                  {/* <!-- ========================================== -->
                  <!-- SCRIPT 1: LOCKABLE PART                    -->
                  <!-- ========================================== --> */}
                  <SectionTitle>
                    1. A Peça Fatiada: Física e Interação (LockablePart)
                  </SectionTitle>

                  <Subtitle>Visão Geral</Subtitle>
                  <Paragraph>
                    Este script transforma malhas 3D estáticas (como a base de uma lanterna) em placas inteligentes que reagem à física e às ferramentas do jogador. Ele gerencia as travas que seguram a peça na tela e a coreografia de como ela cai quando finalmente é liberada.
                  </Paragraph>

                  <Subtitle>1. O Sistema de Travas (Number Of Locks)</Subtitle>
                  <Paragraph>
                    A dependência lógica principal da peça.
                  </Paragraph>
                  <List>
                    <li>Ela "sabe" que está sendo segurada por uma quantidade X de parafusos (<code>numberOfLocks</code>). Cada parafuso removido chama a função <code>Unlock()</code>. Quando a contagem chega a zero, a placa chama a própria liberação (<code>ReleasePart</code>).</li>
                  </List>

                  <Subtitle>2. Efeito Pena (Fall Effect)</Subtitle>
                  <Paragraph>
                    A física de queda programada para que o objeto não caia como uma pedra dura.
                  </Paragraph>
                  <List>
                    <li><strong>airDrag (3.5) & airAngularDrag (2.0):</strong> Freiam a queda e o giro agressivo, fazendo a peça parecer muito mais leve.</li>
                    <li><strong>fallTorque & initialPushForce:</strong> Aplicam um empurrãozinho lateral e um giro suave (aleatórios) no exato momento em que a peça se solta da parede.</li>
                    <li><strong>fallDelay (0.5s):</strong> Uma pausa dramática de meio segundo antes da física agir, dando tempo para o cérebro do jogador registrar que a última trava saiu.</li>
                  </List>

                  <Subtitle>3. A Linha da Morte (Otimização no Update)</Subtitle>
                  <Paragraph>
                    Gestão de memória e performance.
                  </Paragraph>
                  <List>
                    <li>Em vez de destruir a peça baseado apenas no tempo, o <code>Update()</code> monitora a altura da peça (<code>transform.position.y</code>). Se ela cair abaixo do valor configurado em <code>destroyDelay</code> (ex: passar do fundo da tela do celular), o <code>Destroy(gameObject)</code> é acionado, limpando o lixo da memória.</li>
                  </List>

                  <Subtitle>4. Interação com o Martelo (SmashAndReleaseChildren)</Subtitle>
                  <Paragraph>
                    A reação da placa aos Power-Ups do jogador.
                  </Paragraph>
                  <List>
                    <li>Se o martelo for ativado e o jogador clicar na placa (pelo <code>OnMouseUp</code>), a peça varre a cena procurando todos os parafusos que ainda estão presos nela. Ela arranca todos de uma vez, manda eles voarem para seus destinos (ou os destrói) e, em seguida, se solta instantaneamente.</li>
                  </List>

                  <Subtitle>5. Box Collider (Área de Toque e Colisão)</Subtitle>
                  <Paragraph>
                    A malha física. A placa possui um collider abrangente para impedir que cliques passem reto por ela e para permitir que a detecção do Martelo funcione perfeitamente ao tocar na madeira.
                  </Paragraph>

                </Container>

                <ImageSlider images={lockablePart} />

                <Container>

                  {/* <!-- ========================================== -->
                  <!-- SCRIPT 2: REMOVABLE PART                   -->
                  <!-- ========================================== --> */}
                  <SectionTitle>
                    2. O Parafuso: Lógica, Voo e Game Feel (RemovablePart)
                  </SectionTitle>

                  <Subtitle>Visão Geral</Subtitle>
                  <Paragraph>
                    O parafuso é o ator principal do gameplay. Ele une as regras do quebra-cabeça com simulações físicas hiper-detalhadas e disparo de áudios que dão peso e satisfação à ação de desmontar o puzzle. Abaixo, a anatomia das suas configurações:
                  </Paragraph>

                  <Subtitle>1. Eventos de Áudio</Subtitle>
                  <Paragraph>
                    O parafuso atua como um emissor silencioso, "gritando" eventos para o <code>Audio_Manager</code> global:
                  </Paragraph>
                  <List>
                    <li>Dispara <strong>OnScrewClickedEvent</strong> ao ser tocado e confirmado (dando o plim inicial).</li>
                    <li>Dispara <strong>OnScrewEnteredExtraSlotEvent</strong> se bater na madeira da fila de espera.</li>
                  </List>

                  <Subtitle>2. Bloqueio de Level Design (isBlocked e blockedPopDistance)</Subtitle>
                  <Paragraph>
                    Um recurso essencial para a construção de fases com camadas sobrepostas. Só deve ser ativado manualmente no Inspetor se o parafuso começar a fase fisicamente escondido ou bloqueado por uma placa que está por cima dele.
                  </Paragraph>
                  <List>
                    <li><strong>isBlocked:</strong> Quando ativado, o parafuso é impedido de voar. Se o jogador clicar nele, o script não ignora a ação: ele faz uma "simulação" visual de que está tentando sair, mas bate na placa que o está atrapalhando. Ele aguarda a placa de cima cair e acionar o método <code>UnblockScrew()</code> para finalmente ser liberado.</li>
                    <li><strong>blockedPopDistance (0.01f):</strong> É a distância curtinha que ele tenta sair durante essa simulação de bloqueio. Ele sobe um pouquinho, "bate" na barreira invisível da placa de cima, e volta para o buraco.</li>
                  </List>

                  <Subtitle>3. Game Logic (A Lógica e a Fila de Espera)</Subtitle>
                  <Paragraph>
                    A inteligência de estado do parafuso.
                  </Paragraph>
                  <List>
                    <li><strong>Cor e Identidade:</strong> Define a cor (ex: Purple), dizendo ao LevelManager qual é a caixa correta.</li>
                    <li><strong>Inteligência de Fila (pendingForceFly):</strong> Se ele estiver a caminho do <em>Extra Slot</em> e uma caixa da sua cor aparecer na mesa, ele ativa essa flag. Assim que pousa, ele decola quase imediatamente para o destino final (a caixa).</li>
                  </List>

                  <Subtitle>4. 3D Flight Settings (Configurações de Voo)</Subtitle>
                  <Paragraph>
                    A viagem de desrosqueio até o alvo final.
                  </Paragraph>
                  <List>
                    <li><strong>Flight Time 3D (0.7):</strong> A viagem toda dura 0.7 segundos.</li>
                    <li><strong>Target Scale In Slot (0.65, 0.65, 0.9):</strong> Ele encolhe dinamicamente no ar logo na largada (em 0.15s) para caber nos buraquinhos do destino sem engolir os parafusos vizinhos.</li>
                    <li><strong>Flight Rotation Speed (300):</strong> Gira agressivamente no ar, parecendo que foi arremessado.</li>
                  </List>

                  <Subtitle>5. Animation Settings - Arrival Effects (Efeitos de Chegada)</Subtitle>
                  <Paragraph>
                    A coreografia do pouso.
                  </Paragraph>
                  <List>
                    <li><strong>Tilt Angle (60) & Tilt Time (0.3):</strong> O parafuso chega inclinando para a posição.</li>
                    <li><strong>Screw Time (0.2) & Screw Degrees (360):</strong> Usando <code>LeanTween.value</code>, ele interpola a rotação junto com a posição Z (empurrando para o fundo), dando a sensação física de aperto na caixa.</li>
                    <li><strong>Final Rotation Offset:</strong> Baseado no destino, ele decide se vai usar um Z=180 (para alinhar com o fundo da caixa) ou um Z=0 (para os Extra Slots).</li>
                  </List>

                  <Subtitle>6. Animation Settings - 3D Click Effect (Efeito de Clique)</Subtitle>
                  <Paragraph>
                    O feedback inicial.
                  </Paragraph>
                  <List>
                    <li><strong>Pop Out / Pop Forward (0.09):</strong> Ao clicar, ele salta um pouco para fora do buraco na direção da câmera.</li>
                    <li><strong>Pop Time (0.3) & Rotation Degrees (360):</strong> Desrosqueia rapidamente com uma curva suave (Ease Out Quad) antes de voar.</li>
                  </List>

                  <Subtitle>7. Detecção (Clique vs Arraste)</Subtitle>
                  <Paragraph>
                    Filtro de usabilidade vital para o mobile.
                  </Paragraph>
                  <List>
                    <li><strong>Click Drag Threshold (15):</strong> Se o jogador tocar, mas arrastar o dedo mais que 15 pixels, o script ignora a ação. Isso impede que parafusos saiam voando sem querer quando o jogador apenas tenta girar a câmera.</li>
                  </List>

                  <Subtitle>8. Box Collider (O Alvo Físico)</Subtitle>
                  <Paragraph>
                    Possui um collider adaptado à cabeça do parafuso, que é rapidamente desativado assim que o clique é processado. Isso garante que ele não bloqueie cliques em outros objetos enquanto viaja pela tela.
                  </Paragraph>

                  <ImageSlider images={removablePart} />

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
