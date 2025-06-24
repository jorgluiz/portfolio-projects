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
            {/* PRIMEIRA SEÇÃO: CONVENÇÕES DE NOMENCLATURA (ALINHADA)              */}
            {/* ================================================================== */}
            <DividerWithText>
              Padrões e Convenções de Nomenclatura em Funções React & React Native
            </DividerWithText>

            <Subtitle>1. Manipuladores de Eventos (Event Handlers)</Subtitle>
            <Paragraph>
              Funções que respondem a interações do usuário. Usam o prefixo <strong>handle</strong>. No nosso exemplo prático, a função <strong><code>handleEditPress</code></strong> segue esta regra.
            </Paragraph>
            <List>
              <li><strong>Padrão:</strong> handle + Elemento (opcional) + Evento</li>
              <li><strong>Exemplos:</strong> <code>handleSave</code>, <code>handleLogin</code>, <code>handleInputChange</code>, e o nosso <strong><code>handleEditPress</code></strong>.</li>
            </List>

            <Subtitle>2. Busca e Manipulação de Dados (API)</Subtitle>
            <Paragraph>
              Funções que interagem com servidores. No nosso exemplo, a função <strong><code>fetchUserData</code></strong> demonstra esta convenção.
            </Paragraph>
            <List>
              <li><strong>Prefixos comuns:</strong> fetch, get, load, post, update, delete.</li>
              <li><strong>Exemplos:</strong> <code>getProducts</code>, <code>postNewMessage</code>, e a nossa <strong><code>fetchUserData</code></strong>.</li>
            </List>

            <Subtitle>3. Funções de Atualização de Estado</Subtitle>
            <Paragraph>
              Para atualizações simples, usamos as funções do `useState`. O nosso exemplo usa <strong><code>setUser</code></strong> e <strong><code>setIsLoading</code></strong>, que se encaixam perfeitamente nesta prática.
            </Paragraph>
            <List>
              <li><strong>Padrão:</strong> Usar a função `set` do `useState` ou criar funções com prefixos como `update`, `add`, `toggle`.</li>
              <li><strong>Exemplos:</strong> <code>addUserToList</code>, <code>toggleSidebar</code>, e os do nosso exemplo: <strong><code>setUser()</code></strong>, <strong><code>setIsLoading()</code></strong>.</li>
            </List>

            <Subtitle>4. Funções de Transformação e Formatação (Helpers)</Subtitle>
            <Paragraph>
              Funções que recebem um dado e retornam uma versão transformada. O nosso exemplo prático usa <strong><code>formatJoinDate</code></strong> para isso.
            </Paragraph>
            <List>
              <li><strong>Prefixos comuns:</strong> format, calculate, get.</li>
              <li><strong>Exemplos:</strong> <code>formatCurrency</code>, <code>getInitials</code>, e a nossa <strong><code>formatJoinDate</code></strong>.</li>
            </List>

            <Subtitle>5. Funções de Validação e Verificação (Booleanas)</Subtitle>
            <Paragraph>
              Funções que retornam `true` ou `false` e são usadas para renderização condicional. O nosso exemplo demonstra isso com a função <strong><code>hasProfilePicture</code></strong>.
            </Paragraph>
            <List>
              <li><strong>Prefixos comuns:</strong> is, has, should, can.</li>
              <li><strong>Exemplos:</strong> <code>isFormValid</code>, <code>canUserEdit</code>, e a nossa <strong><code>hasProfilePicture</code></strong>.</li>
            </List>

            <Subtitle>Exemplo Prático em um Componente</Subtitle>
            <Paragraph>
              O código abaixo demonstra todas as convenções mencionadas. Observe como os nomes das funções correspondem às regras que acabamos de ver.
            </Paragraph>
            <CodeBlock language="jsx">
              {`import React, { useState, useEffect } from 'react';
import { 
  View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator
} from 'react-native';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  // Regra 2: Busca de Dados
  async function fetchUserData(id) {
    try {
      const response = await fetch('https://api.example.com/users/' + id);
      const data = await response.json();
      // Regra 3: Atualização de Estado
      setUser(data);
    } catch (error) {
      console.error("Erro ao buscar dados do usuário:", error);
    } finally {
      // Regra 3: Atualização de Estado
      setIsLoading(false);
    }
  }

  // Regra 1: Manipulador de Evento
  const handleEditPress = () => {
    console.log('Usuário pressionou para editar o perfil:', user.name);
  };
  
  // Regra 5: Função de Verificação (Booleana)
  const hasProfilePicture = () => {
    return user && user.profilePictureUrl;
  };

  // Regra 4: Função de Formatação (Helper)
  const formatJoinDate = () => {
    if (!user) return '';
    return new Date(user.joinDate).toLocaleDateString('pt-BR');
  };

  useEffect(() => {
    fetchUserData(userId);
  }, [userId]);

  if (isLoading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* A Regra 5 é usada aqui */}
      {hasProfilePicture() && (
        <Image source={{ uri: user.profilePictureUrl }} style={styles.avatar} />
      )}
      
      <Text style={styles.userName}>{user.name}</Text>
      {/* A Regra 4 é usada aqui */}
      <Text style={styles.infoText}>Membro desde: {formatJoinDate()}</Text>

      {/* A Regra 1 é usada aqui */}
      <TouchableOpacity style={styles.button} onPress={handleEditPress}>
        <Text style={styles.buttonText}>Editar Perfil</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  loaderContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  container: { flex: 1, alignItems: 'center', padding: 20, backgroundColor: '#f5f5f5' },
  avatar: { width: 120, height: 120, borderRadius: 60, marginBottom: 20, borderWidth: 2, borderColor: '#FFF' },
  userName: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
  infoText: { fontSize: 16, color: '#666', marginBottom: 20 },
  button: { backgroundColor: '#007AFF', paddingVertical: 12, paddingHorizontal: 30, borderRadius: 25 },
  buttonText: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' },
});

export default UserProfile;`}
            </CodeBlock>
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