import { useState } from "react";
import Main from "@/components/layout/main";
import SideBar from "@/components/layout/sideBar";
import Header from "@/components/layout/header";
import Head from "next/head";

import { Container, P, H3, Li, Ul, H4, A } from "@/components/projetos/imageGenerator/styles";

const Portfolio = () => {
  const [isHamburguerOpen, setIsHamburguerOpen] = useState(false);
  const [isToggleOpen01, setIsToggleOpen01] = useState(false);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        {/* <!-- Primary Meta Tags --> */}
        <title>Jorge Luiz | Portfólio de Desenvolvimento Web | Frontend e Backend</title>
        <meta name="title" content="Jorge Luiz | Portfólio de Desenvolvimento Web | Frontend e Backend" />
        <meta name="description" content="Olá! Eu sou Jorge Luiz, desenvolvedor web especializado em frontend com ReactJS, NextJS e backend com Node.js. Explore meus projetos de sites modernos e aplicações robustas." />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:site_name" content="https://portfolio-projects-production.up.railway.app" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://portfolio-projects-production.up.railway.app/projetos/imageGenerator" />
        <meta property="og:title" content="Jorge Luiz | Portfólio de Desenvolvimento Web | Frontend e Backend" />
        <meta property="og:description" content="Conheça meu portfólio de projetos de desenvolvimento web! Trabalho com tecnologias como ReactJS, NextJS, Node.js e muito mais." />
        <meta property="og:image" content="https://portfolio-projects-production.up.railway.app/imageGeneration.jpg" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://portfolio-projects-production.up.railway.app/projetos/imageGenerator" />
        <meta property="twitter:title" content="Jorge Luiz | Portfólio de Desenvolvimento Web | Frontend e Backend" />
        <meta property="twitter:description" content="Olá! Eu sou Jorge Luiz, desenvolvedor web especializado em frontend com ReactJS, NextJS e backend com Node.js. Explore meus projetos de sites modernos e aplicações robustas." />
        <meta property="twitter:image" content="https://portfolio-projects-production.up.railway.app/imageGeneration.jpg" />
      </Head>
      <div style={{ display: "flex" }}>
        <SideBar isHamburguerOpen={isHamburguerOpen} setIsHamburguerOpen={setIsHamburguerOpen}></SideBar>
        <Main>
          <Header isHamburguerOpen={isHamburguerOpen} setIsHamburguerOpen={setIsHamburguerOpen}></Header>
          <Container>
            <H3 className="player-video-personalizado onClickH3" onClick={() => isToggleOpen01 ? setIsToggleOpen01(false) : setIsToggleOpen01(true)}>Descubra o Projeto: Gerador de Imagens com Visualização Ampliada - Clique para ver mais!</H3>
            <P>
              <a href="https://image-generation-0208a7513db8.herokuapp.com/home" target="_blank">direcionar para página</a>
            </P>
            {isToggleOpen01 && (
              <>
                <div>
                  <P><strong>Descrição Geral</strong></P>
                  <P>Este projeto permite que o usuário gere imagens com base em um texto fornecido e escolha entre dois estilos de visualização: {'"vivid"'} e {'"natural"'}. As imagens geradas podem ser ampliadas com um recurso de zoom que melhora a experiência do usuário. Além disso, o sistema inclui validação de entrada e feedback visual, como a exibição de um spinner enquanto a imagem está sendo processada.</P>
                  <H3>Principais Funcionalidades</H3>
                  <H4>1. Gerador de Imagens</H4>
                  <Ul>
                    <Li>O usuário pode inserir um texto e selecionar um estilo para gerar imagens personalizadas.</Li>
                    <Li>As imagens são processadas via uma requisição para o backend.</Li>
                  </Ul>
                  <H4>2. Zoom nas Imagens</H4>
                  <Ul>
                    <Li>As imagens geradas podem ser ampliadas para melhor visualização com um overlay escuro.</Li>
                    <Li>O zoom é ativado ao clicar na imagem e pode ser desativado clicando fora dela.</Li>
                  </Ul>
                  <H4>3. Validação e Feedback</H4>
                  <Ul>
                    <Li>Campos obrigatórios têm bordas vermelhas para destacar entradas inválidas.</Li>
                    <Li>Um spinner é exibido enquanto a imagem está sendo gerada, melhorando a usabilidade.</Li>
                  </Ul>
                  <H4>4. Responsividade</H4>
                  <Ul>
                    <Li>Layout adaptável para dispositivos móveis com redimensionamento de imagens e reorganização de componentes.</Li>
                  </Ul>
                  <H3>Tecnologias Utilizadas</H3>
                  <Ul>
                    <Li><strong>HTML5:</strong> Estrutura do projeto, incluindo áreas para texto, botões e imagens.</Li>
                    <Li><strong>CSS3:</strong></Li>
                    <Ul style={{ margin: "0 0 0 20px" }}>
                      <Li>Design responsivo com media queries.</Li>
                      <Li>Efeitos de transição para zoom e feedback visual (overlay e spinner).
                      </Li>
                    </Ul>
                    <Li><strong>JavaScript:</strong></Li>
                    <Ul style={{ margin: "0 0 0 20px" }}>
                      <Li>Manipulação de DOM para interatividade.</Li>
                      <Li>Validação de entradas do usuário.</Li>
                      <Li>Fetch API para comunicação com o backend.</Li>
                    </Ul>
                    <Li style={{ lineHeight: "28px" }}><strong>Backend:</strong> Endpoint /image-generation para processamento e retorno da imagem (detalhes do backend não fornecidos, mas pode ser detalhado).</Li>
                  </Ul>
                  <H3>Destaques Técnicos</H3>
                  <H4>1. Feedback Visual</H4>
                  <Ul>
                    <Li>O uso de um spinner durante a geração de imagens evita que o usuário pense que o sistema está inativo.</Li>
                    <Li>O overlay no zoom oferece uma experiência imersiva e intuitiva.</Li>
                  </Ul>
                  <H4>2. Validação de Entradas</H4>
                  <Ul>
                    <Li>Simples e eficaz, evita erros no envio de requisições ao backend.</Li>
                  </Ul>
                  <H4>3. Manutenção e Escalabilidade</H4>
                  <Ul>
                    <Li>Código modular e fácil de ajustar para incluir novos estilos de imagem ou funcionalidades.</Li>
                  </Ul>
                  <H4>4. Responsividade</H4>
                  <Ul>
                    <Li>Design que funciona bem em diferentes dispositivos, de desktops a smartphones.</Li>
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
          </Container>
        </Main>
      </div>
    </>
  );
};

export default Portfolio;