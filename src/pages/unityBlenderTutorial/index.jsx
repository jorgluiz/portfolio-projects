// import { useState } from "react";
// import { useGlobalState } from "../../context/GlobalStateContext";

// import { MainLayout } from "@/components/layout/mainLayout";
// import SideBarLayout from "@/components/layout/sideBarLayout";
// import HeaderLayout from "@/components/layout/headerLayout";
// import MainContentLayout from "@/components/layout/contentLayout";
// import Overlay from "@/components/overlay";

// import Title from "@/components/common/title";

// import { DiarioDevMainContainer, CollapsibleContent } from "@/components/blog";

// import BlenderRetopology from "@/components/blenderRetopology";
// import BlenderUV from "@/components/BlenderMapeamentoUV";
// import BlenderTexturePaint from "@/components/BlenderTexturePaint";
// import BlenderRigging from "@/components/blenderRigging";
// import BlenderInverseKinematics from "@/components/blenderInverseKinematics";
// import BlenderControllerCustomization from "@/components/blenderControllerCustomization";
// import BlenderAnimationMovementsWithAction from "@/components/blenderAnimationMovementsWithAction";
// import BlenderCreatingShapeKeys from "@/components/blenderCreatingShapeKeys";
// import BlenderAnimateShapeKeys from "@/components/blenderAnimateShapeKeys";
// import BlenderIndependentObjects from "@/components/blenderIndependentObjects";


// // 1. Efeito de redimensionamento da tela
// const Projetos = () => {
//   const { isLoaded, isHamburguerOpen, setIsHamburguerOpen } = useGlobalState();
//   const [visibleSections, setVisibleSections] = useState({});

//   // Função para fechar sidebar clicando fora
//   const handleOverlayClick = () => setIsHamburguerOpen(false);

//   const toggleSection = (index) => {
//     setVisibleSections((prev) => ({
//       ...prev,
//       [index]: !prev[index],
//     }));
//   };

//   const modules = [
//     {
//       moduleTitle: "Blender",
//       sections: [
//         { title: "Blender Retopology", component: <BlenderRetopology />, key: "Blender-Retopology" },
//         { title: "Blender mapeamento UV (UV Mapping)", component: <BlenderUV />, key: "Blender-UV" },
//         { title: "Blender Texture Paint", component: <BlenderTexturePaint />, key: "Texture-Paint" },
//         { title: "Blender Rigging and Weight", component: <BlenderRigging />, key: "Blender-Rigging" },
//         { title: "Blender Controllers and Inverse Kinematics", component: <BlenderInverseKinematics />, key: "Blender-Inverse-Kinematics" },
//         { title: "Blender Controller Customization", component: <BlenderControllerCustomization />, key: "Blender-Controller-Customization" },
//         { title: "Blender Animation - Movements With Action", component: <BlenderAnimationMovementsWithAction />, key: "Blender-Animation-Movements-With-Action" },
//         { title: "Blender Creating Shape-Keys", component: <BlenderCreatingShapeKeys />, key: "Blender-Creating-Shape-Keys" },
//         { title: "Blender Animate Shape-Keys", component: <BlenderAnimateShapeKeys />, key: "Blender-Animate-Shape-Keys" },
//         { title: "Blender Independent Objects", component: <BlenderIndependentObjects />, key: "Blender-Independent-Objects" },
//       ],
//     },
//   ];


//   return (
//     <>
//       {!isLoaded ? null : (
//         <>
//           {isHamburguerOpen && (
//             <Overlay onClick={handleOverlayClick}></Overlay>
//           )}
//           <MainLayout>
//             <SideBarLayout></SideBarLayout>
//             <HeaderLayout></HeaderLayout>
//             <MainContentLayout>
//               <DiarioDevMainContainer>
//                 {/* Renderização aninhada: primeiro itera nos módulos, depois nas seções */}
//                 {modules.map((module, moduleIndex) => (
//                   <div key={moduleIndex} className="module-container">
//                     {/* Título do Módulo */}
//                     <h1 style={{ textAlign: "center", marginBottom: "20px" }} className="h2-module-title">
//                       {module.moduleTitle}
//                     </h1>

//                     {/* Seções dentro do Módulo */}
//                     {module.sections.map((section) => (
//                       <div key={section.key}>
//                         <Title
//                           className={`h3Center-diarioDev ${visibleSections[section.key] ? "active" : ""}`}
//                           onClick={() => toggleSection(section.key)}
//                         >
//                           {/* 
//               Colocamos spans para separar o título da seta. 
//               Isso permite que o flexbox os alinhe nas extremidades. 
//             */}
//                           <span>{section.title}</span>
//                           <span>{visibleSections[section.key] ? "▲" : "▼"}</span>
//                         </Title>
//                         <CollapsibleContent isOpen={visibleSections[section.key]}>
//                           {section.component}
//                         </CollapsibleContent>
//                       </div>
//                     ))}
//                   </div>
//                 ))}
//               </DiarioDevMainContainer>
//             </MainContentLayout>
//           </MainLayout>
//         </>
//       )}
//     </>
//   );
// };

// export default Projetos;

import { useGlobalState } from "../../context/GlobalStateContext";

import { MainLayout } from "@/components/layout/mainLayout";
import SideBarLayout from "@/components/layout/sideBarLayout";
import HeaderLayout from "@/components/layout/headerLayout";
import MainContentLayout from "@/components/layout/contentLayout";
import Overlay from "@/components/overlay";

// Importando o novo componente
import ModuleAccordion from "@/components/ModuleAccordion";

// Importando os componentes do Blender
import BlenderRetopology from "@/components/blenderRetopology";
import BlenderUV from "@/components/BlenderMapeamentoUV";
import BlenderTexturePaint from "@/components/BlenderTexturePaint";
import BlenderRigging from "@/components/blenderRigging";
import BlenderInverseKinematics from "@/components/blenderInverseKinematics";
import BlenderControllerCustomization from "@/components/blenderControllerCustomization";
import BlenderAnimationMovementsWithAction from "@/components/blenderAnimationMovementsWithAction";
import BlenderCreatingShapeKeys from "@/components/blenderCreatingShapeKeys";
import BlenderAnimateShapeKeys from "@/components/blenderAnimateShapeKeys";
import BlenderIndependentObjects from "@/components/blenderIndependentObjects";
import BlenderExportFBX from "@/components/blenderExportFBX";

const Projetos = () => {
  const { isLoaded, isHamburguerOpen, setIsHamburguerOpen } = useGlobalState();

  const handleOverlayClick = () => setIsHamburguerOpen(false);


  const blenderModules = [
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
        { title: "Blender Creating Shape-Keys", component: <BlenderCreatingShapeKeys />, key: "Blender-Creating-Shape-Keys" },
        { title: "Blender Animate Shape-Keys", component: <BlenderAnimateShapeKeys />, key: "Blender-Animate-Shape-Keys" },
        { title: "Blender Independent Objects", component: <BlenderIndependentObjects />, key: "Blender-Independent-Objects" },
        { title: "Blender Export FBX", component: <BlenderExportFBX />, key: "Blender Export FBX" },
      ],
    },
  ];

  if (!isLoaded) return null;

  return (
    <>
      {isHamburguerOpen && (
        <Overlay onClick={handleOverlayClick}></Overlay>
      )}
      <MainLayout>
        <SideBarLayout></SideBarLayout>
        <HeaderLayout></HeaderLayout>
        <MainContentLayout>
          {/* O componente agora encapsula toda a lógica do acordeão */}
          <ModuleAccordion modules={blenderModules} />
        </MainContentLayout>
      </MainLayout>
    </>
  );
};

export default Projetos;