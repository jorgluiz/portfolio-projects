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
    alignItems: 'flex-start',
    marginBottom: '12px',
    fontSize: '16px',
  },
  icon: {
    display: 'inline-block',
    width: '24px',
    height: '24px',
    marginRight: '12px',
    flexShrink: 0,
    color: '#2980b9',
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
};

const IconCheck = () => (
  <svg style={styles.icon} fill="currentColor" viewBox="0 0 16 16">
    <path d="M13.485 1.929a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0l-3.25-3.25a.75.75 0 0 1 1.06-1.06L6 8.939l6.725-6.75a.75.75 0 0 1 1.06 0z" />
  </svg>
);

export default function NlpAudioImageDashboard() {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Dashboard do Especialista em NLP e Processamento de Áudio/Imagem</h1>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Descrição do Projeto</h2>
        <p style={styles.text}>
          Precisamos criar um SaaS para médicos, onde o N8n está por trás, e o médico vai adicionar somente o número de WhatsApp dele. As funções incluem:
        </p>

        <h3 style={styles.sectionTitle}>1. Início</h3>
        <p style={styles.text}>
          O médico vai informar os serviços que ele oferece, adicionar valores, protocolos, etc., e uma IA vai gerar o prompt com os serviços, valores e forma de atendimento focado em conversão para transformar o lead em paciente.
        </p>

        <h3 style={styles.sectionTitle}>2. Agendamento e Interação com a IA</h3>
        <p style={styles.text}>
          O médico vai adicionar a credencial do Calendário (Cal.com ou Google) e agendar conversando com o agente.
        </p>
        <p style={styles.text}>
          O agente de IA identifica se o lead agendou ou não a consulta e conversa com ele várias vezes até que se torne paciente. Após isso, recebe dicas, notícias, avalia o atendimento, etc. O agendamento é feito automaticamente via conversa, onde o agente oferece dois horários para o paciente escolher, repetindo de dois em dois horários, se necessário.
        </p>

        <h3 style={styles.sectionTitle}>3. Funcionalidades do Agente de IA</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}><IconCheck /> O agente entende áudio, imagens e documentos.</li>
          <li style={styles.listItem}><IconCheck /> Envia imagens vinculadas aos serviços do médico dentro do banco de dados do SaaS.</li>
          <li style={styles.listItem}><IconCheck /> Cria grupos automáticos de WhatsApp com pacientes e profissionais (psicólogo, nutricionista, etc.).</li>
          <li style={styles.listItem}><IconCheck /> Configura envios automáticos de mensagens em horários pré-definidos.</li>
        </ul>

        <h3 style={styles.sectionTitle}>4. CRM com IA</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}><IconCheck /> Respostas humanizadas e personalizadas, evitando envio automático a cada mensagem do lead.</li>
          <li style={styles.listItem}><IconCheck /> Compreensão de áudio, imagem e documentos.</li>
          <li style={styles.listItem}><IconCheck /> Envio direto de imagens (não só links).</li>
          <li style={styles.listItem}><IconCheck /> Integração com calendário e lembretes automáticos de consulta.</li>
          <li style={styles.listItem}><IconCheck /> Envio de dicas baseadas no cadastro e preferências do lead.</li>
          <li style={styles.listItem}><IconCheck /> Identificação automática se o lead já é paciente.</li>
        </ul>

        <h3 style={styles.sectionTitle}>5. Agentes Específicos</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}><IconCheck /> Agente psicólogo: mensagens motivacionais diárias.</li>
          <li style={styles.listItem}><IconCheck /> Agente nutricionista: recomendações alimentares baseadas em fotos do paciente.</li>
          <li style={styles.listItem}><IconCheck /> Agente personal trainer: envio de treinos e mensagens motivacionais.</li>
        </ul>

        <h3 style={styles.sectionTitle}>6. Dashboard e Monitoramento</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}><IconCheck /> Monitoramento da quantidade de leads e mensagens enviadas.</li>
          <li style={styles.listItem}><IconCheck /> Check-list semanal para avaliar a semana do paciente.</li>
        </ul>

        <h3 style={styles.sectionTitle}>7. Funcionalidades Avançadas</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}><IconCheck /> Cadastro de serviços e valores com fotos antes/depois para envio automático pelo agente.</li>
          <li style={styles.listItem}><IconCheck /> Cadastro completo do lead com exames e dados de saúde para IA usar na interação.</li>
          <li style={styles.listItem}><IconCheck /> Integração com Instagram, WhatsApp e outras plataformas.</li>
          <li style={styles.listItem}><IconCheck /> Relatório financeiro e gerenciamento de custos com tokens de IA e plataformas de pagamento.</li>
        </ul>

        <h3 style={styles.sectionTitle}>Resumo das Funcionalidades</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}><IconCheck /> Automação com IA integrada para tarefas diversas.</li>
          <li style={styles.listItem}><IconCheck /> Integração com sistemas de pagamento, faturamento e emissão de notas fiscais.</li>
          <li style={styles.listItem}><IconCheck /> Interface amigável para médicos e pacientes.</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Papel e Responsabilidades</h2>
        <p style={styles.text}>
          O Especialista em <strong>Processamento de Linguagem Natural (NLP)</strong> e <strong>Áudio/Imagem</strong> desenvolve e integra modelos que permitem a interpretação, análise e transformação de texto, fala e imagens, garantindo uma interação inteligente e multimodal nas aplicações.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Projetos em Andamento</h2>

        <div style={styles.projectCard}>
          <h3 style={styles.projectTitle}>Modelo de Reconhecimento de Fala para Atendimento</h3>
          <p style={styles.projectDesc}>
            Desenvolvimento de sistema de transcrição e análise de áudio para suporte médico, com tecnologia de Speech-to-Text em tempo real.
          </p>
        </div>

        <div style={styles.projectCard}>
          <h3 style={styles.projectTitle}>Sistema OCR para Documentos Médicos</h3>
          <p style={styles.projectDesc}>
            Implementação de reconhecimento óptico de caracteres para digitalização e extração de dados de documentos em papel.
          </p>
        </div>

        <div style={styles.projectCard}>
          <h3 style={styles.projectTitle}>Análise Semântica Multimodal</h3>
          <p style={styles.projectDesc}>
            Integração de modelos LLM para interpretação de texto, imagens e áudio, permitindo respostas contextualizadas e personalizadas.
          </p>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Tecnologias e Ferramentas</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}><IconCheck /> Python, PyTorch, TensorFlow</li>
          <li style={styles.listItem}><IconCheck /> Transformers, Hugging Face</li>
          <li style={styles.listItem}><IconCheck /> Speech-to-Text (Google, Azure, DeepSpeech)</li>
          <li style={styles.listItem}><IconCheck /> OCR (Tesseract, AWS Textract)</li>
          <li style={styles.listItem}><IconCheck /> Processamento de Imagens OpenCV, PIL</li>
          <li style={styles.listItem}><IconCheck /> Modelos LLM customizados e fine-tuning</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Principais Atividades</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}><IconCheck /> Treinar e ajustar modelos de NLP e multimídia</li>
          <li style={styles.listItem}><IconCheck /> Desenvolver pipelines para processamento de áudio e imagens</li>
          <li style={styles.listItem}><IconCheck /> Integrar modelos AI em sistemas produtivos</li>
          <li style={styles.listItem}><IconCheck /> Monitorar desempenho e otimizar modelos</li>
          <li style={styles.listItem}><IconCheck /> Colaborar com times de produto e engenharia</li>
          <li style={styles.listItem}><IconCheck /> Pesquisar e implementar inovações em IA multimodal</li>
        </ul>
      </section>
    </div>
  );
}
