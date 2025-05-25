const ThemeCssUserSelect = () => {
  const container = {
    fontFamily: 'Segoe UI, sans-serif',
    padding: '15px',
    maxWidth: '900px',
    margin: '0 auto 40px',
    color: '#222',
    backgroundColor: '#f9f9f9',
    borderRadius: '12px',
    boxShadow: '0 0 20px rgba(0,0,0,0.05)',
    lineHeight: '1.5'
  };

  const sectionTitle = {
    fontSize: '24px',
    fontWeight: '700',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center'
  };

  const subtitle = {
    fontSize: '18px',
    fontWeight: '600',
    marginTop: '24px',
    marginBottom: '12px',
    borderBottom: '2px solid #ddd',
    paddingBottom: '6px'
  };

  const codeBlock = {
    backgroundColor: '#f0f0f0',
    color: '#333',
    fontFamily: "'Consolas', 'Courier New', monospace",
    padding: '12px',
    borderRadius: '8px',
    whiteSpace: 'pre-wrap',
    fontSize: '14px',
    marginBottom: '16px',
    overflowX: 'auto',
    boxShadow: 'inset 0 0 5px rgba(0,0,0,0.1)'
  };

  const codeSpanComment = {
    color: '#6a9955' // green (comments)
  };

  const codeSpanSelector = {
    color: '#569cd6' // blue (selectors)
  };

  const codeSpanProperty = {
    color: '#9cdcfe' // light blue (property names)
  };

  const codeSpanValue = {
    color: '#ce9178' // orange (values)
  };

  const codeSpanImportant = {
    color: '#d16969', // red (important, keywords)
    fontWeight: '700'
  };

  const list = {
    paddingLeft: '20px',
    marginBottom: '12px'
  };

  const warning = {
    backgroundColor: '#fff3cd',
    border: '1px solid #ffeeba',
    padding: '12px 16px',
    borderRadius: '8px',
    marginBottom: '20px',
    color: '#856404',
    fontWeight: '600'
  };

  // Helper to render code lines with colors (simplified)
  // You can extend or modify as needed
  const CodeLine = ({ children }) => <div>{children}</div>;

  return (
    <div style={container}>
      <div style={sectionTitle}>📝 Remoção e Controle do user-select no theme.css</div>

      <div style={subtitle}>Regras CSS removidas do <code>theme.css</code>:</div>
      <pre style={codeBlock}>
        <CodeLine><span style={codeSpanSelector}>html body *, html body.ds *</span> {'{'}</CodeLine>
        <CodeLine>  user-select: <span style={codeSpanValue}>none</span> <span style={codeSpanImportant}>!important</span>;</CodeLine>
        <CodeLine>{'}'}</CodeLine>
        <CodeLine><span style={codeSpanSelector}>img</span> {'{'}</CodeLine>
        <CodeLine>  pointer-events: <span style={codeSpanValue}>none</span>;</CodeLine>
        <CodeLine>{'}'}</CodeLine>
        <CodeLine><span style={codeSpanSelector}>div[id][style^="position: fixed;bottom: 10px;left: 10px;"]</span> {'{'}</CodeLine>
        <CodeLine>  display: <span style={codeSpanValue}>none</span> <span style={codeSpanImportant}>!important</span>;</CodeLine>
        <CodeLine>  bottom: <span style={codeSpanValue}>-20000px</span> <span style={codeSpanImportant}>!important</span>;</CodeLine>
        <CodeLine>  left: <span style={codeSpanValue}>-20000px</span> <span style={codeSpanImportant}>!important</span>;</CodeLine>
        <CodeLine>  opacity: <span style={codeSpanValue}>0</span> <span style={codeSpanImportant}>!important</span>;</CodeLine>
        <CodeLine>  pointer-events: <span style={codeSpanValue}>none</span> <span style={codeSpanImportant}>!important</span>;</CodeLine>
        <CodeLine>{'}'}</CodeLine>
      </pre>

      <div style={subtitle}>Regras removidas do <code>theme.css</code> para <code>body</code>:</div>
      <pre style={codeBlock}>
        <CodeLine><span style={codeSpanSelector}>body</span> {'{'}</CodeLine>
        <CodeLine>  -webkit-touch-callout: <span style={codeSpanValue}>none</span>;</CodeLine>
        <CodeLine>  -webkit-user-select: <span style={codeSpanValue}>none</span>;</CodeLine>
        <CodeLine>  -khtml-user-select: <span style={codeSpanValue}>none</span>;</CodeLine>
        <CodeLine>  -moz-user-select: <span style={codeSpanValue}>none</span>;</CodeLine>
        <CodeLine>  -ms-user-select: <span style={codeSpanValue}>none</span>;</CodeLine>
        <CodeLine>  user-select: <span style={codeSpanValue}>none</span>;</CodeLine>
        <CodeLine>{'}'}</CodeLine>
      </pre>

      <div style={subtitle}>Regras que <strong>não foram removidas</strong> do <code>theme.css</code>:</div>
      <pre style={codeBlock}>
        <CodeLine><span style={codeSpanSelector}>.flickity-enabled.is-draggable</span> {'{'}</CodeLine>
        <CodeLine>  -webkit-tap-highlight-color: <span style={codeSpanValue}>transparent</span>;</CodeLine>
        <CodeLine>  -webkit-user-select: <span style={codeSpanValue}>none</span>;</CodeLine>
        <CodeLine>  -moz-user-select: <span style={codeSpanValue}>none</span>;</CodeLine>
        <CodeLine>  -ms-user-select: <span style={codeSpanValue}>none</span>;</CodeLine>
        <CodeLine>  user-select: <span style={codeSpanValue}>none</span>;</CodeLine>
        <CodeLine>{'}'}</CodeLine>

        <CodeLine></CodeLine>

        <CodeLine><span style={codeSpanSelector}>.pswp__container, .pswp__img</span> {'{'}</CodeLine>
        <CodeLine>  -webkit-user-select: <span style={codeSpanValue}>none</span>;</CodeLine>
        <CodeLine>  -moz-user-select: <span style={codeSpanValue}>none</span>;</CodeLine>
        <CodeLine>  -ms-user-select: <span style={codeSpanValue}>none</span>;</CodeLine>
        <CodeLine>  user-select: <span style={codeSpanValue}>none</span>;</CodeLine>
        <CodeLine>  -webkit-tap-highlight-color: <span style={codeSpanValue}>transparent</span>;</CodeLine>
        <CodeLine>  -webkit-touch-callout: <span style={codeSpanValue}>none</span>;</CodeLine>
        <CodeLine>{'}'}</CodeLine>

        <CodeLine></CodeLine>

        <CodeLine><span style={codeSpanSelector}>.footer__title[disabled]</span> {'{'}</CodeLine>
        <CodeLine>  cursor: <span style={codeSpanValue}>text</span>;</CodeLine>
        <CodeLine>  -webkit-user-select: <span style={codeSpanValue}>text</span>;</CodeLine>
        <CodeLine>  -moz-user-select: <span style={codeSpanValue}>text</span>;</CodeLine>
        <CodeLine>  -ms-user-select: <span style={codeSpanValue}>text</span>;</CodeLine>
        <CodeLine>  user-select: <span style={codeSpanValue}>text</span>;</CodeLine>
        <CodeLine>{'}'}</CodeLine>
      </pre>

      <div style={warning}>
        ⚠️ <strong>Dica extra:</strong><br />
        Para permitir seleção de texto apenas em certas partes da página, use:
        <pre style={{ ...codeBlock, marginTop: '8px' }}>
          {`html body * {
  user-select: none !important;
}

.allow-select,
.allow-select * {
  user-select: text !important;
}`}
        </pre>
        E aplique a classe <code>allow-select</code> nos elementos onde deseja permitir seleção (ex: textos, descrições, blocos informativos).
      </div>

      <div style={subtitle}>Flickity e PhotoSwipe</div>
      <p>
        Estas são bibliotecas JavaScript populares usadas para criar carrosséis (sliders) e galerias de imagens.
      </p>
      <ul style={list}>
        <li><strong>Flickity:</strong> usada para sliders/carrosséis interativos.</li>
        <li><strong>PhotoSwipe (pswp):</strong> usada para galerias de imagem com efeito popup/zoom.</li>
      </ul>
      <p>
        Essas bibliotecas aplicam regras como <code>user-select: none;</code> para evitar que o usuário:
      </p>
      <ul style={list}>
        <li>Selecione conteúdo acidentalmente ao arrastar o slider.</li>
        <li>Copie imagens ou legendas por engano.</li>
        <li>Tenha comportamentos inesperados em dispositivos móveis (ex: seleção de texto ao tocar/arrastar).</li>
        <li>Você pode remover ou ajustar essas regras para permitir seleção de textos, imagens, links etc., mesmo nesses componentes.</li>
      </ul>
    </div>
  );
};

export default ThemeCssUserSelect;
