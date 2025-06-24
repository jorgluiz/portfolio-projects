import Head from "next/head";
import { useGlobalState } from "@/context/GlobalStateContext";
import {
  Container,
  SectionTitle,
  Subtitle,
  Paragraph,
  List,
  CodeContainer,
  DividerWithText
} from "@/styles/globalStyles";

import { MainLayout } from "@/components/layout/mainLayout";
import SideBarLayout from "@/components/layout/sideBarLayout";
import HeaderLayout from "@/components/layout/headerLayout";
import MainContentLayout from "@/components/layout/contentLayout";
import Overlay from "@/components/overlay";
import CodeBlock from "@/components/codeBlock";
import VoltarParaTopo from "@/components/backToTop";

const DevelopmentSteps = () => {
  const { isLoaded, isHamburguerOpen, setIsHamburguerOpen } = useGlobalState();

  const handleOverlayClick = () => setIsHamburguerOpen(false);

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
                  <DividerWithText>
                    O Nascimento do Projeto: Criação e Estrutura Inicial
                  </DividerWithText>

                  <Paragraph>
                    Com o ambiente Android configurado e validado, o objetivo desta etapa foi criar o esqueleto do aplicativo React Native e organizar seu código-fonte de uma maneira limpa e escalável.
                  </Paragraph>

                  <Subtitle>1. O Comando de Criação (Uma Jornada de Diagnóstico)</Subtitle>
                  <Paragraph>
                    A criação do projeto não foi um único comando, mas um processo de depuração que gerou aprendizados valiosos sobre as ferramentas modernas de React Native.
                  </Paragraph>
                  <List>
                    <li>
                      <strong>1. Primeira Tentativa e Erro:</strong>
                      <br />
                      O comando `npx react-native init downloadVideoInstagram` resultou no erro: `TypeError: cli.init is not a function`.
                      <br />
                      <strong>Diagnóstico:</strong> Uma versão global e obsoleta da `react-native-cli` estava instalada, causando conflito.
                      <br />
                      <strong>Solução:</strong> Desinstalar o pacote global foi o primeiro passo.
                      <CodeBlock language="javascript">
                        {`npm uninstall -g react-native-cli`}
                      </CodeBlock>
                    </li>
                    <li>
                      <strong>2. Segunda Tentativa e Erro:</strong>
                      <br />
                      A nova execução do comando gerou o aviso: `The init command is deprecated`.
                      <br />
                      <strong>Diagnóstico:</strong> O próprio comando `init` direto do pacote `react-native` estava descontinuado.
                    </li>
                    <li>
                      <strong>3. O Comando Correto e o Sucesso:</strong>
                      <br />
                      Seguindo a orientação do erro, o comando correto foi utilizado.
                      <CodeBlock language="javascript">
                        {`npx @react-native-community/cli init downloadVideoInstagram`}
                      </CodeBlock>
                      <strong>Aprendizado Chave:</strong> A importância de ler atentamente as mensagens de erro e usar os comandos recomendados pela comunidade oficial.
                    </li>
                  </List>

                  <Subtitle>2. A Arquitetura de Pastas e a Decisão pelo TypeScript</Subtitle>
                  <Paragraph>
                    Desde o início, foram tomadas decisões para garantir que o projeto fosse organizado e robusto.
                  </Paragraph>
                  <List>
                    <li>
                      <strong>Ação 1: Uso de TypeScript por Padrão</strong>
                      <br />
                      <strong>Estratégia:</strong> O projeto foi criado e mantido em TypeScript (.tsx).
                      <br />
                      <strong>Aprendizado:</strong> Entendeu-se a vantagem de usar TypeScript para um código mais seguro e detecção de erros na fase de desenvolvimento. Foi crucial ajustar o `tsconfig.json` para o Jest entender a sintaxe JSX.
                    </li>
                    <li>
                      <strong>Ação 2: Organização do Código-Fonte</strong>
                      <br />
                      <strong>Estratégia:</strong> Uma pasta `src/` foi criada para separar o código da aplicação dos arquivos de configuração. Dentro dela, foram criadas as subpastas `screens`, `components`, `services` e `assets`.
                      <br />
                      <strong>Desafio e Solução:</strong> Ao mover `App.tsx` para `src/`, o app quebrou. O diagnóstico foi que o ponto de entrada (`index.js`) precisava ser atualizado.
                      <br />
                      <strong>Solução:</strong> Editar o `index.js` para importar o App do novo local.
                      <CodeBlock language="javascript">
                        {`import App from './src/App';`}
                      </CodeBlock>
                    </li>
                  </List>

                  <Subtitle>3. A "Saúde" do Projeto: Revisão do package.json</Subtitle>
                  <Paragraph>
                    Uma verificação das dependências foi feita para garantir que o projeto estava limpo.
                    <br />
                    <strong>Dúvida Crítica Resolvida:</strong> "Devo fazer o downgrade do react@19.0.0 para o 18.0.0?".
                    <br />
                    <strong>Diagnóstico e Aprendizado Final:</strong> A investigação provou o contrário. A versão `react-native@0.79.2` foi projetada para funcionar com `react@19.0.0`. O aprendizado fundamental foi confiar nas versões que a ferramenta oficial instala.
                    <br />
                    <strong>Ação de Limpeza:</strong> As dependências desnecessárias "install" e "npm" foram removidas do `package.json`.
                  </Paragraph>

                  <Paragraph>
                    Ao final deste passo, tínhamos um projeto funcional, com uma estrutura limpa e as dependências corretas, pronto para a próxima fase.
                  </Paragraph>
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

export default DevelopmentSteps;
