const DevStack = () => {
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
      <h2 style={sectionTitle}>Stack de Desenvolvimento</h2>

      <h3 style={sectionTitle}>Frontend:</h3>
      <ul style={list}>
        <li style={listItem}><span style={{ fontWeight: '700' }}>React.js</span> - Biblioteca JavaScript para construir interfaces de usuário.</li>
        <li style={listItem}><span style={{ fontWeight: '700' }}>Next.js</span> - Framework para rotas, SSR (Server-Side Rendering) e otimização de SEO.</li>
        <li style={listItem}><span style={{ fontWeight: '700' }}>styled-components</span> - Biblioteca para estilização utilizando CSS-in-JS.</li>
        <li style={listItem}><span style={{ fontWeight: '700' }}>Axios ou Fetch</span> - Bibliotecas para realizar requisições HTTP.</li>
        <li style={listItem}><span style={{ fontWeight: '700' }}>Context API ou Zustand</span> - Gerenciamento de estado global, como o carrinho de compras.</li>
        <li style={listItem}><span style={{ fontWeight: '700' }}>React Hook Form + Zod/Yup</span> - Ferramentas para construção de formulários com validação.</li>
        <li style={listItem}><span style={{ fontWeight: '700' }}>React Icons ou Lucide</span> - Bibliotecas para ícones personalizados.</li>
      </ul>
    </div>
  );
};

export default DevStack;
