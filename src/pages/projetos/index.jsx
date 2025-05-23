import Head from "next/head";
import Image from 'next/image';
import Link from "next/link";
import { useGlobalState } from "../../context/GlobalStateContext";

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
import { cursoOnlineImgBlur } from "@/utils/ytmp4";

import { MainLayout, MainContent } from "@/components/layout/mainLayout";
import SideBarLayout from "@/components/layout/sideBarLayout";
import HeaderLayout from "@/components/layout/headerLayout";
import MainContentLayout from "@/components/layout/contentLayout";

import { GridContainer } from "@/components/projetos/style";

const Projetos = () => {
  const { isLoaded } = useGlobalState();

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
        <MainLayout>
          <SideBarLayout></SideBarLayout>
          <HeaderLayout></HeaderLayout>
          <MainContentLayout>
            <MainContent>
              <h1 style={{ color: "323f4b" }}>Oi! 👋</h1>
              <p style={{ fontSize: "20px", color: "323f4b", lineHeight: "32px" }}>Este portfólio representa a síntese da minha jornada em desenvolvimento web e backend, demonstrando minha experiência com ReactJS no frontend e Express no backend para a construção de aplicações modernas e eficientes.</p>
              <GridContainer>
                <div className="container-item">
                  <Link href="/projetos/player-video-customizado">
                    <Image src={youtube} placeholder="blur" blurDataURL={youtubeImgBlur} alt="img" draggable={false} className="img-projetos" />
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
                  <Link href="/projetos/vendas-curso">
                    <Image src={cursoOline} placeholder="blur" blurDataURL={cursoOnlineImgBlur} alt="img" draggable={false} className="img-projetos" />
                    <div className="item">
                      <div className="sub-item">
                        <div className="tech">
                          <h1 className="item-h1" style={{ display: "inline" }}>Tech:</h1>
                          <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}> React.js</span>
                          <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}> React Router DOM</span>
                          <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}> Context API</span>
                          <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}> Axios </span>
                          <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}> JWT-Decode</span>
                          <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}> Styled Components</span>
                          <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}> LocalStorage </span>
                          <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}> Node.js + Express</span>
                          <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}> PostgreSQL</span>
                          <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}> JWT (JSON Web Token) </span>
                          <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}> Pagar.me API</span>
                          <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}> Socket.io</span>
                        </div>
                        <h2 className="item-h2">Plataforma vendas cursos online</h2>
                        <p>⭐⭐⭐⭐⭐ 🚀</p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="container-item">
                  <Link href="/projetos/data-analysis-twitter">
                    <Image src={analyzeFeelings} placeholder="blur" blurDataURL={analyzeImgBlur} alt="img" draggable={false} className="img-projetos" />
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
                  <Link href="/projetos/stripe">
                    <Image src={stripelogo} placeholder="blur" blurDataURL={stripeImgBlur} alt="img" draggable={false} className="img-projetos" />
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
                    <Image src={carousel} placeholder="blur" blurDataURL={carouseImgBlur} alt="img" draggable={false} className="img-projetos" />
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
                  <Link href="/projetos/stream-dolby">
                    <Image src={stream} placeholder="blur" blurDataURL={streamImgBlur} alt="img" draggable={false} className="img-projetos" />
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
                  <Link href="/projetos/image-generator">
                    <Image src={imageGeneration} placeholder="blur" blurDataURL={imageGenerationImgBlur} alt="img" draggable={false} className="img-projetos" />
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
                  <Link href="/projetos/catalogo">
                    <Image src={catalogo} placeholder="blur" blurDataURL={catalogoImgBlur} alt="img" draggable={false} className="img-projetos" />
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
                  <Link href="/projetos/yt-for-mp4-cloud">
                    <Image src={ytmp4} placeholder="blur" blurDataURL={ytmp4ImgBlur} alt="img" draggable={false} className="img-projetos" />
                    <div className="item">
                      <div className="sub-item">
                        <div className="tech">
                          <h1 className="item-h1" style={{ display: "inline" }}>Tech:</h1>
                          <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}> HTML e CSS</span>
                          <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}> Node.js com Express.js</span>
                          <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}> youtube-dl-exec e @distube/ytdl-core</span>
                          <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}> fluent-ffmpeg</span>
                          <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}> Socket.io</span>
                          <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}> CORS</span>
                        </div>
                        <h2 className="item-h2">Download de Vídeo do YouTube</h2>
                        <p className="item-p"><span style={{ color: "red" }}>Backend na nuvem</span></p>
                        <p>⭐⭐⭐⭐⭐ 🚀</p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="container-item">
                  <Link href="/projetos/yt-for-mp4-location">
                    <Image src={ytmp4} placeholder="blur" blurDataURL={ytmp4ImgBlur} alt="img" draggable={false} className="img-projetos" />
                    <div className="item">
                      <div className="sub-item">
                        <div className="tech">
                          <h1 className="item-h1" style={{ display: "inline" }}>Tech:</h1>
                          <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}> HTML e CSS</span>
                          <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}> Socket.IO</span>
                          <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>Node.js</span>
                          <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>Express</span>
                          <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>@distube/ytdl-core</span>
                        </div>
                        <h2 className="item-h2">Download de Vídeo do YouTube</h2>
                        <p className="item-p"><span style={{ color: "red" }}>Backend local</span></p>
                        <p>⭐⭐⭐⭐⭐ 🚀</p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="container-item">
                  <Link href="/projetos/yt-for-mp3">
                    <Image src={ytmp3} placeholder="blur" blurDataURL={ytmp3ImgBlur} alt="img" draggable={false} className="img-projetos" />
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
                  <Link href="/projetos/yt-analyse-video">
                    <Image src={ytAnalyzeVideo} placeholder="blur" blurDataURL={ytmp3ImgBlur} alt="img" draggable={false} className="img-projetos" />
                    <div className="item">
                      <div className="sub-item">
                        <div className="tech">
                          <h1 className="item-h1" style={{ display: "inline" }}>Tech:</h1>
                          <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>Node.js e Express.js</span>
                          <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>OpenAI API</span>
                          <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>File System (fs)</span>
                          <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>dotenv</span>
                          <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>youtubedl-exec</span>
                          <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>hbs (Handlebars)</span>
                        </div>
                        <h2 className="item-h2">Download de Áudio do YouTube</h2>
                        <p className="item-p">estudos e aprendizado</p>
                        <p>⭐⭐⭐⭐⭐ 🚀</p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="container-item">
                  <Link href="/projetos/portfolio">
                    <Image src={portfolioImg} placeholder="blur" blurDataURL={portfolioImgBlur} alt="img" draggable={false} className="img-projetos" />
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
              </GridContainer>
            </MainContent>
          </MainContentLayout>
        </MainLayout>
      )}
    </>
  );
};

export default Projetos;