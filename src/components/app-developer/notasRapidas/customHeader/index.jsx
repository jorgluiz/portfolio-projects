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
const CustomHeader = () => {
  const { isLoaded, isHamburguerOpen, setIsHamburguerOpen } = useGlobalState();

  const handleOverlayClick = () => setIsHamburguerOpen(false);

  return (
    <>
      <Head>
        {/* Primary Meta Tags Atualizados para "Realidade do Desenvolvimento" */}
        <title>Debugging e Tópicos Práticos em React Native: Guia Essencial</title>
        <meta
          name="description"
          content="Aprenda sobre a realidade do desenvolvimento React Native: debugging nativo e JS com Flipper, ciclo de vida do app, upgrades, notificações push e automação com CI/CD."
        />
        <meta
          name="keywords"
          content="React Native, Debugging, Flipper, Ciclo de Vida do App, AppState, Upgrade, Notificações Push, CI/CD, Fastlane, EAS, Desenvolvimento Prático"
        />
        <meta name="author" content="Jorge Luiz" />

        {/* Open Graph / Facebook Atualizados */}
        <meta property="og:site_name" content="https://portfolio-projects-production.up.railway.app" />
        <meta property="og:type" content="website" />
        {/* URL mantida conforme solicitado */}
        <meta property="og:url" content="https://portfolio-projects-production.up.railway.app/app-developer/notas-rapidas" />
        <meta property="og:title" content="Debugging e Tópicos Práticos em React Native: Guia Essencial" />
        <meta property="og:description" content="Guia prático sobre os desafios reais do desenvolvimento React Native, cobrindo debugging, upgrades, ciclo de vida do app, notificações e CI/CD." />
        <meta property="og:image" content="https://portfolio-projects-production.up.railway.app/perfil.png" />

        {/* Twitter Atualizados */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://portfolio-projects-production.up.railway.app/app-developer/notas-rapidas" />
        <meta property="twitter:title" content="Debugging e Tópicos Práticos em React Native: Guia Essencial" />
        <meta property="twitter:description" content="Explore a realidade do desenvolvimento React Native: de depurar erros nativos com Flipper a automatizar deploys com Fastlane e EAS." />
        <meta property="twitter:image" content="https://portfolio-projects-production.up.railway.app/perfil.png" />
      </Head>

      {!isLoaded ? null : (
        <>
          {isHamburguerOpen && <Overlay onClick={handleOverlayClick} />}
          <Container>
            <DividerWithText>Análise Técnica do Componente CustomHeader.tsx</DividerWithText>
            <Subtitle>CustomHeader.tsx</Subtitle>
            <CodeBlock language="jsx">{`
  // src/components/CustomHeader.tsx
  import React from 'react';
  import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
  import {DrawerActions, useNavigation} from '@react-navigation/native';
  import {DrawerNavigationProp} from '@react-navigation/drawer';
  import Icon from 'react-native-vector-icons/Ionicons';
  import {useTranslation} from 'react-i18next';

  // --- Tipos e Props ---
  type CustomHeaderProps = {
    title: string;
  };

  // Usamos 'any' aqui por ser um componente genérico de cabeçalho.
  // Em uma aplicação maior, poderia ser tipado com uma ParamList específica do Drawer.
  type DrawerNavProp = DrawerNavigationProp<any>;

  // =============================================================================
  // Componente Principal
  // =============================================================================
  function CustomHeader({title}: CustomHeaderProps) {
    const {t} = useTranslation();
    const navigation = useNavigation<DrawerNavProp>();

    // --- Manipuladores de Eventos ---

    const handleToggleDrawer = () => {
      navigation.dispatch(DrawerActions.toggleDrawer());
    };

    const handleSettingsPress = () => {
      // Ação temporária para o botão de configurações
      Alert.alert(t('customHeader.settings_alert_title'), t('customHeader.settings_alert_message'));
    };

    // --- Renderização ---

    return (
      <View style={styles.headerContainer}>
        {/* Ícone da Esquerda (Menu) */}
        <TouchableOpacity style={styles.iconButton} onPress={handleToggleDrawer}>
          <Icon name='menu' size={30} color='#000000' />
        </TouchableOpacity>

        {/* Título Central */}
        <View style={styles.titleWrapper}>
          <Text style={styles.headerTitle} numberOfLines={1}>
            {title}
          </Text>
        </View>

        {/* Ícone da Direita (Configurações) */}
        <TouchableOpacity style={styles.iconButton} onPress={handleSettingsPress}>
          <Icon name='settings-outline' size={24} color='#000000' />
        </TouchableOpacity>
      </View>
    );
  }

  // --- Estilos ---
  const styles = StyleSheet.create({
    headerContainer: {
      height: 60,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between', // Garante espaçamento equilibrado
      backgroundColor: '#ffffff',
      paddingHorizontal: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f0f0f0', // Adiciona uma linha sutil de separação
    },
    iconButton: {
      // Padding para aumentar a área de toque (hitSlop)
      padding: 10,
    },
    titleWrapper: {
      // flex: 1 permite que o título ocupe o espaço restante
      flex: 1,
      alignItems: 'center',
      marginHorizontal: 10, // Adiciona margem para não colar nos ícones
    },
    headerTitle: {
      color: '#000000',
      fontSize: 20,
      fontWeight: 'bold',
    },
  });

  export default CustomHeader;

          `}
            </CodeBlock>
          </Container>
          <Container>
            <DividerWithText>
              Análise Técnica do Componente CustomHeader.tsx
            </DividerWithText>

            <Subtitle>1. Tipos e Props: Definindo a Interface do Componente</Subtitle>
            <Paragraph>
              Esta seção define os tipos de dados que o componente <strong>CustomHeader</strong> espera receber (props) e os tipos que ele usa internamente para interagir com a navegação.
            </Paragraph>
            <List>
              <li><strong>CustomHeaderProps:</strong> Define que o componente espera receber uma prop <strong>title</strong> do tipo <strong>string</strong>. Isso torna o componente reutilizável.</li>
              <li><strong>DrawerNavProp:</strong> Um tipo para o hook <strong>useNavigation</strong>, informando ao TypeScript que o objeto <strong>navigation</strong> terá acesso às ações de um <strong>DrawerNavigator</strong> (como abrir/fechar a gaveta).</li>
            </List>
            <CodeBlock language="typescript">
              {`// --- Tipos e Props ---
type CustomHeaderProps = {
  title: string;
};
type DrawerNavProp = DrawerNavigationProp<any>;`}
            </CodeBlock>

            <Subtitle>2. Lógica Interna do Componente CustomHeader</Subtitle>
            <Paragraph>
              Aqui fica a lógica de comportamento do cabeçalho: o que acontece quando os botões são pressionados.
            </Paragraph>
            <List>
              <li><strong>Hooks de Inicialização:</strong> <strong>useTranslation()</strong> prepara a função de tradução e <strong>useNavigation()</strong> obtém o objeto de navegação.</li>
              <li><strong>Manipuladores de Eventos:</strong>
                <ul>
                  <li><strong>handleToggleDrawer():</strong> Chamada ao pressionar o ícone de menu, usa <strong>navigation.dispatch(DrawerActions.toggleDrawer())</strong> para abrir/fechar a gaveta.</li>
                  <li><strong>handleSettingsPress():</strong> Uma função de exemplo para o botão de configurações, que atualmente exibe um <strong>Alert</strong>.</li>
                </ul>
              </li>
            </List>
            <CodeBlock language="typescript">
              {`function CustomHeader({title}: CustomHeaderProps) {
  const {t} = useTranslation();
  const navigation = useNavigation<DrawerNavProp>();

  const handleToggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  const handleSettingsPress = () => {
    Alert.alert(t('customHeader.settings_alert_title'), t('customHeader.settings_alert_message'));
  };
  // ... resto do componente
}`}</CodeBlock>

            <Subtitle>3. Análise do JSX: A Estrutura Visual do Cabeçalho</Subtitle>
            <Paragraph>
              O bloco <strong>return</strong> descreve a estrutura visual do cabeçalho, que é um layout clássico de três colunas: ícone à esquerda, título no centro e ícone à direita.
            </Paragraph>
            <List>
              <li><strong>&lt;View {'style={styles.headerContainer}'}&gt;:</strong> O contêiner principal que envolve todos os elementos.</li>
              <li><strong>Ícone da Esquerda (Menu):</strong> Um <strong>&lt;TouchableOpacity&gt;</strong> que chama <strong>handleToggleDrawer()</strong> ao ser pressionado.</li>
              <li><strong>Título Central:</strong> Um <strong>&lt;View&gt;</strong> (wrapper) que centraliza o componente <strong>&lt;Text&gt;</strong>. A prop <strong>numberOfLines={1}</strong> garante que títulos longos não quebrem o layout.</li>
              <li><strong>Ícone da Direita (Configurações):</strong> Outro <strong>&lt;TouchableOpacity&gt;</strong> que chama <strong>handleSettingsPress()</strong>.</li>
            </List>
            <CodeBlock language="jsx">
              {`return (
  <View style={styles.headerContainer}>
    {/* Ícone da Esquerda (Menu) */}
    <TouchableOpacity style={styles.iconButton} onPress={handleToggleDrawer}>
      <Icon name='menu' size={30} color='#000000' />
    </TouchableOpacity>

    {/* Título Central */}
    <View style={styles.titleWrapper}>
      <Text style={styles.headerTitle} numberOfLines={1}>
        {title}
      </Text>
    </View>

    {/* Ícone da Direita (Configurações) */}
    <TouchableOpacity style={styles.iconButton} onPress={handleSettingsPress}>
      <Icon name='settings-outline' size={24} color='#000000' />
    </TouchableOpacity>
  </View>
);`}
            </CodeBlock>

            <Subtitle>4. Análise dos Estilos (StyleSheet)</Subtitle>
            <Paragraph>
              Estes estilos definem a aparência e, mais importante, o layout do cabeçalho.
            </Paragraph>
            <Paragraph><strong>headerContainer:</strong></Paragraph>
            <List>
              <li><strong>height: 60:</strong> Define uma altura fixa.</li>
              <li><strong>flexDirection: 'row':</strong> Alinha os filhos (ícones e título) horizontalmente.</li>
              <li><strong>alignItems: 'center':</strong> Centraliza os filhos verticalmente.</li>
              <li><strong>justifyContent: 'space-between':</strong> A chave para o layout de três colunas. Posiciona o primeiro item no início, o último no final, e distribui o espaço restante.</li>
            </List>
            <CodeBlock language="javascript">
              {`const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    /* ... */
  },`}
            </CodeBlock>
            <Paragraph><strong>iconButton:</strong></Paragraph>
            <List>
              <li><strong>padding: 10:</strong> Adiciona um espaçamento interno ao redor do ícone, aumentando a "área de toque" (hit slop) e tornando o botão mais fácil de ser pressionado.</li>
            </List>
            <CodeBlock language="javascript">
              {`  iconButton: {
    padding: 10,
  },`}
            </CodeBlock>
            <Paragraph><strong>titleWrapper e headerTitle:</strong></Paragraph>
            <List>
              <li><strong>titleWrapper:</strong> Usa <strong>flex: 1</strong> para ocupar todo o espaço horizontal restante entre os dois ícones, e <strong>alignItems: 'center'</strong> para centralizar o texto dentro desse espaço.</li>
              <li><strong>headerTitle:</strong> Define o estilo do texto do título.</li>
            </List>
            <CodeBlock language="javascript">
              {`  titleWrapper: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  headerTitle: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
  },
});`}
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
export default CustomHeader;