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
  { src: '/assets/blenderRigging/01.png', alt: 'Modelo High Poly centralizado' },
  { src: '/assets/blenderRigging/02.png', alt: 'Plane posicionado no nariz' },
  { src: '/assets/blenderRigging/03.png', alt: 'Configuração do Shrinkwrap e Mirror' },
  { src: '/assets/blenderRigging/04.png', alt: 'Configuração do Shrinkwrap e Mirror' },
  { src: '/assets/blenderRigging/05.png', alt: 'Configuração do Shrinkwrap e Mirror' },
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
                    Guia de Rigging Básico (Criação de Ossos) no Blender
                  </SectionTitle>

                  <Subtitle>1. Adicionando o Primeiro Osso</Subtitle>
                  <Paragraph>
                    Tudo começa com a criação da estrutura base (Armature) que vai sustentar e mover o seu modelo 3D.
                  </Paragraph>
                  <List>
                    <li>Certifique-se de estar no <strong>Object Mode</strong>.</li>
                    <li>Vá no menu superior em <strong>Add &gt; Armature &gt; Single Bone</strong> (ou use o atalho <strong>Shift + A</strong> e escolha Armature).</li>
                    <li><em>Nota: Se você já tiver um esqueleto criado e quiser adicionar mais ossos soltos, basta entrar no Edit Mode desse esqueleto e apertar Shift + A para criar um novo osso.</em></li>
                  </List>

                  <Subtitle>2. Configurando a Visibilidade (In Front)</Subtitle>
                  <Paragraph>
                    Quando você cria um osso dentro de um modelo, ele geralmente fica escondido pela malha. Para resolver isso e trabalhar confortavelmente:
                  </Paragraph>
                  <List>
                    <li>Com o osso selecionado, vá nas propriedades de dados do objeto (ícone de um boneco correndo verde no painel lateral direito).</li>
                    <li>Abra a seção <strong>Viewport Display</strong>.</li>
                    <li>Ative a opção <strong>In Front</strong>. Agora o esqueleto será renderizado por cima da malha, visível o tempo todo.</li>
                    <li><em>Dica visual:</em> Para melhorar ainda mais, vá no canto superior direito da tela (Viewport Shading) e ative a transparência (X-Ray) ou mude para a visualização de Wireframe. Ficará apenas a malha e o osso visíveis.</li>
                  </List>

                  <Subtitle>3. Desenhando o Esqueleto (Extrusão)</Subtitle>
                  <Paragraph>
                    Com a visibilidade ajustada, você pode começar a desenhar o esqueleto acompanhando o formato do modelo.
                  </Paragraph>
                  <List>
                    <li>Entre no <strong>Edit Mode</strong> (Tab).</li>
                    <li>Selecione a junta (esfera superior) do osso.</li>
                    <li>Aperte a tecla <strong>E (Extrude)</strong> e arraste o mouse para criar um novo osso conectado. Vá repetindo o processo de acordo com a anatomia do modelo.</li>
                  </List>

                  <Subtitle>4. Edit Mode: Excluindo Ossos</Subtitle>
                  <Paragraph>
                    Errou a posição ou criou um osso a mais? É muito simples deletar sem estragar o resto da estrutura:
                  </Paragraph>
                  <List>
                    <li>No <strong>Edit Mode</strong>, selecione o osso (ou os ossos) que deseja remover.</li>
                    <li>Aperte a tecla <strong>X</strong> (ou Delete).</li>
                    <li>No menu que aparecer, escolha <strong>Bones</strong>. Isso apagará apenas os ossos selecionados, mantendo as outras conexões intactas.</li>
                  </List>

                  <Subtitle>5. Edit Mode: Parentesco e Conexões (Ctrl + P)</Subtitle>
                  <Paragraph>
                    Nem sempre você vai criar ossos usando o Extrude. Às vezes você cria um osso solto (Shift + A) e precisa ligá-lo a outro osso existente. Para isso, usamos o menu Make Parent. Selecione primeiro o osso "Filho", segure Shift, selecione o osso "Pai" e aperte <strong>Ctrl + P</strong>. Você terá duas opções principais:
                  </Paragraph>
                  <List>
                    <li>
                      <strong>Connected (Conectado):</strong> A "cabeça" do osso filho gruda fisicamente na "cauda" do osso pai. Se o pai se mover, o filho vai junto, como uma dobradiça. <br />
                      <em>Quando usar:</em> Para cadeias contínuas, como braços, pernas, dedos e espinha dorsal.
                    </li>
                    <li>
                      <strong>Keep Offset (Manter Distância):</strong> O osso filho passa a seguir os movimentos do osso pai, mas mantém a distância original entre eles. Eles não precisam se tocar. <br />
                      <em>Quando usar:</em> Para partes flutuantes ou que não estão grudadas no osso principal, como olhos, ombreiras flutuantes, acessórios ou ossos de controle avançados.
                    </li>
                  </List>

                  <Subtitle>6. Nomenclatura Estratégica para Simetria (.L)</Subtitle>
                  <Paragraph>
                    É crucial ter muita atenção a partes que são simétricas, como braços, pernas, olhos e orelhas (como as de um gato). O Blender precisa saber qual lado é qual.
                  </Paragraph>
                  <List>
                    <li>Crie os ossos apenas de um lado do modelo (geralmente o lado esquerdo).</li>
                    <li>Na hora de nomear esses ossos, obrigatoriamente coloque o sufixo <strong>.L</strong> (ou _L) no final do nome. Exemplo: <code>Perna.L</code>, <code>Orelha.L</code>.</li>
                  </List>

                  <Subtitle>7. Espelhamento Automático (Symmetrize)</Subtitle>
                  <Paragraph>
                    Com os nomes corretos definidos de um lado, você economiza metade do seu trabalho!
                  </Paragraph>
                  <List>
                    <li>Ainda no <strong>Edit Mode</strong>, selecione todas as partes (ossos) que possuem simetria e têm o sufixo .L.</li>
                    <li>Vá no menu superior e clique em <strong>Armature &gt; Symmetrize</strong>.</li>
                    <li>Pronto! O Blender criará perfeitamente o outro lado espelhado e já renomeará os novos ossos com o sufixo <strong>.R</strong> automaticamente.</li>
                  </List>

                  <Subtitle>8. 📏 Dica Hacker: Extrusão Reta (Trava de Eixo)</Subtitle>
                  <Paragraph>
                    Uma dica muito boa para colocar o osso retinho: ao dar o extrude, é muito comum o osso sair do alinhamento ideal. Para corrigir isso no momento da criação:
                  </Paragraph>
                  <List>
                    <li>Aperte a tecla <strong>E</strong> para iniciar a extrusão.</li>
                    <li>Imediatamente aperte a letra correspondente a uma orientação de Viewpoint (<strong>X</strong>, <strong>Y</strong> ou <strong>Z</strong>).</li>
                    <li>Dependendo da posição escolhida, o osso vai nascer e crescer perfeitamente alinhado àquele eixo.</li>
                  </List>

                </Container>
                <VoltarParaTopo></VoltarParaTopo>
              </CodeContainer>
            </MainContentLayout>
          </MainLayout>

          <MainLayout>
            <MainContentLayout>
              <CodeContainer>
                <Container>
                  <SectionTitle>
                    Guia de Skinning: Vinculando a Malha ao Esqueleto (Weighting)
                  </SectionTitle>

                  <Subtitle>1. Preparação em Object Mode</Subtitle>
                  <Paragraph>
                    Após finalizar a estrutura de ossos (Armature), precisamos "avisar" ao Blender que aquela
                    malha específica deve seguir os movimentos do esqueleto. Certifique-se de estar no
                    <strong> Object Mode</strong> antes de começar.
                  </Paragraph>

                  <Subtitle>2. Método 1: Parentesco com Pesos Automáticos (Atalho CTRL + P)</Subtitle>
                  <Paragraph>
                    Este é o método mais rápido e eficiente para começar, onde o Blender calcula
                    automaticamente qual osso deve influenciar cada parte da malha.
                  </Paragraph>
                  <List>
                    <li>Primeiro, selecione a <strong>Malha</strong> (o objeto 3D).</li>
                    <li>Segure Shift e selecione o <strong>Osso</strong> (Armature).</li>
                    <li>Aperte o atalho <strong>CTRL + P</strong>.</li>
                    <li>No menu que aparecer, escolha a opção <strong>With Automatic Weights</strong>.</li>
                    <li><em>Dica:</em> Agora, ao entrar no <strong>Pose Mode</strong> do esqueleto e mover um osso, a malha deverá segui-lo de forma orgânica.</li>
                  </List>

                  <Subtitle>3. Método 2: Modificador Armature (Vinculação Manual)</Subtitle>
                  <Paragraph>
                    Se você prefere um controle mais manual ou se o atalho não funcionar como esperado,
                    você pode adicionar a conexão diretamente pelas propriedades da malha.
                  </Paragraph>
                  <List>
                    <li>Selecione apenas a <strong>Malha</strong> do modelo.</li>
                    <li>Vá na aba de <strong>Modifiers</strong> (ícone da chave de fenda azul).</li>
                    <li>Clique em Add Modifier e escolha <strong>Armature</strong>.</li>
                    <li>No campo "Object", use o conta-gotas para selecionar o esqueleto (Armature) do seu projeto.</li>
                    <li>Isso criará o vínculo técnico, mas você ainda precisará definir os pesos (Vertex Groups) para que o movimento ocorra.</li>
                  </List>

                  <Subtitle>4. Verificação de Movimento</Subtitle>
                  <Paragraph>
                    Independentemente do método escolhido, o passo final é o teste de estresse:
                  </Paragraph>
                  <List>
                    <li>Selecione o esqueleto e mude para <strong>Pose Mode</strong> (Ctrl + Tab).</li>
                    <li>Rotacione os ossos (tecla R) para ver se a malha está dobrando corretamente.</li>
                    <li>Se houver partes "esticando" de forma estranha, o próximo passo será o <strong>Weight Paint</strong> para refinar essas influências.</li>
                  </List>

                </Container>
                <VoltarParaTopo></VoltarParaTopo>
              </CodeContainer>
            </MainContentLayout>
          </MainLayout>

          <MainLayout>
            <MainContentLayout>
              <CodeContainer>
                <Container>
                  <SectionTitle>
                    Guia de Weight Paint: Refinando a Deformação (Skinning)
                  </SectionTitle>

                  <Subtitle>1. Acessando o Modo de Pintura de Pesos</Subtitle>
                  <Paragraph>
                    Para editar a influência que cada osso tem sobre a malha, você precisa acessar o modo Weight Paint com a seleção correta.
                  </Paragraph>
                  <List>
                    <li>No <strong>Object Mode</strong>, primeiro selecione a <strong>Malha</strong> do seu personagem.</li>
                    <li>Em seguida, segure <strong>Shift</strong> e selecione o <strong>Esqueleto (Armature)</strong>.</li>
                    <li>Mude o modo no canto superior esquerdo (ou use Ctrl + Tab) para <strong>Weight Paint</strong>.</li>
                    <li><strong>Como selecionar um osso:</strong> Com a ferramenta de pincel ativa, segure a tecla <strong>Alt</strong> e clique no osso desejado. A malha mudará de cor para mostrar o peso que aquele osso específico exerce sobre ela.</li>
                  </List>

                  <Subtitle>2. 💎 Dica Master: Pintura Guiada pela Topologia (Wireframe)</Subtitle>
                  <Paragraph>
                    Pintar o peso diretamente sobre a malha lisa pode ser impreciso. Para ter controle absoluto sobre quais vértices você está influenciando, ative a visualização geométrica:
                  </Paragraph>
                  <List>
                    <li>Vá no menu de sobreposições (<strong>Viewport Overlays</strong>, ícone de dois círculos sobrepostos no canto superior direito).</li>
                    <li>Na seção <strong>Geometry</strong>, marque a caixa <strong>Wireframe</strong>.</li>
                    <li><strong>Por que isso é essencial?</strong> Agora você enxerga perfeitamente a topologia da sua malha (as arestas e loops que você modelou). O peso no Blender é sempre aplicado diretamente nos vértices. Passando o pincel <em>Draw</em> sobre essas interseções da malha, você tem um controle cirúrgico para adicionar (Add) ou remover (Subtract) influência em áreas específicas, evitando borrões indesejados.</li>
                  </List>

                  <Subtitle>3. Entendendo a Escala de Pesos (O Mapa de Calor)</Subtitle>
                  <Paragraph>
                    O Blender usa um sistema de cores (Mapa de Calor) para mostrar a força da influência de um osso, indo de 0 (nenhuma força) a 1 (força total). No painel da ferramenta (N), você ajusta o <strong>Weight</strong> (peso) e o pinta na malha:
                  </Paragraph>
                  <List>
                    <li>
                      🔴 <strong>Vermelho (Weight 1.0): Influência Total (100%)</strong><br />
                      A malha seguirá esse osso de forma rígida. <em>Onde usar:</em> Meio de ossos longos (centro do antebraço, canela, fêmur) ou partes sólidas como a cabeça, onde a malha não deve se deformar, apenas acompanhar o movimento.
                    </li>
                    <li>
                      🟡/🟢 <strong>Amarelo ao Verde (Weight 0.5 a 0.75): Influência Média (50% a 75%)</strong><br />
                      Áreas de transição flexíveis. <em>Onde usar:</em> Diretamente nas articulações (joelhos, cotovelos, ombros, nós dos dedos). Nessas áreas de dobra, a influência deve ser dividida (ex: 50% para o osso de cima, 50% para o osso de baixo) para criar uma dobra orgânica.
                    </li>
                    <li>
                      🔵 <strong>Azul Claro / Ciano (Weight 0.1 a 0.25): Influência Suave (10% a 25%)</strong><br />
                      Transições muito sutis e dissipação do movimento. <em>Onde usar:</em> Áreas ao redor do peitoral quando o braço se move, ou na base do pescoço, criando um movimento natural da pele sendo "puxada" levemente.
                    </li>
                    <li>
                      🟦 <strong>Azul Escuro (Weight 0.0): Nenhuma Influência (0%)</strong><br />
                      Aquele osso não move aquela parte da malha. Se o osso da mão está selecionado, o pé deve estar inteiramente azul escuro.
                    </li>
                  </List>

                  <Subtitle>4. Ferramentas Indispensáveis de Pintura</Subtitle>
                  <List>
                    <li><strong>Pincel Blur (Desfoque):</strong> Seu melhor amigo. Use o pincel Blur para suavizar as transições entre o vermelho e o azul. Transições bruscas (vermelho colado no azul escuro) quebram a malha quando o osso dobra. O Blur cria o gradiente verde/amarelo perfeito.</li>
                    <li><strong>Normalize All (Menu Weights):</strong> Garante que a soma das influências de todos os ossos sobre um único vértice nunca passe de 1.0, evitando bugs de deformação excessiva.</li>
                  </List>

                </Container>
                <VoltarParaTopo></VoltarParaTopo>

                <ImageSlider images={retopologyImages} />

              </CodeContainer>
            </MainContentLayout>
          </MainLayout>
        </>
      )}
    </>
  );
};

export default GA4NextJsIntegration;
