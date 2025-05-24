// const styles = {
//   container: {
//     maxWidth: 900,
//     margin: '24px auto',
//     padding: '15px',
//     backgroundColor: '#f7f9fc',
//     borderRadius: '16px',
//     boxShadow: '0 8px 20px rgba(0,0,0,0.12)',
//     fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//     color: '#2c3e50',
//   },
//   header: {
//     fontSize: '32px',
//     fontWeight: '900',
//     marginBottom: '16px',
//     color: '#34495e',
//     textAlign: 'center',
//   },
//   section: {
//     marginBottom: '24px',
//   },
//   sectionTitle: {
//     fontSize: '22px',
//     fontWeight: '700',
//     borderBottom: '3px solid #2980b9',
//     paddingBottom: '6px',
//     marginBottom: '16px',
//     color: '#2980b9',
//   },
//   text: {
//     fontSize: '16px',
//     lineHeight: '1.5',
//   },
//   list: {
//     listStyle: 'none',
//     paddingLeft: 0,
//     marginTop: 0,
//   },
//   listItem: {
//     display: 'flex',
//     alignItems: 'center',
//     marginBottom: '12px',
//     fontSize: '16px',
//   },
//   icon: {
//     display: 'inline-block',
//     width: '24px',
//     height: '24px',
//     marginRight: '12px',
//     color: '#2980b9',
//     flexShrink: 0,
//   },
//   projectCard: {
//     backgroundColor: '#ecf0f1',
//     padding: '16px',
//     borderRadius: '12px',
//     boxShadow: 'inset 0 0 6px rgba(0,0,0,0.05)',
//     marginBottom: '12px',
//   },
//   projectTitle: {
//     fontWeight: '700',
//     marginBottom: '6px',
//   },
//   projectDesc: {
//     fontSize: '14px',
//     color: '#555',
//   },
//   codeBlock: {
//     backgroundColor: '#dbe9f4',
//     padding: '12px 16px',
//     borderRadius: '10px',
//     fontFamily: "'Courier New', Courier, monospace",
//     fontSize: '14px',
//     color: '#34495e',
//     overflowX: 'auto',
//     marginTop: '8px',
//   },
// };

// const IconCheck = () => (
//   <svg style={styles.icon} fill="currentColor" viewBox="0 0 16 16">
//     <path d="M13.485 1.929a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0l-3.25-3.25a.75.75 0 0 1 1.06-1.06L6 8.939l6.725-6.75a.75.75 0 0 1 1.06 0z" />
//   </svg>
// );

// export default function BackendDeveloperDashboard() {
//   return (
//     <div style={styles.container}>
//       <h1 style={styles.header}>Dashboard do Desenvolvedor Backend</h1>

//       <section style={styles.section}>
//         <h2 style={styles.sectionTitle}>Papel e Responsabilidades</h2>
//         <p style={styles.text}>
//           O <strong>Desenvolvedor Backend</strong> é responsável por criar e manter a lógica do servidor, APIs, banco de dados e garantir que o sistema funcione de forma segura, eficiente e escalável.
//         </p>
//       </section>

//       <section style={styles.section}>
//         <h2 style={styles.sectionTitle}>Projetos em Andamento</h2>

//         <div style={styles.projectCard}>
//           <h3 style={styles.projectTitle}>API para Plataforma SaaS Médica</h3>
//           <p style={styles.projectDesc}>
//             Desenvolvimento de APIs RESTful para gerenciamento de pacientes, agendamentos e integração com serviços externos como WhatsApp e Google Calendar.
//           </p>
//         </div>

//         <div style={styles.projectCard}>
//           <h3 style={styles.projectTitle}>Sistema de Autenticação Seguro</h3>
//           <p style={styles.projectDesc}>
//             Implementação de autenticação JWT, OAuth 2.0 e autorização baseada em roles para garantir segurança dos dados dos usuários.
//           </p>
//         </div>
//       </section>

//       <section style={styles.section}>
//         <h2 style={styles.sectionTitle}>Estrutura Exemplo - Backend</h2>
//         <pre style={styles.codeBlock}>
//           {`src/
//  ├─ controllers/
//  ├─ models/
//  ├─ routes/
//  ├─ services/
//  ├─ middleware/
//  ├─ config/
//  ├─ utils/
//  ├─ tests/
//  └─ server.js`}
//         </pre>
//         <p style={styles.text}>
//           Organização modular para separar responsabilidades: controllers para lógica de requisição, models para banco de dados, services para regras de negócio, middleware para autenticação e outros.
//         </p>
//       </section>

//       <section style={styles.section}>
//         <h2 style={styles.sectionTitle}>Tecnologias e Ferramentas</h2>
//         <ul style={styles.list}>
//           <li style={styles.listItem}><IconCheck /> Node.js, Express.js</li>
//           <li style={styles.listItem}><IconCheck /> Banco de Dados (PostgreSQL, MongoDB)</li>
//           <li style={styles.listItem}><IconCheck /> APIs REST e GraphQL</li>
//           <li style={styles.listItem}><IconCheck /> Autenticação JWT e OAuth 2.0</li>
//           <li style={styles.listItem}><IconCheck /> Testes automatizados (Jest, Mocha)</li>
//           <li style={styles.listItem}><IconCheck /> Docker e CI/CD</li>
//         </ul>
//       </section>

//       <section style={styles.section}>
//         <h2 style={styles.sectionTitle}>Principais Atividades</h2>
//         <ul style={styles.list}>
//           <li style={styles.listItem}><IconCheck /> Criar e manter APIs robustas e escaláveis</li>
//           <li style={styles.listItem}><IconCheck /> Implementar integrações com serviços externos</li>
//           <li style={styles.listItem}><IconCheck /> Garantir segurança e autenticação no backend</li>
//           <li style={styles.listItem}><IconCheck /> Otimizar desempenho e corrigir bugs</li>
//           <li style={styles.listItem}><IconCheck /> Escrever testes e documentação técnica</li>
//           <li style={styles.listItem}><IconCheck /> Colaborar com frontend e DevOps para deploys</li>
//         </ul>
//       </section>
//     </div>
//   );
// }


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

export default function BackendDeveloperDashboard() {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Dashboard do Desenvolvedor Backend</h1>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Papel e Responsabilidades</h2>
        <p style={styles.text}>
          O <strong>Desenvolvedor Backend</strong> é responsável por criar e manter a lógica do servidor, APIs, banco de dados e garantir que o sistema funcione de forma segura, eficiente e escalável.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Projetos em Andamento</h2>

        <div style={styles.projectCard}>
          <h3 style={styles.projectTitle}>Plataforma SaaS para Médico - Plano de Emagrecimento (Monolito)</h3>
          <p style={styles.projectDesc}>
            Desenvolvimento de sistema monolítico integrando funcionalidades como gerenciamento de pacientes via WhatsApp, agendamento automático com IA, CRM inteligente e monitoramento completo da jornada do paciente.
          </p>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Estrutura Exemplo - Backend Monolito</h2>
        <pre style={styles.codeBlock}>
          {`src/
 ├─ controllers/
 ├─ models/
 ├─ routes/
 ├─ services/
 ├─ middlewares/
 ├─ utils/
 ├─ config/
 ├─ database/
 └─ server.js`}
        </pre>
        <p style={styles.text}>
          Estrutura monolítica organizada para agrupar todas as funcionalidades em uma única aplicação, com separação clara entre controllers, models, rotas, serviços e middlewares.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Tecnologias e Ferramentas</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}><IconCheck /> Node.js, Express.js</li>
          <li style={styles.listItem}><IconCheck /> Banco de Dados (PostgreSQL, MongoDB)</li>
          <li style={styles.listItem}><IconCheck /> APIs REST e integração com WhatsApp</li>
          <li style={styles.listItem}><IconCheck /> Integração com calendários (Google Calendar, Cal.com)</li>
          <li style={styles.listItem}><IconCheck /> Autenticação JWT e OAuth 2.0</li>
          <li style={styles.listItem}><IconCheck /> Monitoramento e Logging</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Principais Atividades</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}><IconCheck /> Desenvolver APIs e funcionalidades do sistema monolítico</li>
          <li style={styles.listItem}><IconCheck /> Integrar inteligência artificial para automação de agendamento e comunicação</li>
          <li style={styles.listItem}><IconCheck /> Garantir segurança, autenticação e proteção de dados</li>
          <li style={styles.listItem}><IconCheck /> Corrigir bugs e otimizar desempenho</li>
          <li style={styles.listItem}><IconCheck /> Escrever testes e documentação técnica</li>
          <li style={styles.listItem}><IconCheck /> Trabalhar em conjunto com equipes de frontend e IA</li>
        </ul>
      </section>
    </div>
  );
}
