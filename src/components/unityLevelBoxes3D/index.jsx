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
                    10. A Ponte Matemática: Interface 2D e Mundo 3D (AlignToUI)
                  </SectionTitle>

                  <Subtitle>Visão Geral</Subtitle>
                  <Paragraph>
                    O script <code>AlignToUI</code> é o elo que permite que o seu jogo tenha elementos 3D físicos (como as Caixas e os Extra Slots) perfeitamente encaixados dentro de painéis de UI 2D. Ele usa projeção de câmera para "puxar" um objeto do mundo 3D e colá-lo na tela, adaptando-se automaticamente a qualquer resolução de celular. Além disso, por usar a tag <code>[ExecuteAlways]</code>, ele funciona até com o jogo parado no Editor, facilitando imensamente o Level Design.
                  </Paragraph>

                  <Subtitle>1. Referências e Ajustes Vitais</Subtitle>
                  <Paragraph>
                    As variáveis que definem quem segue quem e a que distância.
                  </Paragraph>
                  <List>
                    <li><strong>uiTarget (RectTransform):</strong> O "alvo" invisível na UI (ex: os Guides do <em>Level_Boxes_UI</em>). É o ponto exato da tela que o objeto 3D vai perseguir.</li>
                    <li><strong>worldCamera:</strong> A câmera principal do jogo, usada para fazer o cálculo complexo de perspectiva geométrica.</li>
                    <li><strong>zDistance:</strong> O "pulo do gato" para Canvas em modo Overlay. Como a UI não tem profundidade, essa variável dita o quão "perto" do vidro da tela o objeto 3D vai flutuar. Valores como <code>0.89</code> ou <code>0.9</code> garantem que ele fique na frente do nível, mas não corte a câmera.</li>
                    <li><strong>continuousUpdate:</strong> Uma trava de otimização excelente. Se ativado, ele recalcula a posição todo frame (ideal para menus que abrem e fecham). Se desativado, ele só move se o alvo da UI sair do lugar, economizando CPU no mobile.</li>
                  </List>

                  <Subtitle>2. A Atualização e a Preparação para o Pooling (LateUpdate)</Subtitle>
                  <Paragraph>
                    Toda a lógica ocorre dentro do <code>LateUpdate()</code>. Isso é de propósito: garante que a Unity termine de desenhar a UI e aplicar âncoras/redimensionamentos antes de o objeto 3D tentar segui-la.
                  </Paragraph>
                  <List>
                    <li><strong>A Trava de Segurança do Object Pooling:</strong> A adição do bloco <code>if (parentCanvas == null) parentCanvas = uiTarget.GetComponentInParent&lt;Canvas&gt;();</code> é vital. Como as caixas agora nascem da "Piscina", elas começam o jogo sem alvo e sem Canvas. Quando o <em>UI_Distributor</em> injeta o alvo nelas, esse código acorda, busca o Canvas do novo alvo e permite que a caixa saia voando para a posição correta sem gerar erros de <em>NullReference</em>.</li>
                  </List>

                  <Subtitle>3. A Matemática de Projeção Bidirecional</Subtitle>
                  <Paragraph>
                    O script não apenas copia posições, ele traduz dimensões diferentes através de dois métodos:
                  </Paragraph>
                  <List>
                    <li><strong>Passo 1 (GetScreenPosition):</strong> Ele usa <code>RectTransformUtility.WorldToScreenPoint</code>. Ele olha para o alvo 2D no Canvas e descobre: <em>"Em qual pixel exato da tela do celular (X, Y) esse alvo está agora?"</em>. Ele é inteligente o suficiente para se adaptar se o Canvas for Overlay ou se tiver uma Câmera atrelada.</li>
                    <li><strong>Passo 2 (ScreenToWorld):</strong> Ele pega esse pixel (X, Y) e joga na função <code>worldCamera.ScreenToWorldPoint</code>, injetando o <code>zDistance</code>. A câmera responde: <em>"Para o objeto 3D aparecer nesse pixel, ele precisa ir para esta coordenada (X, Y, Z) lá no mundo 3D"</em>.</li>
                    <li><strong>O Resultado:</strong> O <code>transform.position</code> do objeto 3D é atualizado para essa nova coordenada geométrica, com o <code>worldOffset</code> somado caso precise de um micro-ajuste manual.</li>
                  </List>

                  <Subtitle>4. Ferramentas de Desenvolvedor (Gizmos)</Subtitle>
                  <Paragraph>
                    Facilitadores visuais dentro do motor da Unity.
                  </Paragraph>
                  <List>
                    <li><strong>OnDrawGizmosSelected:</strong> Quando você clica em uma Caixa ou Extra Slot no Editor, a Unity desenha uma linha amarela ligando o objeto 3D diretamente ao seu alvo na UI (com uma bolinha na ponta). Isso permite que você faça debug visual instantâneo para saber qual caixa está conectada a qual buraco do Canvas, sem precisar ler código ou procurar referências.</li>
                  </List>

                </Container>
                <VoltarParaTopo></VoltarParaTopo>
              </CodeContainer>
            </MainContentLayout>
          </MainLayout>
          <MainLayout>
            {/* <SideBarLayout /> */}
            {/* <HeaderLayout /> */}
            <MainContentLayout>
              <CodeContainer>
                <Container>
                  <SectionTitle>
                    BoxController: A Inteligência da Caixa e Gestão de Estados
                  </SectionTitle>

                  <Subtitle>Visão Geral</Subtitle>
                  <Paragraph>
                    O <code>BoxController</code> é muito mais que um recipiente; ele é uma máquina de estados autônoma. Ele gerencia as próprias animações (Game Feel), consome Power-Ups automaticamente, dita o fluxo de saída da tela, invoca caixas surpresa e, por fim, limpa a si mesmo para o sistema de Object Pooling. Abaixo, a anatomia completa do script:
                  </Paragraph>

                  <Subtitle>1. Eventos de Rádio e Referências Visuais</Subtitle>
                  <Paragraph>
                    Como a caixa se comunica e se monta na cena.
                  </Paragraph>
                  <List>
                    <li><strong>Eventos de Rádio:</strong> A caixa usa o <code>GameEvent</code> para gritar quando um parafuso entra (<code>onScrewEnteredBoxEvent</code>) e quando ela é finalizada (<code>onBoxCompletedEvent</code>). Usa também o evento espacial <code>onStarFlyRequestedEvent</code> para enviar as coordenadas exatas de onde a UI deve soltar a estrelinha.</li>
                    <li><strong>Sockets:</strong> Uma lista de <code>Transforms</code> (buraquinhos) que a caixa varre automaticamente no <code>Awake</code> procurando filhos com o nome "SocketInput", caso o designer esqueça de arrastar no Inspetor.</li>
                    <li><strong>Guias de Spawn (starSpawnGuides):</strong> Objetos vazios invisíveis posicionados acima da caixa que servem apenas como ponto de origem para o VFX da estrelinha.</li>
                    <li><strong>A Tampa (lidObject):</strong> Referência à tampa da caixa, com um ajuste manual fino (<code>lidOffset</code>) para garantir que ela feche perfeitamente sobre a malha 3D.</li>
                  </List>

                  <Subtitle>2. A Gestão de Estados (As Travas de Segurança)</Subtitle>
                  <Paragraph>
                    O script utiliza booleanos vitais para impedir bugs catastróficos durante o gameplay rápido.
                  </Paragraph>
                  <List>
                    <li><strong>isReady:</strong> Diz se a caixa já terminou de aparecer na tela e está pronta para receber cliques/parafusos.</li>
                    <li><strong>isClosing:</strong> Assim que a caixa enche, isso vira <code>true</code>. Impede imediatamente que a função <code>HasSpace()</code> retorne verdadeiro, bloqueando qualquer parafuso no ar de tentar entrar numa caixa que já está indo embora.</li>
                    <li><strong>isFinished:</strong> Se a caixa terminar sua animação de saída (ou for pulada por algum cheat/skip), ela marca <code>isFinished</code>. O método <code>IsComplete()</code> lê isso e retorna <code>true</code> imediatamente, evitando que o <em>LevelManager</em> fique travado esperando a caixa encher.</li>
                  </List>

                  <Subtitle>3. Game Feel: Animações de Esmagar (Squash & Stretch)</Subtitle>
                  <Paragraph>
                    A caixa possui duas animações de impacto feitas via <code>LeanTween</code> para dar peso tátil ao jogo.
                  </Paragraph>
                  <List>
                    <li><strong>Impacto Normal (Entrada de Parafuso):</strong> Quando um parafuso entra, a caixa amassa levemente para baixo (<code>squashHeight</code>) e estica para os lados (<code>squashWidth</code>) rapidamente (0.25s).</li>
                    <li><strong>Impacto Final (Fechamento):</strong> No último parafuso, os valores mudam. A deformação é mais forte (<code>finalSquashHeight</code>), a tampa fecha usando uma curva elástica (<em>EaseOutBounce</em>) e o celular aciona o <code>VibrateHeavy()</code> no Hardware do jogador.</li>
                  </List>

                  <Subtitle>4. Sequência de Saída e Sucessão (AnimateBoxExit)</Subtitle>
                  <Paragraph>
                    O clímax da caixa. Quando ela enche, o método <code>CompleteBoxSequence()</code> orquestra a saída.
                  </Paragraph>
                  <List>
                    <li><strong>Pausa Dramática:</strong> Após fechar a tampa, ela respeita o <code>waitTimeBeforeExit</code> (0.4s) antes de decolar, permitindo que o jogador veja a caixa completa.</li>
                    <li><strong>Desligamento do Ímã (AlignToUI):</strong> Antes de subir (<code>exitDistanceY</code>), o script <em>desliga</em> o <code>AlignToUI</code>. Sem isso, o LeanTween tentaria empurrar a caixa para cima enquanto a UI puxaria para baixo, gerando um tremor visual na tela.</li>
                    <li><strong>A Herança (surpriseColorToSpawn):</strong> Ao sumir, ela verifica se carregava uma "semente" de surpresa. Se sim, ela aciona o <code>SurpriseBoxSpawner</code> e passa o seu próprio guia de UI. Isso garante que a nova caixa nasça fisicamente do mesmo buraco que acabou de ser desocupado.</li>
                  </List>

                  <Subtitle>5. O Sistema de Créditos e o "Parafuso Fantasma"</Subtitle>
                  <Paragraph>
                    A solução inteligente para o Power-Up do Martelo lidar com caixas que ainda não apareceram.
                  </Paragraph>
                  <List>
                    <li>No <code>OnEnable()</code>, a caixa pergunta ao Gerente de Créditos se há "parafusos virtuais" da sua cor armazenados.</li>
                    <li>Se houver, ela consome esses créditos e preenche seus <code>reservedSlots</code> instantaneamente.</li>
                    <li><strong>O Prefab Visual:</strong> Para o jogador ver esse crédito, a caixa instancia o <code>screwPrefab</code> direto no buraco. Para não pesar no celular, o script arranca imediatamente a lógica (<code>Destroy(RemovablePart)</code>) e a colisão (<code>Destroy(Collider)</code>) desse clone, deixando apenas a casca 3D estática (nomeada de "GhostScrew") como feedback visual.</li>
                  </List>

                  <Subtitle>6. Object Pooling: Reciclagem Limpa (ResetBoxState)</Subtitle>
                  <Paragraph>
                    Como o projeto recicla as caixas, o <code>Destroy()</code> nunca é chamado no objeto pai.
                  </Paragraph>
                  <List>
                    <li>Quando a caixa volta para a "Piscina", este método garante que ela não volte "suja".</li>
                    <li>Ele destrói cirurgicamente os parafusos fantasmas que ficaram nos sockets, cancela as animações de malha do LeanTween, repõe a escala original (<code>initialScale</code>), destranca os booleanos (<code>isFinished = false</code>) e reabre a tampa (<code>lidObject</code>), deixando a caixa 100% virgem para o próximo nível.</li>
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
