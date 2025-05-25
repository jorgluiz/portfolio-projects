const BlockchainNfts = () => {
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
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center'
  };

  const subtitle = {
    fontSize: '20px',
    fontWeight: '600',
    marginTop: '24px',
    marginBottom: '12px',
    borderBottom: '2px solid #ddd',
    paddingBottom: '6px'
  };

  const paragraph = {
    fontSize: '16px',
    marginBottom: '12px',
    lineHeight: '1.5'
  };

  const list = {
    paddingLeft: '20px',
    marginBottom: '12px',
    lineHeight: '1.6'
  };

  const conclusion = {
    marginTop: '32px',
    fontWeight: '700',
    fontSize: '18px',
    color: '#333'
  };

  return (
    <div style={container}>
      <div style={sectionTitle}>🛠️ Backend (Desenvolvimento de Blockchain e NFTs)</div>
      <ul style={list}>
        <li>Interação com Blockchain: criar, verificar e transferir NFTs, executar contratos inteligentes, registrar transações e consultar dados.</li>
        <li>Serviços de API: construir APIs que conectam frontend e blockchain, como consultar saldo, criar ou transferir tokens.</li>
        <li>Integração com Wallets: gerenciar carteiras digitais (ex: MetaMask) e garantir segurança nas transações.</li>
      </ul>

      <div style={sectionTitle}>🎨 Frontend (Desenvolvimento de Blockchain e NFTs)</div>
      <ul style={list}>
        <li>Interface do Usuário: visual e acessível para interação com NFTs e blockchain.</li>
        <li>Exibição de NFTs: mostrar coleções do usuário ou mercado.</li>
        <li>Conexão com Carteiras: permitir conexão e transações (compra/venda).</li>
        <li>Interface para Criar NFTs: facilitar criação e listagem para venda.</li>
      </ul>

      <div style={conclusion}>
        Conclusão:
        <ul style={list}>
          <li>Backend: lógica principal de interação com blockchain e NFTs (criar, transferir, verificar).</li>
          <li>Frontend: interface visual para usuários interagirem com NFTs e blockchain.</li>
        </ul>
      </div>
    </div>
  );
};

export default BlockchainNfts;
