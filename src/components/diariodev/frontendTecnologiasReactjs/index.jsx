const FrontendTecnologiasReactjs = () => {
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


  return (
    <>
      <div style={container}>
        <div style={sectionTitle}>
          <span style={check}>🚀</span> Tecnologias-chave para Frontend com React.js
        </div>

        <div style={itemTitle}>1. React.js — Biblioteca principal para UI</div>
        <ul style={list}>
          <li>Criação de interfaces reativas e componentes reutilizáveis.</li>
          <li>Ideal para SPAs (Single Page Applications).</li>
        </ul>

        <div style={itemTitle}>2. React Router</div>
        <ul style={list}>
          <li>Gerencia navegação entre páginas/rotas na SPA.</li>
          <li>Uso obrigatório se seu app precisa ter múltiplas “páginas” internas.</li>
        </ul>

        <div style={itemTitle}>3. Estado da aplicação (State Management)</div>
        <ul style={list}>
          <li>Para estados locais: React Hooks (useState, useReducer).</li>
          <li>Para estados globais ou complexos:
            <ul>
              <li>Redux (mais robusto e maduro)</li>
              <li>Recoil (mais moderno, mais simples que Redux)</li>
              <li>Zustand (leve e simples)</li>
              <li>Context API (para estados globais simples)</li>
            </ul>
          </li>
        </ul>

        <div style={itemTitle}>4. Bibliotecas para requisições HTTP</div>
        <ul style={list}>
          <li>Axios — mais completa e popular.</li>
          <li>fetch (nativo, leve, mas menos recursos).</li>
          <li>Para gerenciamento de dados assíncronos e cache: React Query ou SWR.</li>
        </ul>

        <div style={itemTitle}>5. Estilização</div>
        <ul style={list}>
          <li>CSS Modules (CSS scoped)</li>
          <li>Styled Components (CSS-in-JS)</li>
          <li>Tailwind CSS (utility-first CSS framework)</li>
          <li>Sass / LESS para pré-processamento</li>
        </ul>

        <div style={itemTitle}>6. Build e Bundlers</div>
        <ul style={list}>
          <li>Vite (ultra rápido, moderno)</li>
          <li>Create React App (CRA) — ferramenta oficial, fácil para começar</li>
          <li>Webpack (mais configurável, mas mais complexo)</li>
        </ul>

        <div style={itemTitle}>7. Testes</div>
        <ul style={list}>
          <li>Jest + React Testing Library para testes unitários e componentes.</li>
          <li>Cypress para testes end-to-end (E2E).</li>
        </ul>
      </div>

      <div style={container1}>
        <div style={title1}>
          <span style={check1}>⏰</span> Quando usar React.js no Frontend?
        </div>

        <p style={paragraph}>
          Quando você precisa de uma aplicação interativa, com UI dinâmica que reage ao usuário.
        </p>
        <p style={paragraph}>
          Para SPAs ou apps com múltiplas páginas gerenciadas no frontend.
        </p>
        <p style={paragraph}>
          Quando precisa de um ecossistema grande, com muitas bibliotecas e ferramentas.
        </p>
        <p style={paragraph}>
          Projetos onde reutilização de componentes é importante.
        </p>
        <p style={paragraph}>
          Apps que consomem APIs REST/GraphQL e querem atualizar a UI sem reload.
        </p>
      </div>

      <div style={container1}>
        <div style={title1}>
          <span style={check1}>🎁</span> Bônus: Quando NÃO usar React
        </div>

        <p style={paragraph}>
          Projeto muito simples, sem interatividade (ex: landing page estática).
        </p>
        <p style={paragraph}>
          Quando o SEO for super crítico e o projeto não tiver SSR (Server-Side Rendering).
        </p>
        <p style={paragraph}>
          Aplicações muito pequenas que não justificam o overhead da biblioteca.
        </p>
        <p style={paragraph}>
          Quando o time não tem experiência e prefere algo mais simples (ex: jQuery, Vanilla JS).
        </p>
      </div>
    </>
  );
};


export default FrontendTecnologiasReactjs;