import styled from 'styled-components';

const CompletedItem = styled.li`
  text-decoration: line-through;
  color: #999;
  position: relative;
  cursor: pointer;
  padding-left: 20px;

  &::before {
    content: '✓';
    color: #2ecc71;
    font-weight: bold;
    position: absolute;
    left: 0;
    top: 0;
  }
`;


const ModularCleanArchitecture = () => {
  const container = {
    fontFamily: 'Segoe UI, sans-serif',
    maxWidth: '900px',
    margin: '24px auto',
    padding: '15px',
    color: '#222',
    backgroundColor: '#f9f9f9',
    borderRadius: '12px',
    boxShadow: '0 0 20px rgba(0,0,0,0.05)'
  };

  const sectionTitle = {
    fontSize: '24px',
    fontWeight: '700',
    marginBottom: '16px',
    display: 'flex',
    alignItems: 'center'
  };

  const check = {
    color: '#2ecc71',
    fontSize: '22px',
    marginRight: '8px'
  };

  const subsectionTitle = {
    fontSize: '20px',
    fontWeight: '600',
    marginTop: '20px',
    marginBottom: '8px',
    borderBottom: '2px solid #ddd',
    paddingBottom: '4px'
  };

  const list = {
    paddingLeft: '20px',
    marginBottom: '12px',
    lineHeight: '1.6'
  };


  return (
    <div style={container}>
      <div style={sectionTitle}>
        <span style={check}>🧱</span> Arquitetura Modular e Clean com NestJS – Resumo
      </div>

      <div style={subsectionTitle}>1. Qual arquitetura usar?</div>
      <ul style={list}>
        <CompletedItem>Arquitetura modular e limpa baseada em Domain-Driven Design (DDD) e Clean Architecture.</CompletedItem>
        <li>Modularização clara: cada módulo representa um domínio (ex: Users, Auth, Scheduling, Chatbot, Finance, Media).</li>
        <li>Camadas separadas:
          <ul>
            <li >Controllers: recebem requisições HTTP.</li>
            <li>Services: regras de negócio.</li>
            <li>Repositories (Data Access Layer): acesso ao banco.</li>
            <li>Entities/Models: definição de dados.</li>
          </ul>
        </li>
        <li>Injeção de dependência para baixo acoplamento e alta testabilidade.</li>
        <li>Event-driven para comunicação interna via eventos (ex: lead vira paciente → evento para Chatbot disparar mensagem).</li>
      </ul>

      <div style={subsectionTitle}>2. Como deixar escalável?</div>
      <ul style={list}>
        <li>Comece modular; depois separe serviços críticos em microserviços independentes (ex: chatbot, financeiro).</li>
        <li>Banco escalável: PostgreSQL com shards ou NoSQL para dados não estruturados (ex: MongoDB para logs).</li>
        <li>Cache com Redis para dados frequentes (tokens, sessões, filas).</li>
        <li>Fila de mensagens (RabbitMQ, Kafka, Bull) para processamento assíncrono.</li>
        <li>Deploy em containers (Docker + Kubernetes) para orquestração e escalonamento automático.</li>
        <li>Serverless para tarefas eventuais, agendamentos e notificações.</li>
        <li>Monitoramento e logs centralizados: Prometheus, Grafana, ELK stack.</li>
      </ul>

      <div style={subsectionTitle}>3. Como organizar o desenvolvimento para crescimento?</div>
      <ul style={list}>
        <li>Versionamento de API para evoluir sem quebrar clientes (v1, v2, etc.).</li>
        <li>Feature flags para ativar/desativar funcionalidades em produção.</li>
        <li>Automação CI/CD: pipeline para testes, builds e deploys rápidos.</li>
        <li>Testes automatizados: unitários, integração e end-to-end.</li>
        <li>Documentação atualizada com Swagger.</li>
      </ul>

      <div style={subsectionTitle}>4. Tecnologias e padrões para facilitar manutenção</div>
      <ul style={list}>
        <li>TypeScript para código tipado e previsível.</li>
        <li>Design Patterns (Singleton, Factory, Strategy) para código organizado.</li>
        <li>DTOs e validação (class-validator no NestJS) para integridade dos dados.</li>
        <li>Tratamento global de erros com filtros e interceptors no NestJS.</li>
        <li>Autenticação e autorização: JWT + RBAC (controle por função).</li>
        <li>Logs estruturados para rastreabilidade.</li>
      </ul>
    </div>
  );
};

export default ModularCleanArchitecture;
