import { useState } from "react";
import Main from "@/components/layout/main";
import SideBar from "@/components/layout/sideBar";
import Header from "@/components/layout/header";
import Head from "next/head";
import { ContainerLayout } from "@/components/projetos/layout";

import { Container, P, H3, Li, Ul, H4, A } from "@/components/projetos/portfolio/styles";

const Portfolio = () => {
  const [isHamburguerOpen, setIsHamburguerOpen] = useState(false);
  const [isToggleOpen01, setIsToggleOpen01] = useState(false);
  const [isToggleOpen02, setIsToggleOpen02] = useState(false);
  const [isToggleOpen03, setIsToggleOpen03] = useState(false);
  const [isToggleOpen04, setIsToggleOpen04] = useState(false);

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
        <meta property="og:url" content="https://portfolio-projects-production.up.railway.app/projetos/portfolio" />
        <meta property="og:title" content="Jorge Luiz | Portfólio de Desenvolvimento Web | Frontend e Backend" />
        <meta property="og:description" content="Conheça meu portfólio de projetos de desenvolvimento web! Trabalho com tecnologias como ReactJS, NextJS, Node.js e muito mais." />
        <meta property="og:image" content="https://portfolio-projects-production.up.railway.app/portfolio.jpg" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://portfolio-projects-production.up.railway.app/projetos/portfolio" />
        <meta property="twitter:title" content="Jorge Luiz | Portfólio de Desenvolvimento Web | Frontend e Backend" />
        <meta property="twitter:description" content="Olá! Eu sou Jorge Luiz, desenvolvedor web especializado em frontend com ReactJS, NextJS e backend com Node.js. Explore meus projetos de sites modernos e aplicações robustas." />
        <meta property="twitter:image" content="https://portfolio-projects-production.up.railway.app/portfolio.jpg" />
      </Head>
      <ContainerLayout>
        <SideBar isHamburguerOpen={isHamburguerOpen} setIsHamburguerOpen={setIsHamburguerOpen}></SideBar>
        <Header isHamburguerOpen={isHamburguerOpen} setIsHamburguerOpen={setIsHamburguerOpen}></Header>
        <Main>
          <Container>
            <H3 className="player-video-personalizado onClickH3" onClick={() => isToggleOpen01 ? setIsToggleOpen01(false) : setIsToggleOpen01(true)}>Descubra o Projeto: Player de Vídeo Personalizado - Clique para ver mais!</H3>
            <P>
              <a style={{ fontSize: "24px", fontWeight: "800" }} href="" target="_blank">🌎 Link do Projeto</a>
            </P>
            {isToggleOpen01 && (
              <>
                <div>
                  <P><strong>Descrição Geral</strong></P>
                  <P>Este projeto é um player de vídeo completo e interativo, desenvolvido com React.js, com funcionalidades que replicam a experiência imersiva de grandes plataformas de streaming, como YouTube e Netflix. Focado na facilidade de uso e personalização, ele oferece controle de volume, barra de progresso interativa, reprodução em lista (playlist) e configurações personalizáveis de qualidade e velocidade.</P>
                  <P><strong>Objetivo</strong></P>
                  <P>Criar uma experiência de reprodução de vídeo otimizada e acessível, com ênfase em uma interface de usuário (UI) intuitiva e interativa. Este player foi projetado para permitir uma navegação suave e intuitiva, enquanto oferece ao usuário controle total sobre a reprodução e personalização de sua experiência.</P>
                  <H3>Principais Funcionalidades</H3>
                  <H4>1. Controles de Reprodução</H4>
                  <Ul>
                    <Li>Botões de play/pause, avançar para o próximo vídeo e repetir.</Li>
                    <Li>Transição suave entre vídeos da playlist.</Li>
                  </Ul>
                  <H4>2. Barra de Progresso Personalizada</H4>
                  <Ul>
                    <Li>Permite ao usuário arrastar o playhead para avançar ou retroceder.</Li>
                    <Li>Exibe tempo atual e duração total, com indicadores de horas, minutos e segundos.</Li>
                  </Ul>
                  <H4>3. Controle de Volume Avançado</H4>
                  <Ul>
                    <Li>Ajuste progressivo do volume com botão de mute e desmute.</Li>
                    <Li>Indicador visual do volume (volume baixo, médio e mudo), atualizado dinamicamente.</Li>
                  </Ul>
                  <H4>4. Modo Tela Cheia e Miniatura</H4>
                  <Ul>
                    <Li>Alternância entre modos de tela cheia e minimizada.</Li>
                    <Li>Ícones personalizáveis para indicar o status.</Li>
                  </Ul>
                  <H4>5. Configurações Personalizáveis</H4>
                  <Ul>
                    <Li>Opções para ajuste de qualidade, legendas e velocidade.</Li>
                    <Li>Interface para exibir o menu de configurações com controles intuitivos.</Li>
                  </Ul>
                  <H4>5. Comentários e Playlist</H4>
                  <Ul>
                    <Li>Área para comentários abaixo do vídeo, criando um ambiente de interação.</Li>
                    <Li>Playlist interativa à direita para navegação rápida entre vídeos relacionados.</Li>
                  </Ul>
                </div>
                <div style={{ height: "1px", width: "100%", backgroundColor: "#DDDDD", margin: "30px 0 30px 0" }}></div>
                <H3>UI e UX</H3>
                <H4>Design Focado em Experiência do Usuário (UX)</H4>
                <Ul>
                  <Li><strong>Acessibilidade e Facilidade de Navegação:</strong> A interface é projetada para ser intuitiva, com botões bem posicionados e funcionalidades facilmente acessíveis.</Li>
                  <Li><strong>Experiência Visual e Interativa:</strong> Transições suaves e animações de hover que tornam o player visualmente agradável e responsivo às ações do usuário.</Li>
                  <Li><strong>Layout Responsivo:</strong> Adaptado para uma experiência coesa em diferentes dispositivos, mantendo a estrutura organizada e eficiente em qualquer resolução.</Li>
                </Ul>
                <H4>Interface de Usuário (UI)</H4>
                <Ul>
                  <Li>Estética Profissional e Minimalista: Elementos visuais inspirados em plataformas populares, com ícones claros e uma paleta de cores neutra.</Li>
                  <Li>Elementos Interativos com Feedback Visual: Animações sutis e feedback imediato ao interagir com a barra de progresso, controles de volume e botões de reprodução.</Li>
                </Ul>
                <div style={{ height: "1px", width: "100%", backgroundColor: "#DDDDD", margin: "30px 0 30px 0" }}></div>
                <H3>Tecnologias Utilizadas</H3>
                <Ul>
                  <Li><strong>Frontend:</strong> React.js</Li>
                  <Li><strong>Funcionalidades de Vídeo:</strong> HTML5 Video API, com manipulação de eventos (onMouseMove, onProgress, etc.)</Li>
                  <Li><strong>Estado e Controle de Contexto:</strong> Hooks personalizados e useRef para otimização de performance e gerenciamento do estado do player.</Li>
                  <Li><strong>Controle de Volume e Progresso:</strong> useState, onClick, onChange e onMouseDown para controle preciso das ações do usuário.</Li>
                </Ul>
                <div style={{ height: "1px", width: "100%", backgroundColor: "#DDDDD", margin: "30px 0 30px 0" }}></div>
                <H3>Aprendizados e Desafios</H3>
                <H4>O desenvolvimento deste projeto trouxe um aprofundamento em:</H4>
                <Ul>
                  <Li><strong>Gerenciamento de Estado Avançado:</strong> Controlar múltiplos estados de vídeo, como tempo de reprodução, volume, e progresso da playlist, foi fundamental. </Li>
                  <Li><strong>Manuseio de Eventos para Interatividade:</strong> Implementação de eventos de mouse para uma UI dinâmica e interativa.</Li>
                  <Li><strong>Interface de Usuário Acessível:</strong> Adicionar elementos que melhorem a experiência, como legendas e configurações de qualidade, mantendo a usabilidade intuitiva.</Li>
                </Ul>
                <H3>Conclusão</H3>
                <P>Este projeto demonstra habilidades avançadas em desenvolvimento frontend com React, especialmente na criação de componentes altamente interativos e personalizados para reprodução de vídeo. A experiência do usuário foi cuidadosamente planejada para ser intuitiva e agradável, trazendo uma interface visualmente refinada e uma experiência de vídeo premium.</P>
              </>
            )}
            {/* ---------------------------------------------------------------------------- */}
            <H3 className="player-video-personalizado onClickH3" onClick={() => isToggleOpen02 ? setIsToggleOpen02(false) : setIsToggleOpen02(true)}>Explore o Projeto: Catálogo de Carros  - Clique Aqui!</H3>
            <P>
              <a style={{ fontSize: "24px", fontWeight: "800" }} href="" target="_blank">🌎 Link do Projeto</a>
            </P>
            {isToggleOpen02 && (
              <>
                <div>
                  <P><strong>Descrição Geral</strong></P>
                  <P>
                    O Catálogo de Carros é uma aplicação web que permite aos usuários explorar e escolher modelos de carros conforme suas preferências. A interface é intuitiva e moderna, com opções de filtragem de modelos e acesso rápido às principais funcionalidades, como catálogo, informações sobre a empresa e redes sociais.
                  </P>
                  <P><strong>Funcionalidades</strong></P>
                </div>
                <Ul>
                  <Li><strong>Navegação intuitiva:</strong>Um menu de navegação que inclui links para o catálogo, informações sobre a empresa, funcionalidades do sistema e login para acesso personalizado.</Li>
                  <Li><strong>Catálogo de Veículos:</strong>Exibe uma lista de modelos de carros com imagens, descrições e botões de ação para engajamento (I want this!).</Li>
                  <Li><strong>Busca e Filtragem:</strong>Campo de busca para facilitar a localização de modelos específicos de veículos.
                    Seção de Sobre: Informações sobre a empresa e sua visão de mobilidade e tecnologia.</Li>
                  <Li><strong>Funcionalidades do Sistema:</strong>Seção de Features com destaque para as principais funcionalidades oferecidas pela plataforma.</Li>
                  <Li><strong>Rodapé com Informações de Contato:</strong>Inclui links para redes sociais, detalhes de contato e informações da empresa.</Li>
                </Ul>
                <P><strong>Tecnologias Utilizadas</strong></P>
                <Ul>
                  <Li><strong>Front-end</strong></Li>
                  <Li style={{ marginLeft: "20px" }}><strong>React.js</strong>para construção de componentes modulares e reutilizáveis.</Li>
                  <Li style={{ marginLeft: "20px" }}><strong>CSS </strong>para estilização da interface, garantindo responsividade e uma experiência visual agradável.</Li>
                  <Li><strong>Imagens e Ícones</strong> </Li>
                  <Li style={{ marginLeft: "20px" }}><strong>Imagens SVG:</strong>e PNG para representar os veículos, funcionalidades, e redes sociais, aprimorando a usabilidade.</Li>
                  <Li style={{ marginLeft: "20px" }}>Integração de ícones e logotipos para melhor engajamento dos usuários.</Li>
                </Ul>
                <P><strong>Estrutura de Código</strong></P>
                <P>O código é estruturado em componentes reutilizáveis para facilitar a manutenção e escalabilidade da aplicação. Os principais elementos, como <strong>header</strong>, <strong>catalogo</strong>, <strong>about</strong>, <strong>features</strong>, e <strong>footer</strong>, foram organizados para melhorar a experiência do usuário e otimizar o tempo de carregamento.</P>
                <P><strong>Demonstração Visual</strong></P>
                <P>Exemplos visuais de como o usuário pode navegar e interagir com o catálogo:</P>
                <Ul>
                  <Li><strong>1. Header com navegação e login:</strong> Interface de cabeçalho com opções de login e navegação fluida entre as seções.</Li>
                  <Li><strong>2. Cartões de Carros:</strong>Cada carro é representado com imagem, descrição e botões de ação.</Li>
                  <Li><strong>3. Rodapé com Links Sociais:</strong>Links para redes sociais e dados de contato, promovendo conexão e engajamento.</Li>
                </Ul>
                <P><strong>Potencial de Expansão</strong></P>
                <P>Esse projeto pode ser expandido com:</P>
                <Ul>
                  <Li>Integração com APIs de estoque de carros para listagem dinâmica.</Li>
                  <Li>Filtros avançados de pesquisa, incluindo preços e ano de fabricação.</Li>
                  <Li>Sistema de autenticação completo para personalização e histórico de favoritos.</Li>
                </Ul>
              </>
            )}
          </Container>
        </Main>
      </ContainerLayout>
    </>
  );
};

export default Portfolio;