import { Container, SectionTitle, Check, ItemTitle, List, Title, Paragraph } from "@/styles/globalStyles";

const FrontendTecnologiasReactjs = () => {
  return (
    <>
      <Container>
        <SectionTitle>
          <Check>🚀</Check> Tecnologias-chave para Frontend com React.js
        </SectionTitle>

        <ItemTitle>1. React.js — Biblioteca principal para UI</ItemTitle>
        <List>
          <li>Criação de interfaces reativas e componentes reutilizáveis.</li>
          <li>Ideal para SPAs (Single Page Applications).</li>
        </List>

        <ItemTitle>2. React Router</ItemTitle>
        <List>
          <li>Gerencia navegação entre páginas/rotas na SPA.</li>
          <li>Uso obrigatório se seu app precisa ter múltiplas “páginas” internas.</li>
        </List>

        <ItemTitle>3. Estado da aplicação (State Management)</ItemTitle>
        <List>
          <li>Para estados locais: React Hooks (useState, useReducer).</li>
          <li>Para estados globais ou complexos:
            <ul>
              <li>Redux (mais robusto e maduro)</li>
              <li>Recoil (mais moderno, mais simples que Redux)</li>
              <li>Zustand (leve e simples)</li>
              <li>Context API (para estados globais simples)</li>
            </ul>
          </li>
        </List>

        <ItemTitle>4. Bibliotecas para requisições HTTP</ItemTitle>
        <List>
          <li>Axios — mais completa e popular.</li>
          <li>fetch (nativo, leve, mas menos recursos).</li>
          <li>Para gerenciamento de dados assíncronos e cache: React Query ou SWR.</li>
        </List>

        <ItemTitle>5. Estilização</ItemTitle>
        <List>
          <li>CSS Modules (CSS scoped)</li>
          <li>Styled Components (CSS-in-JS)</li>
          <li>Tailwind CSS (utility-first CSS framework)</li>
          <li>Sass / LESS para pré-processamento</li>
        </List>

        <ItemTitle>6. Build e Bundlers</ItemTitle>
        <List>
          <li>Vite (ultra rápido, moderno)</li>
          <li>Create React App (CRA) — ferramenta oficial, fácil para começar</li>
          <li>Webpack (mais configurável, mas mais complexo)</li>
        </List>

        <ItemTitle>7. Testes</ItemTitle>
        <List>
          <li>Jest + React Testing Library para testes unitários e componentes.</li>
          <li>Cypress para testes end-to-end (E2E).</li>
        </List>
      </Container>

      <Container>
        <Title>
          <Check>⏰</Check> Quando usar React.js no Frontend?
        </Title>

        <Paragraph>
          Quando você precisa de uma aplicação interativa, com UI dinâmica que reage ao usuário.
        </Paragraph>
        <Paragraph>
          Para SPAs ou apps com múltiplas páginas gerenciadas no frontend.
        </Paragraph>
        <Paragraph>
          Quando precisa de um ecossistema grande, com muitas bibliotecas e ferramentas.
        </Paragraph>
        <Paragraph>
          Projetos onde reutilização de componentes é importante.
        </Paragraph>
        <Paragraph>
          Apps que consomem APIs REST/GraphQL e querem atualizar a UI sem reload.
        </Paragraph>
      </Container>

      <Container>
        <Title>
          <Check>🎁</Check> Bônus: Quando NÃO usar React
        </Title>

        <Paragraph>
          Projeto muito simples, sem interatividade (ex: landing page estática).
        </Paragraph>
        <Paragraph>
          Quando o SEO for super crítico e o projeto não tiver SSR (Server-Side Rendering).
        </Paragraph>
        <Paragraph>
          Aplicações muito pequenas que não justificam o overhead da biblioteca.
        </Paragraph>
        <Paragraph>
          Quando o time não tem experiência e prefere algo mais simples (ex: jQuery, Vanilla JS).
        </Paragraph>
      </Container>
    </>
  );
};

export default FrontendTecnologiasReactjs;
