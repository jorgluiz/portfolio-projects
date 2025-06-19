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
  // const [mostrarSpans, setMostrarSpans] = useState(true);
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

          <TitleName>Jorge Luiz</TitleName>
          <SubTitle>Web Developer Frontend</SubTitle>

          <ScrollableMenuArea>
            <DividerWithText>Navegação</DividerWithText>
            <Menu>
              <ul>
                <li
                  onClick={() => handleNavigate('/')}
                  className={activeLink === '/' ? 'active' : ''}>
                  <Span>
                    Home
                  </Span>
                </li>
                <li
                  onClick={() => handleNavigate('/navegacao/sobre')}
                  className={activeLink === '/navegacao/sobre' ? 'active' : ''}>
                  <Span>
                    Sobre
                  </Span>
                </li>
                <li
                  onClick={() => handleNavigate('/navegacao/projetos')}
                  className={activeLink === '/navegacao/projetos' ? 'active' : ''}>
                  <Span>
                    Projetos
                  </Span>
                </li>
              </ul>
            </Menu>
            <DividerWithText>Estudos de Caso</DividerWithText>
            <Menu>
              <ul>
                <li
                  onClick={() => handleNavigate('/estudos-de-caso/project-SaaS')}
                  className={activeLink === '/estudos-de-caso/project-SaaS' ? 'active' : ''}>
                  <Span>
                    Build Project
                  </Span>
                </li>
                <li
                  onClick={() => handleNavigate('/estudos-de-caso/e-commerce')}
                  className={activeLink === '/estudos-de-caso/e-commerce' ? 'active' : ''}>
                  <Span>
                    E-commerce
                  </Span>
                </li>
              </ul>
            </Menu>
            <DividerWithText>Artigos Técnicos</DividerWithText>
            <Menu className='text-center-menu-secreto'>
              <ul>
                <li
                  onClick={() => handleNavigate('/artigos-tecnicos/notas-rapidas')}
                  className={activeLink === '/artigos-tecnicos/notas-rapidas' ? 'active' : ''}>
                  <Span>
                    Notas Rápidas
                  </Span>
                </li>
                <li
                  onClick={() => handleNavigate('/artigos-tecnicos/blog')}
                  className={activeLink === '/artigos-tecnicos/blog' ? 'active' : ''}>
                  <Span>
                    Blog
                  </Span>
                </li>
                <li
                  onClick={() => handleNavigate('/artigos-tecnicos/nodejs-java')}
                  className={activeLink === '/artigos-tecnicos/nodejs-java' ? 'active' : ''}>
                  <Span>
                    NodeJS / Java
                  </Span>
                </li>
                <li
                  onClick={() => handleNavigate('/artigos-tecnicos/nodejs-frameworks')}
                  className={activeLink === '/artigos-tecnicos/nodejs-frameworks' ? 'active' : ''}>
                  <Span>
                    NodeJS Frameworks
                  </Span>
                </li>
              </ul>
              <DividerWithText>Marketing dígital</DividerWithText>
              <ul>
                <li
                  onClick={() => handleNavigate('/marketing-digital/seo-nextjs-guia')}
                  className={activeLink === '/marketing-digital/seo-nextjs-guia' ? 'active' : ''}>
                  <Span>
                    SEO NextJS guia
                  </Span>
                </li>
                <li
                  onClick={() => handleNavigate('/marketing-digital/analytics-ga4-install')}
                  className={activeLink === '/marketing-digital/analytics-ga4-install' ? 'active' : ''}>
                  <Span>
                    Integrar Google Analytics 4 (GA4) no Next.js
                  </Span>
                </li>
                <li
                  onClick={() => handleNavigate('/marketing-digital/utm-parameters')}
                  className={activeLink === '/marketing-digital/utm-parameters' ? 'active' : ''}>
                  <Span>
                    UTM Parameters
                  </Span>
                </li>
                <li
                  onClick={() => handleNavigate('/marketing-digital/google-Ads')}
                  className={activeLink === '/marketing-digital/google-Ads' ? 'active' : ''}>
                  <Span>
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

          <TitleName>Build & Deploy </TitleName>
          <SubTitle>App and API development</SubTitle>
          <Menu>
            <DividerWithText>Aplicação Mobile</DividerWithText>
            <ul>
              <li
                onClick={() => handleNavigate('/app-developer/ambiente-android-para-react-native')}
                className={activeLink === '/app-developer/ambiente-android-para-react-native' ? 'active' : ''}>
                <Span>
                  1. Ambiente Android para React Native
                </Span>
              </li>
              <li
                onClick={() => handleNavigate('/app-developer/start-app')}
                className={activeLink === '/app-developer/start-app' ? 'active' : ''}>
                <Span>
                  2. Start App
                </Span>
              </li>
              <li
                onClick={() => handleNavigate('/app-developer/configurar-projeto-app')}
                className={activeLink === '/app-developer/configurar-projeto-app' ? 'active' : ''}>
                <Span>
                  3. Desenvolvimento Técnico - App
                </Span>
              </li>
              <li
                onClick={() => handleNavigate('/app-developer/image-icon-app')}
                className={activeLink === '/app-developer/image-icon-app' ? 'active' : ''}>
                <Span>
                  4. Personalizando o Ícone do App
                </Span>
              </li>
              <li
                onClick={() => handleNavigate('/app-developer/gerando-e-assinando-o-apk')}
                className={activeLink === '/app-developer/gerando-e-assinando-o-apk' ? 'active' : ''}>
                <Span>
                  5. Gerando e Assinando o APK de Release
                </Span>
              </li>
            </ul>
            <DividerWithText>API</DividerWithText>
            <ul>
              <li
                onClick={() => handleNavigate('/app-developer/configurar-projeto-api')}
                className={activeLink === '/app-developer/configurar-projeto-api' ? 'active' : ''}>
                <Span>
                  Download com Arquitetura Orientada a Jobs - API
                </Span>
              </li>
            </ul>
            <DividerWithText>Infraestrutura e Serviços</DividerWithText>
            <ul>
              <li
                onClick={() => handleNavigate('/app-developer/connect-cloudflare-r2')}
                className={activeLink === '/app-developer/connect-cloudflare-r2' ? 'active' : ''}>
                <Span>
                  Configurando o Armazenamento Cloudflare R2
                </Span>
              </li>
            </ul>
            <DividerWithText>Artigos Técnicos</DividerWithText>
            <ul>
              <li
                onClick={() => handleNavigate('/app-developer/internacionalizacao-i18n-react-native')}
                className={activeLink === '/app-developer/internacionalizacao-i18n-react-native' ? 'active' : ''}>
                <Span>
                  Internacionalização (i18n) em React Native
                </Span>
              </li>
              <li
                onClick={() => handleNavigate('/app-developer/notas-rapidas')}
                className={activeLink === '/app-developer/notas-rapidas' ? 'active' : ''}>
                <Span>
                  Notas Rápidas
                </Span>
              </li>
            </ul>
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