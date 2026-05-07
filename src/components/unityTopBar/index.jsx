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
                    4. Interface de Usuário (UI): TopBar e Sistema de Progresso
                  </SectionTitle>

                  <Subtitle>Visão Geral</Subtitle>
                  <Paragraph>
                    A interface superior do jogo (dentro de <code>level_base</code>) foi projetada com foco em responsividade mobile e modularidade. Ela abriga o botão de configurações, a barra de progresso em etapas (checkpoints) e o indicador numérico, tudo organizado através de Layout Groups da Unity e adaptado para não ficar escondido pelo "Notch" (furo da câmera) dos celulares.
                  </Paragraph>

                  <Subtitle>1. Hierarquia Principal (Main_Canvas)</Subtitle>
                  <Paragraph>
                    A árvore de objetos na Unity segue esta estrutura exata para garantir o alinhamento correto:
                  </Paragraph>
                  <List>
                    <li><strong>Main_Canvas</strong>
                      <ul>
                        <li><strong>TopBar_Master_Container:</strong> O contêiner pai de toda a barra superior.</li>
                        <ul>
                          <li><strong>Top_Header_Row:</strong> O organizador horizontal dos elementos.</li>
                          <ul>
                            <li><strong>Btn_Configuracoes:</strong> Botão de pausa/menu.</li>
                            <li><strong>BarraProgresso_Container:</strong> Gerencia os ícones de checkpoint.</li>
                            <li><strong>Indicador_Porcentagem:</strong> Exibe o número da % de conclusão.</li>
                          </ul>
                        </ul>
                      </ul>
                    </li>
                  </List>

                  <Subtitle>2. Responsividade e Layouts (Os Containers)</Subtitle>
                  <Paragraph>
                    Como os elementos se comportam e se ajustam na tela:
                  </Paragraph>
                  <List>
                    <li><strong>TopBar_Master_Container (Vertical Layout Group & Safe Area):</strong> Possui o script <code>SafeArea</code> anexado. Este script é crucial para o mobile, pois aplica um <em>Padding</em> dinâmico no topo (ex: 70 com Notch, 30 sem Notch), garantindo que a UI nunca fique espremida no limite da tela do aparelho.</li>
                    <li><strong>Top_Header_Row (Horizontal Layout Group):</strong> Garante que o botão, a barra e a porcentagem fiquem alinhados lado a lado, centralizados (Middle Center), sem a necessidade de posicionar manualmente com coordenadas X/Y.</li>
                    <li><strong>Layout Elements:</strong> Tanto o botão de configuração quanto o indicador de porcentagem usam o componente <code>Layout Element</code> com <em>Preferred Width / Min Width</em> de 100, garantindo que tenham tamanhos fixos nas pontas, enquanto a barra de progresso no meio se estica.</li>
                  </List>

                  <Subtitle>3. Componentes Interativos e Visuais</Subtitle>
                  <Paragraph>
                    O que cada elemento filho faz na prática:
                  </Paragraph>
                  <List>
                    <li><strong>Btn_Configuracoes:</strong> Um botão padrão da Unity. Seu evento <code>On Click()</code> chama o método genérico <code>SettingsModalController.OpenModal</code>, passando o objeto <em>Modal_Settings_Overlay</em> como referência.</li>
                    <li><strong>Indicador_Porcentagem:</strong> Um contêiner puramente visual que abriga a imagem de fundo (<code>Img_Progresso_Fill</code>) e o texto (<code>Txt_Porcentagem</code>). Este é o texto que o <em>LevelManager</em> (via evento) mandará atualizar.</li>
                  </List>

                  <Subtitle>4. O Coração do Progresso: BarraProgresso_Container</Subtitle>
                  <Paragraph>
                    Este é o objeto mais complexo da Header, responsável por desenhar a trilha de níveis/checkpoints (Checkpoint_01 a 05).
                  </Paragraph>
                  <List>
                    <li><strong>ProgressoController (Script):</strong> O cérebro visual da barra. Ele expõe no Inspetor três grandes categorias de configuração:
                      <ul>
                        <li><em>Cores:</em> Define a Cor Completa (Verde), Cor Atual (Verde claro) e Cor Bloqueada (Cinza).</li>
                        <li><em>Sprites:</em> Guarda as referências das imagens usadas para o estado verificado (<code>verified_level</code>), nível atual (<code>current_level</code>) e as barrinhas conectoras entre eles.</li>
                        <li><em>Tamanhos:</em> Define a escala visual (Primeiro, Padrão e Destaque) dependendo se o jogador está naquele ponto ou se já passou.</li>
                      </ul>
                    </li>
                    <li><strong>Integração Orientada a Eventos:</strong> O objeto possui um <code>Game Event Listener Int</code>. Ele fica escutando o evento <code>OnLevelLoaded</code> (que o <em>LevelManager</em> dispara quando o nível é instanciado). Quando escuta o grito, ele captura o índice do nível passado e aciona automaticamente o método <code>ProgressoController.IniciarBarra</code> para desenhar a UI correspondente àquela fase.</li>
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
