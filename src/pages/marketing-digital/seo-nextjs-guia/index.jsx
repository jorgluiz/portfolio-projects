import Head from "next/head";
import { useGlobalState } from "../../../context/GlobalStateContext";
import {
  Container,
  SectionTitle,
  Subtitle,
  Paragraph,
  List,
  Link,
  VideoYouTube,
  CodeContainer
} from "@/styles/globalStyles";

import { MainLayout } from "@/components/layout/mainLayout";
import SideBarLayout from "@/components/layout/sideBarLayout";
import HeaderLayout from "@/components/layout/headerLayout";
import MainContentLayout from "@/components/layout/contentLayout";
import Overlay from "@/components/overlay";
import CodeBlock from '@/components/codeBlock';
import VoltarParaTopo from "@/components/backToTop";

const SEOParaNextJs = () => {
  const { isLoaded, isHamburguerOpen, setIsHamburguerOpen } = useGlobalState();

  const handleOverlayClick = () => setIsHamburguerOpen(false);

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Como garantir que seu projeto Next.js seja encontrado no Google | SEO para Next.js</title>
        <meta
          name="description"
          content="Guia completo para otimizar seu projeto Next.js para SEO e garantir que seja encontrado pelos motores de busca, incluindo integração com Google Search Console, sitemap, e robots.txt."
        />
        <meta
          name="keywords"
          content="Next.js, SEO, Google Search Console, sitemap, robots.txt, otimização SEO, indexação, desenvolvimento web"
        />menu-secreto/seo-nextjs-guia
        <meta name="author" content="Jorge Luiz" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:site_name" content="https://portfolio-projects-production.up.railway.app" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://portfolio-projects-production.up.railway.app/menu-secreto/seo-nextjs-guia" />
        <meta property="og:title" content="Portfólio de Projetos | Desenvolvedor Full Stack com React, Next.js e Node.js" />
        <meta property="og:description" content="Conheça meu portfólio de projetos de desenvolvimento web! Trabalho com tecnologias como ReactJS, NextJS, Node.js e muito mais." />
        <meta property="og:image" content="https://portfolio-projects-production.up.railway.app/perfil.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://portfolio-projects-production.up.railway.app/menu-secreto/seo-nextjs-guia" />
        <meta property="twitter:title" content="Portfólio de Projetos | Desenvolvedor Full Stack com React, Next.js e Node.js" />
        <meta property="twitter:description" content="Olá! Eu sou Jorge Luiz, desenvolvedor web especializado em frontend com ReactJS, NextJS e backend com Node.js. Explore meus projetos de sites modernos e aplicações robustas." />
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
                <div>
                  <Container>
                    <SectionTitle>Como garantir que seu projeto Next.js seja encontrado no Google 1/2</SectionTitle>

                    <Paragraph>
                      Para que seu projeto Next.js apareça nos resultados do Google, ele precisa estar otimizado para <strong>SEO</strong> e <strong>indexável</strong> pelos motores de busca. Além de usar boas meta tags, é essencial seguir algumas etapas para garantir que o Google consiga rastrear, indexar e exibir corretamente seu site.
                    </Paragraph>

                    <Subtitle>1. Verifique se seu site está público</Subtitle>
                    <Paragraph>
                      Se você estiver hospedando no Railway, assegure-se de que o domínio gerado (exemplo:{" "}
                      <Link href="https://portfolio-projects-production.up.railway.app" target="_blank" rel="noopener noreferrer">
                        https://portfolio-projects-production.up.railway.app
                      </Link>
                      ) esteja acessível sem autenticação.
                    </Paragraph>
                    <Paragraph>Além disso:</Paragraph>
                    <List>
                      <li>Certifique-se de não estar bloqueando rastreadores com um robots.txt mal configurado.</li>
                      <li>Evite usar headers ou configurações que restrinjam o acesso público ao site.</li>
                    </List>

                    <Subtitle>2. Adicione um arquivo robots.txt</Subtitle>
                    <Paragraph>O arquivo robots.txt orienta os motores de busca sobre quais páginas devem ou não ser rastreadas.</Paragraph>
                    <Paragraph>Passos:</Paragraph>
                    <List>
                      <li>Crie um arquivo <strong>robots.txt</strong> na pasta <strong>public</strong> do seu projeto.</li>
                      <li>Use este conteúdo básico para liberar o rastreamento:
                        <CodeBlock language="javascript">
                          {`User-agent: *
Allow: /
Sitemap: https://portfolio-projects-production.up.railway.app/sitemap.xml`}
                        </CodeBlock>
                      </li>
                    </List>
                    <Subtitle>3. Gere e configure um Sitemap</Subtitle>
                    <Paragraph>
                      O sitemap ajuda o Google a entender a estrutura do seu site e localizar todas as páginas relevantes.
                    </Paragraph>
                    <Paragraph>Passos:</Paragraph>
                    <List>
                      <li style={{ marginBottom: "20px" }}>
                        Instale o pacote
                        <CodeBlock language="javascript">
                          next-sitemap
                        </CodeBlock>
                      </li>
                      <li style={{ marginBottom: "10px" }}>
                        <CodeBlock language="javascript">
                          {`npm install next-sitemap
# ou
yarn add next-sitemap`}
                        </CodeBlock>
                      </li>
                      <li>Crie o arquivo <strong>next-sitemap.config.js</strong> na raiz do projeto com o seguinte conteúdo:
                        <CodeBlock language="javascript">
                          {`/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://portfolio-projects-production.up.railway.app', // Seu domínio
  generateRobotsTxt: true, // Gera automaticamente o robots.txt
  sitemapSize: 5000,
};

module.exports = config;`}
                        </CodeBlock>
                      </li>
                      <li>Gere o sitemap executando:
                        <CodeBlock language="javascript">
                          npx next-sitemap
                        </CodeBlock>
                        Isso criará automaticamente o <strong>sitemap.xml</strong> (e o <strong>robots.txt</strong>, se configurado) na pasta public.
                      </li>
                    </List>

                    <Paragraph>
                      O Google usará esse sitemap para rastrear suas páginas.
                    </Paragraph>
                  </Container>
                </div>

                <div>
                  <Container>
                    <SectionTitle>
                      Passo a passo para configurar o Google Search Console no seu projeto Next.js 2/2
                    </SectionTitle>

                    <Subtitle>1. Acesse o Google Search Console</Subtitle>
                    <Paragraph>
                      <Link
                        href="https://search.google.com/search-console/about"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://search.google.com/search-console/about
                      </Link>
                    </Paragraph>

                    <Subtitle>2. Adicione sua propriedade (domínio)</Subtitle>
                    <Paragraph>
                      Clique em <strong>Adicionar Propriedade</strong>. Insira o domínio do seu site, por exemplo:
                      <br />
                      <CodeBlock language="javascript">
                        {`https://portfolio-projects-production.up.railway.app`}
                      </CodeBlock>
                    </Paragraph>

                    <Subtitle>3. Verificar propriedade</Subtitle>
                    <Paragraph>Você pode verificar de duas formas principais:</Paragraph>

                    <Subtitle>a) Upload do arquivo HTML</Subtitle>

                    <Paragraph>Baixe o arquivo de verificação fornecido pelo Search Console.</Paragraph>
                    <Paragraph>Faça upload do arquivo na raiz do seu projeto para que fique acessível em:</Paragraph>
                    <CodeBlock language="javascript">
                      {`https://seusite.com/googleXXXX.html`}
                    </CodeBlock>
                    <Subtitle>b) Tag HTML</Subtitle>
                    <Paragraph>
                      Copie a meta tag que o Search Console fornecer, por exemplo:
                    </Paragraph>
                    <CodeBlock language="javascript">
                      {`<meta name="google-site-verification" content="SEU_CODIGO_DE_VERIFICACAO" />`}
                    </CodeBlock>
                    <Paragraph>
                      Cole essa meta tag na seção {`<Head>`} da <strong>página inicial</strong> do seu site Ex: em pages/index.jsx no Next.js:
                    </Paragraph>
                    <CodeBlock language="html">
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
                    </CodeBlock>
                    <Paragraph>
                      Após adicionar a meta tag, crie um commit e suba as alterações para o seu repositório Git.
                      <br />
                      Em seguida, volte ao Google Search Console e clique em <strong>Verificar</strong>.
                    </Paragraph>
                    <Paragraph>

                    </Paragraph>

                    <Subtitle>4. Adicionar sitemap para mapear suas rotas</Subtitle>
                    <Paragraph>
                      Acesse a página de sitemaps do Search Console do seu site:
                      <br />
                      <Link
                        href="https://search.google.com/search-console/sitemaps?resource_id=https%3A%2F%2Fportfolio-projects-production.up.railway.app%2F"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://search.google.com/search-console/sitemaps?resource_id=SEU_DOMINIO
                      </Link>
                    </Paragraph>
                    <Paragraph>
                      Na pasta public do seu projeto, normalmente estão os arquivos <strong>sitemap.xml </strong>e <strong>sitemap-0.xml</strong>. Adicione as URLs dos sitemaps, por exemplo:
                    </Paragraph>
                    <CodeBlock language="javascript">
                      {`https://portfolio-projects-production.up.railway.app/sitemap.xml  
https://portfolio-projects-production.up.railway.app/sitemap-0.xml`}
                    </CodeBlock>
                    <Paragraph>Clique em <strong>Enviar</strong>.</Paragraph>

                    <Subtitle>Observação importante</Subtitle>
                    <Paragraph>
                      Garanta que a meta tag esteja realmente no {`<Head>`} da página raiz (index.jsx) do Next.js, e não dentro do corpo do componente, para que o Google consiga encontrá-la na fonte da página.
                    </Paragraph>
                  </Container>
                </div>

                <div>
                  <Container>
                    <Subtitle>⚠️ <strong>Observação importante</strong> sobre sitemap</Subtitle>
                    <Paragraph>
                      Ao executar o comando <strong>npx next-sitemap</strong>, serão gerados os arquivos <strong>sitemap.xml</strong> e <strong>sitemap-0.xml</strong>.
                    </Paragraph>
                    <Paragraph>
                      Por exemplo, se você já mapeou as rotas e adicionou novas páginas no projeto, é necessário gerar novamente o arquivo <strong>sitemap-0.xml</strong> para atualizar as rotas no{" "}
                      <Link href="https://search.google.com/search-console" target="_blank" rel="noopener noreferrer">
                        <strong>Google Search Console</strong>
                      </Link>.
                    </Paragraph>
                    <Paragraph>
                      <strong>Importante:</strong> caso o arquivo <strong>sitemap-0.xml</strong> não contenha todas as <strong>rotas</strong>, siga estes passos para garantir a atualização correta:
                    </Paragraph>
                    <List as="ol">
                      <li>Delete a pasta <strong>.next</strong>.</li>
                      <li>Rode o comando <strong>yarn next build</strong> para reconstruir o projeto e atualizar as rotas.</li>
                      <li>Depois disso, execute o comando <strong>npx next-sitemap</strong> para gerar os arquivos de sitemap atualizados.</li>
                      <li>Suba todas as novas alterações e rotas para o seu repositório Git.</li>
                    </List>
                  </Container>
                </div>

                <VideoYouTube
                  style={{
                    position: "relative",
                    paddingBottom: "56.25%", // 16:9 aspect ratio
                    height: 0,
                    overflow: "hidden",
                    maxWidth: 900,
                    margin: "0 auto 40px",
                  }}
                >
                  <iframe
                    src="https://www.youtube.com/embed/qoAkHgfy7DQ"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Vídeo do YouTube"
                  />
                </VideoYouTube>
                <VoltarParaTopo></VoltarParaTopo>
              </CodeContainer>
            </MainContentLayout>
          </MainLayout >
        </>
      )}
    </>
  );
};

export default SEOParaNextJs;
