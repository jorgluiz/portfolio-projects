import { Container, SectionTitle, Subtitle, Paragraph, List, DividerWithText } from "@/styles/globalStyles";
import CodeBlock from "@/components/codeBlock";
const PollingVsWebSockets = () => {

  const BoldLabel = ({ children }) => <strong>{children}</strong>;

  return (
    <>
      <Container>
        <DividerWithText>
          Polling vs. WebSockets: Escolhendo a Ferramenta Certa para Comunicação em Tempo Real no Backend
        </DividerWithText>

        <Paragraph>
          <strong>São Paulo, 23 de junho de 2025</strong> - No dinâmico mundo do desenvolvimento de software, a comunicação eficiente entre o cliente e o servidor é crucial para uma experiência de usuário fluida e responsiva. Para aplicações que necessitam de atualizações de dados em tempo real, os desenvolvedores de backend frequentemente se deparam com uma escolha fundamental: implementar Polling ou utilizar WebSockets. Ambas as tecnologias visam manter o cliente atualizado, mas operam de maneiras distintas, cada uma com suas próprias vantagens e desvantagens. Compreender quando usar cada uma é essencial para construir aplicações robustas e escaláveis.
        </Paragraph>

        <Subtitle>O Método Tradicional: Polling</Subtitle>
        <Paragraph>
          O <strong>Polling</strong> é uma técnica na qual o cliente faz requisições periódicas ao servidor para verificar se há novos dados disponíveis. É uma abordagem mais tradicional e direta para obter atualizações. Existem duas variações principais de Polling:
        </Paragraph>
        <Paragraph>
          <strong>Short Polling:</strong> Nesta abordagem, o cliente envia uma requisição ao servidor em intervalos fixos e regulares. O servidor responde imediatamente, com ou sem novos dados. Se não houver dados novos, a resposta é vazia. O cliente então aguarda o próximo intervalo para fazer uma nova requisição.
        </Paragraph>
        <Paragraph>
          <strong>Long Polling:</strong> Uma otimização do Short Polling, no Long Polling o cliente também faz uma requisição ao servidor. No entanto, o servidor retém a requisição aberta até que novos dados estejam disponíveis ou um tempo limite (timeout) seja atingido. Assim que os dados chegam, o servidor os envia na resposta, e o cliente imediatamente abre uma nova conexão de longa espera. Isso reduz a latência e o número de requisições vazias em comparação com o Short Polling.
        </Paragraph>

        <Subtitle>Quando usar Polling?</Subtitle>
        <Paragraph>
          O Polling, especialmente o Long Polling, pode ser uma escolha adequada em cenários específicos:
        </Paragraph>
        <List>
          <li><strong>Aplicações com atualizações pouco frequentes:</strong> Se as atualizações de dados não são constantes e ocorrem em intervalos de tempo maiores, o Polling pode ser suficiente e mais simples de implementar. Pense em um sistema de notificações de baixa prioridade.</li>
          <li><strong>Compatibilidade com navegadores e infraestruturas legadas:</strong> O Polling utiliza o protocolo HTTP/HTTPS padrão, que é universalmente suportado por todos os navegadores e infraestruturas de rede, incluindo proxies e firewalls corporativos que podem bloquear outras tecnologias.</li>
          <li><strong>Simplicidade de implementação:</strong> Para protótipos rápidos ou aplicações onde a comunicação em tempo real não é o recurso principal, a simplicidade do Polling pode ser atraente.</li>
          <li><strong>Recuperação de falhas:</strong> A natureza sem estado das requisições HTTP no Polling pode simplificar a recuperação de falhas de conexão. Se uma requisição falhar, o cliente simplesmente tentará novamente no próximo intervalo.</li>
        </List>
        <Paragraph>
          No entanto, o Polling tem suas desvantagens. O Short Polling pode ser ineficiente, gerando um grande número de requisições desnecessárias e sobrecarregando o servidor. O Long Polling, embora mais eficiente, pode manter conexões do servidor ocupadas por longos períodos, o que pode ser um problema em aplicações com um grande número de clientes simultâneos.
        </Paragraph>

        <Subtitle>A Evolução da Comunicação: WebSockets</Subtitle>
        <Paragraph>
          Os <strong>WebSockets</strong> representam uma evolução na comunicação web, fornecendo um canal de comunicação <strong>bidirecional</strong> e <strong>full-duplex</strong> sobre uma única conexão TCP de longa duração. Após um handshake inicial sobre HTTP, a conexão é "atualizada" para o protocolo WebSocket, permitindo que tanto o cliente quanto o servidor enviem dados um ao outro a qualquer momento, sem a necessidade de novas requisições.
        </Paragraph>

        <Subtitle>Quando usar WebSockets?</Subtitle>
        <Paragraph>
          Os WebSockets são a escolha ideal para aplicações que exigem comunicação em tempo real de baixa latência e alta frequência. Alguns casos de uso proeminentes incluem:
        </Paragraph>
        <List>
          <li><strong>Aplicações de chat em tempo real.</strong></li>
          <li><strong>Jogos online multiplayer.</strong></li>
          <li><strong>Edição colaborativa de documentos.</strong></li>
          <li><strong>Dashboards de monitoramento e feeds de dados ao vivo.</strong></li>
          <li><strong>Aplicações de Internet das Coisas (IoT).</strong></li>
        </List>
        <Paragraph>
          A principal vantagem dos WebSockets é a sua eficiência. Ao eliminar a sobrecarga de múltiplas requisições HTTP, eles reduzem significativamente a latência e o consumo de largura de banda. A comunicação bidirecional também simplifica a arquitetura de aplicações que requerem que o servidor inicie a comunicação com o cliente.
        </Paragraph>
        <Paragraph>
          Contudo, os WebSockets também apresentam desafios. A implementação pode ser mais complexa do que o Polling, exigindo bibliotecas específicas tanto no lado do cliente quanto no do servidor. Além disso, embora o suporte seja amplo nos navegadores modernos, ambientes de rede restritivos podem bloquear as conexões WebSocket.
        </Paragraph>

        <Subtitle>Tabela Comparativa: Polling vs. WebSockets</Subtitle>
        <table>
          <thead>
            <tr>
              <th>Característica</th>
              <th>Polling (Short/Long)</th>
              <th>WebSockets</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Comunicação</strong></td>
              <td>Unidirecional (iniciada pelo cliente)</td>
              <td>Bidirecional</td>
            </tr>
            <tr>
              <td><strong>Conexão</strong></td>
              <td>Nova conexão por requisição (Short) ou longa espera (Long)</td>
              <td>Conexão persistente única</td>
            </tr>
            <tr>
              <td><strong>Latência</strong></td>
              <td>Maior, dependendo do intervalo de polling</td>
              <td>Muito baixa</td>
            </tr>
            <tr>
              <td><strong>Overhead</strong></td>
              <td>Alto (cabeçalhos HTTP em cada requisição)</td>
              <td>Baixo (após o handshake inicial)</td>
            </tr>
            <tr>
              <td><strong>Escalabilidade</strong></td>
              <td>Pode ser um desafio com muitos clientes</td>
              <td>Mais escalável para tempo real</td>
            </tr>
            <tr>
              <td><strong>Compatibilidade</strong></td>
              <td>Universal (HTTP)</td>
              <td>Ampla, mas pode ser bloqueado</td>
            </tr>
            <tr>
              <td><strong>Complexidade</strong></td>
              <td>Geralmente mais simples de implementar</td>
              <td>Pode ser mais complexo</td>
            </tr>
          </tbody>
        </table>

        <Subtitle>Conclusão: A Escolha Certa Depende do Contexto</Subtitle>
        <Paragraph>
          A decisão entre Polling e WebSockets não é uma questão de qual tecnologia é inerentemente superior, mas sim qual se adequa melhor aos requisitos específicos da sua aplicação.
        </Paragraph>
        <Paragraph>
          Para funcionalidades que necessitam de atualizações esporádicas e onde a simplicidade e a compatibilidade universal são prioridades, o <strong>Polling</strong> (especialmente o Long Polling) ainda é uma solução viável e eficaz.
        </Paragraph>
        <Paragraph>
          Por outro lado, para aplicações modernas que dependem de interatividade instantânea, baixa latência e comunicação de alta frequência, os <strong>WebSockets</strong> são a escolha indiscutivelmente superior, proporcionando uma experiência de usuário mais rica e um uso mais eficiente dos recursos do servidor.
        </Paragraph>
      </Container>

      <Container>
        <DividerWithText>
          Polling vs. WebSockets na Prática: Exemplos de Código
        </DividerWithText>

        <Subtitle>1. Exemplo de Polling</Subtitle>
        <CodeBlock language="jsx">
          {`const startPolling = (jobId: string, originalUrl: string) => {
  pollingIntervalRef.current = setInterval(async () => {
    try {
      // Pergunta ao servidor sobre o status do trabalho
      const response = await fetch(\`\${BACKEND_URL}/status/\${jobId}\`);
      const data = await response.json();

      switch (data.status) {
        case 'completed':
          stopPolling(); // Para de perguntar
          // ... faz o download
          break;
        case 'failed':
          stopPolling(); // Para de perguntar
          // ... mostra erro
          break;
        // Se 'processing', continua perguntando no próximo intervalo
      }
    } catch (error) {
      // ...
    }
  }, 5000); // Pergunta a cada 5 segundos
};`}
        </CodeBlock>
        <Paragraph>
          <strong>Onde foi aplicado:</strong> Este código é usado para verificar o andamento de uma tarefa que leva tempo para ser concluída no servidor (backend), como o processamento de um arquivo para download. O cliente inicia a tarefa e recebe um <strong>jobId</strong> (um número de identificação do trabalho).
        </Paragraph>
        <Paragraph>
          <strong>Qual era a necessidade:</strong> O cliente (frontend) não sabe quando a tarefa no servidor estará pronta. Como o protocolo HTTP padrão não permite que o servidor avise o cliente por conta própria, a solução foi fazer com que o cliente pergunte ativamente ao servidor sobre o status da tarefa.
        </Paragraph>
        <Paragraph>
          <strong>Polling foi a técnica escolhida:</strong> a cada 5 segundos (usando <strong>setInterval</strong>), o cliente faz uma requisição (<strong>fetch</strong>) para o endpoint <strong>/status/{'jobId'}</strong> perguntando: "E aí, o trabalho já terminou?". Ele continua fazendo isso até que o servidor responda que o status é <strong>completed</strong> (concluído) ou <strong>failed</strong> (falhou). Essa abordagem é simples e eficaz para tarefas assíncronas com um início e fim definidos.
        </Paragraph>

        <Subtitle>2. Exemplo de WebSocket</Subtitle>
        <CodeBlock language="jsx">
          {`useEffect(() => {
  // Conecta ao servidor via WebSocket
  const socket = io('https://backend-venda.up.railway.app', {
    transports: ['websocket'],
  });

  // Entra em uma "sala" específica para este usuário
  socket.emit('joinRoom', userID);

  // Fica OUVINDO por uma mensagem do servidor
  socket.on('paymentUpdate', async (data) => {
    if (data.status === 'paid') {
      // O servidor AVISOU que o pagamento foi feito.
      // Atualiza a tela para "Pagamento Confirmado"
      setPaymentConfirmed(true);
    }
  });

  // Desconecta quando o componente é fechado
  return () => socket.disconnect();
}, []);`}
        </CodeBlock>
        <Paragraph>
          <strong>Onde foi aplicado:</strong> Em uma tela de confirmação de pagamento PIX. O usuário vê um QR Code e precisa realizar o pagamento externamente (no app do banco). A tela fica aguardando a confirmação desse pagamento.
        </Paragraph>
        <Paragraph>
          <strong>Qual era a necessidade:</strong> A confirmação do pagamento é um evento externo e imprevisível. O servidor só saberá que o pagamento foi feito quando o sistema do banco o notificar. A aplicação precisa refletir essa confirmação na tela do usuário imediatamente, sem que ele precise recarregar a página.
        </Paragraph>
        <Paragraph>
          <strong>WebSocket é a solução ideal aqui.</strong> Ele cria um canal de comunicação direto e persistente entre o cliente e o servidor. O cliente não fica perguntando "já pagou?". Em vez disso, ele simplesmente se inscreve para receber um aviso. Quando o servidor recebe a notificação do pagamento, ele usa o canal do WebSocket para enviar ativamente um aviso (com <strong>socket.on('paymentUpdate')</strong>) para o cliente. Ao receber esse aviso, a tela é atualizada em tempo real. Isso cria uma experiência de usuário muito mais fluida e instantânea.
        </Paragraph>

        <Subtitle>Resumo da Diferença na Prática</Subtitle>
        <Paragraph>
          <strong>Polling (Exemplo 1):</strong> O cliente é o ativo, perguntando repetidamente ao servidor sobre o status de algo que ele mesmo iniciou. É como ligar para a pizzaria a cada 5 minutos para saber se sua pizza já saiu para entrega.
        </Paragraph>
        <Paragraph>
          <strong>WebSocket (Exemplo 2):</strong> O servidor é o ativo. O cliente apenas espera por um aviso. É como cadastrar seu celular no iFood e receber uma notificação automática no momento exato em que o entregador sai com seu pedido.
        </Paragraph>
      </Container>
    </>
  );
};

export default PollingVsWebSockets;
