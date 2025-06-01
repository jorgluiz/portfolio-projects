import { useState } from "react";
import { useGlobalState } from "../../context/GlobalStateContext";

import { MainLayout } from "@/components/layout/mainLayout";
import SideBarLayout from "@/components/layout/sideBarLayout";
import HeaderLayout from "@/components/layout/headerLayout";
import MainContentLayout from "@/components/layout/contentLayout";
import Overlay from "@/components/overlay";

import Title from "@/components/common/title";

import { BuildProjectMainContainer, CollapsibleContent, H2 } from "@/components/eCommerce";

import StackDesenvolvimento from "@/components/eCommerce/stackDesenvolvimento";
import PaymentCheckout from "@/components/eCommerce/pagamentoCheckout";
import Features from "@/components/eCommerce/funcionalidades";
import ECommerceLayout from "@/components/eCommerce/experienciaCompra";
import ImageManagement from "@/components/eCommerce/dashboardAdministrativo/imageManagement";


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
    { title: "Stack de Desenvolvimento", component: <StackDesenvolvimento /> },
    { title: "Pagamento e Checkout", component: <PaymentCheckout /> },
    { title: "Funcionalidades", component: <Features /> },
    { title: "Experiência de Compra", component: <ECommerceLayout /> },
    { title: "Dashboard Admin - Gerenciamneto de imagens", component: <ImageManagement /> },
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
                <H2>Este projeto está em desenvolvimento. Início 29/05/2025</H2>
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