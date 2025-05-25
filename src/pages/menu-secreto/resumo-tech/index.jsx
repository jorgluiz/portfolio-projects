import { useState } from "react";
import Head from "next/head";
import { useGlobalState } from "../../../context/GlobalStateContext";

import { MainLayout } from "@/components/layout/mainLayout";
import SideBarLayout from "@/components/layout/sideBarLayout";
import HeaderLayout from "@/components/layout/headerLayout";
import MainContentLayout from "@/components/layout/contentLayout";
import Overlay from "@/components/overlay";

import Title from "@/components/common/title";

import { ResumoTechMainContainer, CollapsibleContent } from "@/components/resumoTech/resumoTechMainContainer";

import BackendMiddlewares from "@/components/resumoTech/middlewares";
import BlockchainNfts from "@/components/resumoTech/blockchainNfts";
import ThemeCssUserSelect from "@/components/resumoTech/themeCssUserSelect";
import MetaTagsWhatsappProblema from "@/components/resumoTech/metaTagsWhatsappProblema";
import PlataformasCriacaoVideoArte from "@/components/resumoTech/plataformasCriacaoVideoArte";
import ParadigmasJavaScript from "@/components/resumoTech/paradigmasJavaScript";


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

  const sections = [
    { title: "Backend - Middlewares", component: <BackendMiddlewares /> },
    { title: "Blockchain e NFTs", component: <BlockchainNfts /> },
    { title: "CSS - Flickity e PhotoSwipe", component: <ThemeCssUserSelect /> },
    { title: "Nextjs - Meta Tags Whatsapp Problema", component: <MetaTagsWhatsappProblema /> },
    { title: "IA - Criação de Vídeos e Arte", component: <PlataformasCriacaoVideoArte /> },
    { title: "JS - Paradigmas JavaScript", component: <ParadigmasJavaScript /> },
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
                {sections.map((section, index) => (
                  <div key={index}>
                    <Title
                      className={`h3Center-resumoTech ${section.title} ${visibleSections[index] ? "active" : ""}`}
                      onClick={() => toggleSection(index)}
                    >
                      {section.title} {visibleSections[index] ? "▲" : "▼"}
                    </Title>
                    <CollapsibleContent isOpen={visibleSections[index]}>
                      {section.component}
                    </CollapsibleContent>
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