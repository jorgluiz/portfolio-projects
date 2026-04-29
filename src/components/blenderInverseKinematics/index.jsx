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
  { src: '/assets/blenderInverseKinematics/01.png', alt: '???' },
  { src: '/assets/blenderInverseKinematics/02.png', alt: '???' },
  { src: '/assets/blenderInverseKinematics/03.png', alt: '???' },
  { src: '/assets/blenderInverseKinematics/04.png', alt: '???' },
  { src: '/assets/blenderInverseKinematics/05.png', alt: '???' },
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
                    Guia de Rigging Avançado: Controladores e IK (Inverse Kinematics)
                  </SectionTitle>

                  <Subtitle>1. A Lógica dos Controladores e Nomenclatura</Subtitle>
                  <Paragraph>
                    Controladores são ossos especiais que o animador vai manipular. Eles não deformam a malha diretamente, mas enviam comandos para os ossos que deformam.
                  </Paragraph>
                  <List>
                    <li><strong>Prefixo Estratégico:</strong> Sempre use um prefixo claro, como <strong>Cont_</strong> (ex: <code>Cont_Knee.L</code>), para separá-los visualmente na lista de ossos.</li>
                    <li><strong>Criação:</strong> Você pode criá-los do zero (Shift + A) ou usar o <strong>Extrude (E)</strong> a partir de uma junta existente.</li>
                    <li><strong>Independência:</strong> Controladores que servem como "Alvos" (Targets) geralmente ficam "afastados" ou flutuantes. Se você usou o Extrude para criá-los, lembre-se de desconectá-los fisicamente do osso original para que tenham liberdade de movimento.</li>
                  </List>

                  <Subtitle>2. Configurando a Perna com IK (O Motor do Movimento)</Subtitle>
                  <Paragraph>
                    Em vez de rotacionar a coxa e depois a canela (Forward Kinematics), o IK permite que você mova o pé, e o joelho dobre automaticamente. Para isso, precisamos configurar a <strong>Bone Constraint</strong> no modo <strong>Pose Mode</strong>.
                  </Paragraph>
                  <List>
                    <li>Selecione o osso da canela (no nosso exemplo, <strong>Knee.L</strong>).</li>
                    <li>Vá na aba <strong>Bone Constraints</strong> (ícone do osso com uma engrenagem azul) e adicione <strong>Inverse Kinematics (IK)</strong>.</li>
                    <li><strong>Target:</strong> Selecione a <code>Armature</code> e depois o osso controlador principal do pé: <code>Cont_Knee.L</code>.</li>
                    <li><strong>Pole Target:</strong> Selecione a <code>Armature</code> e o osso controlador flutuante do joelho: <code>Cont_Upper_Knee.L</code>.</li>
                    <li><strong>Chain Length:</strong> Defina como <strong>2</strong> (para afetar a canela e a coxa).</li>
                  </List>

                  <Subtitle>3. O Segredo do Pé: Copy Location e Parentesco</Subtitle>
                  <Paragraph>
                    Para que o pé (<strong>FootBase.L</strong>) rotacione junto com o seu controlador, mas não se solte fisicamente da perna, usamos uma combinação inteligente de restrições:
                  </Paragraph>
                  <List>
                    <li>
                      <strong>Passo 1 (Parentesco):</strong> No <em>Edit Mode</em>, vá nas propriedades do osso <code>FootBase.L</code>, seção <strong>Relations</strong>. Defina o Parent como <code>Cont_Knee.L</code> e certifique-se de que a opção <strong>Connected</strong> esteja DESMARCADA (Keep Offset).
                    </li>
                    <li>
                      <strong>Passo 2 (Restrição):</strong> No <em>Pose Mode</em>, adicione uma constraint de <strong>Copy Location</strong> ao osso <code>FootBase.L</code>.
                    </li>
                    <li>
                      <strong>Passo 3 (O Truque do Head/Tail):</strong> No Copy Location, defina o Target como a <code>Armature</code> e o Bone como <code>Knee.L</code>. Ajuste o valor de <strong>Head/Tail para 1.000</strong> para que o pé grude na ponta da canela.
                    </li>
                  </List>

                  <Subtitle>4. Replicando o Sistema (Braços, Cauda e Orelhas)</Subtitle>
                  <Paragraph>
                    Essa mesma engenharia de IK e Controladores é versátil e deve ser aplicada em outras extremidades: mãos (Cont_LowerArm.L), cauda (Cont_Pelvis.010) e orelhas.
                  </Paragraph>

                  <Subtitle>5. Dica Hacker 1: Limpando Parentescos (Alt + P)</Subtitle>
                  <Paragraph>
                    Se criou o controlador pelo Extrude, ele nascerá conectado. No <em>Edit Mode</em>, selecione o controlador, aperte <strong>Alt + P</strong> e escolha <strong>Clear Parent</strong> para soltá-lo e evitar loops de dependência.
                  </Paragraph>

                  <Subtitle>6. 🔄 Dica Hacker 2: Resetando a Pose de Descanso (Alt + G e Alt + R)</Subtitle>
                  <Paragraph>
                    Para voltar instantaneamente à posição original: no <strong>Pose Mode</strong>, aperte <strong>A</strong> para selecionar tudo, seguido de <strong>Alt + G</strong> (zera posição) e <strong>Alt + R</strong> (zera rotação).
                  </Paragraph>

                  <Subtitle>7. 📂 Dica Hacker 3: Organização com Bone Collections (Atalho M)</Subtitle>
                  <Paragraph>
                    Manter um Rig complexo organizado é vital para não se perder entre dezenas de ossos. O Blender permite agrupar ossos em coleções específicas para facilitar a visibilidade:
                  </Paragraph>

                  <List>
                    <li>No <strong>Edit Mode</strong>, selecione os ossos que deseja organizar.</li>
                    <li>Aperte a tecla <strong>M</strong> no teclado.</li>
                    <li>No menu que abrir, você pode criar uma nova coleção ou mover os ossos para uma já existente.</li>
                    <li><strong>Exemplo de Fluxo:</strong> No nosso projeto, separamos o esqueleto básico do gato em uma coleção chamada <code>bones</code> e todos os controladores em outra chamada <code>rig_controls</code>. Assim, podemos esconder todos os ossos internos e deixar apenas os controladores visíveis para o animador, mantendo o Rig limpo e profissional.</li>
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
