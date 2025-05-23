import { useState } from "react";
import Head from "next/head";

import Title from "@/components/common/title";

import { P, H3, Ul, Li } from "@/components/projetos/style";

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
        <title>Projeto de Coleta e Análise de Dados no Twitter com IA – Puppeteer e OpenAI</title>
        <meta name="title" content="Projeto de Coleta e Análise de Dados no Twitter com IA – Puppeteer e OpenAI" />
        <meta name="description" content="Olá! Eu sou Jorge Luiz, desenvolvedor web especializado em frontend com ReactJS, NextJS e backend com Node.js. Explore meus projetos de sites modernos e aplicações robustas." />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:site_name" content="https://portfolio-projects-production.up.railway.app" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://portfolio-projects-production.up.railway.app/projetos/dataAnalysisTwitter" />
        <meta property="og:title" content="Projeto de Coleta e Análise de Dados no Twitter com IA – Puppeteer e OpenAI" />
        <meta property="og:description" content="Conheça meu portfólio de projetos de desenvolvimento web! Trabalho com tecnologias como ReactJS, NextJS, Node.js e muito mais." />
        <meta property="og:image" content="https://portfolio-projects-production.up.railway.app/analyze-feelings.jpg" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://portfolio-projects-production.up.railway.app/projetos/dataAnalysisTwitter" />
        <meta property="twitter:title" content="Projeto de Coleta e Análise de Dados no Twitter com IA – Puppeteer e OpenAI" />
        <meta property="twitter:description" content="Olá! Eu sou Jorge Luiz, desenvolvedor web especializado em frontend com ReactJS, NextJS e backend com Node.js. Explore meus projetos de sites modernos e aplicações robustas." />
        <meta property="twitter:image" content="https://portfolio-projects-production.up.railway.app/analyze-feelings.jpg" />
      </Head>

      <MainLayout>
        <SideBarLayout></SideBarLayout>
        <HeaderLayout></HeaderLayout>
        <MainContentLayout>
          <MainContent>
            <Title className="title-dataAnalysisTwitter" onClick={() => isToggleOpen ? setIsToggleOpen(false) : setIsToggleOpen(true)}>Projeto: Análise Completa do Projeto de Coleta e Análise de Dados no Twitter usando Puppeteer e OpenAI - <span style={{ color: "blue" }}>mais...</span></Title>
            <P>
              <a style={{ fontSize: "24px", fontWeight: "800" }} href="https://analyze-feelings-twitter.up.railway.app/home" target="_blank">🌎 Link do Projeto</a>
            </P>
            {isToggleOpen && (
              <>
                <div>
                  <P><strong>Visão Geral</strong></P>
                  <P>Esse projeto desenvolve uma aplicação de coleta e análise de dados de mídias sociais (Twitter, especificamente) com foco em detecção de sentimentos e tendências. A aplicação integra diversas tecnologias para realizar web scraping, processar dados de texto, e apresentar resultados com uma interface interativa. Esse sistema demonstra um fluxo completo desde a captura até a análise e exibição dos dados, incluindo controles para carregamento, rolagem e renderização dos dados em uma página web.</P>
                  <H3>Funcionalidades e Fluxo da Aplicação</H3>
                  <Ul>
                    <Li><strong>Web Scraping e Automação:</strong> A função de rolagem na página simula o comportamento de um usuário, carregando mais dados conforme necessário, e usa o Puppeteer para rolar a página em incrementos aleatórios, contribuindo para uma experiência mais autêntica de scraping e prevenindo bloqueios de bots.</Li>
                    <Li><strong>Análise de Sentimento:</strong> Com o OpenAI, o sistema faz a análise do sentimento dos dados coletados, categorizando-os em positivo, negativo ou neutro. Esse uso de IA facilita insights valiosos sobre o conteúdo e o humor predominante das postagens coletadas.</Li>
                    <Li><strong>Integração de API:</strong> A OpenAI API é utilizada para processamento de linguagem natural (NLP) e análise de texto, enquanto a aplicação usa a Fetch API para realizar requisições assíncronas e processar as respostas do servidor, manipulando a interface de acordo com os resultados.</Li>
                  </Ul>
                  <H3>Tecnologias e Bibliotecas Utilizadas no Projeto</H3>
                  <Ul>
                    <Li className="list-style-type"><strong>1. Express</strong> Express é utilizado para configurar o servidor backend, que gerencia as requisições HTTP e responde com dados de análise ou resultados de scraping. Express facilita a criação de rotas e o gerenciamento das respostas do servidor de maneira eficiente.</Li>
                    <Li className="list-style-type"><strong>2. Puppeteer e Puppeteer-Extra:</strong></Li>
                    <Li><strong>Puppeteer-Extra:</strong> permite customizar o comportamento do Puppeteer, enquanto o <strong>puppeteer</strong> em si é uma biblioteca que automatiza o Chrome/Chromium, simulando ações de um usuário no navegador.</Li>
                    <Li>O projeto inclui o <strong>StealthPlugin</strong> (plugin de stealth) de Puppeteer-Extra, que ajuda a contornar bloqueios de bot por disfarçar o comportamento automatizado, tornando o scraper mais robusto para operações em sites com mecanismos anti-bot.</Li>
                    <Li className="list-style-type"><strong>3. dotenv</strong>A biblioteca dotenv é usada para gerenciar variáveis de ambiente, como a chave de API da OpenAI e outras configurações sensíveis, evitando que credenciais apareçam no código-fonte e melhorando a segurança do projeto.</Li>
                    <Li className="list-style-type"><strong>4. fs (File System):</strong>A biblioteca nativa do Node.js fs permite a manipulação de arquivos diretamente do backend, facilitando a criação, leitura e gravação de arquivos no sistema. Neste projeto, fs é essencial para gerenciar arquivos de dados coletados, arquivamento e descompactação.</Li>
                    <Li className="list-style-type"><strong>5. archiver</strong>A biblioteca archiver facilita a criação de arquivos ZIP, útil para compactar grandes volumes de dados coletados e prepará-los para armazenamento ou download.</Li>
                    <Li className="list-style-type"></Li>
                    <Li className="list-style-type"><strong>6. unzipper:</strong> unzipper é utilizado para descompactar arquivos ZIP, permitindo que o sistema extraia e processe arquivos previamente compactados, o que é vantajoso para manipulação de dados e backup de resultados.</Li>
                    <Li className="list-style-type"><strong>7. path:</strong> A biblioteca nativa path do Node.js ajuda a trabalhar com diretórios e caminhos de arquivos, essencial para a organização de arquivos e para lidar com caminhos de forma segura e consistente entre diferentes sistemas operacionais.</Li>
                    <Li className="list-style-type"></Li>
                    <Li className="list-style-type"><strong>8. open:</strong> A biblioteca open é usada para abrir URLs, arquivos ou aplicativos diretamente do backend. No contexto deste projeto, isso pode ser útil para facilitar a navegação ou abrir relatórios e visualizações de dados após a análise.</Li>
                    <Li className="list-style-type"><strong>9. OpenAI:</strong> O pacote openai integra a API de OpenAI ao projeto, permitindo a análise de sentimentos e processamento de linguagem natural (NLP). A integração com a API GPT possibilita que o sistema interprete os dados coletados, categorizando e oferecendo insights baseados no conteúdo textual.</Li>
                    <Li className="list-style-type"><strong>10. HBS:</strong> (Handlebars) é um motor de templates utilizado para gerar HTML dinâmico no servidor.</Li>
                    <Li className="list-style-type"><strong>11. Heroku:</strong> A aplicação é configurada para rodar no <strong>Heroku</strong>, utilizando variáveis de ambiente e configurações específicas para servidores sem interface gráfica, como o uso de <strong>Puppeteer</strong> em modo <strong>headless</strong> e com ajustes no sandbox para compatibilidade com Heroku.</Li>
                    <H3>Arquitetura e Organização do Projeto com as Novas Tecnologias</H3>
                    <P>Com essas tecnologias e bibliotecas, o projeto é organizado para oferecer um fluxo de coleta, processamento, análise e visualização dos dados com alto nível de automação e segurança:</P>
                    <Li className="list-style-type"><strong>Automação e Stealth com Puppeteer:</strong> A biblioteca <span>puppeteer-extra</span> com o StealthPlugin possibilita uma coleta de dados robusta, burlando alguns mecanismos anti-bot e permitindo uma coleta mais confiável.</Li>
                    <Li className="list-style-type"><strong>Processamento e Gerenciamento de Arquivos:</strong> <span>fs</span>, <span>archiver</span> e <span>unzipper</span> oferecem um ecossistema completo para manipulação de arquivos, desde a compactação até a extração e leitura, o que é valioso para manter os dados organizados e facilitar o arquivamento.</Li>
                    <Li className="list-style-type"><strong>API de OpenAI para Análise Avançada:</strong> Integrar OpenAI para análise de sentimentos expande as capacidades analíticas do projeto, aproveitando o processamento de linguagem natural para categorizar sentimentos e detectar tendências.</Li>
                    <Li className="list-style-type"><strong>Gerenciamento de Variáveis de Ambiente com dotenv:</strong></Li>
                    <Li className="list-style-type"><strong></strong> Variáveis sensíveis, como chaves de API, são tratadas de maneira segura com <span>dotenv</span>, essencial para ambientes de produção.</Li>
                    <Li className="list-style-type"><strong></strong></Li>
                  </Ul>
                  <H3>Conclusão</H3>
                  <P>Esse projeto é uma <strong>API</strong> e <strong>servidor que renderiza páginas estática</strong>, solução completa para a coleta e análise de sentimentos em mídias sociais. A combinação de tecnologias — desde o Puppeteer para scraping, OpenAI para NLP, e Express para o backend — resulta em uma ferramenta robusta para insights de mídia social em tempo real. </P>
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