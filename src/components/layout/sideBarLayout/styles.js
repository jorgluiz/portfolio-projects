import styled from "styled-components";

export const ContentWrapper = styled.div`
  position: sticky;
  /* flex-shrink: 0; */
  top: 0;
  z-index: 10;
  /* height: 100vh; */
  width: 330px;
  min-width: 330px; /* Impede que a largura seja comprimida */
  background: linear-gradient(135deg, #0a0b3d 0%, #3b0e81 100%);
  transition: transform 500ms ease-in-out; /* Transição suave para mover o sidebar */
  transform: translateX(0); /* Posição inicial */
  border-top-right-radius: 50px;

  * {  /* Aplica a todos os elementos dentro de VideoContainer */
      /* Remover realce azul no toque (Mobile e WebKit) */
        -webkit-tap-highlight-color: transparent;
        -webkit-focus-ring-color: transparent;
    }

  @media (max-width: 1250px) {
    /* Alterna para 'fixed' em telas menores para remover o espaço quando o sidebar é oculto */
    position: fixed;
    height: 100vh;
    left: 0;
    transform: ${({ isHamburguerOpen }) => (isHamburguerOpen ? 'translateX(0)' : 'translateX(-100%)')};
  }

  & li {
    list-style-type: none;
  }
`;

export const ContentNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & .profile-image {
   user-select: none;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-drag: none;
  -webkit-user-select: none;
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & li {
    padding: 10px;
  }

  & a {
    font-size: 20px;
    color: rgb(188, 204, 220);
      /* font-weight: bold; */

    /* &:hover {
      color: #84c5f4;
    } */
  }

    /* Aplica estilo especial quando o link estiver ativo */
    & span.active {
    color: #00BFFF  ; /* Cor para o link ativo */
    /* font-weight: bold; Torna o link ativo em negrito */
  }
`;

export const XContainer = styled.div`
  position: absolute; /* Use 'fixed' se você quer que ele permaneça visível enquanto a página rola */
  top: 16px; /* Distância do topo */
  right: 16px; /* Distância do lado direito */
  width: 24px;
  height: 24px;
  cursor: pointer; /* Ícone de cursor para indicar que é clicável */

  @media (min-width: 1250px) {
    display: none;
  }
`;

export const Bar = styled.div`
  position: absolute;
  width: 100%;
  height: 4px;
  background-color: #d1dfed;
  top: 50%;
  left: 0;
  transform-origin: center;
`;

export const DiagonalOne = styled(Bar)`
  transform: rotate(45deg);
`;

export const DiagonalTwo = styled(Bar)`
  transform: rotate(-45deg);
`;

export const ImgPerfil = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #243b53;
  border-radius: 50%;
  width: 160px;
  height: 160px;
  margin-top: 40px;
  margin-bottom: 10px;
  cursor: pointer;
  border: 1px solid #ccc;
  /* box-shadow: 0 1px 0 0 #eee; */
`;

export const Span = styled.span`
 cursor: pointer;
 font-size: 20px;
  color: rgb(188, 204, 220);
  user-select: none;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none;     /* IE/Edge */
`;

export const TitleName = styled.h3`
  color: #d1dfed;
  user-select: none;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none;     /* IE/Edge */
`;

export const TitleMenuSecret = styled.h3`
  color: #d1dfed;
  user-select: none;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none;     /* IE/Edge */
`;

export const SubTitle = styled.p`
font-size: 20px;
  color: #d1dfed;
  user-select: none;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none;     /* IE/Edge */
`;
