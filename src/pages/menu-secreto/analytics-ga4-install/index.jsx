import Head from "next/head";
import { useGlobalState } from "../../../context/GlobalStateContext";

import { MainLayout } from "@/components/layout/mainLayout";
import SideBarLayout from "@/components/layout/sideBarLayout";
import HeaderLayout from "@/components/layout/headerLayout";
import MainContentLayout from "@/components/layout/contentLayout";
import Overlay from "@/components/overlay";

const GA4NextJsIntegration = () => {
  const { isLoaded, isHamburguerOpen, setIsHamburguerOpen } = useGlobalState();

  const handleOverlayClick = () => setIsHamburguerOpen(false);

  const container = {
    fontFamily: "Segoe UI, sans-serif",
    padding: "15px",
    maxWidth: "900px",
    margin: "0 auto 40px",
    color: "#222",
    borderRadius: "12px",
    boxShadow: "0 0 20px rgba(0,0,0,0.05)",
    lineHeight: "1.6",
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
    // padding: "16px",
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
    color: 'blue'
  };

  const boldText = {
    fontWeight: "bold",
  };

  return (
    <>
      <Head>
        <title>Passo a passo: integrar Google Analytics 4 (GA4) no Next.js</title>
        <meta
          name="description"
          content="Guia completo para integrar Google Analytics 4 (GA4) em projetos Next.js com otimizações e melhores práticas."
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
                <div style={container}>
                  <div style={sectionTitle}>
                    Passo a passo para integrar Google Analytics 4 (GA4) no Next.js
                  </div>

                  <div style={subtitle}>1. Criar Conta no Google Analytics</div>
                  <p style={paragraph}>
                    Acesse <a style={link} href="https://analytics.google.com" target="_blank" rel="noreferrer">analytics.google.com</a> e crie uma nova conta.
                    Dê um nome à conta que identifique seu negócio ou projeto.
                  </p>

                  <div style={subtitle}>2. Criar Propriedade</div>
                  <p style={paragraph}>
                    Defina o nome da propriedade (ex: "Portfólio Jorge Luiz"). Escolha país, fuso horário e moeda. Clique para avançar.
                  </p>

                  <div style={subtitle}>3. Descrever seu Negócio</div>
                  <p style={paragraph}>
                    Informe o setor (ex: Financeiro, Tecnologia, etc) e o tamanho da empresa (ex: 1 a 10 funcionários). Clique para continuar.
                  </p>

                  <div style={subtitle}>4. Escolher Objetivos de Negócio</div>
                  <ul style={list}>
                    <li><strong>Gerar leads:</strong> Capturar contatos de potenciais clientes interessados.</li>
                    <li><strong>Impulsionar vendas:</strong> Aumentar a conversão e receita do negócio.</li>
                    <li><strong>Entender o tráfego da web:</strong> Analisar origem e comportamento dos visitantes.</li>
                    <li><strong>Ver engajamento e retenção:</strong> Monitorar a interação e fidelização dos usuários.</li>
                    <li><strong>Outros (se aplicável):</strong> Definir metas específicas conforme seu negócio.</li>
                  </ul>

                  <div style={subtitle}>5. Começar a Coletar Dados</div>
                  <p style={paragraph}>
                    Escolha a plataforma: Web (se for site Next.js). Informe a URL do seu site (ex: https://portfolio-projects-production.up.railway.app).
                    Dê um nome para o fluxo de dados (ex: "Site Principal") e crie o fluxo.
                  </p>

                  <div style={subtitle}>6. Obter o Código de Rastreamento (gtag.js)</div>
                  <p style={paragraph}>Após criar o fluxo, o Google gera um código como este:</p>
                  <pre style={codeBlock}>
                    {`<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-XXXXXXXXXX');
</script>`}
                  </pre>

                  <div style={subtitle}>7. Implementar no Next.js (arquivo _app.jsx)</div>
                  <p style={paragraph}>
                    Use o código abaixo para integrar o GA no seu Next.js:
                  </p>
                  <pre style={codeBlock}>
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
                  </pre>

                  <div style={subtitle}>Observações Importantes</div>
                  <ul style={list}>
                    <li>Substitua &apos;G-JXELT2K8RB&apos; pelo seu próprio ID GA4 obtido no Google Analytics.</li>
                    <li>
                      O &lt;Script&gt; do Next.js carrega o script de forma otimizada após a página estar interativa.
                    </li>
                    <li>
                      O <code>useEffect</code> inicializa o GA só no cliente, evitando problemas no servidor.
                    </li>
                  </ul>

                  <div style={subtitle}>8. Testar</div>
                  <ul style={list}>
                    <li>Acesse seu site.</li>
                    <li>No <a style={link} href="https://analytics.google.com" target="__blank">Google Analytics</a>, vá para Relatórios &gt; Tempo Real para ver se suas visitas aparecem.</li>
                    <li>Use a extensão <a style={link} href="https://tagassistant.google.com/" target="__blank">Tag Assistant </a> do Google Chrome para verificar se o GA está ativo.</li>
                  </ul>
                </div>

                <div style={container}>
                  <div style={sectionTitle}>
                    📊 Para que serve Google Analytics no seu projeto Next.js?
                  </div>

                  <ul style={list}>
                    <li>
                      ✅ <span style={boldText}>Monitorar o tráfego do seu site</span>
                      <br />
                      GA4 mostra quantas pessoas acessam, de onde vêm (Google, Instagram, etc.), quais páginas visitam e por quanto tempo ficam.
                    </li>
                    <li>
                      ✅ <span style={boldText}>Medir conversões</span>
                      <br />
                      Você pode rastrear ações importantes, como:
                      <ul style={list}>
                        <li>Clique em botões</li>
                        <li>Preenchimento de formulários</li>
                        <li>Downloads</li>
                        <li>Compras (em e-commerce)</li>
                      </ul>
                    </li>
                    <li>
                      ✅ <span style={boldText}>Analisar comportamento do usuário</span>
                      <br />
                      Entenda como as pessoas interagem com seu conteúdo, quais seções funcionam melhor e onde estão desistindo.
                    </li>
                    <li>
                      ✅ <span style={boldText}>Tomar decisões com base em dados</span>
                      <br />
                      GA4 te ajuda a:
                      <ul style={list}>
                        <li>Melhorar a experiência do usuário</li>
                        <li>Investir melhor em marketing</li>
                        <li>Ajustar o design e o conteúdo</li>
                      </ul>
                    </li>
                    <li>
                      ✅ <span style={boldText}>Acompanhar em tempo real</span>
                      <br />
                      Você pode ver quem está no seu site neste exato momento, por qual dispositivo acessou e quais páginas está navegando.
                    </li>
                  </ul>

                  <div style={sectionTitle}>🛠️ Por que o GA4 é importante em projetos profissionais?</div>
                  <p style={paragraph}>
                    Sem GA4, você voa no escuro — não sabe se sua aplicação está atraindo usuários, de onde vêm, nem se estão realizando as ações que você espera.
                  </p>
                  <p style={paragraph}>
                    Com GA4 integrado corretamente, você transforma o site em uma máquina mensurável de resultados. É essencial para quem deseja crescer de forma inteligente e com embasamento real.
                  </p>
                </div>
              </div>
            </MainContentLayout>
          </MainLayout>
        </>
      )}
    </>
  );
};

export default GA4NextJsIntegration;
