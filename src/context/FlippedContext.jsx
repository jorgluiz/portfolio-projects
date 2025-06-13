import { createContext, useState, useContext } from "react";

// Criando o contexto
const FlippedContext = createContext();

// Criando o provider
export function FlippedStateProvider({ children }) {
  // ADICIONE ESTA LINHA
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <FlippedContext.Provider value={{ isFlipped, setIsFlipped }}>
      {children}
    </FlippedContext.Provider>
  );
}

// Hook para consumir o contexto
export function useFlippedState() {
  return useContext(FlippedContext);
}
