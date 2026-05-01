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

const Projetos = () => {
  const { isLoaded, isHamburguerOpen, setIsHamburguerOpen } = useGlobalState();

  const handleOverlayClick = () => setIsHamburguerOpen(false);


  const blenderModules = [
    {
      moduleTitle: "Blender",
      sections: [
        { title: "Blender Retopology", component: <BlenderRetopology />, key: "Blender-Retopology" },
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