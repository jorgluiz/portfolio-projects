import {
  ContainerBuildProject,
  SectionTitleBuildProject,
  ParagraphBuildProject,
  ListBuildProject,
  ListItemBuildProject,
  StepNumberBuildProject,
} from "@/styles/globalStyles";

const SaaSforDoctors = () => {
  return (
    <ContainerBuildProject>
      <SectionTitleBuildProject>Descrição do Projeto</SectionTitleBuildProject>
      <ParagraphBuildProject>
        Projeto voltado para médicos que acompanham pacientes em fase de emagrecimento. O SaaS utiliza N8n como motor de automações, permitindo que o médico apenas informe seu número de WhatsApp para começar. As interações com os pacientes são conduzidas por um agente de IA, que realiza agendamentos, acompanhamento e nutre o lead até se tornar paciente.
      </ParagraphBuildProject>

      <SectionTitleBuildProject>1. Início</SectionTitleBuildProject>
      <ParagraphBuildProject>
        SaaS para médicos, onde o N8n está por trás, e o médico vai adicionar somente o número de WhatsApp dele. O projeto é voltado para médicos que acompanham pacientes em fase de emagrecimento. As funções incluem informar os serviços oferecidos, adicionar valores, protocolos, etc. Uma IA vai gerar automaticamente o prompt com os serviços, valores e forma de atendimento focado em conversão para transformar o lead em paciente.
      </ParagraphBuildProject>

      <SectionTitleBuildProject>2. Agendamento e Interação com a IA</SectionTitleBuildProject>
      <ParagraphBuildProject>
        O médico vai adicionar a credencial do Calendário (Cal.com ou Google) e agendar conversando com o agente.
      </ParagraphBuildProject>
      <ParagraphBuildProject>
        O agente de IA vai identificar se o lead agendou ou não a consulta e vai falar com ele várias vezes até que ele se torne paciente. Após se tornar paciente, ele vai receber dicas, notícias, avaliar o atendimento, etc. O agendamento é feito automaticamente pela conversa, onde o agente vai verificar a agenda e informar dois horários para o paciente escolher. Caso não sejam os horários desejados, ele sempre falará de dois em dois horários somente.
      </ParagraphBuildProject>

      <SectionTitleBuildProject>3. Funcionalidades do Agente</SectionTitleBuildProject>
      <ListBuildProject>
        <ListItemBuildProject>
          <StepNumberBuildProject>4</StepNumberBuildProject>
          O agente também precisa entender áudio, imagens e documentos.
        </ListItemBuildProject>
        <ListItemBuildProject>
          <StepNumberBuildProject>5</StepNumberBuildProject>
          O agente consegue enviar imagens dentro de um banco de dados do SaaS que são vinculadas aos serviços que ele oferece.
        </ListItemBuildProject>
        <ListItemBuildProject>
          <StepNumberBuildProject>6</StepNumberBuildProject>
          Criação automática de grupo de WhatsApp, onde terá o telefone do paciente e outros agentes como psicólogo, nutricionista, etc.
        </ListItemBuildProject>
        <ListItemBuildProject>
          <StepNumberBuildProject>7</StepNumberBuildProject>
          Configuração dos agentes para enviar mensagens de forma automática em horários pré-definidos.
        </ListItemBuildProject>
      </ListBuildProject>

      <SectionTitleBuildProject>4. CRM - Funcionalidades</SectionTitleBuildProject>
      <ListBuildProject>
        <ListItemBuildProject>
          <StepNumberBuildProject>8</StepNumberBuildProject>
          Respostas humanizadas e personalizadas, sem enviar uma mensagem a cada mensagem do lead.
        </ListItemBuildProject>
        <ListItemBuildProject>
          <StepNumberBuildProject>9</StepNumberBuildProject>
          Entendimento de áudio, imagem, documento.
        </ListItemBuildProject>
        <ListItemBuildProject>
          <StepNumberBuildProject>10</StepNumberBuildProject>
          Envio de imagens (sem ser link).
        </ListItemBuildProject>
        <ListItemBuildProject>
          <StepNumberBuildProject>11</StepNumberBuildProject>
          Integração com calendário e envio de lembretes de consulta.
        </ListItemBuildProject>
        <ListItemBuildProject>
          <StepNumberBuildProject>12</StepNumberBuildProject>
          Envio de dicas baseado no cadastro do lead e no que ele gosta.
        </ListItemBuildProject>
        <ListItemBuildProject>
          <StepNumberBuildProject>13</StepNumberBuildProject>
          Identificação de se o lead já é paciente ou não.
        </ListItemBuildProject>
      </ListBuildProject>

      <SectionTitleBuildProject>5. Agentes Específicos</SectionTitleBuildProject>
      <ListBuildProject>
        <ListItemBuildProject>
          <StepNumberBuildProject>14</StepNumberBuildProject>
          Agente psicólogo: envio de mensagens motivacionais diárias.
        </ListItemBuildProject>
        <ListItemBuildProject>
          <StepNumberBuildProject>15</StepNumberBuildProject>
          Agente nutricionista: envio de mensagens e recomendações alimentares com base nas fotos do paciente.
        </ListItemBuildProject>
        <ListItemBuildProject>
          <StepNumberBuildProject>16</StepNumberBuildProject>
          Agente personal trainer: envio de treinos e mensagens motivacionais para o paciente.
        </ListItemBuildProject>
      </ListBuildProject>

      <SectionTitleBuildProject>6. Dashboard e Monitoramento</SectionTitleBuildProject>
      <ListBuildProject>
        <ListItemBuildProject>
          <StepNumberBuildProject>17</StepNumberBuildProject>
          Dashboard para monitoramento da quantidade de leads e mensagens enviadas.
        </ListItemBuildProject>
        <ListItemBuildProject>
          <StepNumberBuildProject>18</StepNumberBuildProject>
          Check-list semanal para avaliar a semana do paciente.
        </ListItemBuildProject>
      </ListBuildProject>

      <SectionTitleBuildProject>7. Funcionalidades Avançadas</SectionTitleBuildProject>
      <ListBuildProject>
        <ListItemBuildProject>
          <StepNumberBuildProject>19</StepNumberBuildProject>
          Cadastro de serviços e valores com fotos de antes e depois para o agente enviar automaticamente.
        </ListItemBuildProject>
        <ListItemBuildProject>
          <StepNumberBuildProject>20</StepNumberBuildProject>
          Cadastro completo do lead com exames e informações de saúde para o agente usar em sua interação.
        </ListItemBuildProject>
        <ListItemBuildProject>
          <StepNumberBuildProject>21</StepNumberBuildProject>
          Integração com Instagram, WhatsApp e outras plataformas para comunicação.
        </ListItemBuildProject>
        <ListItemBuildProject>
          <StepNumberBuildProject>22</StepNumberBuildProject>
          Relatório financeiro e gerenciamento de custos com tokens de IA e integração com plataformas de pagamento.
        </ListItemBuildProject>
      </ListBuildProject>

      <SectionTitleBuildProject>Resumo das Funcionalidades</SectionTitleBuildProject>
      <ListBuildProject>
        <ListItemBuildProject>
          <StepNumberBuildProject>23</StepNumberBuildProject>
          Automatização de tarefas com integração de IA.
        </ListItemBuildProject>
        <ListItemBuildProject>
          <StepNumberBuildProject>24</StepNumberBuildProject>
          Integração com sistemas de pagamento, faturamento e emissão de notas fiscais.
        </ListItemBuildProject>
        <ListItemBuildProject>
          <StepNumberBuildProject>25</StepNumberBuildProject>
          Interface amigável e fácil de operar para o médico e seus pacientes.
        </ListItemBuildProject>
      </ListBuildProject>
    </ContainerBuildProject>
  );
};

export default SaaSforDoctors;
