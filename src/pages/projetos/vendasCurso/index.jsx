import { useState } from "react";
import Main from "@/components/layout/main";
import SideBar from "@/components/layout/sideBar";
import Header from "@/components/layout/header";
import Head from "next/head";
import { ContainerLayout } from "@/components/home";

import { Container, P, H3, Li, Ul, H4 } from "@/components/projetos/catalogo/styles";

const CursoOline = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  return (
    <>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>Criação de Plataforma EAD com Pagamentos Integrados e Acesso Protegido</title>
        <meta name="title" content="Criação de Plataforma EAD com Pagamentos Integrados e Acesso Protegido" />
        <meta name="description" content="Olá! Eu sou Jorge Luiz, desenvolvedor web especializado em frontend com ReactJS, NextJS e backend com Node.js. Explore meus projetos de sites modernos e aplicações robustas." />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:site_name" content="https://portfolio-projects-production.up.railway.app" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://portfolio-projects-production.up.railway.app/projetos/cursoOnline" />
        <meta property="og:title" content="Criação de Plataforma EAD com Pagamentos Integrados e Acesso Protegido" />
        <meta property="og:description" content="Conheça meu portfólio de projetos de desenvolvimento web! Trabalho com tecnologias como ReactJS, NextJS, Node.js e muito mais." />
        <meta property="og:image" content="https://portfolio-projects-production.up.railway.app/cursoOnline.jpg" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://portfolio-projects-production.up.railway.app/projetos/cursoOnline" />
        <meta property="twitter:title" content="Criação de Plataforma EAD com Pagamentos Integrados e Acesso Protegido" />
        <meta property="twitter:description" content="Olá! Eu sou Jorge Luiz, desenvolvedor web especializado em frontend com ReactJS, NextJS e backend com Node.js. Explore meus projetos de sites modernos e aplicações robustas." />
        <meta property="twitter:image" content="https://portfolio-projects-production.up.railway.app/cursoOnline.jpg" />
      </Head>
      <ContainerLayout>
        <SideBar></SideBar>
        <Header></Header>
        <Main>
          <Container>
            <H3 className="player-video-personalizado onClickH3" onClick={() => isToggleOpen ? setIsToggleOpen(false) : setIsToggleOpen(true)}>Projeto: Vendas de cursos - <span style={{ color: "blue" }}>Clique para ver mais</span>!</H3>
            <P>
              <a style={{ fontSize: "24px", fontWeight: "800" }} href="https://frontend-venda.up.railway.app" target="_blank">🌎 Link do Projeto</a>
            </P>
            {isToggleOpen && (
              <>
                <div>
                  <P><strong>📌 Visão Geral</strong></P>
                  <P>Este projeto é uma plataforma de cursos online onde os usuários podem <strong>se cadastrar, efetuar pagamentos e acessar conteúdos exclusivos</strong>. O sistema garante que apenas usuários autenticados e com pagamento confirmado tenham acesso às aulas, proporcionando uma experiência fluida e segura.</P>
                  <h2>🛠 Tecnologias Utilizadas</h2><br />
                  <H4>🔹 Frontend (React.js + Vite)</H4>
                  <Ul>
                    <Li><strong>React.js →</strong> Biblioteca para construção da interface interativa e reativa.</Li>
                    <Li><strong>React Router DOM →</strong> Gerenciamento de rotas e navegação protegida.</Li>
                    <Li><strong>Context API →</strong> Gerenciamento de estado para autenticação e status de pagamento.</Li>
                    <Li><strong>Axios →</strong> Consumo da API para autenticação e pagamentos.</Li>
                    <Li><strong>JWT-Decode →</strong> Decodificação do token JWT para validação da sessão do usuário.</Li>
                    <Li><strong>Styled Components →</strong> Estilização dinâmica com CSS-in-JS.</Li>
                    <Li><strong>Socket.io Client →</strong> Comunicação em tempo real (possível uso para notificações ou atualizações instantâneas).</Li>
                    {/* <Li><strong>Jest →</strong> Testes unitários para garantir a qualidade do código.</Li> */}
                    <Li><strong>LocalStorage →</strong> Persistência de autenticação e pagamento sem necessidade de login repetido.</Li>
                  </Ul>
                  <H4>🔹 Backend (Node.js + Express)</H4>
                  <Ul>
                    <Li><strong>Node.js →</strong> Para construção do backend.</Li>
                    <Li><strong>Express → </strong> Framework para criar as rotas e a estrutura do servidor.</Li>
                    <Li><strong>PostgreSQL →</strong> Banco de dados para armazenar usuários, pagamentos e cursos.</Li>
                    <Li><strong>JWT (JSON Web Token) →</strong> Autenticação segura via token.</Li>
                    <Li><strong>Bcrypt →</strong> Hashing de senhas para segurança dos usuários.</Li>
                    <Li><strong>Pagar.me API →</strong> Processamento de pagamentos via PIX, cartão e boleto.</Li>
                    <Li><strong>Socket.io →</strong> Para comunicação em tempo real e envio de notificações aos usuários.</Li>
                    <Li><strong>Axios →</strong> Para realizar requisições HTTP dentro do sistema.</Li>
                    <Li><strong>CORS →</strong> Para permitir requisições de diferentes origens.</Li>
                    <Li><strong>Body-parser →</strong> Para lidar com os dados das requisições no formato JSON.</Li>
                    <Li><strong>Dotenv →</strong> Para gerenciamento de variáveis de ambiente.</Li>
                    <Li><strong>pg →</strong> Biblioteca para conectar e interagir com o PostgreSQL.</Li>
                  </Ul>
                  <h2>🚀 Funcionalidades Principai</h2><br />
                  <h3>🔑 Autenticação Segura</h3><br />
                  <Ul>
                    <Li>✅ Cadastro e login com <strong>senhas protegidas (Bcrypt).</strong></Li>
                    <Li>✅ Autenticação via <strong>JWT</strong>, garantindo sessões seguras.</Li>
                    <Li>✅ Persistência de login via <strong>LocalStorage</strong>.</Li>
                    <Li>✅ Decodificação do JWT com <strong>jwt-decode</strong> para validar sessão.</Li>
                  </Ul>
                  <h2>💳 Pagamento e Acesso a Cursos</h2><br />
                  <Ul>
                    <Li>✅ Integração com <strong>Pagar.me API</strong> para processar pagamentos via <strong>PIX, cartão e boleto</strong>.</Li>
                    <Li>✅ Controle de acesso a vídeos com base no <strong>status de pagamento</strong>.</Li>
                    <Li>✅ Redirecionamento automático para página de pagamento se necessário.</Li>
                  </Ul>
                  <h2>📡 Comunicação em Tempo Real</h2><br />
                  <Ul>
                    <Li>✅ <strong>Socket.io Client →</strong> Possível implementação de notificações em tempo real, chat entre usuários ou atualizações automáticas de status.</Li>
                  </Ul>
                  <h2>🔄 Experiência de Usuário Aprimorada</h2><br />
                  <Ul>
                    <Li>✅ UI responsiva e estilizada com <strong>Styled Components</strong>.</Li>
                    <Li>✅ <strong>Mensagens de erro amigáveis</strong> para login e pagamento.</Li>
                    <Li>✅ <strong>Feedback visual</strong> para status de pagamento.</Li>
                  </Ul>
                  <Ul>
                    <Li><strong>Responsividade:</strong> A interface foi projetada para funcionar bem em dispositivos móveis e desktops, garantindo uma boa experiência de usuário em todas as telas.</Li>
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

export default CursoOline;