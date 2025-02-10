import { useState } from "react";
import Main from "@/components/layout/main";
import SideBar from "@/components/layout/sideBar";
import Header from "@/components/layout/header";
import Head from "next/head";
import { ContainerLayout } from "@/components/home";

import { Container, P, H3, Li, Ul, H4 } from "@/components/projetos/carousel/styles";

const Carousel = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  return (
    <>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>Carrossel de Imagens Responsivo com Controles Personalizados</title>
        <meta name="title" content="Carrossel de Imagens Responsivo com Controles Personalizados" />
        <meta name="description" content="Olá! Eu sou Jorge Luiz, desenvolvedor web especializado em frontend com ReactJS, NextJS e backend com Node.js. Explore meus projetos de sites modernos e aplicações robustas." />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:site_name" content="https://portfolio-projects-production.up.railway.app" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://portfolio-projects-production.up.railway.app/projetos/carousel" />
        <meta property="og:title" content="Carrossel de Imagens Responsivo com Controles Personalizados" />
        <meta property="og:description" content="Conheça meu portfólio de projetos de desenvolvimento web! Trabalho com tecnologias como ReactJS, NextJS, Node.js e muito mais." />
        <meta property="og:image" content="https://portfolio-projects-production.up.railway.app/carousel.jpg" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://portfolio-projects-production.up.railway.app/projetos/carousel" />
        <meta property="twitter:title" content="Carrossel de Imagens Responsivo com Controles Personalizados" />
        <meta property="twitter:description" content="Olá! Eu sou Jorge Luiz, desenvolvedor web especializado em frontend com ReactJS, NextJS e backend com Node.js. Explore meus projetos de sites modernos e aplicações robustas." />
        <meta property="twitter:image" content="https://portfolio-projects-production.up.railway.app/carousel.jpg" />
      </Head>
      <ContainerLayout>
        <SideBar ></SideBar>
        <Header ></Header>
        <Main>
          <Container>
            <H3 className="player-video-personalizado onClickH3" onClick={() => isToggleOpen ? setIsToggleOpen(false) : setIsToggleOpen(true)}>Projeto: Carousel de Imagens com Controles Personalizados - <span style={{ color: "blue" }}>Clique para ver mais</span>!</H3>
            <P>
              <a style={{ fontSize: "24px", fontWeight: "800" }} href="" target="_blank">🌎 Link do Projeto</a>
            </P>
            {isToggleOpen && (
              <>
                <div>
                  <P><strong>Visão Geral</strong></P>
                  <P>Esse projeto implementa um carrossel de imagens responsivo e dinâmico que permite ao usuário navegar entre os slides, alternar entre play/pause, e ajustar a rotação automática das imagens.</P>
                  <H3>Funcionalidades</H3>
                  <Ul>
                    <Li><strong>Rotação Automática:</strong> O carrossel avança automaticamente após 7 segundos em cada slide. O tempo pode ser personalizado.</Li>
                    <Li><strong>Navegação Manual:</strong> Usuários podem navegar entre os slides utilizando botões de seta para anterior e próximo.</Li>
                    <Li><strong>Pausa e Retomada:</strong> Função de pausa para interromper a rotação automática e retomar quando desejado.</Li>
                    <Li><strong>Controle de Transição:</strong> Tempo de transição CSS controlado para uma navegação suave.</Li>
                    <Li><strong>Looping Infinito:</strong> O carrossel retorna ao início automaticamente quando chega ao último slide e vice-versa.</Li>
                  </Ul>
                  <H3>Tecnologias Utilizadas</H3>
                  <Ul>
                    <Li><strong>React:</strong> Estrutura principal para o desenvolvimento do componente.</Li>
                    <Li><strong>Next.js:</strong>Framework utilizado para otimizar a renderização e facilitar o roteamento de imagens. </Li>
                    <Li><strong>styled-components:</strong> Estilização dinâmica dos componentes, garantindo consistência e reutilização de estilos.</Li>
                  </Ul>
                  <H3>Método de Renderização das Imagens</H3>
                  <Ul>
                    <Li style={{ lineHeight: "28px" }}><strong>Importação com o Next.js Image Component:</strong> As imagens são renderizadas usando o componente Image do Next.js, que oferece carregamento otimizado, dimensionamento responsivo e um tempo de carregamento reduzido. Este método melhora o desempenho, garantindo que imagens não carregadas fora da tela sejam exibidas de maneira eficiente.</Li>
                  </Ul>
                  <H3>Trechos do Código</H3>
                  <Ul>
                    <Li><strong>Início do Slider:</strong> Inicia a rotação das imagens usando um intervalo ajustável para definir o tempo de cada slide.</Li>
                    <Li><strong>Função de Pausa e Retomada:</strong> Permite ao usuário controlar manualmente o carrossel, interrompendo a rotação automática e retomando-a quando desejado.</Li>
                    <Li><strong>Controle de Transição:</strong> Utiliza um estado para controlar a transição entre slides e garantir uma navegação suave.</Li>
                  </Ul>
                </div>
              </>
            )}
          </Container>
        </Main>
      </ContainerLayout>
    </>
  );
};

export default Carousel;