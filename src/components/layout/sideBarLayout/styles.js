import styled from "styled-components";

export const ContentWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 20;
  width: 330px;
  min-width: 330px; /* Impede que a largura seja comprimida */
  /* background: linear-gradient(135deg, #0a0b3d 0%, #3b0e81 100%); */
  transition: transform 500ms ease-in-out; /* Transição suave para mover o sidebar */
  transform: translateX(0); /* Posição inicial */
  /* border-top-right-radius: 50px; */
  transition: transform 600ms cubic-bezier(0.8, 1, 0.8, 1);

  * {  /* Aplica a todos os elementos dentro de VideoContainer */
      /* Remover realce azul no toque (Mobile e WebKit) */
        -webkit-tap-highlight-color: transparent;
        -webkit-focus-ring-color: transparent;
    }

  @media (max-width: 1250px) {
    /* Alterna para 'fixed' em telas menores para remover o espaço quando o sidebar é oculto */
    position: fixed;
    left: 0;
    height: 100vh;       /* manter altura fixa */

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
    text-align: center;
     /* --- ADIÇÕES PARA O EFEITO DE HOVER --- */
  width: 100%; /* Garante que o span ocupe o espaço para o background */
  display: inline-block; /* Necessário para aplicar padding e width corretamente */
  padding: 8px 16px; /* Adiciona um espaçamento interno para o background */
  border-radius: 8px; /* Arredonda as bordas do background */
  transition: background-color 0.3s ease; /* Cria uma transição suave */

    @media (min-width: 1250px) {
     &:hover {
    background-color: #4b5563; /* A cor da borda, para manter a consistência */
  }
  }
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

export const Arrow = styled.div`
/* position: absolute; */
/* right: 0; */
display: flex;
width: 100%;
justify-content: end;
margin: 10px 10px 0 0;

 /* Garante que o espaço seja sempre reservado em telas móveis */
height: 25px; 

 /* Por padrão, ele é visível (em telas móveis) */;

  /* Em telas maiores, ele se torna invisível */
  @media (min-width: 1250px) {
    /* A melhor forma de esconder sem afetar o layout */
    visibility: hidden;
    opacity: 0;
  }
`;

export const Bar = styled.div`
  position: absolute;
  width: 100%;
  height: 4px;
  background-color: #d1dfed;
  /* top: 50%; */
  /* left: 0; */
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
  border-radius: 50%;
  width: 160px;
  height: 160px;
  margin-bottom: 10px;
  cursor: pointer;
   border: 4px solid #374151;
  /* box-shadow: 0 1px 0 0 #eee; */
`;

export const Span = styled.span`
 cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  color: rgb(188, 204, 220);
  user-select: none;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none;     /* IE/Edge */
`;

export const TitleMenuSecret = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #d1dfed;
  user-select: none;
  border-bottom: solid 1px #00BFFF;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none;     /* IE/Edge */
`;

export const TitleName = styled.h3`
 font-size: 1.25rem;
 font-weight: 600;
 color: #e2e8f0;
 user-select: none;
 user-select: none;
 margin: 5px 0;
-webkit-user-select: none; /* Safari */
-ms-user-select: none;     /* IE/Edge */
`;


export const SubTitle = styled.p`
   font-size: 1rem;
   font-weight: 400;
   color: #94a3b8;
  user-select: none;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none;     /* IE/Edge */
`;


// ------------------------------------------------

export const AppContainer = styled.div`
          min-height: 100vh;
        `;

export const MenuToggleButton = styled.button`
          position: fixed;
          top: 1rem;
          left: 1rem;
          z-index: 50;
          background-color: #374151;
          color: white;
          border: none;
          padding: 0.5rem;
          border-radius: 0.375rem;
          cursor: pointer;
          transition: background-color 0.2s;
          &:hover { background-color: #4b5563; }
        `;

export const MainContent = styled.main`
          padding: 2rem;
          transition: margin-left 0.3s ease-in-out;
          margin-left: ${({ isOpen }) => (isOpen ? '18rem' : '0')};
          h1 { font-size: 2.25rem; font-weight: 700; }
          p { margin-top: 1rem; font-size: 1.125rem; }
          strong { color: #2dd4bf; }
        `;

export const SidebarContainer = styled.aside`
          position: fixed;
          top: 0;
          left: 0;
          z-index: 40;
          height: 100%;
          width: 18rem;
          background-color: transparent;
          transition: transform 0.3s ease-in-out;
          transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
          perspective: 1200px;
        `;

export const RotatingWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  /* As linhas exatas que você pediu */
  transform-style: preserve-3d;
  transition: transform 1s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  transform: ${({ isFlipped, vector }) =>
    `rotate3d(${vector.join(',')}, ${isFlipped ? 180 : 0}deg)`};
`;

export const Face = styled.div`
          position: absolute;
          width: 100%;
   height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          backface-visibility: hidden;
        `;

export const FrontFace = styled(Face)`
          background-color: #111827;
        `;

export const BackFace = styled(Face)`
          background-color: #1f2937;
          transform: rotateY(180deg);
        `;

export const ProfileSection = styled.div`
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1.5rem;
          text-align: center;
        `;

export const ProfileImage = styled.img`
          width: 8rem;
          height: 8rem;
          border-radius: 9999px;
          border: 4px solid #374151;
          object-fit: cover;
          margin-bottom: 1rem;
        `;

export const Title = styled.h1`
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
          margin: 0;
        `;

export const Subtitle = styled.h2`
          font-size: 1rem;
          font-weight: 300;
          color: #9ca3af;
          margin: 0.25rem 0 0 0;
        `;

export const Divider = styled.div`
            width: 83.33%;
            border-top: 1px solid #374151;
            margin: 0.5rem 0;
        `;

export const NavMenu = styled.nav`
            width: 100%;
            flex-grow: 1;
            padding: 0 1rem;
            ul {
                list-style: none;
                padding: 0;
                margin: 0;
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
            }
        `;

export const MenuItemSpan = styled.span`
          display: block;
          width: 100%;
          cursor: pointer;
          border-radius: 0.5rem;
          padding: 0.75rem 1rem;
          text-align: center;
          color: #d1d5db;
          transition: all 0.2s;
          &:hover {
            background-color: #374151;
            color: white;
          }
          &.active {
            background-color: #2563eb;
            color: white;
            font-weight: 500;
          }
        `;

export const FlipButtonContainer = styled.div`
            width: 100%;
            padding: 16px 16px 100px 16px;
        `;

export const FlipButton = styled.button`
            display: flex;
            width: 100%;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            border: none;
            border-radius: 0.5rem;
            padding: 0.75rem 0;
            color: white;
            font-size: 1rem;
            cursor: pointer;
            transition: background-color 0.2s;
            background-color: ${({ primary }) => (primary ? '#2563eb' : '#4b5563')};
            &:hover {
                 background-color: ${({ primary }) => (primary ? '#1d4ed8' : '#374151')};
            }
        `;

// export const ScrollableMenuArea = styled.div`
//   flex-grow: 1; /* ESSA É A MÁGICA: faz esta área ocupar todo o espaço vertical disponível */
//   width: 100%;
//   overflow-y: auto; /* A barra de rolagem só aparecerá aqui se necessário */
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 0 1rem; /* Espaçamento lateral para os menus */
// `;
export const ScrollableMenuArea = styled.div`
  flex-grow: 1; 
  width: 100%;
  overflow-y: auto; 
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;

   scroll-behavior: smooth; /* <-- ADICIONE ESTA LINHA */

  /* --- INÍCIO DA CUSTOMIZAÇÃO DO SCROLLBAR --- */

  /* Para navegadores baseados em WebKit (Chrome, Safari, Edge, etc.) */
  &::-webkit-scrollbar {
    width: 6px; /* Largura da barra de rolagem. Deixe mais fino aqui! */
  }

  /* Fundo da barra de rolagem (a "trilha") */
  &::-webkit-scrollbar-track {
    background: transparent; /* Deixa a trilha invisível */
  }

  /* O "polegar" ou a alça que você arrasta */
  &::-webkit-scrollbar-thumb {
    background-color: #4b5563;    /* Cor da alça do scroll */
    border-radius: 20px;       /* Bordas arredondadas para um look moderno */
  }

  /* Efeito quando o mouse passa por cima da alça */
  &::-webkit-scrollbar-thumb:hover {
    background-color: #6b7280; /* Cor um pouco mais clara no hover */
  }
`;