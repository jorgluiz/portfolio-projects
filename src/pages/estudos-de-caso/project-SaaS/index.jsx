import { useGlobalState } from "@/context/GlobalStateContext";

import { MainLayout } from "@/components/layout/mainLayout";
import SideBarLayout from "@/components/layout/sideBarLayout";
import HeaderLayout from "@/components/layout/headerLayout";
import MainContentLayout from "@/components/layout/contentLayout";
import Overlay from "@/components/overlay";

import ModuleAccordion from "@/components/ModuleAccordion";

import SaaSProjectGuide from "@/components/buildProject/saaSProjectGuide";
import SaaSforDoctors from "@/components/buildProject/projectSaaS";
import TeamHeader from "@/components/buildProject/team";
import ModularCleanArchitecture from "@/components/buildProject/ModularCleanArchitecture";


// lógica aqui
const BuildProject = () => {
  const { isLoaded, isHamburguerOpen, setIsHamburguerOpen } = useGlobalState();

  // Função para fechar sidebar clicando fora
  const handleOverlayClick = () => setIsHamburguerOpen(false);

  const modules = [
    {
      moduleTitle: "Este projeto está em desenvolvimento. Início 22/04/2025",
      sections: [
        { title: "O que é um projeto SaaS?", component: <SaaSProjectGuide />, key: "O-que-e-um-projeto-SaaS" },
        { title: "Projeto SaaS para Médicos com Plano de Emagrecimento", component: <SaaSforDoctors />, key: "Projeto-SaaS-para-Medicos-com-Plano-de-Emagrecimento" },
        { title: "Team", component: <TeamHeader />, key: "Team" },
        { title: "Guia Completo do Ciclo de Vida do Projeto SaaS Médico: Do Planejamento à Entrega", component: <ModularCleanArchitecture />, key: "Guia-Completo-do-Ciclo-de-Vida-do-Projeto-SaaS-Medico-Do-Planejamento-a-Entrega" },
      ]
    }
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

              {/* 3. Renderização centralizada: apenas passa os módulos como prop */}
              <ModuleAccordion modules={modules} />

            </MainContentLayout>
          </MainLayout>
        </>
      )}
    </>
  );
};

export default BuildProject;