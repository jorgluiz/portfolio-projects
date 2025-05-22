import { useState } from "react";
import Head from "next/head";

import Title from "@/components/common/title";

import { P, H3, H4, Ul, Li } from "@/components/projetos/style";

import { MainLayout, MainContent } from "@/components/layout/mainLayout";
import SideBarLayout from "@/components/layout/sideBarLayout";
import HeaderLayout from "@/components/layout/headerLayout";
import MainContentLayout from "@/components/layout/contentLayout";

const Portfolio = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  return (
    <>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>Projeto de Geração de Imagens com Inteligência Artificial - OpenAI DALL·E 3</title>
        <meta name="title" content="Projeto de Geração de Imagens com Inteligência Artificial - OpenAI DALL·E 3" />
        <meta name="description" content="Olá! Eu sou Jorge Luiz, desenvolvedor web especializado em frontend com ReactJS, NextJS e backend com Node.js. Explore meus projetos de sites modernos e aplicações robustas." />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:site_name" content="https://portfolio-projects-production.up.railway.app" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://portfolio-projects-production.up.railway.app/projetos/imageGenerator" />
        <meta property="og:title" content="Projeto de Geração de Imagens com Inteligência Artificial - OpenAI DALL·E 3" />
        <meta property="og:description" content="Conheça meu portfólio de projetos de desenvolvimento web! Trabalho com tecnologias como ReactJS, NextJS, Node.js e muito mais." />
        <meta property="og:image" content="https://portfolio-projects-production.up.railway.app/imageGeneration.jpg" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://portfolio-projects-production.up.railway.app/projetos/imageGenerator" />
        <meta property="twitter:title" content="Projeto de Geração de Imagens com Inteligência Artificial - OpenAI DALL·E 3" />
        <meta property="twitter:description" content="Olá! Eu sou Jorge Luiz, desenvolvedor web especializado em frontend com ReactJS, NextJS e backend com Node.js. Explore meus projetos de sites modernos e aplicações robustas." />
        <meta property="twitter:image" content="https://portfolio-projects-production.up.railway.app/imageGeneration.jpg" />
      </Head>
      <MainLayout>
        <SideBarLayout></SideBarLayout>
        <HeaderLayout></HeaderLayout>
        <MainContentLayout>
          <MainContent>
            <Title className="title-imageGenerator" onClick={() => isToggleOpen ? setIsToggleOpen(false) : setIsToggleOpen(true)}>Projeto: Gerador de Imagens com Visualização Ampliada - <span style={{ color: "blue" }}>mais...</span></Title>
            <P>
              <a style={{ fontSize: "24px", fontWeight: "800" }} href="https://image-generation.up.railway.app/home" target="_blank">🌎 Link do Projeto</a>
            </P>
            {isToggleOpen && (
              <>
                <div>
                  <P><strong>Descrição Geral</strong></P>
                  <P>Este projeto é uma aplicação web que permite a geração de imagens utilizando a API da OpenAI (DALL·E 3). A aplicação oferece uma interface interativa onde os usuários podem inserir descrições textuais e escolher um estilo para a imagem gerada. O sistema retorna a URL da imagem criada, permitindo que os usuários visualizem e utilizem o conteúdo conforme desejado.</P>
                  <H3>Funcionalidades</H3>
                  <H4>1. Gerador de Imagens</H4>
                  <Ul>
                    <Ul>
                      <Li><strong>Geração de imagens via OpenAI (DALL·E 3) –</strong> O usuário pode fornecer uma descrição detalhada e um estilo para obter uma imagem personalizada.</Li>
                      <Li><strong>Renderização dinâmica com EJS –</strong> O servidor usa a engine de templates EJS para renderizar páginas dinâmicas.</Li>
                      <Li><strong>Serviço de arquivos estáticos – </strong>O Express serve arquivos da pasta /public, incluindo scripts e estilos.</Li>
                      <Li><strong>API REST com Express.js –</strong> Comunicação eficiente entre frontend e backend.</Li>
                      <Li><strong>Redirecionamento de rotas –</strong> A página principal é automaticamente redirecionada para /home.</Li>
                      <Li><strong>Tratamento de erros –</strong> Respostas em JSON detalhadas quando há falhas na geração de imagens.</Li>
                      <Li><strong>CORS habilitado –</strong> Permite requisições de diferentes origens, essencial para integração com um frontend separado.</Li>
                      <Li><strong>Abertura automática do navegador – </strong> O servidor abre a aplicação automaticamente no navegador ao iniciar.</Li>
                    </Ul>
                  </Ul>

                  <H3>Tecnologias Utilizadas</H3>
                  <Ul>
                    <Li><strong>Node.js –</strong> Plataforma de execução para JavaScript no backend.</Li>
                    <Li><strong>Express.js –</strong> Framework leve para criação da API e gerenciamento de rotas.</Li>
                    <Li><strong>OpenAI API (DALL·E 3) –</strong> Para geração de imagens baseadas em descrições textuais.</Li>
                    <Li><strong>EJS (Embedded JavaScript) –</strong> Engine de templates para renderização de páginas dinâmicas.</Li>
                    <Li><strong>dotenv –</strong> Para gerenciamento seguro de variáveis de ambiente.</Li>
                    <Li><strong>CORS – </strong> Para permitir comunicação entre domínios diferentes.</Li>
                    <Li><strong>body-parser –</strong> Para interpretar requisições HTTP no formato JSON e URL-encoded.</Li>
                    <Li><strong>path & fileURLToPath –</strong> Para manipulação de diretórios e caminhos de arquivos.</Li>
                  </Ul>

                  <H4>Como Utilizar</H4>
                  <Ul>
                    <Li>1. Insira um texto no campo designado.</Li>
                    <Li>2. Escolha um estilo de imagem (vivid ou natural).</Li>
                    <Li>3. Clique em <strong>GERAR IMAGEM</strong> e aguarde o processamento.</Li>
                    <Li>4. Clique na imagem gerada para ampliá-la. Clique fora da imagem para fechar o zoom.</Li>
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

export default Portfolio;