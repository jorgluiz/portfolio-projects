import Head from "next/head";
import { useGlobalState } from "../../../context/GlobalStateContext";

import { MainLayout } from "@/components/layout/mainLayout";
import SideBarLayout from "@/components/layout/sideBarLayout";
import HeaderLayout from "@/components/layout/headerLayout";
import MainContentLayout from "@/components/layout/contentLayout";
import Overlay from "@/components/overlay";

const SEOParaNextJs = () => {
  const { isLoaded, isHamburguerOpen, setIsHamburguerOpen } = useGlobalState();

  const handleOverlayClick = () => setIsHamburguerOpen(false);

  const container = {
    fontFamily: "Segoe UI, sans-serif",
    maxWidth: 900,
    margin: "0 auto 40px",
    padding: 15,
    backgroundColor: "#f9f9f9",
    color: "#222",
    borderRadius: 12,
    boxShadow: "0 0 20px rgba(0,0,0,0.05)",
    lineHeight: 1.5,
  };

  const sectionTitle = {
    fontSize: "24px",
    fontWeight: "700",
    marginBottom: "20px",
  };

  const subtitle = {
    fontSize: "20px",
    fontWeight: "600",
    marginTop: "24px",
    marginBottom: "12px",
    borderBottom: "2px solid #ddd",
    paddingBottom: "6px",
  };

  const paragraph = {
    fontSize: "16px",
    marginBottom: "12px",
  };

  const codeBlock = {
    backgroundColor: "#1e1e1e",
    color: "#f1f1f1",
    fontFamily: "monospace",
    borderRadius: "8px",
    whiteSpace: "pre-wrap",
    fontSize: "14px",
    marginBottom: "16px",
    overflowX: "auto",
  };

  const list = {
    paddingLeft: "20px",
    marginBottom: "12px",
  };

  const link = {
    color: "blue",
  };

  const boldText = {
    fontWeight: "bold",
  };

  return (
    <>
      <Head>
        <title>Como garantir que seu projeto Next.js seja encontrado no Google</title>
        <meta
          name="description"
          content="Guia completo para otimizar seu projeto Next.js para SEO e garantir que seja encontrado pelos motores de busca."
        />
      </Head>

      {!isLoaded ? null : (
        <>
          {isHamburguerOpen && <Overlay onClick={handleOverlayClick} />}
          <MainLayout>
            <SideBarLayout />
            <HeaderLayout />
            <MainContentLayout>
              <div>
                <div>
                  <div style={container}>
                    <div style={sectionTitle}>Como garantir que seu projeto Next.js seja encontrado no Google 1/2</div>

                    <p style={paragraph}>
                      Para que seu projeto Next.js apareça nos resultados do Google, ele precisa estar otimizado para <strong>SEO</strong> e <strong>indexável</strong> pelos motores de busca. Além de usar boas meta tags, é essencial seguir algumas etapas para garantir que o Google consiga rastrear, indexar e exibir corretamente seu site.
                    </p>

                    <div style={subtitle}>1. Verifique se seu site está público</div>
                    <p style={paragraph}>
                      Se você estiver hospedando no Railway, assegure-se de que o domínio gerado (exemplo:{" "}
                      <a style={link} href="https://portfolio-projects-production.up.railway.app" target="_blank" rel="noopener noreferrer">
                        https://portfolio-projects-production.up.railway.app
                      </a>
                      ) esteja acessível sem autenticação.
                    </p>
                    <p style={paragraph}>
                      Além disso:
                    </p>
                    <ul style={list}>
                      <li>Certifique-se de não estar bloqueando rastreadores com um robots.txt mal configurado.</li>
                      <li>Evite usar headers ou configurações que restrinjam o acesso público ao site.</li>
                    </ul>

                    <div style={subtitle}>2. Adicione um arquivo robots.txt</div>
                    <p style={paragraph}>
                      O arquivo robots.txt orienta os motores de busca sobre quais páginas devem ou não ser rastreadas.
                    </p>
                    <p style={paragraph}>Passos:</p>
                    <ul style={list}>
                      <li>Crie um arquivo <strong>robots.txt</strong> na pasta <strong>public</strong> do seu projeto.</li>
                      <li>Use este conteúdo básico para liberar o rastreamento:
                        <pre style={codeBlock}>
                          {`User-agent: *
Allow: /
Sitemap: https://portfolio-projects-production.up.railway.app/sitemap.xml`}
                        </pre>
                      </li>
                    </ul>

                    <div style={subtitle}>3. Gere e configure um Sitemap</div>
                    <p style={paragraph}>
                      O sitemap ajuda o Google a entender a estrutura do seu site e localizar todas as páginas relevantes.
                    </p>
                    <p style={paragraph}>Passos:</p>
                    <ul style={list}>
                      <li>Instale o pacote <code>next-sitemap</code>:
                        <pre style={codeBlock}>
                          {`npm install next-sitemap
# ou
yarn add next-sitemap`}
                        </pre>
                      </li>
                      <li>Crie o arquivo <strong>next-sitemap.config.js</strong> na raiz do projeto com o seguinte conteúdo:
                        <pre style={codeBlock}>
                          {`/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://portfolio-projects-production.up.railway.app', // Seu domínio
  generateRobotsTxt: true, // Gera automaticamente o robots.txt
  sitemapSize: 5000,
};

module.exports = config;`}
                        </pre>
                      </li>
                      <li>Gere o sitemap executando:
                        <pre style={codeBlock}>
                          {`npx next-sitemap`}
                        </pre>
                        Isso criará automaticamente o <strong>sitemap.xml</strong> (e o <strong>robots.txt</strong>, se configurado) na pasta public.
                      </li>
                    </ul>

                    <p style={paragraph}>
                      O Google usará esse sitemap para rastrear suas páginas.
                    </p>
                  </div>
                </div>

                <div style={container}>
                  <div style={sectionTitle}>
                    Passo a passo para configurar o Google Search Console no seu projeto Next.js 2/2
                  </div>

                  <div style={subtitle}>1. Acesse o Google Search Console</div>
                  <p style={paragraph}>
                    <a
                      style={link}
                      href="https://search.google.com/search-console/about"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://search.google.com/search-console/about
                    </a>
                  </p>

                  <div style={subtitle}>2. Adicione sua propriedade (domínio)</div>
                  <p style={paragraph}>
                    Clique em <strong>Adicionar Propriedade</strong>. Insira o domínio do seu site, por exemplo:
                    <br />
                    <code>https://portfolio-projects-production.up.railway.app</code>
                  </p>

                  <div style={subtitle}>3. Verifique a propriedade</div>
                  <p style={paragraph}>
                    Você pode verificar de duas formas principais:
                  </p>

                  <div style={subtitle}>a) Upload do arquivo HTML</div>
                  <ul style={list}>
                    <li>Baixe o arquivo de verificação fornecido pelo Search Console.</li>
                    <li>Faça upload do arquivo na raiz do seu projeto para que fique acessível em:
                      <br />
                      <code>https://seusite.com/googleXXXX.html</code>
                    </li>
                  </ul>

                  <div style={subtitle}>b) Meta tag de verificação</div>
                  <p style={paragraph}>
                    Copie a meta tag que o Search Console fornecer, por exemplo:
                  </p>
                  <pre style={codeBlock}>
                    {`<meta name="google-site-verification" content="SEU_CODIGO_DE_VERIFICACAO" />`}
                  </pre>
                  <p style={paragraph}>
                    Cole essa meta tag na seção <code>{`<Head>`}</code> da página inicial do seu site (ex: em <code>pages/index.jsx</code> no Next.js):
                  </p>

                  <pre style={codeBlock}>
                    {`import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <meta name="google-site-verification" content="SEU_CODIGO_DE_VERIFICACAO" />
      </Head>
      {/* resto do componente */}
    </>
  )
}`}
                  </pre>

                  <p style={paragraph}>
                    Após adicionar, volte ao Search Console e clique em <strong>Verificar</strong>.
                  </p>

                  <div style={subtitle}>4. Adicionar sitemap para mapear suas rotas</div>
                  <p style={paragraph}>
                    Acesse a página de sitemaps do Search Console do seu site:
                    <br />
                    <a
                      style={link}
                      href="https://search.google.com/search-console/sitemaps?resource_id=SEU_DOMINIO"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://search.google.com/search-console/sitemaps?resource_id=SEU_DOMINIO
                    </a>
                  </p>
                  <p style={paragraph}>
                    Na pasta <code>public</code> do seu projeto, normalmente estão os arquivos <code>sitemap.xml</code> e <code>sitemap-0.xml</code>. Adicione as URLs dos sitemaps, por exemplo:
                  </p>
                  <pre style={codeBlock}>
                    {`https://portfolio-projects-production.up.railway.app/sitemap.xml  
https://portfolio-projects-production.up.railway.app/sitemap-0.xml`}
                  </pre>
                  <p style={paragraph}>Clique em <strong>Enviar</strong>.</p>

                  <div style={subtitle}>Observação importante</div>
                  <p style={paragraph}>
                    Garanta que a meta tag esteja realmente no <code>{`<Head>`}</code> da página raiz (<code>index.jsx</code>) do Next.js, e não dentro do corpo do componente, para que o Google consiga encontrá-la na fonte da página.
                  </p>
                </div>

                <div style={container}>
                  <div style={subtitle}>⚠️ <strong>Observação importante</strong> sobre sitemap</div>
                  <p style={paragraph}>
                    Ao executar o comando <code><strong>npx next-sitemap</strong></code>, serão gerados os arquivos <code><strong>sitemap.xml</strong></code> e <code><strong>sitemap-0.xml</strong></code>.
                  </p>
                  <p style={paragraph}>
                    Por exemplo, se você já mapeou as rotas e adicionou novas páginas no projeto, é necessário gerar novamente o arquivo <code><strong>sitemap-0.xml</strong></code> para atualizar as rotas no{" "}
                    <a style={link} href="https://search.google.com/search-console" target="_blank" rel="noopener noreferrer">
                      <strong>Google Search Console</strong>
                    </a>.
                  </p>
                  <p style={paragraph}>
                    <strong>Importante:</strong> caso o arquivo <code><strong>sitemap-0.xml</strong></code> não contenha todas as <strong>rotas</strong>, siga estes passos para garantir a atualização correta:
                  </p>
                  <ol style={list}>
                    <li>Delete a pasta <code><strong>.next</strong></code>.</li>
                    <li>Rode o comando <code><strong>yarn next build</strong></code> para reconstruir o projeto e atualizar as rotas.</li>
                    <li>Depois disso, execute o comando <code><strong>npx next-sitemap</strong></code> para gerar os arquivos de sitemap atualizados.</li>
                    <li>Suba todas as novas alterações e rotas para o seu repositório Git.</li>
                  </ol>
                </div>

              </div>
            </MainContentLayout>
          </MainLayout>
        </>
      )}
    </>
  );
};

export default SEOParaNextJs;
