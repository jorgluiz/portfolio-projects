import { useState, useEffect } from "react";
import Main from "@/components/layout/main";
import SideBar from "@/components/layout/sideBar";
import Header from "@/components/layout/header";
// import whatsapp2 from "@/public/whatsapp2.png";
import Image from 'next/image';
import portfolioImg from "../../assets/images/portfolio.png";
import stripelogo from "../../assets/images/stripeLogo.png";
import carousel from "../../assets/images/carousel.png";
import analyzeFeelings from "../../assets/images/analyze-feelings.png";
import stream from "../../assets/images/stream.png";
import youtube from "../../assets/images/youtube.png";
import imageGeneration from "../../assets/images/imageGeneration.png";
import catalogo from "../../assets/images/catalogo.png";
import ytmp3 from "../../assets/images/ytmp3.png";
import ytmp4 from "../../assets/images/ytmp4.png";
import cursoOline from "../../assets/images/bem-vindo.png";

import Link from "next/link";

import { portfolioImgBlur } from "@/utils/portfolio";
import { stripeImgBlur } from "@/utils/stripe";
import { carouseImgBlur } from "@/utils/carousel";
import { analyzeImgBlur } from "@/utils/analyze";
import { streamImgBlur } from "@/utils/stream";
import { imageGenerationImgBlur } from "@/utils/imageGeneration";
import { youtubeImgBlur } from "@/utils/youtube";
import { catalogoImgBlur } from "@/utils/catalogo";
import { ytmp3ImgBlur } from "@/utils/ytmp3";
import { ytmp4ImgBlur } from "@/utils/ytmp4";
import { cursoOnlineImgBlur } from "@/utils/ytmp4";

import { GridContainer, Container } from "@/components/projetos/";

import { ContainerLayout } from "@/components/projetos/layout";

// 1. Efeito de redimensionamento da tela
const Projetos = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHamburguerOpen, setIsHamburguerOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1250) {
        setIsHamburguerOpen(true); // Aberto para telas grandes
      } else {
        setIsHamburguerOpen(false); // Fechado para telas menores
      }
    };

    // Inicializa o estado correto com base no tamanho da tela ao carregar o componente
    handleResize();

    // Adiciona o evento de redimensionamento
    window.addEventListener('resize', handleResize);

    // Limpa o evento ao desmontar o componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setIsHamburguerOpen]);

  // 2. Efeito de carregamento (define isLoaded como true)
  useEffect(() => {
    setIsLoaded(true); // Define isLoaded como true quando o componente é montado
  }, []); // Executa apenas uma vez, após a montagem do componente

  // Se não estiver carregado, não renderiza o conteúdo
  if (!isLoaded) return null; // Aguarda o carregamento

  return (
    <>
      <ContainerLayout>
        <SideBar isHamburguerOpen={isHamburguerOpen} setIsHamburguerOpen={setIsHamburguerOpen}></SideBar>
        <Header isHamburguerOpen={isHamburguerOpen} setIsHamburguerOpen={setIsHamburguerOpen}></Header>
        <Main>
          <div style={{ padding: "43px 40px 40px 40px " }}>
            <p style={{ lineHeight: "28px", fontSize: "18px" }}> <strong> Sou um desenvolvedor Full Stack  </strong> apaixonado por tecnologia e inovação. Minha jornada na programação é moldada pelos projetos que desenvolvi, cada um deles representando um novo aprendizado e a aplicação de diferentes tecnologias para resolver problemas reais. Minha experiência é prática, baseada em desafios concretos que exigiram desde a construção de interfaces modernas e responsivas até a implementação de sistemas robustos no backend.</p><br />
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
              <Image src="/whatsapp2.png" width={25} height={25} alt="img" />
              <a style={{ paddingLeft: "20px" }} href="https://wa.me/5581987604690?text=Olá,%20gostaria%20de%20mais%20informações!">Fale comigo no WhatsApp</a>
              {/* <p style={{ paddingLeft: "20px" }}>(81) 9 8760-4690</p> */}
            </div>
          </div>
        </Main>
      </ContainerLayout>
    </>
  );
};

export default Projetos;