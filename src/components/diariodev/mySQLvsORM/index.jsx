import { Container, SectionTitle, Check, Subtitle, Paragraph, List } from "@/styles/globalStyles";

const MySQLvsORM = () => {

  return (
    <Container>
      <SectionTitle>MySQL Puro ou ORM: Qual Escolher?</SectionTitle>

      <Subtitle>Introdução</Subtitle>
      <Paragraph>
        A decisão entre usar MySQL puro ou um ORM (Object-Relational Mapping) como Sequelize ou TypeORM em projetos Node.js com Express e MySQL impacta diretamente o desenvolvimento, manutenção e performance da aplicação.
      </Paragraph>

      <Subtitle>Usando MySQL Puro</Subtitle>

      <Subtitle>Vantagens</Subtitle>
      <List>
        <li><strong>Controle total:</strong> Escrita direta das consultas SQL, ideal para otimizações e flexibilidade máxima.</li>
        <li><strong>Menos abstração:</strong> Código próximo do banco, o que pode tornar o código mais enxuto e transparente para quem domina SQL.</li>
      </List>

      <Subtitle>Desvantagens</Subtitle>
      <List>
        <li><strong>Curva de aprendizado:</strong> Desenvolvedores menos experientes em SQL podem ter dificuldade ao escrever e manter consultas manuais.</li>
      </List>

      <Subtitle>Usando ORM</Subtitle>

      <Subtitle>Vantagens</Subtitle>
      <List>
        <li><strong>Abstração:</strong> Trabalha com objetos JavaScript, dispensando escrita direta de SQL.</li>
        <li><strong>Produtividade:</strong> Facilita operações comuns de CRUD com métodos prontos.</li>
        <li><strong>Portabilidade:</strong> Facilita a migração entre diferentes bancos de dados, pois suporta múltiplos tipos.</li>
      </List>

      <Subtitle>Desvantagens</Subtitle>
      <List>
        <li><strong>Possível perda de controle:</strong> Em consultas muito específicas.</li>
        <li><strong>Sobrecarga de aprendizado:</strong> Inicial para entender o ORM.</li>
      </List>

      <Subtitle>Recomendações Práticas</Subtitle>
      <Subtitle>Cenário</Subtitle>
      <List>
        <li><strong>Projetos pequenos a médios + equipe experiente em SQL:</strong> Use MySQL puro para controle e simplicidade.</li>
        <li><strong>Projetos maiores + equipe menos experiente em SQL:</strong> Use ORM para agilidade, legibilidade e portabilidade.</li>
      </List>

      <Subtitle>Considerações Finais</Subtitle>
      <Paragraph>
        A escolha deve considerar:
      </Paragraph>
      <List>
        <li>Complexidade e tamanho do projeto.</li>
        <li>Experiência da equipe com SQL e ORMs.</li>
        <li>Requisitos de desempenho e escalabilidade.</li>
        <li>Preferências e necessidades específicas do projeto.</li>
      </List>
    </Container>
  );
};

export default MySQLvsORM;
