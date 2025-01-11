import { useState, useEffect } from "react";
import Head from "next/head";
import Main from "@/components/layout/main";
import SideBar from "@/components/layout/sideBar";
import Header from "@/components/layout/header";
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

import { GridContainer, Container } from "@/components/projetos/";

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
      <Head>
        <title>Portfólio de Desenvolvimento Web</title>
        <meta
          name="description"
          content="Portfólio de [Seu Nome], mostrando projetos em React.js, Node.js, Express.js, e mais. Aprendizado e experiência prática no desenvolvimento web."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Portfólio de Desenvolvimento Web | [Seu Nome]" />
        <meta property="og:description" content="Veja meus projetos de desenvolvimento web, com foco em tecnologias modernas como React.js e Node.js." />
        <meta property="og:image" content="https://portfolio-projects-production.up.railway.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportfolio.f8087f8e.png&w=1920&q=75" />
        <meta property="og:url" content="https://portfolio-projects-production.up.railway.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportfolio.f8087f8e.png&w=1920&q=75" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Portfólio de Desenvolvimento Web | [Seu Nome]" />
        <meta name="twitter:description" content="Portfólio com projetos de desenvolvimento web usando React, Node.js e mais." />
        <meta name="twitter:image" content="https://portfolio-projects-production.up.railway.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportfolio.f8087f8e.png&w=1920&q=75" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ display: "flex" }}>
        <SideBar isHamburguerOpen={isHamburguerOpen} setIsHamburguerOpen={setIsHamburguerOpen}></SideBar>
        <Main>
          <Header isHamburguerOpen={isHamburguerOpen} setIsHamburguerOpen={setIsHamburguerOpen}></Header>
          <Container>
            <h1 style={{ color: "323f4b" }}>Oi! 👋</h1>
            <p style={{ fontSize: "20px", color: "323f4b", lineHeight: "32px" }}>Este portfólio é a culminação da minha jornada de aprendizado em desenvolvimento web e servidor, onde explorei as capacidades do ReactJS tanto no frontend e Express backend</p>
            <GridContainer>
              <div className="container-item">
                <Link href="/projetos/portfolio">
                  <Image src={portfolioImg} placeholder="blur" blurDataURL={portfolioImgBlur} />
                  <div className="item">
                    <div className="sub-item">
                      <div>
                        <h1 className="item-h1" style={{ display: "inline" }}>Tech:</h1>
                        <span style={{ margin: "0 8px 0 8px", padding: "0 5px 0 5px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}> React</span>
                        <span style={{ margin: "0 8px 0 8px", padding: "0 5px 0 5px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>Styled-components</span>
                      </div>
                      <h2 className="item-h2">Portfolio</h2>
                      <p className="item-p">estudos e aprendizado</p>
                      <p>⭐⭐⭐⭐⭐ 🚀</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="container-item">
                <Link href="/projetos/stripe">
                  <Image src={stripelogo} placeholder="blur" blurDataURL={stripeImgBlur} />
                  <div className="item">
                    <div className="sub-item">
                      <div style={{ display: "flex", flexWrap: "wrap" }}>
                        <div>
                          <h1 className="item-h1" style={{ display: "inline" }}>Tech:</h1>
                        </div>
                        <div style={{ display: "block", margin: "auto 0" }}>
                          <span style={{ margin: "0 10px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}> Node.js e Express.js</span>
                        </div>
                        <div style={{ display: "block", margin: "auto 0" }}>
                          <span style={{ margin: "0 10px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>JWT</span>
                        </div>
                        <div style={{ display: "block", margin: "auto 0" }}>
                          <span style={{ margin: "0 10px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>Stripe</span>
                        </div>
                        <div>
                          <span style={{ margin: "0 10px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>Firebase</span>
                        </div>
                        <div>
                          <span style={{ margin: "0 10px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>Middleware e Cookie</span>
                        </div>
                        <div>
                          <span style={{ margin: "0 10px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>dotenv</span>
                        </div>
                        <div>
                          <span style={{ margin: "10px 0 0 0", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>nodemon</span>
                        </div>
                      </div>
                      <h2 className="item-h2">Stripe</h2>
                      <p className="item-p">estudos e aprendizado</p>
                      <p>⭐⭐⭐⭐⭐ 🚀</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="container-item">
                <Link href="/projetos/carousel">
                  <Image src={carousel} placeholder="blur" blurDataURL={carouseImgBlur} />
                  <div className="item">
                    <div className="sub-item">
                      <div>
                        <h1 className="item-h1" style={{ display: "inline" }}>Tech:</h1>
                        <span style={{ margin: "0 8px 0 8px", padding: "0 5px 0 5px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}> React</span>
                        <span style={{ margin: "0 8px 0 8px", padding: "0 5px 0 5px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>Next.js</span>
                        <span style={{ margin: "0 8px 0 8px", padding: "0 5px 0 5px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>styled-components</span>
                      </div>
                      <h2 className="item-h2">Carousel</h2>
                      <p className="item-p">estudos e aprendizado</p>
                      <p>⭐⭐⭐⭐⭐ 🚀</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="container-item">
                <Link href="/projetos/dataAnalysis">
                  <Image src={analyzeFeelings} placeholder="blur" blurDataURL={analyzeImgBlur} />
                  <div className="item">
                    <div className="sub-item">
                      <div className="tech">
                        <h1 className="item-h1" style={{ display: "inline" }}>Tech:</h1>
                        <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}> Node.js e Express</span>
                        <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>Puppeteer</span>
                        <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>Puppeteer-Extra</span>
                        <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>OpenAI API</span>
                        <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>Frontend (HTML, CSS, JavaScript)</span>
                        <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>dotenv</span>
                        <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>Heroku</span>
                        <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>archiver</span>
                        <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>unzipper</span>
                        <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>OpenAI</span>
                        <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>path</span>
                      </div>
                      <h2 className="item-h2">data analysis tedency</h2>
                      <p className="item-p">estudos e aprendizado</p>
                      <p>⭐⭐⭐⭐⭐ 🚀</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="container-item">
                <Link href="/projetos/streamDolby">
                  <Image src={stream} placeholder="blur" blurDataURL={streamImgBlur} />
                  <div className="item">
                    <div className="sub-item">
                      <div className="tech">
                        <h1 className="item-h1" style={{ display: "inline" }}>Tech:</h1>
                        <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}> Node.js e Express</span>
                        <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>Millicast API</span>
                        <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>EJS</span>
                        <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>HTML/CSS</span>
                        <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>GraphQL</span>
                        <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>dotenv</span>
                        <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>axios e https</span>
                        <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>open</span>
                      </div>
                      <h2 className="item-h2">Live Broadcast Control and Viewing System</h2>
                      <p className="item-p">estudos e aprendizado</p>
                      <p>⭐⭐⭐⭐⭐ 🚀</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="container-item">
                <Link href="/projetos/imageGenerator">
                  <Image src={imageGeneration} placeholder="blur" blurDataURL={imageGenerationImgBlur} />
                  <div className="item">
                    <div className="sub-item">
                      <div className="tech">
                        <h1 className="item-h1" style={{ display: "inline" }}>Tech:</h1>
                        <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}> HTML5</span>
                        <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>CSS3</span>
                        <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>JavaScript</span>
                        <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>Backend</span>
                      </div>
                      <h2 className="item-h2">Enlarged View Image Generator</h2>
                      <p className="item-p">estudos e aprendizado</p>
                      <p>⭐⭐⭐⭐⭐ 🚀</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="container-item">
                <Link href="/projetos/youtube">
                  <Image src={youtube} placeholder="blur" blurDataURL={youtubeImgBlur} />
                  <div className="item">
                    <div className="sub-item">
                      <div className="tech">
                        <h1 className="item-h1" style={{ display: "inline" }}>Tech:</h1>
                        <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}> React.js</span>
                      </div>
                      <h2 className="item-h2">Custom Video Player</h2>
                      <p className="item-p">estudos e aprendizado</p>
                      <p>⭐⭐⭐⭐⭐ 🚀</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="container-item">
                <Link href="/projetos/catalogo">
                  <Image src={catalogo} placeholder="blur" blurDataURL={catalogoImgBlur} />
                  <div className="item">
                    <div className="sub-item">
                      <div className="tech">
                        <h1 className="item-h1" style={{ display: "inline" }}>Tech:</h1>
                        <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}> React.js</span>
                        <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>CSS</span>
                      </div>
                      <h2 className="item-h2">catalog</h2>
                      <p className="item-p">estudos e aprendizado</p>
                      <p>⭐⭐⭐⭐⭐ 🚀</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="container-item">
                <Link href="/projetos/ytformp3">
                  <Image src={ytmp3} placeholder="blur" blurDataURL={ytmp3ImgBlur} />
                  <div className="item">
                    <div className="sub-item">
                      <div className="tech">
                        <h1 className="item-h1" style={{ display: "inline" }}>Tech:</h1>
                        <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}> HTML e CSS</span>
                        <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>Node.js</span>
                        <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>Express</span>
                        <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>@distube/ytdl-core</span>
                      </div>
                      <h2 className="item-h2">Download de Áudio do YouTube</h2>
                      <p className="item-p">estudos e aprendizado</p>
                      <p>⭐⭐⭐⭐⭐ 🚀</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="container-item">
                <Link href="/projetos/ytformp4">
                  <Image src={ytmp4} placeholder="blur" blurDataURL={ytmp4ImgBlur} />
                  <div className="item">
                    <div className="sub-item">
                      <div className="tech">
                        <h1 className="item-h1" style={{ display: "inline" }}>Tech:</h1>
                        <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}> HTML e CSS</span>
                        <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>Node.js</span>
                        <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>Express</span>
                        <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>@distube/ytdl-core</span>
                      </div>
                      <h2 className="item-h2">Download de Vídeo do YouTube</h2>
                      <p className="item-p">estudos e aprendizado</p>
                      <p>⭐⭐⭐⭐⭐ 🚀</p>
                    </div>
                  </div>
                </Link>
              </div>
            </GridContainer>
          </Container>
        </Main>
      </div>
    </>
  );
};

export default Projetos;