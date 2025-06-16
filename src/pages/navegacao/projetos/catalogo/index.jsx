import { useState } from "react";
import Head from "next/head";

import Title from "@/components/common/title";

import { P, H3, H4, Ul, Li } from "@/components/projetos/style";

import { MainLayout, MainContent } from "@/components/layout/mainLayout";
import SideBarLayout from "@/components/layout/sideBarLayout";
import HeaderLayout from "@/components/layout/headerLayout";
import MainContentLayout from "@/components/layout/contentLayout";

const Carousel = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  return (
    <>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>Catálogo de Carros Online | Explore Modelos e Funcionalidades</title>
        <meta name="title" content="Catálogo de Carros Online | Explore Modelos e Funcionalidades" />
        <meta name="description" content="Olá! Eu sou Jorge Luiz, desenvolvedor web especializado em frontend com ReactJS, NextJS e backend com Node.js. Explore meus projetos de sites modernos e aplicações robustas." />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:site_name" content="https://portfolio-projects-production.up.railway.app" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://portfolio-projects-production.up.railway.app/projetos/catalogo" />
        <meta property="og:title" content="Catálogo de Carros Online | Explore Modelos e Funcionalidades" />
        <meta property="og:description" content="Conheça meu portfólio de projetos de desenvolvimento web! Trabalho com tecnologias como ReactJS, NextJS, Node.js e muito mais." />
        <meta property="og:image" content="https://portfolio-projects-production.up.railway.app/catalogo.jpg" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://portfolio-projects-production.up.railway.app/projetos/catalogo" />
        <meta property="twitter:title" content="Catálogo de Carros Online | Explore Modelos e Funcionalidades" />
        <meta property="twitter:description" content="Olá! Eu sou Jorge Luiz, desenvolvedor web especializado em frontend com ReactJS, NextJS e backend com Node.js. Explore meus projetos de sites modernos e aplicações robustas." />
        <meta property="twitter:image" content="https://portfolio-projects-production.up.railway.app/catalogo.jpg" />
      </Head>
      <MainLayout>
        <SideBarLayout ></SideBarLayout>
        <HeaderLayout ></HeaderLayout>
        <MainContentLayout>
          <MainContent>
            <Title className="title-catalogo" onClick={() => isToggleOpen ? setIsToggleOpen(false) : setIsToggleOpen(true)}>Projeto: Catálogo de Carros - <span style={{ color: "blue" }}>mais...</span></Title>
            <P>
              <a style={{ fontSize: "24px", fontWeight: "800" }} href="https://portfolio-study-production.up.railway.app/front-end/catalogo" target="_blank">🌎 Link do Projeto</a>
            </P>

            {isToggleOpen && (
              <>
                <div>
                  <H3>Visão Geral</H3>
                  <P>Este projeto apresenta um catálogo interativo de carros, permitindo aos usuários explorar diferentes modelos, aprender sobre a empresa, e conhecer as características dos carros oferecidos. A interface foi projetada para ser moderna e intuitiva, com imagens e textos que destacam os produtos e a marca. O sistema de busca facilita a localização de modelos específicos, enquanto as seções informativas (sobre a empresa e suas funcionalidades) oferecem um panorama detalhado do serviço.</P>
                  <H3>Funcionalidades e Fluxo da Aplicação</H3>
                  <H4>1. Catálogo de Carros:</H4>
                  <Ul>
                    <Li>Exibição de múltiplos carros com imagens e descrições.</Li>
                    <Li>Funcionalidade de filtro e busca para facilitar a localização de modelos específicos.</Li>
                    <Li>Botões de ação {'("I want this!")'} para interação com os carros.</Li>
                  </Ul>
                  <H3>{'Seção "Sobre":'}</H3>
                  <Ul>
                    <Li>Descrição da empresa, destacando sua missão e visão.</Li>
                    <Li>Imagem da empresa e um parágrafo explicativo.</Li>
                  </Ul>
                  <H3>Recursos:</H3>
                  <Ul>
                    <Li>Apresentação de funcionalidades do serviço oferecido, como opções de aluguel e contato com a empresa.</Li>
                    <Li>Cada recurso é ilustrado com uma imagem e uma descrição breve.</Li>
                  </Ul>
                  <H3>Interatividade e Estilo:</H3>
                  <Ul>
                    <Li>Navegação fluida entre as seções do site.</Li>
                    <Li>Cabeçalho fixo com opções de navegação para facilitar o acesso às diferentes áreas do site.</Li>
                    <Li>Rodapé com informações sobre a empresa, links úteis e ícones de redes sociais.</Li>
                  </Ul>
                  <H3>Tecnologias Utilizadas:</H3>
                  <Ul>
                    <Li><strong>React:</strong> Biblioteca JavaScript para construir interfaces de usuário interativas.</Li>
                    <Li><strong>CSS:</strong> Estilos personalizados para o design responsivo e atraente do catálogo.</Li>
                    <Li><strong>Imagens:</strong> Utilização de recursos visuais de alta qualidade para ilustrar os carros e as funcionalidades.</Li>
                  </Ul>
                  <H3>Destaques do Design:</H3>
                  <Ul>
                    <Li><strong>Responsividade:</strong> A interface foi projetada para funcionar bem em dispositivos móveis e desktops, garantindo uma boa experiência de usuário em todas as telas.</Li>
                    <Li><strong>Estética Moderna:</strong> A escolha de imagens e o layout foram feitos para garantir uma apresentação limpa, agradável e fácil de navegar.</Li>
                    <Li><strong>Navegação Intuitiva:</strong> A estrutura de navegação foi pensada para garantir que os usuários encontrem facilmente as informações que procuram</Li>
                  </Ul>
                </div>
              </>
            )}
          </MainContent>
        </MainContentLayout>
      </MainLayout>
    </>
  );
};

export default Carousel;