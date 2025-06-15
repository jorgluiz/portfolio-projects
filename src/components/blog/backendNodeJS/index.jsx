import { Container, SectionTitle, Check, SubsectionTitle, ItemTitle, List, CodeBlockF0F0F0 } from "@/styles/globalStyles";

const BackendTecnologias = () => {

  return (
    <>
      <Container>
        <SectionTitle>
          <Check>✅</Check>
          Tecnologias-chave para Backend com JavaScript (Node.js)
        </SectionTitle>

        <ItemTitle>1. Runtime</ItemTitle>
        <List>
          <li>Node.js – motor principal para execução do JavaScript no backend.</li>
        </List>

        <ItemTitle>2. Framework Web</ItemTitle>
        <List>
          <li>Express.js – simples, flexível, ideal para APIs REST.</li>
          <li>Fastify – alternativa mais rápida que Express, com suporte nativo a JSON Schema.</li>
          <li>NestJS – estrutura modular baseada em TypeScript, com arquitetura inspirada no Angular.</li>
        </List>

        <ItemTitle>3. Banco de Dados</ItemTitle>
        <List>
          <li><strong>Relacional (SQL):</strong> PostgreSQL (usando knex.js, sequelize ou TypeORM)</li>
          <li><strong>Não relacional (NoSQL):</strong> MongoDB (com mongoose ou driver nativo)</li>
        </List>

        <ItemTitle>4. Autenticação & Segurança</ItemTitle>
        <List>
          <li>JWT (token de autenticação)</li>
          <li>bcrypt (hash seguro de senhas)</li>
          <li>helmet (segurança para headers HTTP)</li>
          <li>cors (controle de acesso externo à API)</li>
        </List>

        <ItemTitle>5. Validação de Dados</ItemTitle>
        <List>
          <li>Joi (usado com Express)</li>
          <li>Zod (moderno, ideal com TypeScript)</li>
          <li>class-validator (usado com NestJS)</li>
        </List>

        <ItemTitle>6. Testes</ItemTitle>
        <List>
          <li>Jest ou Mocha + Chai (testes unitários e de integração)</li>
          <li>Supertest (testes de endpoints HTTP)</li>
        </List>

        <ItemTitle>7. Deploy</ItemTitle>
        <List>
          <li>Docker (containerização)</li>
          <li>PM2 (gerenciamento de processos)</li>
          <li>Nginx (proxy reverso)</li>
          <li>CI/CD: GitHub Actions, GitLab CI, etc.</li>
        </List>
      </Container>

      <Container>
        <SectionTitle>
          <Check>🧠</Check> Padrões Recomendados
        </SectionTitle>

        <List>
          <li><strong>MVC (Model-View-Controller)</strong> – para APIs simples.</li>
          <li><strong>Service Layer Pattern</strong> – separa regras de negócio da camada de controller.</li>
          <li><strong>Repository Pattern</strong> – se estiver usando SQL, bom para abstrair acesso ao banco.</li>
          <li><strong>Hexagonal/Clean Architecture</strong> – ideal para projetos escaláveis e testáveis.</li>
          <li><strong>Domain-Driven Design (DDD)</strong> – se estiver construindo algo enterprise/grande.</li>
        </List>
      </Container>

      <Container>
        <SectionTitle>
          <Check>✅</Check> Estrutura Modular (Express.js como exemplo)
        </SectionTitle>

        <SubsectionTitle>bash</SubsectionTitle>

        <CodeBlockF0F0F0>
          {`/src
  /config        <- configs do app (env, db, etc)
  /controllers   <- lógica dos endpoints
  /models        <- schemas ou modelos de dados
  /routes        <- define rotas e middlewares
  /services      <- regras de negócio (camada de serviço)
  /middlewares   <- autenticação, logger, etc.
  /utils         <- funções auxiliares
  /validators    <- validação de entrada
  /database      <- conexão com o banco
index.js         <- entrada da aplicação`}
        </CodeBlockF0F0F0>
      </Container>
    </>
  );
};

export default BackendTecnologias;
