import { FaSearch, FaUserAlt, FaShoppingCart, FaList } from 'react-icons/fa'; // ícones para busca, login/cadastro e carrinho
import { MdInfo, MdContactMail, MdPolicy } from 'react-icons/md'; // ícones para sobre, contato e políticas
import { GiShoppingCart } from 'react-icons/gi'; // ícone para carrinho de compras
import { BsFillCheckCircleFill } from 'react-icons/bs'; // ícone para sucesso
import { FaMobileAlt } from 'react-icons/fa'; // ícone de celular
import { MdSecurity } from 'react-icons/md'; // ícone de escudo de segurança
import { FaBox } from 'react-icons/fa'; // ícone de caixa de produto

const ECommerceFeatures = () => {
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

  const iconStyle = {
    marginRight: '8px',
    fontSize: '20px',
    color: '#3498db',
  };

  return (
    <div style={container}>
      <h2 style={sectionTitle}>Funcionalidades do E-commerce</h2>

      <h3 style={sectionTitle}><FaSearch style={iconStyle} /> Navegação e Estrutura</h3>
      <ul style={list}>
        <li style={listItem}>Cabeçalho com navegação principal, menu com categorias.</li>
        <li style={listItem}>Logo com link para home.</li>
        <li style={listItem}>Ícones de busca, login/cadastro e carrinho.</li>
        <li style={listItem}>Rodapé com informações úteis como sobre a loja, contato e links para políticas.</li>
      </ul>

      <h3 style={sectionTitle}><FaList style={iconStyle} /> Página de Listagem de Produtos</h3>
      <ul style={list}>
        <li style={listItem}>Exibição de produtos em grid ou lista.</li>
        <li style={listItem}>Filtro por categoria, preço, marca, etc.</li>
        <li style={listItem}>Ordenação por preço, relevância, mais vendidos.</li>
        <li style={listItem}>Paginação ou scroll infinito.</li>
        <li style={listItem}>Busca com sugestões (autocomplete).</li>
      </ul>

      <h3 style={sectionTitle}><FaBox style={iconStyle} /> Página de Produto</h3>
      <ul style={list}>
        <li style={listItem}>Nome, preço, variações (cor, tamanho).</li>
        <li style={listItem}>Galeria de imagens.</li>
        <li style={listItem}>Descrição detalhada.</li>
        <li style={listItem}>Estoque disponível.</li>
        <li style={listItem}>Avaliações e comentários.</li>
        <li style={listItem}>Botão de "Adicionar ao carrinho" e "Comprar agora".</li>
      </ul>

      <h3 style={sectionTitle}><GiShoppingCart style={iconStyle} /> Carrinho de Compras</h3>
      <ul style={list}>
        <li style={listItem}>Listagem dos produtos adicionados.</li>
        <li style={listItem}>Botões para aumentar/diminuir quantidade e remover produto.</li>
        <li style={listItem}>Total da compra em tempo real.</li>
        <li style={listItem}>Cupom de desconto (se houver).</li>
        <li style={listItem}>Botão de "Finalizar compra".</li>
      </ul>

      <h3 style={sectionTitle}><BsFillCheckCircleFill style={iconStyle} /> Checkout</h3>
      <ul style={list}>
        <li style={listItem}>Formulário com endereço de entrega, forma de entrega (frete), forma de pagamento (Pix, cartão, boleto).</li>
        <li style={listItem}>Dados do cartão com segurança.</li>
        <li style={listItem}>Resumo do pedido e confirmação antes da compra.</li>
        <li style={listItem}>Feedback de status: carregando, sucesso, erro.</li>
      </ul>

      <h3 style={sectionTitle}><FaUserAlt style={iconStyle} /> Autenticação</h3>
      <ul style={list}>
        <li style={listItem}>Login e cadastro com validação e feedback.</li>
        <li style={listItem}>Recuperação de senha.</li>
        <li style={listItem}>Conta do usuário com pedidos anteriores, endereços salvos e dados pessoais.</li>
      </ul>

      <h3 style={sectionTitle}><BsFillCheckCircleFill style={iconStyle} /> Feedbacks e Experiência</h3>
      <ul style={list}>
        <li style={listItem}>Toast de sucesso/erro ao adicionar ao carrinho, fazer login, finalizar compra.</li>
        <li style={listItem}>Skeletons ou loading durante carregamento de páginas.</li>
        <li style={listItem}>Mensagens de erro de validação em formulários.</li>
      </ul>

      <h3 style={sectionTitle}><FaMobileAlt style={iconStyle} /> Responsividade</h3>
      <ul style={list}>
        <li style={listItem}>Interface adaptável a mobile, tablet e desktop.</li>
        <li style={listItem}>Menu mobile (hambúrguer).</li>
        <li style={listItem}>Carrinho e botões bem posicionados.</li>
      </ul>

      <h3 style={sectionTitle}><MdPolicy style={iconStyle} /> SEO e Performance</h3>
      <ul style={list}>
        <li style={listItem}>Títulos e meta tags dinâmicos com Next.js, por exemplo.</li>
        <li style={listItem}>Uso de imagens otimizadas e lazy loading de imagens.</li>
        <li style={listItem}>URL amigável com slugs de produtos/categorias.</li>
      </ul>

      <h3 style={sectionTitle}><MdSecurity style={iconStyle} /> Segurança na Interface</h3>
      <ul style={list}>
        <li style={listItem}>Prevenir XSS com sanitização de inputs.</li>
        <li style={listItem}>Prevenir clique duplo no botão de compra.</li>
        <li style={listItem}>Requisições seguras via HTTPS e tokens.</li>
      </ul>
    </div>
  );
};

export default ECommerceFeatures;
