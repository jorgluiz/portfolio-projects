import Head from "next/head";
import { useGlobalState } from "../../../context/GlobalStateContext";
import {
  Container,
  SectionTitle,
  Subtitle,
  Paragraph,
  List
} from "@/styles/globalStyles";

import { MainLayout } from "@/components/layout/mainLayout";
import SideBarLayout from "@/components/layout/sideBarLayout";
import HeaderLayout from "@/components/layout/headerLayout";
import MainContentLayout from "@/components/layout/contentLayout";
import Overlay from "@/components/overlay";

// 1. Efeito de redimensionamento da tela
const NodeJsJavaSpring = () => {
  const { isLoaded, isHamburguerOpen, setIsHamburguerOpen } = useGlobalState();

  // Função para fechar sidebar clicando fora
  const handleOverlayClick = () => setIsHamburguerOpen(false);

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Node.js vs Java Spring Boot: Comparação de Tecnologias | Portfólio de Projetos</title>
        <meta
          name="description"
          content="Explore as vantagens e desvantagens de Node.js (JavaScript) e Java (Spring Boot ou Javalin). Descubra qual tecnologia é a melhor para seu projeto de acordo com a performance, escalabilidade e requisitos do sistema."
        />
        <meta name="keywords" content="Node.js, Java, Spring Boot, Javalin, comparação, desenvolvimento full stack, backend, tecnologia" />
        <meta name="author" content="Jorge Luiz" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:site_name" content="https://portfolio-projects-production.up.railway.app" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://portfolio-projects-production.up.railway.app/menu-secreto/nodejs-java-spring" />
        <meta property="og:title" content="Portfólio de Projetos | Desenvolvedor Full Stack com React, Next.js e Node.js" />
        <meta property="og:description" content="Conheça meu portfólio de projetos de desenvolvimento web! Trabalho com tecnologias como ReactJS, NextJS, Node.js e muito mais." />
        <meta property="og:image" content="https://portfolio-projects-production.up.railway.app/perfil.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://portfolio-projects-production.up.railway.app/menu-secreto/nodejs-java-spring" />
        <meta property="twitter:title" content="Portfólio de Projetos | Desenvolvedor Full Stack com React, Next.js e Node.js" />
        <meta property="twitter:description" content="Olá! Eu sou Jorge Luiz, desenvolvedor web especializado em frontend com ReactJS, NextJS e backend com Node.js. Explore meus projetos de sites modernos e aplicações robustas." />
        <meta property="twitter:image" content="https://portfolio-projects-production.up.railway.app/perfil.png" />
      </Head>

      {!isLoaded ? null : (
        <>
          {isHamburguerOpen && (
            <Overlay onClick={handleOverlayClick}></Overlay>
          )}
          <MainLayout>
            <SideBarLayout></SideBarLayout>
            <HeaderLayout></HeaderLayout>
            <MainContentLayout>
              <Container>
                <SectionTitle>1. Node.js (JavaScript)</SectionTitle>

                <Subtitle>Vantagens:</Subtitle>
                <List>
                  <li>Muito rápido para desenvolvimento.</li>
                  <li>Similaridade com o frontend (React, por exemplo), o que facilita trabalhar no fullstack.</li>
                  <li>Grande número de pacotes no NPM.</li>
                  <li>Escalável com a arquitetura correta (microservices, clustering).</li>
                  <li>Desempenho excelente para I/O (input/output), como APIs e aplicações em tempo real.</li>
                </List>

                <Subtitle>Desvantagens:</Subtitle>
                <List>
                  <li>Não é tão eficiente para operações pesadas como processamento de vídeos (se comparado ao Java).</li>
                  <li>Código assíncrono pode ser mais difícil de manter se mal estruturado.</li>
                </List>

                <Subtitle>Quando usar:</Subtitle>
                <Paragraph>
                  Projetos que precisam ser desenvolvidos rapidamente, APIs leves, aplicações em tempo real (WebSockets) e integração com outras tecnologias modernas.
                </Paragraph>

                <hr style={{ margin: '30px 0' }} />

                <SectionTitle>2. Java (Spring Boot ou Javalin)</SectionTitle>

                <Subtitle>Vantagens:</Subtitle>
                <List>
                  <li>Excelente desempenho, especialmente para aplicações com processamento pesado.</li>
                  <li>Frameworks robustos como Spring Boot permitem construir sistemas corporativos e complexos.</li>
                  <li>Fortemente tipada: menos erros em produção.</li>
                  <li>Melhor para sistemas de larga escala e de alta performance.</li>
                  <li>Uso extensivo em grandes empresas e em projetos mais tradicionais.</li>
                </List>

                <Subtitle>Desvantagens:</Subtitle>
                <List>
                  <li>Desenvolvimento é mais `&lento` comparado ao Node.js.</li>
                  <li>Maior curva de aprendizado (muito código boilerplate em frameworks como Spring).</li>
                </List>

                <Subtitle>Quando usar:</Subtitle>
                <Paragraph>
                  Projetos corporativos de grande escala, APIs que requerem alta performance e robustez ou aplicações com muitas operações em background.
                </Paragraph>
              </Container>
            </MainContentLayout>
          </MainLayout>
        </>
      )}
    </>
  );
};

export default NodeJsJavaSpring;
