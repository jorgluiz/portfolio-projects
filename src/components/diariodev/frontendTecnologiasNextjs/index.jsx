import { Container, SectionTitle, Check, List, Title, Paragraph, CodeBlockF0F0F0, Label, Separator, Bold } from "@/styles/globalStyles";

const FrontendTecnologiasNextjs = () => {

  return (
    <>
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
          {`/pages               <- cada arquivo vira uma rota
/api               <- API routes (funções backend)
index.tsx          <- página principal
about.tsx          <- página about

/public              <- arquivos estáticos (imagens, favicon, etc)

/components          <- componentes React reutilizáveis
/styles              <- estilos globais, CSS Modules, etc.`}
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
          {`export async function getStaticProps() {
  const data = await fetch('https://api.example.com/data');
  const json = await data.json();

  return {
    props: {
      data: json,
    },
  };
}`}
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
          {`export async function getServerSideProps(context) {
  const res = await fetch('https://api.example.com/dynamic-data');
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}`}
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

      <Container>
        <SectionTitle>1. getStaticProps (Renderização Estática)</SectionTitle>

        <Paragraph>
          getStaticProps é utilizado quando você deseja gerar uma página de forma estática no momento da construção (build) do site.
          Ele permite que você pré-renderize páginas com dados que não mudam com frequência. Usar getStaticProps é útil para gerar páginas de conteúdo fixo ou quase fixo.
        </Paragraph>

        <Paragraph><Bold>Como usar:</Bold></Paragraph>
        <Paragraph>
          No caso da página de projetos, se as informações das metatags (como título, descrição, etc.) são estáticas ou mudam muito raramente, você pode usar getStaticProps.
        </Paragraph>

        <CodeBlockF0F0F0>
          {`import Head from "next/head";

const Projetos = ({ metadata }) => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.ogTitle} />
        <meta property="og:description" content={metadata.ogDescription} />
        <meta property="og:image" content={metadata.ogImage} />
        <meta property="og:url" content={metadata.url} />
      </Head>
      <div style={{ display: "flex" }}>
        {/* Seu conteúdo */}
      </div>
    </>
  );
};

// Usado para carregar dados no momento da construção (build)
export async function getStaticProps() {

  // Aqui você pode buscar dados de uma API, banco de dados ou usar valores fixos

  const metadata = {
    title: "Portfólio de Desenvolvimento Web",
    description: "Descrição do portfólio",
    ogTitle: "Portfólio de Desenvolvimento Web",
    ogDescription: "Descrição do portfólio",
    ogImage: "https://link-da-imagem.jpg",
    url: "https://meuportfolio.com/projetos",
  };

  return {
    props: { metadata }, // Passa os dados para o componente como props
  };
}

export default Projetos;`}
        </CodeBlockF0F0F0>

        <Paragraph><Bold>Vantagens de getStaticProps:</Bold></Paragraph>
        <List style={{ paddingLeft: '20px' }}>
          <li>A página é gerada apenas uma vez durante o build (não há renderização dinâmica no momento de acesso).</li>
          <li>As páginas são extremamente rápidas para carregar, pois já estão geradas e prontas para serem entregues aos usuários.</li>
        </List>

        <Paragraph><Bold>Quando usar:</Bold></Paragraph>
        <List style={{ paddingLeft: '20px' }}>
          <li>Quando o conteúdo não muda com frequência (por exemplo, descrições ou metatags fixas).</li>
          <li>Quando você não precisa de dados que variam a cada solicitação do usuário.</li>
        </List>
      </Container>

      <Container>
        <SectionTitle>1.1 Cenários onde você usaria getStaticProps</SectionTitle>

        <Paragraph>
          Com getStaticProps:
        </Paragraph>

        <Paragraph>
          Se o conteúdo descritivo ou meta-informações (como o título, descrição ou destaques do projeto) forem armazenados em um CMS (como Strapi ou Sanity) ou em uma API, você poderia usar getStaticProps para buscar os dados na build e construir a página.
        </Paragraph>

        <CodeBlockF0F0F0>
          {`export async function getStaticProps() {

  const response = await fetch("https://api.example.com/project-data");
  const projectData = await response.json();

  return {
    props: {
      projectData,
    },
    revalidate: 60, // Atualiza os dados a cada 60 segundos
  };
}`}
        </CodeBlockF0F0F0>
      </Container>

      <Container>
        <SectionTitle>2. getServerSideProps (Renderização no Lado do Servidor)</SectionTitle>

        <Paragraph>
          getServerSideProps é usado quando você precisa de dados dinâmicos que são gerados a cada requisição, ou seja, sempre que a página for carregada. Isso é útil se as metatags, por exemplo, dependerem de parâmetros dinâmicos ou de dados que mudam frequentemente (como informações de usuários ou dados em tempo real).
        </Paragraph>

        <Paragraph><Bold>Como usar:</Bold></Paragraph>
        <Paragraph>
          Se as informações das metatags ou o conteúdo da página precisam ser dinâmicas e geradas a cada requisição (por exemplo, metatags personalizadas para cada usuário ou página), use getServerSideProps.
        </Paragraph>

        <CodeBlockF0F0F0>
          {`import Head from "next/head";

const Projetos = ({ metadata }) => {

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.ogTitle} />
        <meta property="og:description" content={metadata.ogDescription} />
        <meta property="og:image" content={metadata.ogImage} />
        <meta property="og:url" content={metadata.url} />
      </Head>

      <div style={{ display: "flex" }}>
        {/* Seu conteúdo */}
      </div>
    </>
  );
};`}
        </CodeBlockF0F0F0>

        <CodeBlockF0F0F0>
          {`// Usado para carregar dados sempre que a página for acessada

export async function getServerSideProps() {

  // Aqui você pode buscar dados dinâmicos de uma API ou banco de dados

  const metadata = {
    title: "Portfólio de Desenvolvimento Web",
    description: "Descrição atualizada do portfólio",
    ogTitle: "Portfólio de Desenvolvimento Web",
    ogDescription: "Descrição atualizada do portfólio",
    ogImage: "https://link-da-imagem.jpg",
    url: "https://meuportfolio.com/projetos",
  };

  return {
    props: { metadata }, // Passa os dados para o componente como props
  };
}

export default Projetos;`}
        </CodeBlockF0F0F0>

        <Paragraph><Bold>Vantagens de getServerSideProps:</Bold></Paragraph>
        <List style={{ paddingLeft: '20px' }}>
          <li>Gera conteúdo dinâmico sempre que a página é acessada.</li>
          <li>Ideal para casos onde as informações podem mudar frequentemente e precisam ser sempre atualizadas.</li>
        </List>

        <Paragraph><Bold>Quando usar:</Bold></Paragraph>
        <List style={{ paddingLeft: '20px' }}>
          <li>Quando você precisa gerar conteúdo dinâmico, baseado em dados de um banco de dados ou API, em cada requisição.</li>
          <li>Para páginas com conteúdo que muda frequentemente e que não pode ser gerado apenas na construção.</li>
        </List>
      </Container>

      <Container>
        <SectionTitle>2.2 Cenários onde você usaria getServerSideProps</SectionTitle>

        <Paragraph>
          Com getServerSideProps:
        </Paragraph>

        <Paragraph>
          Caso o conteúdo dependa de informações dinâmicas do usuário ou precise de atualizações frequentes (exemplo: autenticação ou parâmetros dinâmicos na URL), você poderia usar getServerSideProps.
        </Paragraph>

        <CodeBlockF0F0F0>
          {`export async function getServerSideProps(context) {

  const { params, req } = context;
  const response = await fetch(\`https://api.example.com/data?id=\${params.id}\`, {
    headers: { Authorization: \`Bearer \${req.cookies.token}\` },
  });
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
}`}
        </CodeBlockF0F0F0>
      </Container>

      <Container>
        <SectionTitle>
          <Check>📌</Check> Resumo
        </SectionTitle>

        <div>
          <Bold>getStaticProps:</Bold>
          <Paragraph>
            Ideal para dados estáticos ou que mudam raramente.
            <br />
            A página é pré-gerada no build e pode ser entregue rapidamente aos usuários.
          </Paragraph>
        </div>

        <Separator />

        <div>
          <Bold>getServerSideProps:</Bold>
          <Paragraph>
            Ideal para dados dinâmicos que precisam ser atualizados a cada requisição.
            <br />
            A página é gerada no servidor, a cada solicitação, o que pode aumentar o tempo de resposta.
          </Paragraph>
        </div>

        <Separator />

        <div>
          <Bold>Resumo geral:</Bold>
          <Paragraph>
            Se as metatags e os dados não mudam frequentemente, use getStaticProps para gerar a página de forma estática e mais rápida.
            <br />
            Se você precisa de dados que mudam frequentemente ou variam com base na requisição (como dados do usuário ou parâmetros dinâmicos), use getServerSideProps.
            <br />
            Isso ajudará a garantir que o conteúdo do {'<head>'}, como as metatags, seja sempre gerado corretamente e otimizado para SEO.
          </Paragraph>
        </div>
      </Container>
    </>
  );
};

export default FrontendTecnologiasNextjs;
