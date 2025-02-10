import { useState } from "react";
import Main from "@/components/layout/main";
import SideBar from "@/components/layout/sideBar";
import Header from "@/components/layout/header";
import Head from "next/head";
import { ContainerLayout } from "@/components/home";

import { Container, P, H3, Li, Ul, H4, A } from "@/components/projetos/ytformp3/styles";

const Ytformp3 = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  return (
    <>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>Transcrever e Resumir Vídeos do YouTube com IA – OpenAI Whisper + GPT-4</title>
        <meta name="title" content="Transcrever e Resumir Vídeos do YouTube com IA – OpenAI Whisper + GPT-4" />
        <meta name="description" content="Olá! Eu sou Jorge Luiz, desenvolvedor web especializado em frontend com ReactJS, NextJS e backend com Node.js. Explore meus projetos de sites modernos e aplicações robustas." />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:site_name" content="https://portfolio-projects-production.up.railway.app" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://portfolio-projects-production.up.railway.app/projetos/ytformp3" />
        <meta property="og:title" content="Transcrever e Resumir Vídeos do YouTube com IA – OpenAI Whisper + GPT-4" />
        <meta property="og:description" content="Conheça meu portfólio de projetos de desenvolvimento web! Trabalho com tecnologias como ReactJS, NextJS, Node.js e muito mais." />
        <meta property="og:image" content="https://portfolio-projects-production.up.railway.app/ytmp3.jpg" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://portfolio-projects-production.up.railway.app/projetos/ytformp3" />
        <meta property="twitter:title" content="Transcrever e Resumir Vídeos do YouTube com IA – OpenAI Whisper + GPT-4" />
        <meta property="twitter:description" content="Olá! Eu sou Jorge Luiz, desenvolvedor web especializado em frontend com ReactJS, NextJS e backend com Node.js. Explore meus projetos de sites modernos e aplicações robustas." />
        <meta property="twitter:image" content="https://portfolio-projects-production.up.railway.app/ytmp3.jpg" />
      </Head>
      <ContainerLayout>
        <SideBar></SideBar>
        <Header></Header>
        <Main>
          <Container>
            <H3 className="player-video-personalizado onClickH3" onClick={() => isToggleOpen ? setIsToggleOpen(false) : setIsToggleOpen(true)}>🎥 Projeto: Transcrever o áudio de vídeos do YouTube e resumir - <span style={{ color: "blue" }}>Clique para ver mais</span>!</H3>
            <P>
              <a style={{ fontSize: "24px", fontWeight: "800" }} href="" target="_blank">🌎 Link do Projeto</a>
            </P>
            <H3>Observação importante: para ter acesso backend, precisa ativar ngrok localmente!</H3>
            {isToggleOpen && (
              <>
                <div>
                  <H4>📄 Descrição do Projeto</H4>
                  <P>Esse projeto tem como objetivo principal transcrever o áudio de vídeos do YouTube e enviar essa transcrição para uma IA, que irá resumir o conteúdo do vídeo. Utilizando a API Whisper da OpenAI, o sistema consegue gerar transcrições precisas a partir do áudio de vídeos, e com o uso do modelo GPT-4, ele pode criar resumos concisos e detalhados dos vídeos, permitindo que o usuário compreenda o conteúdo sem precisar assistir ao vídeo inteiro.</P>
                  <H3>Funcionalidades</H3>
                  <Ul>
                    <Li><strong>Transcrição de Áudio</strong>: O projeto utiliza a API Whisper da OpenAI para transcrever arquivos de áudio (MP3) em texto.</Li>
                    <Li><strong>Processamento de Texto</strong>: Após a transcrição, o texto é dividido em partes menores (chunks), processado e resumido pela API GPT-4 da OpenAI para gerar resumos concisos.</Li>
                    <Li><strong>Validação de Vídeo</strong>: Implementação de funções para verificar a duração de vídeos, garantindo que não ultrapassem um limite de tempo (10 minutos ou 600 segundos).</Li>
                    <Li><strong>Armazenamento e Leitura de Arquivos</strong>: O código manipula arquivos locais, realizando a leitura e gravação de arquivos de áudio e outras informações necessárias para o processamento.</Li>
                    <Li><strong>Resumos Inteligentes</strong>: O conteúdo transcrito é resumido automaticamente, descartando informações irrelevantes e destacando os pontos principais de maneira eficiente.</Li>
                    <Li><strong>Renderização de Views com Handlebars</strong>: Utilização da biblioteca <strong>hbs</strong> (Handlebars) para renderizar as views no lado do servidor, possibilitando a criação de templates dinâmicos e a exibição de informações como transcrições e resumos de forma estruturada e personalizada.</Li>
                  </Ul>
                  <H3>Tecnologias Utilizadas</H3>
                  <Ul>
                    <Li><strong>Node.js</strong>: Ambiente de execução JavaScript no servidor.</Li>
                    <Li><strong>OpenAI API</strong>: Usada para transcrição (Whisper) e resumo de texto (GPT-4).</Li>
                    <Li><strong>File System (fs)</strong>: Módulo do Node.js utilizado para ler e escrever arquivos no servidor.</Li>
                    <Li><strong>dotenv</strong>: Para gerenciar variáveis de ambiente de maneira segura.</Li>
                    <Li><strong>youtubedl-exec</strong>: Para obter informações de vídeos (como a duração) antes de realizar a transcrição.</Li>
                    <Li><strong>hbs (Handlebars)</strong>: Biblioteca de templates para gerar views dinâmicas e eficientes no servidor, proporcionando uma maneira simples de estruturar o HTML com dados dinâmicos, como transcrições e resumos.</Li>
                    <Li><strong>Express.js</strong>: Framework para criar uma API RESTful e renderizar páginas com Handlebars.</Li>
                  </Ul>
                  <H3>Arquitetura do Projeto</H3>
                  <P>O projeto segue uma estrutura simples e organizada para garantir a escalabilidade e manutenção do código:</P>
                  <Ul>
                    <Li><strong>src/downloads</strong>: Pasta responsável por armazenar os arquivos de áudio baixados.</Li>
                    <Li><strong>src/routes</strong>: Roteamento da aplicação, onde as requisições são tratadas.</Li>
                    <Li><strong>src/utils</strong>: Funções auxiliares para processamento de áudio e manipulação de texto.</Li>
                    <Li><strong>src/public/images/views</strong>: Recursos estáticos, como imagens ou views.</Li>
                    <Li><strong>src/views</strong>: Diretório onde os templates <strong>hbs</strong> são armazenados e renderizados com dados dinâmicos.</Li>
                  </Ul>
                  <H3>Como Funciona</H3>
                  <Ul>
                    <Li><strong>Upload de Arquivo</strong>: O arquivo de áudio (geralmente MP3) é enviado para o servidor.</Li>
                    <Li><strong>Transcrição de Áudio</strong>: O arquivo é enviado para a API Whisper da OpenAI, que gera a transcrição.</Li>
                    <Li><strong>Processamento de Texto</strong>: O texto gerado é dividido em partes (chunks) e enviado para o modelo GPT-4 da OpenAI, que resume o conteúdo.</Li>
                    <Li><strong>Validação de Vídeo</strong>: Se o conteúdo transcrito for de um vídeo, a duração do vídeo é verificada para garantir que não ultrapasse o limite de 10 minutos.</Li>
                    <Li><strong>Armazenamento e Exibição</strong>: Os resumos gerados são armazenados e podem ser exibidos nas páginas dinâmicas renderizadas com hbs, exibindo informações como transcrições completas e resumos.</Li>
                    <Li><strong>Renderização com Handlebars</strong>: O servidor utiliza <strong>hbs</strong> para renderizar as páginas de maneira dinâmica, permitindo que os dados das transcrições e resumos sejam integrados de forma flexível aos templates HTML.</Li>
                  </Ul>
                  <H3>Desafios Enfrentados</H3>
                  <Ul>
                    <Li><strong>Divisão de Texto</strong>: Para processar textos grandes, foi necessário dividir as transcrições em pequenos blocos para que a API da OpenAI não excedesse o limite de tokens.</Li>
                    <Li><strong>Manuseio de Arquivos</strong>: A manipulação de arquivos locais, como o envio de áudio para a API e armazenamento das transcrições, exigiu cuidados para garantir que o sistema fosse eficiente e seguro.</Li>
                    <Li><strong>Resumos Coerentes</strong>: Ajustar o modelo da OpenAI para gerar resumos concisos e úteis foi um desafio, pois a IA deve filtrar informações relevantes e eliminar partes irrelevantes de maneira eficaz.</Li>
                    <Li><strong>Integração de Views Dinâmicas</strong>: Utilizar <strong>hbs</strong> de maneira eficiente para gerar templates dinâmicos com dados vindos da transcrição e do resumo foi um processo de aprendizado, garantindo que as views fossem renderizadas corretamente.</Li>
                  </Ul>
                  <H3>Resultados Esperados</H3>
                  <H4>O projeto visa oferecer uma solução simples e eficaz para transcrever e resumir conteúdos de áudio, como palestras, vídeos e podcasts, automatizando as tarefas de transcrição e resumo com alta precisão. Além disso, a integração com hbs permite que o sistema exiba as transcrições e resumos de maneira clara e estruturada em páginas dinâmicas.</H4>
                </div>
              </>
            )}
          </Container>
        </Main>
      </ContainerLayout>
    </>
  );
};

export default Ytformp3;