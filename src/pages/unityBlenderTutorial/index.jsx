import { useState } from "react";
import { useGlobalState } from "../../context/GlobalStateContext";

import { MainLayout } from "@/components/layout/mainLayout";
import SideBarLayout from "@/components/layout/sideBarLayout";
import HeaderLayout from "@/components/layout/headerLayout";
import MainContentLayout from "@/components/layout/contentLayout";
import Overlay from "@/components/overlay";

import Title from "@/components/common/title";

import { DiarioDevMainContainer, CollapsibleContent } from "@/components/blog";

import BlenderRetopology from "@/components/blenderRetopology";
import BlenderUV from "@/components/BlenderMapeamentoUV";
import BlenderTexturePaint from "@/components/BlenderTexturePaint";
import BlenderRigging from "@/components/blenderRigging";
import BlenderInverseKinematics from "@/components/blenderInverseKinematics";
import BlenderControllerCustomization from "@/components/blenderControllerCustomization";
import BlenderAnimationMovementsWithAction from "@/components/blenderAnimationMovementsWithAction";


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
      moduleTitle: "Blender",
      sections: [
        { title: "Blender Retopology", component: <BlenderRetopology />, key: "Blender-Retopology" },
        { title: "Blender mapeamento UV (UV Mapping)", component: <BlenderUV />, key: "Blender-UV" },
        { title: "Blender Texture Paint", component: <BlenderTexturePaint />, key: "Texture-Paint" },
        { title: "Blender Rigging and Weight", component: <BlenderRigging />, key: "Blender-Rigging" },
        { title: "Blender Controllers and Inverse Kinematics", component: <BlenderInverseKinematics />, key: "Blender-Inverse-Kinematics" },
        { title: "Blender Controller Customization", component: <BlenderControllerCustomization />, key: "Blender-Controller-Customization" },
        { title: "Blender Animation - Movements With Action", component: <BlenderAnimationMovementsWithAction />, key: "Blender-Animation-Movements-With-Action" },
      ],
    },
    // {
    //   moduleTitle: "Módulo Arquitetura e Backend",
    //   sections: [
    //     { title: "Arquitetura Monolítica", component: <ArquiteturaMonolitica />, key: "arquitetura-mono" },
    //     { title: "Arquitetura de Microserviços", component: <ArquiteturaMicroservices />, key: "arquitetura-micro" },
    //     { title: "Backend com JavaScript e NodeJS", component: <BackendNodeJS />, key: "backend-nodejs" },
    //     { title: "Express: Servidor HTML vs. Servidor EJS", component: <ExpressServersDifference />, key: "backend-express" },
    //     { title: "MySQL vs ORM", component: <MySQLvsORM />, key: "backend-orm" },
    //   ],
    // },
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