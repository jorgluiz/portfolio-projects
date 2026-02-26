import Head from "next/head";
import { useGlobalState } from "../../../../context/GlobalStateContext";
import {
  Container,
  DividerWithText,
  Paragraph,
  Subtitle,
  List,
} from "@/styles/globalStyles";

import Overlay from "@/components/overlay";
import VoltarParaTopo from "@/components/backToTop";

import CodeBlock from "@/components/codeBlock";

// Renomeando o componente para refletir o novo conteúdo
const ForcedUninstall = () => {
  const { isLoaded, isHamburguerOpen, setIsHamburguerOpen } = useGlobalState();

  const handleOverlayClick = () => setIsHamburguerOpen(false);

  return (
    <>
      <Head>
        {/* Primary Meta Tags Atualizados para "Desinstalação Forçada com ADB" */}
        <title>Como Desinstalar Apps Android Forçadamente com ADB | Guia para Devs</title>
        <meta
          name="description"
          content="Aprenda o passo a passo para usar o Android Debug Bridge (ADB) e o comando 'adb uninstall' para remover completamente qualquer aplicativo do seu dispositivo, ideal para desenvolvedores."
        />
        <meta
          name="keywords"
          content="ADB, Android, desinstalar aplicativo, adb uninstall, forçar desinstalação, Android Debug Bridge, desenvolvimento Android, applicationId, depuração USB"
        />
        <meta name="author" content="Jorge Luiz" />

        {/* Open Graph / Facebook Atualizados */}
        <meta property="og:site_name" content="https://portfolio-projects-production.up.railway.app" />
        <meta property="og:type" content="website" />
        {/* URL mantida conforme solicitado */}
        <meta property="og:url" content="https://portfolio-projects-production.up.railway.app/app-developer/notas-rapidas" />
        <meta property="og:title" content="Como Desinstalar Apps Android Forçadamente com ADB | Guia para Devs" />
        <meta property="og:description" content="Um guia rápido e prático para desenvolvedores sobre como usar o comando 'adb uninstall' para garantir uma remoção limpa de apps em dispositivos Android." />
        <meta property="og:image" content="https://portfolio-projects-production.up.railway.app/perfil.png" />

        {/* Twitter Atualizados */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://portfolio-projects-production.up.railway.app/app-developer/notas-rapidas" />
        <meta property="twitter:title" content="Como Desinstalar Apps Android Forçadamente com ADB | Guia para Devs" />
        <meta property="twitter:description" content="Resolva problemas de instalação de novas compilações aprendendo a forçar a desinstalação de apps Android com o poder do ADB." />
        <meta property="twitter:image" content="https://portfolio-projects-production.up.railway.app/perfil.png" />
      </Head>

      {!isLoaded ? null : (
        <>
          {isHamburguerOpen && <Overlay onClick={handleOverlayClick} />}
          <Container>
            <DividerWithText>
              Método de Desinstalação Forçada de Aplicativos Android (ADB) 💥
            </DividerWithText>

            <Paragraph>
              Este método, que utiliza o **Android Debug Bridge (ADB)**, é a solução mais robusta para desinstalação de aplicativos quando os métodos convencionais falham. É particularmente útil para desenvolvedores, garantindo a remoção completa de versões anteriores de um aplicativo, o que permite a instalação de novas compilações (incluindo versões de lançamento) sem conflitos.
            </Paragraph>

            <Subtitle>Pré-requisitos</Subtitle>
            <List>
              <li>**Celular Android:** Acesso às "Opções do Desenvolvedor".</li>
              <li>**Computador:** Cabo USB e terminal (Prompt de Comando/PowerShell no Windows ou Terminal no Mac/Linux).</li>
              <li>**ADB instalado:** Ferramenta de linha de comando que permite a comunicação entre o computador e o dispositivo Android. (Inclua aqui um link ou instruções para a instalação do ADB, se aplicável, para o seu portfólio.)</li>
            </List>

            <Subtitle>Passos para Desinstalação</Subtitle>
            <List>
              <li>
                <strong>1. Configuração do Celular:</strong>
                <br />
            No seu celular, vá em **Configurações > Sobre o telefone**.
                <br />
                Toque em "**Número da versão**" 7 vezes consecutivas para ativar as "Opções do desenvolvedor".
                <br />
            Retorne ao menu principal de Configurações, acesse **Sistema > Opções do desenvolvedor**.
                <br />
                Ative a "**Depuração USB**".
              </li>
              <li>
                <strong>2. Conexão e Verificação (Computador):</strong>
                <br />
                Conecte o celular ao computador via cabo USB.
                <br />
                Abra o terminal no seu computador.
                <br />
                Navegue até a pasta do seu projeto, e em seguida, para a pasta `android` (ou o diretório onde você gerencia seus projetos Android).
                <br />
                Digite o seguinte comando para verificar a conexão do dispositivo:
                <CodeBlock language="bash">
                  {`adb devices`}
                </CodeBlock>
                Se for a primeira vez, uma solicitação de permissão de "Depuração USB" aparecerá na tela do seu celular. Marque "**Sempre permitir para este computador**" e confirme.
              </li>
              <li>
                <strong>3. Desinstalação Forçada:</strong>
                <br />
                Com o celular conectado e a depuração USB permitida, utilize o seguinte comando para forçar a desinstalação:
                <CodeBlock language="bash">
                  {`adb uninstall com.baixarvideos`}
                </CodeBlock>
                <strong>Observação:</strong> Substitua `com.baixarvideos` pelo `applicationId` do aplicativo que você deseja desinstalar. Este `applicationId` pode ser encontrado no arquivo `build.gradle` do seu projeto.
                <br />
                Se o processo for bem-sucedido, o terminal exibirá a mensagem "**Success**". O aplicativo terá sido removido completamente do seu dispositivo.
              </li>
            </List>

            <Subtitle>Benefícios</Subtitle>
            <Paragraph>
              Este método garante a remoção completa do aplicativo, eliminando resíduos que poderiam causar problemas na instalação de novas versões, especialmente útil para testes e homologação de aplicativos.
            </Paragraph>
          </Container>
          <VoltarParaTopo></VoltarParaTopo>
        </>
      )
      }
    </>
  );
};

// Exporte com o novo nome
export default ForcedUninstall;