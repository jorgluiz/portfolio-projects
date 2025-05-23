const ArquiteturaMonolitica = () => {
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

  const subsectionTitle = {
    fontSize: '20px',
    fontWeight: '600',
    marginTop: '20px',
    marginBottom: '8px',
    borderBottom: '2px solid #ddd',
    paddingBottom: '4px'
  };

  const list = {
    paddingLeft: '20px',
    marginBottom: '12px',
    lineHeight: '1.6'
  };

  const paragraph = {
    marginBottom: '12px',
    fontSize: '16px',
    lineHeight: '1.5'
  };

  const container1 = {
    backgroundColor: '#f9f9f9',
    fontFamily: 'Segoe UI, sans-serif',
    padding: '32px',
    borderRadius: '12px',
    maxWidth: '800px',
    margin: '0 auto 40px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    color: '#222',
    whiteSpace: 'pre-wrap'
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

  return (
    <>
      <div style={container}>
        <div style={sectionTitle}>
          <span style={check}>🏗️</span> Arquitetura Monolítica – Resumo
        </div>

        <div style={subsectionTitle}>Características principais:</div>
        <ul style={list}>
          <li>Todo o código em um único projeto/aplicação.</li>
          <li>Componentes compartilham processo e recursos.</li>
          <li>Comunicação direta interna, sem redes externas.</li>
        </ul>

        <div style={subsectionTitle}>Vantagens</div>
        <ul style={list}>
          <li>Fácil desenvolvimento inicial.</li>
          <li>Baixo custo de infraestrutura.</li>
          <li>Debug e testes simples.</li>
          <li>Configuração menos complexa (sem comunicação entre serviços).</li>
        </ul>

        <div style={subsectionTitle}>Desvantagens</div>
        <ul style={list}>
          <li>Escalabilidade limitada (escala o sistema todo, mesmo só uma parte precisando).</li>
          <li>Código fica difícil de manter conforme cresce.</li>
          <li>Falha em uma parte pode derrubar toda a aplicação.</li>
          <li>Implantação de qualquer mudança exige redeploy completo.</li>
        </ul>

        <div style={subsectionTitle}>Exemplo</div>
        <p style={paragraph}>
          Sistema e-commerce com módulos (usuários, produtos, pagamentos, relatórios) todos juntos — alterar um módulo exige redeploy de tudo.
        </p>

        <div style={subsectionTitle}>Quando usar</div>
        <ul style={list}>
          <li>Projetos simples, MVPs, startups.</li>
          <li>Equipes pequenas.</li>
          <li>Baixo tráfego inicial.</li>
          <li>Necessidade de custo baixo e simplicidade.</li>
        </ul>
      </div>

      <div style={container1}>
        <div style={title1}>
          <span style={check1}>🏪</span> Exemplo de Estrutura Monolítica para o Sistema de E-commerce
        </div>

        <pre style={codeBlock1}>
          {`ecommerce-app/
├── src/
│   ├── routes/
│   │   ├── usersRoutes.js
│   │   ├── productsRoutes.js
│   │   ├── paymentsRoutes.js
│   │   └── reportsRoutes.js
│   ├── controllers/
│   │   ├── usersController.js
│   │   ├── productsController.js
│   │   ├── paymentsController.js
│   │   └── reportsController.js
│   ├── models/
│   │   ├── userModel.js
│   │   ├── productModel.js
│   │   ├── paymentModel.js
│   │   └── reportModel.js
│   ├── middlewares/
│   │   ├── authMiddleware.js
│   │   └── errorHandler.js
│   ├── config/
│   │   ├── dbConfig.js
│   │   └── serverConfig.js
│   ├── app.js
│   └── server.js
├── package.json
└── Dockerfile`}
        </pre>
      </div>
    </>
  );
};

export default ArquiteturaMonolitica;
