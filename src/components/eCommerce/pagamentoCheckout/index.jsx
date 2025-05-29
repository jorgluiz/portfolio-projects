const PaymentCheckout = () => {
  const container = {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: '#fefefe',
    maxWidth: '900px',
    margin: '24px auto',
    padding: '15px',
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

  return (
    <div style={container}>
      <h2 style={sectionTitle}>Pagamento e Checkout</h2>
      <p style={paragraph}>
        Para integrar pagamentos de forma segura e eficiente em sua plataforma, você pode utilizar as seguintes soluções:
      </p>

      <h3 style={sectionTitle}>Soluções de Pagamento:</h3>
      <ul style={list}>
        <li style={listItem}><span style={{ fontWeight: '700' }}>Pagar.me</span> - Integração fácil para pagamento com cartões, boleto e Pix.</li>
      </ul>

      <h3 style={sectionTitle}>Integração Backend:</h3>
      {/* <p style={paragraph}>
        Utilize os SDKs ou APIs REST das plataformas para realizar a integração com seu back-end. Cada plataforma oferece ferramentas robustas para processamento de pagamentos de maneira segura e eficaz.
      </p>
      <ul style={list}>
        <li style={listItem}>Instalar o SDK oficial ou utilizar APIs REST para comunicação com o serviço de pagamento.</li>
        <li style={listItem}>Gerenciar a autenticação e autorização de pagamentos com os tokens de acesso fornecidos pelas plataformas.</li>
        <li style={listItem}>Integrar com o sistema de gestão de pedidos para processar pagamentos e emitir notificações.</li>
      </ul> */}
    </div>
  );
};

export default PaymentCheckout;
