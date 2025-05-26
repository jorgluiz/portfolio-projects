import {
  ContainerBuildProject,
  TitleBuildProject,
  SectionTitleBuildProject,
  ParagraphBuildProject,
  ListBuildProject,
  ListItemBuildProject,
  StepNumberBuildProject,
  TableBuildProject,
  ThBuildProject,
  TdBuildProject
} from "@/styles/globalStyles";

const SaaSProjectGuide = () => {
  return (
    <ContainerBuildProject>
      <ParagraphBuildProject>
        SaaS é um modelo de software entregue pela internet onde o usuário acessa a aplicação via navegador, pagando geralmente uma assinatura, sem precisar instalar nada localmente.
      </ParagraphBuildProject>

      <SectionTitleBuildProject>
        Como implementar um projeto SaaS? Passo a passo básico:
      </SectionTitleBuildProject>

      {/* Passos numerados */}
      <ListBuildProject as="ol">
        <ListItemBuildProject>
          <StepNumberBuildProject>1</StepNumberBuildProject>
          <strong>Definir a ideia e o público-alvo</strong>
          <ParagraphBuildProject>
            Qual problema seu SaaS resolve? Quem vai usar? Quais funcionalidades básicas são essenciais?
          </ParagraphBuildProject>
        </ListItemBuildProject>

        <ListItemBuildProject>
          <StepNumberBuildProject>2</StepNumberBuildProject>
          <strong>Arquitetura e tecnologia</strong>
          <ParagraphBuildProject>Frontend: React, Vue, Angular, Next.js, etc (app web responsiva)</ParagraphBuildProject>
          <ParagraphBuildProject>Backend: Node.js, Django, Ruby on Rails, Laravel, Spring Boot — API REST ou GraphQL</ParagraphBuildProject>
          <ParagraphBuildProject>Banco de dados: PostgreSQL, MySQL, MongoDB, ou outros que escalem bem</ParagraphBuildProject>
          <ParagraphBuildProject>Hospedagem: AWS, Azure, Google Cloud, DigitalOcean, Heroku, Vercel, etc</ParagraphBuildProject>
        </ListItemBuildProject>

        <ListItemBuildProject>
          <StepNumberBuildProject>3</StepNumberBuildProject>
          <strong>Controle de usuários e autenticação</strong>
          <ParagraphBuildProject>Cadastro/login, recuperação de senha, autenticação JWT, OAuth, etc</ParagraphBuildProject>
          <ParagraphBuildProject>Controle de permissões (ex: níveis de usuário, admins, clientes)</ParagraphBuildProject>
        </ListItemBuildProject>

        <ListItemBuildProject>
          <StepNumberBuildProject>4</StepNumberBuildProject>
          <strong>Modelo de assinatura e faturamento</strong>
          <ParagraphBuildProject>Escolha um gateway de pagamento: Stripe, PayPal, PagSeguro, Mercado Pago</ParagraphBuildProject>
          <ParagraphBuildProject>Implemente planos (gratuito, básico, premium) com controle de acesso às features</ParagraphBuildProject>
          <ParagraphBuildProject>Cobrança automática recorrente e gestão de assinaturas</ParagraphBuildProject>
        </ListItemBuildProject>

        <ListItemBuildProject>
          <StepNumberBuildProject>5</StepNumberBuildProject>
          <strong>Infraestrutura e escalabilidade</strong>
          <ParagraphBuildProject>Use containerização (Docker) para facilitar deploy e replicação</ParagraphBuildProject>
          <ParagraphBuildProject>Considere arquitetura serverless ou microsserviços se for crescer rápido</ParagraphBuildProject>
          <ParagraphBuildProject>Planeje backup e monitoramento (ex: New Relic, Datadog, Prometheus)</ParagraphBuildProject>
        </ListItemBuildProject>

        <ListItemBuildProject>
          <StepNumberBuildProject>6</StepNumberBuildProject>
          <strong>Interface e experiência do usuário</strong>
          <ParagraphBuildProject>Foco na usabilidade, design limpo e responsivo</ParagraphBuildProject>
          <ParagraphBuildProject>Painel de controle do cliente, dashboard com métricas</ParagraphBuildProject>
          <ParagraphBuildProject>Comunicação clara sobre planos, upgrades, notificações</ParagraphBuildProject>
        </ListItemBuildProject>

        <ListItemBuildProject>
          <StepNumberBuildProject>7</StepNumberBuildProject>
          <strong>Segurança</strong>
          <ParagraphBuildProject>HTTPS obrigatório, proteção contra ataques comuns (XSS, CSRF)</ParagraphBuildProject>
          <ParagraphBuildProject>Criptografia de senhas (bcrypt) e dados sensíveis</ParagraphBuildProject>
          <ParagraphBuildProject>Políticas de privacidade e compliance (LGPD, GDPR, conforme a região)</ParagraphBuildProject>
        </ListItemBuildProject>

        <ListItemBuildProject>
          <StepNumberBuildProject>8</StepNumberBuildProject>
          <strong>Suporte e documentação</strong>
          <ParagraphBuildProject>FAQ, chat online, tickets de suporte</ParagraphBuildProject>
          <ParagraphBuildProject>Documentação API (se for aberta)</ParagraphBuildProject>
          <ParagraphBuildProject>Base de conhecimento para clientes</ParagraphBuildProject>
        </ListItemBuildProject>

        <ListItemBuildProject>
          <StepNumberBuildProject>9</StepNumberBuildProject>
          <strong>Monitoramento e análise</strong>
          <ParagraphBuildProject>Logs de uso e erros</ParagraphBuildProject>
          <ParagraphBuildProject>Análise de métricas: churn, uso, receita, performance</ParagraphBuildProject>
          <ParagraphBuildProject>Ferramentas: Google Analytics, Mixpanel, Sentry</ParagraphBuildProject>
        </ListItemBuildProject>

        <ListItemBuildProject>
          <StepNumberBuildProject>10</StepNumberBuildProject>
          <strong>Deploy e manutenção</strong>
          <ParagraphBuildProject>Pipeline de CI/CD (GitHub Actions, GitLab CI, Jenkins)</ParagraphBuildProject>
          <ParagraphBuildProject>Atualizações contínuas, correção de bugs, melhorias constantes</ParagraphBuildProject>
        </ListItemBuildProject>
      </ListBuildProject>

      <SectionTitleBuildProject>Resumo rápido</SectionTitleBuildProject>

      <TableBuildProject>
        <thead>
          <tr style={{ backgroundColor: '#3498db', color: 'white' }}>
            <ThBuildProject>Etapa</ThBuildProject>
            <ThBuildProject>O que fazer</ThBuildProject>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TdBuildProject fontWeight="600">Ideia e público</TdBuildProject>
            <TdBuildProject>Definir problema e usuário</TdBuildProject>
          </tr>
          <tr>
            <TdBuildProject fontWeight="600" backgroundColor="#f7f9fc">Tech stack</TdBuildProject>
            <TdBuildProject backgroundColor="#f7f9fc">Frontend, backend, banco, hospedagem</TdBuildProject>
          </tr>
          <tr>
            <TdBuildProject fontWeight="600">Usuários e auth</TdBuildProject>
            <TdBuildProject>Login, controle acesso, segurança</TdBuildProject>
          </tr>
          <tr>
            <TdBuildProject fontWeight="600" backgroundColor="#f7f9fc">Pagamentos</TdBuildProject>
            <TdBuildProject backgroundColor="#f7f9fc">Gateways, planos, assinaturas</TdBuildProject>
          </tr>
          <tr>
            <TdBuildProject fontWeight="600">Infraestrutura</TdBuildProject>
            <TdBuildProject>Deploy, escalabilidade, backups</TdBuildProject>
          </tr>
          <tr>
            <TdBuildProject fontWeight="600" backgroundColor="#f7f9fc">UI/UX</TdBuildProject>
            <TdBuildProject backgroundColor="#f7f9fc">Design, painel, experiência</TdBuildProject>
          </tr>
          <tr>
            <TdBuildProject fontWeight="600">Segurança</TdBuildProject>
            <TdBuildProject>HTTPS, criptografia, compliance</TdBuildProject>
          </tr>
          <tr>
            <TdBuildProject fontWeight="600" backgroundColor="#f7f9fc">Suporte</TdBuildProject>
            <TdBuildProject backgroundColor="#f7f9fc">Atendimento, documentação</TdBuildProject>
          </tr>
          <tr>
            <TdBuildProject fontWeight="600">Monitoramento</TdBuildProject>
            <TdBuildProject>Logs, métricas, análises</TdBuildProject>
          </tr>
          <tr>
            <TdBuildProject fontWeight="600" backgroundColor="#f7f9fc">Deploy</TdBuildProject>
            <TdBuildProject backgroundColor="#f7f9fc">Automação, CI/CD</TdBuildProject>
          </tr>
        </tbody>
      </TableBuildProject>
    </ContainerBuildProject>
  );
};

export default SaaSProjectGuide;
