import { Container, SectionTitle, Title, Check, SubsectionTitle, List, Paragraph, CodeBlockF0F0F0 } from "@/styles/globalStyles";

const ArquiteturaMonolitica = () => {
  return (
    <>
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
