const BackendTecnologias = () => {
  const container = {
    fontFamily: 'Segoe UI, sans-serif',
    padding: '15px',
    maxWidth: '900px',
    margin: '0 auto 40px',
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

  const check = {
    color: '#2ecc71',
    fontSize: '20px',
    marginRight: '8px'
  };

  const container1 = {
    backgroundColor: '#f9f9f9',
    fontFamily: 'Segoe UI, sans-serif',
    padding: '32px',
    borderRadius: '12px',
    maxWidth: '800px',
    margin: '0 auto 40px',
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
          <span style={check}>✅</span>
          Tecnologias-chave para Backend com JavaScript (Node.js)
        </div>

        <div style={itemTitle}>1. Runtime</div>
        <ul style={list}>
          <li>Node.js – motor principal para execução do JavaScript no backend.</li>
        </ul>

        <div style={itemTitle}>2. Framework Web</div>
        <ul style={list}>
          <li>Express.js – simples, flexível, ideal para APIs REST.</li>
          <li>Fastify – alternativa mais rápida que Express, com suporte nativo a JSON Schema.</li>
          <li>NestJS – estrutura modular baseada em TypeScript, com arquitetura inspirada no Angular.</li>
        </ul>

        <div style={itemTitle}>3. Banco de Dados</div>
        <ul style={list}>
          <li><strong>Relacional (SQL):</strong> PostgreSQL (usando knex.js, sequelize ou TypeORM)</li>
          <li><strong>Não relacional (NoSQL):</strong> MongoDB (com mongoose ou driver nativo)</li>
        </ul>

        <div style={itemTitle}>4. Autenticação & Segurança</div>
        <ul style={list}>
          <li>JWT (token de autenticação)</li>
          <li>bcrypt (hash seguro de senhas)</li>
          <li>helmet (segurança para headers HTTP)</li>
          <li>cors (controle de acesso externo à API)</li>
        </ul>

        <div style={itemTitle}>5. Validação de Dados</div>
        <ul style={list}>
          <li>Joi (usado com Express)</li>
          <li>Zod (moderno, ideal com TypeScript)</li>
          <li>class-validator (usado com NestJS)</li>
        </ul>

        <div style={itemTitle}>6. Testes</div>
        <ul style={list}>
          <li>Jest ou Mocha + Chai (testes unitários e de integração)</li>
          <li>Supertest (testes de endpoints HTTP)</li>
        </ul>

        <div style={itemTitle}>7. Deploy</div>
        <ul style={list}>
          <li>Docker (containerização)</li>
          <li>PM2 (gerenciamento de processos)</li>
          <li>Nginx (proxy reverso)</li>
          <li>CI/CD: GitHub Actions, GitLab CI, etc.</li>
        </ul>
      </div>

      <div style={container}>
        <div style={sectionTitle}>
          <span style={check}>🧠</span> Padrões Recomendados
        </div>

        <ul style={list}>
          <li><strong>MVC (Model-View-Controller)</strong> – para APIs simples.</li>
          <li><strong>Service Layer Pattern</strong> – separa regras de negócio da camada de controller.</li>
          <li><strong>Repository Pattern</strong> – se estiver usando SQL, bom para abstrair acesso ao banco.</li>
          <li><strong>Hexagonal/Clean Architecture</strong> – ideal para projetos escaláveis e testáveis.</li>
          <li><strong>Domain-Driven Design (DDD)</strong> – se estiver construindo algo enterprise/grande.</li>
        </ul>
      </div>

      <div style={container1}>
        <div style={title1}>
          <span style={check1}>✅</span> Estrutura Modular (Express.js como exemplo)
        </div>

        <div style={label1}>bash</div>

        <div style={codeBlock1}>
          {`/src
  /config        <- configs do app (env, db, etc)
  /controllers   <- lógica dos endpoints
  /models        <- schemas ou modelos de dados
  /routes        <- define rotas e middlewares
  /services      <- regras de negócio (camada de serviço)
  /middlewares   <- autenticação, logger, etc.
  /utils         <- funções auxiliares
  /validators    <- validação de entrada
  /database      <- conexão com o banco
index.js         <- entrada da aplicação`}
        </div>
      </div>
    </>
  );
};

export default BackendTecnologias;
