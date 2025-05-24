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

// Ícones simplificados para ferramentas

const IconPhotoshop = () => (
  <svg style={styles.icon} viewBox="0 0 24 24" fill="#31A8FF" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="3" />
    <text x="6" y="17" fontSize="12" fontWeight="700" fill="white" fontFamily="Arial, sans-serif">Ps</text>
  </svg>
);

const IconIllustrator = () => (
  <svg style={styles.icon} viewBox="0 0 24 24" fill="#FF9A00" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="3" />
    <text x="5" y="17" fontSize="12" fontWeight="700" fill="white" fontFamily="Arial, sans-serif">Ai</text>
  </svg>
);

const IconFigma = () => (
  <svg style={styles.icon} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="6" r="3" fill="#F24E1E" />
    <rect x="9" y="9" width="6" height="6" rx="3" fill="#A259FF" />
    <circle cx="12" cy="18" r="3" fill="#1ABCFE" />
    <rect x="6" y="12" width="3" height="3" rx="1.5" fill="#0ACF83" />
  </svg>
);

const IconSketch = () => (
  <svg style={styles.icon} viewBox="0 0 24 24" fill="#F7B500" xmlns="http://www.w3.org/2000/svg">
    <polygon points="12,2 22,7 18,22 6,22 2,7" />
  </svg>
);

const IconInDesign = () => (
  <svg style={styles.icon} viewBox="0 0 24 24" fill="#FF3366" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="3" />
    <text x="5" y="17" fontSize="12" fontWeight="700" fill="white" fontFamily="Arial, sans-serif">Id</text>
  </svg>
);

const IconAfterEffects = () => (
  <svg style={styles.icon} viewBox="0 0 24 24" fill="#9999FF" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="3" />
    <text x="3" y="17" fontSize="10" fontWeight="700" fill="white" fontFamily="Arial, sans-serif">Ae</text>
  </svg>
);

const IconTrello = () => (
  <svg style={styles.icon} viewBox="0 0 24 24" fill="#0079BF" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="3" />
    <rect x="6" y="5" width="4" height="14" fill="white" />
    <rect x="13" y="5" width="4" height="7" fill="white" />
  </svg>
);

const IconAsana = () => (
  <svg style={styles.icon} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#EC5424">
    <circle cx="7" cy="6" r="3" />
    <circle cx="17" cy="6" r="3" />
    <circle cx="12" cy="17" r="3" />
  </svg>
);


const IconCheck = () => (
  <svg style={styles.icon} fill="currentColor" viewBox="0 0 16 16">
    <path d="M13.485 1.929a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0l-3.25-3.25a.75.75 0 0 1 1.06-1.06L6 8.939l6.725-6.75a.75.75 0 0 1 1.06 0z" />
  </svg>
);

export default function GraphicDesignerDashboard() {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Dashboard Designer Gráfico</h1>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Papel e Responsabilidades</h2>
        <p style={styles.text}>
          O <strong>Designer Gráfico</strong> é responsável pela criação de peças visuais que comunicam eficazmente a mensagem da marca, assegurando estética, coerência visual e impacto.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Projetos em Andamento</h2>
        <div style={styles.card}>
          <h3 style={{ fontWeight: '700', marginBottom: '8px' }}>
            SaaS para Médicos com Plano de Emagrecimento
          </h3>
          <p style={styles.text}>Responsabilidades no projeto:</p>
          <ul style={styles.list}>
            <li style={styles.listItem}><IconCheck /> Criar identidade visual consistente para a plataforma.</li>
            <li style={styles.listItem}><IconCheck /> Desenvolver layouts para interfaces web e mobile focadas em usabilidade.</li>
            <li style={styles.listItem}><IconCheck /> Projetar materiais gráficos para divulgação e campanhas.</li>
            <li style={styles.listItem}><IconCheck /> Elaborar elementos visuais para funcionalidades do agente IA, como notificações e dashboards.</li>
            <li style={styles.listItem}><IconCheck /> Garantir que os designs atendam aos princípios de acessibilidade.</li>
            <li style={styles.listItem}><IconCheck /> Trabalhar próximo ao time de UX e desenvolvimento para assegurar a implementação fiel.</li>
            <li style={styles.listItem}><IconCheck /> Criar peças para redes sociais que promovam a plataforma e engajem usuários.</li>
          </ul>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Visão Geral do Trabalho</h2>
        <p style={styles.text}>
          Indicadores-chave de performance do design, incluindo entregas, prazos cumpridos, e impacto visual.
        </p>
        <div style={styles.chartContainer}>
          <div style={{ ...styles.chartBar, height: '100px' }} title="Entregas"></div>
          <div style={{ ...styles.chartBar, height: '90px' }} title="Prazos"></div>
          <div style={{ ...styles.chartBar, height: '110px' }} title="Feedback Positivo"></div>
          <div style={{ ...styles.chartBar, height: '80px' }} title="Revisões"></div>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Tarefas</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}><IconCheck /> Criar variações para o logo da plataforma.</li>
          <li style={styles.listItem}><IconCheck /> Finalizar arte para materiais promocionais.</li>
          <li style={styles.listItem}><IconCheck /> Ajustar design para responsividade mobile.</li>
          <li style={styles.listItem}><IconCheck /> Revisar feedback e implementar alterações.</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Feedbacks Recentes</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            Aprovação da paleta de cores
            <span style={{ ...styles.notificationBadge, backgroundColor: '#27ae60' }}>✔</span>
          </li>
          <li style={styles.listItem}>
            Solicitação de ajustes na tipografia
            <span style={styles.notificationBadge}>2</span>
          </li>
          <li style={styles.listItem}>
            Sugestões para novas ilustrações
            <span style={styles.notificationBadge}>4</span>
          </li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Ferramentas e Tecnologias</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}><IconPhotoshop /> Adobe Photoshop & Illustrator</li>
          <li style={styles.listItem}><IconFigma /> Figma & Sketch</li>
          <li style={styles.listItem}><IconInDesign /> InDesign & After Effects</li>
          <li style={styles.listItem}><IconTrello /> Plataformas de gerenciamento de projetos (Trello, Asana)</li>
        </ul>
      </section>

    </div>
  );
}
