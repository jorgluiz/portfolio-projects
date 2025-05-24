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

export default function ArchitectDashboard() {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Dashboard do Arquiteto de Software</h1>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Papel e Responsabilidades</h2>
        <p style={styles.text}>
          O <strong>Arquiteto de Software</strong> é responsável por definir a arquitetura técnica do sistema, garantindo soluções escaláveis, seguras e alinhadas com as necessidades do negócio e melhores práticas.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Projetos em Andamento</h2>

        <div style={styles.projectCard}>
          <h3 style={styles.projectTitle}>Plataforma SaaS para médico - Plano de Emagrecimento (Monolito)</h3>
          <p style={styles.projectDesc}>
            Sistema monolítico que integra agendamento, IA para CRM, comunicação por WhatsApp e dashboard para médicos acompanharem leads e pacientes.
          </p>
          <p style={styles.projectDesc}><strong>Principais responsabilidades:</strong></p>
          <ul style={styles.list}>
            <li style={styles.listItem}>Desenvolver e manter a aplicação monolítica focada em estabilidade e escalabilidade vertical.</li>
            <li style={styles.listItem}>Integrar IA para geração dinâmica de prompts e respostas personalizadas.</li>
            <li style={styles.listItem}>Implementar agendamento automatizado via Google Calendar e Cal.com.</li>
            <li style={styles.listItem}>Criar módulos para interação multimodal (texto, áudio, imagem) com pacientes.</li>
            <li style={styles.listItem}>Desenvolver dashboard para monitoramento de leads e agendamentos.</li>
            <li style={styles.listItem}>Garantir segurança e integridade dos dados sensíveis.</li>
            <li style={styles.listItem}>Automatizar notificações via WhatsApp e outras plataformas.</li>
          </ul>
        </div>
      </section>
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Estrutura Exemplo - Backend Monolito</h2>
        <pre style={styles.codeBlock}>
          {`backend/
 ├─ controllers/
 ├─ models/
 ├─ services/
 ├─ routes/
 ├─ middlewares/
 ├─ config/
 ├─ utils/
 ├─ tests/
 ├─ public/
 └─ app.js / server.js`}
        </pre>
        <p style={styles.text}>
          Backend monolítico organizado para manter código modular e claro, facilitando manutenção e evolução.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Estrutura Exemplo - Frontend Next.js</h2>
        <pre style={styles.codeBlock}>
          {`frontend/
 ├─ components/
 ├─ pages/
 ├─ public/
 ├─ styles/
 ├─ hooks/
 ├─ services/
 ├─ utils/
 ├─ contexts/
 └─ next.config.js`}
        </pre>
        <p style={styles.text}>
          Frontend Next.js estruturado para aproveitar SSR, rotas automáticas e componentes reutilizáveis.
        </p>
      </section>


      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Tecnologias e Ferramentas</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}><IconCheck /> Microsserviços & Containers (Docker, Kubernetes)</li>
          <li style={styles.listItem}><IconCheck /> APIs RESTful & GraphQL</li>
          <li style={styles.listItem}><IconCheck /> Cloud Computing (AWS, Azure, GCP)</li>
          <li style={styles.listItem}><IconCheck /> CI/CD (Jenkins, GitHub Actions)</li>
          <li style={styles.listItem}><IconCheck /> Segurança (OAuth 2.0, JWT, Criptografia)</li>
          <li style={styles.listItem}><IconCheck /> Monitoramento & Logging (Prometheus, ELK Stack)</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Principais Atividades</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}><IconCheck /> Definir padrões arquiteturais e guidelines para a equipe</li>
          <li style={styles.listItem}><IconCheck /> Revisar código para garantir qualidade e segurança</li>
          <li style={styles.listItem}><IconCheck /> Participar do planejamento de sprints e decisões técnicas</li>
          <li style={styles.listItem}><IconCheck /> Avaliar novas tecnologias e ferramentas para adoção</li>
          <li style={styles.listItem}><IconCheck /> Documentar a arquitetura e manter comunicação clara</li>
          <li style={styles.listItem}><IconCheck /> Suportar a equipe de desenvolvimento com dúvidas técnicas</li>
        </ul>
      </section>
    </div>
  );
}
