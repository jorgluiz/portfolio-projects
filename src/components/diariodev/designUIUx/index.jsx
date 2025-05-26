import { Container, SectionTitle, Paragraph } from "@/styles/globalStyles";

const DesignUIUX = () => {
  return (
    <Container>
      <SectionTitle>Design UI (User Interface) em ReactJS</SectionTitle>
      <Paragraph><strong>Foco:</strong> A aparência visual da aplicação — cores, botões, tipografia, layout, ícones.</Paragraph>
      <Paragraph><strong>Objetivo:</strong> Criar interfaces bonitas, consistentes e intuitivas para o usuário.</Paragraph>
      <Paragraph><strong>ReactJS:</strong> Permite criar componentes reutilizáveis que encapsulam a aparência e o comportamento visual, facilitando a manutenção e escalabilidade do design.</Paragraph>
      <Paragraph><strong>Ferramentas comuns:</strong> Styled Components, CSS Modules, Tailwind CSS, Material-UI.</Paragraph>
      <Paragraph><strong>Exemplo:</strong> Criar um botão estilizado como componente React, que pode ser reutilizado em várias partes da aplicação.</Paragraph>

      <SectionTitle>Design UX (User Experience) em ReactJS</SectionTitle>
      <Paragraph><strong>Foco:</strong> A experiência geral do usuário ao usar a aplicação — usabilidade, navegação, acessibilidade e interação.</Paragraph>
      <Paragraph><strong>Objetivo:</strong> Tornar a aplicação fácil, eficiente e agradável de usar, reduzindo frustrações.</Paragraph>
      <Paragraph><strong>ReactJS:</strong> Facilita criar interfaces dinâmicas e responsivas, com estados e eventos que melhoram a interação (ex: formulários que validam em tempo real, feedback visual, animações sutis).</Paragraph>
      <Paragraph><strong>Ferramentas e técnicas:</strong> React Router (para navegação fluida), testes de usabilidade, análise de fluxo, uso de hooks para gerenciar estados e efeitos colaterais que impactam a experiência.</Paragraph>
      <Paragraph><strong>Exemplo:</strong> Implementar um processo de login com validação instantânea, mensagens de erro claras e redirecionamento suave após sucesso.</Paragraph>

      <SectionTitle>Resumo rápido:</SectionTitle>
      <Paragraph><strong>UI:</strong> Como a interface é visualmente construída em React (componentes, estilos).</Paragraph>
      <Paragraph><strong>UX:</strong> Como o usuário interage e percebe a aplicação, usando recursos React para criar experiências fluídas e responsivas.</Paragraph>
    </Container>
  );
};

export default DesignUIUX;
