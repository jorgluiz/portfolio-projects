// export default ThemeCssUserSelect;
import { Container, SectionTitle, Subtitle, Paragraph, List, Warning } from "@/styles/globalStyles";
import CodeBlock from "@/components/codeBlock";

const ThemeCssUserSelect = () => {

  return (
    <Container>
      <SectionTitle>📝 Remoção e Controle do user-select no theme.css</SectionTitle>

      <Subtitle>Regras CSS removidas do <code>theme.css</code>:</Subtitle>
      <CodeBlock language="jsx">
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
      </CodeBlock>
      <Subtitle>Regras removidas do <code>theme.css</code> para <code>body</code>:</Subtitle>
      <CodeBlock language="javascript">
        {`body {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}`}
      </CodeBlock>
      <Subtitle>Regras que <strong>não foram removidas</strong> do <code>theme.css</code>:</Subtitle>
      <CodeBlock language="javascript">
        {`.flickity-enabled.is-draggable {
  -webkit-tap-highlight-color: transparent;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}`}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`.pswp__container, .pswp__img {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
}`}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`.footer__title[disabled] {
  cursor: text;
  -webkit-user-select: text;
  -moz-user-select: text;
  -ms-user-select: text;
  user-select: text;
}`}
      </CodeBlock>
      <Warning>
        ⚠️ <strong>Dica extra:</strong><br />
        Para permitir seleção de texto apenas em certas partes da página, use:

        <CodeBlock language="jsx">
          {`html body * {
  user-select: none !important;
}

.allow-select,
.allow-select * {
  user-select: text !important;
}`}
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
