import { useState } from "react";
import Head from "next/head";
import { useGlobalState } from "../../../context/GlobalStateContext";

import { MainLayout } from "@/components/layout/mainLayout";
import SideBarLayout from "@/components/layout/sideBarLayout";
import HeaderLayout from "@/components/layout/headerLayout";
import MainContentLayout from "@/components/layout/contentLayout";
import Overlay from "@/components/overlay";

import Title from "@/components/common/title";

import { ResumoTechMainContainer, CollapsibleContent } from "@/components/notasRapidas/resumoTechMainContainer";

import FunctionNames from "@/components/app-developer/notasRapidas/functionNames";
import ReactNativeEssentialConcepts from "@/components/app-developer/notasRapidas/reactNativeEssentialConcepts";
import AdvancedReactNativeconcepts from "@/components/app-developer/notasRapidas/advancedReactNativeconcepts";
import EventProperties from "@/components/app-developer/notasRapidas/eventProperties";
import Debugging from "@/components/app-developer/notasRapidas/debugging";
import PushNotifications from "@/components/app-developer/notasRapidas/pushNotifications";

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
    { title: "Conceitos Essenciais - React Native", component: <ReactNativeEssentialConcepts /> },
    { title: "Converções de Nomenclatura - React Native", component: <FunctionNames /> },
    { title: "Conceitos Avançados - React Native", component: <AdvancedReactNativeconcepts /> },
    { title: "Propriedades de Evento - React Native", component: <EventProperties /> },
    { title: "Debugging - React Native", component: <Debugging /> },
    { title: " Notificações Push - React Native", component: <PushNotifications /> }
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