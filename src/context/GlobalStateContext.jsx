import { createContext, useState, useContext, useEffect } from "react";

// Criando o contexto
const GlobalStateContext = createContext();

// Criando o provider
export function GlobalStateProvider({ children }) {
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

  return (
    <GlobalStateContext.Provider value={{ isHamburguerOpen, setIsHamburguerOpen }}>
      {children}
    </GlobalStateContext.Provider>
  );
}

// Hook para consumir o contexto
export function useGlobalState() {
  return useContext(GlobalStateContext);
}
