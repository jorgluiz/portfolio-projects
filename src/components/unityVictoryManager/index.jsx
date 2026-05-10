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
  { src: '/assets/unityVictoryManager/catFBX.png', alt: '???' },
  { src: '/assets/unityVictoryManager/animatorController.png', alt: '???' },
  { src: '/assets/unityVictoryManager/raizLevelBase.png', alt: '???' },
  { src: '/assets/unityVictoryManager/victoryManager.png', alt: '???' },
  { src: '/assets/unityVictoryManager/inspector.png', alt: '???' },
];

const tips = [
  { src: '/assets/unityVictoryManager/model.png', alt: '???' },
  { src: '/assets/unityVictoryManager/script.png', alt: '???' },
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
                    1. Tela de Vitória: Configuração, Animator e VictoryManager
                  </SectionTitle>

                  <Subtitle>Visão Geral</Subtitle>
                  <Paragraph>
                    A sequência de vitória é totalmente desacoplada do resto do jogo. O gato não fica escondido na cena consumindo memória; ele é instanciado, animado fisicamente com <code>LeanTween</code> e, através de Coroutines, aciona suas animações no <code>Animator</code>. Tudo isso é engatilhado por um simples "grito" no rádio (GameEvent). Abaixo, o passo a passo completo da implementação.
                  </Paragraph>

                  <Subtitle>Passo 1: Importação e Preparação do Prefab</Subtitle>
                  <Paragraph>
                    Como preparar o arquivo 3D bruto para ser usado pelo sistema.
                  </Paragraph>
                  <List>
                    <li><strong>Importação:</strong> O arquivo <code>.fbx</code> do gato é importado para a pasta <code>Models/win_state</code>.</li>
                    <li><strong>Renomeando a Animação:</strong> Selecione o <code>.fbx</code>, vá na aba <em>Animation</em> no Inspector, expanda a setinha (triângulo) e renomeie o clipe principal de animação para <code>Cat_Victory_Model</code>.</li>
                    <li><strong>Criação do Prefab (CRÍTICO):</strong> Após configurar o modelo bruto e anexar o Animator (que faremos a seguir), arraste esse modelo da cena de volta para a sua pasta de Prefabs, nomeando-o como <code>P_cat_victory</code>. É este Prefab que o script vai invocar mais tarde.</li>
                  </List>

                  <Subtitle>Passo 2: Configuração do Animator Controller</Subtitle>
                  <Paragraph>
                    A máquina de estados que dita "quando" o gato deve começar a se mexer.
                  </Paragraph>
                  <List>
                    <li><strong>Criação:</strong> Na mesma pasta do modelo, clique com o botão direito: <em>Create > Animation > Animator Controller</em>.</li>
                    <li><strong>O Estado de Espera (Idle_Wait):</strong> Dê um duplo clique no Controller. Clique com o botão direito no grid e vá em <em>Create State > Empty</em>. Nomeie como <code>Idle_Wait</code>. Este será o estado padrão (laranja). Ele impede que o gato comece a dançar enquanto ainda está subindo pela tela.</li>
                    <li><strong>Adicionando a Animação:</strong> Arraste o clipe <code>Cat_Victory_Model</code> (que renomeamos no passo 1) para dentro do Animator.</li>
                    <li><strong>A Transição:</strong> Clique com o botão direito em <code>Idle_Wait</code> > <em>Make Transition</em> e ligue até o <code>Cat_Victory_Model</code>.</li>
                    <li><strong>Ajuste Fino:</strong> Clique na setinha branca da transição. No Inspector, <strong>desmarque</strong> a opção <em>Has Exit Time</em> e mude o <em>Transition Duration (s)</em> para <strong>0</strong>. Isso garante que a dança comece instantaneamente quando for chamada.</li>
                    <li><strong>O Gatilho (Trigger):</strong> Na aba <em>Parameters</em> do Animator, clique no <code>+</code> e crie um <strong>Trigger</strong> com o nome exato de <code>StartMoves</code> (deixe a bolinha desmarcada). Volte na setinha de transição, vá em <em>Conditions</em>, clique no <code>+</code> e adicione o <code>StartMoves</code>.</li>
                  </List>

                  <Subtitle>Passo 3: A Lógica do VictoryManager (O Script)</Subtitle>
                  <Paragraph>
                    O script anexo atua como o diretor de cena. Ele orquestra os tempos perfeitos (Delays) usando Coroutines e LeanTween.
                  </Paragraph>
                  <List>
                    <li><strong>Surgimento (Instantiate & LeanTween):</strong> Calcula uma posição abaixo da tela (<code>spawnOffset</code>) e faz o gato subir usando uma curva <em>EaseOutBack</em>, que dá aquele efeito elástico (pulo) passando um pouco do limite (<code>overshootFactor</code>).</li>
                    <li><strong>Dança (DanceRoutine):</strong> Uma Coroutine que conta os segundos (<code>delayToStartDancing</code>). Quando o tempo bate, ela busca o Animator do gato e dispara <code>anim.SetTrigger("StartMoves")</code>.</li>
                    <li><strong>Saída e Limpeza (DisappearRoutine):</strong> Usa o <code>.setOnComplete</code> do LeanTween da subida para iniciar a contagem final. Após o tempo (<code>delayToStartDisappearing</code>), encolhe o gato para escala zero e executa <code>Destroy(cat)</code>, limpando a memória do celular para a próxima fase.</li>
                  </List>

                  <Subtitle>Passo 4: Implementação na Cena (Level_Base)</Subtitle>
                  <Paragraph>
                    A "cola" final usando a sua arquitetura desacoplada.
                  </Paragraph>
                  <List>
                    <li><strong>O Alvo:</strong> Na raiz do <code>Level_Base</code>, crie um <em>Create Empty</em> chamado <code>Spawn_Victory</code> e posicione-o exatamente onde a festa deve acontecer (ex: no centro da tela).</li>
                    <li><strong>O Gerente:</strong> Crie outro <em>Create Empty</em> chamado <code>Victory_Manager</code> e anexe o script <code>VictoryManager</code> nele.</li>
                    <li><strong>Preenchendo o Inspector:</strong>
                      <ul>
                        <li><em>Victory Cat Prefab:</em> Arraste o seu <code>P_cat_victory</code>.</li>
                        <li><em>Victory Spawn Point:</em> Arraste o <code>Spawn_Victory</code>.</li>
                      </ul>
                    </li>
                    <li><strong>A Mágica dos Eventos (O Rádio):</strong> Anexe o script <code>GameEventListener</code> ao mesmo <code>Victory_Manager</code>.
                      <ul>
                        <li><em>Event:</em> Arraste o arquivo <code>OnLevelCompleted</code>.</li>
                        <li><em>Response ():</em> Clique no <code>+</code>, arraste o próprio <code>Victory_Manager</code> para a caixinha, abra a lista suspensa e selecione <strong>VictoryManager > PlayVictoryEffects</strong>.</li>
                      </ul>
                    </li>
                  </List>

                  <ImageSlider images={retopologyImages} />

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
                    1. Lógica de Animação: Esqueleto vs. Transformação de Mundo
                  </SectionTitle>

                  <Subtitle>Visão Geral</Subtitle>
                  <Paragraph>
                    Para criar um "Game Feel" de alta qualidade, é necessário entender a distinção entre movimentar os ossos de um personagem e movimentar o objeto no espaço 3D. No projeto do gato de vitória, utilizamos dois métodos distintos que trabalham em harmonia.
                  </Paragraph>

                  <Subtitle>1. DanceRoutine (Animação de Deformação)</Subtitle>
                  <List>
                    <li><strong>O que é:</strong> Utiliza o componente <code>Animator</code> para manipular a hierarquia de ossos (rigging) do modelo.</li>
                    <li><strong>Função:</strong> Executa movimentos internos do personagem, como dançar, acenar ou respirar. Ela não move o personagem "pelo cenário", apenas altera a pose da malha.</li>
                  </List>

                  <Subtitle>2. DisappearRoutine (Animação de Mundo/Física)</Subtitle>
                  <List>
                    <li><strong>O que é:</strong> Manipula as propriedades de <em>Transform</em> (Position, Rotation, Scale) via código ou interpolação (Tweening).</li>
                    <li><strong>Função:</strong> Controla o deslocamento global, como a subida inicial, a rotação de saída, a profundidade e o encolhimento para desaparecer.</li>
                    <li><strong>Importância:</strong> Separar essas lógicas permite que o personagem dance (Animator) enquanto simultaneamente voa ou encolhe (Código), sem que uma animação cancele a outra.</li>
                  </List>
                </Container>

                <br /><br />

                <Container>
                  <SectionTitle>
                    2. Estabilidade de Hardware: Gerenciamento de Memória e APIs Gráficas
                  </SectionTitle>

                  <Subtitle>O Desafio do OOM (Out of Memory)</Subtitle>
                  <Paragraph>
                    Erros de <em>"Could not allocate memory"</em> são comuns em dispositivos Android de entrada. Isso acontece quando o sistema operacional esgota a RAM disponível para a GPU ou CPU.
                  </Paragraph>

                  <Subtitle>A Solução de Renderização</Subtitle>
                  <Paragraph>
                    A escolha da API Gráfica influencia diretamente como a memória é alocada:
                  </Paragraph>
                  <List>
                    <li><strong>Vulkan (Prioridade 1):</strong> Uma API moderna e de baixo nível. Ela reduz a carga sobre a CPU e permite um gerenciamento de memória muito mais eficiente e direto, evitando picos de consumo que causam o fechamento do aplicativo.</li>
                    <li><strong>OpenGLES3 (Fallback 2):</strong> Mantida como segunda opção para garantir compatibilidade com dispositivos que não suportam Vulkan, mas aproveitando a estabilidade da primeira opção na maioria dos aparelhos modernos.</li>
                  </List>
                </Container>

                <br /><br />

                <Container>
                  <SectionTitle>
                    3. Fidelidade Visual: Blendshapes e a Quebra de Normais
                  </SectionTitle>

                  <Subtitle>O Problema: Sombreamento Inconsistente</Subtitle>
                  <Paragraph>
                    Ao usar <strong>Blendshapes</strong> (conhecidos como <em>Shape Keys</em> no Blender) para animações faciais, como o piscar de olhos, a Unity pode tentar recalcular as <strong>Normais</strong> da malha inteira a cada frame. Isso resulta em artefatos de luz (sombras estranhas) em partes estáticas do modelo, como as solas dos pés ou superfícies planas.
                  </Paragraph>

                  <Subtitle>Resolução Técnica no Importador</Subtitle>
                  <Paragraph>
                    Para fixar o sombreamento e impedir que a animação dos olhos afete a luz do restante do corpo, siga este fluxo no Inspector do arquivo 3D:
                  </Paragraph>
                  <List>
                    <li><strong>Aba Model:</strong> Localize a seção de importação da malha.</li>
                    <li><strong>Blend Shape Normals:</strong> Altere de <code>Calculate</code> para <code>Import</code> (ou <code>None</code>). Isso força a Unity a respeitar as normais originais exportadas do Blender, impedindo cálculos dinâmicos errôneos.</li>
                    <li><strong>Tangents:</strong> Defina como <code>None</code> ou <code>Import</code> para manter a consistência dos reflexos metálicos e materiais.</li>
                    <li><strong>Resultado:</strong> A animação facial ocorre perfeitamente enquanto o sombreamento do corpo permanece sólido e sem cintilações de luz.</li>
                  </List>

                  <ImageSlider images={tips} />

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
