import { useState } from "react";
import Head from "next/head";
import { useGlobalState } from "@/context/GlobalStateContext";

import { MainLayout } from "@/components/layout/mainLayout";
import SideBarLayout from "@/components/layout/sideBarLayout";
import HeaderLayout from "@/components/layout/headerLayout";
import MainContentLayout from "@/components/layout/contentLayout";
import Overlay from "@/components/overlay";

import Title from "@/components/common/title";

import { ResumoTechMainContainer, CollapsibleContent } from "@/components/notasRapidas/resumoTechMainContainer";

import BackendMiddlewares from "@/components/notasRapidas/middlewares";
import BlockchainNfts from "@/components/notasRapidas/blockchainNfts";
import ThemeCssUserSelect from "@/components/notasRapidas/themeCssUserSelect";
import MetaTagsWhatsappProblema from "@/components/notasRapidas/metaTagsWhatsappProblema";
import PlataformasCriacaoVideoArte from "@/components/notasRapidas/plataformasCriacaoVideoArte";
import ParadigmasJavaScript from "@/components/notasRapidas/paradigmasJavaScript";
import Versionamento from "@/components/notasRapidas/versionamento";
import FunctionNames from "@/components/notasRapidas/functionNames";
import PollingVsWebSockets from "@/components/notasRapidas/pollingVsWebSockets";


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

  // 1. Estrutura de dados organizada por módulos
  const modules = [
    {
      moduleTitle: "Módulo Fundamentos",
      sections: [
        { title: "Versionamento", component: <Versionamento />, key: "fundamentos-versionamento" },
        { title: "Convenções de Nomenclatura", component: <FunctionNames />, key: "fundamentos-nomenclatura" },
        { title: "JS - Paradigmas JavaScript", component: <ParadigmasJavaScript />, key: "fundamentos-paradigmas" },
      ],
    },
    {
      moduleTitle: "Módulo Frontend",
      sections: [
        { title: "CSS - Flickity e PhotoSwipe", component: <ThemeCssUserSelect />, key: "frontend-css" },
        { title: "Next.js - Meta Tags Whatsapp Problema", component: <MetaTagsWhatsappProblema />, key: "frontend-nextjs" },
      ],
    },
    {
      moduleTitle: "Módulo Backend",
      sections: [
        { title: "Backend - Middlewares", component: <BackendMiddlewares />, key: "backend-middlewares" },
        { title: "Polling vs. WebSockets", component: <PollingVsWebSockets />, key: "backend-polling" },
      ],
    },
    {
      moduleTitle: "Módulo Especialidades",
      sections: [
        { title: "Blockchain e NFTs", component: <BlockchainNfts />, key: "especialidades-blockchain" },
        { title: "IA - Criação de Vídeos e Arte", component: <PlataformasCriacaoVideoArte />, key: "especialidades-ia" },
      ],
    },
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
              <ResumoTechMainContainer>
                {/* 2. Renderização em dois níveis: Módulos e depois Seções */}
                {modules.map((module, moduleIndex) => (
                  <div key={moduleIndex} className="module-container">
                    <h1 style={{ textAlign: "center", marginBottom: "20px" }} className="h2-module-title">{module.moduleTitle}</h1>
                    {/* Seções dentro do Módulo */}
                    {module.sections.map((section) => (
                      <div key={section.key}>
                        <Title
                          className={`h3Center-resumoTech ${section.title} ${visibleSections[section.key] ? "active" : ""}`}
                          onClick={() => toggleSection(section.key)}
                        >
                          {section.title} {visibleSections[section.key] ? "▲" : "▼"}
                        </Title>
                        <CollapsibleContent isOpen={visibleSections[section.key]}>
                          {section.component}
                        </CollapsibleContent>
                      </div>
                    ))}
                  </div>
                ))}

              </ResumoTechMainContainer>
            </MainContentLayout>
          </MainLayout>
        </>
      )}
    </>
  );
};

export default Projetos;