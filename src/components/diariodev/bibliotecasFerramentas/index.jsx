import { Container, SectionTitle, Check, Paragraph, List } from "@/styles/globalStyles";

const BibliotecasFerramentas = () => {

  return (
    <>
      <Container>
        <SectionTitle>
          <Check>📚</Check> Bibliotecas
        </SectionTitle>

        <Paragraph>
          São pacotes que adicionam <strong>funcionalidades específicas</strong> que você usa diretamente no código da aplicação.
        </Paragraph>

        <div style={{ fontWeight: '600', marginBottom: '8px' }}>Exemplos comuns:</div>

        <List>
          <li><strong>express-async-errors (backend):</strong> tratamento de erros assíncronos no Express.</li>
          <li><strong>TypeORM / Prisma (backend):</strong> ORM para banco de dados.</li>
          <li><strong>Swagger (backend):</strong> documentação automática da API.</li>
          <li><strong>class-validator (backend):</strong> validação de dados.</li>
          <li><strong>Winston (backend):</strong> logging.</li>
          <li><strong>Helmet e CORS (backend):</strong> segurança HTTP e controle de acesso.</li>
        </List>
      </Container>

      <Container>
        <SectionTitle>
          <Check>🛠️</Check> Ferramentas
        </SectionTitle>

        <Paragraph>
          Auxiliam no desenvolvimento, organização, formatação e automação, mas atuam fora do fluxo direto do código da aplicação.
        </Paragraph>

        <div style={{ fontWeight: '600', marginBottom: '8px' }}>Exemplos comuns:</div>

        <List>
          <li><strong>ESLint (front/backend):</strong> analisa e corrige problemas no código.</li>
          <li><strong>Prettier (front/backend):</strong> formata código automaticamente.</li>
          <li><strong>Husky (front/backend):</strong> executa tarefas automáticas (ex: testes) antes do commit.</li>
          <li><strong>Lint-Staged (front/backend):</strong> verifica apenas arquivos modificados antes do commit.</li>
          <li><strong>Jest / Supertest (front/backend):</strong> frameworks e ferramentas para testes unitários e de API.</li>
        </List>
      </Container>
    </>
  );
};

export default BibliotecasFerramentas;
