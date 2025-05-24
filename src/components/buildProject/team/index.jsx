import { useState, useEffect } from 'react';
import ProductOwnerDashboard from '../productOwnerDashboard';
import ArchitectDashboard from '../architectDashboard';
import BackendDeveloperDashboard from '../backendDeveloperDashboard';
import FrontendDeveloperDashboard from '../frontendDeveloperDashboard';
import DevOpsDashboard from '../devOpsDashboard';
import NlpAudioImageDashboard from '../nlpAudioImageDashboard';
import DesignUiUxDashboard from '../designUiUxDashboard';
import GraphicDesignerDashboard from '../graphicDesignerDashboard';
import QaAnalystDashboard from '../qaAnalystDashboard';
import SecuritySpecialistDashboard from '../securitySpecialistDashboard';
import CustomerSuccessDashboard from '../customerSuccessDashboard';

const team = [
  {
    group: 'Gestão de Projeto',
    roles: [
      'Product Owner / Gerente de Produto'
    ],
  },
  {
    group: 'Desenvolvimento',
    roles: [
      'Arquiteto de Software',
      'Backend Developer',
      'Frontend Developer',
      'Engenheiro de DevOps',
    ],
  },
  {
    group: 'Inteligência Artificial',
    roles: [
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
      'Especialista em Segurança da Informação'
    ],
  },
  {
    group: 'Suporte',
    roles: [
      'Customer Success / Suporte Técnico',
    ],
  },
];

const styles = {
  header: {
    backgroundColor: '#f7f9fc',
    margin: '24px auto',
    padding: '15px',
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
    color: '#34495e',
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
  },
  active: {
    color: 'blue',
    textDecoration: 'none'
  }
};

const roleComponentMap = {
  'Product Owner / Gerente de Produto': ProductOwnerDashboard,
  'Arquiteto de Software': ArchitectDashboard,
  'Backend Developer': BackendDeveloperDashboard,
  'Frontend Developer': FrontendDeveloperDashboard,
  'Engenheiro de DevOps': DevOpsDashboard,
  'Especialista em NLP e Processamento de Áudio/Imagem': NlpAudioImageDashboard,
  'UI/UX Designer': DesignUiUxDashboard,
  'Designer Gráfico': GraphicDesignerDashboard,
  'Analista de QA / Testador': QaAnalystDashboard,
  'Especialista em Segurança da Informação': SecuritySpecialistDashboard,
  'Customer Success / Suporte Técnico': CustomerSuccessDashboard,
};

export default function TeamHeader() {
  const [activeGroupIndex, setActiveGroupIndex] = useState(0);
  const [selectedRole, setSelectedRole] = useState(null);
  console.log(selectedRole, " selectedRole");
  console.log(window.innerWidth, " window.innerWidth");

  useEffect(() => {
    if (selectedRole && roleComponentMap[selectedRole]) {
      if (window.scrollY === 0 && window.innerWidth <= 750) {
        window.scrollTo({
          top: 300,  // ajuste conforme preferir
          behavior: 'smooth',
        });
      }
    }
  }, [selectedRole]);



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
                style={selectedRole === role ? { ...styles.roleItem, ...styles.active } : styles.roleItem}
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
