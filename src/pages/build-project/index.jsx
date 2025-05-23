import { useState } from "react";
import Head from "next/head";
import { useGlobalState } from "../../context/GlobalStateContext";

import { MainLayout } from "@/components/layout/mainLayout";
import SideBarLayout from "@/components/layout/sideBarLayout";
import HeaderLayout from "@/components/layout/headerLayout";
import MainContentLayout from "@/components/layout/contentLayout";

import Title from "@/components/common/title";

import { BuildProjectMainContainer, CollapsibleContent } from "@/components/buildProject/buildProjectMainContainer";

import SaaSProjectGuide from "@/components/buildProject/saaSProjectGuide";
import SaaSforDoctors from "@/components/buildProject/saaSforDoctors";
import TeamHeader from "@/components/buildProject/team";


// lógica aqui
const BuildProject = () => {
  const { isLoaded } = useGlobalState();
  const [visibleSections, setVisibleSections] = useState({});

  const toggleSection = (index) => {
    setVisibleSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };


  const sections = [
    { title: "O que é um projeto SaaS?", component: <SaaSProjectGuide /> },
    { title: "Desenvolvimento de SaaS para Médicos com Plano de Emagrecimento", component: <SaaSforDoctors /> },
    { title: "Team", component: <TeamHeader /> },
  ];

  return (
    <>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>Portfólio de Projetos | Desenvolvedor Full Stack com React, Next.js e Node.js</title>
        <meta name="title" content="Portfólio de Projetos | Desenvolvedor Full Stack com React, Next.js e Node.js" />
        <meta name="description" content="Olá! Eu sou Jorge Luiz, desenvolvedor web especializado em frontend com ReactJS, NextJS e backend com Node.js. Explore meus projetos de sites modernos e aplicações robustas." />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:site_name" content="https://portfolio-projects-production.up.railway.app" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://portfolio-projects-production.up.railway.app/sobre" />
        <meta property="og:title" content="Portfólio de Projetos | Desenvolvedor Full Stack com React, Next.js e Node.js" />
        <meta property="og:description" content="Conheça meu portfólio de projetos de desenvolvimento web! Trabalho com tecnologias como ReactJS, NextJS, Node.js e muito mais." />
        <meta property="og:image" content="https://portfolio-projects-production.up.railway.app/perfil.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://portfolio-projects-production.up.railway.app/sobre" />
        <meta property="twitter:title" content="Portfólio de Projetos | Desenvolvedor Full Stack com React, Next.js e Node.js" />
        <meta property="twitter:description" content="Olá! Eu sou Jorge Luiz, desenvolvedor web especializado em frontend com ReactJS, NextJS e backend com Node.js. Explore meus projetos de sites modernos e aplicações robustas." />
        <meta property="twitter:image" content="https://portfolio-projects-production.up.railway.app/perfil.png" />
      </Head>

      {!isLoaded ? null : (
        <MainLayout>
          <SideBarLayout></SideBarLayout>
          <HeaderLayout></HeaderLayout>
          <MainContentLayout>
            <BuildProjectMainContainer>
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
      )}
    </>
  );
};

export default BuildProject;