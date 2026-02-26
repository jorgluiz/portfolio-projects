import Head from "next/head";
import { Container, SectionTitle, Subtitle, Paragraph, Table, Th, Td } from "@/styles/globalStyles";

const ExpressServersDifference = () => {

  return (
    <>
      <Head>
        {/* Primary Meta Tags Atualizados para "Diferença Servidores Express" */}
        <title>Express.js: Servidor HTML Estático vs. Dinâmico com EJS</title>
        <meta
          name="description"
          content="Entenda a diferença entre servir HTML estático e usar EJS para renderização dinâmica no Express.js. Saiba quando escolher cada abordagem para seus projetos."
        />
        <meta
          name="keywords"
          content="Express.js, EJS, HTML, Servidor Web, Node.js, Renderização no Servidor, SSR, Template Engine, Desenvolvimento Web, Backend"
        />
        <meta name="author" content="Jorge Luiz" />

        {/* Open Graph / Facebook Atualizados */}
        <meta property="og:site_name" content="https://portfolio-projects-production.up.railway.app" />
        <meta property="og:type" content="website" />
        {/* URL mantida conforme o padrão anterior */}
        <meta property="og:url" content="https://portfolio-projects-production.up.railway.app/artigos-tecnicos/blog" />
        <meta property="og:title" content="Express.js: Servidor HTML Estático vs. Dinâmico com EJS" />
        <meta property="og:description" content="Um guia rápido comparando servidores Express.js para HTML estático e para renderização dinâmica com EJS. Veja as vantagens e casos de uso de cada um." />
        <meta property="og:image" content="https://portfolio-projects-production.up.railway.app/perfil.png" />

        {/* Twitter Atualizados */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://portfolio-projects-production.up.railway.app/artigos-tecnicos/blog" />
        <meta property="twitter:title" content="Express.js: Servidor HTML Estático vs. Dinâmico com EJS" />
        <meta property="twitter:description" content="Criando um servidor com Express? Saiba a diferença entre servir HTML estático e usar um template engine como EJS para conteúdo dinâmico." />
        <meta property="twitter:image" content="https://portfolio-projects-production.up.railway.app/perfil.png" />
      </Head>

      <Container>
        <SectionTitle>Diferença entre express-html-server e express-ejs-server</SectionTitle>

        <Subtitle>express-html-server</Subtitle>
        <Paragraph>
          Serve arquivos HTML estáticos diretamente do backend para o navegador.
        </Paragraph>
        <Paragraph>
          Estrutura simples e direta, usada para projetos básicos, protótipos ou aplicações que não precisam de lógica dinâmica no servidor.
        </Paragraph>
        <Paragraph>
          O conteúdo entregue ao cliente é fixo, sem personalização ou geração dinâmica.
        </Paragraph>
        <Paragraph><strong>Quando usar:</strong> Aplicações estáticas, landing pages simples, demos rápidas.</Paragraph>

        <Subtitle>express-ejs-server</Subtitle>
        <Paragraph>
          Utiliza o EJS (Embedded JavaScript Templates) como motor de visualização para gerar páginas HTML de forma dinâmica.
        </Paragraph>
        <Paragraph>
          Permite injetar dados e lógica dentro dos templates HTML no servidor, tornando possível personalizar e atualizar o conteúdo antes de enviar ao cliente.
        </Paragraph>
        <Paragraph>
          Mais robusto e flexível, indicado para aplicações que precisam interagir com banco de dados, sessões, autenticação, etc.
        </Paragraph>
        <Paragraph><strong>Quando usar:</strong> Aplicações que exigem conteúdo dinâmico, personalização do usuário, renderização no servidor baseada em dados.</Paragraph>

        <SectionTitle>Resumo Estruturado</SectionTitle>
        <Table>
          <thead>
            <tr>
              <Th>Aspecto</Th>
              <Th>express-html-server</Th>
              <Th>express-ejs-server</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td>Tipo de conteúdo</Td>
              <Td>HTML estático</Td>
              <Td>HTML dinâmico gerado via templates EJS</Td>
            </tr>
            <tr>
              <Td>Complexidade</Td>
              <Td>Simples, sem lógica no backend</Td>
              <Td>Mais complexo, permite lógica e interação no backend</Td>
            </tr>
            <tr>
              <Td>Uso típico</Td>
              <Td>Protótipos, landing pages, sites estáticos</Td>
              <Td>Aplicações com personalização, dados dinâmicos e interação</Td>
            </tr>
            <tr>
              <Td>Flexibilidade</Td>
              <Td>Baixa, conteúdo fixo</Td>
              <Td>Alta, permite renderizar conteúdo baseado em dados e contexto</Td>
            </tr>
            <tr>
              <Td>Experiência do usuário</Td>
              <Td>Limitada a conteúdo fixo</Td>
              <Td>Mais rica, personalizada e interativa</Td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default ExpressServersDifference;
