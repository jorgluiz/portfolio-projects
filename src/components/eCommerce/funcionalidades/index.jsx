const Features = () => {
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
      <h2 style={sectionTitle}>Funcionalidades que você deve incluir</h2>
      <p style={paragraph}>
        Para uma experiência completa de e-commerce, é importante que o sistema tenha as seguintes funcionalidades:
      </p>

      <h3 style={sectionTitle}>1. Sistema de Login/Cadastro</h3>
      <p style={paragraph}>
        O sistema de login e cadastro deve permitir autenticação de usuários de forma segura. É recomendado utilizar **JWT** (JSON Web Token) ou **OAuth** para garantir que as sessões sejam gerenciadas de maneira eficiente e segura.
      </p>

      <h3 style={sectionTitle}>2. Carrinho de Compras com Persistência</h3>
      <p style={paragraph}>
        O carrinho de compras deve permitir que os produtos sejam armazenados mesmo após o usuário sair ou recarregar a página. Isso pode ser feito com o uso de cookies ou armazenamento local no navegador (localStorage).
      </p>

      <h3 style={sectionTitle}>3. Catálogo de Produtos</h3>
      <ul style={list}>
        <li style={listItem}>Busca eficiente para localizar produtos.</li>
        <li style={listItem}>Filtros de pesquisa como preço, categorias e avaliações.</li>
        <li style={listItem}>Exibição de produtos organizados por categorias.</li>
      </ul>

      <h3 style={sectionTitle}>4. Integração de Pagamento</h3>
      <p style={paragraph}>
        A plataforma precisa permitir integrações com sistemas de pagamento como **Mercado Pago**, **Stripe**, **PagSeguro**, ou outros serviços que possibilitem pagamento via **Pix**, **boleto** ou **cartão de crédito/débito**.
      </p>

      <h3 style={sectionTitle}>5. Dashboard Administrativo</h3>
      <p style={paragraph}>
        O dashboard deve oferecer uma visão detalhada sobre as vendas, produtos, clientes e pedidos. Isso ajuda os administradores a gerenciar facilmente o e-commerce.
      </p>

      <h3 style={sectionTitle}>6. Controle de Estoque</h3>
      <p style={paragraph}>
        O sistema deve monitorar o estoque de produtos em tempo real, evitando a venda de itens indisponíveis e ajudando na reposição de estoque.
      </p>

      <h3 style={sectionTitle}>7. Email de Confirmação de Pedido</h3>
      <p style={paragraph}>
        Após a finalização da compra, o cliente deve receber um **email de confirmação de pedido**, que contenha detalhes do pedido, status e prazo de entrega estimado.
      </p>
    </div>
  );
};

export default Features;
