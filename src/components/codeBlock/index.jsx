import { useEffect, useRef } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css'; // Estilo do highlight

const CodeBlock = ({ children, language }) => {
  const codeRef = useRef(null);

  useEffect(() => {
    // Garante que o elemento já existe no DOM antes de tentar modificá-lo
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [children]); // O efeito roda novamente se o conteúdo do código mudar

  return (
    <pre>
      {/* A 'ref' conecta este elemento do DOM com a nossa variável codeRef */}
      {/* A 'className' informa ao highlight.js qual a linguagem para um realce mais preciso */}
      <code ref={codeRef} className={`language-${language}`}>
        {children}
      </code>
    </pre>
  );
};

export default CodeBlock;