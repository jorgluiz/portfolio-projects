// // import { Container, SectionTitle, Subtitle, CodeBlock, Paragraph, List, CodeSpanSelector, CodeSpanValue, CodeSpanImportant, Warning } from "@/styles/globalStyles";

// // const ThemeCssUserSelect = () => {

// //   // Helper to render code lines with colors (simplified)
// //   // You can extend or modify as needed
// //   const CodeLine = ({ children }) => <div>{children}</div>;

// //   return (
// //     <Container>
// //       <SectionTitle>📝 Remoção e Controle do user-select no theme.css</SectionTitle>

// //       <Subtitle>Regras CSS removidas do <code>theme.css</code>:</Subtitle>
// //       <CodeBlock>
// //         <CodeLine><CodeSpanSelector>html body *, html body.ds *</CodeSpanSelector> {'{'}</CodeLine>
// //         <CodeLine>  user-select: <CodeSpanValue>none</CodeSpanValue> <CodeSpanImportant>!important</CodeSpanImportant>;</CodeLine>
// //         <CodeLine>{'}'}</CodeLine>
// //         <CodeLine><CodeSpanSelector>img</CodeSpanSelector> {'{'}</CodeLine>
// //         <CodeLine>  pointer-events: <CodeSpanValue>none</CodeSpanValue>;</CodeLine>
// //         <CodeLine>{'}'}</CodeLine>
// //         <CodeLine><CodeSpanSelector>div[id][style^="position: fixed;bottom: 10px;left: 10px;"]</CodeSpanSelector> {'{'}</CodeLine>
// //         <CodeLine>  display: <CodeSpanValue>none</CodeSpanValue> <CodeSpanImportant>!important</CodeSpanImportant>;</CodeLine>
// //         <CodeLine>  bottom: <CodeSpanValue>-20000px</CodeSpanValue> <CodeSpanImportant>!important</CodeSpanImportant>;</CodeLine>
// //         <CodeLine>  left: <CodeSpanValue>-20000px</CodeSpanValue> <CodeSpanImportant>!important</CodeSpanImportant>;</CodeLine>
// //         <CodeLine>  opacity: <CodeSpanValue>0</CodeSpanValue> <CodeSpanImportant>!important</CodeSpanImportant>;</CodeLine>
// //         <CodeLine>  pointer-events: <CodeSpanValue>none</CodeSpanValue> <CodeSpanImportant>!important</CodeSpanImportant>;</CodeLine>
// //         <CodeLine>{'}'}</CodeLine>
// //       </CodeBlock>

// //       <Subtitle>Regras removidas do <code>theme.css</code> para <code>body</code>:</Subtitle>
// //       <CodeBlock>
// //         <CodeLine><CodeSpanSelector>body</CodeSpanSelector> {'{'}</CodeLine>
// //         <CodeLine>  -webkit-touch-callout: <CodeSpanValue>none</CodeSpanValue>;</CodeLine>
// //         <CodeLine>  -webkit-user-select: <CodeSpanValue>none</CodeSpanValue>;</CodeLine>
// //         <CodeLine>  -khtml-user-select: <CodeSpanValue>none</CodeSpanValue>;</CodeLine>
// //         <CodeLine>  -moz-user-select: <CodeSpanValue>none</CodeSpanValue>;</CodeLine>
// //         <CodeLine>  -ms-user-select: <CodeSpanValue>none</CodeSpanValue>;</CodeLine>
// //         <CodeLine>  user-select: <CodeSpanValue>none</CodeSpanValue>;</CodeLine>
// //         <CodeLine>{'}'}</CodeLine>
// //       </CodeBlock>

// //       <Subtitle>Regras que <strong>não foram removidas</strong> do <code>theme.css</code>:</Subtitle>
// //       <CodeBlock>
// //         <CodeLine><CodeSpanSelector>.flickity-enabled.is-draggable</CodeSpanSelector> {'{'}</CodeLine>
// //         <CodeLine>  -webkit-tap-highlight-color: <CodeSpanValue>transparent</CodeSpanValue>;</CodeLine>
// //         <CodeLine>  -webkit-user-select: <CodeSpanValue>none</CodeSpanValue>;</CodeLine>
// //         <CodeLine>  -moz-user-select: <CodeSpanValue>none</CodeSpanValue>;</CodeLine>
// //         <CodeLine>  -ms-user-select: <CodeSpanValue>none</CodeSpanValue>;</CodeLine>
// //         <CodeLine>  user-select: <CodeSpanValue>none</CodeSpanValue>;</CodeLine>
// //         <CodeLine>{'}'}</CodeLine>

// //         <CodeLine></CodeLine>

// //         <CodeLine><CodeSpanSelector>.pswp__container, .pswp__img</CodeSpanSelector> {'{'}</CodeLine>
// //         <CodeLine>  -webkit-user-select: <CodeSpanValue>none</CodeSpanValue>;</CodeLine>
// //         <CodeLine>  -moz-user-select: <CodeSpanValue>none</CodeSpanValue>;</CodeLine>
// //         <CodeLine>  -ms-user-select: <CodeSpanValue>none</CodeSpanValue>;</CodeLine>
// //         <CodeLine>  user-select: <CodeSpanValue>none</CodeSpanValue>;</CodeLine>
// //         <CodeLine>  -webkit-tap-highlight-color: <CodeSpanValue>transparent</CodeSpanValue>;</CodeLine>
// //         <CodeLine>  -webkit-touch-callout: <CodeSpanValue>none</CodeSpanValue>;</CodeLine>
// //         <CodeLine>{'}'}</CodeLine>

// //         <CodeLine></CodeLine>

// //         <CodeLine><CodeSpanSelector>.footer__title[disabled]</CodeSpanSelector> {'{'}</CodeLine>
// //         <CodeLine>  cursor: <CodeSpanValue>text</CodeSpanValue>;</CodeLine>
// //         <CodeLine>  -webkit-user-select: <CodeSpanValue>text</CodeSpanValue>;</CodeLine>
// //         <CodeLine>  -moz-user-select: <CodeSpanValue>text</CodeSpanValue>;</CodeLine>
// //         <CodeLine>  -ms-user-select: <CodeSpanValue>text</CodeSpanValue>;</CodeLine>
// //         <CodeLine>  user-select: <CodeSpanValue>text</CodeSpanValue>;</CodeLine>
// //         <CodeLine>{'}'}</CodeLine>
// //       </CodeBlock>

// //       <Warning>
// //         ⚠️ <strong>Dica extra:</strong><br />
// //         Para permitir seleção de texto apenas em certas partes da página, use:
// //         <CodeBlock style={{ marginTop: '8px' }}>
// //           {`html body * {
// //   user-select: none !important;
// // }

// // .allow-select,
// // .allow-select * {
// //   user-select: text !important;
// // }`}
// //         </CodeBlock>
// //         E aplique a classe <code>allow-select</code> nos elementos onde deseja permitir seleção (ex: textos, descrições, blocos informativos).
// //       </Warning>

// //       <Subtitle>Flickity e PhotoSwipe</Subtitle>
// //       <Paragraph>
// //         Estas são bibliotecas JavaScript populares usadas para criar carrosséis (sliders) e galerias de imagens.
// //       </Paragraph>
// //       <List>
// //         <li><strong>Flickity:</strong> usada para sliders/carrosséis interativos.</li>
// //         <li><strong>PhotoSwipe (pswp):</strong> usada para galerias de imagem com efeito popup/zoom.</li>
// //       </List>
// //       <Paragraph>
// //         Essas bibliotecas aplicam regras como <code>user-select: none;</code> para evitar que o usuário:
// //       </Paragraph>
// //       <List>
// //         <li>Selecione conteúdo acidentalmente ao arrastar o slider.</li>
// //         <li>Copie imagens ou legendas por engano.</li>
// //         <li>Tenha comportamentos inesperados em dispositivos móveis (ex: seleção de texto ao tocar/arrastar).</li>
// //         <li>Você pode remover ou ajustar essas regras para permitir seleção de textos, imagens, links etc., mesmo nesses componentes.</li>
// //       </List>
// //     </Container>

// //   );
// // };

// // export default ThemeCssUserSelect;

// import { useEffect } from 'react';
// import { Container, SectionTitle, Subtitle, CodeBlock, Paragraph, List, CodeSpanSelector, CodeSpanValue, CodeSpanImportant, Warning } from "@/styles/globalStyles";
// import hljs from 'highlight.js'; // Importando o highlight.js
// import 'highlight.js/styles/atom-one-dark.css'; // Estilo para colorir a sintaxe

// const ThemeCssUserSelect = () => {
//   useEffect(() => {
//     hljs.highlightAll(); // Aplica o destaque de sintaxe a todos os blocos de código
//   }, []);

//   // Helper para renderizar linhas de código com cores
//   const CodeLine = ({ children }) => {
//     const highlightedCode = hljs.highlightAuto(String(children)).value; // Garantir que o conteúdo seja tratado como string
//     return <div dangerouslySetInnerHTML={{ __html: highlightedCode }} />;
//   };

//   return (
//     <Container>
//       <SectionTitle>📝 Remoção e Controle do user-select no theme.css</SectionTitle>

//       <Subtitle>Regras CSS removidas do <code>theme.css</code>:</Subtitle>
//       <CodeBlock>
//         <CodeLine><CodeSpanSelector>html body *, html body.ds *</CodeSpanSelector> {'{'}</CodeLine>
//         <CodeLine>  user-select: <CodeSpanValue>none</CodeSpanValue> <CodeSpanImportant>!important</CodeSpanImportant>;</CodeLine>
//         <CodeLine>{'}'}</CodeLine>
//         <CodeLine><CodeSpanSelector>img</CodeSpanSelector> {'{'}</CodeLine>
//         <CodeLine>  pointer-events: <CodeSpanValue>none</CodeSpanValue>;</CodeLine>
//         <CodeLine>{'}'}</CodeLine>
//         <CodeLine><CodeSpanSelector>div[id][style^="position: fixed;bottom: 10px;left: 10px;"]</CodeSpanSelector> {'{'}</CodeLine>
//         <CodeLine>  display: <CodeSpanValue>none</CodeSpanValue> <CodeSpanImportant>!important</CodeSpanImportant>;</CodeLine>
//         <CodeLine>  bottom: <CodeSpanValue>-20000px</CodeSpanValue> <CodeSpanImportant>!important</CodeSpanImportant>;</CodeLine>
//         <CodeLine>  left: <CodeSpanValue>-20000px</CodeSpanValue> <CodeSpanImportant>!important</CodeSpanImportant>;</CodeLine>
//         <CodeLine>  opacity: <CodeSpanValue>0</CodeSpanValue> <CodeSpanImportant>!important</CodeSpanImportant>;</CodeLine>
//         <CodeLine>  pointer-events: <CodeSpanValue>none</CodeSpanValue> <CodeSpanImportant>!important</CodeSpanImportant>;</CodeLine>
//         <CodeLine>{'}'}</CodeLine>
//       </CodeBlock>

//       <Subtitle>Regras removidas do <code>theme.css</code> para <code>body</code>:</Subtitle>
//       <CodeBlock>
//         <CodeLine><CodeSpanSelector>body</CodeSpanSelector> {'{'}</CodeLine>
//         <CodeLine>  -webkit-touch-callout: <CodeSpanValue>none</CodeSpanValue>;</CodeLine>
//         <CodeLine>  -webkit-user-select: <CodeSpanValue>none</CodeSpanValue>;</CodeLine>
//         <CodeLine>  -khtml-user-select: <CodeSpanValue>none</CodeSpanValue>;</CodeLine>
//         <CodeLine>  -moz-user-select: <CodeSpanValue>none</CodeSpanValue>;</CodeLine>
//         <CodeLine>  -ms-user-select: <CodeSpanValue>none</CodeSpanValue>;</CodeLine>
//         <CodeLine>  user-select: <CodeSpanValue>none</CodeSpanValue>;</CodeLine>
//         <CodeLine>{'}'}</CodeLine>
//       </CodeBlock>

//       <Subtitle>Regras que <strong>não foram removidas</strong> do <code>theme.css</code>:</Subtitle>
//       <CodeBlock>
//         <CodeLine><CodeSpanSelector>.flickity-enabled.is-draggable</CodeSpanSelector> {'{'}</CodeLine>
//         <CodeLine>  -webkit-tap-highlight-color: <CodeSpanValue>transparent</CodeSpanValue>;</CodeLine>
//         <CodeLine>  -webkit-user-select: <CodeSpanValue>none</CodeSpanValue>;</CodeLine>
//         <CodeLine>  -moz-user-select: <CodeSpanValue>none</CodeSpanValue>;</CodeLine>
//         <CodeLine>  -ms-user-select: <CodeSpanValue>none</CodeSpanValue>;</CodeLine>
//         <CodeLine>  user-select: <CodeSpanValue>none</CodeSpanValue>;</CodeLine>
//         <CodeLine>{'}'}</CodeLine>

//         <CodeLine></CodeLine>

//         <CodeLine><CodeSpanSelector>.pswp__container, .pswp__img</CodeSpanSelector> {'{'}</CodeLine>
//         <CodeLine>  -webkit-user-select: <CodeSpanValue>none</CodeSpanValue>;</CodeLine>
//         <CodeLine>  -moz-user-select: <CodeSpanValue>none</CodeSpanValue>;</CodeLine>
//         <CodeLine>  -ms-user-select: <CodeSpanValue>none</CodeSpanValue>;</CodeLine>
//         <CodeLine>  user-select: <CodeSpanValue>none</CodeSpanValue>;</CodeLine>
//         <CodeLine>  -webkit-tap-highlight-color: <CodeSpanValue>transparent</CodeSpanValue>;</CodeLine>
//         <CodeLine>  -webkit-touch-callout: <CodeSpanValue>none</CodeSpanValue>;</CodeLine>
//         <CodeLine>{'}'}</CodeLine>

//         <CodeLine></CodeLine>

//         <CodeLine><CodeSpanSelector>.footer__title[disabled]</CodeSpanSelector> {'{'}</CodeLine>
//         <CodeLine>  cursor: <CodeSpanValue>text</CodeSpanValue>;</CodeLine>
//         <CodeLine>  -webkit-user-select: <CodeSpanValue>text</CodeSpanValue>;</CodeLine>
//         <CodeLine>  -moz-user-select: <CodeSpanValue>text</CodeSpanValue>;</CodeLine>
//         <CodeLine>  -ms-user-select: <CodeSpanValue>text</CodeSpanValue>;</CodeLine>
//         <CodeLine>  user-select: <CodeSpanValue>text</CodeSpanValue>;</CodeLine>
//         <CodeLine>{'}'}</CodeLine>
//       </CodeBlock>

//       <Warning>
//         ⚠️ <strong>Dica extra:</strong><br />
//         Para permitir seleção de texto apenas em certas partes da página, use:
//         <CodeBlock>
//           <CodeLine>{`html body * {
//   user-select: none !important;
// }

// .allow-select,
// .allow-select * {
//   user-select: text !important;
// }`}</CodeLine>
//         </CodeBlock>
//         E aplique a classe <code>allow-select</code> nos elementos onde deseja permitir seleção (ex: textos, descrições, blocos informativos).
//       </Warning>

//       <Subtitle>Flickity e PhotoSwipe</Subtitle>
//       <Paragraph>
//         Estas são bibliotecas JavaScript populares usadas para criar carrosséis (sliders) e galerias de imagens.
//       </Paragraph>
//       <List>
//         <li><strong>Flickity:</strong> usada para sliders/carrosséis interativos.</li>
//         <li><strong>PhotoSwipe (pswp):</strong> usada para galerias de imagem com efeito popup/zoom.</li>
//       </List>
//       <Paragraph>
//         Essas bibliotecas aplicam regras como <code>user-select: none;</code> para evitar que o usuário:
//       </Paragraph>
//       <List>
//         <li>Selecione conteúdo acidentalmente ao arrastar o slider.</li>
//         <li>Copie imagens ou legendas por engano.</li>
//         <li>Tenha comportamentos inesperados em dispositivos móveis (ex: seleção de texto ao tocar/arrastar).</li>
//         <li>Você pode remover ou ajustar essas regras para permitir seleção de textos, imagens, links etc., mesmo nesses componentes.</li>
//       </List>
//     </Container>
//   );
// };

// export default ThemeCssUserSelect;

import { useEffect } from 'react';
import { Container, SectionTitle, Subtitle, CodeBlock, Paragraph, List, CodeSpanSelector, CodeSpanValue, CodeSpanImportant, Warning } from "@/styles/globalStyles";
import hljs from 'highlight.js'; // Importando o highlight.js
import 'highlight.js/styles/atom-one-dark.css'; // Estilo para colorir a sintaxe

const ThemeCssUserSelect = () => {
  useEffect(() => {
    hljs.highlightAll(); // Aplica o destaque de sintaxe a todos os blocos de código
  }, []);

  return (
    <Container>
      <SectionTitle>📝 Remoção e Controle do user-select no theme.css</SectionTitle>

      <Subtitle>Regras CSS removidas do <code>theme.css</code>:</Subtitle>
      <pre>
        <code>
          {`html body *, html body.ds * {
  user-select: none !important;
}

img {
  pointer-events: none;
}

div[id][style^="position: fixed;bottom: 10px;left: 10px;"] {
  display: none !important;
  bottom: -20000px !important;
  left: -20000px !important;
  opacity: 0 !important;
  pointer-events: none !important;
}`}
        </code>
      </pre>

      <Subtitle>Regras removidas do <code>theme.css</code> para <code>body</code>:</Subtitle>
      <pre>
        <code>
          {`body {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}`}
        </code>
      </pre>

      <Subtitle>Regras que <strong>não foram removidas</strong> do <code>theme.css</code>:</Subtitle>

      <pre>
        <code>
          {`.flickity-enabled.is-draggable {
  -webkit-tap-highlight-color: transparent;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}`}
        </code>
      </pre>
      <pre>
        <code>
          {`.pswp__container, .pswp__img {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
}`}
        </code>
      </pre>
      <pre>
        <code>
          {`.footer__title[disabled] {
  cursor: text;
  -webkit-user-select: text;
  -moz-user-select: text;
  -ms-user-select: text;
  user-select: text;
}`}
        </code>
      </pre>

      <Warning>
        ⚠️ <strong>Dica extra:</strong><br />
        Para permitir seleção de texto apenas em certas partes da página, use:
        <CodeBlock>
          <pre>
            <code>
              {`html body * {
  user-select: none !important;
}

.allow-select,
.allow-select * {
  user-select: text !important;
}`}
            </code>
          </pre>
        </CodeBlock>
        E aplique a classe <code>allow-select</code> nos elementos onde deseja permitir seleção (ex: textos, descrições, blocos informativos).
      </Warning>

      <Subtitle>Flickity e PhotoSwipe</Subtitle>
      <Paragraph>
        Estas são bibliotecas JavaScript populares usadas para criar carrosséis (sliders) e galerias de imagens.
      </Paragraph>
      <List>
        <li><strong>Flickity:</strong> usada para sliders/carrosséis interativos.</li>
        <li><strong>PhotoSwipe (pswp):</strong> usada para galerias de imagem com efeito popup/zoom.</li>
      </List>
      <Paragraph>
        Essas bibliotecas aplicam regras como <code>user-select: none;</code> para evitar que o usuário:
      </Paragraph>
      <List>
        <li>Selecione conteúdo acidentalmente ao arrastar o slider.</li>
        <li>Copie imagens ou legendas por engano.</li>
        <li>Tenha comportamentos inesperados em dispositivos móveis (ex: seleção de texto ao tocar/arrastar).</li>
        <li>Você pode remover ou ajustar essas regras para permitir seleção de textos, imagens, links etc., mesmo nesses componentes.</li>
      </List>
    </Container>
  );
};

export default ThemeCssUserSelect;
