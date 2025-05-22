const MySQLvsORM = () => {
  const container = {
    fontFamily: 'Segoe UI, sans-serif',
    padding: '24px',
    maxWidth: '900px',
    margin: '0 auto 40px',
    color: '#222',
    backgroundColor: '#f9f9f9',
    borderRadius: '12px',
    boxShadow: '0 0 20px rgba(0,0,0,0.05)',
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
    lineHeight: '1.6',
    marginBottom: '16px',
  };

  const list = {
    paddingLeft: '20px',
    marginBottom: '16px',
    lineHeight: '1.6',
  };

  return (
    <div style={container}>
      <div style={sectionTitle}>MySQL Puro ou ORM: Qual Escolher?</div>

      <div style={subtitle}>Introdução</div>
      <p style={paragraph}>
        A decisão entre usar MySQL puro ou um ORM (Object-Relational Mapping) como Sequelize ou TypeORM em projetos Node.js com Express e MySQL impacta diretamente o desenvolvimento, manutenção e performance da aplicação.
      </p>

      <div style={subtitle}>Usando MySQL Puro</div>

      <div style={subtitle}>Vantagens</div>
      <ul style={list}>
        <li><strong>Controle total:</strong> Escrita direta das consultas SQL, ideal para otimizações e flexibilidade máxima.</li>
        <li><strong>Menos abstração:</strong> Código próximo do banco, o que pode tornar o código mais enxuto e transparente para quem domina SQL.</li>
      </ul>

      <div style={subtitle}>Desvantagens</div>
      <ul style={list}>
        <li><strong>Curva de aprendizado:</strong> Desenvolvedores menos experientes em SQL podem ter dificuldade ao escrever e manter consultas manuais.</li>
      </ul>

      <div style={subtitle}>Usando ORM</div>

      <div style={subtitle}>Vantagens</div>
      <ul style={list}>
        <li><strong>Abstração:</strong> Trabalha com objetos JavaScript, dispensando escrita direta de SQL.</li>
        <li><strong>Produtividade:</strong> Facilita operações comuns de CRUD com métodos prontos.</li>
        <li><strong>Portabilidade:</strong> Facilita a migração entre diferentes bancos de dados, pois suporta múltiplos tipos.</li>
      </ul>

      <div style={subtitle}>Desvantagens</div>
      <ul style={list}>
        <li><strong>Possível perda de controle:</strong> Em consultas muito específicas.</li>
        <li><strong>Sobrecarga de aprendizado:</strong> Inicial para entender o ORM.</li>
      </ul>

      <div style={subtitle}>Recomendações Práticas</div>
      <div style={subtitle}>Cenário</div>
      <ul style={list}>
        <li><strong>Projetos pequenos a médios + equipe experiente em SQL:</strong> Use MySQL puro para controle e simplicidade.</li>
        <li><strong>Projetos maiores + equipe menos experiente em SQL:</strong> Use ORM para agilidade, legibilidade e portabilidade.</li>
      </ul>

      <div style={subtitle}>Considerações Finais</div>
      <p style={paragraph}>
        A escolha deve considerar:
      </p>
      <ul style={list}>
        <li>Complexidade e tamanho do projeto.</li>
        <li>Experiência da equipe com SQL e ORMs.</li>
        <li>Requisitos de desempenho e escalabilidade.</li>
        <li>Preferências e necessidades específicas do projeto.</li>
      </ul>
    </div>
  );
};

export default MySQLvsORM;
