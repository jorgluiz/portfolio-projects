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

export default function SecuritySpecialistDashboard() {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Dashboard Especialista em Segurança da Informação</h1>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Papel e Responsabilidades</h2>
        <p style={styles.text}>
          O <strong>Especialista em Segurança da Informação</strong> protege os ativos digitais da organização, implementando políticas, monitorando ameaças, realizando auditorias e garantindo conformidade com normas e regulamentos.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Projetos em Andamento</h2>
        <div style={styles.card}>
          <h3 style={{ fontWeight: '700', marginBottom: '8px' }}>
            Implementação de Sistema de Detecção e Resposta a Incidentes (SIEM)
          </h3>
          <p style={styles.text}>Responsabilidades no projeto:</p>
          <ul style={styles.list}>
            <li style={styles.listItem}><IconCheck /> Configurar e monitorar ferramentas SIEM para detecção proativa.</li>
            <li style={styles.listItem}><IconCheck /> Desenvolver procedimentos para resposta rápida a incidentes.</li>
            <li style={styles.listItem}><IconCheck /> Realizar testes de penetração e avaliação de vulnerabilidades.</li>
            <li style={styles.listItem}><IconCheck /> Treinar equipes internas em melhores práticas de segurança.</li>
            <li style={styles.listItem}><IconCheck /> Garantir conformidade com GDPR, LGPD e outras normas relevantes.</li>
            <li style={styles.listItem}><IconCheck /> Documentar políticas de segurança e auditorias regulares.</li>
          </ul>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Indicadores de Segurança</h2>
        <p style={styles.text}>
          Monitoramento de métricas como número de incidentes detectados, tempo médio de resposta, vulnerabilidades encontradas e conformidade.
        </p>
        <div style={styles.chartContainer}>
          <div style={{ ...styles.chartBar, height: '90px' }} title="Incidentes Detectados"></div>
          <div style={{ ...styles.chartBar, height: '110px' }} title="Tempo Médio Resposta (min)"></div>
          <div style={{ ...styles.chartBar, height: '75px' }} title="Vulnerabilidades Corrigidas"></div>
          <div style={{ ...styles.chartBar, height: '100px' }} title="Conformidade (%)"></div>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Tarefas</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}><IconCheck /> Atualizar regras do firewall e IDS/IPS.</li>
          <li style={styles.listItem}><IconCheck /> Realizar auditorias de acesso e permissões.</li>
          <li style={styles.listItem}><IconCheck /> Revisar relatórios de segurança e implementar melhorias.</li>
          <li style={styles.listItem}><IconCheck /> Coordenar treinamentos de conscientização para colaboradores.</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Feedbacks Recentes</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            Redução de 30% em incidentes críticos
            <span style={{ ...styles.notificationBadge, backgroundColor: '#27ae60' }}>✔</span>
          </li>
          <li style={styles.listItem}>
            Necessário aprimorar monitoramento em cloud
            <span style={styles.notificationBadge}>2</span>
          </li>
          <li style={styles.listItem}>
            Feedback positivo da auditoria externa
            <span style={styles.notificationBadge}>5</span>
          </li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Ferramentas e Tecnologias</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}><IconCheck /> Splunk & ELK Stack</li>
          <li style={styles.listItem}><IconCheck /> Wireshark & Nmap</li>
          <li style={styles.listItem}><IconCheck /> Metasploit & Burp Suite</li>
          <li style={styles.listItem}><IconCheck /> VPNs & Firewalls</li>
          <li style={styles.listItem}><IconCheck /> Sistemas de autenticação multifator (MFA)</li>
        </ul>
      </section>
    </div>
  );
}
