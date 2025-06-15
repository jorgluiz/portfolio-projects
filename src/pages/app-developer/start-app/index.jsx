import { useEffect } from 'react';
import Head from "next/head";
import { useGlobalState } from "@/context/GlobalStateContext";
import {
  Container,
  SectionTitle,
  Subtitle,
  Paragraph,
  CodeBlock,
  List,
  Link,
  CodeContainer,
  Title,
  DividerWithText
} from "@/styles/globalStyles";
import styled from 'styled-components';

import { MainLayout } from "@/components/layout/mainLayout";
import SideBarLayout from "@/components/layout/sideBarLayout";
import HeaderLayout from "@/components/layout/headerLayout";
import MainContentLayout from "@/components/layout/contentLayout";
import Overlay from "@/components/overlay";

import hljs from 'highlight.js'; // Importando o highlight.js
import 'highlight.js/styles/atom-one-dark.css'; // Estilo para colorir a sintaxe

/* Responsividade da tabela */
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  overflow-x: auto;
  display: block;
  white-space: nowrap;
  margin-left: auto;
  margin-right: auto;
`;

const Th = styled.th`
  padding: 10px;
  text-align: center;
  border: 1px solid #ddd;
`;

const Td = styled.td`
  padding: 10px;
  text-align: center;
  border: 1px solid #ddd;
`;

const THead = styled.thead`
  background-color: #f4f4f4;
`;

const TBody = styled.tbody`
  background-color: #fff;
`;

const DevelopmentSteps = () => {
  const { isLoaded, isHamburguerOpen, setIsHamburguerOpen } = useGlobalState();

  const handleOverlayClick = () => setIsHamburguerOpen(false);

  useEffect(() => {
    // Só executa a estilização se o conteúdo estiver carregado e visível
    if (isLoaded) {
      hljs.highlightAll();
    }
  }, [isLoaded]); // Adicione 'isLoaded' como dependência!

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Passos para Iniciar o Desenvolvimento do Seu App | Guia Completo</title>
        <meta
          name="description"
          content="Aprenda os passos fundamentais para iniciar o desenvolvimento do seu app. Descubra como configurar a estrutura do projeto, escolher o layout, integrar funcionalidades e muito mais."
        />
        <meta
          name="keywords"
          content="desenvolvimento de app, React Native, integração de vídeos, navegação React, estrutura de projeto"
        />
        <meta name="author" content="Jorge Luiz" />
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
                  <DividerWithText>Passos para Iniciar o Desenvolvimento do Seu App</DividerWithText>

                  <Subtitle>1. Configurar a Estrutura do Projeto</Subtitle>
                  <Paragraph>
                    Crie os arquivos e pastas necessárias para o seu projeto, como:
                  </Paragraph>
                  <List>
                    <li><strong>components/</strong>: para os componentes reutilizáveis.</li>
                    <li><strong>screens/</strong>: para as telas do seu app.</li>
                    <li><strong>assets/</strong>: para imagens, fontes e outros recursos.</li>
                    <li><strong>services/</strong>: para funções de lógica de negócios, como baixar vídeos.</li>
                  </List>

                  <Subtitle>2. Escolher o Layout e Design</Subtitle>
                  <Paragraph>
                    Decida como será a interface do usuário (UI) do seu app. Algumas bibliotecas úteis para isso:
                  </Paragraph>
                  <List>
                    <li><strong>React Navigation</strong>: para navegação entre telas.</li>
                    <li><strong>React Native Paper</strong> ou <strong>NativeBase</strong>: para componentes prontos, como botões, inputs, e outros.</li>
                  </List>
                  <Paragraph>
                    Instale o React Navigation, por exemplo:
                  </Paragraph>

                  <pre>
                    <code>
                      {`npm install @react-navigation/native
npm install @react-navigation/stack
npm install react-native-screens react-native-safe-area-context`}
                    </code>
                  </pre>

                  <Paragraph>
                    E para navegação:
                  </Paragraph>
                  <pre>
                    <code>
                      {`npx react-native link react-native-screens
npx react-native link react-native-safe-area-context`}
                    </code>
                  </pre>

                  <Subtitle>3. Integrar a Funcionalidade de Baixar Vídeos</Subtitle>
                  <Paragraph>
                    Crie um componente ou tela onde o usuário possa inserir o link do vídeo que deseja baixar. Use bibliotecas como Axios para fazer a requisição e baixar o vídeo do Instagram.
                  </Paragraph>
                  <Paragraph>
                    Se precisar de ajuda para essa parte, posso te ajudar com o código!
                  </Paragraph>

                  <Subtitle>4. Gerenciar Estado e Lógica do App</Subtitle>
                  <Paragraph>
                    Utilize React Context ou Redux para gerenciar o estado global do seu app, como o status de download ou a lista de vídeos baixados.
                  </Paragraph>

                  <Subtitle>5. Testar no Emulador e Dispositivo Físico</Subtitle>
                  <Paragraph>
                    Conforme for desenvolvendo, sempre teste no emulador ou dispositivo físico para verificar se a funcionalidade está funcionando como esperado.
                  </Paragraph>

                  <Subtitle>6. Aprimorar a Interface e Usabilidade</Subtitle>
                  <Paragraph>
                    Após implementar as funcionalidades principais, comece a refinar o design para uma melhor experiência do usuário (UX). Considere adicionar animações, transições e personalizações para deixar o app mais fluido e agradável de usar.
                  </Paragraph>

                  <SectionTitle>Resumo de Ações Iniciais</SectionTitle>
                  <Paragraph>
                    Se você tiver uma ideia de como deseja estruturar as telas e funcionalidades, posso te ajudar a criar o esqueleto inicial ou sugerir como implementar algumas funcionalidades específicas. Qual parte do desenvolvimento você quer começar agora?
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

export default DevelopmentSteps;
