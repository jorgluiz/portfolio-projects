const BackendResumo = () => {
  const container = {
    fontFamily: 'Segoe UI, sans-serif',
    padding: '15px',
    maxWidth: '900px',
    margin: '0 auto 40px',
    color: '#222',
    backgroundColor: '#f9f9f9',
    borderRadius: '12px',
    boxShadow: '0 0 20px rgba(0,0,0,0.05)'
  };

  const sectionTitle = {
    fontSize: '24px',
    fontWeight: '700',
    marginBottom: '16px',
    display: 'flex',
    alignItems: 'center'
  };

  const check = {
    color: '#2ecc71',
    fontSize: '22px',
    marginRight: '8px'
  };

  const paragraph = {
    marginBottom: '12px',
    fontSize: '16px',
    lineHeight: '1.5'
  };

  const list = {
    paddingLeft: '20px',
    marginBottom: '12px',
    lineHeight: '1.6'
  };

  return (
    <div style={container}>
      <div style={sectionTitle}>
        <span style={check}>⚙️</span> Backend – Resumo
      </div>

      <p style={paragraph}>
        O backend é um servidor que recebe solicitações HTTP enviadas pelo frontend.
        O backend possui rotas, e essas rotas podem ter funções de interceptação chamadas <strong>"middlewares"</strong>.
        Essas funções servem para rastrear e prevenir ações indevidas dos usuários, além de registrar o caminho de cada solicitação recebida.
        O middleware atua no meio do ciclo de solicitação e resposta da execução do Node.js, fornecendo acesso a objetos de requisição, resposta e à função <code>next()</code>.
      </p>

      <p style={paragraph}>
        Middlewares podem ser usados para diversas finalidades, como:
      </p>

      <ul style={list}>
        <li><span style={check}>✅</span> Autenticação e Autorização – Verificar se o usuário está autenticado antes de permitir acesso a rotas específicas.</li>
        <li><span style={check}>✅</span> Registro de Logs – Monitorar e armazenar informações sobre cada requisição recebida.</li>
        <li><span style={check}>✅</span> Manipulação de Erros – Interceptar erros e retornar respostas apropriadas sem quebrar a aplicação.</li>
        <li><span style={check}>✅</span> Validação de Dados – Garantir que os dados enviados pelo cliente estejam corretos antes de processamento.</li>
        <li><span style={check}>✅</span> Modificação de Requisições e Respostas – Adicionar ou modificar informações no request ou response.</li>
      </ul>
    </div>
  );
};

export default BackendResumo;
