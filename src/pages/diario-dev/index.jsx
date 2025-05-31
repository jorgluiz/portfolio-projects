import { useState } from "react";
import Head from "next/head";
import { useGlobalState } from "../../context/GlobalStateContext";

import { MainLayout } from "@/components/layout/mainLayout";
import SideBarLayout from "@/components/layout/sideBarLayout";
import HeaderLayout from "@/components/layout/headerLayout";
import MainContentLayout from "@/components/layout/contentLayout";
import Overlay from "@/components/overlay";

import Title from "@/components/common/title";

import { DiarioDevMainContainer, CollapsibleContent } from "@/components/diariodev";

import BibliotecasFerramentas from "@/components/diariodev/bibliotecasFerramentas";
import ArquiteturaMonolitica from "@/components/diariodev/arquiteturaMonolitica";
import ArquiteturaMicroservices from "@/components/diariodev/arquiteturaMicroservices";
import BackendNodeJS from "@/components/diariodev/backendNodeJS";
import MySQLvsORM from "@/components/diariodev/mySQLvsORM";
import FrontendTecnologiasReactjs from "@/components/diariodev/frontendTecnologiasReactjs";
import DesignUIUX from "@/components/diariodev/designUIUx";
import FrontendTecnologiasNextjs from "@/components/diariodev/frontendTecnologiasNextjs";
import GitCommands from "@/components/diariodev/comandosGitHub";
import ExpressServersDifference from "@/components/diariodev/expressHtmlServervsExpressEJSserver";


// 1. Efeito de redimensionamento da tela
const Projetos = () => {
  const { isLoaded, isHamburguerOpen, setIsHamburguerOpen } = useGlobalState();
  const [visibleSections, setVisibleSections] = useState({});

  // Função para fechar sidebar clicando fora
  const handleOverlayClick = () => setIsHamburguerOpen(false);

  const toggleSection = (index) => {
    setVisibleSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // const ComponenteTech01 = () => <p>Conteúdo do componente Tech 01</p>;
  // const ComponenteTech02 = () => <p>Conteúdo do componente Tech 02</p>;
  // const ComponenteTech03 = () => <p>Conteúdo do componente Tech 03</p>;

  const sections = [
    { title: "Bibliotecas / Ferramentas / API / SDK", component: <BibliotecasFerramentas /> },
    { title: "Arquitetura Monolitica", component: <ArquiteturaMonolitica /> },
    { title: "Arquitetura Microservices", component: <ArquiteturaMicroservices /> },
    { title: "Backend com JavaScript NodeJS", component: <BackendNodeJS /> },
    { title: "MySQL vs ORM", component: <MySQLvsORM /> },
    { title: "Frontend com ReactJS", component: <FrontendTecnologiasReactjs /> },
    { title: "Design UI e UX em ReactJS", component: <DesignUIUX /> },
    { title: "Frontend com NextJS", component: <FrontendTecnologiasNextjs /> },
    { title: "Express HTML server e express EJS server", component: <ExpressServersDifference /> },
    { title: "Comandos GitHub", component: <GitCommands /> },
  ];


  return (
    <>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>Portfólio de Projetos | Desenvolvedor Full Stack com React, Next.js e Node.js</title>
        <meta name="title" content="Portfólio de Projetos | Desenvolvedor Full Stack com React, Next.js e Node.js" />
        <meta name="description" content="Olá! Eu sou Jorge Luiz, desenvolvedor web especializado em frontend com ReactJS, NextJS e backend com Node.js. Explore meus projetos de sites modernos e aplicações robustas." />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:site_name" content="https://portfolio-projects-production.up.railway.app" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://portfolio-projects-production.up.railway.app/sobre" />
        <meta property="og:title" content="Portfólio de Projetos | Desenvolvedor Full Stack com React, Next.js e Node.js" />
        <meta property="og:description" content="Conheça meu portfólio de projetos de desenvolvimento web! Trabalho com tecnologias como ReactJS, NextJS, Node.js e muito mais." />
        <meta property="og:image" content="https://portfolio-projects-production.up.railway.app/perfil.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://portfolio-projects-production.up.railway.app/sobre" />
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
              <DiarioDevMainContainer>
                {sections.map((section, index) => (
                  <div key={index}>
                    <Title
                      className={`h3Center-diarioDev ${section.title} ${visibleSections[index] ? "active" : ""}`}
                      onClick={() => toggleSection(index)}
                    >
                      {section.title} {visibleSections[index] ? "▲" : "▼"}
                    </Title>
                    <CollapsibleContent isOpen={visibleSections[index]}>
                      {section.component}
                    </CollapsibleContent>
                  </div>
                ))}
              </DiarioDevMainContainer>
            </MainContentLayout>
          </MainLayout>
        </>
      )}
    </>
  );
};

export default Projetos;