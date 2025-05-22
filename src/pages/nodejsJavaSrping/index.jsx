import { useState, useEffect } from "react";
import Main from "@/components/layout/contentLayout";
import SideBar from "@/components/layout/sideBarLayout";
import Header from "@/components/layout/headerLayout";
// import whatsapp2 from "@/public/whatsapp2.png";
import Image from 'next/image';
import Head from "next/head";
import { useGlobalState, H3 } from "../../context/GlobalStateContext";

import { ContainerLayout } from "@/components/layout/mainLayout";
import { ContainerDiariodevStyle } from "@/components/diariodev/diarioDevMainContainer";

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


// 1. Efeito de redimensionamento da tela
const NodeJsJavaSpring = () => {
  const { isLoaded } = useGlobalState();

  const container = {
    fontFamily: 'Segoe UI, sans-serif',
    padding: '24px',
    maxWidth: '900px',
    margin: '0 auto',
    color: '#222',
    backgroundColor: '#f9f9f9',
    borderRadius: '12px',
    boxShadow: '0 0 20px rgba(0,0,0,0.05)',
    lineHeight: '1.6',
  };

  const sectionTitle = {
    fontSize: '24px',
    fontWeight: '700',
    marginBottom: '20px',
  };

  const subtitle = {
    fontSize: '20px',
    fontWeight: '600',
    marginTop: '24px',
    marginBottom: '12px',
    borderBottom: '2px solid #ddd',
    paddingBottom: '6px',
  };

  const paragraph = {
    fontSize: '16px',
    marginBottom: '12px',
  };

  const list = {
    paddingLeft: '20px',
    marginBottom: '12px',
  };


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
        <ContainerLayout>
          <SideBar></SideBar>
          <Header></Header>
          <Main>
            <ContainerDiariodevStyle>
              <div style={container}>
                <div style={sectionTitle}>1. Node.js (JavaScript)</div>

                <div style={subtitle}>Vantagens:</div>
                <ul style={list}>
                  <li>Muito rápido para desenvolvimento.</li>
                  <li>Similaridade com o frontend (React, por exemplo), o que facilita trabalhar no fullstack.</li>
                  <li>Grande número de pacotes no NPM.</li>
                  <li>Escalável com a arquitetura correta (microservices, clustering).</li>
                  <li>Desempenho excelente para I/O (input/output), como APIs e aplicações em tempo real.</li>
                </ul>

                <div style={subtitle}>Desvantagens:</div>
                <ul style={list}>
                  <li>Não é tão eficiente para operações pesadas como processamento de vídeos (se comparado ao Java).</li>
                  <li>Código assíncrono pode ser mais difícil de manter se mal estruturado.</li>
                </ul>

                <div style={subtitle}>Quando usar:</div>
                <p style={paragraph}>
                  Projetos que precisam ser desenvolvidos rapidamente, APIs leves, aplicações em tempo real (WebSockets) e integração com outras tecnologias modernas.
                </p>

                <hr style={{ margin: '30px 0' }} />

                <div style={sectionTitle}>2. Java (Spring Boot ou Javalin)</div>

                <div style={subtitle}>Vantagens:</div>
                <ul style={list}>
                  <li>Excelente desempenho, especialmente para aplicações com processamento pesado.</li>
                  <li>Frameworks robustos como Spring Boot permitem construir sistemas corporativos e complexos.</li>
                  <li>Fortemente tipada: menos erros em produção.</li>
                  <li>Melhor para sistemas de larga escala e de alta performance.</li>
                  <li>Uso extensivo em grandes empresas e em projetos mais tradicionais.</li>
                </ul>

                <div style={subtitle}>Desvantagens:</div>
                <ul style={list}>
                  <li>Desenvolvimento é mais "lento" comparado ao Node.js.</li>
                  <li>Maior curva de aprendizado (muito código boilerplate em frameworks como Spring).</li>
                </ul>

                <div style={subtitle}>Quando usar:</div>
                <p style={paragraph}>
                  Projetos corporativos de grande escala, APIs que requerem alta performance e robustez ou aplicações com muitas operações em background.
                </p>
              </div>
            </ContainerDiariodevStyle>
          </Main>
        </ContainerLayout>
      )}
    </>
  );
};

export default NodeJsJavaSpring;