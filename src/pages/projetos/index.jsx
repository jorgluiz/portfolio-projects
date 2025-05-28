import Head from "next/head";
import Image from 'next/image';
import Link from "next/link";
import { useGlobalState } from "../../context/GlobalStateContext";

import { Paragraph } from "@/styles/globalStyles";

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
import cursoOline from "../../assets/images/curso-online.png";
import ytAnalyzeVideo from "../../assets/images/yt-analyze-video.png";

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
// import { cursoOnlineImgBlur } from "@/utils/ytmp4";

import { MainLayout, MainContent } from "@/components/layout/mainLayout";
import SideBarLayout from "@/components/layout/sideBarLayout";
import HeaderLayout from "@/components/layout/headerLayout";
import MainContentLayout from "@/components/layout/contentLayout";
import Overlay from "@/components/overlay";

import { GridContainer } from "@/components/projetos/style";

// Definindo o estilo de cada tag de tecnologia
const tagStyle = {
  marginRight: "3px",
  backgroundColor: "#e4e7eb",
  color: "#52606D",
  borderRadius: "5px",
  padding: "2px 6px",
  fontSize: "12px"
};

const Projetos = ({ projetos }) => {
  const { isLoaded, isHamburguerOpen, setIsHamburguerOpen } = useGlobalState();

  // Função para fechar sidebar clicando fora
  const handleOverlayClick = () => setIsHamburguerOpen(false);


  return (
    <>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>Portfólio de Projetos Web | Tecnologias Modernas</title>
        <meta name="title" content="Portfólio de Projetos Web | Tecnologias Modernas" />
        <meta name="description" content="Olá! Eu sou Jorge Luiz, desenvolvedor web especializado em frontend com ReactJS, NextJS e backend com Node.js. Explore meus projetos de sites modernos e aplicações robustas." />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:site_name" content="https://portfolio-projects-production.up.railway.app" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://portfolio-projects-production.up.railway.app/projetos" />
        <meta property="og:title" content="Portfólio de Projetos Web | Tecnologias Modernas" />
        <meta property="og:description" content="Conheça meu portfólio de projetos de desenvolvimento web! Trabalho com tecnologias como ReactJS, NextJS, Node.js e muito mais." />
        <meta property="og:image" content="https://portfolio-projects-production.up.railway.app/perfil.jpg" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://portfolio-projects-production.up.railway.app/projetos" />
        <meta property="twitter:title" content="Portfólio de Projetos Web | Tecnologias Modernas" />
        <meta property="twitter:description" content="Olá! Eu sou Jorge Luiz, desenvolvedor web especializado em frontend com ReactJS, NextJS e backend com Node.js. Explore meus projetos de sites modernos e aplicações robustas." />
        <meta property="twitter:image" content="https://portfolio-projects-production.up.railway.app/perfil.jpg" />
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
                <h1 style={{ color: "323f4b" }}>Oi! 👋</h1>
                <Paragraph>Este portfólio representa a síntese da minha jornada em desenvolvimento web e backend, demonstrando minha experiência com ReactJS no frontend e Express no backend para a construção de aplicações modernas e eficientes.</Paragraph>
                <GridContainer>
                  {projetos.map((projeto, i) => (
                    <div className="container-item" key={i}>
                      <Link href={projeto.link}>
                        <Image
                          src={projeto.image}
                          alt={projeto.alt}
                          placeholder="blur"
                          blurDataURL={projeto.blur}
                          draggable={false}
                          className="img-projetos"
                          loading="lazy"
                          width={400}  // Defina a largura da imagem
                          height={300}  // Defina a altura da imagem
                        />
                        <div className="item">
                          <div className="sub-item">
                            <div className="tech">
                              <h1 className="item-h1" style={{ display: "inline" }}>Tech:</h1>
                              {projeto.tech.map((tech, idx) => (
                                <span key={idx} style={tagStyle}>{tech}</span>
                              ))}
                            </div>
                            <h2 className="item-h2">{projeto.title}</h2>
                            <p className="item-p">{projeto.descricao}</p>
                            <p>{projeto.estrelas}</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </GridContainer>
              </MainContent>
            </MainContentLayout>
          </MainLayout>
        </>
      )}
    </>
  );
};

export default Projetos;

export async function getStaticProps() {
  return {
    props: {
      projetos: [
        {
          title: "Custom Video Player",
          link: "/projetos/player-video-customizado",
          image: "/assets/images/youtube.png",
          blur: youtubeImgBlur,
          tech: ["React.js"],
          descricao: "Estudos e aprendizado",
          estrelas: "⭐⭐⭐⭐⭐ 🚀",
          alt: "youtube project"
        },
        {
          title: "Plataforma vendas cursos online",
          link: "/projetos/vendas-curso",
          image: "/assets/images/curso-online.png",
          blur: ytmp4ImgBlur,
          tech: [
            "React.js", "React Router DOM", "Context API", "Axios", "JWT-Decode",
            "Styled Components", "LocalStorage", "Node.js + Express", "PostgreSQL",
            "JWT (JSON Web Token)", "Pagar.me API", "Socket.io"
          ],
          descricao: "Plataforma de cursos online.",
          estrelas: "⭐⭐⭐⭐⭐ 🚀",
          alt: "curso online"
        },
        {
          title: "Data Analysis Tendency",
          link: "/projetos/data-analysis-twitter",
          image: "/assets/images/analyze-feelings.png",
          blur: analyzeImgBlur,
          tech: ["Node.js e Express", "Puppeteer", "Puppeteer-Extra", "OpenAI API"],
          descricao: "Estudos e aprendizado",
          estrelas: "⭐⭐⭐⭐⭐ 🚀",
          alt: "análise de sentimentos"
        },
        {
          title: "Live Broadcast Control and Viewing System",
          link: "/projetos/stream-dolby",
          image: "/assets/images/stream.png",
          blur: streamImgBlur,
          tech: ["Node.js e Express", "Millicast API", "EJS", "HTML/CSS", "GraphQL", "dotenv", "axios e https"],
          descricao: "Sistema de controle e visualização de transmissão ao vivo.",
          estrelas: "⭐⭐⭐⭐⭐ 🚀",
          alt: "live broadcast"
        },
        {
          title: "Stripe",
          link: "/projetos/stripe",
          image: "/assets/images/stripeLogo.png",
          blur: stripeImgBlur,
          tech: ["Node.js e Express.js", "JWT", "Stripe", "Firebase", "Middleware e Cookie", "dotenv", "nodemon"],
          descricao: "Integração com Stripe para pagamentos.",
          estrelas: "⭐⭐⭐⭐⭐ 🚀",
          alt: "stripe integration"
        },
        {
          title: "Carousel",
          link: "/projetos/carousel",
          image: "/assets/images/carousel.png",
          blur: carouseImgBlur,
          tech: ["React", "Next.js", "styled-components"],
          descricao: "Carrossel interativo de imagens.",
          estrelas: "⭐⭐⭐⭐⭐ 🚀",
          alt: "carousel"
        },
        {
          title: "Enlarged View Image Generator",
          link: "/projetos/image-generator",
          image: "/assets/images/imageGeneration.png",
          blur: imageGenerationImgBlur,
          tech: ["HTML5", "CSS3", "JavaScript", "Backend"],
          descricao: "Gerador de imagens ampliadas.",
          estrelas: "⭐⭐⭐⭐⭐ 🚀",
          alt: "image generator"
        },
        {
          title: "Catalog",
          link: "/projetos/catalogo",
          image: "/assets/images/catalogo.png",
          blur: catalogoImgBlur,
          tech: ["React.js", "CSS"],
          descricao: "Catálogo de itens.",
          estrelas: "⭐⭐⭐⭐⭐ 🚀",
          alt: "catalog"
        },
        {
          title: "Download de Vídeo do YouTube (Cloud)",
          link: "/projetos/yt-for-mp4-cloud",
          image: "/assets/images/ytmp4.png",
          blur: ytmp4ImgBlur,
          tech: ["HTML e CSS", "Node.js com Express.js", "youtube-dl-exec e @distube/ytdl-core", "fluent-ffmpeg", "Socket.io", "CORS"],
          descricao: "Download de vídeos do YouTube (Backend na nuvem).",
          estrelas: "⭐⭐⭐⭐⭐ 🚀",
          alt: "youtube download cloud"
        },
        {
          title: "Download de Vídeo do YouTube (Local)",
          link: "/projetos/yt-for-mp4-location",
          image: "/assets/images/ytmp4.png",
          blur: ytmp4ImgBlur,
          tech: ["HTML e CSS", "Socket.IO", "Node.js", "Express", "@distube/ytdl-core"],
          descricao: "Download de vídeos do YouTube (Backend local).",
          estrelas: "⭐⭐⭐⭐⭐ 🚀",
          alt: "youtube download local"
        },
        {
          title: "Download de Áudio do YouTube",
          link: "/projetos/yt-for-mp3",
          image: "/assets/images/ytmp3.png",
          blur: ytmp3ImgBlur,
          tech: ["HTML e CSS", "Node.js", "Express", "@distube/ytdl-core"],
          descricao: "Download de áudio do YouTube.",
          estrelas: "⭐⭐⭐⭐⭐ 🚀",
          alt: "youtube audio download"
        },
        {
          title: "YouTube Video Analyze",
          link: "/projetos/yt-analyse-video",
          image: "/assets/images/yt-analyze-video.png",
          blur: ytmp3ImgBlur,
          tech: ["Node.js e Express.js", "OpenAI API", "File System (fs)", "dotenv", "youtubedl-exec", "hbs (Handlebars)"],
          descricao: "Análise de vídeos do YouTube com OpenAI.",
          estrelas: "⭐⭐⭐⭐⭐ 🚀",
          alt: "yt video analyze"
        },
        {
          title: "Portfolio",
          link: "/projetos/portfolio",
          image: "/assets/images/portfolio.png",
          blur: portfolioImgBlur,
          tech: ["React", "Styled-components"],
          descricao: "Portfólio de projetos web.",
          estrelas: "⭐⭐⭐⭐⭐ 🚀",
          alt: "portfolio"
        }
      ],
    },
  };
}
