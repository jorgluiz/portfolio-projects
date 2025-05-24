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
  projectCard: {
    backgroundColor: '#ecf0f1',
    padding: '16px',
    borderRadius: '12px',
    boxShadow: 'inset 0 0 6px rgba(0,0,0,0.05)',
    marginBottom: '12px',
  },
  projectTitle: {
    fontWeight: '700',
    marginBottom: '6px',
  },
  projectDesc: {
    fontSize: '14px',
    color: '#555',
  },
  codeBlock: {
    backgroundColor: '#dbe9f4',
    padding: '12px 16px',
    borderRadius: '10px',
    fontFamily: "'Courier New', Courier, monospace",
    fontSize: '14px',
    color: '#34495e',
    overflowX: 'auto',
    marginTop: '8px',
  },
};

const IconCheck = () => (
  <svg style={styles.icon} fill="currentColor" viewBox="0 0 16 16">
    <path d="M13.485 1.929a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0l-3.25-3.25a.75.75 0 0 1 1.06-1.06L6 8.939l6.725-6.75a.75.75 0 0 1 1.06 0z" />
  </svg>
);

export default function FrontendDeveloperDashboard() {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Dashboard do Desenvolvedor Frontend</h1>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Papel e Responsabilidades</h2>
        <p style={styles.text}>
          O <strong>Desenvolvedor Frontend</strong> é responsável por criar interfaces de usuário intuitivas, responsivas e acessíveis, garantindo ótima experiência em múltiplos dispositivos.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Projetos em Andamento</h2>

        <div style={styles.projectCard}>
          <h3 style={styles.projectTitle}>Portal Médico e Dashboard de Pacientes</h3>
          <p style={styles.projectDesc}>
            Desenvolvimento de interfaces React com integração a APIs, dashboards dinâmicos e funcionalidades responsivas para médicos e pacientes.
          </p>
        </div>

        <div style={styles.projectCard}>
          <h3 style={styles.projectTitle}>Aplicativo Web de Agendamento</h3>
          <p style={styles.projectDesc}>
            Interface intuitiva para agendamento online, uso de React Router, formulários controlados e validações customizadas.
          </p>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Estrutura Exemplo - Frontend</h2>
        <pre style={styles.codeBlock}>
          {`src/
 ├─ components/
 │   ├─ common/
 │   ├─ dashboard/
 │   ├─ forms/
 │   └─ layout/
 ├─ hooks/
 ├─ pages/
 ├─ services/
 ├─ styles/
 └─ App.jsx`}
        </pre>
        <p style={styles.text}>
          Organização modular com componentes reutilizáveis, hooks customizados, páginas e serviços para consumo de APIs.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Tecnologias e Ferramentas</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}><IconCheck /> React, React Router, Redux / Zustand</li>
          <li style={styles.listItem}><IconCheck /> TypeScript / JavaScript ES6+</li>
          <li style={styles.listItem}><IconCheck /> CSS Modules, Styled Components, SASS</li>
          <li style={styles.listItem}><IconCheck /> Testes unitários e integração (Jest, React Testing Library)</li>
          <li style={styles.listItem}><IconCheck /> Ferramentas de build (Webpack, Vite)</li>
          <li style={styles.listItem}><IconCheck /> Acessibilidade (ARIA), performance e SEO</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Principais Atividades</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}><IconCheck /> Desenvolver interfaces responsivas e acessíveis</li>
          <li style={styles.listItem}><IconCheck /> Consumir APIs REST/GraphQL e gerenciar estado</li>
          <li style={styles.listItem}><IconCheck /> Garantir testes e qualidade do código</li>
          <li style={styles.listItem}><IconCheck /> Otimizar performance e melhorar UX</li>
          <li style={styles.listItem}><IconCheck /> Colaborar com designers e backend para entregas integradas</li>
          <li style={styles.listItem}><IconCheck /> Documentar componentes e padrões de UI</li>
        </ul>
      </section>
    </div>
  );
}
