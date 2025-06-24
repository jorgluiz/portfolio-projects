import Head from "next/head";
import { useGlobalState } from "../../../../context/GlobalStateContext";
import {
  Container,
  DividerWithText,
  Paragraph,
  Subtitle,
  List,
} from "@/styles/globalStyles";
import styled from "styled-components";

import Overlay from "@/components/overlay";
import VoltarParaTopo from "@/components/backToTop";

import CodeBlock from "@/components/codeBlock";

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

// Renomeando o componente para refletir o novo conteúdo
const EventProperties = () => {
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
            <DividerWithText>
              Como Capturar Eventos de Toque (onPress) no React Native
            </DividerWithText>

            <Paragraph>
              Diferente da web, onde quase qualquer elemento pode ter um <code>onClick</code>, no React Native a maioria dos componentes básicos como <code>&lt;View&gt;</code> e <code>&lt;Text&gt;</code> não são interativos por padrão.
            </Paragraph>
            <Paragraph>
              Para fazer algo "clicável" (ou melhor, "pressionável"), você precisa envolvê-lo em um de quatro componentes especiais, conhecidos como "Touchables". Aqui estão eles, do mais comum ao mais específico:
            </Paragraph>

            <Subtitle>1. TouchableOpacity (O mais comum)</Subtitle>
            <Paragraph>
              Este é o seu "pão com manteiga" para criar botões customizados. Ao ser pressionado, ele diminui levemente a opacidade do seu conteúdo, dando um feedback visual claro e agradável para o usuário.
            </Paragraph>
            <Paragraph>
              <strong>Quando usar:</strong> Quase sempre que você quiser criar um botão, um card ou um item de lista que seja clicável.
            </Paragraph>
            <CodeBlock language="jsx">
              {`import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const MeuBotaoCustomizado = () => {
  const handlePress = () => {
    Alert.alert('Botão Pressionado!', 'Você usou o TouchableOpacity.');
  };

  return (
    // O evento onPress é colocado no TouchableOpacity
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.buttonText}>Me Pressione</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});`}
            </CodeBlock>

            <Subtitle>2. Pressable (O mais moderno e poderoso)</Subtitle>
            <Paragraph>
              Introduzido mais recentemente, o <strong>Pressable</strong> é o componente mais flexível para capturar interações de toque. Ele te dá acesso a um conjunto mais rico de eventos e estados. É a escolha recomendada pela documentação oficial para novas implementações.
            </Paragraph>
            <Paragraph>
              <strong>Vantagem principal:</strong> Ele permite que você mude o estilo do componente com base no estado de "pressionado", sem precisar de lógica de estado adicional.
            </Paragraph>
            <CodeBlock language="jsx">
              {`import React from 'react';
import { Text, Pressable, StyleSheet, Alert } from 'react-native';

const BotaoSuperModerno = () => {
  const handleLongPress = () => {
    Alert.alert('Pressionado por muito tempo!');
  };

  return (
    <Pressable
      onPress={() => Alert.alert('Pressionado!')}
      onLongPress={handleLongPress}
      // O estilo pode ser uma função que recebe o estado "pressionado"
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? 'rgb(210, 230, 255)' : '#007AFF',
        },
        styles.wrapperCustom,
      ]}
    >
      <Text style={styles.buttonText}>Sou um Pressable</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapperCustom: {
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});`}
            </CodeBlock>

            <Subtitle>3. Button (O Básico)</Subtitle>
            <Paragraph>
              O React Native também oferece um componente <code>&lt;Button&gt;</code> básico. Ele é extremamente simples de usar, mas muito difícil de estilizar. Ele renderiza um botão com a aparência nativa do Android e do iOS, e você não pode mudar muito além da cor do texto.
            </Paragraph>
            <Paragraph>
              <strong>Quando usar:</strong> Para prototipagem rápida ou quando a aparência nativa padrão é tudo o que você precisa.
            </Paragraph>
            <CodeBlock language="jsx">
              {`import React from 'react';
import { Button, Alert } from 'react-native';

const BotaoSimples = () => (
  <Button
    title="Botão Básico"
    color="#841584"
    onPress={() => Alert.alert('Botão básico pressionado')}
  />
);`}
            </CodeBlock>

            <Subtitle>Resumo das Propriedades de Evento</Subtitle>
            <Paragraph>
              Com os componentes <code>Touchable*</code> e <code>Pressable</code>, você terá acesso a estas propriedades de evento:
            </Paragraph>
            <List>
              <li><strong>onPress:</strong> Equivalente ao <code>onClick</code>. Disparado quando o usuário completa um toque (pressiona e solta).</li>
              <li><strong>onLongPress:</strong> Disparado quando o usuário mantém o dedo pressionado por cerca de meio segundo.</li>
              <li><strong>onPressIn:</strong> Disparado no momento exato em que o dedo do usuário toca a tela.</li>
              <li><strong>onPressOut:</strong> Disparado no momento exato em que o dedo do usuário sai da tela.</li>
            </List>

            <Paragraph>
              <strong>A regra de ouro para memorizar é:</strong>
            </Paragraph>
            <Paragraph>
              Esqueça <code>onClick</code>. Pense em <code>onPress</code> e lembre-se de envolver o que você quer que seja interativo em um componente como <code>TouchableOpacity</code> ou <code>Pressable</code>.
            </Paragraph>

            <Subtitle>Tabela de Equivalência de Eventos: Web vs. React Native</Subtitle>
            <Table>
              <THead>
                <tr>
                  <Th>Categoria</Th>
                  <Th>Propriedade (Web)</Th>
                  <Th>Equivalente (React Native)</Th>
                  <Th>Observações / Como Usar</Th>
                </tr>
              </THead>
              <TBody>
                <tr>
                  <Td><strong>ventos de Clique / Toque</strong></Td>
                  <Td>onClick</Td>
                  <Td><strong>onPress</strong></Td>
                  <Td>O equivalente direto e mais importante. Usado em componentes Pressable, TouchableOpacity, Button, etc.</Td>
                </tr>
                <tr>
                  <Td>Eventos de Clique / Toque</Td>
                  <Td>onDoubleClick</Td>
                  <Td>(não existe)</Td>
                  <Td>O paradigma de clique duplo não é comum no mobile. A ação secundária é geralmente feita com onLongPress.</Td>
                </tr>
                <tr>
                  <Td>Eventos de Clique / Toque</Td>
                  <Td>onMouseDown</Td>
                  <Td>onPressIn</Td>
                  <Td>Disparado no instante em que o dedo toca a tela. Útil para feedback visual imediato.</Td>
                </tr>
                <tr>
                  <Td>Eventos de Clique / Toque</Td>
                  <Td>onMouseUp</Td>
                  <Td>onPressOut</Td>
                  <Td>Disparado no instante em que o dedo deixa a tela.</Td>
                </tr>
                <tr>
                  <Td>Eventos de Clique / Toque</Td>
                  <Td>onMouseEnter / onMouseLeave</Td>
                  <Td>(não existe)</Td>
                  <Td>Não há conceito de "hover" (ponteiro sobre o elemento) em uma interface de toque.</Td>
                </tr>
                <tr>
                  <Td><strong>Eventos de Input e Formulário</strong></Td>
                  <Td>onChange (em &lt;input&gt;)</Td>
                  <Td><strong>onChangeText</strong></Td>
                  <Td>O mais recomendado. Passa diretamente o texto atualizado ((text) => ...). É mais simples e direto que o onChange da web.</Td>
                </tr>
                <tr>
                  <Td>Eventos de Input e Formulário</Td>
                  <Td>onChange</Td>
                  <Td>onChange</Td>
                  <Td>Também existe, mas é menos prático. Passa o objeto de evento completo {' (({nativeEvent: {text} }) => ...)'}. Você usará onChangeText em 99% dos casos.</Td>
                </tr>
                <tr>
                  <Td>Eventos de Input e Formulário</Td>
                  <Td>onSubmit (em &lt;form&gt;)</Td>
                  <Td>onSubmitEditing</Td>
                  <Td>Usado no componente &lt;TextInput&gt;. É disparado quando o usuário pressiona o botão de "enviar" ou "return" do teclado virtual.</Td>
                </tr>
                <tr>
                  <Td>Eventos de Input e Formulário</Td>
                  <Td>onFocus</Td>
                  <Td>onFocus</Td>
                  <Td>Equivalente direto. Disparado quando um campo de input (como &lt;TextInput&gt;) ganha foco.</Td>
                </tr>
                <tr>
                  <Td>Eventos de Input e Formulário</Td>
                  <Td>onBlur</Td>
                  <Td>onBlur</Td>
                  <Td>Equivalente direto. Disparado quando um campo de input perde o foco.</Td>
                </tr>
                <tr>
                  <Td><strong>Eventos de Teclado</strong></Td>
                  <Td>onKeyDown / onKeyUp</Td>
                  <Td><strong>onKeyPress</strong></Td>
                  <Td>Usado no &lt;TextInput&gt;. Disparado quando uma tecla é pressionada. O evento contém a tecla {'(({nativeEvent: {key} }) => ...)'}.</Td>
                </tr>
                <tr>
                  <Td>Eventos de Rolagem (Scroll)</Td>
                  <Td>onScroll</Td>
                  <Td>onScroll</Td>
                  <Td>Equivalente direto. Usado em componentes como &lt;ScrollView&gt; e &lt;FlatList&gt;. O evento fornece a posição da rolagem.</Td>
                </tr>
                <tr>
                  <Td>Eventos de Rolagem (Scroll)</Td>
                  <Td>(não existe)</Td>
                  <Td>onMomentumScrollEnd</Td>
                  <Td>Específico do mobile. Disparado quando o usuário arrasta e solta a tela e a rolagem termina por inércia.</Td>
                </tr>
                <tr>
                  <Td>Eventos de Rolagem (Scroll)</Td>
                  <Td>(não existe)</Td>
                  <Td>onEndReached</Td>
                  <Td>Essencial para "rolagem infinita". Disparado em &lt;FlatList&gt; quando o usuário chega perto do final da lista.</Td>
                </tr>
                <tr>
                  <Td>Eventos de Mídia (Imagens)</Td>
                  <Td>onLoad</Td>
                  <Td>onLoad</Td>
                  <Td>Equivalente direto. Usado no componente &lt;Image&gt;. Disparado quando a imagem é carregada com sucesso.</Td>
                </tr>
                <tr>
                  <Td>Eventos de Mídia (Imagens)</Td>
                  <Td>onError</Td>
                  <Td>onError</Td>
                  <Td>Equivalente direto. Usado no &lt;Image&gt;. Disparado se houver um erro ao carregar a imagem.</Td>
                </tr>
                <tr>
                  <Td>Eventos de Mídia (Imagens)</Td>
                  <Td>(não existe)</Td>
                  <Td>onLoadStart / onLoadEnd</Td>
                  <Td>Útil para controlar indicadores de carregamento. Disparados no início e no fim (sucesso ou erro) do carregamento de uma imagem.</Td>
                </tr>
              </TBody>
            </Table>
            <Subtitle>E os Eventos de Arrastar e Gestos Complexos? (onMouseMove, onDragStart, etc.)</Subtitle>
            <Paragraph>
              Este é um ponto onde a filosofia muda completamente. Em vez de eventos simples como <strong>onMouseMove</strong>, o React Native lida com gestos complexos de forma mais estruturada.
            </Paragraph>
            <Paragraph>
              Para capturar movimentos de arrastar, "pinça" para zoom, ou rotação, você não usará uma propriedade simples. Em vez disso, você usará APIs mais poderosas:
            </Paragraph>
            <Paragraph>
              <strong>PanResponder (Nativo do React Native):</strong> Uma API mais antiga, mas ainda funcional, para criar gestos simples de arrastar.
            </Paragraph>
            <Paragraph>
              <strong>React Native Gesture Handler (Biblioteca Recomendada):</strong> Esta é a biblioteca padrão da indústria para qualquer gesto complexo. Ela fornece uma API declarativa e componentes (<strong>&lt;GestureDetector&gt;</strong>, <strong>&lt;Tap&gt;</strong>, <strong>&lt;Pan&gt;</strong>, <strong>&lt;Pinch&gt;</strong>) que rodam na thread de UI nativa, garantindo que seus gestos sejam extremamente fluidos e responsivos, mesmo que a lógica do seu app esteja ocupada.
            </Paragraph>
            <Paragraph>
              <strong>Resumindo:</strong> Enquanto muitos eventos básicos têm um equivalente direto ou muito similar, você deve sempre "pensar em mobile". Em vez de procurar uma cópia exata do comportamento da web, abrace as novas propriedades e APIs como <strong>onLongPress</strong>, <strong>onEndReached</strong> e as bibliotecas de gestos, pois elas foram projetadas especificamente para criar as melhores experiências em interfaces de toque.
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
export default EventProperties;