import React from 'react';

const styles = {
  container: {
    maxWidth: 900,
    margin: '24px auto',
    padding: '24px',
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
};

const IconCheck = () => (
  <svg
    style={styles.icon}
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path d="M13.485 1.929a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0l-3.25-3.25a.75.75 0 0 1 1.06-1.06L6 8.939l6.725-6.75a.75.75 0 0 1 1.06 0z" />
  </svg>
);

export default function ProductOwnerDashboard() {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Dashboard do Product Owner</h1>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Função Principal</h2>
        <p style={styles.text}>
          O <strong>Product Owner</strong> é o responsável por maximizar o valor do produto criado pela equipe de desenvolvimento, definindo e priorizando requisitos, alinhando stakeholders e garantindo que o produto final atenda às necessidades dos usuários e objetivos do negócio.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Projeto Atual</h2>
        <div style={styles.projectCard}>
          <h3 style={styles.projectTitle}>Plataforma SaaS para Médicos - Plano de Emagrecimento</h3>
          <p style={styles.projectDesc}>
            Projeto focado no desenvolvimento de um sistema que integra WhatsApp, agendamento automático, IA personalizada para acompanhamento de pacientes e dashboards intuitivos para médicos acompanharem o progresso dos seus clientes.
          </p>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Exemplos de Outros Projetos SaaS</h2>
        <div style={styles.projectCard}>
          <h3 style={styles.projectTitle}>Gestão de Clínicas</h3>
          <p style={styles.projectDesc}>
            Sistema integrado para agendamento, prontuário eletrônico, faturamento e comunicação com pacientes.
          </p>
        </div>
        <div style={styles.projectCard}>
          <h3 style={styles.projectTitle}>Plataforma de Educação Online</h3>
          <p style={styles.projectDesc}>
            Plataforma com cursos, avaliações automatizadas, acompanhamento de desempenho e integração com redes sociais.
          </p>
        </div>
        <div style={styles.projectCard}>
          <h3 style={styles.projectTitle}>Ferramenta de Vendas para E-commerce</h3>
          <p style={styles.projectDesc}>
            Dashboard para gestão de pedidos, controle de estoque, promoções e análise de métricas de vendas.
          </p>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Responsabilidades e Possibilidades</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <IconCheck />
            Definir e priorizar o backlog do produto para maximizar valor.
          </li>
          <li style={styles.listItem}>
            <IconCheck />
            Comunicar-se com stakeholders, alinhando expectativas e metas.
          </li>
          <li style={styles.listItem}>
            <IconCheck />
            Validar entregas, garantindo que requisitos sejam atendidos.
          </li>
          <li style={styles.listItem}>
            <IconCheck />
            Participar de cerimônias ágeis (Sprint Planning, Review, Retrospectiva).
          </li>
          <li style={styles.listItem}>
            <IconCheck />
            Analisar feedback de usuários e métricas para decisões informadas.
          </li>
          <li style={styles.listItem}>
            <IconCheck />
            Colaborar com equipe de UX para garantir ótima experiência do usuário.
          </li>
          <li style={styles.listItem}>
            <IconCheck />
            Identificar oportunidades de melhorias contínuas e inovação.
          </li>
        </ul>
      </section>
    </div>
  );
}
