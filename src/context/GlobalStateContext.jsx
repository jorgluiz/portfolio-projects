import { createContext, useState, useContext, useEffect } from "react";

// Criando o contexto
const GlobalStateContext = createContext();

// Criando o provider
export function GlobalStateProvider({ children }) {
  const [isHamburguerOpen, setIsHamburguerOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false); // Estado global de carregamento

  // O primeiro useEffect lida apenas com o redimensionamento.
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
  useEffect(() => {
    // Função que verifica e aplica o estilo de overflow
    const handleOverflow = () => {
      const isMobile = window.innerWidth < 1250;

      // A CONDIÇÃO PRINCIPAL:
      // Trava o scroll SOMENTE se o menu estiver aberto E a tela for mobile
      if (isHamburguerOpen && isMobile) {
        document.body.style.overflow = 'hidden';
      } else {
        // Para todos os outros casos (desktop, ou mobile com menu fechado), libera o scroll
        document.body.style.overflow = 'auto';
      }
    };

    // Executa a função
    handleOverflow();

    // Adiciona um listener para o caso de o usuário redimensionar a tela
    window.addEventListener('resize', handleOverflow);

    // Função de limpeza
    return () => {
      window.removeEventListener('resize', handleOverflow);
      document.body.style.overflow = 'auto';
    };
  }, [isHamburguerOpen]); // A dependência continua sendo 'isHamburguerOpen'


  // O segundo useEffect cuida apenas do carregamento inicial (isLoaded).
  useEffect(() => {
    setIsLoaded(true);
  }, []); // Executa apenas uma vez quando o componente é montado

  return (
    <GlobalStateContext.Provider value={{ isHamburguerOpen, setIsHamburguerOpen, isLoaded }}>
      {children}
    </GlobalStateContext.Provider>
  );
}

// Hook para consumir o contexto
export function useGlobalState() {
  return useContext(GlobalStateContext);
}
