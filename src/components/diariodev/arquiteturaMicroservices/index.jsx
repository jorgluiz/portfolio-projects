const ArquiteturaMicroservices = () => {
  const container = {
    fontFamily: 'Segoe UI, sans-serif',
    padding: '24px',
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
          <span style={check}>🧩</span> Arquitetura Microservices – Resumo
        </div>

        <div style={subsectionTitle}>Conceito:</div>
        <p style={paragraph}>
          Aplicação dividida em vários serviços independentes, cada um responsável por uma funcionalidade específica, comunicando-se via APIs (REST, gRPC) ou mensagens (RabbitMQ, Kafka).
        </p>

        <div style={subsectionTitle}>Exemplo (e-commerce):</div>
        <ul style={list}>
          <li>Serviço de Usuários (auth, users_db)</li>
          <li>Serviço de Produtos (produtos_db)</li>
          <li>Serviço de Pagamentos (payments_db)</li>
          <li>Serviço de Relatórios (reports_db)</li>
          <li>Cada serviço tem seu próprio banco e lógica.</li>
        </ul>

        <div style={subsectionTitle}>Comunicação:</div>
        <ul style={list}>
          <li>APIs REST para chamadas síncronas.</li>
          <li>Mensageria para tarefas assíncronas.</li>
        </ul>

        <div style={subsectionTitle}>Orquestração:</div>
        <ul style={list}>
          <li>API Gateway (ponto único de entrada).</li>
          <li>Service Discovery (Consul, Eureka) para localizar serviços.</li>
        </ul>

        <div style={subsectionTitle}>Vantagens</div>
        <ul style={list}>
          <li>Escala individual de serviços.</li>
          <li>Resiliência (falha em um não derruba tudo).</li>
          <li>Manutenção facilitada, equipes separadas.</li>
          <li>Flexibilidade tecnológica por serviço.</li>
        </ul>

        <div style={subsectionTitle}>Desvantagens</div>
        <ul style={list}>
          <li>Maior complexidade na gestão e deploy.</li>
          <li>Latência pela comunicação em rede.</li>
          <li>Mais custo de infraestrutura.</li>
          <li>Desafio em manter consistência dos dados.</li>
        </ul>

        <div style={subsectionTitle}>Quando usar</div>
        <ul style={list}>
          <li>Projetos grandes e que precisam escalar rápido.</li>
          <li>Equipes grandes e distribuídas.</li>
          <li>Sistemas que exigem alta disponibilidade e tolerância a falhas.</li>
        </ul>
      </div>

      <div style={container1}>
        <div style={title1}>
          <span style={check1}>⚙️</span> Escalável com a arquitetura correta (microservices, clustering)
        </div>

        <pre style={codeBlock1}>
          {`users-service/
├── src/
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   └── app.js
├── package.json
└── Dockerfile

products-service/
├── src/
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   └── app.js
├── package.json
└── Dockerfile

payments-service/
├── src/
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   └── app.js
├── package.json
└── Dockerfile`}
        </pre>
      </div>
    </>
  );
};

export default ArquiteturaMicroservices;
