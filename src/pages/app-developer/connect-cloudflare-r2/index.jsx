import { useEffect } from 'react';
import Head from "next/head";
import { useGlobalState } from "../../../context/GlobalStateContext";
import {
  Container,
  SectionTitle,
  Subtitle,
  Paragraph,
  List,
  Link, // Mantive o Link caso precise usar em algum momento
  CodeContainer,
  DividerWithText,
  Diagram,
  Wrapper
} from "@/styles/globalStyles";

import { MainLayout } from "@/components/layout/mainLayout";
import SideBarLayout from "@/components/layout/sideBarLayout";
import HeaderLayout from "@/components/layout/headerLayout";
import MainContentLayout from "@/components/layout/contentLayout";
import Overlay from "@/components/overlay";

import hljs from 'highlight.js'; // Importando o highlight.js
import 'highlight.js/styles/atom-one-dark.css'; // Estilo para colorir a sintaxe

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  margin: '20px 0',
  overflowX: 'auto',
  display: 'block',
  whiteSpace: 'nowrap',
  marginLeft: 'auto',
  marginRight: 'auto',
};

const thStyle = {
  padding: '10px',
  textAlign: 'center',
  border: '1px solid #ddd',
};

const tdStyle = {
  padding: '10px',
  textAlign: 'center',
  border: '1px solid #ddd',
};

const theadStyle = {
  backgroundColor: '#f4f4f4',
};

const tbodyStyle = {
  backgroundColor: '#fff',
};

// Renomeando o componente para refletir o novo conteúdo
const AndroidStudioSetup = () => {
  const { isLoaded, isHamburguerOpen, setIsHamburguerOpen } = useGlobalState();

  const handleOverlayClick = () => setIsHamburguerOpen(false);

  useEffect(() => {
    // Aplica o destaque de sintaxe a todos os blocos de código na montagem do componente
    hljs.highlightAll();
  }, []);

  return (
    <>
      <Head>
        {/* Primary Meta Tags Atualizados */}
        <title>Guia Completo: Configurando o Ambiente Android Studio para React Native</title>
        <meta
          name="description"
          content="Passo a passo detalhado para configurar o Android Studio, SDK, AVD e variáveis de ambiente para desenvolvimento React Native. Solucione problemas comuns e domine o setup."
        />
        <meta
          name="keywords"
          content="React Native, Android Studio, Configuração de Ambiente, SDK, AVD, Gradle, adb, Desenvolvimento Mobile"
        />
        <meta name="author" content="Jorge Luiz" />

        {/* Open Graph / Facebook Atualizados */}
        <meta property="og:site_name" content="https://portfolio-projects-production.up.railway.app" />
        <meta property="og:type" content="website" />
        {/* URL atualizada para refletir o novo conteúdo */}
        <meta property="og:url" content="https://portfolio-projects-production.up.railway.app/menu-secreto/configuracao-ambiente-android" />
        <meta property="og:title" content="Guia Completo: Configurando o Ambiente Android Studio para React Native" />
        <meta property="og:description" content="Aprenda o passo a passo para preparar seu ambiente de desenvolvimento Android para projetos React Native, desde a instalação até a resolução de problemas comuns." />
        <meta property="og:image" content="https://portfolio-projects-production.up.railway.app/perfil.png" />

        {/* Twitter Atualizados */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://portfolio-projects-production.up.railway.app/menu-secreto/configuracao-ambiente-android" />
        <meta property="twitter:title" content="Guia Completo: Configurando o Ambiente Android Studio para React Native" />
        <meta property="twitter:description" content="Um guia detalhado sobre como configurar o Android Studio, SDK, AVD e variáveis de ambiente para começar a desenvolver com React Native." />
        <meta property="twitter:image" content="https://portfolio-projects-production.up.railway.app/perfil.png" />
      </Head>

      {!isLoaded ? null : (
        <>
          {isHamburguerOpen && <Overlay onClick={handleOverlayClick} />}
          <MainLayout>
            <SideBarLayout />
            <HeaderLayout />
            <MainContentLayout>
              <CodeContainer>
                <Container>
                  <DividerWithText>
                    Passo 1: A Decisão da Fundação - Escolha da Linguagem e do Framework
                  </DividerWithText>
                  <Paragraph>
                    O objetivo desta etapa inicial foi analisar as opções de tecnologia e selecionar a combinação mais adequada para uma API de download de alto volume, antes de qualquer implementação. A jornada não começou do zero, but sim da análise crítica de sugestões iniciais, validando qual caminho tecnológico ofereceria a melhor performance para o desafio proposto.
                  </Paragraph>

                  <Subtitle>1.1. O Panorama Inicial: Análise das Opções de Linguagem</Subtitle>
                  <Paragraph>
                    A análise começou considerando linguagens para sistemas de alta concorrência: <code>Go</code>, <code>Node.js</code>, <code>Python</code> e <code>Java</code>. A escolha foi rapidamente direcionada para o <code>Node.js</code>.
                  </Paragraph>
                  <Paragraph>
                    <strong>Justificativa e Aprendizado:</strong> A escolha foi estratégica por seu ecossistema maduro (<code>NPM</code>) e, principalmente, por seu modelo de I/O (Entrada/Saída) não-bloqueante, ideal para lidar com um grande número de requisições de rede simultâneas de forma eficiente.
                  </Paragraph>
                  <Paragraph>
                    <strong>Detalhes da Jornada:</strong> O ponto de partida foi validar as recomendações de uma conversa com o ChatGPT. Embora <code>Go (Golang)</code> tenha sido considerado por sua performance bruta, o <code>Node.js</code> foi selecionado pelo equilíbrio perfeito entre alto desempenho em operações de rede, a vasta quantidade de bibliotecas prontas no <code>NPM</code> e a familiaridade com o ecossistema JavaScript/TypeScript. Foi uma decisão pragmática, priorizando a velocidade de desenvolvimento sem sacrificar a capacidade de lidar com alta concorrência.
                  </Paragraph>

                  <Subtitle>1.2. O Duelo de Frameworks: NestJS vs. Express.js</Subtitle>
                  <Paragraph>
                    <strong>Dúvida Crítica Resolvida:</strong> "Para uma API cujo requisito principal é performance bruta e baixa latência, qual a melhor escolha: o robusto <code>NestJS</code> ou o minimalista <code>Express.js</code>?"
                  </Paragraph>
                  <Paragraph>
                    <strong>Detalhes da Jornada (O Desafio Central da Análise):</strong> Esta foi a decisão mais debatida da fase inicial. A tentação era adotar o <code>NestJS</code> por ser um framework "completo" e moderno, que impõe uma organização robusta. No entanto, a análise aprofundada nos forçou a questionar o princípio fundamental: "Estamos construindo um sistema com regras de negócio complexas que se beneficia dessa estrutura, ou estamos adicionando um peso desnecessário para uma tarefa simples?".
                  </Paragraph>
                  <List>
                    <li>
                      <strong>Análise do NestJS:</strong> Identificado como excelente para projetos grandes e complexos devido à sua estrutura organizada e modular. No entanto, essa estrutura robusta vem com um "custo" de maior consumo de memória e um leve "overhead" por requisição.
                    </li>
                    <li>
                      <strong>Análise do Express.js:</strong> Identificado como ideal para microserviços e cenários onde desempenho máximo e baixo consumo de recursos são cruciais, por ser extremamente leve e não-opinativo.
                    </li>
                  </List>
                  <Paragraph>
                    <strong>A Decisão Final e o Aprendizado Chave:</strong> Foi decidido utilizar o <code>Express.js</code>. A conclusão foi a importância de adequar a ferramenta ao problema. Como a prioridade era a latência e a capacidade de processar requisições de forma "crua" e rápida, o ganho em organização do <code>NestJS</code> não justificava seu custo de performance. O aprendizado foi resistir à tendência de usar a ferramenta mais "completa" e, em vez disso, escolher a mais adequada.
                  </Paragraph>

                  <Subtitle>1.3. A "Stack" Arquitetural Inicial Definida</Subtitle>
                  <Paragraph>
                    Ao final desta fase de análise, a base do projeto estava definida:
                  </Paragraph>
                  <List>
                    <li><strong>Plataforma:</strong> Node.js</li>
                    <li><strong>Framework Web:</strong> Express.js</li>
                    <li><strong>Conceito Arquitetural Chave:</strong> Ficou claro que, mesmo com o Express, a tarefa de download não poderia ocorrer na requisição principal. A decisão foi, portanto, atrelada à estratégia de implementar um sistema de filas para processar os downloads em segundo plano.</li>
                  </List>
                  <Paragraph>
                    <strong>Detalhes da Jornada:</strong> A definição do conceito de fila assíncrona nesta fase inicial foi o aprendizado mais valioso, pois moldou todas as decisões técnicas subsequentes. Entendeu-se que a escolha do framework (<code>Express</code>, por ser leve) e a necessidade de um sistema de filas (que mais tarde seria o <code>BullMQ</code>) estavam intrinsecamente ligadas para alcançar o objetivo de alta performance.
                  </Paragraph>
                </Container>

                <Container>
                  <DividerWithText>
                    Passo 2: Configuração do Ambiente e Implementação da Arquitetura Básica
                  </DividerWithText>
                  <Paragraph>
                    Com a estratégia definida, o objetivo desta etapa foi tirar a arquitetura do papel e criar a primeira versão funcional do sistema, com a API recebendo a requisição e um Worker processando-a em segundo plano.
                  </Paragraph>

                  <Subtitle>2.1. Configuração do Ambiente de Desenvolvimento</Subtitle>
                  <Paragraph>
                    As dependências essenciais (<code>express</code>, <code>bullmq</code>, <code>ioredis</code>, <code>uuid</code>) foram instaladas e o servidor Redis foi iniciado via <code>Docker</code>.
                  </Paragraph>
                  <Paragraph>
                    <strong>Desafio Chave Enfrentado: O Erro ECONNREFUSED</strong>
                    <br />
                    <strong>Problema:</strong> Ao iniciar a aplicação pela primeira vez, o sistema falhou com o erro <code>Error: connect ECONNREFUSED 127.0.0.1:6379</code>.
                    <br />
                    <strong>Diagnóstico e Jornada:</strong> A depuração revelou que a aplicação Node.js não conseguia se conectar ao servidor Redis. A investigação aprofundada mostrou que uma versão nativa e desatualizada (5.x) do Redis estava instalada no Windows, causando conflitos e incompatibilidade com as versões recomendadas pelo BullMQ.
                    <br />
                    <strong>Aprendizado e Solução:</strong> O aprendizado fundamental foi que Redis não é uma biblioteca, mas sim um serviço de servidor independente. A solução foi modernizar o ambiente de desenvolvimento, desabilitando o serviço antigo e adotando o Docker Desktop. Um novo contêiner Redis foi iniciado com <code>docker run ... redis:latest</code>, resolvendo o erro de conexão e atualizando o Redis para a versão 7.x, alinhando o ambiente com as melhores práticas.
                  </Paragraph>

                  <Subtitle>2.2. Implementação do "Produtor": A API Express</Subtitle>
                  <Paragraph>
                    A rota <code>POST /download</code> foi implementada. Sua única responsabilidade é gerar um ID único para a requisição, adicionar um job à fila do BullMQ com o comando <code>downloadQueue.add(...)</code> e responder imediatamente ao cliente com o status <code>202 Accepted</code> e o ID do job.
                  </Paragraph>
                  <Paragraph>
                    <strong>Aprendizado Chave:</strong> Esta foi a aplicação prática do padrão Produtor/Consumidor. A escolha pelo status HTTP <code>202 Accepted</code> foi intencional, pois ele comunica semanticamente que a solicitação foi aceita para processamento, mas ainda não foi concluída. O entendimento de como a operação <code>await downloadQueue.add()</code> é extremamente rápida e não bloqueia o servidor foi a base para uma experiência de usuário responsiva.
                  </Paragraph>

                  <Subtitle>2.3. Implementação do "Consumidor": O Worker do BullMQ</Subtitle>
                  <Paragraph>
                    Um processo Worker do BullMQ foi criado para operar em segundo plano, "escutando" a fila de downloads. A lógica inicial do worker foi extrair a URL do job e invocar a ferramenta <code>yt-dlp</code> através de um processo filho do Node.js.
                  </Paragraph>
                  <Paragraph>
                    <strong>Detalhes da Jornada:</strong> A primeira implementação utilizou <code>child_process.exec</code>. Embora funcional, a análise posterior (no passo de robustez) identificou um risco de segurança (Command Injection). O aprendizado foi a importância de usar <code>execFile</code> em seu lugar, que trata os argumentos de forma segura, uma prática essencial que foi incorporada nas iterações seguintes do projeto, demonstrando uma evolução no quesito segurança do código.
                  </Paragraph>

                  <Subtitle>2.4. O Elo de Ligação: A Rota de Status Inicial</Subtitle>
                  <Paragraph>
                    A rota <code>GET /status/:id</code> foi implementada. A lógica inicial, intencionalmente simples, apenas usava <code>fs.existsSync()</code> para verificar se o arquivo de vídeo correspondente já havia sido criado pelo Worker.
                  </Paragraph>
                  <Paragraph>
                    <strong>Aprendizado:</strong> Esta abordagem, embora soubesse que seria substituída, foi uma decisão pragmática. Ela serviu como um "teste de fumaça" (smoke test) rápido e eficaz para validar que todo o fluxo assíncrono estava funcionando de ponta a ponta (API enfileira -> Worker processa -> Rota de status confirma) antes de investir tempo em uma lógica de status mais complexa.
                  </Paragraph>
                </Container>

                <Container>
                  <DividerWithText>
                    Passo 3: Tornando o Protótipo Robusto e Escalável
                  </DividerWithText>
                  <Paragraph>
                    Com o esqueleto funcional validado, o foco desta etapa foi transformar o protótipo em um serviço verdadeiramente profissional. O objetivo era garantir que a aplicação pudesse lidar com falhas, picos de carga e os desafios de uma arquitetura distribuída, através de quatro pilares de implementação.
                  </Paragraph>

                  <Subtitle>Pilar 1: Controle de Concorrência (Gerenciamento de Carga)</Subtitle>
                  <Paragraph>
                    <strong>Problema:</strong> O que acontece se centenas de usuários solicitarem downloads ao mesmo tempo?
                    <br />
                    <strong>Diagnóstico:</strong> O servidor tentaria iniciar centenas de processos <code>yt-dlp</code>, esgotando a CPU e a memória, levando ao colapso do serviço.
                    <br />
                    <strong>Solução:</strong> Foi adicionada a opção <code>{`{ concurrency: 6 }`}</code> ao construtor do Worker do BullMQ.
                    <br />
                    <strong>Aprendizado e Jornada:</strong> A lição aqui foi a transição de um pensamento de "funciona na minha máquina" para um de "como isso se comporta sob estresse?". A implementação do controle de concorrência foi um passo proativo para proteger o sistema de sua própria carga, atuando como um "gatekeeper" que processa a fila em um ritmo sustentável, garantindo performance e estabilidade.
                  </Paragraph>

                  <Subtitle>Pilar 2: Prevenção de Jobs Travados (Tolerância a Falhas)</Subtitle>
                  <Paragraph>
                    <strong>Problema:</strong> E se um download específico nunca terminar, seja por um erro de rede ou do próprio <code>yt-dlp</code>?
                    <br />
                    <strong>Diagnóstico:</strong> Um job "travado" no estado "ativo" poderia ocupar um dos preciosos slots de concorrência indefinidamente, diminuindo a capacidade de processamento do sistema e, eventualmente, paralisando a fila.
                    <br />
                    <strong>Solução:</strong> Foi adicionada a opção <code>{`{ timeout: 180000 }`}</code> (3 minutos) ao criar cada job. Se um job exceder esse tempo, o BullMQ o marca automaticamente como falho.
                    <br />
                    <strong>Aprendizado e Jornada:</strong> O aprendizado foi sobre a importância de projetar para a falha. Em vez de esperar que tudo funcione perfeitamente, o sistema foi equipado com um mecanismo de auto-regeneração ("self-healing"), garantindo que nenhuma tarefa problemática possa comprometer a saúde do sistema a longo prazo sem intervenção manual.
                  </Paragraph>

                  <Subtitle>Pilar 3: Feedback de Erros e Refatoração da API</Subtitle>
                  <Paragraph>
                    <strong>Problema:</strong> Como o usuário sabe por que seu download falhou? A rota de status inicial era um "buraco negro" de informação.
                    <br />
                    <strong>Diagnóstico:</strong> A abordagem inicial com <code>fs.existsSync()</code> era frágil e incapaz de diferenciar um job em processamento de um que havia falhado.
                  </Paragraph>
                  <Paragraph>
                    <strong>Solução e Jornada:</strong> O sistema foi refatorado em múltiplas frentes:
                  </Paragraph>
                  <List>
                    <li><strong>Worker Inteligente:</strong> A lógica do worker foi aprimorada para capturar a saída de erro (<code>stderr</code>) do <code>yt-dlp</code> e rejeitar a promessa com essa mensagem específica.</li>
                    <li><strong>Consulta Direta à Fila:</strong> A rota <code>GET /status/:id</code> foi reescrita para consultar o estado do job diretamente no Redis (<code>downloadQueue.getJob()</code>), permitindo o acesso a <code>job.failedReason</code>.</li>
                    <li><strong>Separação de Responsabilidades:</strong> Foi criada uma nova rota <code>GET /download/:key</code> com a única finalidade de servir o link do arquivo, tornando a API mais limpa.</li>
                  </List>
                  <Paragraph>
                    <strong>Aprendizado:</strong> O valor de projetar APIs claras e previsíveis. O sistema passou de um serviço que apenas "funcionava" para um que "se comunicava" de forma eficaz, o que é fundamental para a experiência do usuário e para a capacidade de depuração.
                  </Paragraph>

                  <Subtitle>Pilar 4: Arquitetura Stateless com Armazenamento em Nuvem</Subtitle>
                  <Paragraph>
                    <strong>Problema:</strong> Após o primeiro deploy na <code>Railway</code>, a API retornava "Arquivo não encontrado", mesmo com os logs do Worker mostrando sucesso. Como o Serviço da API acessa um arquivo que foi baixado e salvo pelo Serviço do Worker, se ambos rodam em contêineres isolados?
                  </Paragraph>
                  <Paragraph>
                    <strong>Diagnóstico e Jornada:</strong> Este foi um desafio de infraestrutura crucial. Adicionando logs detalhados, foi provado que o Worker estava criando o arquivo, mas em seu próprio sistema de arquivos efêmero. A API, rodando em um contêiner separado, não tinha acesso a ele.
                  </Paragraph>
                  <Paragraph>
                    <strong>Solução:</strong> A solução foi desacoplar completamente o armazenamento da aplicação, movendo-o para o <code>Cloudflare R2</code>. O <code>downloadWorker</code> agora faz o upload do vídeo para um "bucket". A API, por sua vez, gera um link de download seguro para o objeto no R2. A lógica de limpeza (<code>cleanupWorker</code>) também foi refeita para operar diretamente no bucket.
                  </Paragraph>
                  <Paragraph>
                    <strong>Aprendizado:</strong> O aprendizado fundamental foi sobre a natureza dos sistemas de arquivos isolados em arquiteturas de microserviços. A migração para armazenamento de objetos tornou a aplicação verdadeiramente stateless, um princípio essencial para a escalabilidade e manutenção na nuvem.
                  </Paragraph>
                </Container>

                <Container>
                  <DividerWithText>
                    Passo 4: Blindagem da Aplicação - Segurança em Múltiplas Camadas
                  </DividerWithText>
                  <Paragraph>
                    Com a aplicação robusta, estável e escalável, a prioridade se voltou para a segurança. O objetivo desta etapa foi proteger o serviço contra abusos externos e garantir que os dados gerados fossem entregues de forma segura e controlada. Isso foi feito através de duas estratégias complementares, criando múltiplas camadas de defesa.
                  </Paragraph>

                  <Subtitle>4.1. Estratégia de Defesa 1: Proteção na Entrada com Rate Limiting</Subtitle>
                  <Paragraph>
                    <strong>Problema / Dúvida Crítica:</strong> "Com o sistema robusto internamente, estou protegido se um ator malicioso tentar fazer milhares de requisições simultaneamente?"
                  </Paragraph>
                  <Paragraph>
                    <strong>Diagnóstico e Jornada:</strong> A análise revelou uma vulnerabilidade crucial. Embora o Controle de Concorrência (Pilar 1) protegesse os workers da sobrecarga, ele não protegia a API ou a fila do <code>Redis</code>. Um atacante poderia inundar a rota <code>POST /download</code> com milhões de solicitações. Cada uma delas criaria um job na fila, o que poderia consumir toda a memória do servidor <code>Redis</code> e causar uma negação de serviço (DoS), derrubando todo o sistema de filas.
                  </Paragraph>
                  <Paragraph>
                    <strong>Solução:</strong> Foi implementada a Limitação de Taxa (Rate Limiting) utilizando a biblioteca <code>express-rate-limit</code>. Um middleware foi aplicado globalmente na API, estabelecendo uma regra clara: no máximo 100 requisições a cada 15 minutos por endereço de IP. Se um cliente ultrapassar esse limite, sua requisição é imediatamente bloqueada com um erro <code>429 Too Many Requests</code>, sem nunca chegar à lógica da rota e sem consumir recursos da fila.
                  </Paragraph>
                  <Paragraph>
                    <strong>Aprendizado:</strong> A importância de proteger a "porta de entrada" da aplicação. A robustez interna não é suficiente se a fronteira do serviço estiver vulnerável a ataques de volume.
                  </Paragraph>

                  <Subtitle>4.2. Estratégia de Defesa 2: Proteção na Saída com Links Seguros</Subtitle>
                  <Paragraph>
                    <strong>Problema / Dúvida Crítica:</strong> "Agora que os vídeos estão no <code>Cloudflare R2</code>, como posso garantir que apenas o usuário que solicitou o vídeo possa baixá-lo? E como evitar que o link de download seja compartilhado e usado para sempre por qualquer pessoa?"
                  </Paragraph>
                  <Paragraph>
                    <strong>Diagnóstico:</strong> Simplesmente retornar um link público para o arquivo no bucket R2 seria uma falha grave de segurança. Isso permitiria <strong>hotlinking</strong> (outros sites usando seu link diretamente), acesso não autorizado e consumo de banda por terceiros, o que poderia gerar custos e sobrecarga.
                  </Paragraph>
                  <Paragraph>
                    <strong>Solução:</strong> A rota <code>GET /download/:key</code> foi projetada para não retornar o arquivo diretamente. Em vez disso, ela atua como um "portão de autorização" que utiliza o <code>AWS SDK</code> para gerar uma <strong>URL de download assinada (pre-signed URL)</strong>. Essa URL é única, aponta para o arquivo no R2 e, crucialmente, possui uma validade curta (5 minutos). Após esse tempo, o link expira e se torna inválido, garantindo que o acesso ao arquivo seja temporário e controlado.
                  </Paragraph>
                  <Paragraph>
                    <strong>Aprendizado:</strong> A segurança dos dados não termina quando eles são armazenados; ela se estende até a sua entrega. O uso de URLs assinadas é uma prática padrão da indústria para fornecer acesso seguro и de curto prazo a objetos em armazenamento na nuvem.
                  </Paragraph>
                </Container>

                <Container>
                  <DividerWithText>
                    Passo 5: A Orquestração do Frontend - Unindo Tudo em uma Experiência Única
                  </DividerWithText>
                  <Paragraph>
                    Com o backend completo, robusto e seguro, o objetivo desta etapa final e conceitual é documentar a lógica que a aplicação cliente (seja um site com JavaScript ou um app móvel) precisa implementar para interagir com a API, transformando múltiplas chamadas técnicas em uma experiência de usuário fluida e de "ação única".
                  </Paragraph>

                  <Subtitle>5.1. A Dúvida Crítica de Experiência do Usuário (UX)</Subtitle>
                  <Paragraph>
                    <strong>Problema:</strong> "Como o usuário pode ter uma experiência simples de 'clicar e baixar' se a nossa arquitetura de backend, por ser assíncrona, exige um fluxo com múltiplas requisições (<code>POST /download</code>, <code>GET /status/:id</code>, <code>GET /download/:key</code>)?"
                    <br />
                    <strong>Diagnóstico:</strong> A complexidade da arquitetura de backend é uma vantagem técnica, mas nunca deve ser um fardo para o usuário. A responsabilidade de gerenciar o fluxo de chamadas e o estado da interação deve ser inteiramente do código do frontend.
                  </Paragraph>

                  <Subtitle>5.2. A Estratégia: O Frontend como "Maestro"</Subtitle>
                  <Paragraph>
                    <strong>Estratégia Adotada:</strong> O frontend atuará como um "orquestrador" ou "maestro". O backend oferece os "instrumentos" (as rotas da API), e o frontend é responsável por "regê-los" na sequência e no tempo corretos para produzir a "música" (a experiência do usuário).
                  </Paragraph>
                  <Paragraph>
                    <strong>Aprendizado Chave:</strong> A importância da separação de responsabilidades no desenvolvimento full-stack. O backend foi projetado para ser <strong>stateless</strong> (sem estado), processando cada requisição de forma independente. O frontend, por outro lado, se torna <strong>stateful</strong> durante a interação, gerenciando o estado do pedido do usuário (o <code>requestId</code>, o status atual, etc.) do início ao fim.
                  </Paragraph>

                  <Subtitle>5.3. O Fluxo de Execução no Código do Cliente</Subtitle>
                  <Paragraph>
                    A partir de um único clique do usuário no botão "Baixar", o código do frontend executa a seguinte sequência de forma autônoma e invisível para o usuário:
                  </Paragraph>
                  <List>
                    <li>
                      <strong>Requisição Inicial e Feedback Imediato:</strong> O frontend envia a requisição <code>POST</code> para <code>/download</code> com a URL. Imediatamente, a interface do usuário (UI) é atualizada para um estado de carregamento (ex: um spinner com a mensagem "Preparando seu download..."). A API responde em milissegundos com um <code>{`{ "requestId": "..." }`}</code>.
                    </li>
                    <li>
                      <strong>Início do "Polling" Automático:</strong> Com o <code>requestId</code> em mãos, o frontend inicia um temporizador (<code>setInterval</code>) que, a cada 3 a 5 segundos, faz uma requisição <code>GET</code> para a rota <code>/status/:requestId</code>.
                    </li>
                    <li>
                      <strong>O Loop de Verificação e Decisão:</strong> A cada resposta da rota de status, o código do frontend analisa o JSON recebido e toma uma decisão:
                      <List>
                        <li>Se <code>status: 'processing'</code>, ele não faz nada e simplesmente aguarda o próximo ciclo do <code>setInterval</code>.</li>
                        <li>Se <code>status: 'failed'</code>, ele interrompe o polling (<code>clearInterval</code>) e exibe uma mensagem de erro clara para o usuário, utilizando a informação do campo <code>reason</code>.</li>
                        <li>Se <code>status: 'completed'</code>, ele interrompe o polling, pega a chave do arquivo (<code>fileKey</code>) que vem na resposta e avança para o passo final.</li>
                      </List>
                    </li>
                    <li>
                      <strong>O Gatilho do Download Final (com R2):</strong> Ao receber o status <code>'completed'</code>, o frontend usa a <code>fileKey</code> recebida para construir a URL final (ex: <code>/download/${'fileKey'}</code>). Ele então faz o navegador acessar esta rota. O backend, ao receber a requisição em <code>GET /download/:key</code>, não envia o arquivo. Em vez disso, ele gera a URL de download segura e temporária para o <code>Cloudflare R2</code> e <strong>redireciona</strong> o navegador do usuário para essa URL, que finalmente inicia o download do arquivo.
                    </li>
                  </List>

                  <Subtitle>5.4. Aprendizado Final da Arquitetura Full-Stack</Subtitle>
                  <Paragraph>
                    O aprendizado final foi como uma arquitetura de backend assíncrona e desacoplada, especialmente quando combinada com armazenamento em nuvem, permite a criação de uma experiência de usuário muito superior. O redirecionamento final para o R2 ainda desafoga o servidor, já que a transferência pesada do arquivo ocorre diretamente entre o Cloudflare e o cliente. Isso resulta em uma aplicação que é, ao mesmo tempo, extremamente performática para a infraestrutura e amigável para o usuário final.
                  </Paragraph>
                </Container>

                <Container>
                  <DividerWithText>
                    Tecnologias do Projeto
                  </DividerWithText>

                  <table style={tableStyle}>
                    <thead style={theadStyle}>
                      <tr>
                        <th style={thStyle}>Área / Categoria</th>
                        <th style={thStyle}>Tecnologia / Ferramenta</th>
                        <th style={thStyle}>Propósito no Projeto</th>
                      </tr>
                    </thead>
                    <tbody style={tbodyStyle}>
                      <tr>
                        <td style={tdStyle} rowSpan="2">🖥️ Backend (Aplicação Principal)</td>
                        <td style={tdStyle}><code>Node.js</code></td>
                        <td style={tdStyle}>Ambiente de execução (runtime) JavaScript no servidor.</td>
                      </tr>
                      <tr>
                        <td style={tdStyle}><code>Express.js</code></td>
                        <td style={tdStyle}>Framework web para construir e gerenciar as rotas da API.</td>
                      </tr>
                      <tr>
                        <td style={tdStyle} rowSpan="2">🔀 Fila de Jobs e Proc. Assíncrono</td>
                        <td style={tdStyle}><code>BullMQ</code></td>
                        <td style={tdStyle}>Biblioteca para gerenciar a criação (Produtor) e processamento (Worker) dos jobs.</td>
                      </tr>
                      <tr>
                        <td style={tdStyle}><code>Redis</code></td>
                        <td style={tdStyle}>Banco de dados em memória que atua como o armazenamento para as filas do BullMQ.</td>
                      </tr>
                      <tr>
                        <td style={tdStyle}>☁️ Armazenamento e Dados</td>
                        <td style={tdStyle}><code>Cloudflare R2</code></td>
                        <td style={tdStyle}>Serviço de armazenamento de objetos para guardar os vídeos finais de forma escalável.</td>
                      </tr>
                      <tr>
                        <td style={tdStyle}>🛠️ Ferramentas Externas</td>
                        <td style={tdStyle}><code>yt-dlp</code></td>
                        <td style={tdStyle}>Utilitário invocado pelo Worker para executar a lógica de download do vídeo.</td>
                      </tr>
                      <tr>
                        <td style={tdStyle} rowSpan="2">🛡️ Segurança</td>
                        <td style={tdStyle}><code>express-rate-limit</code></td>
                        <td style={tdStyle}>Middleware para proteger a API contra abuso e ataques de negação de serviço (DoS).</td>
                      </tr>
                      <tr>
                        <td style={tdStyle}><code>AWS SDK v3</code></td>
                        <td style={tdStyle}>Utilizado para interagir com a API do R2 e gerar URLs de download seguras (pre-signed URLs).</td>
                      </tr>
                      <tr>
                        <td style={tdStyle} rowSpan="2">🚀 DevOps (Desenvolvimento e Deploy)</td>
                        <td style={tdStyle}><code>Docker</code></td>
                        <td style={tdStyle}>Usado para rodar o Redis localmente e criar a imagem da aplicação para deploy.</td>
                      </tr>
                      <tr>
                        <td style={tdStyle}><code>Railway.app</code></td>
                        <td style={tdStyle}>Plataforma de nuvem (PaaS) utilizada para hospedar os serviços da aplicação.</td>
                      </tr>
                      <tr>
                        <td style={tdStyle} rowSpan="2">🎨 Frontend (Visualização e Exemplo)</td>
                        <td style={tdStyle}><code>React</code></td>
                        <td style={tdStyle}>Biblioteca para construir a interface de usuário do portfólio.</td>
                      </tr>
                      <tr>
                        <td style={tdStyle}><code>styled-components</code></td>
                        <td style={tdStyle}>Ferramenta de CSS-in-JS para estilizar os componentes React.</td>
                      </tr>
                      <tr>
                        <td style={tdStyle} rowSpan="2">⚙️ Utilitários</td>
                        <td style={tdStyle}><code>uuid</code></td>
                        <td style={tdStyle}>Para gerar identificadores únicos para cada job.</td>
                      </tr>
                      <tr>
                        <td style={tdStyle}><code>dotenv</code></td>
                        <td style={tdStyle}>Para gerenciar variáveis de ambiente durante o desenvolvimento local.</td>
                      </tr>
                    </tbody>
                  </table>
                </Container>

                <Container>
                  <DividerWithText>
                    Diagrama da Arquitetura Final
                  </DividerWithText>
                  <Paragraph>
                    Este diagrama ilustra o fluxo de uma requisição através do sistema, desde o pedido inicial do usuário até o download seguro do arquivo final a partir do armazenamento em nuvem.
                  </Paragraph>

                </Container>

                <Container>
                  <Wrapper>
                    <Diagram>
                      {`
+---------------------+
|     Usuário         |
|    (Frontend)       |
+---------------------+
          |
   (1) POST /download
          |
+---------------------+               +-----------------------+
| API (Express.js)    |----(2)------->| Redis (BullMQ)        |
| (com Rate Limit)    |               |                       |
+---------------------+               +-----------------------+
          |                                   |
(3) Resposta 202 Accepted          (4) Worker Pega Job
          |                                   |
          |                           (5) Processa Job
          |                                   |
(8) GET /download/:key               +----------------------+
          |                          | Worker (BullMQ)      |
+----------------------+<--(10)-----| (concurrency: 6)      |
| Usuário (Frontend)   |            +----------------------+
+----------------------+                     |
          |                            (11) Faz Upload
   (9) Gera Link Assinado                    |
          |                                  V
          |                        +------------------------+
          +----------------------->| Cloudflare R2          |
                                   | (Armazenamento)        |
                                   +------------------------+
                                       (12) Download Direto
`}
                    </Diagram>
                  </Wrapper>
                </Container>

                <Container>
                  <Subtitle>Legenda do Fluxo</Subtitle>
                  <List as="ol">
                    <li>
                      <Paragraph>
                        <strong>Início do Processo:</strong> O usuário, através do frontend, envia uma requisição <code>POST /download</code> para a API. A requisição passa primeiro pelo <code>Rate Limiter</code>, que a bloqueia se o limite por IP for excedido.
                      </Paragraph>
                    </li>
                    <li>
                      <Paragraph>
                        <strong>Enfileiramento:</strong> A API valida a requisição, gera um <code>jobId</code> único e adiciona um novo job à fila (<code>downloadQueue</code>) no <code>Redis</code>.
                      </Paragraph>
                    </li>
                    <li>
                      <Paragraph>
                        <strong>Resposta Imediata:</strong> A API responde imediatamente ao frontend com o status <code>202 Accepted</code> e o <code>requestId</code>, confirmando que o pedido foi aceito. A conexão HTTP é encerrada.
                      </Paragraph>
                    </li>
                    <li>
                      <Paragraph>
                        <strong>Início do Trabalho:</strong> O <code>Worker</code>, rodando em um processo separado, pega o novo job para processar, respeitando o limite de <code>concurrency</code>.
                      </Paragraph>
                    </li>
                    <li>
                      <Paragraph>
                        <strong>Processamento:</strong> O <code>Worker</code> executa o <code>yt-dlp</code> com os cookies de autenticação para baixar o vídeo para uma pasta temporária dentro de seu contêiner.
                      </Paragraph>
                    </li>
                    <li>
                      <Paragraph>
                        <strong>Upload para a Nuvem:</strong> Após o download, o <code>Worker</code> faz o upload do arquivo de vídeo da sua pasta temporária para o bucket no <code>Cloudflare R2</code>.
                      </Paragraph>
                    </li>
                    <li>
                      <Paragraph>
                        <strong>Polling de Status:</strong> Enquanto isso (passos 5 e 6), o frontend inicia um "polling", enviando requisições <code>GET /status/:id</code> a cada poucos segundos para a API.
                      </Paragraph>
                    </li>
                    <li>
                      <Paragraph>
                        <strong>Verificação e Resposta de Status:</strong> A API consulta o estado do job no <code>Redis</code>. Quando o job é concluído com sucesso, a API responde ao frontend com <code>{`{ "status": "completed", "fileKey": "..." }`}</code>.
                      </Paragraph>
                    </li>
                    <li>
                      <Paragraph>
                        <strong>Pedido do Link Final:</strong> Ao receber o status "completed", o frontend usa a <code>fileKey</code> para fazer uma requisição final à rota <code>GET /download/:key</code>.
                      </Paragraph>
                    </li>
                    <li>
                      <Paragraph>
                        <strong>Geração do Link Seguro:</strong> A API recebe este pedido e se comunica com o <code>Cloudflare R2</code>, solicitando uma URL de download assinada (pre-signed URL), que é segura e expira em 5 minutos.
                      </Paragraph>
                    </li>
                    <li>
                      <Paragraph>
                        <strong>Redirecionamento:</strong> A API não envia o arquivo. Em vez disso, ela responde ao frontend com um redirecionamento HTTP (<code>302 Found</code>), apontando para a URL assinada do R2.
                      </Paragraph>
                    </li>
                    <li>
                      <Paragraph>
                        <strong>Download Direto:</strong> O navegador do usuário segue o redirecionamento e faz o download do arquivo de vídeo diretamente do <code>Cloudflare R2</code>, de forma segura e sem sobrecarregar a API.
                      </Paragraph>
                    </li>
                  </List>
                </Container>
                <Container>
                  <DividerWithText>
                    Próximas Fronteiras: Evoluindo a Aplicação para um Produto de Grande Escala
                  </DividerWithText>
                  <Paragraph>
                    Com a base da aplicação robusta, segura e implantada, as próximas etapas se concentram em elevar o projeto ao nível de um produto de produção completo, focando em qualidade, observabilidade, experiência do usuário e automação.
                  </Paragraph>

                  <List>
                    <li>
                      <strong>1. Fundamentos de Qualidade de Software: Testes Automatizados</strong>
                      <Paragraph>
                        <strong>O Problema:</strong> Atualmente, a única forma de garantir que novas alterações não quebrem o sistema é através de testes manuais, que são lentos e suscetíveis a erros.
                      </Paragraph>
                      <Paragraph>
                        <strong>A Implementação Essencial:</strong> Criar uma suíte de testes de integração para a API com <code>Jest</code> e <code>Supertest</code>, validando as rotas e respostas. O <code>BullMQ</code> pode ser "mockado" para que os testes não dependam de uma conexão real com o Redis. Testes automatizados são a rede de segurança de qualquer projeto profissional.
                      </Paragraph>
                    </li>

                    <li>
                      <strong>2. Operação e Observabilidade em Produção</strong>
                      <Paragraph>
                        <strong>O Problema:</strong> <code>console.log</code> é útil em desenvolvimento, mas em produção, torna quase impossível rastrear erros ou analisar o comportamento da aplicação em escala.
                      </Paragraph>
                      <Paragraph>
                        <strong>A Implementação Essencial:</strong> Substituir <code>console.log</code> por uma biblioteca de logging estruturado como o <code>Pino</code>, para formatar logs como JSON pesquisáveis. Além disso, integrar um painel de monitoramento da fila como o <code>bull-board</code> ou <code>arena</code> para visualizar em tempo real o status dos jobs.
                      </Paragraph>
                    </li>

                    <li>
                      <strong>3. Evolução da Experiência do Usuário: Notificações em Tempo Real</strong>
                      <Paragraph>
                        <strong>O Problema:</strong> O sistema de "polling" do frontend, embora funcional, gera múltiplas requisições e não é instantâneo.
                      </Paragraph>
                      <Paragraph>
                        <strong>A Implementação Essencial:</strong> Substituir o <code>setInterval</code> por uma conexão <code>WebSocket</code>. Quando um job termina, o worker notifica a API (via <code>Redis Pub/Sub</code>), que "empurra" uma mensagem para o cliente, proporcionando uma experiência em tempo real e mais eficiente.
                      </Paragraph>
                    </li>

                    <li>
                      <strong>4. Robustez Avançada: Graceful Shutdown (Desligamento Gracioso)</strong>
                      <Paragraph>
                        <strong>O Problema:</strong> Se o servidor for reiniciado durante um download (por um novo deploy), o trabalho é perdido.
                      </Paragraph>
                      <Paragraph>
                        <strong>A Implementação Essencial:</strong> Implementar um "graceful shutdown". Ao receber um sinal de desligamento (<code>SIGTERM</code>), a aplicação para de aceitar novos trabalhos, espera os jobs em andamento terminarem e fecha as conexões de forma limpa antes de encerrar. Isso demonstra um nível muito alto de maturidade em engenharia.
                      </Paragraph>
                    </li>

                    <li>
                      <strong>5. Funcionalidades de Produto: Autenticação de Usuários</strong>
                      <Paragraph>
                        <strong>O Problema:</strong> A API é atualmente anônima. Como criar um serviço com contas de usuário?
                      </Paragraph>
                      <Paragraph>
                        <strong>A Implementação Essencial:</strong> Implementar um sistema de login que gera um <code>JSON Web Token (JWT)</code>. Cada requisição para a API precisaria incluir este token para ser autenticada, permitindo associar cada job a um usuário específico. É o passo fundamental para transformar a ferramenta em um serviço SaaS.
                      </Paragraph>
                    </li>

                    <li>
                      <strong>6. DevOps e Experiência de Desenvolvimento</strong>
                      <Paragraph>
                        <strong>O Problema:</strong> O deploy e a configuração do ambiente local ainda são processos manuais.
                      </Paragraph>
                      <Paragraph>
                        <strong>A Implementação Essencial:</strong> Criar um pipeline de CI/CD com <code>GitHub Actions</code> que executa os testes e aciona o deploy automaticamente. Além disso, usar <code>Docker Compose</code> para criar um arquivo que define e inicia todos os serviços locais (API, Worker, Redis) com um único comando (<code>docker-compose up</code>).
                      </Paragraph>
                    </li>
                  </List>
                </Container>
              </CodeContainer>
            </MainContentLayout>
          </MainLayout>
        </>
      )
      }
    </>
  );
};

// Exporte com o novo nome
export default AndroidStudioSetup;