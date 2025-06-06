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
    width: 20,
    height: 20,
    marginRight: 8,
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
  <svg style={styles.icon} fill="currentColor" viewBox="0 0 16 16">
    <path d="M13.485 1.929a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0l-3.25-3.25a.75.75 0 0 1 1.06-1.06L6 8.939l6.725-6.75a.75.75 0 0 1 1.06 0z" />
  </svg>
);

export default function QaAnalystDashboard() {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Dashboard Analista de QA / Testador</h1>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Papel e Responsabilidades</h2>
        <p style={styles.text}>
          O <strong>Analista de QA</strong> é responsável por garantir a qualidade do software através da criação, execução e automação de testes, além de identificar falhas e colaborar com as equipes de desenvolvimento para corrigir defeitos.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Projetos em Andamento</h2>

        <div style={styles.card}>
          <h3 style={{ fontWeight: '700', marginBottom: '8px' }}>
            Plataforma SaaS para médico - Plano de Emagrecimento
          </h3>
          <p style={styles.text}>Responsabilidades no projeto:</p>
          <ul style={styles.list}>
            <li style={styles.listItem}><IconCheck /> Criar e validar scripts de testes para funcionalidades de agendamento e integração com WhatsApp.</li>
            <li style={styles.listItem}><IconCheck /> Testar automações envolvendo IA para interação com pacientes.</li>
            <li style={styles.listItem}><IconCheck /> Verificar o correto funcionamento do envio automático de mensagens e lembretes.</li>
            <li style={styles.listItem}><IconCheck /> Realizar testes exploratórios focados na usabilidade da plataforma.</li>
            <li style={styles.listItem}><IconCheck /> Colaborar com o time de desenvolvimento para correção rápida de bugs.</li>
          </ul>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Indicadores de Qualidade</h2>
        <p style={styles.text}>
          Acompanhamento de métricas como cobertura de testes, taxa de bugs encontrados, e tempo de resolução.
        </p>
        <div style={styles.chartContainer}>
          <div style={{ ...styles.chartBar, height: '85px' }} title="Cobertura de Testes (%)"></div>
          <div style={{ ...styles.chartBar, height: '110px' }} title="Bugs Encontrados"></div>
          <div style={{ ...styles.chartBar, height: '70px' }} title="Tempo Médio de Resolução (h)"></div>
          <div style={{ ...styles.chartBar, height: '95px' }} title="Testes Automatizados"></div>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Tarefas</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}><IconCheck /> Atualizar scripts de testes automatizados.</li>
          <li style={styles.listItem}><IconCheck /> Executar testes manuais em novas features.</li>
          <li style={styles.listItem}><IconCheck /> Revisar e priorizar bugs com a equipe de desenvolvimento.</li>
          <li style={styles.listItem}><IconCheck /> Criar planos de teste para a próxima sprint.</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Feedbacks Recentes</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            Automação aumentou a cobertura em 20%
            <span style={{ ...styles.notificationBadge, backgroundColor: '#27ae60' }}>✔</span>
          </li>
          <li style={styles.listItem}>
            Necessário revisar testes de integração
            <span style={styles.notificationBadge}>4</span>
          </li>
          <li style={styles.listItem}>
            Feedback positivo do time de desenvolvimento
            <span style={styles.notificationBadge}>6</span>
          </li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Ferramentas e Tecnologias</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}><IconCheck /> Selenium WebDriver</li>
          <li style={styles.listItem}><IconCheck /> JIRA & Confluence</li>
          <li style={styles.listItem}><IconCheck /> Postman</li>
          <li style={styles.listItem}><IconCheck /> Jenkins & CI/CD</li>
          <li style={styles.listItem}><IconCheck /> TestRail & qTest</li>
        </ul>
      </section>
    </div>
  );
}
