import { useState } from "react";
import Main from "@/components/layout/main";
import SideBar from "@/components/layout/sideBar";
import Header from "@/components/layout/header";
import Head from "next/head";
import { ContainerLayout } from "@/components/home";

import { Container, P, H3, Li, Ul, H4, A } from "@/components/projetos/ytformp4/styles";

const Ytformp4 = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  return (
    <>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>Baixar Vídeos do YouTube em MP4 com Nosso Conversor</title>
        <meta name="title" content="Baixar Vídeos do YouTube em MP4 com Nosso Conversor" />
        <meta name="description" content="Olá! Eu sou Jorge Luiz, desenvolvedor web especializado em frontend com ReactJS, NextJS e backend com Node.js. Explore meus projetos de sites modernos e aplicações robustas." />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:site_name" content="https://portfolio-projects-production.up.railway.app" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://portfolio-projects-production.up.railway.app/projetos/ytformp4" />
        <meta property="og:title" content="Baixar Vídeos do YouTube em MP4 com Nosso Conversor" />
        <meta property="og:description" content="Conheça meu portfólio de projetos de desenvolvimento web! Trabalho com tecnologias como ReactJS, NextJS, Node.js e muito mais." />
        <meta property="og:image" content="https://portfolio-projects-production.up.railway.app/ytmp4.jpg" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://portfolio-projects-production.up.railway.app/projetos/ytformp4" />
        <meta property="twitter:title" content="Baixar Vídeos do YouTube em MP4 com Nosso Conversor" />
        <meta property="twitter:description" content="Olá! Eu sou Jorge Luiz, desenvolvedor web especializado em frontend com ReactJS, NextJS e backend com Node.js. Explore meus projetos de sites modernos e aplicações robustas." />
        <meta property="twitter:image" content="https://portfolio-projects-production.up.railway.app/ytmp4.jpg" />
      </Head>
      <ContainerLayout>
        <SideBar></SideBar>
        <Header></Header>
        <Main>
          <Container>
            <H3 className="player-video-personalizado onClickH3" onClick={() => isToggleOpen ? setIsToggleOpen(false) : setIsToggleOpen(true)}>🎥 Projeto: YouTube Video Downloader e combiner (fluent-ffmpeg) - <span style={{ color: "blue" }}>Clique para ver mais</span>!</H3>
            <P>
              <a style={{ fontSize: "24px", fontWeight: "800" }} href="" target="_blank">🌎 Link do Projeto</a>
            </P>
            {isToggleOpen && (
              <>
                <div>
                  <P><strong>Descrição:</strong> Desenvolvi uma aplicação backend utilizando Node.js e Express.js que permite a recuperação de informações de vídeos do YouTube e o download de áudio e vídeo em diferentes formatos e qualidades. O sistema integra o poder de bibliotecas como <strong>youtube-dl-exec</strong>, <strong>@distube/ytdl-core</strong>, e <strong>fluent-ffmpeg</strong> para baixar, combinar e entregar um arquivo MP4 final para o usuário.</P>
                  <P>Com uma interface baseada em Socket.io, o projeto oferece feedback em tempo real sobre o progresso do download e do processo de combinação de arquivos. A aplicação também gerencia o armazenamento temporário dos arquivos e garante o desempenho com configurações de FFmpeg otimizadas para velocidade.</P>
                  <H3>Tecnologias Usadas:</H3>
                  <Ul>
                    <Li><strong>Node.js</strong> com <strong>Express.js</strong></Li>
                    <Li><strong>youtube-dl-exec</strong> e <strong>@distube/ytdl-core</strong> para interação com o YouTube</Li>
                    <Li><strong>fluent-ffmpeg</strong> para processamento de vídeos</Li>
                    <Li><strong>Socket.io</strong> para feedback em tempo real</Li>
                    <Li><strong>CORS</strong> e <strong>dotenv</strong> para segurança e configuração</Li>
                  </Ul>
                  <H3>Destaques:</H3>
                  <Ul>
                    <Li>Gerenciamento eficiente de concorrência, evitando requisições paralelas.</Li>
                    <Li>Processamento rápido de vídeos com FFmpeg.</Li>
                    <Li>Arquitetura modular e escalável, com otimizações para desempenho e experiência do usuário.</Li>
                  </Ul>
                  <H3>2. Descrição para Entrevistas ou Apresentações (Detalhada e Técnica)</H3>
                  <P><strong>Contexto:</strong> Durante o desenvolvimento desse projeto, meu objetivo foi criar uma aplicação robusta capaz de baixar e combinar vídeos e áudios do YouTube em um único arquivo MP4, com a flexibilidade de escolher o formato e a qualidade do arquivo. A aplicação foi construída utilizando o Node.js com Express.js, além de bibliotecas específicas para interação com o YouTube e processamento de vídeos.</P>
                  <H3>Funcionalidades:</H3>
                  <Ul>
                    <Li><strong>1. Recuperação de Informações de Vídeos:</strong> Utilizando @distube/ytdl-core, a aplicação recupera detalhes como título, miniatura e formatos de áudio e vídeo disponíveis do YouTube.</Li>
                    <Li><strong>2. Download de Áudio e Vídeo:</strong> Com youtube-dl-exec, o sistema realiza o download do áudio e vídeo separadamente, considerando o formato escolhido pelo usuário.</Li>
                    <Li><strong>3. Combinação de Vídeo e Áudio:</strong> Após o download, os arquivos de áudio e vídeo são combinados em um único arquivo MP4 utilizando <strong>FFmpeg</strong>, com a qualidade de codificação otimizada para a velocidade de processamento.</Li>
                    <Li><strong>4. Feedback em Tempo Real:</strong> O progresso do processo é transmitido em tempo real ao usuário via <strong>Socket.io</strong>, permitindo uma experiência mais interativa.</Li>
                    <Li><strong>5. Gerenciamento de Arquivos Temporários:</strong> Os arquivos baixados são armazenados temporariamente em diretórios locais, sendo deletados automaticamente após o download do arquivo final.</Li>
                  </Ul>
                  <H3>Desafios Enfrentados e Soluções:</H3>
                  <Ul>
                    <Li><strong>Concorrência de Requisições:</strong> Para garantir que múltiplos usuários possam fazer requisições simultâneas sem afetar o desempenho, implementei uma variável de controle isProcessing, evitando que múltiplos downloads e combinações aconteçam ao mesmo tempo.</Li>
                    <Li><strong>Otimização de Desempenho:</strong> Ajustei as configurações do FFmpeg para utilizar o preset {'"ultrafast"'}, proporcionando um processamento mais rápido de vídeos, sem perder a qualidade final.</Li>
                    <Li><strong>Segurança e Configuração:</strong> A aplicação foi configurada com dotenv para gerenciar variáveis de ambiente e CORS para controlar as origens permitidas nas requisições.</Li>
                  </Ul>
                  <H3>Tecnologias e Ferramentas:</H3>
                  <Ul>
                    <Li><strong>Node.js, Express.js</strong></Li>
                    <Li><strong>youtube-dl-exec, @distube/ytdl-core</strong></Li>
                    <Li><strong>fluent-ffmpeg</strong> para processamento de vídeo</Li>
                    <Li><strong>Socket.io</strong> para comunicação em tempo real</Li>
                    <Li><strong>CORS</strong> e <strong>dotenv</strong> para configurações de segurança</Li>
                  </Ul>
                  <P><strong>Impacto:</strong> Esse projeto me permitiu explorar tanto a parte de manipulação de mídia quanto de controle de estado e feedback em tempo real, além de me proporcionar um bom entendimento sobre a integração de várias bibliotecas para a construção de um sistema coeso e eficiente.</P>
                </div>
              </>
            )}
          </Container>
        </Main>
      </ContainerLayout>
    </>
  );
};

export default Ytformp4;