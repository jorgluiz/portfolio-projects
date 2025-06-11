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
  CodeContainer
} from "@/styles/globalStyles";

import { MainLayout } from "@/components/layout/mainLayout";
import SideBarLayout from "@/components/layout/sideBarLayout";
import HeaderLayout from "@/components/layout/headerLayout";
import MainContentLayout from "@/components/layout/contentLayout";
import Overlay from "@/components/overlay";

import hljs from 'highlight.js'; // Importando o highlight.js
import 'highlight.js/styles/atom-one-dark.css'; // Estilo para colorir a sintaxe

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
                  <SectionTitle>
                    Passo 1: A Decisão da Fundação: Escolha da Linguagem e do Framework
                  </SectionTitle>
                  <Paragraph>
                    O objetivo desta etapa inicial foi analisar as opções de tecnologia e selecionar a combinação mais adequada para uma API de download de alto volume, antes de qualquer implementação.
                  </Paragraph>

                  <Subtitle>1.1. O Panorama Inicial: Análise das Opções de Linguagem</Subtitle>
                  <Paragraph>
                    A análise começou considerando linguagens para sistemas de alta concorrência: Go, Node.js, Python e Java. A escolha foi rapidamente direcionada para o <strong>Node.js</strong>.
                  </Paragraph>
                  <Paragraph>
                    <strong>Justificativa e Aprendizado:</strong> A escolha foi estratégica por seu ecossistema maduro (NPM) e, principalmente, por seu modelo de <strong>I/O (Entrada/Saída) não-bloqueante</strong>, ideal para lidar com um grande número de requisições de rede simultâneas de forma eficiente.
                  </Paragraph>

                  <Subtitle>1.2. O Duelo de Frameworks: NestJS vs. Express.js</Subtitle>
                  <Paragraph>
                    <strong>Dúvida Crítica Resolvida:</strong> "Para uma API cujo requisito principal é performance bruta e baixa latência, qual a melhor escolha: o robusto <code>NestJS</code> ou o minimalista <code>Express.js</code>?"
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
                    <strong>A Decisão Final e o Aprendizado Chave:</strong> Foi decidido utilizar o <strong>Express.js</strong>. A conclusão foi a importância de adequar a ferramenta ao problema. Como a prioridade não era gerenciar regras de negócio complexas, mas sim processar uma tarefa específica da forma mais rápida possível, o ganho em organização do NestJS não justificava seu custo de performance para este caso.
                  </Paragraph>

                  <Subtitle>1.3. A "Stack" Arquitetural Inicial Definida</Subtitle>
                  <Paragraph>
                    Ao final desta fase de análise, a base do projeto estava definida:
                  </Paragraph>
                  <List>
                    <li><strong>Plataforma:</strong> Node.js</li>
                    <li><strong>Framework Web:</strong> Express.js</li>
                    <li><strong>Conceito Arquitetural Chave:</strong> Ficou claro que, mesmo com o Express, a tarefa de download não poderia ocorrer na requisição principal. A decisão foi, portanto, atrelada à estratégia de implementar um <strong>sistema de filas</strong> para processar os downloads em segundo plano.</li>
                  </List>

                </Container>

                <Container>
                  <SectionTitle>
                    Passo 2: Configuração do Ambiente e Implementação da Arquitetura Básica
                  </SectionTitle>
                  <Paragraph>
                    Com a estratégia definida, o objetivo foi tirar a arquitetura do papel e criar a primeira versão funcional do sistema, com a API recebendo a requisição e um Worker processando-a em segundo plano.
                  </Paragraph>

                  <Subtitle>2.1. Configuração do Ambiente de Desenvolvimento</Subtitle>
                  <Paragraph>
                    As dependências essenciais (<code>express</code>, <code>bullmq</code>, <code>ioredis</code>, <code>uuid</code>) foram instaladas e o servidor Redis foi iniciado via <code>Docker</code>.
                  </Paragraph>
                  <Paragraph>
                    <strong>Dúvida Crítica Resolvida:</strong> "Ao iniciar, recebi o erro <code>Error: connect ECONNREFUSED</code>."
                    <br />
                    <strong>Diagnóstico e Aprendizado:</strong> O diagnóstico revelou que a aplicação não conseguia se conectar ao Redis. O aprendizado foi que <strong>Redis é um servidor independente</strong> que precisa estar em execução para que a aplicação se conecte a ele, e o Docker foi a maneira mais limpa de provisionar esse serviço.
                    <br />
                    <Link href="https://www.youtube.com/watch?v=DLKzd3bvgt8" target='_black'>Install Redis On Windows 10</Link>
                  </Paragraph>

                  <Subtitle>2.2. Implementação do "Produtor": A API Express</Subtitle>
                  <Paragraph>
                    A rota <code>POST /download</code> foi criada. Sua única responsabilidade é gerar um ID único para a requisição, adicionar um job à fila do BullMQ com o comando <code>downloadQueue.add(...)</code> e responder imediatamente ao cliente com o status <code>202 Accepted</code> e o ID do job.
                  </Paragraph>
                  <Paragraph>
                    <strong>Aprendizado Chave:</strong> A aplicação prática do padrão Produtor/Consumidor, entendendo como a operação <code>await downloadQueue.add()</code> é extremamente rápida e não bloqueia o servidor.
                  </Paragraph>

                  <Subtitle>2.3. Implementação do "Consumidor": O Worker do BullMQ</Subtitle>
                  <Paragraph>
                    Um processo <strong>Worker</strong> foi criado para "escutar" a fila de downloads. A lógica inicial do worker foi extrair a URL do job e invocar a ferramenta <code>yt-dlp</code> através de um processo filho do Node.js (<code>child_process.exec</code>).
                  </Paragraph>
                  <Paragraph>
                    <strong>Aprendizado Chave:</strong> Compreensão de como o Worker opera de forma independente da API, pegando as tarefas da fila de forma autônoma e permitindo que a API se concentre apenas em receber novas requisições.
                  </Paragraph>

                  <Subtitle>2.4. O Elo de Ligação: A Rota de Status Inicial</Subtitle>
                  <Paragraph>
                    A rota <code>GET /status/:id</code> foi implementada. A lógica inicial, intencionalmente simples, apenas usava <code>fs.existsSync()</code> para verificar se o arquivo de vídeo correspondente já havia sido criado pelo Worker.
                  </Paragraph>
                  <Paragraph>
                    <strong>Aprendizado:</strong> Esta abordagem, embora "ingênua", foi crucial para <strong>validar que todo o fluxo assíncrono estava funcionando de ponta a ponta</strong>: API enfileira -> Worker processa -> Rota de status confirma o resultado.
                  </Paragraph>

                </Container>

                <Container>
                  <SectionTitle>
                    Passo 3: Construindo um Sistema Robusto - Os 4 Pilares da Estabilidade
                  </SectionTitle>
                  <Paragraph>
                    Com o esqueleto funcional pronto, o foco foi transformar o protótipo em um serviço confiável, capaz de lidar com o uso no mundo real, falhas inesperadas e picos de carga através de quatro melhorias essenciais.
                  </Paragraph>

                  <Subtitle>Pilar 1: Controle de Concorrência</Subtitle>
                  <Paragraph>
                    <strong>Problema:</strong> O que acontece se centenas de usuários solicitarem downloads ao mesmo tempo?
                    <br />
                    <strong>Diagnóstico:</strong> O servidor tentaria iniciar centenas de processos <code>yt-dlp</code>, esgotando a CPU e a memória.
                    <br />
                    <strong>Solução:</strong> Foi adicionada a opção <code>{`{ concurrency: 6 }`}</code> ao construtor do Worker do BullMQ.
                    <br />
                    <strong>Aprendizado:</strong> A importância do gerenciamento de recursos. O sistema foi protegido de sua própria carga, atuando como um "gatekeeper" que mantém a performance estável mesmo com uma fila grande.
                  </Paragraph>

                  <Subtitle>Pilar 2: Prevenção de Jobs Travados (Timeout)</Subtitle>
                  <Paragraph>
                    <strong>Problema:</strong> E se um download específico nunca terminar?
                    <br />
                    <strong>Diagnóstico:</strong> Um job "travado" poderia ocupar um slot de concorrência indefinidamente, paralisando a fila.
                    <br />
                    <strong>Solução:</strong> Foi adicionada a opção <code>{`{ timeout: 180000 }`}</code> (3 minutos) ao criar cada job.
                    <br />
                    <strong>Aprendizado:</strong> A necessidade de construir sistemas auto-regenerativos ("self-healing"), garantindo que nenhum job problemático comprometa a saúde do sistema a longo prazo.
                  </Paragraph>

                  <Subtitle>Pilar 3: Feedback de Erros Detalhado e Refatoração da API</Subtitle>
                  <Paragraph>
                    <strong>Problema:</strong> Como o usuário sabe por que seu download falhou?
                    <br />
                    <strong>Diagnóstico:</strong> A rota de status inicial era um "buraco negro" de informação.
                    <br />
                    <strong>Solução:</strong> O sistema foi refatorado em múltiplas frentes: o Worker passou a capturar a mensagem de erro real do <code>yt-dlp</code>; a rota <code>GET /status/:id</code> foi reescrita para consultar o estado do job diretamente no Redis; e uma nova rota <code>GET /download/:id</code> foi criada com a responsabilidade única de servir o arquivo.
                    <br />
                    <strong>Aprendizado:</strong> O valor de projetar APIs claras e previsíveis. O sistema passou de um serviço que apenas "funcionava" para um que "se comunicava" de forma eficaz.
                  </Paragraph>

                  <Subtitle>Pilar 4: Gerenciamento de Disco (Limpeza Automática)</Subtitle>
                  <Paragraph>
                    <strong>Problema:</strong> O disco do servidor não vai encher com todos os vídeos?
                    <br />
                    <strong>Diagnóstico:</strong> O sistema não era sustentável a longo prazo e falharia por esgotamento de disco.
                    <br />
                    <strong>Solução:</strong> Foi implementada uma estratégia de TTL (Tempo de Vida) para os arquivos. Uma segunda fila (`cleanupQueue`) foi criada com um worker agendado para rodar a cada hora, deletando arquivos com mais de 60 minutos.
                    <br />
                    <strong>Aprendizado:</strong> A importância de construir sistemas autogerenciáveis. A aplicação passou a realizar sua própria "manutenção", garantindo sua estabilidade operacional sem intervenção manual.
                  </Paragraph>
                </Container>

                <Container>
                  <SectionTitle>
                    Passo 4: A Camada de Segurança - Proteção Contra Abusos
                  </SectionTitle>
                  <Paragraph>
                    Com a aplicação robusta internamente, o objetivo desta etapa foi proteger a "porta de entrada" da API contra um volume excessivo de requisições.
                  </Paragraph>

                  <Subtitle>4.1. A Dúvida Crítica de Segurança</Subtitle>
                  <Paragraph>
                    <strong>Problema:</strong> "Com o sistema robusto, estou protegido se alguém malicioso tentar fazer várias requisições simultaneamente?"
                  </Paragraph>
                  <Paragraph>
                    <strong>Diagnóstico:</strong> A análise revelou uma vulnerabilidade crucial. O Controle de Concorrência protegia a execução dos downloads, mas não impedia que um atacante inundasse a fila do Redis com milhões de solicitações, consumindo toda a memória e causando uma negação de serviço (DoS).
                  </Paragraph>

                  <Subtitle>4.2. A Estratégia de Defesa: Rate Limiting</Subtitle>
                  <Paragraph>
                    <strong>Ação e Solução:</strong> A solução padrão da indústria foi implementada: Limitação de Taxa (Rate Limiting), utilizando a biblioteca <code>express-rate-limit</code>.
                  </Paragraph>
                  <Paragraph>
                    <strong>Implementação:</strong> Um middleware foi aplicado globalmente, estabelecendo uma regra de no máximo <strong>100 requisições a cada 15 minutos por endereço de IP</strong>. Se o limite for ultrapassado, a requisição é imediatamente bloqueada com um erro <code>429 Too Many Requests</code>, sem nunca chegar à lógica da rota ou criar um job na fila.
                  </Paragraph>

                  <Subtitle>4.3. O Aprendizado Final de Backend</Subtitle>
                  <Paragraph>
                    O aprendizado fundamental foi a distinção vital entre Robustez e Segurança:
                  </Paragraph>
                  <List>
                    <li>
                      <strong>Robustez:</strong> É a capacidade do sistema de lidar com uma <strong>alta carga de trabalho legítima</strong> sem quebrar (garantida pelas filas, concorrência e timeouts).
                    </li>
                    <li>
                      <strong>Segurança:</strong> É a capacidade do sistema de identificar e bloquear ativamente um <strong>tráfego ilegítimo ou abusivo</strong> em sua fronteira (garantida pelo Rate Limiter).
                    </li>
                  </List>
                  <Paragraph>
                    Ao implementar esta camada, a aplicação passou de "robusta" para "blindada". Com isso, o desenvolvimento do backend foi considerado completo e pronto para produção.
                  </Paragraph>

                </Container>

                <Container>
                  <SectionTitle>
                    Passo 5: A Orquestração do Frontend - Unindo Tudo em uma Experiência Única
                  </SectionTitle>
                  <Paragraph>
                    Com o backend completo, esta etapa conceitual documenta a lógica que o cliente precisa implementar para interagir com a API, transformando múltiplas chamadas técnicas em uma experiência de usuário fluida.
                  </Paragraph>

                  <Subtitle>5.1. A Dúvida Crítica de Experiência do Usuário (UX)</Subtitle>
                  <Paragraph>
                    <strong>Problema:</strong> "Como o usuário pode ter uma experiência de 'clicar e baixar' se o backend exige, no mínimo, três interações diferentes (<code>POST /download</code>, <code>GET /status/:id</code>, <code>GET /download/:id</code>)?"
                    <br />
                    <strong>Diagnóstico:</strong> A complexidade não deve ser exposta ao usuário. A responsabilidade de gerenciar o fluxo de chamadas e o estado deve ser inteiramente do código do frontend.
                  </Paragraph>

                  <Subtitle>5.2. A Estratégia: O Frontend como "Maestro"</Subtitle>
                  <Paragraph>
                    <strong>Estratégia Adotada:</strong> O frontend atuará como um "orquestrador". O backend oferece os "instrumentos" (as rotas da API), e o frontend é responsável por "regê-los" na sequência correta.
                    <br />
                    <strong>Aprendizado Chave:</strong> A importância da separação de responsabilidades. O backend é responsável pela lógica de negócio (stateless), enquanto o frontend gerencia o estado da interação com o usuário (stateful).
                  </Paragraph>

                  <Subtitle>5.3. O Fluxo de Execução no Código do Cliente</Subtitle>
                  <Paragraph>
                    A partir de um único clique do usuário, o código executa a seguinte sequência de forma autônoma:
                  </Paragraph>
                  <List>
                    <li>
                      <strong>1. Requisição Inicial e Feedback Imediato:</strong> Envia um <code>POST</code> para <code>/download</code>. Imediatamente, a UI é atualizada para um estado de carregamento (ex: spinner e mensagem "Preparando..."). A API responde em milissegundos com um <code>requestId</code>.
                    </li>
                    <li>
                      <strong>2. Início do "Polling" Automático:</strong> Com o <code>requestId</code>, o frontend inicia um <code>setInterval</code> que, a cada 3 segundos, faz uma requisição <code>GET</code> para <code>/status/:requestId</code>.
                    </li>
                    <li>
                      <strong>3. O Loop de Verificação:</strong> A cada resposta do status, o código decide: se <code>'processing'</code>, aguarda; se <code>'failed'</code>, interrompe o polling (<code>clearInterval</code>) e exibe uma mensagem de erro; se <code>'completed'</code>, interrompe o polling e avança para o próximo passo.
                    </li>
                    <li>
                      <strong>4. O Gatilho do Download Final:</strong> Ao receber o status <code>'completed'</code>, o frontend faz o navegador acessar a rota final <code>GET /download/:requestId</code>, o que aciona a janela de "Salvar Como..." e finaliza o processo.
                    </li>
                  </List>

                  <Subtitle>5.4. Aprendizado Final da Arquitetura Full-Stack</Subtitle>
                  <Paragraph>
                    O aprendizado final foi como uma arquitetura de backend assíncrona e desacoplada, embora mais complexa internamente, permite a criação de uma experiência de usuário muito superior. Ela possibilita que o frontend forneça feedback rico e em tempo real, sem nunca travar a interface, resultando em uma aplicação que é, ao mesmo tempo, performática para a infraestrutura e amigável para o usuário final.
                  </Paragraph>

                </Container>

                <Container>
                  <SectionTitle>
                    # O Que Viria Depois? (Melhorias Futuras)
                  </SectionTitle>
                  <Paragraph>
                    A partir daqui, qualquer outra etapa entraria na categoria de "Funcionalidades Adicionais" para uma "Versão 2.0", evoluindo o protótipo funcional para um produto mais completo.
                  </Paragraph>

                  <List>
                    <li>
                      <strong>Painel de Monitoramento:</strong> Integrar uma interface gráfica como o <code>bull-board</code> ou <code>arena</code> para visualizar o status das filas e os jobs em tempo real.
                    </li>
                    <li>
                      <strong>Armazenamento em Nuvem:</strong> Modificar o worker para fazer o upload do vídeo para um serviço como <code>Amazon S3</code> ou <code>Google Cloud Storage</code> e retornar um link de download temporário e seguro.
                    </li>
                    <li>
                      <strong>Notificações com WebSockets:</strong> Substituir o sistema de "polling" do frontend por uma conexão <code>WebSocket</code>, onde o servidor avisa ativamente o cliente quando o download está pronto.
                    </li>
                    <li>
                      <strong>Autenticação de Usuários:</strong> Implementar um sistema de login (com <code>JWT</code>, por exemplo) para associar os downloads a usuários específicos, caso o serviço evoluísse para um modelo de contas.
                    </li>
                    <li>
                      <strong>Containerização Completa:</strong> Usar <code>Docker Compose</code> para definir e iniciar todos os serviços da aplicação (a API Node.js e o Redis) com um único comando (<code>docker-compose up</code>).
                    </li>
                  </List>

                  <Paragraph>
                    Para o escopo que definimos, os passos anteriores cobrem perfeitamente a jornada de construção da base do projeto, do início ao fim.
                  </Paragraph>
                </Container>
              </CodeContainer>
            </MainContentLayout>
          </MainLayout>
        </>
      )}
    </>
  );
};

// Exporte com o novo nome
export default AndroidStudioSetup;