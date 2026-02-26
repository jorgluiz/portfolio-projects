import Head from "next/head";
import { Container, SectionTitle, Check, SubsectionTitle, List, Paragraph, CodeBlockF0F0F0 } from "@/styles/globalStyles";

const ArquiteturaMicroservices = () => {
  return (
    <>
      <Head>
        {/* Primary Meta Tags Atualizados para "Arquitetura de Microsserviços" */}
        <title>Arquitetura de Microsserviços: Guia Rápido e Conceitos Essenciais</title>
        <meta
          name="description"
          content="Entenda o que são microsserviços, como funcionam, suas vantagens, desvantagens e quando aplicar esta arquitetura. Inclui exemplos de comunicação (API, Mensageria) e orquestração."
        />
        <meta
          name="keywords"
          content="Microsserviços, Arquitetura de Software, Microservices, API Gateway, Service Discovery, REST, gRPC, RabbitMQ, Kafka, Escalabilidade"
        />
        <meta name="author" content="Jorge Luiz" />

        {/* Open Graph / Facebook Atualizados */}
        <meta property="og:site_name" content="https://portfolio-projects-production.up.railway.app" />
        <meta property="og:type" content="website" />
        {/* URL mantida conforme solicitado */}
        <meta property="og:url" content="https://portfolio-projects-production.up.railway.app/artigos-tecnicos/blog" />
        <meta property="og:title" content="Arquitetura de Microsserviços: Guia Rápido e Conceitos Essenciais" />
        <meta property="og:description" content="Um resumo completo sobre arquitetura de microsserviços, cobrindo vantagens, desvantagens, padrões de comunicação e quando é a escolha certa para o seu projeto." />
        <meta property="og:image" content="https://portfolio-projects-production.up.railway.app/perfil.png" />

        {/* Twitter Atualizados */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://portfolio-projects-production.up.railway.app/artigos-tecnicos/blog" />
        <meta property="twitter:title" content="Arquitetura de Microsserviços: Guia Rápido e Conceitos Essenciais" />
        <meta property="twitter:description" content="Explorando a arquitetura de microsserviços? Este guia rápido aborda os conceitos essenciais, desde a comunicação via APIs e mensageria até a orquestração." />
        <meta property="twitter:image" content="https://portfolio-projects-production.up.railway.app/perfil.png" />
      </Head>

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
