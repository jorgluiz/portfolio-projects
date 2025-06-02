import { useState } from "react";
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
import NgrokUsage from "@/components/diariodev/ngrok";


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
    { title: "Express HTML server e Express EJS server", component: <ExpressServersDifference /> },
    { title: "Comandos GitHub", component: <GitCommands /> },
    { title: "Ngrok", component: <NgrokUsage /> },
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