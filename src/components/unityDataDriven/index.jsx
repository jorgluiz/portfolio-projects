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
  { src: '/assets/unityScriptableObjects/levelData.png', alt: '???' },
  { src: '/assets/unityScriptableObjects/gameEventVector3.png', alt: '???' },
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
                    1. Sistema de Dados (Data-Driven) e Eventos
                  </SectionTitle>

                  <Subtitle>Visão Geral</Subtitle>
                  <Paragraph>
                    Os <code>ScriptableObjects</code> nesta arquitetura dividem-se em duas grandes famílias: os <strong>Containers de Dados</strong> (que guardam as configurações de cada fase) e os <strong>Canais de Eventos</strong> (que fazem os scripts conversarem entre si sem se conhecerem diretamente). Isso garante que o jogo seja leve, fácil de expandir e imune a bugs de dependência quebrada.
                  </Paragraph>

                  <Subtitle>O que é um ScriptableObject? (O Conceito)</Subtitle>
                  <Paragraph>
                    Em Unity, um <strong>ScriptableObject</strong> é um contêiner de dados especial que vive permanentemente nos arquivos do seu projeto (na pasta <em>Assets</em>, como se fosse um arquivo de áudio ou textura), e não atrelado a um <code>GameObject</code> dentro de uma Scene.
                  </Paragraph>
                  <List>
                    <li><strong>Economia Absoluta de Memória:</strong> Ao contrário de um <code>MonoBehaviour</code> (onde a Unity cria uma cópia das variáveis na memória para cada objeto na tela), o ScriptableObject é lido por referência. Se 100 sistemas precisarem ler o mesmo arquivo, ele só ocupa espaço na RAM uma única vez.</li>
                    <li><strong>Independência de Cena:</strong> Você pode alterar o balanceamento, os dados da fase ou ajustar configurações do jogo inteiro sem nunca precisar abrir a cena <code>level_base</code> ou mexer em Prefabs.</li>
                    <li><strong>Sobrevivência de Dados:</strong> O que você escreve nele fica salvo no arquivo do projeto. Ele não perde os dados quando você aperta o "Play" ou sai do modo de teste no Editor.</li>
                  </List>

                  <Subtitle>1. LevelData (O "Cardápio" da Fase)</Subtitle>
                  <Paragraph>
                    Este script é um container de dados passivo. Ele diz à cena <code>level_base</code> como ela deve se comportar e o que ela precisa carregar na memória.
                  </Paragraph>
                  <List>
                    <li><strong>O que ele faz:</strong> Armazena o nome da fase, o prefab 3D a ser carregado (ex: o Gato fatiado), o índice da fase para a barra de progresso (<code>levelIndexForProgressBar</code>), os índices de navegação (para onde ir ao vencer) e o mais importante: a <code>List&lt;BoxRequirement&gt;</code>. Essa lista é o cardápio exato de quais caixas a Piscina de Objetos deve separar para esta fase, em qual ordem, e se alguma delas vai "dar a luz" a uma caixa surpresa ao ser finalizada.</li>
                    <li><strong>Quando usar:</strong> Sempre que você for criar uma <strong>Fase Nova</strong>. Você não precisa criar uma nova Scene na Unity. Basta ir na pasta do projeto, clicar com o botão direito (Create > Game > Level Data), preencher as cores das caixas que o modelo 3D daquela fase exige e colocar esse arquivo na lista do <code>GameManager</code>. Fim! A fase está criada e pronta para rodar.</li>
                  </List>

                  <Subtitle>2. GameEvent (O Grito Sem Carga)</Subtitle>
                  <Paragraph>
                    Este script cria um "canal de rádio" (Padrão Observer) dentro do projeto da Unity.
                  </Paragraph>
                  <List>
                    <li><strong>O que ele faz:</strong> Ele atua como um intermediário cego. Quem tem a informação chama a função <code>Raise()</code> (dá o grito). Quem precisa da informação usa <code>RegisterListener()</code> para ficar ouvindo. A grande mágica é que quem grita não faz ideia de quem está ouvindo. Se você deletar o sistema de áudio, o jogo não quebra, pois o emissor apenas gritou no vazio.</li>
                    <li><strong>Quando usar:</strong> Para ações binárias ou gatilhos globais onde apenas o "fato" importa, sem necessidade de detalhes extras. Exemplo: <em>OnLevelCompleted</em>, <em>OnScrewClicked</em>. Você cria um arquivo desses na pasta (Create > Sistema > Evento de Jogo), joga no slot do LevelManager, e agora o sistema de UI, Áudio e VFX podem todos escutar a mesma ordem sem se emaranharem no código um do outro.</li>
                  </List>

                  <Subtitle>3. GameEventInt (O Grito Com Carga Numérica)</Subtitle>
                  <Paragraph>
                    É o irmão mais velho do GameEvent genérico. A diferença é que ele atua como um canal de rádio que entrega um "pacote de dados" (payload) junto com o aviso.
                  </Paragraph>
                  <List>
                    <li><strong>O que ele faz:</strong> Possui o mesmo sistema de registrar ouvintes e dar o grito, mas sua função <code>Raise(int value)</code> exige que um número inteiro seja passado adiante. Quem estiver escutando vai receber esse número e poderá usá-lo na própria lógica.</li>
                    <li><strong>Quando usar:</strong> Sempre que uma ação precisar informar não apenas que aconteceu, mas <em>o valor</em> do que aconteceu. O exemplo perfeito do seu código é o <em>OnPercentageChangedEvent (Game Event Int)</em>. O LevelManager grita "Atualize a UI!" e passa o número <code>50</code> junto. A UI escuta o grito, abre o pacote, vê o <code>50</code> e atualiza a barra de progresso. Você usaria isso também se precisasse avisar quantas moedas o jogador ganhou.</li>
                  </List>

                  <Subtitle>4. GameEventVector3 (O Grito Espacial)</Subtitle>
                  <Paragraph>
                    A variante do sistema de eventos focada em posições e direções no espaço 3D.
                  </Paragraph>
                  <List>
                    <li><strong>O que ele faz:</strong> Funciona exatamente como os anteriores, mas sua função <code>Raise(Vector3 value)</code> exige a passagem de uma coordenada tridimensional (X, Y, Z).</li>
                    <li><strong>Quando usar:</strong> Sempre que um sistema precisar avisar aos outros não apenas que algo aconteceu, mas <em>onde</em> aconteceu. No projeto, o exemplo clássico é o <em>OnStarFlyRequestedEvent</em>. Quando uma caixa é completada, o <code>LevelManager</code> grita "solte a estrela" e anexa as coordenadas daquela caixa. O <code>UI_Manager</code> escuta o evento, pega esse <code>Vector3</code> e faz a estrelinha nascer voando exatamente do ponto correto na tela.</li>
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
