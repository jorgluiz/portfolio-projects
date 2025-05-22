const DesignUIUX = () => {
  const container = {
    fontFamily: 'Segoe UI, sans-serif',
    padding: '24px',
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
    marginBottom: '16px',
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

  return (
    <div style={container}>
      <div style={sectionTitle}>Design UI (User Interface) em ReactJS</div>
      <p style={paragraph}><strong>Foco:</strong> A aparência visual da aplicação — cores, botões, tipografia, layout, ícones.</p>
      <p style={paragraph}><strong>Objetivo:</strong> Criar interfaces bonitas, consistentes e intuitivas para o usuário.</p>
      <p style={paragraph}><strong>ReactJS:</strong> Permite criar componentes reutilizáveis que encapsulam a aparência e o comportamento visual, facilitando a manutenção e escalabilidade do design.</p>
      <p style={paragraph}><strong>Ferramentas comuns:</strong> Styled Components, CSS Modules, Tailwind CSS, Material-UI.</p>
      <p style={paragraph}><strong>Exemplo:</strong> Criar um botão estilizado como componente React, que pode ser reutilizado em várias partes da aplicação.</p>

      <div style={sectionTitle}>Design UX (User Experience) em ReactJS</div>
      <p style={paragraph}><strong>Foco:</strong> A experiência geral do usuário ao usar a aplicação — usabilidade, navegação, acessibilidade e interação.</p>
      <p style={paragraph}><strong>Objetivo:</strong> Tornar a aplicação fácil, eficiente e agradável de usar, reduzindo frustrações.</p>
      <p style={paragraph}><strong>ReactJS:</strong> Facilita criar interfaces dinâmicas e responsivas, com estados e eventos que melhoram a interação (ex: formulários que validam em tempo real, feedback visual, animações sutis).</p>
      <p style={paragraph}><strong>Ferramentas e técnicas:</strong> React Router (para navegação fluida), testes de usabilidade, análise de fluxo, uso de hooks para gerenciar estados e efeitos colaterais que impactam a experiência.</p>
      <p style={paragraph}><strong>Exemplo:</strong> Implementar um processo de login com validação instantânea, mensagens de erro claras e redirecionamento suave após sucesso.</p>

      <div style={sectionTitle}>Resumo rápido:</div>
      <p style={paragraph}><strong>UI:</strong> Como a interface é visualmente construída em React (componentes, estilos).</p>
      <p style={paragraph}><strong>UX:</strong> Como o usuário interage e percebe a aplicação, usando recursos React para criar experiências fluídas e responsivas.</p>
    </div>
  );
};

export default DesignUIUX;
