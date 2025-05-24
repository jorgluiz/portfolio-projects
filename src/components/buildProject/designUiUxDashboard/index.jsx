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
  <svg style={styles.icon} fill="currentColor" viewBox="0 0 16 16">
    <path d="M13.485 1.929a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0l-3.25-3.25a.75.75 0 0 1 1.06-1.06L6 8.939l6.725-6.75a.75.75 0 0 1 1.06 0z" />
  </svg>
);

export default function DesignUiUxDashboard() {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Design UI/UX Dashboard</h1>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Papel e Responsabilidades</h2>
        <p style={styles.text}>
          O <strong>Designer UI/UX</strong> é responsável por criar experiências intuitivas, visuais atraentes e funcionais para os usuários, garantindo a usabilidade, acessibilidade e alinhamento com os objetivos do negócio.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Projetos em Andamento</h2>
        <div style={styles.card}>
          <h3 style={{ fontWeight: '700', marginBottom: '8px' }}>
            SaaS para Médicos com Plano de Emagrecimento
          </h3>
          <p style={styles.text}>
            Responsabilidades do Designer UI/UX nesse projeto:
          </p>
          <ul style={styles.list}>
            <li style={styles.listItem}><IconCheck /> Desenvolver wireframes e protótipos para o painel do médico e interface do paciente.</li>
            <li style={styles.listItem}><IconCheck /> Criar fluxos intuitivos para o cadastro de serviços, valores e protocolos.</li>
            <li style={styles.listItem}><IconCheck /> Projetar a interface de agendamento integrada com calendários externos, garantindo clareza e usabilidade.</li>
            <li style={styles.listItem}><IconCheck /> Desenvolver a experiência da interação com o agente IA, tornando a comunicação natural e eficaz.</li>
            <li style={styles.listItem}><IconCheck /> Garantir que o design suporte funcionalidades avançadas como reconhecimento de áudio, imagens e documentos.</li>
            <li style={styles.listItem}><IconCheck /> Criar layouts para grupos de WhatsApp e mensagens automáticas que sejam claros e responsivos.</li>
            <li style={styles.listItem}><IconCheck /> Projetar dashboards de monitoramento com visualização clara para leads, mensagens e checklists.</li>
            <li style={styles.listItem}><IconCheck /> Manter a coerência visual com o guia de estilo e garantir acessibilidade para todos os usuários.</li>
            <li style={styles.listItem}><IconCheck /> Trabalhar junto ao time de desenvolvimento para assegurar a implementação fiel dos designs.</li>
          </ul>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Visão Geral do Design</h2>
        <p style={styles.text}>
          Monitoramento dos principais indicadores de usabilidade, acessibilidade e performance dos projetos de interface.
        </p>
        <div style={styles.chartContainer}>
          <div style={{ ...styles.chartBar, height: '90px' }} title="Usabilidade"></div>
          <div style={{ ...styles.chartBar, height: '110px' }} title="Acessibilidade"></div>
          <div style={{ ...styles.chartBar, height: '70px' }} title="Performance"></div>
          <div style={{ ...styles.chartBar, height: '100px' }} title="Satisfação"></div>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Tarefas de Design</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}><IconCheck /> Revisar wireframes e protótipos</li>
          <li style={styles.listItem}><IconCheck /> Atualizar guia de estilo e componentes</li>
          <li style={styles.listItem}><IconCheck /> Testes de usabilidade com usuários finais</li>
          <li style={styles.listItem}><IconCheck /> Ajustar design para responsividade mobile</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Feedbacks Recentes</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            Nova paleta de cores aprovada
            <span style={{ ...styles.notificationBadge, backgroundColor: '#27ae60' }}>✔</span>
          </li>
          <li style={styles.listItem}>
            Ajustes solicitados no menu lateral
            <span style={styles.notificationBadge}>3</span>
          </li>
          <li style={styles.listItem}>
            Sugestões para melhorar o fluxo de cadastro
            <span style={styles.notificationBadge}>5</span>
          </li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Ferramentas e Tecnologias</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}><IconCheck /> Figma & Adobe XD</li>
          <li style={styles.listItem}><IconCheck /> React & Styled Components</li>
          <li style={styles.listItem}><IconCheck /> Storybook & Design Systems</li>
          <li style={styles.listItem}><IconCheck /> Testes de Acessibilidade (axe, Lighthouse)</li>
        </ul>
      </section>
    </div>
  );
}
