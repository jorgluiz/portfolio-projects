import { useState } from "react";
import Main from "@/components/layout/main";
import SideBar from "@/components/layout/sideBar";
import Header from "@/components/layout/header";
import Head from "next/head";

import { Container, P, H3, Li, Ul, H4, A } from "@/components/projetos/ytformp4/styles";

const Ytformp4 = () => {
  const [isHamburguerOpen, setIsHamburguerOpen] = useState(false);
  const [isToggleOpen01, setIsToggleOpen01] = useState(false);

  return (
    <>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>Jorge Luiz | Portfólio de Desenvolvimento Web | Frontend e Backend</title>
        <meta name="title" content="Jorge Luiz | Portfólio de Desenvolvimento Web | Frontend e Backend" />
        <meta name="description" content="Olá! Eu sou Jorge Luiz, desenvolvedor web especializado em frontend com ReactJS, NextJS e backend com Node.js. Explore meus projetos de sites modernos e aplicações robustas." />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:site_name" content="https://portfolio-projects-production.up.railway.app" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://portfolio-projects-production.up.railway.app/projetos/ytformp4" />
        <meta property="og:title" content="Jorge Luiz | Portfólio de Desenvolvimento Web | Frontend e Backend" />
        <meta property="og:description" content="Conheça meu portfólio de projetos de desenvolvimento web! Trabalho com tecnologias como ReactJS, NextJS, Node.js e muito mais." />
        <meta property="og:image" content="https://portfolio-projects-production.up.railway.app/ytmp4.jpg" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://portfolio-projects-production.up.railway.app/projetos/ytformp4" />
        <meta property="twitter:title" content="Jorge Luiz | Portfólio de Desenvolvimento Web | Frontend e Backend" />
        <meta property="twitter:description" content="Olá! Eu sou Jorge Luiz, desenvolvedor web especializado em frontend com ReactJS, NextJS e backend com Node.js. Explore meus projetos de sites modernos e aplicações robustas." />
        <meta property="twitter:image" content="https://portfolio-projects-production.up.railway.app/ytmp4.jpg" />
      </Head>
      <div style={{ display: "flex" }}>
        <SideBar isHamburguerOpen={isHamburguerOpen} setIsHamburguerOpen={setIsHamburguerOpen}></SideBar>
        <Main>
          <Header isHamburguerOpen={isHamburguerOpen} setIsHamburguerOpen={setIsHamburguerOpen}></Header>
          <Container>
            <H3 className="player-video-personalizado onClickH3" onClick={() => isToggleOpen01 ? setIsToggleOpen01(false) : setIsToggleOpen01(true)}>🎥 Descubra o Projeto: Download de Vídeo do YouTube - Clique para ver mais!</H3>
            <P>
              <a href="https://yt-download-mp3-frontend-d80c3323b80c.herokuapp.com" target="_blank">direcionar para página</a>
            </P>
            {isToggleOpen01 && (
              <>
                <div>
                  <H4>1. Resumo do Projeto</H4>
                  <P>Este projeto é uma aplicação backend que oferece funcionalidade de download e combinação de vídeos e áudios do YouTube. Ele utiliza tecnologias como Express.js, Socket.io, FFmpeg e bibliotecas específicas para interação com vídeos do YouTube, permitindo que os usuários escolham a qualidade desejada, façam o download e combinem áudio e vídeo em um arquivo MP4 final.</P>
                  <Ul>
                    <Li><strong>2. Funcionalidades Principais</strong></Li>
                    <Li style={{ marginLeft: "10px" }}>Uso do <strong>youtube-dl-exec</strong> para baixar áudio e vídeo com base no formato escolhido.</Li>
                    <Li style={{ marginLeft: "10px" }}>Gerenciamento de erros e validação de URLs do YouTube.</Li>
                  </Ul>
                  <Ul>
                    <Li><strong>Combinação de Áudio e Vídeo:</strong></Li>
                    <Li style={{ marginLeft: "10px" }}>Integração com FFmpeg para combinar os arquivos baixados em um único arquivo MP4.</Li>
                    <Li style={{ marginLeft: "10px" }}>Configuração de presets rápidos para otimizar o processamento.</Li>
                  </Ul>
                  <Ul>
                    <Li><strong>Feedback em Tempo Real:</strong></Li>
                    <Li style={{ marginLeft: "10px" }}>Utilização de Socket.io para fornecer atualizações de progresso do processo ao cliente em tempo real.</Li>
                  </Ul>
                  <Ul>
                    <Li><strong>Gerenciamento de Arquivos Temporários:</strong></Li>
                    <Li style={{ marginLeft: "10px" }}>Armazenamento de arquivos em diretórios temporários e exclusão após o download.</Li>
                  </Ul>
                  <Ul>
                    <Li><strong>Controle de Concorrência:</strong></Li>
                    <Li style={{ marginLeft: "10px" }}>Uso de um controle de estado <strong>(isProcessing)</strong> para evitar múltiplas requisições simultâneas e garantir que apenas uma operação seja processada por vez.</Li>
                  </Ul>
                  <H4>3. Tecnologias e Ferramentas Utilizadas</H4>
                  <Ul>
                    <Li><strong>Backend:</strong></Li>
                    <Li style={{ marginLeft: "10px" }}>Node.js com Express.js.</Li>
                    <Li style={{ marginLeft: "10px" }}>Bibliotecas específicas: <strong>youtube-dl-exec</strong>, <strong>@distube/ytdl-core</strong>, <strong>fluent-ffmpeg.</strong></Li>
                    <Li><strong>Processamento de Vídeo:</strong></Li>
                    <Li style={{ marginLeft: "10px" }}>FFmpeg para manipulação de arquivos multimídia.</Li>
                    <Li><strong>Comunicação em Tempo Real:</strong></Li>
                    <Li style={{ marginLeft: "10px" }}>Socket.io para fornecer atualizações do progresso ao cliente.</Li>
                    <Li><strong>Gerenciamento de Arquivos:</strong></Li>
                    <Li style={{ marginLeft: "10px" }}><strong>fs</strong> para manipulação de arquivos e diretórios temporários.</Li>
                    <Li><strong>Configurações e Segurança:</strong></Li>
                    <Li style={{ marginLeft: "10px" }}><strong>dotenv</strong> para gerenciamento de variáveis de ambiente.</Li>
                    <Li style={{ marginLeft: "10px" }}>Configuração de CORS para controlar o acesso ao servidor.</Li>
                  </Ul>
                  <H4>4. Destaques do Código</H4>
                  <Ul>
                    <Li><strong>Uso de Bibliotecas Avançadas:</strong></Li>
                    <Li style={{ marginLeft: "10px" }}>Integração de bibliotecas como <strong>youtube-dl-exec</strong> e <strong>@distube/ytdl-core</strong>  para lidar com a lógica de download diretamente da API do YouTube.</Li>
                    <Li><strong>Desempenho e Otimização:</strong></Li>
                    <Li style={{ marginLeft: "10px" }}>Configuração de -preset ultrafast no FFmpeg para acelerar o processamento.</Li>
                    <Li style={{ marginLeft: "10px" }}>Implementação de lógica para evitar processamento redundante ao filtrar formatos de vídeo.</Li>
                    <Li><strong>Feedback ao Usuário:</strong></Li>
                    <Li style={{ marginLeft: "10px" }}>Uso de eventos do FFmpeg para rastrear progresso e transmitir essas informações via Socket.io.</Li>
                  </Ul>
                  <H4>5. Possíveis Melhorias</H4>
                  <Ul>
                    <Li>1. <strong>Segurança:</strong></Li>
                    <Li style={{ marginLeft: "10px" }}>Validar melhor as entradas do cliente para evitar possíveis vulnerabilidades de injeção.</Li>
                    <Li style={{ marginLeft: "10px" }}>Implementar autenticação ou controle de acesso para proteger as rotas.</Li>
                    <Li>2. <strong>Escalabilidade:</strong></Li>
                    <Li style={{ marginLeft: "10px" }}>Gerenciar melhor o estado isProcessing para suportar múltiplas requisições de diferentes usuários simultaneamente, possivelmente usando filas de trabalho.</Li>
                    <Li>3. <strong>Manutenção:</strong></Li>
                    <Li style={{ marginLeft: "10px" }}>Modularizar o código para melhorar a legibilidade e facilitar a manutenção futura.</Li>
                    <Li style={{ marginLeft: "10px" }}>Separar lógica de rotas, middlewares e processamento de arquivos em pastas distintas.</Li>
                    <Li>4. <strong>Monitoramento e Logging:</strong></Li>
                    <Li style={{ marginLeft: "10px" }}>Adicionar uma camada de logging com ferramentas como <strong>winston</strong> ou <strong>pino</strong> para monitorar erros e processos.</Li>
                    <Li>5. <strong>Experiência do Usuário:</strong></Li>
                    <Li style={{ marginLeft: "10px" }}>Oferecer mais opções de formatos e resoluções.</Li>
                    <Li style={{ marginLeft: "10px" }}>Melhorar a interface de feedback ao cliente, talvez adicionando notificações mais detalhadas ou históricos.</Li>
                  </Ul>
                </div>
              </>
            )}
          </Container>
        </Main>
      </div>
    </>
  );
};

export default Ytformp4;