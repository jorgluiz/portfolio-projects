import Head from 'next/head';
import { useEffect } from 'react';
import { Container, SectionTitle, Check, List, Title, Paragraph, CodeBlockF0F0F0, Label, Separator, Bold } from "@/styles/globalStyles";
import hljs from 'highlight.js'; // Importando o highlight.js
import 'highlight.js/styles/atom-one-dark.css'; // Estilo para colorir a sintaxe

const FrontendTecnologiasNextjs = () => {
  useEffect(() => {
    hljs.highlightAll(); // Aplica o destaque de sintaxe a todos os blocos de código
  }, []);

  return (
    <>
      <Head>
        {/* Primary Meta Tags Atualizados para "Tecnologias Frontend com Next.js" */}
        <title>Guia de Next.js: Quando Usar, Vantagens e Data Fetching (SSR/SSG)</title>
        <meta
          name="description"
          content="Aprenda quando e por que usar Next.js para seus projetos frontend. Entenda as vantagens de SSR e SSG para SEO e a diferença entre getStaticProps e getServerSideProps."
        />
        <meta
          name="keywords"
          content="Next.js, React, Frontend, SSR, SSG, getStaticProps, getServerSideProps, Server-Side Rendering, Static Site Generation, SEO, Performance, JavaScript"
        />
        <meta name="author" content="Jorge Luiz" />

        {/* Open Graph / Facebook Atualizados */}
        <meta property="og:site_name" content="https://portfolio-projects-production.up.railway.app" />
        <meta property="og:type" content="website" />
        {/* URL mantida conforme o padrão anterior */}
        <meta property="og:url" content="https://portfolio-projects-production.up.railway.app/artigos-tecnicos/blog" />
        <meta property="og:title" content="Guia de Next.js: Quando Usar, Vantagens e Data Fetching (SSR/SSG)" />
        <meta property="og:description" content="Um guia completo para decidir se Next.js é a escolha certa. Explore as vantagens de performance, SEO, e aprenda a usar getStaticProps e getServerSideProps." />
        <meta property="og:image" content="https://portfolio-projects-production.up.railway.app/perfil.png" />

        {/* Twitter Atualizados */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://portfolio-projects-production.up.railway.app/artigos-tecnicos/blog" />
        <meta property="twitter:title" content="Guia de Next.js: Quando Usar, Vantagens e Data Fetching (SSR/SSG)" />
        <meta property="twitter:description" content="Pensando em usar Next.js? Este guia explica quando ele brilha (SEO, performance), suas principais vantagens, e a diferença crucial entre getStaticProps e getServerSideProps." />
        <meta property="twitter:image" content="https://portfolio-projects-production.up.railway.app/perfil.png" />
      </Head>

      <Container>
        <SectionTitle>
          <Check>🚀</Check> Quando usar Next.js no frontend?
        </SectionTitle>
        <Paragraph><Bold>O que é Next.js?</Bold></Paragraph>
        <Paragraph>Framework React com foco em renderização híbrida (SSR, SSG e CSR).</Paragraph>
        <Paragraph>Suporta rotas automáticas baseadas no sistema de arquivos.</Paragraph>
        <Paragraph>Vem com várias otimizações embutidas: roteamento, otimização de imagens, geração de sites estáticos, API Routes etc.</Paragraph>
      </Container>

      <Container>
        <SectionTitle>
          <Check>⏰</Check> Quando usar Next.js?
        </SectionTitle>
        <List>
          <li><Bold>SEO é importante</Bold><br />
            Apps que precisam ser bem indexados por motores de busca (Google etc) — pois Next.js permite Server-Side Rendering (SSR) e Static Site Generation (SSG), melhorando o SEO.
          </li>
          <li><Bold>Performance de carregamento inicial</Bold><br />
            SSR e SSG melhoram o tempo de carregamento da página inicial porque o HTML já vem pré-renderizado do servidor.
          </li>
          <li><Bold>Sites com conteúdo dinâmico e/ou estático misturado</Bold><br />
            Você pode gerar páginas estáticas para conteúdo fixo e usar SSR para páginas que precisam ser atualizadas a cada requisição.
          </li>
          <li><Bold>Apps que precisam de rotas API simples integradas</Bold><br />
            Next.js permite criar APIs dentro do próprio projeto, útil para micro-serviços ou pequenas integrações sem backend separado.
          </li>
          <li><Bold>Melhor experiência de desenvolvimento com roteamento automático</Bold><br />
            Estrutura de pastas simples, menos configuração manual.
          </li>
          <li><Bold>Projetos onde o SEO, performance e UX são prioridade</Bold><br />
            Ex: lojas online, blogs, portais de notícias, dashboards públicos.
          </li>
        </List>
      </Container>

      <Container>
        <Title>
          <Check>⚙️</Check> Quando não usar Next.js?
        </Title>

        <Paragraph>
          App muito simples ou SPA puramente cliente, onde SSR/SSG não faz diferença.
        </Paragraph>
        <Paragraph>
          Projetos 100% backend ou APIs (Next.js tem API Routes, mas não substitui um backend robusto).
        </Paragraph>
        <Paragraph>
          Quando você já tem um backend separado e quer uma frontend SPA isolada, sem renderização no servidor.
        </Paragraph>
        <Paragraph>
          Projetos onde a equipe não tem familiaridade com SSR/SSG e prefere algo mais simples (React puro com CRA ou Vite).
        </Paragraph>
      </Container>

      <Container>
        <Title>
          <Check>🚩</Check> Principais vantagens do Next.js
        </Title>
        <List>
          <li>SSR (Server-Side Rendering)</li>
          <li>SSG (Static Site Generation)</li>
          <li>Incremental Static Regeneration (ISR) — atualiza páginas estáticas em background sem rebuild completo.</li>
          <li>API Routes — endpoints backend dentro do Next.js.</li>
          <li>Image Optimization — otimização automática de imagens.</li>
          <li>Built-in CSS & Sass support</li>
          <li>Suporte para middleware</li>
          <li>Rotas dinâmicas fáceis</li>
        </List>
      </Container>

      <Container>
        <Title>
          <Check>📁</Check> Estrutura básica típica Next.js
        </Title>

        <Label>kotlin</Label>

        <CodeBlockF0F0F0>
          <pre><code className="javascript">{`/pages               <- cada arquivo vira uma rota
/api               <- API routes (funções backend)
index.tsx          <- página principal
about.tsx          <- página about

/public              <- arquivos estáticos (imagens, favicon, etc)

/components          <- componentes React reutilizáveis
/styles              <- estilos globais, CSS Modules, etc.`}</code></pre>
        </CodeBlockF0F0F0>
      </Container>

      <Container>
        <SectionTitle>getStaticProps (Geração Estática)</SectionTitle>

        <Paragraph><Bold>Objetivo:</Bold> É usado para gerar páginas de forma estática no momento da construção (build), ou seja, os dados são buscados e renderizados antes de o site ser servido ao usuário.</Paragraph>
        <Paragraph><Bold>Quando usar:</Bold> Quando os dados da página não mudam frequentemente ou podem ser atualizados apenas em intervalos específicos.</Paragraph>
        <Paragraph><Bold>Como funciona:</Bold></Paragraph>
        <List style={{ paddingLeft: '20px' }}>
          <li>Execução no momento da construção: Durante o build do Next.js, o getStaticProps é chamado, e a página gerada é salva como uma versão estática. Isso significa que o conteúdo já está pronto e pode ser entregue rapidamente aos usuários.</li>
          <li>Exemplo de uso: Páginas de blog, portfólios ou catálogos de produtos que não requerem dados atualizados constantemente.</li>
        </List>

        <CodeBlockF0F0F0>
          <pre><code className="javascript">{`export async function getStaticProps() {
  const data = await fetch('https://api.example.com/data');
  const json = await data.json();

  return {
    props: {
      data: json,
    },
  };
}`}</code></pre>
        </CodeBlockF0F0F0>

        <Separator />

        <SectionTitle>getServerSideProps (Renderização no Lado do Servidor)</SectionTitle>

        <Paragraph><Bold>Objetivo:</Bold> Ele é usado para buscar e renderizar dados dinâmicos no momento da requisição, ou seja, a página é gerada sempre que o usuário acessa a página.</Paragraph>
        <Paragraph><Bold>Quando usar:</Bold> Quando os dados precisam ser sempre atualizados ou quando dependem de variáveis como cookies, autenticação ou outras condições que mudam com o tempo.</Paragraph>
        <Paragraph><Bold>Como funciona:</Bold></Paragraph>
        <List style={{ paddingLeft: '20px' }}>
          <li>Execução a cada requisição: Sempre que uma requisição é feita para a página, o getServerSideProps é executado no servidor, buscando os dados mais recentes e gerando a página em tempo real.</li>
          <li>Exemplo de uso: Páginas de dashboards, feeds de redes sociais ou outras páginas com dados atualizados frequentemente.</li>
        </List>

        <CodeBlockF0F0F0>
          <pre><code className="javascript">{`export async function getServerSideProps(context) {
  const res = await fetch('https://api.example.com/dynamic-data');
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}`}</code></pre>
        </CodeBlockF0F0F0>

        <Separator />

        <SectionTitle>Diferenças principais:</SectionTitle>
        <List>
          <li><Bold>getStaticProps:</Bold> A página é gerada no momento da construção (build) e serve para conteúdo que não muda com frequência.</li>
          <li><Bold>getServerSideProps:</Bold> A página é gerada a cada requisição feita ao servidor, garantindo que o conteúdo esteja sempre atualizado com dados dinâmicos.</li>
        </List>

        <SectionTitle>Quando escolher um ou outro:</SectionTitle>
        <List>
          <li><Bold>getStaticProps:</Bold> Ideal para conteúdo que não muda frequentemente ou pode ser regenerado em intervalos específicos (como em blogs ou catálogos de produtos).</li>
          <li><Bold>getServerSideProps:</Bold> Útil quando é necessário garantir que os dados mais recentes sejam carregados a cada acesso, especialmente quando o conteúdo depende de fatores variáveis como a hora ou estado do usuário.</li>
        </List>

        <SectionTitle>Resumindo:</SectionTitle>
        <List>
          <li><Bold>getStaticProps:</Bold> Para dados estáticos, gerados no momento da construção (build).</li>
          <li><Bold>getServerSideProps:</Bold> Para dados dinâmicos, gerados a cada requisição no lado do servidor.</li>
        </List>

        <Paragraph>
          Se o seu projeto não exige dados dinâmicos (como conteúdo atualizado frequentemente ou personalizado para o usuário), o uso de <Bold>getStaticProps</Bold> é mais eficiente, pois gera páginas estáticas e proporciona uma performance melhor.
        </Paragraph>
      </Container>
    </>
  );
};

export default FrontendTecnologiasNextjs;
