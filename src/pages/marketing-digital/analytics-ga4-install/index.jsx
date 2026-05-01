import { useEffect } from 'react';
import Head from "next/head";
import { useGlobalState } from "../../../context/GlobalStateContext";
import {
  Container,
  SectionTitle,
  Subtitle,
  Paragraph,
  List,
  Link,
  CodeContainer
  // BoldText removed
} from "@/styles/globalStyles";

import { MainLayout } from "@/components/layout/mainLayout";
import SideBarLayout from "@/components/layout/sideBarLayout";
import HeaderLayout from "@/components/layout/headerLayout";
import MainContentLayout from "@/components/layout/contentLayout";
import Overlay from "@/components/overlay";
import VoltarParaTopo from "@/components/backToTop";

import CodeBlock from '@/components/codeBlock';

const GA4NextJsIntegration = () => {
  const { isLoaded, isHamburguerOpen, setIsHamburguerOpen } = useGlobalState();
  const handleOverlayClick = () => setIsHamburguerOpen(false);


  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Passo a Passo: Integrar Google Analytics 4 (GA4) no Next.js | Guia Completo</title>
        <meta
          name="description"
          content="Guia completo para integrar o Google Analytics 4 (GA4) em projetos Next.js. Aprenda as melhores práticas de SEO, rastreamento e análise de dados para melhorar o desempenho do seu site."
        />
        <meta
          name="keywords"
          content="Google Analytics 4, GA4, Next.js, SEO, integração, análise de dados, rastreamento de usuários, Google Tag Manager"
        />
        <meta name="author" content="Jorge Luiz" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:site_name" content="https://portfolio-projects-production.up.railway.app" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://portfolio-projects-production.up.railway.app/menu-secreto/analytics-ga4-install" />
        <meta property="og:title" content="Portfólio de Projetos | Desenvolvedor Full Stack com React, Next.js e Node.js" />
        <meta property="og:description" content="Conheça meu portfólio de projetos de desenvolvimento web! Trabalho com tecnologias como ReactJS, NextJS, Node.js e muito mais." />
        <meta property="og:image" content="https://portfolio-projects-production.up.railway.app/perfil.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://portfolio-projects-production.up.railway.app/menu-secreto/analytics-ga4-install" />
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
                <Container>
                  <SectionTitle>
                    Passo a passo para integrar Google Analytics 4 (GA4) no Next.js
                  </SectionTitle>

                  <Subtitle>1. Criar Conta no Google Analytics</Subtitle>
                  <Paragraph>
                    Acesse{" "}
                    <Link
                      href="https://analytics.google.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      analytics.google.com
                    </Link>{" "}
                    e crie uma nova conta. Dê um nome à conta que identifique seu
                    negócio ou projeto.
                  </Paragraph>

                  <Subtitle>2. Criar Propriedade</Subtitle>
                  <List>
                    <li>Defina o nome da propriedade (ex: {'"Portfólio Jorge Luiz"'}).</li>
                    <li>Escolha país, fuso horário e moeda. Clique para avançar.</li>
                  </List>

                  <Subtitle>3. Descrever seu Negócio</Subtitle>
                  <List>
                    <li>Informe o setor (ex: Financeiro, Tecnologia, etc)</li>
                    <li>Tamanho da empresa (ex: 1 a 10 funcionários). Clique para continuar.</li>
                  </List>

                  <Subtitle>4. Escolher Objetivos de Negócio</Subtitle>
                  <List>
                    <li>
                      <strong>Gerar leads:</strong> Capturar contatos de potenciais
                      clientes interessados.
                    </li>
                    <li>
                      <strong>Impulsionar vendas</strong>: Aumentar a conversão e receita
                      do negócio.
                    </li>
                    <li>
                      <strong>Entender o tráfego da web</strong>: Analisar origem e
                      comportamento dos visitantes.
                    </li>
                    <li>
                      <strong>Ver engajamento e retenção</strong>: Monitorar a interação e
                      fidelização dos usuários.
                    </li>
                    <li>
                      <strong>Outros (se aplicável)</strong>: Definir metas específicas
                      conforme seu negócio.
                    </li>
                  </List>

                  <Subtitle>5. Começar a Coletar Dados</Subtitle>
                  <List>
                    <li><strong>Web</strong></li>
                    <li><strong>App Android</strong></li>
                    <li><strong>App iOS</strong></li>
                  </List>
                  <Paragraph>
                    Escolha a plataforma <strong>Web</strong> para sites e informe a URL do seu
                    site Ex: https://portfolio-projects-production.up.railway.app Dê um
                    nome para o fluxo de dados (ex: {'"Site Principal"'}) e crie o fluxo.
                  </Paragraph>

                  <Subtitle>6. Obter o Código de Rastreamento (gtag.js)</Subtitle>
                  <Paragraph>Após criar o fluxo, o Google gera um código como este:</Paragraph>
                  <pre>
                    <CodeBlock language="html">
                      {`<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-XXXXXXXXXX');
</script>`}
                    </CodeBlock>
                  </pre>

                  <Subtitle>7. Implementar no Next.js (arquivo _app.jsx)</Subtitle>
                  <Paragraph>Use o código abaixo para integrar o GA no seu Next.js:</Paragraph>
                  <pre>
                    <CodeBlock language="jsx">
                      {`import { useEffect } from 'react';
import Script from 'next/script';

import { GlobalStyle } from '@/components/globalStyles';
import { GlobalStateProvider } from "../context/GlobalStateContext";

const GA_ID = 'G-JXELT2K8RB'; // Substitua pelo seu ID real

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', GA_ID);
  }, []);

  return (
    <GlobalStateProvider>
      <GlobalStyle />
      {/* Script externo do GA */}
      <Script
        strategy="afterInteractive"
        src={\`https://www.googletagmanager.com/gtag/js?id=\${GA_ID}\`}
      />
      <Component {...pageProps} />
    </GlobalStateProvider>
  );
};

export default MyApp;`}
                    </CodeBlock>
                  </pre>
                  <Subtitle>Observações Importantes</Subtitle>
                  <List>
                    <li>Substitua &apos;G-JXELT2K8RB&apos; pelo seu próprio ID GA4 obtido no Google Analytics.</li>
                    <li>
                      O &lt;Script&gt; do Next.js carrega o script de forma otimizada após a página estar interativa.
                    </li>
                    <li>
                      {/* {} */}
                      O useEffect inicializa o GA só no cliente, evitando problemas no servidor.
                    </li>
                  </List>

                  <Subtitle>8. Testar</Subtitle>
                  <List>
                    <li>Acesse seu site.</li>
                    <li>
                      No{" "}
                      <Link href="https://analytics.google.com" target="__blank">
                        Google Analytics
                      </Link>
                      , vá para Relatórios &gt; Tempo Real para ver se suas visitas aparecem.
                    </li>
                    <li>
                      Use a extensão{" "}
                      <Link href="https://tagassistant.google.com/" target="__blank">
                        Tag Assistant{" "}
                      </Link>
                      do Google Chrome para verificar se o GA está ativo.
                    </li>
                  </List>
                </Container>

                <Container>
                  <SectionTitle>📊 Para que serve Google Analytics no seu projeto Next.js?</SectionTitle>

                  <List>
                    <li>
                      ✅ Monitorar o tráfego do seu site
                      <br />
                      GA4 mostra quantas pessoas acessam, de onde vêm (Google, Instagram, etc.),
                      quais páginas visitam e por quanto tempo ficam.
                    </li>
                    <li>
                      ✅ Medir conversões
                      <br />
                      Você pode rastrear ações importantes, como:
                      <List>
                        <li>Clique em botões</li>
                        <li>Preenchimento de formulários</li>
                        <li>Downloads</li>
                        <li>Compras (em e-commerce)</li>
                      </List>
                    </li>
                    <li>
                      ✅ Analisar comportamento do usuário
                      <br />
                      Entenda como as pessoas interagem com seu conteúdo, quais seções funcionam melhor e onde estão desistindo.
                    </li>
                    <li>
                      ✅ Tomar decisões com base em dados
                      <br />
                      GA4 te ajuda a:
                      <List>
                        <li>Melhorar a experiência do usuário</li>
                        <li>Investir melhor em marketing</li>
                        <li>Ajustar o design e o conteúdo</li>
                      </List>
                    </li>
                    <li>
                      ✅ Acompanhar em tempo real
                      <br />
                      Você pode ver quem está no seu site neste exato momento, por qual dispositivo acessou e quais páginas está navegando.
                    </li>
                  </List>

                  <SectionTitle>🛠️ Por que o GA4 é importante em projetos profissionais?</SectionTitle>
                  <Paragraph>
                    Sem GA4, você voa no escuro — não sabe se sua aplicação está atraindo usuários,
                    de onde vêm, nem se estão realizando as ações que você espera.
                  </Paragraph>
                  <Paragraph>
                    Com GA4 integrado corretamente, você transforma o site em uma máquina mensurável de
                    resultados. É essencial para quem deseja crescer de forma inteligente e com embasamento real.
                  </Paragraph>

                  <Subtitle>9. Lembrete Importante: Variáveis de Ambiente no Deploy</Subtitle>
                  <Paragraph>
                    Se você estiver condicionando a ativação do GA a uma variável de ambiente (como <code>NEXT_PUBLIC_ENABLE_GA</code>), lembre-se de que o arquivo <code>.env.local</code> não vai para produção.
                  </Paragraph>
                  <List>
                    <li>
                      <strong>Ambiente Local:</strong> Mantenha no seu <code>.env.local</code> como <code>false</code> para não registrar suas próprias visitas de teste no painel do Google.
                    </li>
                    <li>
                      <strong>Plataformas de Deploy (Vercel, Railway, Netlify):</strong> Você precisa ir na aba de <strong>Environment Variables</strong> (Configurações) do seu projeto na plataforma e adicionar manualmente a KEY <strong>NEXT_PUBLIC_ENABLE_GA</strong> VALUE <strong>true</strong>.
                    </li>
                    <li>
                      <strong>Redeploy:</strong> O Next.js embute essas variáveis no momento da "build". Portanto, após salvar a variável na plataforma, é obrigatório disparar um <strong>Redeploy</strong> para que a tag comece a funcionar em produção.
                    </li>
                  </List>
                </Container>
                <VoltarParaTopo></VoltarParaTopo>
              </CodeContainer>
            </MainContentLayout>
          </MainLayout>
        </>
      )}
    </>
  );
};

export default GA4NextJsIntegration;
