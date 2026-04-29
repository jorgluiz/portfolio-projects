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
  { src: '/assets/BlenderTexturePaint/01.png', alt: '???' },
  { src: '/assets/BlenderTexturePaint/02.png', alt: '???' },
  { src: '/assets/BlenderTexturePaint/03.png', alt: '???' },
  { src: '/assets/BlenderTexturePaint/04.png', alt: '???' },
  { src: '/assets/BlenderTexturePaint/05.png', alt: '???' },
  { src: '/assets/BlenderTexturePaint/06.png', alt: '???' },
  { src: '/assets/BlenderTexturePaint/07.png', alt: '???' },
  { src: '/assets/BlenderTexturePaint/08.png', alt: '???' },
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
                    Guia de Pintura de Texturas (Texture Paint) no Blender
                  </SectionTitle>

                  <Subtitle>1. Preparação: Imagem Base e Material</Subtitle>
                  <Paragraph>
                    Antes de começar a pintar, o modelo precisa de um "espaço" para armazenar as cores e um material que exiba essa imagem.
                  </Paragraph>
                  <List>
                    <li>No painel de <strong>Shading</strong>, crie uma nova imagem clicando em "New".</li>
                    <li>Defina a resolução para <strong>2048px</strong> (ou superior) para garantir uma boa densidade de pixels.</li>
                    <li>Crie um novo material para o modelo e conecte o nó da imagem ao <strong>Base Color</strong> do seu Shader.</li>
                    <li>Atribua este material ao objeto em Object Mode.</li>
                  </List>

                  <Subtitle>2. Configurações do Pincel (Draw Tool)</Subtitle>
                  <Paragraph>
                    Mude para o modo <strong>Texture Paint</strong> no menu superior. No painel lateral (tecla N ou aba Tool), você encontrará as ferramentas de controle:
                  </Paragraph>
                  <List>
                    <li><strong>Blend Mode:</strong> Geralmente mantido em <strong>Mix</strong> para sobreposição de cores.</li>
                    <li><strong>Radius:</strong> Atalho <strong>F</strong> para ajustar o tamanho do pincel conforme a necessidade.</li>
                    <li><strong>Strength:</strong> Atalho <strong>Shift + F</strong> para controlar a intensidade/opacidade da pintura.</li>
                    <li><strong>Color Picker/Palette:</strong> Use as duas cores principais para alternar rapidamente e a paleta para salvar cores recorrentes do projeto.</li>
                  </List>

                  <Subtitle>3. Pintura com Stencil (Texturização Realista)</Subtitle>
                  <Paragraph>
                    Esta técnica permite "carimbar" uma foto ou textura diretamente no modelo 3D.
                  </Paragraph>
                  <List>
                    <li>Em <strong>Texture Properties</strong>, carregue uma imagem externa.</li>
                    <li>No menu Tool, em Texture, mude o Mapping para <strong>Stencil</strong>.</li>
                    <li><strong>Controles do Stencil:</strong>
                      <ul>
                        <li>Botão direito pressionado: Move a imagem.</li>
                        <li>Ctrl + Botão direito: Rotaciona.</li>
                        <li>Shift + Botão direito: Zoom.</li>
                      </ul>
                    </li>
                    <li><strong>Importante:</strong> Pinte com a cor <strong>branca</strong> e brilho máximo para que as cores originais da imagem apareçam sem distorção.</li>
                  </List>

                  <Subtitle>4. Refinamento e Efeitos (Soft & Smear)</Subtitle>
                  <Paragraph>
                    Para finalizar a pintura e evitar bordas serrilhadas ou transições duras, usamos pincéis de ajuste:
                  </Paragraph>
                  <List>
                    <li><strong>Soften:</strong> Use este pincel sobre as linhas e bordas da sua pintura para suavizar serrilhados e criar gradientes naturais.</li>
                    <li><strong>Smear (Borrar):</strong> Este pincel funciona como se você estivesse passando o dedo sobre tinta fresca. Ele "arrasta" os pixels, sendo ideal para misturar cores vizinhas ou criar efeitos de fluxo.</li>
                  </List>

                  <Subtitle>5. O que é a Texture Mask?</Subtitle>
                  <Paragraph>
                    Diferente da textura comum, a <strong>Texture Mask</strong> define a forma e transparência do seu pincel, sendo perfeita para criar desgaste de metal, ferrugem ou texturas de pele porosa.
                  </Paragraph>

                  <Subtitle>6. Configurações Finais de Stroke e Simetria</Subtitle>
                  <List>
                    <li><strong>Stroke:</strong> Geralmente mantido em 10% (Spacing) para um traço contínuo e suave.</li>
                    <li><strong>Falloff:</strong> Definir como <strong>Custom (Full)</strong> garante que a pressão do pincel seja consistente.</li>
                    <li>
                      <strong>Symmetry:</strong> Ative o <strong>Mirror X</strong> para economizar tempo em objetos simétricos.
                      <br />
                      <em>⚠️ <strong>Nota:</strong> A simetria só funciona na tela <strong>3D View</strong>. Ela não tem efeito se você pintar nas telas de UV Editing ou Image Editor.</em>
                    </li>
                  </List>

                  <Subtitle>7. ⚡ Dica Hacker 3: Máscara de Pintura Seletiva (Paint Mask)</Subtitle>
                  <Paragraph>
                    Quer pintar apenas uma área específica (como os olhos ou uma logomarca) sem risco de borrar o resto do modelo? Use a Paint Mask:
                  </Paragraph>
                  <List>
                    <li>Entre no <strong>Edit Mode</strong> (Tab) e selecione apenas as faces que você deseja pintar.</li>
                    <li>Volte para o modo <strong>Texture Paint</strong>.</li>
                    <li>No menu superior (ao lado do seletor de modo), clique no ícone de <strong>Paint Mask</strong> (quadradinho com faces selecionadas).</li>
                    <li>Agora, o Blender isolará sua pintura: o pincel só terá efeito nas faces que você selecionou no Edit Mode. Todo o restante do modelo ficará protegido!</li>
                  </List>

                  <Subtitle>8. 🧠 Dica Hacker 4: O Pincel Parou de Pintar? (Clear Texture)</Subtitle>
                  <Paragraph>
                    Um erro muito comum após usar a técnica de Stencil (ou qualquer imagem) é o pincel parar de pintar cores sólidas normais. Isso acontece porque a imagem continua vinculada ao pincel. Para resolver:
                  </Paragraph>
                  <List>
                    <li>No painel lateral (Tool) ou nas propriedades de ferramenta, vá até a seção <strong>Texture</strong>.</li>
                    <li>Se houver uma imagem carregada ali, clique no ícone de <strong>X</strong> para desvincular/remover a imagem do pincel.</li>
                    <li>Pronto! Seu pincel voltará a aplicar as cores sólidas definidas no Color Picker normalmente.</li>
                  </List>

                  <Subtitle>9. 🚨 OBSERVAÇÃO IMPORTANTÍSSIMA: Salvando a Textura</Subtitle>
                  <Paragraph>
                    O Blender <strong>não</strong> salva as alterações da sua textura automaticamente quando você salva o projeto (.blend). Se você fechar o programa sem salvar a imagem, perderá toda a sua pintura! Para evitar isso:
                  </Paragraph>
                  <List>
                    <li>Quando terminar de pintar, mude para a tela <strong>UV Editing</strong>, <strong>Image Editor</strong>, ou use a janela de imagem no próprio workspace do <strong>Texture Paint</strong>.</li>
                    <li>Procure o menu <strong>Image</strong> na parte superior dessa janela.</li>
                    <li>Clique em <strong>Save</strong> ou <strong>Save As...</strong> para guardar o arquivo da textura no seu computador.</li>
                    <li><em>Dica visual:</em> Se houver um asterisco (*) ao lado da palavra "Image" no menu, significa que você tem alterações não salvas.</li>
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
