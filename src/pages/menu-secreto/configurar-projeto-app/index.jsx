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
import styled from 'styled-components';
import { MainLayout } from "@/components/layout/mainLayout";
import SideBarLayout from "@/components/layout/sideBarLayout";
import HeaderLayout from "@/components/layout/headerLayout";
import MainContentLayout from "@/components/layout/contentLayout";
import Overlay from "@/components/overlay";

import hljs from 'highlight.js'; // Importando o highlight.js
import 'highlight.js/styles/atom-one-dark.css'; // Estilo para colorir a sintaxe

/* Responsividade da tabela */
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  overflow-x: auto;
  display: block;
  white-space: nowrap;
  margin-left: auto;
  margin-right: auto;
`;

const Th = styled.th`
  padding: 10px;
  text-align: center;
  border: 1px solid #ddd;
`;

const Td = styled.td`
  padding: 10px;
  text-align: center;
  border: 1px solid #ddd;
`;

const THead = styled.thead`
  background-color: #f4f4f4;
`;

const TBody = styled.tbody`
  background-color: #fff;
`;

// Renomeando o componente para refletir o novo conteúdo
const AndroidStudioSetup = () => {
  const { isLoaded, isHamburguerOpen, setIsHamburguerOpen } = useGlobalState();

  const handleOverlayClick = () => setIsHamburguerOpen(false);

  useEffect(() => {
    // Só executa a estilização se o conteúdo estiver carregado e visível
    if (isLoaded) {
      hljs.highlightAll();
    }
  }, [isLoaded]); // Adicione 'isLoaded' como dependência!

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
                    Passo a Passo Detalhado: A Configuração do Ambiente Android Studio
                  </SectionTitle>

                  <Paragraph>
                    O objetivo desta etapa foi preparar o computador para ser capaz de compilar, instalar e testar um aplicativo React Native na plataforma Android.
                  </Paragraph>

                  <Subtitle>1. Instalação e Propósito da Ferramenta</Subtitle>
                  <Paragraph>
                    <strong>Ferramenta Principal:</strong> Android Studio
                    <br />
                    <strong>Ação Realizada:</strong> Foi feita a instalação do Android Studio.
                    <br />
                    <strong>Aprendizado e Estratégia:</strong> O entendimento chave foi que o Android Studio não seria usado para escrever o código do dia a dia do aplicativo (que é feito em TypeScript no VS Code), mas sim como um "pacote de ferramentas" essencial que fornece todo o ecossistema necessário para o desenvolvimento Android.
                  </Paragraph>

                  <Subtitle>2. Ferramentas Essenciais Utilizadas (Dentro do Android Studio)</Subtitle>
                  <Paragraph>
                    Uma vez instalado, duas áreas internas do Android Studio foram cruciais:
                  </Paragraph>
                  <List>
                    <li>
                      <strong>A) Android SDK Manager (O "Gerenciador de Peças" do Android)</strong>
                      <br />
                      <strong>Ação:</strong> Navegou-se até o SDK Manager para instalar as plataformas e ferramentas de build necessárias.
                      <br />
                      <strong>Dúvida e Aprendizado:</strong> A dúvida inicial foi: "Qual versão do Android SDK devo usar?". A solução foi instalar a Plataforma SDK para a API 35, garantindo que o app seja compilado e otimizado para as versões mais recentes do Android.
                    </li>
                    <li>
                      <strong>B) AVD (Android Virtual Device) Manager (A "Fábrica de Emuladores")</strong>
                      <br />
                      <strong>Ação:</strong> Foi criado um dispositivo virtual (Pixel_3a_API_35_extension_level_13_x86_64) para os testes.
                      <br />
                      <strong>Aprendizado:</strong> Aprendeu-se a criar, configurar e iniciar um emulador, o que eliminou a necessidade de um dispositivo físico para a maioria dos testes de desenvolvimento.
                    </li>
                  </List>

                  <Subtitle>3. Configuração do Sistema Operacional (Fora do Android Studio)</Subtitle>
                  <Paragraph>
                    Para que a linha de comando e o React Native pudessem "encontrar" as ferramentas, foi necessário configurar o sistema.
                    <br />
                    <strong>Ação:</strong> Edição das Variáveis de Ambiente do Windows.
                    <br />
                    <strong>Dúvida Principal Resolvida:</strong> "Eu segui um tutorial, mas não consigo achar a pasta ...\Sdk\tools."
                    <br />
                    <strong>Solução e Aprendizado:</strong> O aprendizado crucial foi diagnosticar que a pasta `tools` foi descontinuada. A solução foi identificar e adicionar os caminhos corretos e modernos (`.../Sdk/platform-tools` e `.../Sdk/cmdline-tools/latest/bin`) à variável `PATH`, além de criar a variável `ANDROID_HOME`.
                  </Paragraph>

                  <Subtitle>4. Arquivos de Configuração de Build (Gradle)</Subtitle>
                  <Paragraph>
                    Foi entendido que o React Native usa o Gradle para construir o aplicativo Android.
                    <br />
                    <strong>Ação:</strong> Edição manual do arquivo `android/build.gradle`.
                    <br />
                    <strong>Aprendizado:</strong> Aprendeu-se que é neste arquivo que se definem as versões globais do SDK. A propriedade `minSdkVersion` foi alterada para 24 para garantir compatibilidade com Android 7.0+.
                  </Paragraph>

                  <Subtitle>5. Comandos de Verificação e Execução (Linha de Comando)</Subtitle>
                  <Paragraph>
                    Finalmente, foram utilizados comandos no terminal para validar toda a configuração.
                  </Paragraph>

                  <Paragraph><strong>Comando de Verificação:</strong></Paragraph>
                  <pre>
                    <code className="language-bash">
                      adb devices
                    </code>
                  </pre>
                  <Paragraph>
                    <strong>Finalidade e Aprendizado:</strong> Usado para confirmar que o computador conseguia detectar e se comunicar com o emulador em execução.
                  </Paragraph>

                  <Paragraph><strong>Comando de Limpeza e Manutenção (Crucial):</strong></Paragraph>
                  <pre>
                    <code className="language-bash">
                      cd android && ./gradlew clean && cd ..
                    </code>
                  </pre>
                  <Paragraph>
                    <strong>Finalidade e Aprendizado:</strong> Foi um comando chave para resolver "crashes" do aplicativo. Aprendeu-se que ele limpa builds antigos e força o Gradle a reconstruir o projeto do zero, resolvendo muitos erros "inexplicáveis".
                  </Paragraph>

                  <Paragraph><strong>Comando Final de Execução:</strong></Paragraph>
                  <pre>
                    <code className="language-bash">
                      npm run android
                    </code>
                  </pre>
                  <Paragraph>
                    <strong>Finalidade e Aprendizado:</strong> Este foi o teste final que validou todo o setup. Um `BUILD SUCCESSFUL` neste passo significou que toda a configuração do Android Studio e do ambiente foi bem-sucedida.
                  </Paragraph>
                </Container>

                <Container>
                  <SectionTitle>
                    Passo 2: O Nascimento do Projeto: Criação e Estrutura Inicial
                  </SectionTitle>

                  <Paragraph>
                    Com o ambiente Android configurado e validado, o objetivo desta etapa foi criar o esqueleto do aplicativo React Native e organizar seu código-fonte de uma maneira limpa e escalável.
                  </Paragraph>

                  <Subtitle>2.1. O Comando de Criação (Uma Jornada de Diagnóstico)</Subtitle>
                  <Paragraph>
                    A criação do projeto não foi um único comando, mas um processo de depuração que gerou aprendizados valiosos sobre as ferramentas modernas de React Native.
                  </Paragraph>
                  <List>
                    <li>
                      <strong>1. Primeira Tentativa e Erro:</strong>
                      <br />
                      O comando `npx react-native init downloadVideoInstagram` resultou no erro: `TypeError: cli.init is not a function`.
                      <br />
                      <strong>Diagnóstico:</strong> Uma versão global e obsoleta da `react-native-cli` estava instalada, causando conflito.
                      <br />
                      <strong>Solução:</strong> Desinstalar o pacote global foi o primeiro passo.
                      <pre><code className="language-bash">npm uninstall -g react-native-cli</code></pre>
                    </li>
                    <li>
                      <strong>2. Segunda Tentativa e Erro:</strong>
                      <br />
                      A nova execução do comando gerou o aviso: `The init command is deprecated`.
                      <br />
                      <strong>Diagnóstico:</strong> O próprio comando `init` direto do pacote `react-native` estava descontinuado.
                    </li>
                    <li>
                      <strong>3. O Comando Correto e o Sucesso:</strong>
                      <br />
                      Seguindo a orientação do erro, o comando correto foi utilizado.
                      <pre><code className="language-bash">npx @react-native-community/cli init downloadVideoInstagram</code></pre>
                      <strong>Aprendizado Chave:</strong> A importância de ler atentamente as mensagens de erro e usar os comandos recomendados pela comunidade oficial.
                    </li>
                  </List>

                  <Subtitle>2.2. A Arquitetura de Pastas e a Decisão pelo TypeScript</Subtitle>
                  <Paragraph>
                    Desde o início, foram tomadas decisões para garantir que o projeto fosse organizado e robusto.
                  </Paragraph>
                  <List>
                    <li>
                      <strong>Ação 1: Uso de TypeScript por Padrão</strong>
                      <br />
                      <strong>Estratégia:</strong> O projeto foi criado e mantido em TypeScript (.tsx).
                      <br />
                      <strong>Aprendizado:</strong> Entendeu-se a vantagem de usar TypeScript para um código mais seguro e detecção de erros na fase de desenvolvimento. Foi crucial ajustar o `tsconfig.json` para o Jest entender a sintaxe JSX.
                    </li>
                    <li>
                      <strong>Ação 2: Organização do Código-Fonte</strong>
                      <br />
                      <strong>Estratégia:</strong> Uma pasta `src/` foi criada para separar o código da aplicação dos arquivos de configuração. Dentro dela, foram criadas as subpastas `screens`, `components`, `services` e `assets`.
                      <br />
                      <strong>Desafio e Solução:</strong> Ao mover `App.tsx` para `src/`, o app quebrou. O diagnóstico foi que o ponto de entrada (`index.js`) precisava ser atualizado.
                      <br />
                      <strong>Solução:</strong> Editar o `index.js` para importar o App do novo local.
                      <pre><code className="language-javascript">import App from './src/App';</code></pre>
                    </li>
                  </List>

                  <Subtitle>2.3. A "Saúde" do Projeto: Revisão do package.json</Subtitle>
                  <Paragraph>
                    Uma verificação das dependências foi feita para garantir que o projeto estava limpo.
                    <br />
                    <strong>Dúvida Crítica Resolvida:</strong> "Devo fazer o downgrade do react@19.0.0 para o 18.0.0?".
                    <br />
                    <strong>Diagnóstico e Aprendizado Final:</strong> A investigação provou o contrário. A versão `react-native@0.79.2` foi projetada para funcionar com `react@19.0.0`. O aprendizado fundamental foi confiar nas versões que a ferramenta oficial instala.
                    <br />
                    <strong>Ação de Limpeza:</strong> As dependências desnecessárias "install" e "npm" foram removidas do `package.json`.
                  </Paragraph>

                  <Paragraph>
                    Ao final deste passo, tínhamos um projeto funcional, com uma estrutura limpa e as dependências corretas, pronto para a próxima fase.
                  </Paragraph>
                </Container>

                <Container>
                  <SectionTitle>
                    Passo 3: Construindo a Interface e a Navegação Inicial
                  </SectionTitle>
                  <Paragraph>
                    O objetivo desta etapa foi criar as primeiras telas visíveis do aplicativo e permitir que o usuário navegasse entre elas, estabelecendo a base para todas as funcionalidades futuras.
                  </Paragraph>

                  <Subtitle>3.1. Construção da Primeira Tela (HomeScreen)</Subtitle>
                  <Paragraph>
                    A estratégia foi começar de forma simples, construindo a tela principal onde o usuário interagiria. O código padrão do React Native foi removido do `src/App.tsx` e a primeira tela, `src/screens/HomeScreen.tsx`, foi criada.
                  </Paragraph>
                  <Paragraph><strong>Tecnologias e Componentes Utilizados:</strong></Paragraph>
                  <List>
                    <li>
                      <strong>Componentes Nativos do React Native:</strong> Foram usados os blocos de construção fundamentais como `View`, `Text`, `TextInput`, `Button` e `StyleSheet` para a estrutura e aparência.
                    </li>
                    <li>
                      <strong>Componentes de Layout Avançado:</strong> `SafeAreaView` foi usado para evitar áreas do sistema (como o "notch"). `KeyboardAvoidingView` e `ScrollView` foram combinados para garantir que o teclado não cobrisse o campo de input.
                    </li>
                  </List>

                  <Subtitle>3.2. Implementação da Navegação entre Telas</Subtitle>
                  <Paragraph>
                    A biblioteca <strong>React Navigation</strong> foi escolhida para gerenciar as telas do app.
                  </Paragraph>
                  <Paragraph><strong>Comandos de Instalação:</strong></Paragraph>
                  <pre><code className="language-bash">
                    {`npm install @react-navigation/native
npm install @react-navigation/native-stack
npm install react-native-screens react-native-safe-area-context`}
                  </code></pre>
                  <Paragraph>
                    <strong>Desafio e Aprendizado:</strong> A tentativa de usar `npx react-native link` resultou no erro `unknown command 'link'`.
                    <br />
                    <strong>Solução e Aprendizado:</strong> O aprendizado foi que, em versões modernas do React Native (0.60+), o "autolinking" é padrão. As bibliotecas são vinculadas automaticamente durante a compilação (`npm run android`), tornando o comando `link` obsoleto.
                  </Paragraph>
                  <Paragraph>
                    <strong>Arquitetura de Navegação:</strong> Uma estrutura de "navegadores aninhados" foi implementada. Um `createDrawerNavigator` (menu lateral) se tornou o navegador principal, e dentro dele, a seção "Histórico" utiliza um `createNativeStackNavigator` (navegação em pilha). Isso permitiu um fluxo limpo de `Histórico (lista) -> PlayerDeVideo (detalhe)` sem poluir o menu principal.
                  </Paragraph>

                  <Subtitle>3.3. Adicionando Interação e Estado Inicial</Subtitle>
                  <Paragraph>
                    Para que a HomeScreen se tornasse dinâmica, o Hook <strong>`useState`</strong> do React foi a tecnologia chave.
                  </Paragraph>
                  <Paragraph><strong>Implementação:</strong></Paragraph>
                  <pre><code className="language-javascript">
                    {`const [videoUrl, setVideoUrl] = useState('');
const [isLoading, setIsLoading] = useState(false);`}
                  </code></pre>
                  <Paragraph>
                    <strong>Aprendizado:</strong> Entendeu-se como usar esse estado para criar uma UI dinâmica. Quando `isLoading` era `true`, o botão de download era desabilitado e um `ActivityIndicator` (ícone de carregamento) era exibido em seu lugar, fornecendo feedback visual claro ao usuário.
                  </Paragraph>
                  <Paragraph>
                    Ao final deste passo, o aplicativo já tinha uma aparência, navegação funcional e respondia às interações do usuário, deixando a base pronta para a lógica de backend.
                  </Paragraph>
                </Container>

                <Container>
                  <SectionTitle>
                    passo 4: A Decisão Estratégica - A Necessidade de um Backend
                  </SectionTitle>
                  <Paragraph>
                    O objetivo desta etapa foi analisar a viabilidade técnica da ideia original (baixar vídeos do Instagram) e tomar uma decisão arquitetural fundamental para garantir a estabilidade e o sucesso do projeto a longo prazo.
                  </Paragraph>

                  <Subtitle>4.1. A Investigação do Problema Central</Subtitle>
                  <Paragraph>
                    <strong>Estratégia Inicial (Hipótese):</strong> A primeira ideia era que o próprio aplicativo React Native, ao receber um link do Instagram, faria todo o trabalho.
                  </Paragraph>
                  <Paragraph>
                    <strong>Análise Técnica:</strong> A investigação revelou que, para fazer isso diretamente do app, seria necessário usar "Web Scraping" (Raspagem de Dados). O processo envolveria baixar o HTML da página do Instagram e tentar encontrar o link do vídeo `.mp4` escondido dentro de tags `&lt;script&gt;` em um formato JSON complexo.
                  </Paragraph>

                  <Subtitle>4.2. O Diagnóstico: Riscos e Instabilidade</Subtitle>
                  <Paragraph>
                    A análise da abordagem de "Web Scraping" diretamente do aplicativo concluiu que ela era inviável e excessivamente arriscada.
                  </Paragraph>
                  <List>
                    <li><strong>Instabilidade Extrema:</strong> O Instagram muda a estrutura de seu site constantemente. Uma pequena alteração quebraria a funcionalidade para todos os usuários instantaneamente.</li>
                    <li><strong>Bloqueio de IP:</strong> Múltiplas requisições de scraping poderiam levar ao bloqueio de IPs dos usuários ou do próprio app.</li>
                    <li><strong>Violação dos Termos de Serviço:</strong> A prática de scraping viola diretamente os Termos de Serviço, colocando o app em alto risco de ser banido da Google Play Store.</li>
                    <li><strong>Complexidade:</strong> Lidar com diferentes tipos de posts e conteúdo privado aumentaria exponencialmente a fragilidade do código no frontend.</li>
                  </List>

                  <Subtitle>4.3. A Nova Estratégia: A Arquitetura Cliente-Servidor</Subtitle>
                  <Paragraph>
                    Com base nos riscos, foi tomada a decisão de mudar para uma arquitetura Cliente-Servidor, dividindo a lógica em duas partes claras.
                  </Paragraph>
                  <List>
                    <li>
                      <strong>Frontend (O App React Native):</strong> Responsável exclusivamente pela Experiência do Usuário (UI/UX). Suas tarefas seriam capturar a URL, se comunicar com o backend e exibir o status do processo.
                    </li>
                    <li>
                      <strong>Backend (O Servidor Node.js):</strong> Responsável por todo o trabalho pesado. Suas tarefas seriam receber a URL, usar ferramentas poderosas (como o *******) para fazer o scraping e o download, e fornecer endpoints para o frontend.
                    </li>
                  </List>
                  <Paragraph>
                    <strong>Aprendizado Chave (Arquitetura de Software):</strong> O aprendizado fundamental desta fase foi a importância da <strong>separação de responsabilidades</strong>. Mover a lógica complexa e frágil para um servidor tornou o aplicativo mobile muito mais leve, estável e focado no que ele faz de melhor: interagir com o usuário.
                  </Paragraph>
                  <Paragraph>
                    Ao final deste passo, a estratégia do projeto estava solidificada e pronta para a construção do backend.
                  </Paragraph>
                </Container>

                <Container>
                  <SectionTitle>
                    Passo 5: Construindo o "Motor" - A Arquitetura do Backend com Filas
                  </SectionTitle>
                  <Paragraph>
                    O objetivo desta etapa foi desenvolver um servidor robusto e assíncrono capaz de receber solicitações, processá-las em segundo plano sem travar, e gerenciar os arquivos gerados de forma segura.
                  </Paragraph>

                  <Subtitle>5.1. A Escolha da "Stack" de Tecnologia do Backend</Subtitle>
                  <List>
                    <li><strong>Node.js:</strong> O ambiente de execução JavaScript no servidor.</li>
                    <li><strong>Express.js:</strong> O framework para criar a API e definir as rotas.</li>
                    <li><strong>Redis:</strong> O banco de dados em memória, usado como base para o sistema de filas.</li>
                    <li><strong>BullMQ:</strong> A biblioteca para gerenciar a fila de trabalhos de forma robusta sobre o Redis.</li>
                  </List>

                  <Subtitle>5.2. A Arquitetura da API (Os "Portões" do Servidor)</Subtitle>
                  <Paragraph>A API foi projetada com três endpoints claros:</Paragraph>
                  <List>
                    <li><strong>POST /download:</strong> Recebe a URL, cria um trabalho na fila com um ID único e responde imediatamente com esse ID.</li>
                    <li><strong>GET /status/:id:</strong> Permite ao app consultar o status do trabalho (ex: `processing`, `completed`, `failed`).</li>
                    <li><strong>GET /download/:id:</strong> Uma vez que o status é `completed`, o app usa este endpoint para baixar o arquivo final.</li>
                  </List>

                  <Subtitle>5.3. O Coração do Sistema: Fila de Trabalhos Assíncrona</Subtitle>
                  <Paragraph>
                    <strong>Aprendizado Chave:</strong> Entendeu-se que tarefas longas (como um download) não podem ser executadas na requisição da API, pois isso "travaria" o servidor. A solução foi um sistema de filas, com uma `Queue` para enfileirar os pedidos e um `Worker` (processo em segundo plano) para executá-los.
                  </Paragraph>

                  <Subtitle>5.4. A Ferramenta de Download: yt-dlp</Subtitle>
                  <Paragraph>
                    Em vez de criar um código de scraping frágil, a estratégia foi delegar a tarefa a uma ferramenta especializada. O Worker executa o <strong>yt-dlp.exe</strong> como um processo filho (`child_process.exec`), abstraindo toda a complexidade e tornando o backend extremamente versátil.
                  </Paragraph>

                  <Subtitle>5.5. Gerenciamento e Segurança</Subtitle>
                  <Paragraph>Duas funcionalidades cruciais foram implementadas para a sustentabilidade do servidor:</Paragraph>
                  <List>
                    <li>
                      <strong>Limpeza Automática de Arquivos:</strong> Uma segunda fila (`cleanupQueue`) com um Worker foi criada. Usando "jobs repetíveis" do BullMQ, uma tarefa de limpeza foi agendada para rodar de hora em hora, deletando arquivos antigos e prevenindo que o disco ficasse cheio.
                    </li>
                    <li>
                      <strong>Segurança (Rate Limiting):</strong> Foi utilizado o middleware `express-rate-limit` para limitar o número de requisições que um mesmo IP pode fazer, prevenindo abusos. Foi necessário configurar o Express para confiar em proxies, algo essencial para produção.
                      <pre><code className="language-javascript">app.set('trust proxy', 1);</code></pre>
                    </li>
                  </List>

                  <Paragraph>
                    Ao final deste passo, o "motor" do aplicativo estava completo: um backend robusto, assíncrono, seguro e eficiente, pronto para ser conectado ao frontend.
                  </Paragraph>
                </Container>

                <Container>
                  <SectionTitle>
                    Passo 6:  A Conexão - Integrando o Frontend com o Backend
                  </SectionTitle>
                  <Paragraph>
                    O objetivo desta etapa foi fazer com que o aplicativo se comunicasse com a API do servidor, implementando o fluxo completo de download: desde a solicitação até o salvamento do arquivo e o registro no histórico.
                  </Paragraph>

                  <Subtitle>6.1. O Desafio da Conectividade Local</Subtitle>
                  <Paragraph>
                    <strong>Dúvida/Problema:</strong> "Como o app no emulador Android acessa o servidor `localhost` no meu computador?"
                  </Paragraph>
                  <Paragraph>
                    <strong>Aprendizado Chave:</strong> Descobriu-se que o emulador opera em sua própria rede virtual. Para acessar o localhost da máquina hospedeira, foi necessário usar o endereço de IP especial <code>10.0.2.2</code>. Uma constante `BACKEND_URL` foi criada no código com o valor <code>http://10.0.2.2:3000</code>.
                  </Paragraph>

                  <Subtitle>6.2. Implementando o Fluxo de Comunicação</Subtitle>
                  <Paragraph>
                    A lógica da tela `HomeScreen.tsx` foi refeita para orquestrar a comunicação com o backend, utilizando `fetch` e `async/await`.
                  </Paragraph>
                  <List>
                    <li>
                      <strong>Lógica de "Polling" (Verificação Periódica):</strong> Este foi um conceito central. Um `useEffect` foi implementado para "observar" o `jobId` recebido do backend. Quando um ID existia, um `setInterval` era disparado para verificar o status do trabalho a cada 5 segundos, sendo limpo com `clearInterval` ao final do processo.
                    </li>
                    <li>
                      <strong>Gerenciamento de Estado Avançado:</strong> Múltiplos estados (`isLoading`, `statusMessage`, `currentJobId`) foram criados para gerenciar o ciclo de vida completo do processo e dar feedback visual e textual em tempo real ao usuário.
                    </li>
                  </List>

                  <Subtitle>6.3. Interação com o Sistema de Arquivos</Subtitle>
                  <Paragraph>
                    A biblioteca <strong>react-native-fs</strong> foi usada para baixar o vídeo pronto do nosso servidor para o dispositivo.
                  </Paragraph>
                  <Paragraph>
                    <strong>Ação e Aprendizado:</strong> Uma função `startFinalDownload` foi criada para chamar `RNFS.downloadFile`. O destino do arquivo foi definido com `RNFS.ExternalDirectoryPath` para garantir compatibilidade com as regras do Android moderno (Scoped Storage). A callback `progress` foi implementada para calcular e exibir a porcentagem do download, melhorando drasticamente o feedback para o usuário.
                  </Paragraph>

                  <Subtitle>6.4. Persistência de Dados (Histórico)</Subtitle>
                  <Paragraph>
                    Para salvar o histórico de downloads, a biblioteca <strong>@react-native-async-storage/async-storage</strong> foi utilizada.
                  </Paragraph>
                  <Paragraph>
                    <strong>Ação e Aprendizado:</strong> Após um download bem-sucedido, uma função lia o histórico existente do AsyncStorage, adicionava a nova entrada e salvava o array atualizado de volta. O aprendizado foi como usar o AsyncStorage para persistir dados (em formato de string `JSON`) no dispositivo, mantendo a informação disponível mesmo após fechar o app.
                  </Paragraph>

                  <Paragraph>
                    Ao final deste passo, o aplicativo estava totalmente integrado ao backend e funcional de ponta a ponta.
                  </Paragraph>

                </Container>

                <Container>
                  <SectionTitle>
                    Passo 7: Refinamento e Funcionalidades Avançadas de UI/UX
                  </SectionTitle>
                  <Paragraph>
                    O objetivo desta etapa foi construir as funcionalidades de visualização do histórico e de reprodução de vídeo, resolvendo desafios de performance e interface para criar um produto final coeso.
                  </Paragraph>

                  <Subtitle>7.1. Construção da Tela de Histórico (HistoryScreen)</Subtitle>
                  <Paragraph>
                    Para exibir a lista de vídeos salvos, o componente <strong>FlatList</strong> foi escolhido por sua alta performance, já que ele "virtualiza" a lista, renderizando apenas os itens visíveis.
                  </Paragraph>
                  <Paragraph>
                    <strong>Aprendizado Chave:</strong> Foi usado o hook <strong>useFocusEffect</strong> do React Navigation em vez do `useEffect`. Isso garantiu que, ao navegar para a tela de Histórico, a lista fosse sempre recarregada e atualizada, algo que o `useEffect` padrão não faria.
                  </Paragraph>

                  <Subtitle>7.2. O Desafio do Preview de Vídeo (O "Bug do Fantasma")</Subtitle>
                  <Paragraph>
                    A estratégia inicial de usar um componente {'<Video paused={true} />'} para cada item da lista causou um bug visual, onde o preview de um vídeo aparecia no item de outro ao rolar a tela (um "frame fantasma").
                  </Paragraph>
                  <Paragraph>
                    <strong>Solução Definitiva (e Aprendizado de Performance):</strong> A abordagem foi reformulada. Usando a biblioteca `react-native-create-thumbnail`, uma imagem estática foi gerada após cada download. Na tela de histórico, os componentes {'<Video>'} foram substituídos por componentes {'<Image>'}, que são muito mais leves.
                  </Paragraph>
                  <Paragraph>
                    <strong>Aprendizado Fundamental:</strong> A solução não apenas resolveu o bug, mas melhorou drasticamente a performance da `FlatList`, tornando a rolagem muito mais fluida.
                  </Paragraph>

                  <Subtitle>7.3. Implementando o Player de Vídeo (VideoPlayerScreen)</Subtitle>
                  <Paragraph>
                    A biblioteca <strong>react-native-video</strong> foi utilizada para criar um player em tela cheia.
                  </Paragraph>
                  <Paragraph>
                    <strong>Aprendizado Técnico:</strong> A lição mais importante foi descobrir que, para tocar um arquivo local, a `source` do vídeo precisa obrigatoriamente do prefixo `file://`. Um "crash" ao gerar thumbnails foi resolvido aplicando o mesmo prefixo, confirmando que bibliotecas nativas precisam de caminhos de arquivo explícitos.
                  </Paragraph>

                  <Subtitle>7.4. Polimento da Experiência de Navegação e UI</Subtitle>
                  <List>
                    <li>
                      <strong>Player em Tela Cheia:</strong> Na configuração do navegador, a opção `headerShown: false` foi usada para remover o cabeçalho e criar uma experiência imersiva.
                    </li>
                    <li>
                      <strong>Botão de Voltar Customizado:</strong> Um botão com um ícone da biblioteca `react-native-vector-icons` foi posicionado de forma "flutuante" sobre o vídeo. Foi usado o hook `useSafeAreaInsets` para garantir que o botão não ficasse sob o "notch" da câmera.
                    </li>
                    <li>
                      <strong>Configuração de Ícones no Android:</strong> Foi necessário editar `android/app/build.gradle` para incluir as fontes dos ícones na compilação final do app, uma etapa crucial de configuração nativa.
                      <pre><code className="javascript">{`apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"`}</code></pre>
                    </li>
                  </List>

                  <Paragraph>
                    Ao final, o aplicativo estava funcional e oferecia uma experiência de usuário refinada, com navegação intuitiva e um player imersivo.
                  </Paragraph>
                </Container>

                <Container>
                  <SectionTitle>
                    Passo 8: Próximos Passos e Futuras Melhorias (O Roteiro do Produto)
                  </SectionTitle>
                  <Paragraph>
                    Esta etapa planeja as próximas funcionalidades que transformariam o aplicativo de um protótipo funcional em um produto mais completo, robusto e pronto para o mercado.
                  </Paragraph>

                  <Subtitle>8.1. Melhorias na Experiência do Usuário (UX)</Subtitle>
                  <List>
                    <li><strong>Feedback Visual Aprimorado:</strong> Substituir os `Alerts` por componentes de "Toast" ou "Snackbar" (usando <code>react-native-toast-message</code>) para um feedback menos intrusivo.</li>
                    <li><strong>Animações e Transições:</strong> Adicionar animações sutis nas telas e componentes com <code>react-native-reanimated</code> para tornar o uso do app mais fluido.</li>
                    <li><strong>Modo Escuro (Dark Mode):</strong> Implementar um tema escuro que se adapta automaticamente às configurações do sistema operacional.</li>
                  </List>

                  <Subtitle>8.2. Funcionalidades Adicionais do Histórico</Subtitle>
                  <List>
                    <li><strong>Deletar Vídeos:</strong> Implementar a exclusão de itens do histórico, removendo a entrada do `AsyncStorage` e o arquivo físico do dispositivo com `react-native-fs`.</li>
                    <li><strong>Compartilhar Vídeos:</strong> Adicionar um botão "Compartilhar" que permitiria enviar o vídeo para outros apps (WhatsApp, etc.) usando <code>react-native-share</code>.</li>
                  </List>

                  <Subtitle>8.3. Robustez e Gerenciamento de Erros</Subtitle>
                  <List>
                    <li><strong>Downloads em Segundo Plano:</strong> Implementar uma solução de download que continue rodando mesmo com o app minimizado, uma funcionalidade avançada que melhora muito a confiabilidade.</li>
                    <li><strong>Gerenciamento de Rede:</strong> Detectar o tipo de rede com <code>@react-native-community/netinfo</code> e exibir um aviso antes de iniciar downloads grandes em redes de dados móveis.</li>
                  </List>

                  <Subtitle>8.4. Monetização e Publicação (O Objetivo Final)</Subtitle>
                  <List>
                    <li>
                      <strong>Integração de Anúncios:</strong> Integrar o SDK do Google AdMob (via <code>react-native-google-mobile-ads</code>) para exibir anúncios de banner e intersticiais, visando a geração de receita.
                    </li>
                    <li>
                      <strong>Preparação para a Google Play Store:</strong> Gerar a versão final assinada do app (arquivo `.aab`), criar os ícones, screenshots e escrever uma Política de Privacidade clara.
                    </li>
                  </List>

                </Container>

                <Container>
                  <SectionTitle>
                    Passo 9: Resumo Técnico e Stack de Tecnologias
                  </SectionTitle>
                  <Paragraph>
                    Esta seção consolida todas as ferramentas, bibliotecas, comandos e conceitos aprendidos, oferecendo uma visão clara e concisa de todo o projeto.
                  </Paragraph>

                  <Subtitle>9.1. Resumo da Arquitetura Final</Subtitle>
                  <Paragraph>
                    O projeto evoluiu para uma arquitetura Cliente-Servidor robusta, com as seguintes responsabilidades:
                  </Paragraph>
                  <List>
                    <li><strong>Cliente (Frontend - React Native):</strong> Responsável pela Experiência do Usuário (UI/UX), gerenciando a interface, estado, comunicação com a API e os arquivos no dispositivo.</li>
                    <li><strong>Servidor (Backend - Node.js):</strong> Atua como o "motor" do serviço, gerenciando uma fila de downloads assíncrona, utilizando o yt-dlp para extrair os vídeos e servindo os arquivos finais.</li>
                  </List>

                  <Subtitle>9.2. Stack de Tecnologias Utilizadas</Subtitle>

                  <Paragraph><strong>Frontend (Aplicativo React Native)</strong></Paragraph>
                  <Table>
                    <THead>
                      <tr>
                        <Th>Categoria</Th>
                        <Th>Tecnologia/Biblioteca</Th>
                        <Th>Finalidade</Th>
                      </tr>
                    </THead>
                    <TBody>
                      <tr><Td>Linguagem</Td><Td>TypeScript</Td><Td>Garantir segurança de tipos e manutenibilidade.</Td></tr>
                      <tr><Td>Framework</Td><Td>React Native</Td><Td>Construir o aplicativo nativo para Android.</Td></tr>
                      <tr><Td>Navegação</Td><Td>React Navigation</Td><Td>Gerenciar o fluxo entre telas.</Td></tr>
                      <tr><Td>UI e Ícones</Td><Td>React Native Vector Icons</Td><Td>Exibir ícones profissionais na interface.</Td></tr>
                      <tr><Td>Arquivos Locais</Td><Td>React Native FS</Td><Td>Baixar e salvar os arquivos no dispositivo.</Td></tr>
                      <tr><Td>Geração de Preview</Td><Td>React Native Create Thumbnail</Td><Td>Criar imagens de preview dos vídeos.</Td></tr>
                      <tr><Td>Permissões</Td><Td>React Native Permissions</Td><Td>Solicitar permissões em tempo de execução.</Td></tr>
                      <tr><Td>Armazenamento</Td><Td>AsyncStorage</Td><Td>Persistir o histórico de downloads.</Td></tr>
                    </TBody>
                  </Table>

                  <Paragraph><strong>Backend (Servidor)</strong></Paragraph>
                  <Table>
                    <THead>
                      <tr>
                        <Th>Categoria</Th>
                        <Th>Tecnologia/Biblioteca</Th>
                        <Th>Finalidade</Th>
                      </tr>
                    </THead>
                    <TBody>
                      <tr><Td>Ambiente</Td><Td>Node.js</Td><Td>Executar JavaScript no lado do servidor.</Td></tr>
                      <tr><Td>Framework API</Td><Td>Express.js</Td><Td>Criar e gerenciar os endpoints da API REST.</Td></tr>
                      <tr><Td>Fila de Trabalhos</Td><Td>BullMQ</Td><Td>Gerenciar tarefas de forma assíncrona.</Td></tr>
                      <tr><Td>Banco de Dados</Td><Td>Redis</Td><Td>Servir como o backend para o sistema de filas.</Td></tr>
                      <tr><Td>"Motor" de Download</Td><Td>yt-dlp</Td><Td>Baixar vídeos de diversas fontes.</Td></tr>
                      <tr><Td>Segurança</Td><Td>Express Rate Limit & CORS</Td><Td>Proteger a API contra abusos e controlar o acesso.</Td></tr>
                    </TBody>
                  </Table>

                  <Subtitle>9.3. Comandos Essenciais da Jornada</Subtitle>
                  <pre><code className="language-bash">{`# Iniciar um projeto moderno\nnpx @react-native-community/cli init ...\n\n# Compilar e rodar o app\nnpm run android\n\n# Limpar o cache de build nativo\ncd android && ./gradlew clean\n\n# Limpar o cache do Metro Bundler\nnpx react-native start --reset-cache`}</code></pre>

                  <Subtitle>9.4. Principais Desafios Superados e Aprendizados</Subtitle>
                  <List>
                    <li><strong>Configuração do Ambiente:</strong> Superar os erros de `init` e a configuração correta do PATH para o Android SDK moderno.</li>
                    <li><strong>Arquitetura:</strong> A decisão estratégica de projetar um backend assíncrono com fila de trabalhos em vez de fazer scraping no cliente.</li>
                    <li><strong>Comunicação Nativa:</strong> Aprender a necessidade do prefixo `file://` ao passar caminhos de arquivos para bibliotecas nativas.</li>
                    <li><strong>Renderização em Listas:</strong> Diagnosticar e resolver o "bug do fantasma" na `FlatList`, entendendo a solução performática com thumbnails.</li>
                    <li><strong>Permissões do Android:</strong> Implementar uma lógica de pedido de permissões compatível com o Scoped Storage.</li>
                  </List>
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