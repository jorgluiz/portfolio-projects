import styled from 'styled-components';

const Scroll = styled.div`
  flex-grow: 1; 
  width: 100%;
  overflow-y: auto; 
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
  scroll-behavior: smooth; /* <-- ADICIONE ESTA LINHA */


  transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
  opacity: ${props => (props.isVisible ? '1' : '0')};
  visibility: ${props => (props.isVisible ? 'visible' : 'hidden')};


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


const ScrollableMenuArea = ({ children, isVisible }) => {
  return (
    <Scroll isVisible={isVisible}>
      {children}
    </Scroll>
  );
};

export default ScrollableMenuArea;