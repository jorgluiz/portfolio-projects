import { useGlobalState } from "../../context/GlobalStateContext";

import { MainLayout } from "@/components/layout/mainLayout";
import SideBarLayout from "@/components/layout/sideBarLayout";
import HeaderLayout from "@/components/layout/headerLayout";
import MainContentLayout from "@/components/layout/contentLayout";
import Overlay from "@/components/overlay";

// Importando o novo componente
import ModuleAccordion from "@/components/ModuleAccordion";

// Importando os componentes do Blender
import UnitySceneFlow from "@/components/unitySceneFlow";
import UnityLevelManager from "@/components/unityLevelManager";
import UnityMainCanvas from "@/components/unityMainCanvas";
import UnityTopBar from "@/components/unityTopBar";
import UnitySideControls from "@/components/unitySideControls";
import UnityBottomHUDToools from "@/components/unityBottomHUDToools";
import UnityAdSpacer from "@/components/unityAdSpacer";
import UnityEventSystem from "@/components/unityEventSystem";
import UnityExtraSlots3D from "@/components/unityExtraSlots3D";
import UnityGameManagers from "@/components/unityGameManagers";

import UnityLevel from "@/components/unityLevel";

import UnityLoading from "@/components/unityLoading";

import UnityMainMenu from "@/components/unityMainMenu";

import UnityDataDriven from "@/components/unityDataDriven";

import UnityPipeline from "@/components/unityPipeline";

import UnityLevelBoxes3D from "@/components/unityLevelBoxes3D";

import UnityPrefabsArchitecture from "@/components/unityPrefabsArchitecture";

const Projetos = () => {
  const { isLoaded, isHamburguerOpen, setIsHamburguerOpen } = useGlobalState();

  const handleOverlayClick = () => setIsHamburguerOpen(false);


  const blenderModules = [
    {
      moduleTitle: "Scene Level_Base",
      sections: [
        { title: "Unity Scene Flow (Scene List)", component: <UnitySceneFlow />, key: "Unity-Scene-Flow" },
        { title: "Unity LevelManager", component: <UnityLevelManager />, key: "Unity-LevelManager" },
        { title: "Unity Main Canvas", component: <UnityMainCanvas />, key: "Unity-Main-Canvas" },
        { title: "Unity TopBar", component: <UnityTopBar />, key: "Unity-TopBar" },
        { title: "Unity Side Controls", component: <UnitySideControls />, key: "Unity-Side-Controls" },
        { title: "Unity Bottom HUD Tools", component: <UnityBottomHUDToools />, key: "Unity-Bottom-HUD-Tools" },
        { title: "Unity Ad Spacer", component: <UnityAdSpacer />, key: "Unity-Ad-Spacer" },
        { title: "Unity Event System", component: <UnityEventSystem />, key: "Unity-Event-System" },
        { title: "Unity Extra Slots3D", component: <UnityExtraSlots3D />, key: "Unity-Extra-Slots3D" },
        { title: "Unity Level Boxes3D", component: <UnityLevelBoxes3D />, key: "Unity-Level-Boxes3D" },
        { title: "Unity Game Managers", component: <UnityGameManagers />, key: "Unity-Game-Managers" },
      ],
    },
    {
      moduleTitle: "Scene Level",
      sections: [
        { title: "Unity Level", component: <UnityLevel />, key: "Unity-Level" },
      ],
    },
    {
      moduleTitle: "Scene Loading",
      sections: [
        { title: "Unity Loading", component: <UnityLoading />, key: "Unity-loading" },
      ],
    },
    {
      moduleTitle: "Scene MainMenu",
      sections: [
        { title: "Unity MainMenu", component: <UnityMainMenu />, key: "Unity-mainMenu" },
      ],
    },
    {
      moduleTitle: "Data-Driven scripts",
      sections: [
        { title: "Unity Data-Driven", component: <UnityDataDriven />, key: "Unity-Data-Driven" },
      ],
    },
    {
      moduleTitle: "Pipeline Visual",
      sections: [
        { title: "Unity Pipeline", component: <UnityPipeline />, key: "Unity-Pipeline" },
      ],
    },
    {
      moduleTitle: "Prefabs Architecture",
      sections: [
        { title: "Unity Prefabs Architecture", component: <UnityPrefabsArchitecture />, key: "Unity-Prefabs-Architecture" },
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