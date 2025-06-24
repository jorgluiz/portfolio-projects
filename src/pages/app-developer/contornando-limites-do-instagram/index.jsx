import Head from "next/head";
import { useGlobalState } from "../../../context/GlobalStateContext";
import {
  Container,
  CodeContainer,
  DividerWithText,
  Paragraph,
  Subtitle,
  List,
  Underline
} from "@/styles/globalStyles";

import { MainLayout } from "@/components/layout/mainLayout";
import SideBarLayout from "@/components/layout/sideBarLayout";
import HeaderLayout from "@/components/layout/headerLayout";
import MainContentLayout from "@/components/layout/contentLayout";
import Overlay from "@/components/overlay";
import VoltarParaTopo from "@/components/backToTop";

import CodeBlock from "@/components/codeBlock";

// Renomeando o componente para refletir o novo conteúdo
const AndroidStudioSetup = () => {
  const { isLoaded, isHamburguerOpen, setIsHamburguerOpen } = useGlobalState();

  const handleOverlayClick = () => setIsHamburguerOpen(false);

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
                    Estratégias para Contornar Bloqueios de Automação no Instagram
                  </DividerWithText>

                  <Paragraph>
                    É importante entender que a automação no Instagram é um "jogo de gato e rato". A plataforma ativamente tenta bloquear essas práticas, enquanto desenvolvedores criam novas formas de contornar as restrições. Não existe uma solução "mágica" e definitiva que funcionará para sempre, mas sim um conjunto de estratégias, das mais simples às mais complexas. Aqui estão as principais alternativas, em ordem de complexidade.
                  </Paragraph>

                  <Subtitle>Estratégia 1: Rotação de Proxies (O Mais Comum e Eficaz)</Subtitle>
                  <Paragraph>
                    <strong>O Problema:</strong> O Instagram identifica um grande volume de requisições vindas do mesmo endereço de IP (como o do seu servidor na Railway) e o bloqueia por suspeita de automação.
                  </Paragraph>
                  <Paragraph>
                    <strong>A Solução:</strong> Fazer com que cada requisição (ou cada pequeno grupo de requisições) seja originada de um endereço de IP diferente.
                  </Paragraph>
                  <Paragraph>
                    <strong>Como Implementar:</strong>
                    <List>
                      <li>Contrate um serviço de proxy rotativo. Empresas como <strong>Bright Data</strong>, <strong>Oxylabs</strong> ou <strong>Smartproxy</strong> oferecem acesso a milhões de IPs residenciais ou de data centers.</li>
                      <li>Você receberá um endereço de acesso ao serviço de proxy (ex: http://usuario:senha@proxy.servico.com:12345).</li>
                      <li>No seu script (ex: <code>downloadWorker.js</code>), modifique o comando que faz a requisição (como o <code>yt-dlp</code>) para usar a flag de proxy.</li>
                    </List>
                  </Paragraph>
                  <CodeBlock language="javascript">
                    {`// Dentro do seu worker
const proxyUrl = process.env.PROXY_URL; // Você colocaria a URL do proxy nas variáveis de ambiente

const args = [
  '--proxy', proxyUrl,
  '--cookies', cookiesPath,
  // ... outros argumentos
];`}
                  </CodeBlock>
                  <Paragraph>
                    A cada chamada, o serviço de proxy rotacionará o IP de saída, fazendo parecer que cada download vem de um usuário diferente, em um local diferente.
                  </Paragraph>
                  <Paragraph>
                    <strong>Vantagens:</strong> Altamente eficaz para evitar bloqueios baseados em IP.
                  </Paragraph>
                  <Paragraph>
                    <strong>Desvantagens:</strong> Custo mensal associado ao serviço de proxy.
                  </Paragraph>

                  <Subtitle>Estratégia 2: "Pool" de Contas e Cookies</Subtitle>
                  <Paragraph>
                    <strong>O Problema:</strong> Usar uma única conta e seus cookies associados leva à rápida identificação e limitação (rate limiting) por parte do Instagram.
                  </Paragraph>
                  <Paragraph>
                    <strong>A Solução:</strong> <Underline>Ter múltiplas contas do Instagram e alternar entre elas a cada requisição ou a cada certo número de requisições.</Underline>
                  </Paragraph>
                  <Paragraph>
                    <strong>Como Implementar:</strong>
                    <List>
                      <li>Crie (ou adquira) várias contas no Instagram.</li>
                      <li>Extraia o arquivo de cookies de cada uma delas.</li>
                      <li>Em vez de ter uma única variável de ambiente para os cookies (<code>INSTAGRAM_COOKIES</code>), armazene todos eles, seja em múltiplas variáveis (<code>INSTAGRAM_COOKIES_1</code>, <code>INSTAGRAM_COOKIES_2</code>) ou, de forma mais organizada, em um banco de dados ou um único arquivo/variável com um separador.</li>
                      <li>No seu worker, antes de iniciar um job, seu código deve escolher aleatoriamente um dos cookies do "pool" para usar naquela requisição específica.</li>
                    </List>
                  </Paragraph>
                  <Paragraph>
                    <strong>Vantagens:</strong> Distribui a carga entre várias contas, diminuindo drasticamente a chance de qualquer uma delas ser bloqueada. Pode ser combinado com a rotação de proxies para máxima eficácia.
                  </Paragraph>
                  <Paragraph>
                    <strong>Desvantagens:</strong> Exige o trabalho de criar e manter múltiplas contas ativas.
                  </Paragraph>

                  <Subtitle>Estratégia 3: Automação com Navegadores "Headless" (Avançado)</Subtitle>
                  <Paragraph>
                    <strong>O Problema:</strong> Os cookies de sessão expiram com o tempo, e o processo de obtê-los manualmente é trabalhoso e repetitivo.
                  </Paragraph>
                  <Paragraph>
                    <strong>A Solução:</strong> Criar um robô (bot) que simula a navegação humana para gerar e renovar cookies automaticamente.
                  </Paragraph>
                  <Paragraph>
                    <strong>Como Implementar:</strong>
                    <List>
                      <li>Utilize uma biblioteca de automação de navegadores como <strong>Puppeteer</strong> ou <strong>Playwright</strong>.</li>
                      <li>Desenvolva um script separado que automatiza um navegador "invisível" (headless).</li>
                      <li>Este script deve ser capaz de:
                        <List>
                          <li>Acessar a página de login do Instagram.</li>
                          <li>Digitar o usuário e a senha de uma conta do seu pool.</li>
                          <li>Resolver desafios como CAPTCHAs (esta é a parte mais difícil e frágil do processo).</li>
                          <li>Após o login bem-sucedido, extrair os cookies da sessão.</li>
                          <li>Salvar esses cookies atualizados em um local acessível pelo seu worker (ex: atualizar a variável de ambiente via API da Railway, ou salvar em um banco de dados).</li>
                        </List>
                      </li>
                      <li>Você pode configurar este script para rodar periodicamente (ex: uma vez por dia) e manter seus cookies sempre "frescos".</li>
                    </List>
                  </Paragraph>
                  <Paragraph>
                    <strong>Vantagens:</strong> Automação completa do ciclo de vida dos cookies, eliminando a necessidade de intervenção manual.
                  </Paragraph>
                  <Paragraph>
                    <strong>Desvantagens:</strong> Extremamente complexo e frágil. Qualquer pequena mudança na interface de login ou nos mecanismos de segurança do Instagram pode quebrar seu bot, exigindo manutenção constante.
                  </Paragraph>

                  <Subtitle>Qual Caminho Seguir? (Recomendação)</Subtitle>
                  <Paragraph>
                    <strong>Para um projeto pessoal ou de pequeno porte:</strong> A rotação manual de cookies que você já está fazendo é, muitas vezes, suficiente. Quando um cookie para de funcionar, você gera outro manualmente e atualiza a variável de ambiente. É o método com o melhor custo-benefício para começar.
                  </Paragraph>
                  <Paragraph>
                    <strong>Para um serviço mais sério e com mais usuários:</strong> A combinação da <strong>Estratégia 1 (Rotação de Proxies)</strong> com um pequeno <strong>Pool de Cookies (Estratégia 2)</strong> é o padrão da indústria. Essa abordagem oferece uma solução robusta, resiliente e que você mesmo pode construir e controlar.
                  </Paragraph>
                </Container>

                <Container>
                  <DividerWithText>
                    Estratégia 1: Rotação de Proxies e Contas do Instagram (via Cookies)
                  </DividerWithText>

                  <Paragraph>
                    Mudar apenas o IP (com proxies) enquanto usa sempre a mesma <strong>conta do Instagram</strong> (ou seja, o mesmo cookie de sessão) cria um padrão de comportamento anormal que a plataforma pode detectar. Isso pode levar ao bloqueio da conta utilizada, mesmo que os IPs sejam diferentes. A estratégia mais robusta é combinar a rotação de proxies com a rotação de <strong>contas do Instagram</strong> e seus respectivos cookies.
                  </Paragraph>

                  <Subtitle>De Quantas Contas Você Precisa?</Subtitle>
                  <Paragraph>
                    Uma vez que o objetivo é distribuir a carga entre múltiplas <strong>identidades do Instagram</strong>, a pergunta natural é: quantas? Não existe um número mágico; é um balanço entre o seu volume de downloads e o risco que você quer correr. A regra é simples: mais contas no seu "pool" significa menor carga de requisições por identidade, e consequentemente, um risco muito menor de bloqueio.
                  </Paragraph>

                  <Paragraph>
                    <strong>Para um Volume Baixo a Médio (ex: até algumas centenas de downloads por dia):</strong>
                    Começar com um "pool" de 3 a 5 contas distintas já é uma melhoria gigantesca. Isso distribui a carga o suficiente para que nenhuma delas pareça estar fazendo uma atividade excessiva.
                  </Paragraph>

                  <Paragraph>
                    <strong>Para um Volume Alto (milhares de downloads por dia):</strong>
                    Nesse cenário, você poderia precisar de 10, 20 ou mais contas para garantir que a taxa de requisição por cada uma permaneça baixa e se assemelhe a um uso humano normal.
                  </Paragraph>

                  <Subtitle>Dica de Profissional: "Aqueça" as Contas (Warm-up)</Subtitle>
                  <Paragraph>
                    É crucial "aquecer" (warm up) cada nova <strong>conta do Instagram</strong> antes de integrá-la ao sistema. Use-as manualmente no navegador para atividades básicas, como curtir fotos e seguir perfis populares. Contas recém-criadas que, do nada, começam a fazer um volume alto de requisições são um alvo fácil para os sistemas anti-bot.
                  </Paragraph>

                  <Subtitle>Como Implementar o "Pool" de Cookies</Subtitle>
                  <Paragraph>
                    A implementação no código é uma evolução do que já fizemos. A ideia é ter várias variáveis de ambiente, cada uma guardando o cookie de uma conta diferente, e escolher uma delas aleatoriamente para cada job de download.
                  </Paragraph>

                  <Paragraph>
                    <strong>Passo 1: Configure as Variáveis de Ambiente na Railway</strong>
                  </Paragraph>
                  <Paragraph>
                    Em vez de uma única variável, você criará várias no seu serviço, onde cada uma representa uma identidade:
                  </Paragraph>
                  <CodeBlock language="text">
                    {`# Cada variável armazena o cookie de uma conta do Instagram
INSTAGRAM_COOKIES_0 = "conteúdo do cookies.txt da conta 1..."
INSTAGRAM_COOKIES_1 = "conteúdo do cookies.txt da conta 2..."
INSTAGRAM_COOKIES_2 = "conteúdo do cookies.txt da conta 3..."
# ... e assim por diante.`}
                  </CodeBlock>

                  <Paragraph>
                    <strong>Passo 2: Modifique o downloadWorker.js para Usar o Pool de Cookies</strong>
                  </Paragraph>
                  <Paragraph>
                    Vamos alterar a lógica do seu worker para que ele monte um "pool" de cookies e escolha uma identidade aleatória para usar. Substitua o conteúdo do seu <code>src/workers/downloadWorker.js</code> por esta versão:
                  </Paragraph>

                  <CodeBlock language="javascript">
                    {`// ... O código JavaScript permanece o mesmo, pois sua lógica já é correta ...`}
                  </CodeBlock>

                  <Paragraph>
                    Com a rotação de proxies (para mudar o IP) somada à rotação de cookies (para mudar a <strong>conta do Instagram</strong> utilizada em cada requisição), sua operação se torna muito mais difícil de ser rastreada e bloqueada, alcançando um nível de robustez profissional.
                  </Paragraph>
                </Container>

                <Container>
                  <DividerWithText>
                    Análise de Serviços: Bright Data (Proxy vs. API de Raspagem)
                  </DividerWithText>

                  <Paragraph>
                    Empresas como a Bright Data oferecem, essencialmente, duas formas de "viajar" pela web para coletar dados. A escolha depende do quanto você quer "dirigir" e do quanto prefere que te levem.
                  </Paragraph>

                  <Subtitle>1. Serviço de Proxies Rotativos (IPs Residenciais) - A Analogia do Carro Alugado</Subtitle>
                  <Paragraph>
                    Este é o primeiro tipo de serviço. Eles te fornecem a ferramenta para a viagem: um "carro" (o acesso a milhões de <strong>IPs residenciais</strong>) com um "GPS mágico" que troca de rota para evitar bloqueios (a funcionalidade <code>--proxy</code>). No entanto, <strong>VOCÊ ainda é o motorista</strong>. Você precisa ter sua "habilitação" (saber usar o <code>yt-dlp</code>), cuidar do seu "passaporte" (gerenciar os <code>cookies.txt</code>) e pilotar o veículo. Neste cenário, o <code>yt-dlp</code> é essencial; ele é o seu motor, e o serviço de proxy é o veículo que ele usa para chegar ao destino sem ser parado.
                  </Paragraph>

                  <Subtitle>2. Serviço de Raspagem de Dados (Web Scraper API) - A Analogia da Passagem Aérea</Subtitle>
                  <Paragraph>
                    Este é o segundo tipo de serviço, muito mais completo. Aqui, você não precisa de carro nem de habilitação. Você simplesmente vai ao "balcão da companhia aérea" (a <strong>API de raspagem de dados</strong>), informa o seu destino (a URL do Instagram) e paga a passagem. A "companhia" (a Bright Data) cuida de TUDO: o avião, o piloto, a rota, o combustível e toda a burocracia de bastidores para evitar bloqueios. No final, eles simplesmente te entregam no seu destino, retornando os dados que você pediu (como a URL direta do vídeo) em um formato estruturado (JSON). Neste cenário, <strong>você NÃO precisa do <code>yt-dlp</code></strong>. Ele é totalmente substituído pelo serviço deles.
                  </Paragraph>

                  <Subtitle>Respondendo Suas Perguntas Diretamente</Subtitle>
                  <Paragraph>
                    <strong>"quer dizer que posso usar brightdata para obter um video do instagram ?"</strong>
                    <br />
                    Sim. Usando o <strong>Serviço 2 (a API de Raspagem de Dados)</strong>, você pode.
                  </Paragraph>
                  <Paragraph>
                    <strong>"E no caso não precisaria do yt-dlp para baixar videos ? É isso mesmo?"</strong>
                    <br />
                    Isso mesmo! Se você usar o <strong>serviço de raspagem de dados</strong>, a lógica do seu <code>downloadWorker.js</code> mudaria completamente. Ele não chamaria mais o <code>yt-dlp</code>. A lógica seria:
                    <List>
                      <li>Pegar o job da fila com a URL do Instagram.</li>
                      <li>Fazer uma chamada de API para o serviço da Bright Data, enviando essa URL.</li>
                      <li>Receber a resposta da API, que conteria o link direto para o arquivo de vídeo .mp4.</li>
                      <li>Fazer o upload desse vídeo (a partir do link recebido) para o seu Cloudflare R2.</li>
                    </List>
                  </Paragraph>
                  <Paragraph>
                    <strong>"ou é só Proxies Residenciais"</strong>
                    <br />
                    Eles vendem os dois! O <strong>serviço de Proxies Residenciais</strong> é a Opção 1 (o "carro alugado"). A <strong>API de Raspagem de Dados</strong> é a Opção 2, muito mais completa (a "passagem de avião").
                  </Paragraph>

                  <Subtitle>Tabela Comparativa</Subtitle>
                  <Paragraph>
                    <strong>Característica:</strong> Sua Responsabilidade<br />
                    <strong>Serviço 1 (Proxies):</strong> TUDO: Lógica de download (<code>yt-dlp</code>), gerenciamento de cookies, etc.<br />
                    <strong>Serviço 2 (API de Raspagem):</strong> Apenas fazer uma chamada de API para eles.
                  </Paragraph>
                  <Paragraph>
                    <strong>Característica:</strong> Ferramenta Principal<br />
                    <strong>Serviço 1 (Proxies):</strong> Seu script com <code>yt-dlp</code><br />
                    <strong>Serviço 2 (API de Raspagem):</strong> A API deles
                  </Paragraph>
                  <Paragraph>
                    <strong>Característica:</strong> Você precisa do <code>yt-dlp</code>?<br />
                    <strong>Serviço 1 (Proxies):</strong> Sim, é essencial.<br />
                    <strong>Serviço 2 (API de Raspagem):</strong> Não, ele é totalmente substituído.
                  </Paragraph>
                  <Paragraph>
                    <strong>Característica:</strong> Complexidade<br />
                    <strong>Serviço 1 (Proxies):</strong> Alta. Você gerencia toda a lógica e manutenção.<br />
                    <strong>Serviço 2 (API de Raspagem):</strong> Baixíssima. Eles gerenciam tudo para você.
                  </Paragraph>
                  <Paragraph>
                    <strong>Característica:</strong> Custo<br />
                    <strong>Serviço 1 (Proxies):</strong> Custo dos proxies (geralmente por GB de tráfego).<br />
                    <strong>Serviço 2 (API de Raspagem):</strong> Custo por requisição bem-sucedida (geralmente mais caro, mas sem custo de manutenção e desenvolvimento).
                  </Paragraph>
                  <Paragraph>
                    <strong>Característica:</strong> Manutenção<br />
                    <strong>Serviço 1 (Proxies):</strong> Alta. Se o Instagram muda, você tem que ajustar sua lógica.<br />
                    <strong>Serviço 2 (API de Raspagem):</strong> Nenhuma. A equipe da Bright Data se preocupa em manter o raspador funcionando.
                  </Paragraph>

                  <Subtitle>Qual Abordagem Escolher?</Subtitle>
                  <Paragraph>
                    <strong>Use o Serviço 1 (Proxies Residenciais) se:</strong> Você quer ter mais controle, um custo potencialmente menor em altíssimo volume, e não se importa com a complexidade e a manutenção. É a melhor rota para aprender os detalhes técnicos.
                  </Paragraph>
                  <Paragraph>
                    <strong>Use o Serviço 2 (API de Raspagem de Dados) se:</strong> Você quer a máxima confiabilidade, velocidade de desenvolvimento e zero dor de cabeça. Se o seu objetivo é apenas obter o vídeo final e não se preocupar com bloqueios, proxies, cookies ou CAPTCHAs, esta é a melhor opção.
                  </Paragraph>
                </Container>
                <VoltarParaTopo></VoltarParaTopo>
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