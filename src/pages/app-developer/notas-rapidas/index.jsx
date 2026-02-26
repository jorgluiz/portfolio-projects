import { useState } from "react";
import Head from "next/head";
import { useGlobalState } from "../../../context/GlobalStateContext";

import { MainLayout } from "@/components/layout/mainLayout";
import SideBarLayout from "@/components/layout/sideBarLayout";
import HeaderLayout from "@/components/layout/headerLayout";
import MainContentLayout from "@/components/layout/contentLayout";
import Overlay from "@/components/overlay";

import Title from "@/components/common/title";

import { ResumoTechMainContainer, CollapsibleContent } from "@/components/artigosTecnicos/resumoTechMainContainer";

import FunctionNames from "@/components/app-developer/notasRapidas/functionNames";
import ReactNativeEssentialConcepts from "@/components/app-developer/notasRapidas/reactNativeEssentialConcepts";
import AdvancedReactNativeconcepts from "@/components/app-developer/notasRapidas/advancedReactNativeconcepts";
import EventProperties from "@/components/app-developer/notasRapidas/eventProperties";
import Debugging from "@/components/app-developer/notasRapidas/debugging";
import PushNotifications from "@/components/app-developer/notasRapidas/pushNotifications";
import DemystifyingReactNavigation from "@/components/app-developer/notasRapidas/demystifyingReactNavigation";
import ArchitectureAndPatterns from "@/components/app-developer/notasRapidas/homeScreen";
import HistoryScreen from "@/components/app-developer/notasRapidas/historyScreen";
import VideoPlayerScreen from "@/components/app-developer/notasRapidas/videoPlayerScreen";
import CustomHeader from "@/components/app-developer/notasRapidas/customHeader";

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

  const modules = [
    {
      moduleTitle: "Dominando o React Native",
      sections: [
        { title: "Conceitos Essenciais - React Native", component: <ReactNativeEssentialConcepts />, key: "rn-conceitos-essenciais" },
        { title: "Converções de Nomenclatura - React Native", component: <FunctionNames />, key: "rn-convencoes-nomenclatura" },
        { title: "Conceitos Avançados - React Native", component: <AdvancedReactNativeconcepts />, key: "rn-conceitos-avancados" },
        { title: "Propriedades de Evento - React Native", component: <EventProperties />, key: "rn-propriedades-evento" },
        { title: "Debugging - React Native", component: <Debugging />, key: "rn-debugging" },
        { title: "Notificações Push - React Native", component: <PushNotifications />, key: "rn-push-notifications" },
      ],
    },
    {
      moduleTitle: "Análise de Arquitetura de um App 1.0",
      sections: [
        { title: "Desmistificando o React Navigation: A Anatomia de um App.tsx", component: <DemystifyingReactNavigation />, key: "anatomia-react-navigation" },
        { title: "Component CustomHeader.tsx", component: <CustomHeader />, key: "component-customHeader" },
        { title: "Arquitetura e Padrões de Desenvolvimento: HomeScreen.tsx", component: <ArchitectureAndPatterns />, key: "anatomia-homescreen" },
        { title: "Arquitetura e Padrões de Desenvolvimento: HistoryScreen.tsx", component: <HistoryScreen />, key: "anatomia-historyscreen" },
        { title: "Arquitetura e Padrões de Desenvolvimento: VideoPlayerScreen.tsx", component: <VideoPlayerScreen />, key: "anatomia-videoplayerscreen" }
      ],
    },
    {
      moduleTitle: "Análise de Arquitetura de um App 2.0",
      sections: [
        // { title: "Desmistificando o React Navigation: A Anatomia de um App.tsx", component: <DemystifyingReactNavigation />, key: "anatomia-react-navigation" },
      ],
    }
  ];

  // 1. Estrutura de dados organizada por módulos
  // const modules = [
  //   {
  //     moduleTitle: "Módulo Fundamentos",
  //     sections: [
  //       { title: "Versionamento", component: <Versionamento />, key: "fundamentos-versionamento" },
  //       { title: "Convenções de Nomenclatura", component: <FunctionNames />, key: "fundamentos-nomenclatura" },
  //       { title: "JS - Paradigmas JavaScript", component: <ParadigmasJavaScript />, key: "fundamentos-paradigmas" },
  //     ],
  //   },
  //   {
  //     moduleTitle: "Módulo Frontend",
  //     sections: [
  //       { title: "CSS - Flickity e PhotoSwipe", component: <ThemeCssUserSelect />, key: "frontend-css" },
  //       { title: "Next.js - Meta Tags Whatsapp Problema", component: <MetaTagsWhatsappProblema />, key: "frontend-nextjs" },
  //     ],
  //   },
  //   {
  //     moduleTitle: "Módulo Backend",
  //     sections: [
  //       { title: "Backend - Middlewares", component: <BackendMiddlewares />, key: "backend-middlewares" },
  //       { title: "Polling vs. WebSockets", component: <PollingVsWebSockets />, key: "backend-polling" },
  //     ],
  //   },
  //   {
  //     moduleTitle: "Módulo Especialidades",
  //     sections: [
  //       { title: "Blockchain e NFTs", component: <BlockchainNfts />, key: "especialidades-blockchain" },
  //       { title: "IA - Criação de Vídeos e Arte", component: <PlataformasCriacaoVideoArte />, key: "especialidades-ia" },
  //     ],
  //   },
  // ];



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
                {modules.map((module, moduleIndex) => (
                  <div key={moduleIndex}>
                    <h1 style={{ textAlign: "center", marginBottom: "20px" }} className="h2-module-title">{module.moduleTitle}</h1>
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