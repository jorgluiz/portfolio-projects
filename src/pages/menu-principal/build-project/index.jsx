import { useState } from "react";
import { useGlobalState } from "@/context/GlobalStateContext";

import { MainLayout } from "@/components/layout/mainLayout";
import SideBarLayout from "@/components/layout/sideBarLayout";
import HeaderLayout from "@/components/layout/headerLayout";
import MainContentLayout from "@/components/layout/contentLayout";
import Overlay from "@/components/overlay";

import Title from "@/components/common/title";

import { BuildProjectMainContainer, CollapsibleContent, H2 } from "@/components/buildProject";

import SaaSProjectGuide from "@/components/buildProject/saaSProjectGuide";
import SaaSforDoctors from "@/components/buildProject/projectSaaS";
import TeamHeader from "@/components/buildProject/team";
import ModularCleanArchitecture from "@/components/buildProject/ModularCleanArchitecture";


// lógica aqui
const BuildProject = () => {
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
    { title: "O que é um projeto SaaS?", component: <SaaSProjectGuide /> },
    { title: "Projeto SaaS para Médicos com Plano de Emagrecimento", component: <SaaSforDoctors /> },
    { title: "Team", component: <TeamHeader /> },
    { title: "Guia Completo do Ciclo de Vida do Projeto SaaS Médico: Do Planejamento à Entrega", component: <ModularCleanArchitecture /> },
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
              <BuildProjectMainContainer>
                <H2>Este projeto está em desenvolvimento. Início 22/04/2025</H2>
                {sections.map((section, index) => (
                  <>
                    <div key={index}>
                      <Title className="h3Center-buildProject"
                        onClick={() => toggleSection(index)}>
                        {section.title} {visibleSections[index] ? "▲" : "▼"}
                      </Title>
                      <CollapsibleContent isOpen={visibleSections[index]}>
                        {section.component}
                      </CollapsibleContent>
                    </div>
                  </>
                ))}
              </BuildProjectMainContainer>
            </MainContentLayout>
          </MainLayout>
        </>
      )}
    </>
  );
};

export default BuildProject;