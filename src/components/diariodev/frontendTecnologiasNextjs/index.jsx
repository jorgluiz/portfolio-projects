const FrontendTecnologiasNextjs = () => {
  const container = {
    fontFamily: 'Segoe UI, sans-serif',
    padding: '24px',
    maxWidth: '900px',
    margin: '0 auto',
    color: '#222',
    backgroundColor: '#f9f9f9',
    borderRadius: '12px',
    boxShadow: '0 0 20px rgba(0,0,0,0.05)'
  };

  const sectionTitle = {
    fontSize: '24px',
    fontWeight: '700',
    marginBottom: '12px',
    display: 'flex',
    alignItems: 'center'
  };

  const check = {
    color: '#2ecc71',
    fontSize: '20px',
    marginRight: '8px'
  };

  const itemTitle = {
    fontSize: '18px',
    fontWeight: '600',
    margin: '20px 0 8px 0',
    borderBottom: '2px solid #ddd',
    paddingBottom: '4px'
  };

  const list = {
    paddingLeft: '20px',
    marginBottom: '12px',
    lineHeight: '1.6'
  };

  const container1 = {
    backgroundColor: '#f9f9f9',
    fontFamily: 'Segoe UI, sans-serif',
    padding: '32px',
    borderRadius: '12px',
    maxWidth: '800px',
    margin: '40px auto',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    color: '#222'
  };

  const title1 = {
    fontSize: '24px',
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '24px',
  };

  const check1 = {
    fontSize: '22px',
    color: '#27ae60',
    marginRight: '10px',
  };

  const paragraph = {
    fontSize: '16px',
    lineHeight: '1.7',
    marginBottom: '12px'
  };

  const codeBlock1 = {
    backgroundColor: '#1e1e1e',
    color: '#f1f1f1',
    fontFamily: 'monospace',
    padding: '20px',
    borderRadius: '10px',
    whiteSpace: 'pre',
    fontSize: '15px',
    overflowX: 'auto',
    lineHeight: '1.6',
  };

  const label1 = {
    display: 'inline-block',
    backgroundColor: '#d1ecf1',
    color: '#0c5460',
    fontWeight: '600',
    fontSize: '14px',
    padding: '4px 8px',
    borderRadius: '6px',
    marginBottom: '12px',
  };


  return (
    <>
      <div style={container}>
        <div style={sectionTitle}>
          <span style={check}>🚀</span> Quando usar Next.js no frontend?
        </div>
        <p style={paragraph}><strong>O que é Next.js?</strong></p>
        <p style={paragraph}>Framework React com foco em renderização híbrida (SSR, SSG e CSR).</p>
        <p style={paragraph}>Suporta rotas automáticas baseadas no sistema de arquivos.</p>
        <p style={paragraph}>Vem com várias otimizações embutidas: roteamento, otimização de imagens, geração de sites estáticos, API Routes etc.</p>
      </div>

      <div style={container}>
        <div style={sectionTitle}>
          <span style={check}>⏰</span> Quando usar Next.js?
        </div>
        <ul style={list}>
          <li><strong>SEO é importante</strong><br />
            Apps que precisam ser bem indexados por motores de busca (Google etc) — pois Next.js permite Server-Side Rendering (SSR) e Static Site Generation (SSG), melhorando o SEO.
          </li>
          <li><strong>Performance de carregamento inicial</strong><br />
            SSR e SSG melhoram o tempo de carregamento da página inicial porque o HTML já vem pré-renderizado do servidor.
          </li>
          <li><strong>Sites com conteúdo dinâmico e/ou estático misturado</strong><br />
            Você pode gerar páginas estáticas para conteúdo fixo e usar SSR para páginas que precisam ser atualizadas a cada requisição.
          </li>
          <li><strong>Apps que precisam de rotas API simples integradas</strong><br />
            Next.js permite criar APIs dentro do próprio projeto, útil para micro-serviços ou pequenas integrações sem backend separado.
          </li>
          <li><strong>Melhor experiência de desenvolvimento com roteamento automático</strong><br />
            Estrutura de pastas simples, menos configuração manual.
          </li>
          <li><strong>Projetos onde o SEO, performance e UX são prioridade</strong><br />
            Ex: lojas online, blogs, portais de notícias, dashboards públicos.
          </li>
        </ul>
      </div>

      <div style={container1}>
        <div style={title1}>
          <span style={check1}>⚙️</span> Quando não usar Next.js?
        </div>

        <p style={paragraph}>
          App muito simples ou SPA puramente cliente, onde SSR/SSG não faz diferença.
        </p>
        <p style={paragraph}>
          Projetos 100% backend ou APIs (Next.js tem API Routes, mas não substitui um backend robusto).
        </p>
        <p style={paragraph}>
          Quando você já tem um backend separado e quer uma frontend SPA isolada, sem renderização no servidor.
        </p>
        <p style={paragraph}>
          Projetos onde a equipe não tem familiaridade com SSR/SSG e prefere algo mais simples (React puro com CRA ou Vite).
        </p>
      </div>

      <div style={container1}>
        <div style={title1}>
          <span style={check1}>🚩</span> Principais vantagens do Next.js
        </div>
        <ul style={list}>
          <li>SSR (Server-Side Rendering)</li>
          <li>SSG (Static Site Generation)</li>
          <li>Incremental Static Regeneration (ISR) — atualiza páginas estáticas em background sem rebuild completo.</li>
          <li>API Routes — endpoints backend dentro do Next.js.</li>
          <li>Image Optimization — otimização automática de imagens.</li>
          <li>Built-in CSS & Sass support</li>
          <li>Suporte para middleware</li>
          <li>Rotas dinâmicas fáceis</li>
        </ul>
      </div>

      <div style={container1}>
        <div style={title1}>
          <span style={check1}>📁</span> Estrutura básica típica Next.js
        </div>

        <div style={label1}>kotlin</div>

        <pre style={codeBlock1}>
          {`/pages               <- cada arquivo vira uma rota
  /api               <- API routes (funções backend)
  index.tsx          <- página principal
  about.tsx          <- página about

/public              <- arquivos estáticos (imagens, favicon, etc)

/components          <- componentes React reutilizáveis
/styles              <- estilos globais, CSS Modules, etc.`}
        </pre>
      </div>
    </>
  );
};


export default FrontendTecnologiasNextjs;