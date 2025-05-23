const ExpressServersDifference = () => {
  const container = {
    fontFamily: 'Segoe UI, sans-serif',
    padding: '15px',
    maxWidth: '900px',
    margin: '0 auto 40px',
    color: '#222',
    backgroundColor: '#f9f9f9',
    borderRadius: '12px',
    boxShadow: '0 0 20px rgba(0,0,0,0.05)',
    lineHeight: '1.6',
  };

  const sectionTitle = {
    fontSize: '24px',
    fontWeight: '700',
    marginBottom: '20px',
  };

  const subtitle = {
    fontSize: '20px',
    fontWeight: '600',
    marginTop: '20px',
    marginBottom: '12px',
    borderBottom: '2px solid #ddd',
    paddingBottom: '6px',
  };

  const paragraph = {
    fontSize: '16px',
    marginBottom: '12px',
  };

  const table = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  };

  const th = {
    border: '1px solid #ccc',
    padding: '8px',
    backgroundColor: '#eaeaea',
    fontWeight: '600',
    textAlign: 'center',
  };

  const td = {
    border: '1px solid #ccc',
    padding: '8px',
    textAlign: 'center',
  };

  return (
    <div style={container}>
      <div style={sectionTitle}>Diferença entre express-html-server e express-ejs-server</div>

      <div style={subtitle}>express-html-server</div>
      <p style={paragraph}>
        Serve arquivos HTML estáticos diretamente do backend para o navegador.
      </p>
      <p style={paragraph}>
        Estrutura simples e direta, usada para projetos básicos, protótipos ou aplicações que não precisam de lógica dinâmica no servidor.
      </p>
      <p style={paragraph}>
        O conteúdo entregue ao cliente é fixo, sem personalização ou geração dinâmica.
      </p>
      <p style={paragraph}><strong>Quando usar:</strong> Aplicações estáticas, landing pages simples, demos rápidas.</p>

      <div style={subtitle}>express-ejs-server</div>
      <p style={paragraph}>
        Utiliza o EJS (Embedded JavaScript Templates) como motor de visualização para gerar páginas HTML de forma dinâmica.
      </p>
      <p style={paragraph}>
        Permite injetar dados e lógica dentro dos templates HTML no servidor, tornando possível personalizar e atualizar o conteúdo antes de enviar ao cliente.
      </p>
      <p style={paragraph}>
        Mais robusto e flexível, indicado para aplicações que precisam interagir com banco de dados, sessões, autenticação, etc.
      </p>
      <p style={paragraph}><strong>Quando usar:</strong> Aplicações que exigem conteúdo dinâmico, personalização do usuário, renderização no servidor baseada em dados.</p>

      <div style={sectionTitle}>Resumo Estruturado</div>
      <table style={table}>
        <thead>
          <tr>
            <th style={th}>Aspecto</th>
            <th style={th}>express-html-server</th>
            <th style={th}>express-ejs-server</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={td}>Tipo de conteúdo</td>
            <td style={td}>HTML estático</td>
            <td style={td}>HTML dinâmico gerado via templates EJS</td>
          </tr>
          <tr>
            <td style={td}>Complexidade</td>
            <td style={td}>Simples, sem lógica no backend</td>
            <td style={td}>Mais complexo, permite lógica e interação no backend</td>
          </tr>
          <tr>
            <td style={td}>Uso típico</td>
            <td style={td}>Protótipos, landing pages, sites estáticos</td>
            <td style={td}>Aplicações com personalização, dados dinâmicos e interação</td>
          </tr>
          <tr>
            <td style={td}>Flexibilidade</td>
            <td style={td}>Baixa, conteúdo fixo</td>
            <td style={td}>Alta, permite renderizar conteúdo baseado em dados e contexto</td>
          </tr>
          <tr>
            <td style={td}>Experiência do usuário</td>
            <td style={td}>Limitada a conteúdo fixo</td>
            <td style={td}>Mais rica, personalizada e interativa</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ExpressServersDifference;
