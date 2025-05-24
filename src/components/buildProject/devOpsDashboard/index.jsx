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

export default function DevOpsDashboard() {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Dashboard do Engenheiro DevOps</h1>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Papel e Responsabilidades</h2>
        <p style={styles.text}>
          O <strong>Engenheiro DevOps</strong> é responsável por automatizar processos de deploy, gerenciar infraestrutura em nuvem, monitorar sistemas e garantir alta disponibilidade, segurança e escalabilidade das aplicações.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Projetos em Andamento</h2>

        <div style={styles.projectCard}>
          <h3 style={styles.projectTitle}>Pipeline CI/CD para Plataforma SaaS Médica</h3>
          <p style={styles.projectDesc}>
            Configuração e manutenção de pipelines automatizados para build, testes e deploy contínuo usando Jenkins e GitHub Actions.
          </p>
        </div>

        <div style={styles.projectCard}>
          <h3 style={styles.projectTitle}>Infraestrutura Kubernetes e Docker</h3>
          <p style={styles.projectDesc}>
            Gestão de clusters Kubernetes para orquestração de microsserviços e containers Docker, garantindo escalabilidade e alta disponibilidade.
          </p>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Estrutura Exemplo - Infraestrutura</h2>
        <pre style={styles.codeBlock}>
          {`infrastructure/
 ├─ terraform/
 ├─ ansible/
 ├─ k8s/
 │   ├─ deployments/
 │   ├─ services/
 │   └─ ingress/
 ├─ scripts/
 └─ monitoring/`}
        </pre>
        <p style={styles.text}>
          Organização da infraestrutura como código com Terraform e Ansible, configuração de deployments Kubernetes e scripts de automação.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Tecnologias e Ferramentas</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}><IconCheck /> Docker & Kubernetes</li>
          <li style={styles.listItem}><IconCheck /> CI/CD (Jenkins, GitHub Actions, GitLab CI)</li>
          <li style={styles.listItem}><IconCheck /> Infraestrutura como Código (Terraform, Ansible)</li>
          <li style={styles.listItem}><IconCheck /> Monitoramento (Prometheus, Grafana, ELK)</li>
          <li style={styles.listItem}><IconCheck /> Cloud Providers (AWS, Azure, GCP)</li>
          <li style={styles.listItem}><IconCheck /> Segurança & Backup</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Principais Atividades</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}><IconCheck /> Automatizar processos de build, teste e deploy</li>
          <li style={styles.listItem}><IconCheck /> Gerenciar clusters e containers em produção</li>
          <li style={styles.listItem}><IconCheck /> Implementar e monitorar políticas de segurança</li>
          <li style={styles.listItem}><IconCheck /> Garantir alta disponibilidade e escalabilidade</li>
          <li style={styles.listItem}><IconCheck /> Suporte e colaboração com times de desenvolvimento</li>
          <li style={styles.listItem}><IconCheck /> Documentar processos e infraestrutura</li>
        </ul>
      </section>
    </div>
  );
}
