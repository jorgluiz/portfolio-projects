const styles = {
  container: {
    maxWidth: 900,
    margin: '24px auto',
    padding: '15px',
    backgroundColor: '#f7f9fc',
    borderRadius: '16px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.12)',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#2c3e50',
  },
  header: {
    fontSize: '32px',
    fontWeight: '900',
    marginBottom: '16px',
    color: '#34495e',
    textAlign: 'center',
  },
  section: {
    marginBottom: '24px',
  },
  sectionTitle: {
    fontSize: '22px',
    fontWeight: '700',
    borderBottom: '3px solid #2980b9',
    paddingBottom: '6px',
    marginBottom: '16px',
    color: '#2980b9',
  },
  text: {
    fontSize: '16px',
    lineHeight: '1.5',
  },
  list: {
    listStyle: 'none',
    paddingLeft: 0,
    marginTop: 0,
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '12px',
    fontSize: '16px',
  },
  icon: {
    display: 'inline-block',
    width: '24px',
    height: '24px',
    marginRight: '12px',
    color: '#2980b9',
    flexShrink: 0,
  },
  card: {
    backgroundColor: '#ecf0f1',
    padding: '16px',
    borderRadius: '12px',
    boxShadow: 'inset 0 0 6px rgba(0,0,0,0.05)',
    marginBottom: '12px',
  },
  chartContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '12px',
  },
  chartBar: {
    width: '30px',
    backgroundColor: '#2980b9',
    borderRadius: '4px 4px 0 0',
    margin: '0 6px',
  },
  notificationBadge: {
    backgroundColor: '#e74c3c',
    borderRadius: '50%',
    color: 'white',
    width: '20px',
    height: '20px',
    fontSize: '12px',
    textAlign: 'center',
    lineHeight: '20px',
    marginLeft: '8px',
  },
};

const IconCheck = () => (
  <svg style={{ width: 20, height: 20, marginRight: 8, color: '#2980b9' }} fill="currentColor" viewBox="0 0 16 16">
    <path d="M13.485 1.929a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0l-3.25-3.25a.75.75 0 0 1 1.06-1.06L6 8.939l6.725-6.75a.75.75 0 0 1 1.06 0z" />
  </svg>
);

export default function CustomerSuccessDashboard() {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Dashboard Customer Success / Suporte Técnico</h1>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Papel e Responsabilidades</h2>
        <p style={styles.text}>
          O <strong>Customer Success</strong> é responsável por garantir a satisfação e sucesso do cliente com o produto/serviço, enquanto o <strong>Suporte Técnico</strong> resolve problemas técnicos e oferece assistência especializada.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Projetos em Andamento</h2>
        <div style={styles.card}>
          <h3 style={{ fontWeight: '700', marginBottom: '8px' }}>
            Implantação de Plataforma de Suporte Omnicanal
          </h3>
          <p style={styles.text}>Responsabilidades no projeto:</p>
          <ul style={styles.list}>
            <li style={styles.listItem}><IconCheck /> Configurar sistemas de atendimento via chat, e-mail e telefone.</li>
            <li style={styles.listItem}><IconCheck /> Treinar equipe para uso eficiente das ferramentas.</li>
            <li style={styles.listItem}><IconCheck /> Mapear jornadas do cliente para melhoria contínua.</li>
            <li style={styles.listItem}><IconCheck /> Desenvolver base de conhecimento e FAQs para autoatendimento.</li>
            <li style={styles.listItem}><IconCheck /> Analisar métricas de satisfação e tempo de resposta.</li>
            <li style={styles.listItem}><IconCheck /> Implementar fluxos automatizados para resolução rápida de problemas comuns.</li>
          </ul>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Indicadores de Performance</h2>
        <p style={styles.text}>
          Acompanhar métricas como NPS, tempo médio de atendimento, taxa de resolução no primeiro contato e volume de tickets.
        </p>
        <div style={styles.chartContainer}>
          <div style={{ ...styles.chartBar, height: '95px' }} title="NPS"></div>
          <div style={{ ...styles.chartBar, height: '105px' }} title="Tempo Médio Atendimento (min)"></div>
          <div style={{ ...styles.chartBar, height: '85px' }} title="Resolução 1º Contato (%)"></div>
          <div style={{ ...styles.chartBar, height: '75px' }} title="Volume de Tickets"></div>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Tarefas</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}><IconCheck /> Monitorar e responder tickets prioritários.</li>
          <li style={styles.listItem}><IconCheck /> Atualizar base de conhecimento com novas soluções.</li>
          <li style={styles.listItem}><IconCheck /> Realizar treinamentos de produto para equipe.</li>
          <li style={styles.listItem}><IconCheck /> Analisar feedbacks e propor melhorias no atendimento.</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Feedbacks Recentes</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            Aumento de 15% no NPS
            <span style={{ ...styles.notificationBadge, backgroundColor: '#27ae60' }}>✔</span>
          </li>
          <li style={styles.listItem}>
            Diminuição do tempo médio de atendimento
            <span style={styles.notificationBadge}>3</span>
          </li>
          <li style={styles.listItem}>
            Feedback positivo da equipe de vendas
            <span style={styles.notificationBadge}>4</span>
          </li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Ferramentas e Tecnologias</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}><IconCheck /> Zendesk & Freshdesk</li>
          <li style={styles.listItem}><IconCheck /> Salesforce Service Cloud</li>
          <li style={styles.listItem}><IconCheck /> Intercom & Drift</li>
          <li style={styles.listItem}><IconCheck /> Jira Service Management</li>
          <li style={styles.listItem}><IconCheck /> Slack & Microsoft Teams</li>
        </ul>
      </section>
    </div>
  );
}
