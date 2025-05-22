const SaaSforDoctors = () => {
  const container = {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: '#fefefe',
    maxWidth: '900px',
    margin: '2rem auto',
    padding: '28px 32px',
    borderRadius: '14px',
    boxShadow: '0 4px 18px rgba(0,0,0,0.08)',
    color: '#2c3e50',
    lineHeight: 1.65,
  };

  const title = {
    fontSize: '28px',
    fontWeight: '800',
    marginBottom: '24px',
    color: '#34495e',
    textAlign: 'center',
    letterSpacing: '0.05em',
  };

  const sectionTitle = {
    fontSize: '22px',
    fontWeight: '700',
    color: '#2c3e50',
    marginTop: '32px',
    marginBottom: '16px',
    borderBottom: '3px solid #3498db',
    paddingBottom: '6px',
  };

  const paragraph = {
    fontSize: '16px',
    marginBottom: '18px',
  };

  const list = {
    paddingLeft: '24px',
    marginBottom: '24px',
  };

  const listItem = {
    marginBottom: '12px',
    fontWeight: '500',
  };

  const stepNumber = {
    display: 'inline-block',
    backgroundColor: '#3498db',
    color: 'white',
    fontWeight: '700',
    borderRadius: '50%',
    width: '30px',
    height: '30px',
    lineHeight: '30px',
    textAlign: 'center',
    marginRight: '12px',
    fontSize: '16px',
    userSelect: 'none',
  };

  return (
    <div style={container}>
      <h2 style={sectionTitle}>Descrição do Projeto</h2>
      <p style={paragraph}>
        Precisamos criar um SaaS para médicos, onde o N8n está por trás, e o médico vai adicionar somente o número de WhatsApp dele. As funções incluem:
      </p>

      <h3 style={sectionTitle}>1. Início</h3>
      <p style={paragraph}>
        O médico vai informar os serviços que ele oferece, adicionar os valores, protocolos, etc., e uma IA vai gerar o prompt com os serviços, valores e forma de atendimento focado em conversão para transformar o lead em paciente.
      </p>

      <h3 style={sectionTitle}>2. Agendamento e Interação com a IA</h3>
      <p style={paragraph}>
        O médico vai adicionar a credencial do Calendário (Cal.com ou Google) e agendar conversando com o agente.
      </p>
      <p style={paragraph}>
        O agente de IA vai identificar se o lead agendou ou não a consulta e vai falar com ele várias vezes até que ele se torne paciente. Após se tornar paciente, ele vai receber dicas, notícias, avaliar o atendimento, etc. O agendamento é feito automaticamente pela conversa, onde o agente vai verificar a agenda e informar dois horários para o paciente escolher. Caso não sejam os horários desejados, ele sempre falará de dois em dois horários somente.
      </p>

      <h3 style={sectionTitle}>3. Funcionalidades do Agente</h3>
      <ul style={list}>
        <li><span style={stepNumber}>4</span>O agente também precisa entender áudio, imagens e documentos.</li>
        <li><span style={stepNumber}>5</span>O agente consegue enviar imagens dentro de um banco de dados do SaaS que são vinculadas aos serviços que ele oferece.</li>
        <li><span style={stepNumber}>6</span>Criação automática de grupo de WhatsApp, onde terá o telefone do paciente e outros agentes como psicólogo, nutricionista, etc.</li>
        <li><span style={stepNumber}>7</span>Configuração dos agentes para enviar mensagens de forma automática em horários pré-definidos.</li>
      </ul>

      <h3 style={sectionTitle}>4. CRM - Funcionalidades</h3>
      <ul style={list}>
        <li><span style={stepNumber}>8</span>Respostas humanizadas e personalizadas, sem enviar uma mensagem a cada mensagem do lead.</li>
        <li><span style={stepNumber}>9</span>Entendimento de áudio, imagem, documento.</li>
        <li><span style={stepNumber}>10</span>Envio de imagens (sem ser link).</li>
        <li><span style={stepNumber}>11</span>Integração com calendário e envio de lembretes de consulta.</li>
        <li><span style={stepNumber}>12</span>Envio de dicas baseado no cadastro do lead e no que ele gosta.</li>
        <li><span style={stepNumber}>13</span>Identificação de se o lead já é paciente ou não.</li>
      </ul>

      <h3 style={sectionTitle}>5. Agentes Específicos</h3>
      <ul style={list}>
        <li><span style={stepNumber}>14</span>Agente psicólogo: envio de mensagens motivacionais diárias.</li>
        <li><span style={stepNumber}>15</span>Agente nutricionista: envio de mensagens e recomendações alimentares com base nas fotos do paciente.</li>
        <li><span style={stepNumber}>16</span>Agente personal trainer: envio de treinos e mensagens motivacionais para o paciente.</li>
      </ul>

      <h3 style={sectionTitle}>6. Dashboard e Monitoramento</h3>
      <ul style={list}>
        <li><span style={stepNumber}>17</span>Dashboard para monitoramento da quantidade de leads e mensagens enviadas.</li>
        <li><span style={stepNumber}>18</span>Check-list semanal para avaliar a semana do paciente.</li>
      </ul>

      <h3 style={sectionTitle}>7. Funcionalidades Avançadas</h3>
      <ul style={list}>
        <li><span style={stepNumber}>19</span>Cadastro de serviços e valores com fotos de antes e depois para o agente enviar automaticamente.</li>
        <li><span style={stepNumber}>20</span>Cadastro completo do lead com exames e informações de saúde para o agente usar em sua interação.</li>
        <li><span style={stepNumber}>21</span>Integração com Instagram, WhatsApp e outras plataformas para comunicação.</li>
        <li><span style={stepNumber}>22</span>Relatório financeiro e gerenciamento de custos com tokens de IA e integração com plataformas de pagamento.</li>
      </ul>

      <h3 style={sectionTitle}>Resumo das Funcionalidades</h3>
      <ul style={list}>
        <li><span style={stepNumber}>23</span>Automatização de tarefas com integração de IA.</li>
        <li><span style={stepNumber}>24</span>Integração com sistemas de pagamento, faturamento e emissão de notas fiscais.</li>
        <li><span style={stepNumber}>25</span>Interface amigável e fácil de operar para o médico e seus pacientes.</li>
      </ul>
    </div>
  );
};

export default SaaSforDoctors;
