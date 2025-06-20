import { useEffect } from 'react';
import Head from "next/head";
import { useGlobalState } from "../../../context/GlobalStateContext";
import {
  Container,
  SectionTitle,
  Paragraph,
  List,
  CodeContainer
} from "@/styles/globalStyles";

import { MainLayout } from "@/components/layout/mainLayout";
import SideBarLayout from "@/components/layout/sideBarLayout";
import HeaderLayout from "@/components/layout/headerLayout";
import MainContentLayout from "@/components/layout/contentLayout";
import Overlay from "@/components/overlay";
import CodeBlock from '@/components/codeBlock';
import VoltarParaTopo from '@/components/backToTop';

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
          content="Guia completo para integrar o Google Analytics 4 (GA4) em projetos Next.js. Aprenda como rastrear tráfego e interações no seu site usando UTM Parameters e otimizações para análise de dados."
        />
        <meta
          name="keywords"
          content="Google Analytics 4, GA4, Next.js, SEO, rastreamento, UTM parameters, integração, análise de dados"
        />
        <meta name="author" content="Jorge Luiz" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:site_name" content="https://portfolio-projects-production.up.railway.app" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://portfolio-projects-production.up.railway.app/menu-secreto/utm-parameters" />
        <meta property="og:title" content="Portfólio de Projetos | Desenvolvedor Full Stack com React, Next.js e Node.js" />
        <meta property="og:description" content="Conheça meu portfólio de projetos de desenvolvimento web! Trabalho com tecnologias como ReactJS, NextJS, Node.js e muito mais." />
        <meta property="og:image" content="https://portfolio-projects-production.up.railway.app/perfil.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://portfolio-projects-production.up.railway.app/menu-secreto/utm-parameters" />
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
                    A técnica UTM Parameters.
                  </SectionTitle>

                  <Paragraph>
                    UTM (Urchin Tracking Module) são parâmetros adicionados ao final de uma URL que permitem rastrear de onde vem o tráfego de um link compartilhado.
                  </Paragraph>

                  <Paragraph>
                    Quando você compartilha um link com parâmetros UTM (por exemplo, no WhatsApp, LinkedIn ou qualquer outro lugar), você pode identificar de onde o clique foi originado e até mesmo como o tráfego interagiu com seu site. No <strong>Google Analytics</strong>, você pode ver essas informações através da seção "Aquisição".
                  </Paragraph>

                  <SectionTitle>Como funciona:</SectionTitle>
                  <Paragraph>
                    Parâmetros UTM são pequenos pedaços de texto que você adiciona ao final de uma URL. Por exemplo:
                  </Paragraph>
                  <CodeBlock language={"javascript"}>
                    {`https://seusite.com?utm_source=whatsapp&utm_medium=social&utm_campaign=compartilhamento`}
                  </CodeBlock>
                  <SectionTitle>Os parâmetros que você pode adicionar são:</SectionTitle>
                  <List>
                    <li><strong>utm_source:</strong> De onde vem o tráfego (ex: WhatsApp, LinkedIn, Facebook, etc.).</li>
                    <li><strong>utm_medium:</strong> Como o tráfego foi enviado (ex: social, email, CPC, etc.).</li>
                    <li><strong>utm_campaign:</strong> A campanha de marketing específica ou objetivo (ex: "compartilhamento", "promoção_fevereiro", etc.).</li>
                    <li><strong>utm_term (opcional):</strong> Para campanhas pagas, você pode incluir palavras-chave.</li>
                    <li><strong>utm_content (opcional):</strong> Usado para distinguir variações de anúncios ou links.</li>
                  </List>

                  <SectionTitle>Como adicionar parâmetros UTM:</SectionTitle>
                  <Paragraph>
                    Crie a URL com UTM: Suponhamos que o seu link original seja
                    <CodeBlock language="javascript">
                      {`https://portfolio-projects-production.up.railway.app`}
                    </CodeBlock>
                  </Paragraph>
                  <Paragraph>
                    Você pode criar um link para o WhatsApp assim:
                    <CodeBlock language={"javascript"}>
                      {`https://portfolio-projects-production.up.railway.app?utm_source=whatsapp&utm_medium=social&utm_campaign=compartilhamento`}
                    </CodeBlock>
                  </Paragraph>

                  <SectionTitle>Como visualizar no Google Analytics:</SectionTitle>
                  <Paragraph>
                    No Google Analytics, você pode acessar as informações dos cliques nos links com UTM ao navegar até <strong>relatórios</strong> → <strong>Gerar leads</strong> → <strong>Visão geral</strong> → <strong>Conferir campanhas manuais</strong>. Lá, você verá relatórios sobre o tráfego baseado nos parâmetros UTM que você configurou.
                  </Paragraph>

                  <SectionTitle>Passos para compartilhar no WhatsApp:</SectionTitle>
                  <List>
                    <li>Crie o link com UTM.</li>
                    <li>Compartilhe no WhatsApp ou em qualquer plataforma que desejar.</li>
                    <li>Ao clicar no link, a pessoa será redirecionada para o seu site, e o Google Analytics poderá rastrear de onde veio o clique.</li>
                  </List>

                  <SectionTitle>Exemplo:</SectionTitle>
                  <Paragraph>
                    Se você criar esse link para compartilhar no WhatsApp:
                  </Paragraph>
                  <CodeBlock language={"javascript"}>
                    {`https://portfolio-projects-production.up.railway.app?utm_source=whatsapp&utm_medium=social&utm_campaign=compartilhamento`}
                  </CodeBlock>
                  <Paragraph>
                    E alguém clicar nele, o Google Analytics registrará que o tráfego veio do WhatsApp <strong>(utm_source)</strong>, por um link social <strong>(utm_medium)</strong> e foi parte da campanha de compartilhamento <strong>(utm_campaign)</strong>.
                  </Paragraph>

                  <SectionTitle>Conclusão:</SectionTitle>
                  <Paragraph>
                    Essa técnica de usar UTM Parameters permite rastrear com precisão de onde vem o tráfego e como os usuários interagem com o seu site após clicar no link. Isso é fundamental para campanhas de marketing, promoções e para otimizar a análise de tráfego e conversões.
                  </Paragraph>
                </Container>

                <Container>
                  <SectionTitle>Exemplos de Campanhas e Mídias:</SectionTitle>

                  <Paragraph><strong>1. Campanha de Compartilhamento em WhatsApp</strong></Paragraph>
                  <Paragraph><strong>Mídia</strong>: social</Paragraph>
                  <Paragraph>Parâmetros UTM:</Paragraph>
                  <CodeBlock language={"javascript"}>
                    {`utm_source=whatsapp&utm_medium=social&utm_campaign=compartilhamento`}
                  </CodeBlock>
                  <Paragraph><strong>2. Campanha de E-mail Marketing</strong></Paragraph>
                  <Paragraph><strong>Mídia</strong>: email</Paragraph>
                  <Paragraph>Parâmetros UTM:</Paragraph>
                  <CodeBlock language={"javascript"}>
                    {`utm_source=email&utm_medium=email&utm_campaign=oferta_verao`}
                  </CodeBlock>
                  <Paragraph><strong>3. Campanha de Google Ads (CPC)</strong></Paragraph>
                  <Paragraph><strong>Mídia</strong>: cpc</Paragraph>
                  <Paragraph>Parâmetros UTM:</Paragraph>
                  <CodeBlock language={"javascript"}>
                    {`utm_source=google&utm_medium=cpc&utm_campaign=promo_julho`}
                  </CodeBlock>
                  <Paragraph><strong>4. Campanha de Afiliados</strong></Paragraph>
                  <Paragraph><strong>Mídia</strong>: link</Paragraph>
                  <Paragraph>Parâmetros UTM:</Paragraph>
                  <CodeBlock language={"javascript"}>
                    {`utm_source=afiliado&utm_medium=link&utm_campaign=campanha_afiliado`}
                  </CodeBlock>
                  <Paragraph><strong>5. Campanha de Teste A/B (Anúncios)</strong></Paragraph>
                  <Paragraph><strong>Mídia</strong>: paid</Paragraph>
                  <Paragraph>Parâmetros UTM:</Paragraph>
                  <CodeBlock language={"javascript"}>
                    {`utm_source=facebook&utm_medium=paid&utm_campaign=teste_ab&utm_content=anuncio_a`}
                  </CodeBlock>
                  <Paragraph><strong>6. Campanha de Link Compartilhado em Blog</strong></Paragraph>
                  <Paragraph><strong>Mídia</strong>: referral</Paragraph>
                  <Paragraph>Parâmetros UTM:</Paragraph>
                  <CodeBlock language={"javascript"}>
                    {`utm_source=blog&utm_medium=referral&utm_campaign=parceiros`}
                  </CodeBlock>
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
