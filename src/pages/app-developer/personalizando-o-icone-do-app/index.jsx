import Head from "next/head";
import { useGlobalState } from "../../../context/GlobalStateContext";
import {
  Container,
  CodeContainer,
  DividerWithText,
  Paragraph,
  Subtitle,
  List,
} from "@/styles/globalStyles";

import { MainLayout } from "@/components/layout/mainLayout";
import SideBarLayout from "@/components/layout/sideBarLayout";
import HeaderLayout from "@/components/layout/headerLayout";
import MainContentLayout from "@/components/layout/contentLayout";
import Overlay from "@/components/overlay";
import VoltarParaTopo from "@/components/backToTop";

import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;


// Renomeando o componente para refletir o novo conteúdo
const AndroidStudioSetup = () => {
  const { isLoaded, isHamburguerOpen, setIsHamburguerOpen } = useGlobalState();

  const handleOverlayClick = () => setIsHamburguerOpen(false);




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
                  <DividerWithText>
                    Guia Personalização e Configuração Nativa do App
                  </DividerWithText>

                  <Paragraph>
                    Com o projeto já criado e estruturado, o segundo grande objetivo era dar uma identidade visual ao aplicativo, começando pelo ícone. Esta etapa se transformou em uma jornada completa de configuração e solução de problemas dentro do Android Studio, fundamental para o desenvolvimento profissional.
                  </Paragraph>

                  <Subtitle>1. Abertura do Projeto no Ambiente Nativo</Subtitle>
                  <Paragraph>
                    Para manipular recursos nativos como o ícone, o primeiro passo foi usar a ferramenta correta. A ação executada foi abrir o Android Studio e, através da opção "Open", navegar e abrir o caminho exato do projeto: <strong>C:\Users\Dev\Desktop\baixarVideos\android</strong>.
                  </Paragraph>

                  <Subtitle>2. A Jornada Inesperada: Resolvendo Problemas do Ambiente</Subtitle>
                  <Paragraph>
                    Assim que o projeto abriu, ficou claro que o ambiente precisava de ajustes. A ferramenta para alterar o ícone não estava disponível, o que deu início a uma investigação técnica detalhada para estabilizar o ambiente de desenvolvimento.
                  </Paragraph>
                  <List>
                    <li>
                      <strong>1. Problema A: O "Image Asset" Desaparecido.</strong>
                      <br />
                      <strong>Diagnóstico:</strong> A opção "Image Asset" não aparecia no menu `New`. Identificamos que a causa era uma falha na sincronização do Gradle. Um sintoma claro era que os ícones das pastas na visualização "Project" estavam genéricos (📁), e não como módulos Android (📱).
                      <br />
                      <strong>Ação Corretiva:</strong> Tentamos mudar a visualização de "Project" para "Android", mas o problema persistia, confirmando que a falha era na sincronização e não na interface.
                    </li>
                    <li>
                      <strong>2. Problema B: O Erro do JDK (Java Development Kit).</strong>
                      <br />
                      <strong>Diagnóstico:</strong> Ao forçar a sincronização, o sistema retornou o erro: "requires JDK 17 or higher". Isso provou que o Plugin do Gradle (AGP) do projeto era moderno e exigia o Java 17.
                      <br />
                      <strong>Solução:</strong> Navegamos até `File > Settings > Build, Execution, Deployment > Build Tools > Gradle`. Na opção "Gradle JDK", usamos a função "Download JDK...", selecionamos a versão 17 e aplicamos, resolvendo o primeiro grande bloqueio.
                    </li>
                    <li>
                      <strong>3. Problema C: O Erro de Incompatibilidade do AGP.</strong>
                      <br />
                      <strong>Diagnóstico:</strong> Um último erro crítico apareceu: "incompatible version (AGP 8.8.2)...". Usando a analogia da "oficina e motor", entendemos que nosso Android Studio (a oficina) era antigo demais para o Plugin do Gradle (o motor) que o projeto exigia.
                      <br />
                      <strong>Solução Definitiva:</strong> A solução correta e de longo prazo foi atualizar a "oficina". Usamos o menu `Help > Check for Updates...` para atualizar o próprio Android Studio para a versão estável mais recente, garantindo total compatibilidade.
                    </li>
                  </List>

                  <Subtitle>3. Usando a Ferramenta "Image Asset"</Subtitle>
                  <Paragraph>
                    Com o ambiente finalmente estável e sincronizado, a ferramenta "Image Asset" ficou disponível e pudemos prosseguir com a criação do ícone.
                  </Paragraph>
                  <List>
                    <li>
                      <strong>Ação:</strong> Clicamos com o botão direito na pasta `app` (na visualização "Android") > `New` > `Image Asset`.
                    </li>
                    <li>
                      <strong>Configuração das Camadas:</strong>
                      <br />
                      - <strong>Foreground Layer (Primeiro Plano):</strong> No campo `Path`, selecionamos o arquivo de imagem do nosso logo (um PNG de alta resolução, como 1024x1024px).
                      <br />
                      - <strong>Background Layer (Plano de Fundo):</strong> Identificamos o fundo verde padrão, que seria o alvo da nossa próxima correção.
                      <br />
                      - <strong>Full Bleed Layer (Esclarecimento):</strong> Discutimos que esta camada não é usada para ícones de celular, mas sim para banners de Android TV (1920x1080px) ou ícones de relógios Wear OS (1024x1024px).
                    </li>
                  </List>

                  {/* ===== TÍTULO ALTERADO AQUI ===== */}
                  <Subtitle>4. Ajustes Finos: Configurando o Background do Ícone ✨</Subtitle>
                  <Paragraph>
                    Após gerar o ícone e instalar o app, notamos o detalhe final a ser polido: um "flash" verde aparecia por uma fração de segundo quando o app era fechado. Este comportamento estava ligado à configuração da camada de fundo do ícone.
                  </Paragraph>
                  <List>
                    <li>
                      <strong>Diagnóstico:</strong> A animação do sistema exibia a `Background Layer` do ícone, que ainda estava definida com a cor verde padrão, mesmo que nosso logo a cobrisse.
                      <br />
                      <strong>Solução (Conforme Executado):</strong> Voltamos para a ferramenta `Image Asset`. Na aba `Background Layer`, alteramos a opção "Asset Type" de `Color` para <strong>`Image`</strong>. Em seguida, no campo "Path", selecionamos uma imagem de fundo personalizada. Essa ação substituiu completamente o verde padrão, resolvendo o problema do "flash" na animação.
                    </li>
                  </List>

                  <Subtitle>5. Verificação Final e a "Regra de Ouro"</Subtitle>
                  <Paragraph>
                    Para garantir que todas as mudanças tivessem efeito e que o novo ícone fosse exibido corretamente, seguimos a nossa "Regra de Ouro".
                  </Paragraph>
                  <List>
                    <li>
                      <strong>Ação 1 - Limpeza de Cache:</strong> Desinstalamos completamente a versão anterior do aplicativo do celular. Isso é crucial para forçar o sistema operacional a limpar o cache do ícone antigo.
                    </li>
                    <li>
                      <strong>Ação 2 - Recompilação e Instalação:</strong> Recompilamos e reinstalamos o app usando o comando `npx react-native run-android`.
                    </li>
                    <li>
                      <strong>Resultado Final:</strong> O aplicativo foi instalado no celular, exibindo o novo ícone perfeitamente, com o fundo de imagem personalizado e sem o "flash" verde indesejado, completando a customização visual.
                    </li>
                  </List>
                </Container>
                <VoltarParaTopo></VoltarParaTopo>
              </CodeContainer>
            </MainContentLayout>
          </MainLayout>
        </>
      )
      }
    </>
  );
};

// Exporte com o novo nome
export default AndroidStudioSetup;