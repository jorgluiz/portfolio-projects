const BibliotecasFerramentas = () => {
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
    marginBottom: '16px',
    display: 'flex',
    alignItems: 'center'
  };

  const check = {
    color: '#2ecc71',
    fontSize: '22px',
    marginRight: '8px'
  };

  const paragraph = {
    fontSize: '16px',
    lineHeight: '1.6',
    marginBottom: '12px'
  };

  const list = {
    paddingLeft: '20px',
    marginBottom: '12px',
    lineHeight: '1.6'
  };

  return (
    <>
      <div style={container}>
        <div style={sectionTitle}>
          <span style={check}>📚</span> Bibliotecas
        </div>

        <p style={paragraph}>
          São pacotes que adicionam <strong>funcionalidades específicas</strong> que você usa diretamente no código da aplicação.
        </p>

        <div style={{ fontWeight: '600', marginBottom: '8px' }}>Exemplos comuns:</div>

        <ul style={list}>
          <li><strong>express-async-errors (backend):</strong> tratamento de erros assíncronos no Express.</li>
          <li><strong>TypeORM / Prisma (backend):</strong> ORM para banco de dados.</li>
          <li><strong>Swagger (backend):</strong> documentação automática da API.</li>
          <li><strong>class-validator (backend):</strong> validação de dados.</li>
          <li><strong>Winston (backend):</strong> logging.</li>
          <li><strong>Helmet e CORS (backend):</strong> segurança HTTP e controle de acesso.</li>
        </ul>
      </div>

      <div style={container}>
        <div style={sectionTitle}>
          <span style={check}>🛠️</span> Ferramentas
        </div>

        <p style={paragraph}>
          Auxiliam no desenvolvimento, organização, formatação e automação, mas atuam fora do fluxo direto do código da aplicação.
        </p>

        <div style={{ fontWeight: '600', marginBottom: '8px' }}>Exemplos comuns:</div>

        <ul style={list}>
          <li><strong>ESLint (front/backend):</strong> analisa e corrige problemas no código.</li>
          <li><strong>Prettier (front/backend):</strong> formata código automaticamente.</li>
          <li><strong>Husky (front/backend):</strong> executa tarefas automáticas (ex: testes) antes do commit.</li>
          <li><strong>Lint-Staged (front/backend):</strong> verifica apenas arquivos modificados antes do commit.</li>
          <li><strong>Jest / Supertest (front/backend):</strong> frameworks e ferramentas para testes unitários e de API.</li>
        </ul>
      </div>
    </>

  );
};


export default BibliotecasFerramentas;