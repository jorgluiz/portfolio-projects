import Head from "next/head";
import { useGlobalState } from "@/context/GlobalStateContext";
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
const FunctionNames = () => {
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
          <Container>
            {/* ================================================================== */}
            {/* PRIMEIRA SEÇÃO: CONVENÇÕES DE NOMENCLATURA                        */}
            {/* ================================================================== */}
            <DividerWithText>
              Padrões e Convenções de Nomenclatura em Funções React  conventions
            </DividerWithText>

            <Subtitle>1. Manipuladores de Eventos (Event Handlers)</Subtitle>
            <Paragraph>
              São as funções executadas em resposta a uma interação do usuário. A convenção mais forte é usar o prefixo <strong>handle</strong>.
            </Paragraph>
            <List>
              <li><strong>Padrão:</strong> handle + Elemento (opcional) + Evento</li>
              <li><strong>Cliques:</strong> handleClick, handleButtonClick, handleLogin, handleSave, handleDeleteItem(itemId), handleNextStep</li>
              <li><strong>Mudanças em Inputs:</strong> handleChange, handleInputChange(event), handleNameChange(newName), handlePasswordChange(newPassword)</li>
              <li><strong>Submissões de Formulários:</strong> handleSubmit, handleFormSubmit(event)</li>
              <li><strong>Eventos de Mouse:</strong> handleMouseEnter, handleMouseLeave</li>
            </List>

            <Subtitle>2. Busca e Manipulação de Dados (API)</Subtitle>
            <Paragraph>
              Funções que interagem com servidores ou fontes de dados externas.
            </Paragraph>
            <List>
              <li><strong>Prefixos comuns:</strong> fetch, get, load, post, update, delete.</li>
              <li><strong>Exemplos:</strong> fetchUserData(), getProducts(), loadComments(postId), postNewMessage(message), updateUserDetails(userData), deletePost(postId)</li>
            </List>

            <Subtitle>3. Funções de Atualização de Estado</Subtitle>
            <Paragraph>
              Embora o hook useState já forneça funções "set", muitas vezes criamos nossas próprias funções para lógicas de atualização mais complexas.
            </Paragraph>
            <List>
              <li><strong>Prefixos comuns:</strong> update, set, add, remove, toggle, clear, reset.</li>
              <li><strong>Exemplos:</strong> addUserToList(newUser), removeUserById(userId), updateCartItemQuantity(itemId, newQuantity), toggleSidebar(), clearFormFields(), resetFilters(), setIsLoading(true)</li>
            </List>

            <Subtitle>4. Funções de Transformação e Formatação (Helpers)</Subtitle>
            <Paragraph>
              Funções que recebem um dado e retornam uma versão transformada ou formatada dele.
            </Paragraph>
            <List>
              <li><strong>Prefixos comuns:</strong> format, calculate, map, filter, sort, get.</li>
              <li><strong>Exemplos:</strong> formatDate(dateString), formatCurrency(value), calculateTotalPrice(items), sortUsersByName(users), filterActiveProducts(products), getInitials(userName)</li>
            </List>

            <Subtitle>5. Funções de Validação e Verificação (Booleanas)</Subtitle>
            <Paragraph>
              Funções que retornam true ou false. A convenção é iniciar com is, has, should ou um verbo de verificação.
            </Paragraph>
            <List>
              <li><strong>Prefixos comuns:</strong> is, has, should, can, validate.</li>
              <li><strong>Exemplos:</strong> isFormValid(), isEmail(string), hasPermission(user, 'create_post'), shouldShowModal(), canUserEdit(user), validatePassword(password)</li>
            </List>

            <Subtitle>Exemplo Prático em um Componente</Subtitle>
            <CodeBlock language="jsx">
              {`import React, { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  // 1. Busca de Dados
  async function fetchUserData(id) {
    const response = await fetch(\`api/users/\${id}\`);
    const data = await response.json();
    setUser(data);
    setIsLoading(false);
  }

  // 2. Manipulador de Evento
  const handleEditClick = () => {
    console.log('Iniciando edição para o usuário:', user.name);
  };
  
  // 3. Função de Verificação (Booleana)
  const hasProfilePicture = () => {
    return user && user.profilePictureUrl;
  };

  // 4. Função de Formatação
  const formatJoinDate = () => {
    if (!user) return '';
    return new Date(user.joinDate).toLocaleDateString('pt-BR');
  };

  useEffect(() => {
    fetchUserData(userId);
  }, [userId]);

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      {hasProfilePicture() && <img src={user.profilePictureUrl} alt={user.name} />}
      <h1>{user.name}</h1>
      <p>Membro desde: {formatJoinDate()}</p>
      <button onClick={handleEditClick}>Editar Perfil</button>
    </div>
  );
}`}
            </CodeBlock>
            <Paragraph>
              Ao adotar esses padrões, seu código se torna autoexplicativo, facilitando a manutenção e a colaboração com outros desenvolvedores.
            </Paragraph>

            {/* ================================================================== */}
            {/* SEGUNDA SEÇÃO: TUTORIAL DE DESINSTALAÇÃO ADB                       */}
            {/* ================================================================== */}
            <DividerWithText>
              Método de Desinstalação Forçada de Aplicativos Android (ADB) 💥
            </DividerWithText>

            <Paragraph>
              Este método, que utiliza o <strong>Android Debug Bridge (ADB)</strong>, é a solução mais robusta para desinstalação de aplicativos quando os métodos convencionais falham. É particularmente útil para desenvolvedores, garantindo a remoção completa de versões anteriores de um aplicativo, o que permite a instalação de novas compilações (incluindo versões de lançamento) sem conflitos.
            </Paragraph>

            <Subtitle>Pré-requisitos</Subtitle>
            <List>
              <li><strong>Celular Android:</strong> Acesso às "Opções do Desenvolvedor".</li>
              <li><strong>Computador:</strong> Cabo USB e terminal (Prompt de Comando/PowerShell no Windows ou Terminal no Mac/Linux).</li>
              <li><strong>ADB instalado:</strong> Ferramenta de linha de comando que permite a comunicação entre o computador e o dispositivo Android. (Inclua aqui um link ou instruções para a instalação do ADB, se aplicável, para o seu portfólio.)</li>
            </List>

            <Subtitle>Passos para Desinstalação</Subtitle>
            <List>
              <li>
                <strong>1. Configuração do Celular:</strong>
                <br />
                No seu celular, vá em <strong>Configurações &gt; Sobre o telefone</strong>.
                <br />
                Toque em "<strong>Número da versão</strong>" 7 vezes consecutivas para ativar as "Opções do desenvolvedor".
                <br />
                Retorne ao menu principal de Configurações, acesse <strong>Sistema &gt; Opções do desenvolvedor</strong>.
                <br />
                Ative a "<strong>Depuração USB</strong>".
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
                Se for a primeira vez, uma solicitação de permissão de "Depuração USB" aparecerá na tela do seu celular. Marque "<strong>Sempre permitir para este computador</strong>" e confirme.
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
                Se o processo for bem-sucedido, o terminal exibirá a mensagem "<strong>Success</strong>". O aplicativo terá sido removido completamente do seu dispositivo.
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
export default FunctionNames;