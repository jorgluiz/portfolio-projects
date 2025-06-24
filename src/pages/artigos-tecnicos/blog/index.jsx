import { useState } from "react";
import { useGlobalState } from "../../../context/GlobalStateContext";

import { MainLayout } from "@/components/layout/mainLayout";
import SideBarLayout from "@/components/layout/sideBarLayout";
import HeaderLayout from "@/components/layout/headerLayout";
import MainContentLayout from "@/components/layout/contentLayout";
import Overlay from "@/components/overlay";

import Title from "@/components/common/title";

import { DiarioDevMainContainer, CollapsibleContent } from "@/components/blog";

import BibliotecasFerramentas from "@/components/blog/bibliotecasFerramentas";
import ArquiteturaMonolitica from "@/components/blog/arquiteturaMonolitica";
import ArquiteturaMicroservices from "@/components/blog/arquiteturaMicroservices";
import BackendNodeJS from "@/components/blog/backendNodeJS";
import MySQLvsORM from "@/components/blog/mySQLvsORM";
import FrontendTecnologiasReactjs from "@/components/blog/frontendTecnologiasReactjs";
import DesignUIUX from "@/components/blog/designUIUx";
import FrontendTecnologiasNextjs from "@/components/blog/frontendTecnologiasNextjs";
import GitCommands from "@/components/blog/comandosGitHub";
import ExpressServersDifference from "@/components/blog/expressHtmlServervsExpressEJSserver";
import NgrokUsage from "@/components/blog/ngrok";
import RenewGitConnection from "@/components/blog/renewGitConnection";


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
      moduleTitle: "Módulo Versionamento e Ferramentas",
      sections: [
        { title: "Comandos GitHub", component: <GitCommands />, key: "ferramentas-git" },
        { title: "Renovando a Conexão com o Git", component: <RenewGitConnection />, key: "ferramentas-git-renew" },
        { title: "Ngrok - Expondo seu localhost", component: <NgrokUsage />, key: "ferramentas-ngrok" },
        { title: "Bibliotecas / Ferramentas / API / SDK", component: <BibliotecasFerramentas />, key: "ferramentas-bibliotecas" },
      ],
    },
    {
      moduleTitle: "Módulo Arquitetura e Backend",
      sections: [
        { title: "Arquitetura Monolítica", component: <ArquiteturaMonolitica />, key: "arquitetura-mono" },
        { title: "Arquitetura de Microserviços", component: <ArquiteturaMicroservices />, key: "arquitetura-micro" },
        { title: "Backend com JavaScript e NodeJS", component: <BackendNodeJS />, key: "backend-nodejs" },
        { title: "Express: Servidor HTML vs. Servidor EJS", component: <ExpressServersDifference />, key: "backend-express" },
        { title: "MySQL vs ORM", component: <MySQLvsORM />, key: "backend-orm" },
      ],
    },
    {
      moduleTitle: "Módulo Frontend",
      sections: [
        { title: "Frontend com ReactJS", component: <FrontendTecnologiasReactjs />, key: "frontend-react" },
        { title: "Frontend com NextJS", component: <FrontendTecnologiasNextjs />, key: "frontend-next" },
        { title: "Design UI e UX em ReactJS", component: <DesignUIUX />, key: "frontend-uiux" },
      ],
    },
  ];


  return (
    <>
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
                {/* Renderização aninhada: primeiro itera nos módulos, depois nas seções */}
                {modules.map((module, moduleIndex) => (
                  <div key={moduleIndex} className="module-container">
                    {/* Título do Módulo */}
                    <h1 style={{ textAlign: "center", marginBottom: "20px" }} className="h2-module-title">{module.moduleTitle}</h1>

                    {/* Seções dentro do Módulo */}
                    {module.sections.map((section) => (
                      <div key={section.key}>
                        <Title
                          className={`h3Center-diarioDev ${visibleSections[section.key] ? "active" : ""}`}
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
              </DiarioDevMainContainer>
            </MainContentLayout>
          </MainLayout>
        </>
      )}
    </>
  );
};

export default Projetos;