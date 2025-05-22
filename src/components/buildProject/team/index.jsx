import { useState } from 'react';
import ProductOwnerDashboard from '../productOwnerDashboard';

const team = [
  {
    group: 'Gestão de Projeto',
    roles: [
      'Product Owner / Gerente de Produto',
      'Scrum Master / Gerente de Projetos',
    ],
  },
  {
    group: 'Desenvolvimento',
    roles: [
      'Arquiteto de Software',
      'Backend Developers (2 a 3)',
      'Frontend Developers (2)',
      'Engenheiro de DevOps / Infraestrutura',
    ],
  },
  {
    group: 'Inteligência Artificial e Machine Learning',
    roles: [
      'Engenheiro de Machine Learning / Cientista de Dados (1 a 2)',
      'Especialista em NLP e Processamento de Áudio/Imagem',
    ],
  },
  {
    group: 'Design e Experiência do Usuário',
    roles: [
      'UI/UX Designer',
      'Designer Gráfico',
    ],
  },
  {
    group: 'Qualidade e Testes',
    roles: [
      'Analista de QA / Testador',
    ],
  },
  {
    group: 'Segurança e Compliance',
    roles: [
      'Especialista em Segurança da Informação',
      'Consultor Jurídico (opcional, terceirizado)',
    ],
  },
  {
    group: 'Suporte e Operações',
    roles: [
      'Customer Success / Suporte Técnico',
      'Analista de Dados (opcional)',
    ],
  },
];

const styles = {
  header: {
    backgroundColor: '#f7f9fc',
    padding: '16px 24px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    maxWidth: 900
  },
  title: {
    fontSize: '28px',
    fontWeight: '800',
    marginBottom: '24px',
    color: '#34495e',
    textAlign: 'center',
    letterSpacing: '0.05em',
    cursor: 'default',
  },
  nav: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '12px',
  },
  tab: {
    padding: '10px 18px',
    borderRadius: '20px',
    backgroundColor: '#ecf0f1',
    color: '#34495e',
    fontWeight: '600',
    fontSize: '14px',
    cursor: 'pointer',
    userSelect: 'none',
    transition: 'background-color 0.3s ease',
  },
  activeTab: {
    backgroundColor: '#34495e',
    color: 'white',
  },
  content: {
    marginTop: '24px',
    maxWidth: '800px',
    // marginLeft: 'auto',
    // marginRight: 'auto',
    color: '#2c3e50',
  },
  roleList: {
    listStyleType: 'disc',
    paddingLeft: '20px',
  },

  // Media query for mobile (small screens)
  '@media (max-width: 600px)': {
    nav: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    tab: {
      width: '100%',
      textAlign: 'center',
    },
  },

  roleItem: {
    color: '#2980b9',
    fontWeight: '600',
    cursor: 'pointer'
  }
};

const roleComponentMap = {
  'Product Owner / Gerente de Produto': ProductOwnerDashboard,
  // 'Scrum Master / Gerente de Projetos': ScrumMasterDashboard,
  // 'Backend Developers (2 a 3)': BackendDevDashboard,
  // Adicione os outros conforme forem criados
};

export default function TeamHeader() {
  const [activeGroupIndex, setActiveGroupIndex] = useState(0);
  const [selectedRole, setSelectedRole] = useState(null);
  console.log(selectedRole, " selectedRole");

  const handleRoleClick = (role) => {
    setSelectedRole(role);
  };

  const ComponentToRender = selectedRole ? roleComponentMap[selectedRole] : null;


  return (
    <>
      <header style={styles.header}>
        <h3 style={styles.title}>Equipe de Desenvolvimento</h3>

        <nav style={styles.nav}>
          {team.map((group, idx) => (
            <div
              key={group.group}
              style={{
                ...styles.tab,
                ...(idx === activeGroupIndex ? styles.activeTab : {}),
              }}
              onClick={() => {
                setActiveGroupIndex(idx);
                setSelectedRole(null); // limpa o componente ao trocar de grupo
              }}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  setActiveGroupIndex(idx);
                  setSelectedRole(null);
                }
              }}
            >
              {group.group}
            </div>
          ))}
        </nav>

        <section style={styles.content}>
          <h4>{team[activeGroupIndex].group}</h4>
          <ul style={styles.roleList}>
            {team[activeGroupIndex].roles.map((role, i) => (
              <li
                key={i}
                style={styles.roleItem}
                onClick={() => handleRoleClick(role)}
              >
                {role}
              </li>
            ))}
          </ul>
        </section>
      </header>

      {/* Renderiza o dashboard específico se existir */}
      {ComponentToRender ? (
        <ComponentToRender />
      ) : selectedRole ? (
        <div style={styles.roleComponent}>
          <h4>Informações do Cargo: {selectedRole}</h4>
          <p>
            Aqui você pode exibir uma descrição, tarefas, progresso, responsáveis, KPIs ou
            painel dinâmico para <strong>{selectedRole}</strong>.
          </p>
        </div>
      ) : null}
    </>
  );
}
