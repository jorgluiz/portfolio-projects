const ImageManagement = () => {
  const container = {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: '#fefefe',
    maxWidth: '900px',
    margin: '24px auto',
    padding: '15px',
    borderRadius: '14px',
    boxShadow: '0 4px 18px rgba(0,0,0,0.08)',
    color: '#2c3e50',
    lineHeight: 1.65,
  };

  const title = {
    fontSize: '28px',
    fontWeight: '800',
    marginBottom: '24px',
    color: '#34495e',
    textAlign: 'center',
    letterSpacing: '0.05em',
  };

  const sectionTitle = {
    fontSize: '22px',
    fontWeight: '700',
    color: '#2c3e50',
    marginTop: '32px',
    marginBottom: '16px',
    borderBottom: '3px solid #3498db',
    paddingBottom: '6px',
  };

  const paragraph = {
    fontSize: '16px',
    marginBottom: '18px',
  };

  const list = {
    paddingLeft: '24px',
    marginBottom: '24px',
  };

  const listItem = {
    marginBottom: '12px',
    fontWeight: '500',
  };


  return (
    <div style={container}>
      <h2 style={sectionTitle}>Gerenciamento de Imagens no Front-end</h2>

      <h3 style={sectionTitle}>1. Upload de Imagens (em geral)</h3>
      <ul style={list}>
        <li style={listItem}>Componente de upload: <strong>drag-and-drop</strong> ou <strong>botão "Escolher arquivo"</strong></li>
        <li style={listItem}>Pré-visualização da imagem (thumbnail) antes do upload.</li>
        <li style={listItem}>Validação:
          <ul style={{ paddingLeft: '24px' }}>
            <li>**Tamanho máximo** (ex: 5MB)</li>
            <li>**Formatos aceitos**: .jpg, .png, .webp</li>
          </ul>
        </li>
        <li style={listItem}>Barra de progresso durante o upload, especialmente útil para uploads grandes ou quando usamos serviços externos.</li>
        <li style={listItem}>Upload via:
          <ul style={{ paddingLeft: '24px' }}>
            <li>API própria (Node/Express)</li>
            <li>Serviços como:
              <ul style={{ paddingLeft: '24px' }}>
                <li>Cloudinary</li>
                <li>Firebase Storage</li>
                <li>AWS S3</li>
                <li>Supabase Storage</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>

      <h3 style={sectionTitle}>2. Logo da Loja</h3>
      <ul style={list}>
        <li style={listItem}>Upload e troca pelo painel administrativo (opcional).</li>
        <li style={listItem}>Exibido em:
          <ul style={{ paddingLeft: '24px' }}>
            <li>Cabeçalho</li>
            <li>Rodapé</li>
            <li>Favicon (ícone da aba do navegador)</li>
          </ul>
        </li>
        <li style={listItem}>Armazenamento e exibição responsiva (preferencialmente **SVG** para qualidade e leveza).</li>
      </ul>

      <h3 style={sectionTitle}>3. Banner Principal (Hero)</h3>
      <ul style={list}>
        <li style={listItem}>Pode ser um <strong>carrossel (slider)</strong> com:
          <ul style={{ paddingLeft: '24px' }}>
            <li>Imagem</li>
            <li>Texto promocional</li>
            <li>Botão "Ver produtos" ou "Compre agora"</li>
          </ul>
        </li>
        <li style={listItem}>Controle via painel administrativo (opcional).</li>
        <li style={listItem}>Carrossel utilizando bibliotecas como:
          <ul style={{ paddingLeft: '24px' }}>
            <li>Swiper.js</li>
            <li>Splide</li>
            <li>React Slick</li>
          </ul>
        </li>
        <li style={listItem}>Imagens otimizadas (ex: **WebP**, tamanho ajustado).</li>
      </ul>

      <h3 style={sectionTitle}>4. Imagens de Produtos</h3>
      <ul style={list}>
        <li style={listItem}>Upload de múltiplas imagens por produto.</li>
        <li style={listItem}>Ordenação das imagens (imagem principal + galeria).</li>
        <li style={listItem}>Pré-visualização e edição das imagens no painel administrativo.</li>
        <li style={listItem}>Funcionalidade de zoom, lightbox ou rotação na página do produto.</li>
      </ul>

      <h3 style={sectionTitle}>5. Biblioteca de componentes úteis para isso:</h3>
      <ul style={list}>
        <li style={listItem}><strong>react-dropzone</strong>: Para upload com drag-and-drop.</li>
        <li style={listItem}><strong>react-image-gallery</strong>: Para galeria de imagens de produtos.</li>
        <li style={listItem}><strong>react-firebase-hooks</strong>: Se estiver usando o Firebase Storage.</li>
        <li style={listItem}><strong>@uploadthing/react</strong>: Para upload simples via API REST ou Edge Function.</li>
      </ul>

      <p style={paragraph}>
        <strong>Painel administrativo</strong>, esse gerenciamento de imagem deve estar acessível lá. No front-end do cliente (usuário final), o objetivo é apenas ler e exibir essas imagens.
      </p>
    </div>
  );
};

export default ImageManagement;
