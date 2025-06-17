import Head from "next/head";
import { useGlobalState } from "../../../context/GlobalStateContext";
import {

  SectionTitle,
  Link, // Mantive o Link caso precise usar em algum momento
  CodeContainer,
  DividerWithText,
  Diagram,
  Wrapper,
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

const Container = styled.div`
  background-color: #1a1a1a;
  border: 1px solid #2a2a2a;
  border-radius: 12px;
  padding: 2rem 3rem;
  max-width: 900px;
  margin: 2rem auto;
  animation: ${fadeIn} 0.8s ease-out;

  // --- AJUSTE RESPONSIVO ---
  @media (max-width: 768px) {
    padding: 1.5rem 1rem; // Diminui o padding horizontal em telas pequenas
    margin: 1rem auto;
  }
`;

const StepDivider = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;

  &::after {
    content: '';
    flex-grow: 1;
    height: 1px;
    background: linear-gradient(to right, #007BFF, transparent);
  }
  
  // --- AJUSTE RESPONSIVO ---
  @media (max-width: 768px) {
    gap: 1rem;
    // Em telas pequenas, a linha decorativa pode ser removida se atrapalhar
    &::after {
      display: none; 
    }
  }
`;

const StepNumber = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  background: #007BFF;
  color: #fff;
  min-width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0; // Impede que o número encolha
`;

const StepTitle = styled.h2`
  font-size: 1.75rem;
  color: #f0f0f0;
  white-space: nowrap; // Mantém em uma linha em telas grandes

  // --- AJUSTE RESPONSIVO ---
  @media (max-width: 768px) {
    font-size: 1.4rem;
    white-space: normal; // PERMITE que o texto quebre a linha
  }
`;

const Subtitle = styled.h3`
  font-size: 1.4rem;
  color: #00A1FF;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  border-left: 4px solid #00A1FF;
  padding-left: 1rem;

  // --- AJUSTE RESPONSIVO ---
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;
const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: #c0c0c0;
  margin-bottom: 1rem;
`;

const InsightBox = styled.div`
  background: #111827;
  border: 1px solid rgba(0, 123, 255, 0.2);
  border-radius: 8px;
  padding: 1.5rem;
  margin: 2rem 0;
`;

const InsightTitle = styled.strong`
  color: #00A1FF;
  font-size: 1.1rem;
  display: block;
  margin-bottom: 1rem;
`;

const List = styled.ul`
  padding-left: 1.2rem;
  margin-top: 1rem;
`;

const ListItem = styled.li`
  color: #c0c0c0;
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const NestedList = styled.ul`
  padding-left: 1.5rem;
  margin-top: 0.5rem;
`;

const CodeBlock = styled.pre`
  background: #1E1E1E;
  border: 1px solid #2D2D2D;
  border-radius: 8px;
  padding: 1rem;
  font-family: 'Fira Code', 'Courier New', Courier, monospace;
  font-size: 0.9rem;
  white-space: pre-wrap;
  word-wrap: break-word;
  margin-top: 1rem;
  margin-bottom: 1rem;
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
                  <StepDivider>
                    <StepNumber>2</StepNumber>
                    <StepTitle>Arquitetura de Nuvem: Integração com R2</StepTitle>
                  </StepDivider>

                  <Subtitle>1. Por que Cloudflare R2? 👑</Subtitle>
                  <InsightBox>
                    <InsightTitle>Decisão Estratégica</InsightTitle>
                    <List>
                      <ListItem><strong>Compatibilidade com a API S3:</strong> Permitiu o uso do robusto e conhecido AWS SDK no backend, facilitando a integração sem a necessidade de aprender uma nova biblioteca.</ListItem>
                      <ListItem><strong>Zero Custo de Saída (Egress):</strong> Diferente de outros provedores de nuvem, o R2 não cobra taxas pelo tráfego de download dos arquivos. Isso o torna extremamente econômico para aplicações que servem muitos dados, como vídeos.</ListItem>
                    </List>
                  </InsightBox>

                  <Subtitle>2. Configuração na Plataforma Cloudflare ☁️</Subtitle>
                  <Paragraph>
                    Antes de codificar, o ambiente foi preparado diretamente no painel da Cloudflare seguindo um passo a passo rigoroso.
                  </Paragraph>
                  <InsightBox>
                    <InsightTitle>Checklist de Configuração no Site</InsightTitle>
                    <List>
                      <ListItem><strong><a style={{ color: "#0070f3" }} target='_blank' href="https://dash.cloudflare.com/">Acessar o R2:</a></strong> Navegar até a seção R2 no menu principal da Cloudflare.</ListItem>
                      <ListItem><strong>Criar o Bucket:</strong> Clicar em "Criar bucket", definir um nome único (que se torna a variável `R2_BUCKET_NAME`) e manter a localização como "Automático".</ListItem>
                      <ListItem>
                        <strong>Gerar Credenciais de Acesso (API Token):</strong>
                        <NestedList>
                          <ListItem>Navegar para "Gerenciar Tokens de API".</ListItem>
                          <ListItem>Clicar em "Criar token de API", nomeando-o (ex: "api-backend-token").</ListItem>
                          <ListItem>Selecionar a permissão de "Objeto Leitura e Escrita" (Object Read & Write).</ListItem>
                        </NestedList>
                      </ListItem>
                      <ListItem>
                        <strong>Salvar as Chaves:</strong> Copiar e guardar com segurança os valores exibidos (que aparecem apenas uma vez):
                        <NestedList>
                          <ListItem>ID da Chave de Acesso (Access Key ID)</ListItem>
                          <ListItem>Chave de Acesso Secreta (Secret Access Key)</ListItem>
                        </NestedList>
                      </ListItem>
                      <ListItem><strong>Obter o ID da Conta:</strong> Copiar o "ID da Conta" visível na página principal do R2.</ListItem>
                    </List>
                  </InsightBox>

                  <Subtitle>3. Como Usar no Backend (Node.js) ⚙️</Subtitle>
                  <Paragraph>Com as chaves e nomes em mãos, a implementação no código foi direta.</Paragraph>
                  <InsightBox>
                    <InsightTitle>Passo a Passo da Implementação no Código</InsightTitle>
                    <List>
                      <ListItem>
                        <strong>1. Instalar as Dependências:</strong>
                        <CodeBlock>npm install @aws-sdk/client-s3 @aws-sdk/s3-request-presigner dotenv</CodeBlock>
                      </ListItem>
                      <ListItem>
                        <strong>2. Configurar as Variáveis de Ambiente:</strong>
                        <CodeBlock>{`R2_ACCOUNT_ID=seu_id_da_conta
R2_ACCESS_KEY_ID=seu_id_da_chave_de_acesso
R2_SECRET_ACCESS_KEY=sua_chave_de_acesso_secreta
R2_BUCKET_NAME=nome_do_seu_bucket`}</CodeBlock>
                      </ListItem>
                      <ListItem>
                        <strong>3. Criar o Cliente de Conexão:</strong>
                        <CodeBlock>{`import { S3Client } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
  region: "auto",
  endpoint: \`https://\${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com\`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
  },
});

export default s3Client;`}</CodeBlock>
                      </ListItem>
                      <ListItem>
                        <strong>4. Implementar a Lógica de Comunicação:</strong>
                        <NestedList>
                          <ListItem>
                            <strong>Para fazer upload (no worker):</strong> Usar o `PutObjectCommand`.
                            <CodeBlock>{`import { PutObjectCommand } from "@aws-sdk/client-s3";
import fs from "fs";

const fileStream = fs.createReadStream("caminho/do/seu/arquivo.mp4");

const uploadParams = {
  Bucket: process.env.R2_BUCKET_NAME,
  Key: "nome-do-arquivo-no-r2.mp4",
  Body: fileStream,
};

await s3Client.send(new PutObjectCommand(uploadParams));`}</CodeBlock>
                          </ListItem>
                          <ListItem>
                            <strong>Para gerar link seguro (na API):</strong> Usar o `getSignedUrl` com o `GetObjectCommand`.
                            <CodeBlock>{`import { GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const command = new GetObjectCommand({
  Bucket: process.env.R2_BUCKET_NAME,
  Key: "nome-do-arquivo-no-r2.mp4",
});

// Link válido por 5 minutos
const signedUrl = await getSignedUrl(s3Client, command, { expiresIn: 300 });`}</CodeBlock>
                          </ListItem>
                        </NestedList>
                      </ListItem>
                    </List>
                  </InsightBox>
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