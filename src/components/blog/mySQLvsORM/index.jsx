import Head from "next/head";
import { Container, SectionTitle, Check, Subtitle, Paragraph, List } from "@/styles/globalStyles";

const MySQLvsORM = () => {

  return (
    <>
      <Head>
        {/* Primary Meta Tags Atualizados para "MySQL vs. ORM" */}
        <title>MySQL Puro vs. ORM (Sequelize, TypeORM): Qual Escolher?</title>
        <meta
          name="description"
          content="Entenda as vantagens e desvantagens de usar MySQL puro versus um ORM como Sequelize ou TypeORM em projetos Node.js. Saiba qual abordagem é melhor para seu projeto."
        />
        <meta
          name="keywords"
          content="MySQL, ORM, Sequelize, TypeORM, Node.js, Express.js, SQL, Banco de Dados, Database, Abstração, CRUD, Desenvolvimento Backend"
        />
        <meta name="author" content="Jorge Luiz" />

        {/* Open Graph / Facebook Atualizados */}
        <meta property="og:site_name" content="https://portfolio-projects-production.up.railway.app" />
        <meta property="og:type" content="website" />
        {/* URL mantida conforme o padrão anterior */}
        <meta property="og:url" content="https://portfolio-projects-production.up.railway.app/artigos-tecnicos/blog" />
        <meta property="og:title" content="MySQL Puro vs. ORM (Sequelize, TypeORM): Qual Escolher?" />
        <meta property="og:description" content="Um guia prático para desenvolvedores Node.js decidirem entre a flexibilidade do SQL puro e a produtividade de um ORM como Sequelize ou TypeORM." />
        <meta property="og:image" content="https://portfolio-projects-production.up.railway.app/perfil.png" />

        {/* Twitter Atualizados */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://portfolio-projects-production.up.railway.app/artigos-tecnicos/blog" />
        <meta property="twitter:title" content="MySQL Puro vs. ORM (Sequelize, TypeORM): Qual Escolher?" />
        <meta property="twitter:description" content="SQL puro ou ORM no seu próximo projeto Node.js? Veja a comparação e saiba quando usar cada um para maximizar controle ou produtividade." />
        <meta property="twitter:image" content="https://portfolio-projects-production.up.railway.app/perfil.png" />
      </Head>
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
    </>
  );
};

export default MySQLvsORM;
