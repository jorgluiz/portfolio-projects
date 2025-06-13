import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useGlobalState } from "../../../context/GlobalStateContext";
import { useFlippedState } from "../../../context/FlippedContext";
import Image from 'next/image';
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

import perfil from '../../../assets/images/perfil.png';
import { ContentWrapper, ContentNav, Menu, Arrow, DiagonalOne, DiagonalTwo, ImgPerfil, Span, TitleName, SubTitle, TitleMenuSecret, AppContainer, MenuToggleButton, MainContent, SidebarContainer, RotatingWrapper, Face, FrontFace, BackFace, ProfileSection, ProfileImage, Title, Subtitle, Divider, NavMenu, MenuItemSpan, FlipButtonContainer, FlipButton, ScrollableMenuArea, DividerWithText } from './styles';

// --- Ícones (SVGs embutidos) ---
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="12" x2="20" y2="12"></line>
    <line x1="4" y1="6" x2="20" y2="6"></line>
    <line x1="4" y1="18" x2="20" y2="18"></line>
  </svg>
);

const FlipIcon = ({ ...props }) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 3h5v5" />
    <path d="M4 20L21 3" />
    <path d="M21 16v5h-5" />
    <path d="M15 14L4 20" />
  </svg>
);

// 1. Defina o vetor para o giro horizontal aqui
const horizontalVector = [0, 1, 0];

const SideBar = () => {
  const { isHamburguerOpen, setIsHamburguerOpen } = useGlobalState();
  const { isFlipped, setIsFlipped } = useFlippedState();
  const [mostrarSpans, setMostrarSpans] = useState(true);
  const [contadorCliques, setContadorCliques] = useState(0);
  const [activeLink, setActiveLink] = useState('/'); // Estado para armazenar o link ativo
  const router = useRouter(); // Hook para pegar a rota atual

  const handleNavigate = async (path) => {
    await router.push(path);
    setIsHamburguerOpen(false); // fecha depois da navegação
  };

  useEffect(() => {
    setActiveLink(router.pathname); // Atualiza o estado com a rota atual
    console.log(router.pathname);
  }, [router.pathname]); // Executa sempre que a rota mudar

  const goHome = () => {
    router.push('/');
    setIsHamburguerOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = isHamburguerOpen ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isHamburguerOpen]);

  // Função que conta os cliques secretos no perfil
  const cliqueSecreto = () => {
    setContadorCliques(prev => {
      const novo = prev + 1;
      if (novo >= 3) {
        setMostrarSpans(prev => !prev);
        return 0; // zera o contador depois de 3 cliques
      }
      return novo;
    });
  };


  return (
    <ContentWrapper isHamburguerOpen={isHamburguerOpen}>

      <RotatingWrapper isFlipped={isFlipped} vector={horizontalVector}>
        <FrontFace>
          <Arrow onClick={() => setIsHamburguerOpen(prevState => !prevState)}>
            <FiArrowLeft size={30} color='#f1f1f1'></FiArrowLeft>
          </Arrow>

          <ImgPerfil onClick={() => handleNavigate('/')}
            onContextMenu={(e) => e.preventDefault()}
          >
            <Image src={perfil} width={150} height={150} style={{ borderRadius: '50%' }} className="profile-image" alt="img" draggable={false} />
          </ImgPerfil>

          <TitleName onClick={cliqueSecreto}>Jorge Luiz</TitleName>
          <SubTitle>Web Developer Frontend</SubTitle>

          <ScrollableMenuArea>
            <DividerWithText>Menu Principal</DividerWithText>
            <Menu>
              <ul>
                <li>
                  <Span
                    onClick={() => handleNavigate('/')}
                    className={activeLink === '/' ? 'active' : ''}
                  >
                    Home
                  </Span>
                </li>
                <li>
                  <Span
                    onClick={() => handleNavigate('/sobre')}
                    className={activeLink === '/sobre' ? 'active' : ''}
                  >
                    Sobre
                  </Span>
                </li>
                <li>
                  <Span
                    onClick={() => handleNavigate('/projetos')}
                    className={activeLink === '/projetos' ? 'active' : ''}
                  >
                    Projetos
                  </Span>
                </li>
                <li>
                  <Span
                    onClick={() => handleNavigate('/build-project')}
                    className={activeLink === '/build-project' ? 'active' : ''}
                  >
                    Build Project
                  </Span>
                </li>
                <li>
                  <Span
                    onClick={() => handleNavigate('/e-commerce-construction-project')}
                    className={activeLink === '/e-commerce-construction-project' ? 'active' : ''}
                  >
                    E-commerce
                  </Span>
                </li>
              </ul>
            </Menu>
            <DividerWithText>Artigos Técnicos</DividerWithText>
            <Menu className='text-center-menu-secreto'>
              <ul>
                <li>
                  <Span
                    onClick={() => handleNavigate('/menu-secreto/resumo-tech')}
                    className={activeLink === '/menu-secreto/resumo-tech' ? 'active' : ''}
                  >
                    Notas Rápidas
                  </Span>
                </li>
                <li>
                  <Span
                    onClick={() => handleNavigate('/diario-dev')}
                    className={activeLink === '/diario-dev' ? 'active' : ''}
                  >
                    Blog
                  </Span>
                </li>
                <li>
                  <Span
                    onClick={() => handleNavigate('/menu-secreto/nodejs-java-spring')}
                    className={activeLink === '/menu-secreto/nodejs-java-spring' ? 'active' : ''}
                  >
                    NodeJS / Java
                  </Span>
                </li>
                <li>
                  <Span
                    onClick={() => handleNavigate('/menu-secreto/node-js-frameworks')}
                    className={activeLink === '/menu-secreto/node-js-frameworks' ? 'active' : ''}
                  >
                    NodeJS Frameworks
                  </Span>
                </li>
              </ul>
              <DividerWithText>Marketing dígital</DividerWithText>
              <ul>
                <li>
                  <Span
                    onClick={() => handleNavigate('/menu-secreto/seo-nextjs-guia')}
                    className={activeLink === '/menu-secreto/seo-nextjs-guia' ? 'active' : ''}
                  >
                    SEO NextJS guia
                  </Span>
                </li>
                <li>
                  <Span
                    onClick={() => handleNavigate('/menu-secreto/analytics-ga4-install')}
                    className={activeLink === '/menu-secreto/analytics-ga4-install' ? 'active' : ''}
                  >
                    Integrar Google Analytics 4 (GA4) no Next.js
                  </Span>
                </li>
                <li>
                  <Span
                    onClick={() => handleNavigate('/menu-secreto/utm-parameters')}
                    className={activeLink === '/menu-secreto/utm-parameters' ? 'active' : ''}
                  >
                    UTM Parameters
                  </Span>
                </li>
                <li>
                  <Span
                    onClick={() => handleNavigate('/menu-secreto/google-Ads')}
                    className={activeLink === '/menu-secreto/google-Ads' ? 'active' : ''}
                  >
                    Google Ads
                  </Span>
                </li>
              </ul>
            </Menu>
          </ScrollableMenuArea>
          {/* <div style={{ width: "100%", border: "solid 1px #374151", marginBottom: "10px" }}></div> */}
          <FlipButtonContainer>
            <FlipButton primary onClick={() => setIsFlipped(true)}><FlipIcon /><span>Ver Extras</span></FlipButton>
          </FlipButtonContainer>
        </FrontFace>
        <BackFace>
          <Arrow onClick={() => setIsHamburguerOpen(prevState => !prevState)}>
            <FiArrowLeft size={30} color='#f1f1f1'></FiArrowLeft>
          </Arrow>

          <TitleName onClick={cliqueSecreto}>Build </TitleName>
          <SubTitle>App Developer</SubTitle>
          <Menu>
            <DividerWithText>Aplicação</DividerWithText>
            <ul>
              <li>
                <Span
                  onClick={() => handleNavigate('/build-app')}
                  className={activeLink === '/build-app' ? 'active' : ''}
                >
                  Build App
                </Span>
              </li>
              <li>
                <Span
                  onClick={() => handleNavigate('/menu-secreto/configurar-projeto-api')}
                  className={activeLink === '/menu-secreto/configurar-projeto-api' ? 'active' : ''}
                >
                  Os Pilares de um Backend Robusto
                </Span>
              </li>
              <li>
                <Span
                  onClick={() => handleNavigate('/menu-secreto/configurar-projeto-app')}
                  className={activeLink === '/menu-secreto/configurar-projeto-app' ? 'active' : ''}
                >
                  Boilerplate do App
                </Span>
              </li>
            </ul>
            <DividerWithText>API</DividerWithText>
          </Menu>
          {/* <div style={{ width: "100%", border: "solid 1px #374151", marginTop: "20px", marginBottom: "10px" }}></div> */}
          <FlipButtonContainer>
            <FlipButton onClick={() => setIsFlipped(false)}><FlipIcon style={{ transform: 'rotateY(180deg)' }} /><span>Voltar</span></FlipButton>
          </FlipButtonContainer>
        </BackFace>
      </RotatingWrapper>
    </ContentWrapper>
  );
};

export default SideBar;