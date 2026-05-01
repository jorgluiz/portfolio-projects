import { useState } from "react";
import { useGlobalState } from "@/context/GlobalStateContext";

import { MainLayout } from "@/components/layout/mainLayout";
import SideBarLayout from "@/components/layout/sideBarLayout";
import HeaderLayout from "@/components/layout/headerLayout";
import MainContentLayout from "@/components/layout/contentLayout";
import Overlay from "@/components/overlay";

import ModuleAccordion from "@/components/ModuleAccordion";

import StackDesenvolvimento from "@/components/eCommerce/stackDesenvolvimento";
import PaymentCheckout from "@/components/eCommerce/pagamentoCheckout";
import Features from "@/components/eCommerce/funcionalidades";
import ECommerceLayout from "@/components/eCommerce/experienciaCompra";
import ImageManagement from "@/components/eCommerce/dashboardAdministrativo/imageManagement";


// lógica aqui
const BuildProject = () => {
  const { isLoaded, isHamburguerOpen, setIsHamburguerOpen } = useGlobalState();

  // Função para fechar sidebar clicando fora
  const handleOverlayClick = () => setIsHamburguerOpen(false);

  const modules = [
    {
      moduleTitle: "Este projeto está em desenvolvimento. Início 29/05/2025",
      sections: [
        { title: "Stack de Desenvolvimento", component: <StackDesenvolvimento />, key: "Stack-de-Desenvolvimento" },
        { title: "Pagamento e Checkout", component: <PaymentCheckout />, key: "Pagamento-e-Checkou" },
        { title: "Funcionalidades", component: <Features />, key: "Funcionalidades" },
        { title: "Experiência de Compra", component: <ECommerceLayout />, key: "Experiência-de-Compra" },
        { title: "Dashboard Admin - Gerenciamneto de imagens", component: <ImageManagement />, key: "Dashboard-Admin-Gerenciamneto-de-imagens" },
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