import Image from 'next/image';
import Head from "next/head";
import { useGlobalState } from "../../context/GlobalStateContext";

import { MainLayout, MainContent } from "@/components/layout/mainLayout";
import SideBarLayout from "@/components/layout/sideBarLayout";
import HeaderLayout from "@/components/layout/headerLayout";
import MainContentLayout from "@/components/layout/contentLayout";
import Overlay from '@/components/overlay';


const Projetos = () => {
  const { isLoaded, isHamburguerOpen, setIsHamburguerOpen } = useGlobalState();

  // Função para fechar sidebar clicando fora
  const handleOverlayClick = () => setIsHamburguerOpen(false);
  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth >= 1250) {
  //       setIsHamburguerOpen(true); // Aberto para telas grandes
  //     } else {
  //       setIsHamburguerOpen(false); // Fechado para telas menores
  //     }
  //   };

  //   // Inicializa o estado correto com base no tamanho da tela ao carregar o componente
  //   handleResize();

  //   // Adiciona o evento de redimensionamento
  //   window.addEventListener('resize', handleResize);

  //   // Limpa o evento ao desmontar o componente
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, [setIsHamburguerOpen]);

  return (
    <>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>Portfólio de Projetos | Desenvolvedor Full Stack com React, Next.js e Node.js</title>
        <meta name="title" content="Portfólio de Projetos | Desenvolvedor Full Stack com React, Next.js e Node.js" />
        <meta name="description" content="Olá! Eu sou Jorge Luiz, desenvolvedor web especializado em frontend com ReactJS, NextJS e backend com Node.js. Explore meus projetos de sites modernos e aplicações robustas." />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:site_name" content="https://portfolio-projects-production.up.railway.app" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://portfolio-projects-production.up.railway.app/sobre" />
        <meta property="og:title" content="Portfólio de Projetos | Desenvolvedor Full Stack com React, Next.js e Node.js" />
        <meta property="og:description" content="Conheça meu portfólio de projetos de desenvolvimento web! Trabalho com tecnologias como ReactJS, NextJS, Node.js e muito mais." />
        <meta property="og:image" content="https://portfolio-projects-production.up.railway.app/perfil.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://portfolio-projects-production.up.railway.app/sobre" />
        <meta property="twitter:title" content="Portfólio de Projetos | Desenvolvedor Full Stack com React, Next.js e Node.js" />
        <meta property="twitter:description" content="Olá! Eu sou Jorge Luiz, desenvolvedor web especializado em frontend com ReactJS, NextJS e backend com Node.js. Explore meus projetos de sites modernos e aplicações robustas." />
        <meta property="twitter:image" content="https://portfolio-projects-production.up.railway.app/perfil.png" />
      </Head>

      {!isLoaded ? null : (
        <>
          {isHamburguerOpen && (
            <Overlay onClick={handleOverlayClick}></Overlay>
          )}
          <MainLayout>
            <SideBarLayout></SideBarLayout>
            <HeaderLayout></HeaderLayout>
            <MainContentLayout>
              <MainContent>
                <div>
                  <p style={{ lineHeight: "28px", fontSize: "18px" }}> <strong style={{ fontSize: "20px" }}> Sou um desenvolvedor Full Stack  </strong> apaixonado por tecnologia e inovação. Minha jornada na programação é moldada pelos projetos que desenvolvi, cada um deles representando um novo aprendizado e a aplicação de diferentes tecnologias para resolver problemas reais. Minha experiência é prática, baseada em desafios concretos que exigiram desde a construção de interfaces modernas e responsivas até a implementação de sistemas robustos no backend.</p><br />
                  <h2>Minhas Habilidades</h2><br />
                  <h3>Frontend</h3><br />
                  <ul style={{ lineHeight: "28px" }}>
                    <li>Desenvolvimento de interfaces responsivas e dinâmicas com <strong>React.js e Next.js</strong></li>
                    <li>Estilização avançada com <strong>Styled Components e CSS puro</strong></li>
                    <li>Gerenciamento de estado global com <strong>Context API</strong></li>
                    <li>Implementação de componentes interativos como <strong>players de vídeo e carrosséis de imagens</strong></li>
                    <li>Otimização para <strong>SEO e performance</strong></li>
                  </ul><br />
                  <h3>Backend</h3><br />
                  <ul style={{ lineHeight: "28px" }}>
                    <li>Desenvolvimento de APIs escaláveis com Node.js e Express</li>
                    <li>Autenticação segura com JWT e Bcrypt</li>
                    <li>Integração com bancos de dados como PostgreSQL e Firebase</li>
                    <li>Implementação de pagamentos com Stripe API e Pagar.me API</li>
                    <li>Web Scraping e análise de dados com Puppeteer</li>
                    <li>Processamento de vídeos e áudios com FFmpeg e youtube-dl</li>
                    <li>Comunicação em tempo real com Socket.io</li>
                  </ul><br />
                  <h3>Projetos de Destaque</h3><br />
                  <h4>Plataforma de Cursos Online</h4><br />
                  <p style={{ lineHeight: "28px" }}>Desenvolvi uma plataforma completa para cursos online, que inclui autenticação segura, processamento de pagamentos e restrição de acesso a conteúdos exclusivos para usuários pagos.
                    <strong>Tecnologias</strong>: React.js, Context API, JWT, Node.js, Express, PostgreSQL, Pagar.me API, Socket.io.</p><br />
                  <h4>Player de Vídeo Interativo</h4><br />
                  <p style={{ lineHeight: "28px" }}>Criação de um player de vídeo customizado inspirado em grandes plataformas de streaming, com funcionalidades como controle de volume, barra de progresso interativa e suporte a playlists.
                    <strong>Tecnologias</strong>: React.js</p><br />
                  <h4>Aplicação de Análise de Sentimentos no Twitter</h4><br />
                  <p style={{ lineHeight: "28px" }}>Um sistema que coleta e analisa tweets para identificar sentimentos e tendências, utilizando web scraping e processamento de texto.
                    <strong>Tecnologias</strong>: Express.js, Puppeteer, OpenAI API.</p><br />
                  <h4>Geração de Imagens com Inteligência Artificial</h4><br />
                  <p style={{ lineHeight: "28px" }}>Uma aplicação interativa para a geração de imagens a partir de descrições textuais, utilizando a API do DALL·E.
                    <strong>Tecnologias</strong>: Node.js, Express.js, OpenAI API, EJS.</p><br />
                  <h4>Portfólio Pessoal</h4><br />
                  <p style={{ lineHeight: "28px" }}>Desenvolvimento do meu próprio portfólio utilizando <strong>Next.js</strong> e <strong>ReactJS</strong>, com otimização para SEO e um design responsivo para destacar minhas habilidades e projetos.</p><br />
                  <h2>Meu Diferencial</h2><br />
                  <ul style={{ lineHeight: "28px" }}>
                    <li><strong>Aprendizado Contínuo</strong>: Busco sempre aprimorar minhas habilidades através de projetos desafiadores.</li>
                    <li><strong>Soluções Escaláveis</strong>: Tenho experiência na construção de aplicações robustas e bem estruturadas.</li>
                    <li><strong>Foco na Experiência do Usuário</strong>: Prezo por interfaces intuitivas e fluidas, garantindo usabilidade e acessibilidade.</li>
                    <li><strong>Mentalidade Full Stack</strong>: Tenho a capacidade de atuar tanto no frontend quanto no backend, garantindo integração eficiente entre ambas as partes.</li>
                  </ul><br /><br />
                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
                    <h3 style={{ paddingRight: "20px" }}>Se deseja saber mais sobre meu trabalho, entre em contato comigo</h3>
                    <Image src="/whatsapp.png" width={25} height={25} alt="img" />
                    <a style={{ paddingLeft: "20px" }} href="https://wa.me/5581987604690?text=Olá,%20acabei%20de%20ver%20seu%20portfólio%20e%20gostaria%20de%20saber%20mais%20sobre%20seu%20trabalho!">Fale comigo no WhatsApp</a>
                    {/* <p style={{ paddingLeft: "20px" }}>(81) 9 8760-4690</p> */}
                  </div>
                </div>
              </MainContent>
            </MainContentLayout>
          </MainLayout>
        </>
      )}
    </>
  );
};

export default Projetos;