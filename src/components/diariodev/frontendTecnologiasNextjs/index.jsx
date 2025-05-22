const FrontendTecnologiasNextjs = () => {
  const container = {
    fontFamily: 'Segoe UI, sans-serif',
    padding: '24px',
    maxWidth: '900px',
    margin: '0 auto 40px',
    color: '#222',
    backgroundColor: '#f9f9f9',
    borderRadius: '12px',
    boxShadow: '0 0 20px rgba(0,0,0,0.05)'
  };

  const sectionTitle = {
    fontSize: '24px',
    fontWeight: '700',
    marginBottom: '12px',
    display: 'flex',
    alignItems: 'center'
  };

  const check = {
    color: '#2ecc71',
    fontSize: '20px',
    marginRight: '8px'
  };

  const itemTitle = {
    fontSize: '18px',
    fontWeight: '600',
    margin: '20px 0 8px 0',
    borderBottom: '2px solid #ddd',
    paddingBottom: '4px'
  };

  const list = {
    paddingLeft: '20px',
    marginBottom: '12px',
    lineHeight: '1.6'
  };

  const container1 = {
    backgroundColor: '#f9f9f9',
    fontFamily: 'Segoe UI, sans-serif',
    padding: '32px',
    borderRadius: '12px',
    maxWidth: '800px',
    margin: '0 auto 40px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    color: '#222'
  };

  const title1 = {
    fontSize: '24px',
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '24px',
  };

  const check1 = {
    fontSize: '22px',
    color: '#27ae60',
    marginRight: '10px',
  };

  const paragraph = {
    fontSize: '16px',
    lineHeight: '1.7',
    marginBottom: '12px'
  };

  const codeBlock1 = {
    backgroundColor: '#1e1e1e',
    color: '#f1f1f1',
    fontFamily: 'monospace',
    padding: '20px',
    borderRadius: '10px',
    whiteSpace: 'pre',
    fontSize: '15px',
    overflowX: 'auto',
    lineHeight: '1.6',
  };

  const label1 = {
    display: 'inline-block',
    backgroundColor: '#d1ecf1',
    color: '#0c5460',
    fontWeight: '600',
    fontSize: '14px',
    padding: '4px 8px',
    borderRadius: '6px',
    marginBottom: '12px',
  };

  const codeBlock = {
    backgroundColor: '#1e1e1e',
    color: '#f1f1f1',
    fontFamily: 'monospace',
    padding: '16px',
    borderRadius: '8px',
    whiteSpace: 'pre',
    fontSize: '14px',
    overflowX: 'auto',
    marginBottom: '20px',
    boxShadow: 'inset 0 0 5px rgba(0,0,0,0.7)'
  };

  const separator = {
    borderTop: '1px solid #ccc',
    margin: '20px 0',
  };

  const bold = {
    fontWeight: '600',
  };


  return (
    <>
      <div style={container}>
        <div style={sectionTitle}>
          <span style={check}>🚀</span> Quando usar Next.js no frontend?
        </div>
        <p style={paragraph}><strong>O que é Next.js?</strong></p>
        <p style={paragraph}>Framework React com foco em renderização híbrida (SSR, SSG e CSR).</p>
        <p style={paragraph}>Suporta rotas automáticas baseadas no sistema de arquivos.</p>
        <p style={paragraph}>Vem com várias otimizações embutidas: roteamento, otimização de imagens, geração de sites estáticos, API Routes etc.</p>
      </div>

      <div style={container}>
        <div style={sectionTitle}>
          <span style={check}>⏰</span> Quando usar Next.js?
        </div>
        <ul style={list}>
          <li><strong>SEO é importante</strong><br />
            Apps que precisam ser bem indexados por motores de busca (Google etc) — pois Next.js permite Server-Side Rendering (SSR) e Static Site Generation (SSG), melhorando o SEO.
          </li>
          <li><strong>Performance de carregamento inicial</strong><br />
            SSR e SSG melhoram o tempo de carregamento da página inicial porque o HTML já vem pré-renderizado do servidor.
          </li>
          <li><strong>Sites com conteúdo dinâmico e/ou estático misturado</strong><br />
            Você pode gerar páginas estáticas para conteúdo fixo e usar SSR para páginas que precisam ser atualizadas a cada requisição.
          </li>
          <li><strong>Apps que precisam de rotas API simples integradas</strong><br />
            Next.js permite criar APIs dentro do próprio projeto, útil para micro-serviços ou pequenas integrações sem backend separado.
          </li>
          <li><strong>Melhor experiência de desenvolvimento com roteamento automático</strong><br />
            Estrutura de pastas simples, menos configuração manual.
          </li>
          <li><strong>Projetos onde o SEO, performance e UX são prioridade</strong><br />
            Ex: lojas online, blogs, portais de notícias, dashboards públicos.
          </li>
        </ul>
      </div>

      <div style={container1}>
        <div style={title1}>
          <span style={check1}>⚙️</span> Quando não usar Next.js?
        </div>

        <p style={paragraph}>
          App muito simples ou SPA puramente cliente, onde SSR/SSG não faz diferença.
        </p>
        <p style={paragraph}>
          Projetos 100% backend ou APIs (Next.js tem API Routes, mas não substitui um backend robusto).
        </p>
        <p style={paragraph}>
          Quando você já tem um backend separado e quer uma frontend SPA isolada, sem renderização no servidor.
        </p>
        <p style={paragraph}>
          Projetos onde a equipe não tem familiaridade com SSR/SSG e prefere algo mais simples (React puro com CRA ou Vite).
        </p>
      </div>

      <div style={container1}>
        <div style={title1}>
          <span style={check1}>🚩</span> Principais vantagens do Next.js
        </div>
        <ul style={list}>
          <li>SSR (Server-Side Rendering)</li>
          <li>SSG (Static Site Generation)</li>
          <li>Incremental Static Regeneration (ISR) — atualiza páginas estáticas em background sem rebuild completo.</li>
          <li>API Routes — endpoints backend dentro do Next.js.</li>
          <li>Image Optimization — otimização automática de imagens.</li>
          <li>Built-in CSS & Sass support</li>
          <li>Suporte para middleware</li>
          <li>Rotas dinâmicas fáceis</li>
        </ul>
      </div>

      <div style={container1}>
        <div style={title1}>
          <span style={check1}>📁</span> Estrutura básica típica Next.js
        </div>

        <div style={label1}>kotlin</div>

        <pre style={codeBlock1}>
          {`/pages               <- cada arquivo vira uma rota
  /api               <- API routes (funções backend)
  index.tsx          <- página principal
  about.tsx          <- página about

/public              <- arquivos estáticos (imagens, favicon, etc)

/components          <- componentes React reutilizáveis
/styles              <- estilos globais, CSS Modules, etc.`}
        </pre>
      </div>

      <div style={container}>
        <div style={sectionTitle}>getStaticProps (Geração Estática)</div>

        <p style={paragraph}><strong>Objetivo:</strong> É usado para gerar páginas de forma estática no momento da construção (build), ou seja, os dados são buscados e renderizados antes de o site ser servido ao usuário.</p>
        <p style={paragraph}><strong>Quando usar:</strong> Quando os dados da página não mudam frequentemente ou podem ser atualizados apenas em intervalos específicos.</p>
        <p style={paragraph}><strong>Como funciona:</strong></p>
        <ul style={{ ...paragraph, paddingLeft: '20px' }}>
          <li>Execução no momento da construção: Durante o build do Next.js, o getStaticProps é chamado, e a página gerada é salva como uma versão estática. Isso significa que o conteúdo já está pronto e pode ser entregue rapidamente aos usuários.</li>
          <li>Exemplo de uso: Páginas de blog, portfólios ou catálogos de produtos que não requerem dados atualizados constantemente.</li>
        </ul>

        <pre style={codeBlock}>
          {`export async function getStaticProps() {
  const data = await fetch('https://api.example.com/data');
  const json = await data.json();

  return {
    props: {
      data: json,
    },
  };
}`}
        </pre>

        <hr style={{ margin: '30px 0' }} />

        <div style={sectionTitle}>getServerSideProps (Renderização no Lado do Servidor)</div>

        <p style={paragraph}><strong>Objetivo:</strong> Ele é usado para buscar e renderizar dados dinâmicos no momento da requisição, ou seja, a página é gerada sempre que o usuário acessa a página.</p>
        <p style={paragraph}><strong>Quando usar:</strong> Quando os dados precisam ser sempre atualizados ou quando dependem de variáveis como cookies, autenticação ou outras condições que mudam com o tempo.</p>
        <p style={paragraph}><strong>Como funciona:</strong></p>
        <ul style={{ ...paragraph, paddingLeft: '20px' }}>
          <li>Execução a cada requisição: Sempre que uma requisição é feita para a página, o getServerSideProps é executado no servidor, buscando os dados mais recentes e gerando a página em tempo real.</li>
          <li>Exemplo de uso: Páginas de dashboards, feeds de redes sociais ou outras páginas com dados atualizados frequentemente.</li>
        </ul>

        <pre style={codeBlock}>
          {`export async function getServerSideProps(context) {
  const res = await fetch('https://api.example.com/dynamic-data');
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}`}
        </pre>

        <hr style={{ margin: '30px 0' }} />

        <div style={sectionTitle}>Diferenças principais:</div>
        <ul style={paragraph}>
          <li><strong>getStaticProps:</strong> A página é gerada no momento da construção (build) e serve para conteúdo que não muda com frequência.</li>
          <li><strong>getServerSideProps:</strong> A página é gerada a cada requisição feita ao servidor, garantindo que o conteúdo esteja sempre atualizado com dados dinâmicos.</li>
        </ul>

        <div style={sectionTitle}>Quando escolher um ou outro:</div>
        <ul style={paragraph}>
          <li><strong>getStaticProps:</strong> Ideal para conteúdo que não muda frequentemente ou pode ser regenerado em intervalos específicos (como em blogs ou catálogos de produtos).</li>
          <li><strong>getServerSideProps:</strong> Útil quando é necessário garantir que os dados mais recentes sejam carregados a cada acesso, especialmente quando o conteúdo depende de fatores variáveis como a hora ou estado do usuário.</li>
        </ul>

        <div style={sectionTitle}>Resumindo:</div>
        <ul style={paragraph}>
          <li><strong>getStaticProps:</strong> Para dados estáticos, gerados no momento da construção (build).</li>
          <li><strong>getServerSideProps:</strong> Para dados dinâmicos, gerados a cada requisição no lado do servidor.</li>
        </ul>

        <p style={paragraph}>
          Se o seu projeto não exige dados dinâmicos (como conteúdo atualizado frequentemente ou personalizado para o usuário), o uso de <strong>getStaticProps</strong> é mais eficiente, pois gera páginas estáticas e proporciona uma performance melhor.
        </p>
      </div>

      <div style={container}>
        <div style={sectionTitle}>1. getStaticProps (Renderização Estática)</div>

        <p style={paragraph}>
          getStaticProps é utilizado quando você deseja gerar uma página de forma estática no momento da construção (build) do site.
          Ele permite que você pré-renderize páginas com dados que não mudam com frequência. Usar getStaticProps é útil para gerar páginas de conteúdo fixo ou quase fixo.
        </p>

        <p style={paragraph}><strong>Como usar:</strong></p>
        <p style={paragraph}>
          No caso da página de projetos, se as informações das metatags (como título, descrição, etc.) são estáticas ou mudam muito raramente, você pode usar getStaticProps.
        </p>

        <pre style={codeBlock}>
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
        </pre>

        <p style={paragraph}><strong>Vantagens de getStaticProps:</strong></p>
        <ul style={{ ...paragraph, paddingLeft: '20px' }}>
          <li>A página é gerada apenas uma vez durante o build (não há renderização dinâmica no momento de acesso).</li>
          <li>As páginas são extremamente rápidas para carregar, pois já estão geradas e prontas para serem entregues aos usuários.</li>
        </ul>

        <p style={paragraph}><strong>Quando usar:</strong></p>
        <ul style={{ ...paragraph, paddingLeft: '20px' }}>
          <li>Quando o conteúdo não muda com frequência (por exemplo, descrições ou metatags fixas).</li>
          <li>Quando você não precisa de dados que variam a cada solicitação do usuário.</li>
        </ul>
      </div>

      <div style={container}>
        <div style={sectionTitle}>1.1 Cenários onde você usaria getStaticProps</div>

        <p style={paragraph}>
          Com getStaticProps:
        </p>

        <p style={paragraph}>
          Se o conteúdo descritivo ou meta-informações (como o título, descrição ou destaques do projeto) forem armazenados em um CMS (como Strapi ou Sanity) ou em uma API, você poderia usar getStaticProps para buscar os dados na build e construir a página.
        </p>

        <pre style={codeBlock}>
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
        </pre>
      </div>

      <div style={container}>
        <div style={sectionTitle}>2. getServerSideProps (Renderização no Lado do Servidor)</div>

        <p style={paragraph}>
          getServerSideProps é usado quando você precisa de dados dinâmicos que são gerados a cada requisição, ou seja, sempre que a página for carregada. Isso é útil se as metatags, por exemplo, dependerem de parâmetros dinâmicos ou de dados que mudam frequentemente (como informações de usuários ou dados em tempo real).
        </p>

        <p style={paragraph}><strong>Como usar:</strong></p>
        <p style={paragraph}>
          Se as informações das metatags ou o conteúdo da página precisam ser dinâmicas e geradas a cada requisição (por exemplo, metatags personalizadas para cada usuário ou página), use getServerSideProps.
        </p>

        <pre style={codeBlock}>
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
        </pre>

        <pre style={codeBlock}>
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
        </pre>

        <p style={paragraph}><strong>Vantagens de getServerSideProps:</strong></p>
        <ul style={{ ...paragraph, paddingLeft: '20px' }}>
          <li>Gera conteúdo dinâmico sempre que a página é acessada.</li>
          <li>Ideal para casos onde as informações podem mudar frequentemente e precisam ser sempre atualizadas.</li>
        </ul>

        <p style={paragraph}><strong>Quando usar:</strong></p>
        <ul style={{ ...paragraph, paddingLeft: '20px' }}>
          <li>Quando você precisa gerar conteúdo dinâmico, baseado em dados de um banco de dados ou API, em cada requisição.</li>
          <li>Para páginas com conteúdo que muda frequentemente e que não pode ser gerado apenas na construção.</li>
        </ul>
      </div>

      <div style={container}>
        <div style={sectionTitle}>2.2 Cenários onde você usaria getServerSideProps</div>

        <p style={paragraph}>
          Com getServerSideProps:
        </p>

        <p style={paragraph}>
          Caso o conteúdo dependa de informações dinâmicas do usuário ou precise de atualizações frequentes (exemplo: autenticação ou parâmetros dinâmicos na URL), você poderia usar getServerSideProps.
        </p>

        <pre style={codeBlock}>
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
        </pre>
      </div>

      <div style={container}>
        <div style={sectionTitle}>
          <span style={check}>📌</span> Resumo
        </div>

        <div>
          <div style={bold}>getStaticProps:</div>
          <p style={paragraph}>
            Ideal para dados estáticos ou que mudam raramente.
            <br />
            A página é pré-gerada no build e pode ser entregue rapidamente aos usuários.
          </p>
        </div>

        <div style={separator}></div>

        <div>
          <div style={bold}>getServerSideProps:</div>
          <p style={paragraph}>
            Ideal para dados dinâmicos que precisam ser atualizados a cada requisição.
            <br />
            A página é gerada no servidor, a cada solicitação, o que pode aumentar o tempo de resposta.
          </p>
        </div>

        <div style={separator}></div>

        <div>
          <div style={bold}>Resumo geral:</div>
          <p style={paragraph}>
            Se as metatags e os dados não mudam frequentemente, use getStaticProps para gerar a página de forma estática e mais rápida.
            <br />
            Se você precisa de dados que mudam frequentemente ou variam com base na requisição (como dados do usuário ou parâmetros dinâmicos), use getServerSideProps.
            <br />
            Isso ajudará a garantir que o conteúdo do {'<head>'}, como as metatags, seja sempre gerado corretamente e otimizado para SEO.
          </p>
        </div>
      </div>
    </>
  );
};


export default FrontendTecnologiasNextjs;