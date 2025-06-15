import { Container, SectionTitle, Check, Subtitle, Paragraph, List } from "@/styles/globalStyles";

const NgrokUsage = () => {
  return (
    <Container>
      <SectionTitle>Ngrok: Como Usar para Criar Túneis Seguros</SectionTitle>

      <Subtitle>Introdução</Subtitle>
      <Paragraph>
        O Ngrok é uma ferramenta que permite criar túneis seguros para expor servidores locais à internet. Ele é especialmente útil para desenvolvedores que precisam testar ou demonstrar aplicativos web localmente, sem a necessidade de hospedar o servidor na nuvem ou configurar uma infraestrutura externa.
      </Paragraph>

      <Subtitle>Cenários Comuns de Uso do Ngrok</Subtitle>

      <Subtitle>1. Testes Locais em Ambientes de Produção</Subtitle>
      <Paragraph>
        Quando você está desenvolvendo um aplicativo e precisa testar interações com um serviço externo, como APIs de <strong>pagamento</strong> ou <strong>Webhooks</strong>, mas não deseja ou não pode hospedar seu servidor online, o Ngrok fornece uma solução simples.
      </Paragraph>

      <Subtitle>2. Desenvolvimento e Demonstrações</Subtitle>
      <Paragraph>
        Se você deseja compartilhar rapidamente seu servidor local com outra pessoa ou equipe, o Ngrok cria uma URL pública para o seu servidor local sem necessidade de configurações complicadas de ambiente remoto.
      </Paragraph>

      <Subtitle>3. Teste de APIs</Subtitle>
      <Paragraph>
        Quando estiver desenvolvendo uma API e precisar receber requisições externas, como chamadas de Webhooks, o Ngrok cria uma URL pública para o seu servidor local, permitindo testes em tempo real.
      </Paragraph>

      <Subtitle>4. Depuração e Desenvolvimento Remoto</Subtitle>
      <Paragraph>
        O Ngrok permite que você trabalhe no seu código e veja as mudanças em tempo real, sem precisar configurar um ambiente de produção, tornando o desenvolvimento mais eficiente e rápido.
      </Paragraph>
    </Container>
  );
};

export default NgrokUsage;
