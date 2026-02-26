import { Container, SectionTitle, Check, Paragraph, List } from "@/styles/globalStyles";

const BackendResumo = () => {

  return (
    <Container>
      <SectionTitle>
        <Check>⚙️</Check> Backend – Resumo
      </SectionTitle>

      <Paragraph>
        O backend é um servidor que recebe solicitações HTTP enviadas pelo frontend.
        O backend possui rotas, e essas rotas podem ter funções de interceptação chamadas <strong>"middlewares"</strong>.
        Essas funções servem para rastrear e prevenir ações indevidas dos usuários, além de registrar o caminho de cada solicitação recebida.
        O middleware atua no meio do ciclo de solicitação e resposta da execução do Node.js, fornecendo acesso a objetos de requisição, resposta e à função <code>next()</code>.
      </Paragraph>

      <Paragraph>
        Middlewares podem ser usados para diversas finalidades, como:
      </Paragraph>

      <List>
        <li><Check>✅</Check> Autenticação e Autorização – Verificar se o usuário está autenticado antes de permitir acesso a rotas específicas.</li>
        <li><Check>✅</Check> Registro de Logs – Monitorar e armazenar informações sobre cada requisição recebida.</li>
        <li><Check>✅</Check> Manipulação de Erros – Interceptar erros e retornar respostas apropriadas sem quebrar a aplicação.</li>
        <li><Check>✅</Check> Validação de Dados – Garantir que os dados enviados pelo cliente estejam corretos antes de processamento.</li>
        <li><Check>✅</Check> Modificação de Requisições e Respostas – Adicionar ou modificar informações no request ou response.</li>
      </List>
    </Container>

  );
};

export default BackendResumo;
