import { Container, SectionTitle, Check, SubsectionTitle, List, Paragraph, CodeBlockF0F0F0 } from "@/styles/globalStyles";

const ArquiteturaMicroservices = () => {
  return (
    <>
      <Container>
        <SectionTitle>
          <Check>🧩</Check> Arquitetura Microservices – Resumo
        </SectionTitle>

        <SubsectionTitle>Conceito:</SubsectionTitle>
        <Paragraph>
          Aplicação dividida em vários serviços independentes, cada um responsável por uma funcionalidade específica, comunicando-se via APIs (REST, gRPC) ou mensagens (RabbitMQ, Kafka).
        </Paragraph>

        <SubsectionTitle>Exemplo (e-commerce):</SubsectionTitle>
        <List>
          <li>Serviço de Usuários (auth, users_db)</li>
          <li>Serviço de Produtos (produtos_db)</li>
          <li>Serviço de Pagamentos (payments_db)</li>
          <li>Serviço de Relatórios (reports_db)</li>
          <li>Cada serviço tem seu próprio banco e lógica.</li>
        </List>

        <SubsectionTitle>Comunicação:</SubsectionTitle>
        <List>
          <li>APIs REST para chamadas síncronas.</li>
          <li>Mensageria para tarefas assíncronas.</li>
        </List>

        <SubsectionTitle>Orquestração:</SubsectionTitle>
        <List>
          <li>API Gateway (ponto único de entrada).</li>
          <li>Service Discovery (Consul, Eureka) para localizar serviços.</li>
        </List>

        <SubsectionTitle>Vantagens</SubsectionTitle>
        <List>
          <li>Escala individual de serviços.</li>
          <li>Resiliência (falha em um não derruba tudo).</li>
          <li>Manutenção facilitada, equipes separadas.</li>
          <li>Flexibilidade tecnológica por serviço.</li>
        </List>

        <SubsectionTitle>Desvantagens</SubsectionTitle>
        <List>
          <li>Maior complexidade na gestão e deploy.</li>
          <li>Latência pela comunicação em rede.</li>
          <li>Mais custo de infraestrutura.</li>
          <li>Desafio em manter consistência dos dados.</li>
        </List>

        <SubsectionTitle>Quando usar</SubsectionTitle>
        <List>
          <li>Projetos grandes e que precisam escalar rápido.</li>
          <li>Equipes grandes e distribuídas.</li>
          <li>Sistemas que exigem alta disponibilidade e tolerância a falhas.</li>
        </List>
      </Container>

      <Container>
        <SectionTitle>
          <Check>⚙️</Check> Escalável com a arquitetura correta (microservices, clustering)
        </SectionTitle>

        <CodeBlockF0F0F0>
          {`users-service/
├── src/
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   └── app.js
├── package.json
└── Dockerfile

products-service/
├── src/
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   └── app.js
├── package.json
└── Dockerfile

payments-service/
├── src/
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   └── app.js
├── package.json
└── Dockerfile`}
        </CodeBlockF0F0F0>
      </Container>
    </>
  );
};

export default ArquiteturaMicroservices;
