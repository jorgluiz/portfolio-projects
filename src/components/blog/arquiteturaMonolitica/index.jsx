import Head from "next/head";
import { Container, SectionTitle, Title, Check, SubsectionTitle, List, Paragraph, CodeBlockF0F0F0 } from "@/styles/globalStyles";

const ArquiteturaMonolitica = () => {
  return (
    <>
      <Head>
        {/* Primary Meta Tags Atualizados para "Arquitetura Monolítica" */}
        <title>Arquitetura Monolítica: O que é, Vantagens e Desvantagens</title>
        <meta
          name="description"
          content="Entenda a arquitetura monolítica, suas vantagens para MVPs e projetos simples, e as desvantagens em escalabilidade. Ideal para startups e equipes pequenas."
        />
        <meta
          name="keywords"
          content="Arquitetura Monolítica, Monólito, Arquitetura de Software, MVP, Desenvolvimento de Software, Escalabilidade, Manutenção de Código"
        />
        <meta name="author" content="Jorge Luiz" />

        {/* Open Graph / Facebook Atualizados */}
        <meta property="og:site_name" content="https://portfolio-projects-production.up.railway.app" />
        <meta property="og:type" content="website" />
        {/* URL mantida conforme o padrão anterior */}
        <meta property="og:url" content="https://portfolio-projects-production.up.railway.app/artigos-tecnicos/blog" />
        <meta property="og:title" content="Arquitetura Monolítica: O que é, Vantagens e Desvantagens" />
        <meta property="og:description" content="Um guia rápido sobre a arquitetura monolítica. Saiba quando ela é a melhor escolha e quais são seus desafios em termos de escalabilidade e manutenção." />
        <meta property="og:image" content="https://portfolio-projects-production.up.railway.app/perfil.png" />

        {/* Twitter Atualizados */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://portfolio-projects-production.up.railway.app/artigos-tecnicos/blog" />
        <meta property="twitter:title" content="Arquitetura Monolítica: O que é, Vantagens e Desvantagens" />
        <meta property="twitter:description" content="Começando um novo projeto? Veja se a arquitetura monolítica é a ideal. Um resumo sobre suas vantagens para MVPs e desvantagens a longo prazo." />
        <meta property="twitter:image" content="https://portfolio-projects-production.up.railway.app/perfil.png" />
      </Head>

      <Container>
        <SectionTitle>
          <Check>🏗️</Check> Arquitetura Monolítica – Resumo
        </SectionTitle>

        <SubsectionTitle>Características principais:</SubsectionTitle>
        <List>
          <li>Todo o código em um único projeto/aplicação.</li>
          <li>Componentes compartilham processo e recursos.</li>
          <li>Comunicação direta interna, sem redes externas.</li>
        </List>

        <SubsectionTitle>Vantagens</SubsectionTitle>
        <List>
          <li>Fácil desenvolvimento inicial.</li>
          <li>Baixo custo de infraestrutura.</li>
          <li>Debug e testes simples.</li>
          <li>Configuração menos complexa (sem comunicação entre serviços).</li>
        </List>

        <SubsectionTitle>Desvantagens</SubsectionTitle>
        <List>
          <li>Escalabilidade limitada (escala o sistema todo, mesmo só uma parte precisando).</li>
          <li>Código fica difícil de manter conforme cresce.</li>
          <li>Falha em uma parte pode derrubar toda a aplicação.</li>
          <li>Implantação de qualquer mudança exige redeploy completo.</li>
        </List>

        <SubsectionTitle>Exemplo</SubsectionTitle>
        <Paragraph>
          Sistema e-commerce com módulos (usuários, produtos, pagamentos, relatórios) todos juntos — alterar um módulo exige redeploy de tudo.
        </Paragraph>

        <SubsectionTitle>Quando usar</SubsectionTitle>
        <List>
          <li>Projetos simples, MVPs, startups.</li>
          <li>Equipes pequenas.</li>
          <li>Baixo tráfego inicial.</li>
          <li>Necessidade de custo baixo e simplicidade.</li>
        </List>
      </Container>

      <Container>
        <Title>
          <Check>🏪</Check> Exemplo de Estrutura Monolítica para o Sistema de E-commerce
        </Title>

        <CodeBlockF0F0F0>
          {`ecommerce-app/
├── src/
│   ├── routes/
│   │   ├── usersRoutes.js
│   │   ├── productsRoutes.js
│   │   ├── paymentsRoutes.js
│   │   └── reportsRoutes.js
│   ├── controllers/
│   │   ├── usersController.js
│   │   ├── productsController.js
│   │   ├── paymentsController.js
│   │   └── reportsController.js
│   ├── models/
│   │   ├── userModel.js
│   │   ├── productModel.js
│   │   ├── paymentModel.js
│   │   └── reportModel.js
│   ├── middlewares/
│   │   ├── authMiddleware.js
│   │   └── errorHandler.js
│   ├── config/
│   │   ├── dbConfig.js
│   │   └── serverConfig.js
│   ├── app.js
│   └── server.js
├── package.json
└── Dockerfile`}
        </CodeBlockF0F0F0>
      </Container>
    </>
  );
};

export default ArquiteturaMonolitica;
