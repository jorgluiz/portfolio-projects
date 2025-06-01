// import Head from "next/head";
// import { useGlobalState } from "../../../context/GlobalStateContext";
// import { Container, SectionTitle,  Subtitle, Paragraph, CodeBlock, List, Link, BoldText  } from "@/styles/globalStyles";

// import { MainLayout } from "@/components/layout/mainLayout";
// import SideBarLayout from "@/components/layout/sideBarLayout";
// import HeaderLayout from "@/components/layout/headerLayout";
// import MainContentLayout from "@/components/layout/contentLayout";
// import Overlay from "@/components/overlay";

// const GA4NextJsIntegration = () => {
//   const { isLoaded, isHamburguerOpen, setIsHamburguerOpen } = useGlobalState();

//   const handleOverlayClick = () => setIsHamburguerOpen(false);


//   return (
//     <>
//       <Head>
//         <title>Passo a passo: integrar Google Analytics 4 (GA4) no Next.js</title>
//         <meta
//           name="description"
//           content="Guia completo para integrar Google Analytics 4 (GA4) em projetos Next.js com otimizações e melhores práticas."
//         />
//       </Head>

//       {!isLoaded ? null : (
//         <>
//           {isHamburguerOpen && <Overlay onClick={handleOverlayClick} />}
//           <MainLayout>
//             <SideBarLayout />
//             <HeaderLayout />
//             <MainContentLayout>
//               <div>
//                 <Container style={container}>
//                   <div style={sectionTitle}>
//                     Passo a passo para integrar Google Analytics 4 (GA4) no Next.js
//                   </div>

//                   <div style={subtitle}>1. Criar Conta no Google Analytics</div>
//                   <p style={paragraph}>
//                     Acesse <a style={link} href="https://analytics.google.com" target="_blank" rel="noreferrer">analytics.google.com</a> e crie uma nova conta.
//                     Dê um nome à conta que identifique seu negócio ou projeto.
//                   </p>

//                   <div style={subtitle}>2. Criar Propriedade</div>
//                   <p style={paragraph}>
//                     Defina o nome da propriedade (ex: "Portfólio Jorge Luiz"). Escolha país, fuso horário e moeda. Clique para avançar.
//                   </p>

//                   <div style={subtitle}>3. Descrever seu Negócio</div>
//                   <p style={paragraph}>
//                     Informe o setor (ex: Financeiro, Tecnologia, etc) e o tamanho da empresa (ex: 1 a 10 funcionários). Clique para continuar.
//                   </p>

//                   <div style={subtitle}>4. Escolher Objetivos de Negócio</div>
//                   <ul style={list}>
//                     <li><strong>Gerar leads:</strong> Capturar contatos de potenciais clientes interessados.</li>
//                     <li><strong>Impulsionar vendas:</strong> Aumentar a conversão e receita do negócio.</li>
//                     <li><strong>Entender o tráfego da web:</strong> Analisar origem e comportamento dos visitantes.</li>
//                     <li><strong>Ver engajamento e retenção:</strong> Monitorar a interação e fidelização dos usuários.</li>
//                     <li><strong>Outros (se aplicável):</strong> Definir metas específicas conforme seu negócio.</li>
//                   </ul>

//                   <div style={subtitle}>5. Começar a Coletar Dados</div>
//                   <p style={paragraph}>
//                     Escolha a plataforma: Web (se for site Next.js). Informe a URL do seu site (ex: https://portfolio-projects-production.up.railway.app).
//                     Dê um nome para o fluxo de dados (ex: "Site Principal") e crie o fluxo.
//                   </p>

//                   <div style={subtitle}>6. Obter o Código de Rastreamento (gtag.js)</div>
//                   <p style={paragraph}>Após criar o fluxo, o Google gera um código como este:</p>
//                   <pre style={codeBlock}>
//                     {`<!-- Google tag (gtag.js) -->
// <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
// <script>
//   window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());

//   gtag('config', 'G-XXXXXXXXXX');
// </script>`}
//                   </pre>

//                   <div style={subtitle}>7. Implementar no Next.js (arquivo _app.jsx)</div>
//                   <p style={paragraph}>
//                     Use o código abaixo para integrar o GA no seu Next.js:
//                   </p>
//                   <pre style={codeBlock}>
//                     {`import { useEffect } from 'react';
// import Script from 'next/script';

// import { GlobalStyle } from '@/components/globalStyles';
// import { GlobalStateProvider } from "../context/GlobalStateContext";

// const GA_ID = 'G-JXELT2K8RB'; // Substitua pelo seu ID real

// const MyApp = ({ Component, pageProps }) => {
//   useEffect(() => {
//     window.dataLayer = window.dataLayer || [];
//     function gtag() { window.dataLayer.push(arguments); }
//     gtag('js', new Date());
//     gtag('config', GA_ID);
//   }, []);

//   return (
//     <GlobalStateProvider>
//       <GlobalStyle />
//       {/* Script externo do GA */}
//       <Script
//         strategy="afterInteractive"
//         src={\`https://www.googletagmanager.com/gtag/js?id=\${GA_ID}\`}
//       />
//       <Component {...pageProps} />
//     </GlobalStateProvider>
//   );
// };

// export default MyApp;`}
//                   </pre>

//                   <div style={subtitle}>Observações Importantes</div>
//                   <ul style={list}>
//                     <li>Substitua &apos;G-JXELT2K8RB&apos; pelo seu próprio ID GA4 obtido no Google Analytics.</li>
//                     <li>
//                       O &lt;Script&gt; do Next.js carrega o script de forma otimizada após a página estar interativa.
//                     </li>
//                     <li>
//                       O <code>useEffect</code> inicializa o GA só no cliente, evitando problemas no servidor.
//                     </li>
//                   </ul>

//                   <div style={subtitle}>8. Testar</div>
//                   <ul style={list}>
//                     <li>Acesse seu site.</li>
//                     <li>No <a style={link} href="https://analytics.google.com" target="__blank">Google Analytics</a>, vá para Relatórios &gt; Tempo Real para ver se suas visitas aparecem.</li>
//                     <li>Use a extensão <a style={link} href="https://tagassistant.google.com/" target="__blank">Tag Assistant </a> do Google Chrome para verificar se o GA está ativo.</li>
//                   </ul>
//                 </Container>

//                 <div style={container}>
//                   <div style={sectionTitle}>
//                     📊 Para que serve Google Analytics no seu projeto Next.js?
//                   </div>

//                   <ul style={list}>
//                     <li>
//                       ✅ <span style={boldText}>Monitorar o tráfego do seu site</span>
//                       <br />
//                       GA4 mostra quantas pessoas acessam, de onde vêm (Google, Instagram, etc.), quais páginas visitam e por quanto tempo ficam.
//                     </li>
//                     <li>
//                       ✅ <span style={boldText}>Medir conversões</span>
//                       <br />
//                       Você pode rastrear ações importantes, como:
//                       <ul style={list}>
//                         <li>Clique em botões</li>
//                         <li>Preenchimento de formulários</li>
//                         <li>Downloads</li>
//                         <li>Compras (em e-commerce)</li>
//                       </ul>
//                     </li>
//                     <li>
//                       ✅ <span style={boldText}>Analisar comportamento do usuário</span>
//                       <br />
//                       Entenda como as pessoas interagem com seu conteúdo, quais seções funcionam melhor e onde estão desistindo.
//                     </li>
//                     <li>
//                       ✅ <span style={boldText}>Tomar decisões com base em dados</span>
//                       <br />
//                       GA4 te ajuda a:
//                       <ul style={list}>
//                         <li>Melhorar a experiência do usuário</li>
//                         <li>Investir melhor em marketing</li>
//                         <li>Ajustar o design e o conteúdo</li>
//                       </ul>
//                     </li>
//                     <li>
//                       ✅ <span style={boldText}>Acompanhar em tempo real</span>
//                       <br />
//                       Você pode ver quem está no seu site neste exato momento, por qual dispositivo acessou e quais páginas está navegando.
//                     </li>
//                   </ul>

//                   <div style={sectionTitle}>🛠️ Por que o GA4 é importante em projetos profissionais?</div>
//                   <p style={paragraph}>
//                     Sem GA4, você voa no escuro — não sabe se sua aplicação está atraindo usuários, de onde vêm, nem se estão realizando as ações que você espera.
//                   </p>
//                   <p style={paragraph}>
//                     Com GA4 integrado corretamente, você transforma o site em uma máquina mensurável de resultados. É essencial para quem deseja crescer de forma inteligente e com embasamento real.
//                   </p>
//                 </div>
//               </div>
//             </MainContentLayout>
//           </MainLayout>
//         </>
//       )}
//     </>
//   );
// };

// export default GA4NextJsIntegration;

import { useEffect } from 'react';
import Head from "next/head";
import { useGlobalState } from "../../../context/GlobalStateContext";
import {
  Container,
  SectionTitle,
  Subtitle,
  Paragraph,
  CodeBlock,
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

import hljs from 'highlight.js'; // Importando o highlight.js
import 'highlight.js/styles/atom-one-dark.css'; // Estilo para colorir a sintaxe



const GA4NextJsIntegration = () => {
  const { isLoaded, isHamburguerOpen, setIsHamburguerOpen } = useGlobalState();

  const handleOverlayClick = () => setIsHamburguerOpen(false);

  useEffect(() => {
    hljs.highlightAll(); // Aplica o destaque de sintaxe a todos os blocos de código
  }, []);


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
                  <Paragraph>
                    Defina o nome da propriedade (ex: "Portfólio Jorge Luiz"). Escolha país,
                    fuso horário e moeda. Clique para avançar.
                  </Paragraph>

                  <Subtitle>3. Descrever seu Negócio</Subtitle>
                  <Paragraph>
                    Informe o setor (ex: Financeiro, Tecnologia, etc) e o tamanho da empresa
                    (ex: 1 a 10 funcionários). Clique para continuar.
                  </Paragraph>

                  <Subtitle>4. Escolher Objetivos de Negócio</Subtitle>
                  <List>
                    <li>
                      Gerar leads: Capturar contatos de potenciais
                      clientes interessados.
                    </li>
                    <li>
                      Impulsionar vendas: Aumentar a conversão e receita
                      do negócio.
                    </li>
                    <li>
                      Entender o tráfego da web: Analisar origem e
                      comportamento dos visitantes.
                    </li>
                    <li>
                      Ver engajamento e retenção: Monitorar a interação e
                      fidelização dos usuários.
                    </li>
                    <li>
                      Outros (se aplicável): Definir metas específicas
                      conforme seu negócio.
                    </li>
                  </List>

                  <Subtitle>5. Começar a Coletar Dados</Subtitle>
                  <Paragraph>
                    Escolha a plataforma: Web (se for site Next.js). Informe a URL do seu
                    site (ex: https://portfolio-projects-production.up.railway.app). Dê um
                    nome para o fluxo de dados (ex: "Site Principal") e crie o fluxo.
                  </Paragraph>

                  <Subtitle>6. Obter o Código de Rastreamento (gtag.js)</Subtitle>
                  <Paragraph>Após criar o fluxo, o Google gera um código como este:</Paragraph>
                  <pre>
                    <code>
                      {`<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-XXXXXXXXXX');
</script>`}
                    </code>
                  </pre>

                  <Subtitle>7. Implementar no Next.js (arquivo _app.jsx)</Subtitle>
                  <Paragraph>Use o código abaixo para integrar o GA no seu Next.js:</Paragraph>
                  <pre>
                    <code>
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
                    </code>
                  </pre>
                  <Subtitle>Observações Importantes</Subtitle>
                  <List>
                    <li>Substitua &apos;G-JXELT2K8RB&apos; pelo seu próprio ID GA4 obtido no Google Analytics.</li>
                    <li>
                      O &lt;Script&gt; do Next.js carrega o script de forma otimizada após a página estar interativa.
                    </li>
                    <li>
                      O <code>useEffect</code> inicializa o GA só no cliente, evitando problemas no servidor.
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
                </Container>
              </CodeContainer>
            </MainContentLayout>
          </MainLayout>
        </>
      )}
    </>
  );
};

export default GA4NextJsIntegration;
