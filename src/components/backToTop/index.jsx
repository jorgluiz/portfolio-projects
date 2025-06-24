import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaArrowUp } from 'react-icons/fa'; // Exemplo com ícone

// Estilização do botão com styled-components
const BotaoVoltarAoTopo = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background-color: #1F2937;
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  opacity: ${({ $visivel }) => ($visivel ? '1' : '0')};
  transform: ${({ $visivel }) => ($visivel ? 'translateY(0)' : 'translateY(20px)')};
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  z-index: 1000;

    /* Adicionado para remover o efeito de toque no mobile */
  -webkit-tap-highlight-color: transparent;

  &:active {
    background-color: ${$visivel => ($visivel ? '#0056b3' : '')};
  }
`;

// Componente funcional do botão
const VoltarParaTopo = () => {
  const [visivel, setVisivel] = useState(false);

  // Controla a visibilidade do botão
  const toggleVisibilidade = () => {
    if (window.scrollY > 300) {
      setVisivel(true);
    } else {
      setVisivel(false);
    }
  };

  // Leva o usuário de volta ao topo da página
  const rolarParaTopo = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibilidade);
    return () => {
      window.removeEventListener('scroll', toggleVisibilidade);
    };
  }, []);

  return (
    <BotaoVoltarAoTopo $visivel={visivel} onClick={rolarParaTopo}>
      <FaArrowUp />
    </BotaoVoltarAoTopo>
  );
};

export default VoltarParaTopo;