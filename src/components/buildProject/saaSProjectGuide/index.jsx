const SaaSProjectGuide = () => {
  const container = {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: '#fefefe',
    maxWidth: '900px',
    margin: '2rem auto',
    padding: '28px 32px',
    borderRadius: '14px',
    boxShadow: '0 4px 18px rgba(0,0,0,0.08)',
    color: '#2c3e50',
    lineHeight: 1.65,
  };

  const title = {
    fontSize: '28px',
    fontWeight: '800',
    marginBottom: '24px',
    color: '#34495e',
    textAlign: 'center',
    letterSpacing: '0.05em',
  };

  const sectionTitle = {
    fontSize: '22px',
    fontWeight: '700',
    color: '#2c3e50',
    marginTop: '32px',
    marginBottom: '16px',
    borderBottom: '3px solid #3498db',
    paddingBottom: '6px',
  };

  const paragraph = {
    fontSize: '16px',
    marginBottom: '18px',
  };

  const list = {
    paddingLeft: '24px',
    marginBottom: '24px',
  };

  const listItem = {
    marginBottom: '12px',
    fontWeight: '500',
  };

  const stepNumber = {
    display: 'inline-block',
    backgroundColor: '#3498db',
    color: 'white',
    fontWeight: '700',
    borderRadius: '50%',
    width: '30px',
    height: '30px',
    lineHeight: '30px',
    textAlign: 'center',
    marginRight: '12px',
    fontSize: '16px',
    userSelect: 'none',
  };

  const table = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '32px',
  };

  const th = {
    borderBottom: '2px solid #3498db',
    textAlign: 'left',
    padding: '10px 14px',
    fontWeight: '700',
    color: '#34495e',
    backgroundColor: '#ecf0f1',
  };

  const td = {
    padding: '10px 14px',
    borderBottom: '1px solid #ddd',
    color: '#555',
  };

  return (
    <article style={container}>
      <p style={paragraph}>
        SaaS é um modelo de software entregue pela internet onde o usuário acessa a aplicação via navegador, pagando geralmente uma assinatura, sem precisar instalar nada localmente.
      </p>

      <h2 style={sectionTitle}>Como implementar um projeto SaaS? Passo a passo básico:</h2>

      {/* Passos numerados */}
      <ol style={list}>
        <li style={listItem}>
          <span style={stepNumber}>1</span>
          <strong>Definir a ideia e o público-alvo</strong>
          <p>Qual problema seu SaaS resolve? Quem vai usar? Quais funcionalidades básicas são essenciais?</p>
        </li>

        <li style={listItem}>
          <span style={stepNumber}>2</span>
          <strong>Arquitetura e tecnologia</strong>
          <p>Frontend: React, Vue, Angular, Next.js, etc (app web responsiva)</p>
          <p>Backend: Node.js, Django, Ruby on Rails, Laravel, Spring Boot — API REST ou GraphQL</p>
          <p>Banco de dados: PostgreSQL, MySQL, MongoDB, ou outros que escalem bem</p>
          <p>Hospedagem: AWS, Azure, Google Cloud, DigitalOcean, Heroku, Vercel, etc</p>
        </li>

        <li style={listItem}>
          <span style={stepNumber}>3</span>
          <strong>Controle de usuários e autenticação</strong>
          <p>Cadastro/login, recuperação de senha, autenticação JWT, OAuth, etc</p>
          <p>Controle de permissões (ex: níveis de usuário, admins, clientes)</p>
        </li>

        <li style={listItem}>
          <span style={stepNumber}>4</span>
          <strong>Modelo de assinatura e faturamento</strong>
          <p>Escolha um gateway de pagamento: Stripe, PayPal, PagSeguro, Mercado Pago</p>
          <p>Implemente planos (gratuito, básico, premium) com controle de acesso às features</p>
          <p>Cobrança automática recorrente e gestão de assinaturas</p>
        </li>

        <li style={listItem}>
          <span style={stepNumber}>5</span>
          <strong>Infraestrutura e escalabilidade</strong>
          <p>Use containerização (Docker) para facilitar deploy e replicação</p>
          <p>Considere arquitetura serverless ou microsserviços se for crescer rápido</p>
          <p>Planeje backup e monitoramento (ex: New Relic, Datadog, Prometheus)</p>
        </li>

        <li style={listItem}>
          <span style={stepNumber}>6</span>
          <strong>Interface e experiência do usuário</strong>
          <p>Foco na usabilidade, design limpo e responsivo</p>
          <p>Painel de controle do cliente, dashboard com métricas</p>
          <p>Comunicação clara sobre planos, upgrades, notificações</p>
        </li>

        <li style={listItem}>
          <span style={stepNumber}>7</span>
          <strong>Segurança</strong>
          <p>HTTPS obrigatório, proteção contra ataques comuns (XSS, CSRF)</p>
          <p>Criptografia de senhas (bcrypt) e dados sensíveis</p>
          <p>Políticas de privacidade e compliance (LGPD, GDPR, conforme a região)</p>
        </li>

        <li style={listItem}>
          <span style={stepNumber}>8</span>
          <strong>Suporte e documentação</strong>
          <p>FAQ, chat online, tickets de suporte</p>
          <p>Documentação API (se for aberta)</p>
          <p>Base de conhecimento para clientes</p>
        </li>

        <li style={listItem}>
          <span style={stepNumber}>9</span>
          <strong>Monitoramento e análise</strong>
          <p>Logs de uso e erros</p>
          <p>Análise de métricas: churn, uso, receita, performance</p>
          <p>Ferramentas: Google Analytics, Mixpanel, Sentry</p>
        </li>

        <li style={listItem}>
          <span style={stepNumber}>10</span>
          <strong>Deploy e manutenção</strong>
          <p>Pipeline de CI/CD (GitHub Actions, GitLab CI, Jenkins)</p>
          <p>Atualizações contínuas, correção de bugs, melhorias constantes</p>
        </li>
      </ol>

      <h2 style={sectionTitle}>Resumo rápido</h2>

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#3498db', color: 'white' }}>
            <th style={{ padding: '12px 10px', border: '1px solid #2980b9' }}>Etapa</th>
            <th style={{ padding: '12px 10px', border: '1px solid #2980b9' }}>O que fazer</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '10px', border: '1px solid #ccc', fontWeight: '600' }}>Ideia e público</td>
            <td style={{ padding: '10px', border: '1px solid #ccc' }}>Definir problema e usuário</td>
          </tr>
          <tr style={{ backgroundColor: '#f7f9fc' }}>
            <td style={{ padding: '10px', border: '1px solid #ccc', fontWeight: '600' }}>Tech stack</td>
            <td style={{ padding: '10px', border: '1px solid #ccc' }}>Frontend, backend, banco, hospedagem</td>
          </tr>
          <tr>
            <td style={{ padding: '10px', border: '1px solid #ccc', fontWeight: '600' }}>Usuários e auth</td>
            <td style={{ padding: '10px', border: '1px solid #ccc' }}>Login, controle acesso, segurança</td>
          </tr>
          <tr style={{ backgroundColor: '#f7f9fc' }}>
            <td style={{ padding: '10px', border: '1px solid #ccc', fontWeight: '600' }}>Pagamentos</td>
            <td style={{ padding: '10px', border: '1px solid #ccc' }}>Gateways, planos, assinaturas</td>
          </tr>
          <tr>
            <td style={{ padding: '10px', border: '1px solid #ccc', fontWeight: '600' }}>Infraestrutura</td>
            <td style={{ padding: '10px', border: '1px solid #ccc' }}>Deploy, escalabilidade, backups</td>
          </tr>
          <tr style={{ backgroundColor: '#f7f9fc' }}>
            <td style={{ padding: '10px', border: '1px solid #ccc', fontWeight: '600' }}>UI/UX</td>
            <td style={{ padding: '10px', border: '1px solid #ccc' }}>Design, painel, experiência</td>
          </tr>
          <tr>
            <td style={{ padding: '10px', border: '1px solid #ccc', fontWeight: '600' }}>Segurança</td>
            <td style={{ padding: '10px', border: '1px solid #ccc' }}>HTTPS, criptografia, compliance</td>
          </tr>
          <tr style={{ backgroundColor: '#f7f9fc' }}>
            <td style={{ padding: '10px', border: '1px solid #ccc', fontWeight: '600' }}>Suporte</td>
            <td style={{ padding: '10px', border: '1px solid #ccc' }}>Atendimento, documentação</td>
          </tr>
          <tr>
            <td style={{ padding: '10px', border: '1px solid #ccc', fontWeight: '600' }}>Monitoramento</td>
            <td style={{ padding: '10px', border: '1px solid #ccc' }}>Logs, métricas, análises</td>
          </tr>
          <tr style={{ backgroundColor: '#f7f9fc' }}>
            <td style={{ padding: '10px', border: '1px solid #ccc', fontWeight: '600' }}>Deploy</td>
            <td style={{ padding: '10px', border: '1px solid #ccc' }}>Automação, CI/CD</td>
          </tr>
        </tbody>
      </table>
    </article>
  );
};

export default SaaSProjectGuide;
