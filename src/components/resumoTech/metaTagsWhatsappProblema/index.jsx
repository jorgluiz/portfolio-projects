const MetaTagsWhatsappProblema = () => {
  const container = {
    fontFamily: 'Segoe UI, sans-serif',
    padding: '15px',
    maxWidth: '900px',
    margin: '0 auto 40px',
    color: '#222',
    backgroundColor: '#f9f9f9',
    borderRadius: '12px',
    boxShadow: '0 0 20px rgba(0,0,0,0.05)',
    lineHeight: '1.5'
  };

  const sectionTitle = {
    fontSize: '24px',
    fontWeight: '700',
    marginBottom: '16px',
    display: 'flex',
    alignItems: 'center'
  };

  const problem = {
    backgroundColor: '#fdecea',
    borderLeft: '6px solid #f44336',
    padding: '12px 16px',
    borderRadius: '6px',
    marginBottom: '20px',
    color: '#611a15'
  };

  const solution = {
    backgroundColor: '#e7f5e6',
    borderLeft: '6px solid #27ae60',
    padding: '12px 16px',
    borderRadius: '6px',
    marginBottom: '20px',
    color: '#1e4620'
  };

  const paragraph = {
    marginBottom: '12px',
    fontSize: '16px'
  };

  const list = {
    paddingLeft: '20px',
    marginBottom: '12px'
  };

  const codeBlock = {
    backgroundColor: '#f0f0f0',
    padding: '12px',
    borderRadius: '8px',
    fontFamily: "'Consolas', monospace",
    fontSize: '14px',
    overflowX: 'auto',
    marginBottom: '12px',
    color: '#333'
  };

  return (
    <div style={container}>
      <div style={sectionTitle}>
        <span role="img" aria-label="warning" style={{ marginRight: 8 }}>⚠️</span>
        Problema e Solução: Meta Tags e Compartilhamento no WhatsApp
      </div>

      <div style={problem}>
        <strong>🔹 Problema:</strong> Meta Tags e Compartilhamento no WhatsApp com <strong>useEffect</strong><br />
        Ao compartilhar a página no WhatsApp, a prévia (imagem, título, descrição) não aparecia corretamente.
        Isso porque as meta tags dinâmicas no <strong>React</strong> eram definidas dentro do componente usando <strong>useEffect</strong>, que só roda no cliente após renderização.
        O Next.js renderiza no cliente, então os robôs do WhatsApp não capturavam as informações no momento do acesso.
        <br /><br />
        <strong>Exemplo resumido do problema:</strong>
        <pre style={codeBlock}>
          {`import { useEffect, useState } from 'react';
import Head from 'next/head';

const PageWithMetaUseEffect = () => {
  const [title, setTitle] = useState('Título padrão');
  const [description, setDescription] = useState('Descrição padrão do site');

  useEffect(() => {
    setTimeout(() => {
      setTitle('Título Atualizado via useEffect');
      setDescription('Descrição atualizada via useEffect após renderização.');
    }, 1000);
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <main>
        <h1>{title}</h1>
        <p>{description}</p>
      </main>
    </>
  );
};

export default PageWithMetaUseEffect;`}
        </pre>
        <br />
        Além disso, o estado do menu hambúrguer, gerenciado via <strong>useEffect</strong> no componente, era redefinido a cada recriação, causando inconsistência.
      </div>

      <div style={solution}>
        <strong>✅ Solução:</strong> Centralizar Estado Global no Context API<br />
        <ul style={list}>
          <li>Gerar meta tags no SSR (Server-Side Rendering) para garantir que o WhatsApp capture as informações corretamente no link.</li>
          <li>Gerenciar o estado do menu hambúrguer globalmente via Context API, evitando reexecuções desnecessárias do <strong>useEffect</strong> e mantendo comportamento consistente entre páginas.</li>
        </ul>

        <strong>Exemplo resumido da solução (sem <code>useEffect</code>):</strong>
        <pre style={codeBlock}>
          {`import Head from 'next/head';

const PageWithMetaSSR = () => {
  const title = 'Título definido no servidor';
  const description = 'Descrição definida no servidor para SEO e preview correto.';

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <main>
        <h1>{title}</h1>
        <p>{description}</p>
      </main>
    </>
  );
};

export default PageWithMetaSSR;`}
        </pre>
        Isso garante que bots e redes sociais leiam as meta tags corretamente antes da página carregar no navegador.
      </div>
    </div>
  );
};

export default MetaTagsWhatsappProblema;
