import { useState, useEffect } from "react";
import Main from "@/components/layout/main";
import SideBar from "@/components/layout/sideBar";
import Header from "@/components/layout/header";
// import whatsapp2 from "@/public/whatsapp2.png";
import Image from 'next/image';
import Head from "next/head";
import { useGlobalState } from "../../context/GlobalStateContext";

import { ContainerLayout } from "@/components/home";
import { ContainerStyle } from "@/components/diariodev/containerStyle";
import ArquiteturaMonolitica from "@/components/diariodev/arquiteturaMonolitica";
import ArquiteturaMicroservices from "@/components/diariodev/arquiteturaMicroservices";
import BackendTecnologias from "@/components/diariodev/backendTecnologias";
import FrontendTecnologiasReactjs from "@/components/diariodev/frontendTecnologiasReactjs";
import FrontendTecnologiasNextjs from "@/components/diariodev/frontendTecnologiasNextjs";


// 1. Efeito de redimensionamento da tela
const Projetos = () => {
  const { isLoaded } = useGlobalState();
  const [visibleSections, setVisibleSections] = useState({});

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
    { title: "Arquitetura Monolitica", component: <ArquiteturaMonolitica /> },
    { title: "Arquitetura Microservices", component: <ArquiteturaMicroservices /> },
    { title: "Tecnologias-chave para Backend com JavaScript Node.js", component: <BackendTecnologias /> },
    { title: "Tecnologias-chave para Frontend com React.js", component: <FrontendTecnologiasReactjs /> },
    { title: "Tecnologias-chave para Frontend com Next.js ", component: <FrontendTecnologiasNextjs /> },
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
        <ContainerLayout>
          <SideBar></SideBar>
          <Header></Header>
          <Main>
            <ContainerStyle>
              {sections.map((section, index) => (
                <div key={index}>
                  <h3 className="h3Center"
                    onClick={() => toggleSection(index)}
                    style={{
                      cursor: "pointer",
                      color: visibleSections[index] ? "blue" : "black",
                    }}
                  >
                    {section.title}
                  </h3>
                  {visibleSections[index] && (
                    <div>
                      {section.component}
                    </div>
                  )}
                </div>
              ))}
            </ContainerStyle>
          </Main>
        </ContainerLayout>
      )}
    </>
  );
};

export default Projetos;