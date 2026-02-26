import { useEffect } from 'react';
import Head from 'next/head';
import { Container, SectionTitle, Check, Paragraph, List } from "@/styles/globalStyles";
import hljs from 'highlight.js'; // Importando o highlight.js
import 'highlight.js/styles/atom-one-dark.css'; // Estilo para colorir a sintaxe

const BibliotecasFerramentas = () => {


  useEffect(() => {
    hljs.highlightAll(); // Aplica o destaque de sintaxe a todos os blocos de código
  }, []);

  return (
    <>
      <Head>
        {/* Primary Meta Tags Atualizados para "Bibliotecas, Ferramentas, APIs e SDKs" */}
        <title>Bibliotecas, Ferramentas, APIs e SDKs: Entenda a Diferença</title>
        <meta
          name="description"
          content="Desmistificando o ecossistema de desenvolvimento: aprenda o que são e quando usar Bibliotecas (Prisma, Swagger), Ferramentas (ESLint, Prettier), APIs (REST, GraphQL) e SDKs (Firebase, Stripe)."
        />
        <meta
          name="keywords"
          content="Bibliotecas, Ferramentas, API, SDK, Prisma, Swagger, ESLint, Prettier, Husky, REST, GraphQL, Firebase SDK, Stripe SDK, Desenvolvimento de Software"
        />
        <meta name="author" content="Jorge Luiz" />

        {/* Open Graph / Facebook Atualizados */}
        <meta property="og:site_name" content="https://portfolio-projects-production.up.railway.app" />
        <meta property="og:type" content="website" />
        {/* URL mantida conforme o padrão anterior */}
        <meta property="og:url" content="https://portfolio-projects-production.up.railway.app/artigos-tecnicos/blog" />
        <meta property="og:title" content="Bibliotecas, Ferramentas, APIs e SDKs: Entenda a Diferença" />
        <meta property="og:description" content="Um guia claro e direto para entender a diferença fundamental entre Bibliotecas, Ferramentas, APIs e SDKs, com exemplos práticos como Prisma, ESLint, REST e Firebase." />
        <meta property="og:image" content="https://portfolio-projects-production.up.railway.app/perfil.png" />

        {/* Twitter Atualizados */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://portfolio-projects-production.up.railway.app/artigos-tecnicos/blog" />
        <meta property="twitter:title" content="Bibliotecas, Ferramentas, APIs e SDKs: Entenda a Diferença" />
        <meta property="twitter:description" content="Confuso sobre a diferença entre uma Biblioteca, Ferramenta, API e SDK? Este guia rápido explica tudo com exemplos claros para desenvolvedores." />
        <meta property="twitter:image" content="https://portfolio-projects-production.up.railway.app/perfil.png" />
      </Head>

      <Container>
        <SectionTitle>
          <Check>📚</Check> Bibliotecas
        </SectionTitle>

        <Paragraph>
          São pacotes que adicionam <strong>funcionalidades específicas</strong> que você usa diretamente no código da aplicação.
          Elas oferecem funcionalidades prontas para uso, como o gerenciamento de banco de dados, tratamento de erros, validação de dados, etc.
        </Paragraph>

        <div style={{ fontWeight: '600', marginBottom: '8px' }}>Exemplos comuns:</div>

        <List>
          <li><strong>express-async-errors (backend):</strong> tratamento de erros assíncronos no Express. <em>Exemplo: Facilita a captura e tratamento de erros em rotas assíncronas.</em></li>
          <li><strong>TypeORM / Prisma (backend):</strong> ORM para banco de dados. <em>Exemplo: Permite interagir com o banco de dados através de um modelo de objetos.</em></li>
          <li><strong>Swagger (backend):</strong> documentação automática da API. <em>Exemplo: Gera uma interface interativa que permite testar endpoints da API diretamente do navegador.</em></li>
          <li><strong>class-validator (backend):</strong> validação de dados. <em>Exemplo: Valida se os dados de entrada correspondem ao formato esperado (ex: email válido).</em></li>
          <li><strong>Winston (backend):</strong> logging. <em>Exemplo: Permite a criação de logs para monitoramento de atividades e erros no backend.</em></li>
          <li><strong>Helmet e CORS (backend):</strong> segurança HTTP e controle de acesso. <em>Exemplo: Helmet melhora a segurança definindo cabeçalhos HTTP, e CORS controla quais origens podem acessar a API.</em></li>
        </List>
      </Container>

      <Container>
        <SectionTitle>
          <Check>🛠️</Check> Ferramentas
        </SectionTitle>

        <Paragraph>
          Auxiliam no desenvolvimento, organização, formatação e automação, mas atuam fora do fluxo direto do código da aplicação.
          Elas são usadas para melhorar o ambiente de desenvolvimento e garantir padrões de qualidade no código.
        </Paragraph>

        <div style={{ fontWeight: '600', marginBottom: '8px' }}>Exemplos comuns:</div>

        <List>
          <li><strong>ESLint (front/backend):</strong> analisa e corrige problemas no código. <em>Exemplo: Identifica e alerta sobre erros de sintaxe e problemas de estilo no código.</em></li>
          <li><strong>Prettier (front/backend):</strong> formata código automaticamente. <em>Exemplo: Formata o código para garantir consistência no estilo e facilitar a leitura.</em></li>
          <li><strong>Husky (front/backend):</strong> executa tarefas automáticas (ex: testes) antes do commit. <em>Exemplo: Garante que os testes sejam executados antes de cada commit para evitar falhas no código.</em></li>
          <li><strong>Lint-Staged (front/backend):</strong> verifica apenas arquivos modificados antes do commit. <em>Exemplo: Aumenta a eficiência ao realizar verificações apenas em arquivos que foram alterados.</em></li>
          <li><strong>Jest / Supertest (front/backend):</strong> frameworks e ferramentas para testes unitários e de API. <em>Exemplo: Jest executa testes unitários para garantir a qualidade do código, enquanto o Supertest testa APIs.</em></li>
        </List>
      </Container>

      <Container>
        <SectionTitle>
          <Check>🔌</Check> API
        </SectionTitle>

        <Paragraph>
          API (Interface de Programação de Aplicações) é um conjunto de definições e protocolos que permite que um software interaja com outro, como uma ponte entre sistemas diferentes.
          Elas permitem a comunicação entre sistemas de forma padronizada.
        </Paragraph>

        <div style={{ fontWeight: '600', marginBottom: '8px' }}>Exemplos comuns:</div>

        <List>
          <li><strong>API REST (frontend/backend):</strong> interface para comunicação entre sistemas via HTTP. <em>Exemplo: Você pode fazer requisições GET, POST, PUT, DELETE para interagir com a API de um sistema.</em></li>
          <li><strong>Exemplo: API do GitHub:</strong> permite acessar informações sobre repositórios, commits e outros dados do GitHub via HTTP. <em>Exemplo prático: Obter informações sobre repositórios e contribuições diretamente pelo código.</em></li>
          <li><strong>GraphQL (frontend/backend):</strong> consulta de dados com flexibilidade no backend. <em>Exemplo: Permite que o cliente defina exatamente os dados que deseja obter, sem depender de um endpoint fixo.</em></li>
          <li><strong>Exemplo: API do Spotify:</strong> permite buscar músicas, álbuns, artistas e criar playlists via GraphQL. <em>Exemplo prático: Criar playlists personalizadas com base nas preferências do usuário.</em></li>
        </List>
      </Container>

      <Container>
        <SectionTitle>
          <Check>🛠️</Check> SDK
        </SectionTitle>

        <Paragraph>
          SDK (Kit de Desenvolvimento de Software) é um conjunto de ferramentas que facilita o desenvolvimento de aplicações para uma plataforma ou serviço específico.
          Ele fornece os recursos necessários para facilitar a integração com plataformas externas, como Firebase ou Stripe.
        </Paragraph>

        <div style={{ fontWeight: '600', marginBottom: '8px' }}>Exemplos comuns:</div>

        <List>
          <li><strong>Firebase SDK (frontend/backend):</strong> facilita a integração com a plataforma Firebase. <em>Exemplo: Uso do Firebase SDK para autenticar usuários, armazenar dados em tempo real e enviar notificações push.</em></li>
          <li><strong>Exemplo: Firebase Authentication SDK:</strong> permite autenticar usuários via email, Google, Facebook e outros. <em>Exemplo prático: Permite que usuários se registrem ou façam login usando suas contas do Google.</em></li>
          <li><strong>Stripe SDK (frontend/backend):</strong> permite integração de pagamentos em sites e aplicativos. <em>Exemplo: Uso do Stripe SDK para processar pagamentos seguros em um site de e-commerce.</em></li>
          <li><strong>Exemplo: Stripe Checkout SDK:</strong> facilita a implementação de pagamentos de forma segura em e-commerce. <em>Exemplo prático: Configuração de uma página de pagamento que aceita cartões de crédito, débito e outros métodos de pagamento.</em></li>
        </List>
      </Container>

      <Container>
        <SectionTitle>
          <Check>📚</Check> Bibliotecas
        </SectionTitle>

        <Paragraph>
          São pacotes que adicionam <strong>funcionalidades específicas</strong> que você usa diretamente no código da aplicação.
          Elas oferecem funcionalidades prontas para uso, como o gerenciamento de banco de dados, tratamento de erros, validação de dados, etc.
        </Paragraph>

        <div style={{ fontWeight: '600', marginBottom: '8px' }}>Exemplos reais:</div>

        <List>
          <li><strong>express-async-errors (backend):</strong> tratamento de erros assíncronos no Express.
            <em>
              <br />Exemplo de código:
              <pre><code className="javascript">{`import express from 'express';
import 'express-async-errors'; // Isso adiciona tratamento assíncrono de erros

const app = express();

app.get('/api', async (req, res) => {
  throw new Error('Erro!'); // Exemplo de erro
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));`}</code></pre>
            </em>
          </li>
          <li><strong>TypeORM / Prisma (backend):</strong> ORM para banco de dados.
            <em>
              <br />Exemplo de código (TypeORM):
              <pre><code className="javascript">{`import { createConnection } from 'typeorm';

createConnection({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'test',
  password: 'test',
  database: 'test',
  entities: [User],
  synchronize: true,
}).then(() => console.log('Conectado ao banco de dados'));`}</code></pre>
            </em>
          </li>
          <li><strong>Swagger (backend):</strong> documentação automática da API.
            <em>
              <br />Exemplo de código:
              <pre><code className="javascript">{`import express from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const app = express();

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API exemplo',
      version: '1.0.0',
    },
  },
  apis: ['./routes.js'],
};

const specs = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));`}</code></pre>
            </em>
          </li>
        </List>
      </Container>

      <Container>
        <SectionTitle>
          <Check>🛠️</Check> Ferramentas
        </SectionTitle>

        <Paragraph>
          Auxiliam no desenvolvimento, organização, formatação e automação, mas atuam fora do fluxo direto do código da aplicação.
          Elas são usadas para melhorar o ambiente de desenvolvimento e garantir padrões de qualidade no código.
        </Paragraph>

        <div style={{ fontWeight: '600', marginBottom: '8px' }}>Exemplos reais:</div>

        <List>
          <li><strong>ESLint (front/backend):</strong> analisa e corrige problemas no código.
            <em>
              <br />Exemplo de código (configuração do ESLint):
              <pre><code className="javascript">{`module.exports = {
  env: {
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': 'warn',
  },
};`}</code></pre>
            </em>
          </li>
          <li><strong>Prettier (front/backend):</strong> formata código automaticamente.
            <em>
              <br />Exemplo de código (configuração do Prettier):
              <pre><code className="javascript">{`module.exports = {
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
};`}</code></pre>
            </em>
          </li>
          <li><strong>Husky (front/backend):</strong> executa tarefas automáticas (ex: testes) antes do commit.
            <em>
              <br />Exemplo de código (configuração do Husky):
              <pre><code className="javascript">{`"husky": {
  "hooks": {
    "pre-commit": "lint-staged",
    "pre-push": "npm test"
  }
},`}</code></pre>
            </em>
          </li>
        </List>
      </Container>

      <Container>
        <SectionTitle>
          <Check>🔌</Check> API
        </SectionTitle>

        <Paragraph>
          API (Interface de Programação de Aplicações) é um conjunto de definições e protocolos que permite que um software interaja com outro, como uma ponte entre sistemas diferentes.
          Elas permitem a comunicação entre sistemas de forma padronizada.
        </Paragraph>

        <div style={{ fontWeight: '600', marginBottom: '8px' }}>Exemplos reais:</div>

        <List>
          <li><strong>API REST (frontend/backend):</strong> interface para comunicação entre sistemas via HTTP.
            <em>
              <br />Exemplo de código:
              <pre><code className="javascript">{`fetch('https://api.github.com/users/octocat')
  .then(response => response.json())
  .then(data => console.log(data));`}</code></pre>
            </em>
          </li>
          <li><strong>Exemplo: API do GitHub:</strong> permite acessar informações sobre repositórios, commits e outros dados do GitHub via HTTP.
            <em>
              <br />Exemplo de código:
              <pre><code className="javascript">{`fetch('https://api.github.com/repos/octocat/Hello-World/commits')
  .then(response => response.json())
  .then(data => console.log(data));`}</code></pre>
            </em>
          </li>
        </List>
      </Container>

      <Container>
        <SectionTitle>
          <Check>🛠️</Check> SDK
        </SectionTitle>

        <Paragraph>
          SDK (Kit de Desenvolvimento de Software) é um conjunto de ferramentas que facilita o desenvolvimento de aplicações para uma plataforma ou serviço específico.
          Ele fornece os recursos necessários para facilitar a integração com plataformas externas, como Firebase ou Stripe.
        </Paragraph>

        <div style={{ fontWeight: '600', marginBottom: '8px' }}>Exemplos reais:</div>

        <List>
          <li><strong>Firebase SDK (frontend/backend):</strong> facilita a integração com a plataforma Firebase.
            <em>
              <br />Exemplo de código (Firebase Authentication):
              <pre><code className="javascript">{`import firebase from 'firebase/app';
import 'firebase/auth';

firebase.initializeApp({ 
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
});

firebase.auth().createUserWithEmailAndPassword('email@example.com', 'password')
  .then(user => console.log(user))
  .catch(error => console.log(error));`}</code></pre>
            </em>
          </li>
          <li><strong>Stripe SDK (frontend/backend):</strong> permite integração de pagamentos em sites e aplicativos.
            <em>
              <br />Exemplo de código (Stripe Checkout):
              <pre><code className="javascript">{`const stripe = Stripe('YOUR_PUBLIC_KEY');
const checkoutButton = document.getElementById('checkout-button');

checkoutButton.addEventListener('click', () => {
  stripe.redirectToCheckout({ sessionId: 'SESSION_ID' })
    .then(result => {
      if (result.error) {
        alert(result.error.message);
      }
    });
});`}</code></pre>
            </em>
          </li>
        </List>
      </Container>
    </>
  );
};

export default BibliotecasFerramentas;
