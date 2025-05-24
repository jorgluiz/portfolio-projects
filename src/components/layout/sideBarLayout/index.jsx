import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useGlobalState } from "../../../context/GlobalStateContext";
import Image from 'next/image';

import perfil from '../../../assets/images/perfil.png';
import { ContentWrapper, ContentNav, Menu, XContainer, DiagonalOne, DiagonalTwo, ImgPerfil, Span, TitleName, SubTitle, TitleMenuSecret } from './styles';

const SideBar = () => {
  const { isHamburguerOpen, setIsHamburguerOpen } = useGlobalState();
  const [mostrarSpans, setMostrarSpans] = useState(false);
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
    setIsHamburguerOpen(prevState => !prevState);
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
      {isHamburguerOpen &&
        <XContainer onClick={() => setIsHamburguerOpen(prevState => !prevState)}>
          <DiagonalOne />
          <DiagonalTwo />
        </XContainer>
      }
      <ContentNav>
        <ImgPerfil onClick={() => goHome()}
          onContextMenu={(e) => e.preventDefault()}
        >
          <Image src={perfil} width={150} height={150} style={{ borderRadius: '50%' }} className="profile-image" alt="img" draggable={false} />
        </ImgPerfil>

        <TitleName onClick={cliqueSecreto}>Jorge Luiz de Medeiros e Silva Jr</TitleName>
        <SubTitle>Web Developer</SubTitle>
        <div style={{ width: "260px", border: "solid 1px #243B53", marginTop: "20px", marginBottom: "10px" }}></div>
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
                onClick={() => handleNavigate('/diario-dev')}
                className={activeLink === '/diario-dev' ? 'active' : ''}
              >
                Diário dev
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
          </ul>
        </Menu>
        <div style={{ width: "260px", border: "solid 1px #243B53", marginTop: "10px", marginBottom: "10px" }}></div>

        {mostrarSpans && (
          <>
            <TitleMenuSecret>Menu secreto</TitleMenuSecret>
            <Menu>
              <ul>
                <li>
                  <Span
                    onClick={() => handleNavigate('/menu-secreto/nodejs-java-spring')}
                    className={activeLink === '/menu-secreto/nodejs-java-spring' ? 'active' : ''}
                  >
                    NodeJS / Java
                  </Span>
                </li>
              </ul>
            </Menu>
          </>
        )}

      </ContentNav>
    </ContentWrapper>
  );
};

export default SideBar;