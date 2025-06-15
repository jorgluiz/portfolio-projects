import { Container, SectionTitle, Subtitle, Paragraph, Table, Th, Td } from "@/styles/globalStyles";

const ExpressServersDifference = () => {

  return (
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
  );
};

export default ExpressServersDifference;
