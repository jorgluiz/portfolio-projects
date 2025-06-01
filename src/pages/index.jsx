import Head from "next/head";
import { useGlobalState } from "../context/GlobalStateContext";

import { Title, Paragraph, List } from "@/styles/globalStyles";

import { MainLayout, MainContent } from "@/components/layout/mainLayout";
import SideBarLayout from "@/components/layout/sideBarLayout";
import HeaderLayout from "@/components/layout/headerLayout";
import MainContentLayout from "@/components/layout/contentLayout";
import Overlay from "@/components/overlay";

const Layout = () => {
  const { isLoaded, isHamburguerOpen, setIsHamburguerOpen } = useGlobalState();

  // Função para fechar sidebar clicando fora
  const handleOverlayClick = () => setIsHamburguerOpen(false);

  return (
    <>
      <Head>
        <meta name="google-site-verification" content="OT2TwtRcajHWcrLo9NAi50GaLrVN25ILvgq5-imfHUk" />
        {/* <!-- Primary Meta Tags --> */}
        <title>Jorge Luiz - Desenvolvedor Web Full Stack (React, Node.js, Next.js, PostgreSQL)</title>
        <meta name="title" content="Jorge Luiz - Desenvolvedor Web Full Stack (React, Node.js, Next.js, PostgreSQL)" />
        <meta name="description" content="Olá! Eu sou Jorge Luiz, desenvolvedor web especializado em frontend com ReactJS, NextJS e backend com Node.js. Explore meus projetos de sites modernos e aplicações robustas." />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:site_name" content="https://portfolio-projects-production.up.railway.app" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://portfolio-projects-production.up.railway.app" />
        <meta property="og:title" content="Jorge Luiz - Desenvolvedor Web Full Stack (React, Node.js, Next.js, PostgreSQL)" />
        <meta property="og:description" content="Conheça meu portfólio de projetos de desenvolvimento web! Trabalho com tecnologias como ReactJS, NextJS, Node.js e muito mais." />
        <meta property="og:image" content="https://portfolio-projects-production.up.railway.app/perfil.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://portfolio-projects-production.up.railway.app" />
        <meta property="twitter:title" content="Jorge Luiz - Desenvolvedor Web Full Stack (React, Node.js, Next.js, PostgreSQL)" />
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
              <MainContent>
                <div>
                  <Title>Desenvolvimento de Portfólio Pessoal Frontend e Backend</Title>
                  <Paragraph>Este projeto é o meu <strong>portfólio pessoal</strong> desenvolvido com <strong>Next.js</strong> e <strong>ReactJS</strong>, onde apresento minhas habilidades tanto no <strong>frontend</strong> quanto no <strong>backend</strong>. O objetivo principal do projeto é demonstrar minha capacidade de construir <strong>sites modernos e funcionais</strong>, com foco em <strong>SEO, performance</strong> e uma experiência de usuário otimizada.</Paragraph>
                  <List>
                    <li><strong>Estrutura de Rotas:</strong> O site utiliza a estrutura de <strong>páginas do Next.js</strong> para definir rotas de forma simples, sem a necessidade de funções como getServerSideProps ou getStaticProps, pois o projeto é focado em apresentar meu trabalho de maneira ágil e prática.</li>
                    <li><strong>Layout Responsivo:</strong> A interface foi projetada com Flexbox, proporcionando um layout <strong>flexível</strong> e responsivo, ideal para todos os dispositivos. O <strong>menu hamburguer</strong> foi implementado de forma interativa, melhorando a navegação.</li>
                    <li><strong>SEO:</strong> A aplicação foi otimizada para SEO com a inclusão de <strong>meta tags</strong> específicas para Google, Open Graph e Twitter, garantindo que o site seja facilmente encontrado e indexado. Isso inclui a <strong>verificação do Google</strong> através de uma meta tag.</li>
                  </List>
                  <Paragraph>O site foi implantado na <strong>Railway</strong>, uma plataforma que oferece fácil escalabilidade e gestão, e está configurado para ser indexado pelo Google, o que aumenta a visibilidade do meu portfólio.</Paragraph>
                  <div style={{ borderTop: "1px solid #444" }}></div>
                  <Paragraph>Esse projeto reflete minha capacidade de construir aplicações web responsivas e otimizadas, sendo uma vitrine para minhas habilidades em frontend e backend.</Paragraph>

                  <div>
                    <span>Pesquiso no <span style={{ fontSize: "20px", color: "blue", fontWeight: "800" }}>G</span><span style={{ fontSize: "20px", color: "red", fontWeight: "800" }}>o</span><span style={{ fontSize: "20px", color: "#fbbc05", fontWeight: "800" }}>o</span><span style={{ fontSize: "20px", color: "blue", fontWeight: "800" }}>g</span><span style={{ fontSize: "20px", color: "green", fontWeight: "800" }}>l</span><span style={{ fontSize: "20px", color: "red", fontWeight: "800" }}>e</span>: <a style={{ color: "blue" }} href="https://www.google.com/search?q=https://portfolio-projects-production.up.railway.app" target="_blank" rel="noopener noreferrer">Buscar pagina no Google</a></span>
                  </div>
                </div>
              </MainContent>
            </MainContentLayout>
          </MainLayout>
        </>
      )}
    </>
  );
};

export default Layout;