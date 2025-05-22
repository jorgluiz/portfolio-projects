import { useState } from "react";
import Head from "next/head";

import Title from "@/components/common/title";

import { P, H3, H4, Ul, Li } from "@/components/projetos/style";

import { MainLayout, MainContent } from "@/components/layout/mainLayout";
import SideBarLayout from "@/components/layout/sideBarLayout";
import HeaderLayout from "@/components/layout/headerLayout";
import MainContentLayout from "@/components/layout/contentLayout";

const Ytformp3 = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  return (
    <>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>YouTube para MP3: Baixe audio com Nosso Conversor Rápido e Seguro</title>
        <meta name="title" content="YouTube para MP3: Baixe audio com Nosso Conversor Rápido e Seguro" />
        <meta name="description" content="Olá! Eu sou Jorge Luiz, desenvolvedor web especializado em frontend com ReactJS, NextJS e backend com Node.js. Explore meus projetos de sites modernos e aplicações robustas." />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:site_name" content="https://portfolio-projects-production.up.railway.app" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://portfolio-projects-production.up.railway.app/projetos/ytformp3" />
        <meta property="og:title" content="YouTube para MP3: Baixe audio com Nosso Conversor Rápido e Seguro" />
        <meta property="og:description" content="Conheça meu portfólio de projetos de desenvolvimento web! Trabalho com tecnologias como ReactJS, NextJS, Node.js e muito mais." />
        <meta property="og:image" content="https://portfolio-projects-production.up.railway.app/ytmp3.jpg" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://portfolio-projects-production.up.railway.app/projetos/ytformp3" />
        <meta property="twitter:title" content="YouTube para MP3: Baixe audio com Nosso Conversor Rápido e Seguro" />
        <meta property="twitter:description" content="Olá! Eu sou Jorge Luiz, desenvolvedor web especializado em frontend com ReactJS, NextJS e backend com Node.js. Explore meus projetos de sites modernos e aplicações robustas." />
        <meta property="twitter:image" content="https://portfolio-projects-production.up.railway.app/ytmp3.jpg" />
      </Head>
      <MainLayout>
        <SideBarLayout></SideBarLayout>
        <HeaderLayout></HeaderLayout>
        <MainContentLayout>
          <MainContent>
            <Title className="title-ytformp3" onClick={() => isToggleOpen ? setIsToggleOpen(false) : setIsToggleOpen(true)}>🎥 Projeto: Download de Áudio do YouTube - <span style={{ color: "blue" }}>mais...</span></Title>
            <P>
              <a style={{ fontSize: "24px", fontWeight: "800" }} href="https://yt-download-mp3-frontend.up.railway.app/" target="_blank">🌎 Link do Projeto</a>
            </P>
            <H3>Observação importante: para ter acesso backend, precisa ativar ngrok localmente!</H3>
            {isToggleOpen && (
              <>
                <div>
                  <H3>Descrição Geral</H3>
                  <P>Este projeto é uma aplicação backend desenvolvida com Node.js e Express, que permite aos usuários baixar o áudio de vídeos do YouTube no formato MP3. Ele é projetado para oferecer uma experiência rápida e amigável, com suporte a metadados como título e thumbnail do vídeo.</P>
                  <H3>🛠️ Tecnologias</H3>
                  <P><strong>Frontend:</strong></P>
                  <Ul>
                    <Li><strong>Download de Áudio:</strong> Transforma vídeos do YouTube em arquivos MP3 prontos para download.</Li>
                    <Li><strong>Metadados Incluídos:</strong> O título do vídeo e a imagem da thumbnail são incorporados como cabeçalhos personalizados na resposta.</Li>
                    <Li><strong>Validação de URL:</strong> Verifica se a URL fornecida é válida antes de iniciar o download.</Li>
                    <Li><strong>Filtro de Qualidade:</strong> Seleciona automaticamente o melhor formato de áudio disponível.</Li>
                    <Li><strong>Suporte a Cookies:</strong> Utiliza cookies armazenados localmente para acessar conteúdos restritos, se necessário.</Li>
                    <Li><strong>Interface de Carregamento:</strong> Um círculo animado é exibido para indicar o progresso do download.</Li>
                  </Ul>
                  <H3>Bibliotecas e Dependências</H3>
                  <P><strong>Backend:</strong></P>
                  <Ul>
                    <Li><strong>Node.js:</strong> Ambiente de execução para JavaScript no servidor.</Li>
                    <Li><strong>Express:</strong> Framework para criação de APIs robustas e flexíveis.</Li>
                    <Li><strong>@distube/ytdl-core:</strong> Biblioteca para manipulação e extração de vídeos do YouTube.</Li>
                  </Ul>
                  <H4>Configuração e Utilitários:</H4>
                  <Ul>
                    <Li><strong>dotenv</strong> Gerenciamento de variáveis de ambiente.</Li>
                    <Li><strong>fs:</strong> Manipulação de arquivos locais.</Li>
                    <Li><strong>CORS:</strong> Controle de acesso para origens externas.</Li>
                  </Ul>
                  <H4>Estilização:</H4>
                  <Ul>
                    <Li><strong>HTML e CSS:</strong> Utilizados para criar uma interface simples e responsiva.</Li>
                  </Ul>
                  <P><strong>🚀 Projeto de Download de Áudio do YouTube com Frontend e Backend Integrados
                    Desenvolvi um projeto de download de áudio do YouTube utilizando youtube-dl-exec. Inicialmente, hospedei tanto o frontend quanto o backend no Heroku, mas enfrentei um grande desafio:
                    🔴 Erro ao baixar o áudio: "UnrecoverableError: Sign in to confirm you’re not a bot" – mesmo com cookies, o download não funcionava.</strong></P>
                  <P><strong>💡 Solução:
                    Decidi dividir a aplicação. O frontend permaneceu no Heroku, e o backend foi executado localmente, utilizando o Ngrok para criar um túnel reverso, permitindo que o frontend acessasse o backend via internet.</strong></P>
                  <P><strong>✅ Resultado:
                    O problema foi solucionado, e agora consigo realizar downloads de áudio de qualquer vídeo, independentemente do tamanho.</strong></P>
                  <P><strong>⚠️ Limitação: A versão gratuita do Ngrok oferece um limite de 1TB de transferência de dados.

                    Este projeto me desafiou a encontrar alternativas para contornar restrições de servidores e autenticações, ampliando minha experiência em deploy e soluções criativas em ambientes de hospedagem.</strong></P>
                </div>
              </>
            )}
          </MainContent>
        </MainContentLayout>
      </MainLayout>
    </>
  );
};

export default Ytformp3;