const PlataformasCriacaoVideoArte = () => {
  const container = {
    fontFamily: "Segoe UI, sans-serif",
    maxWidth: 900,
    margin: "0 auto 40px",
    padding: 15,
    backgroundColor: "#f9f9f9",
    color: "#222",
    borderRadius: 12,
    boxShadow: "0 0 20px rgba(0,0,0,0.05)",
    lineHeight: 1.5,
  };

  const sectionTitle = {
    fontSize: 24,
    fontWeight: 700,
    marginBottom: 20,
  };

  const subtitle = {
    fontSize: 20,
    fontWeight: 600,
    marginTop: 24,
    marginBottom: 12,
    borderBottom: "2px solid #ddd",
    paddingBottom: 6,
  };

  const paragraph = {
    fontSize: 16,
    marginBottom: 12,
  };

  const list = {
    paddingLeft: 20,
    marginBottom: 12,
  };

  const link = {
    color: "#0070f3",
    textDecoration: "none",
  };

  const BoldLabel = ({ children }) => <strong>{children}</strong>;

  return (
    <div style={container}>
      <div style={sectionTitle}>
        Plataformas para Criação de Vídeos e Arte com IA: Funcionalidades, Tempo e Monetização
      </div>

      <p style={paragraph}>
        Vamos explorar cada uma dessas plataformas com foco no que elas oferecem,
        tempo de criação de vídeos ou arte e como ganhar dinheiro com elas.
        O objetivo é que você entenda qual tipo de trabalho pode ser feito e como monetizar esses serviços.
      </p>

      <div style={subtitle}>1. InVideo.io</div>
      <ul style={list}>
        <li><BoldLabel>Funcionalidade:</BoldLabel> Criação de vídeos prontos para redes sociais, marketing e vídeos institucionais com modelos predefinidos.</li>
        <li><BoldLabel>Tempo de Criação:</BoldLabel> 10-20 minutos com modelos pré-prontos, dependendo da personalização.</li>
        <li><BoldLabel>Trabalho e Monetização:</BoldLabel> Vídeos publicitários para pequenas e médias empresas, cobrando por projeto ou pacotes mensais.</li>
        <li><a href="https://ai.invideo.io/" style={link} target="_blank" rel="noreferrer">https://ai.invideo.io/</a></li>
      </ul>

      <div style={subtitle}>2. Pictory</div>
      <ul style={list}>
        <li><BoldLabel>Funcionalidade:</BoldLabel> Converte texto em vídeos automaticamente, ideal para blogs, artigos e scripts.</li>
        <li><BoldLabel>Tempo de Criação:</BoldLabel> 10-15 minutos.</li>
        <li><BoldLabel>Trabalho e Monetização:</BoldLabel> Vídeos explicativos para blogueiros, marketing e e-learning. Cobrar por vídeo ou serviços de conversão.</li>
        <li><a href="https://pictory.ai" style={link} target="_blank" rel="noreferrer">pictory.ai</a></li>
      </ul>

      <div style={subtitle}>3. Steve.ai</div>
      <ul style={list}>
        <li><BoldLabel>Funcionalidade:</BoldLabel> Vídeos animados a partir de texto com avatares e personagens.</li>
        <li><BoldLabel>Tempo de Criação:</BoldLabel> 15-30 minutos.</li>
        <li><BoldLabel>Trabalho e Monetização:</BoldLabel> Animações para marketing e educação, atendendo pequenas empresas e freelancers.</li>
        <li><a href="https://www.steve.ai/" style={link} target="_blank" rel="noreferrer">https://www.steve.ai/</a></li>
      </ul>

      <div style={subtitle}>4. Haiper.ai</div>
      <ul style={list}>
        <li><BoldLabel>Funcionalidade:</BoldLabel> IA combinada com automação para vídeos de marketing e conteúdo visual.</li>
        <li><BoldLabel>Tempo de Criação:</BoldLabel> 15-20 minutos.</li>
        <li><BoldLabel>Trabalho e Monetização:</BoldLabel> Serviços de criação de vídeos para campanhas automatizadas para pequenas empresas e agências.</li>
        <li><a href="https://haiper.ai/" style={link} target="_blank" rel="noreferrer">https://haiper.ai/</a></li>
      </ul>

      <div style={subtitle}>5. RunwayML</div>
      <ul style={list}>
        <li><BoldLabel>Funcionalidade:</BoldLabel> Vídeos e efeitos visuais com IA, edição avançada e cenas baseadas em texto.</li>
        <li><BoldLabel>Tempo de Criação:</BoldLabel> 30 min a algumas horas, conforme complexidade.</li>
        <li><BoldLabel>Trabalho e Monetização:</BoldLabel> Efeitos para filmes, anúncios e produção criativa, cobrando preços altos.</li>
        <li><a href="https://runwayml.com/" style={link} target="_blank" rel="noreferrer">https://runwayml.com/</a></li>
      </ul>

      <div style={subtitle}>6. Dream-Machine</div>
      <ul style={list}>
        <li><BoldLabel>Funcionalidade:</BoldLabel> Gera vídeos artísticos com base em imagens e textos.</li>
        <li><BoldLabel>Tempo de Criação:</BoldLabel> 15-30 minutos.</li>
        <li><BoldLabel>Trabalho e Monetização:</BoldLabel> Arte digital em vídeo vendida como NFTs ou peças para galerias digitais.</li>
        <li><a href="https://lumalabs.ai/dream-machine" style={link} target="_blank" rel="noreferrer">https://lumalabs.ai/dream-machine</a></li>
      </ul>

      <div style={subtitle}>7. LTX Studio</div>
      <ul style={list}>
        <li><BoldLabel>Funcionalidade:</BoldLabel> Vídeos para marketing e automação visual.</li>
        <li><BoldLabel>Tempo de Criação:</BoldLabel> 10-20 minutos para vídeos curtos.</li>
        <li><BoldLabel>Trabalho e Monetização:</BoldLabel> Pacotes para campanhas publicitárias, ideal para e-commerce e marketing digital.</li>
        <li><a href="https://ltx.studio/" style={link} target="_blank" rel="noreferrer">https://ltx.studio/</a></li>
      </ul>

      <div style={subtitle}>8. Krea.ai</div>
      <ul style={list}>
        <li><BoldLabel>Funcionalidade:</BoldLabel> Gera imagens conceituais baseadas em IA para design e inspiração.</li>
        <li><BoldLabel>Tempo de Criação:</BoldLabel> Minutos.</li>
        <li><BoldLabel>Trabalho e Monetização:</BoldLabel> Venda de arte digital, NFTs e design gráfico para clientes.</li>
        <li><a href="https://www.krea.ai/home" style={link} target="_blank" rel="noreferrer">https://www.krea.ai/home</a></li>
      </ul>

      <div style={subtitle}>9. Hedra</div>
      <ul style={list}>
        <li><BoldLabel>Funcionalidade:</BoldLabel> Vídeos interativos personalizados via IA.</li>
        <li><BoldLabel>Tempo de Criação:</BoldLabel> 30 minutos ou mais.</li>
        <li><BoldLabel>Trabalho e Monetização:</BoldLabel> Vídeos para marketing interativo e educação online, cobrando projetos complexos.</li>
        <li><a href="https://www.hedra.com/" style={link} target="_blank" rel="noreferrer">https://www.hedra.com/</a></li>
      </ul>

      <div style={subtitle}>10. LivePortrait</div>
      <ul style={list}>
        <li><BoldLabel>Funcionalidade:</BoldLabel> Avatares animados realistas baseados em fotos e descrições.</li>
        <li><BoldLabel>Tempo de Criação:</BoldLabel> 10-15 minutos.</li>
        <li><BoldLabel>Trabalho e Monetização:</BoldLabel> Avatares para e-commerce, atendimento virtual e influenciadores.</li>
        <li><a href="https://liveportrait.org/pt" style={link} target="_blank" rel="noreferrer">https://liveportrait.org/pt</a></li>
      </ul>

      <div style={subtitle}>11. OpenArt.ai</div>
      <ul style={list}>
        <li><BoldLabel>Funcionalidade:</BoldLabel> Criação de arte com IA a partir de texto ou imagens de referência.</li>
        <li><BoldLabel>Tempo de Criação:</BoldLabel> 5-10 minutos.</li>
        <li><BoldLabel>Trabalho e Monetização:</BoldLabel> Venda de arte digital e serviços personalizados de design.</li>
        <li><a href="https://openart.ai/" style={link} target="_blank" rel="noreferrer">https://openart.ai/</a></li>
      </ul>

      <div style={subtitle}>12. Klingai.io</div>
      <ul style={list}>
        <li><BoldLabel>Funcionalidade:</BoldLabel> Vídeos automatizados para marketing em escala.</li>
        <li><BoldLabel>Tempo de Criação:</BoldLabel> 15-30 minutos.</li>
        <li><BoldLabel>Trabalho e Monetização:</BoldLabel> Produção em massa para campanhas publicitárias e marketing.</li>
        <li><a href="https://klingai.io/pt" style={link} target="_blank" rel="noreferrer">https://klingai.io/pt</a></li>
      </ul>

      <div style={subtitle}>13. Imagine.Art</div>
      <ul style={list}>
        <li><BoldLabel>Funcionalidade:</BoldLabel> Arte digital gerada por IA.</li>
        <li><BoldLabel>Tempo de Criação:</BoldLabel> 5-10 minutos.</li>
        <li><BoldLabel>Trabalho e Monetização:</BoldLabel> Venda de arte, NFTs e design gráfico para marcas.</li>
        <li><a href="https://www.imagine.art/dashboard" style={link} target="_blank" rel="noreferrer">https://www.imagine.art/dashboard</a></li>
      </ul>

      <div style={sectionTitle}>Conclusão</div>
      <p style={paragraph}>
        Essas plataformas oferecem diversas oportunidades para criar conteúdo visual e monetizar seu trabalho.
        Se o foco for vídeos, InVideo.io, Steve.ai, RunwayML e Pictory são ótimas opções.
        Para arte digital, OpenArt.ai, Krea.ai e Imagine.Art se destacam.
        A chave para monetizar é se especializar em um nicho, oferecer soluções rápidas e adaptadas às necessidades dos clientes.
      </p>

      <div style={sectionTitle}>Exemplos de Nichos para Especialização</div>

      <div style={subtitle}>Educação e E-learning</div>
      <p style={paragraph}>
        Plataformas: Pictory, Steve.ai, Synthesia<br />
        Produza vídeos curtos para anúncios em Instagram, TikTok e Facebook. Ideal para startups e pequenas empresas. Ofereça pacotes mensais ou semanais.
      </p>

      <div style={subtitle}>Publicidade para Redes Sociais</div>
      <p style={paragraph}>
        Plataformas: InVideo.io, Steve.ai, Veed.io<br />
        Vídeos curtos e diretos para anúncios. Popular entre pequenas empresas e startups, com foco em marketing acessível.
      </p>

      <div style={subtitle}>Arte Digital e NFTs</div>
      <p style={paragraph}>
        Plataformas: OpenArt.ai, Krea.ai, Dream-Machine<br />
        Crie e venda arte digital em marketplaces de NFTs ou para colecionadores. Especialize-se em estilos ou temas populares.
      </p>

      <div style={subtitle}>Animações Explicativas para Startups</div>
      <p style={paragraph}>
        Plataformas: Steve.ai, RunwayML<br />
        Produza animações para startups que precisam comunicar ideias complexas de forma clara e envolvente.
      </p>

      <div style={subtitle}>Marketing Automotivo</div>
      <p style={paragraph}>
        Plataformas: LTX Studio, Haiper.ai<br />
        Crie vídeos para concessionárias, apresentando modelos e serviços. O nicho busca personalização em massa.
      </p>

      <div style={subtitle}>Avatares e Personagens Digitais</div>
      <p style={paragraph}>
        Plataformas: LivePortrait, Synthesia<br />
        Crie avatares digitais para influenciadores, jogos e marcas que querem presença digital única.
      </p>

      <div style={subtitle}>Moda Digital e Virtual</div>
      <p style={paragraph}>
        Plataformas: Krea.ai, RunwayML, Dream-Machine<br />
        Foque em roupas digitais e arte para metaversos e moda virtual. Alta demanda para vestuário de avatares.
      </p>

      <div style={subtitle}>Treinamento de IA e Automação</div>
      <p style={paragraph}>
        Plataformas: Hedra, Synthesia<br />
        Produza conteúdo educacional para empresas treinando funcionários em tecnologias digitais.
      </p>

      <div style={subtitle}>Influenciadores Digitais e Conteúdo de Entretenimento</div>
      <p style={paragraph}>
        Plataformas: LivePortrait, Klingai.io<br />
        Crie vídeos dinâmicos e interativos para influenciadores, ajudando a diferenciar conteúdo nas redes sociais.
      </p>

      <div style={subtitle}>Visualizações de Produtos para E-commerce</div>
      <p style={paragraph}>
        Plataformas: InVideo.io, Haiper.ai<br />
        Vídeos explicativos de produtos para lojas online, melhorando conversões.
      </p>

      <div style={sectionTitle}>Leonardo.ai</div>
      <ul style={list}>
        <li><BoldLabel>Geração de Imagens:</BoldLabel> detalhadas baseadas em texto, estilos variados e customizações.</li>
        <li><BoldLabel>Arte para Jogos:</BoldLabel> conceitos visuais, personagens, cenários e mais.</li>
        <li><BoldLabel>Edição e Ajustes:</BoldLabel> opções para refinar a imagem e cores após geração.</li>
      </ul>

      <p style={paragraph}>
        <BoldLabel>Como ganhar dinheiro:</BoldLabel> venda de arte digital e NFTs, design para jogos, comissões personalizadas, licenciamento e marketing visual.
      </p>

      <p style={paragraph}>
        <BoldLabel>Tempo de criação:</BoldLabel> 1-5 minutos para imagens simples, 10-20 para detalhes.
      </p>

      <p style={paragraph}>
        <BoldLabel>Exemplos de nichos:</BoldLabel> NFTs temáticos, arte para jogos independentes, capas de livros e álbuns, conteúdo para mídias sociais.
      </p>

      <p style={paragraph}>
        Leonardo.ai é uma ferramenta versátil para monetizar arte digital em várias indústrias criativas.
      </p>
    </div>
  );
};

export default PlataformasCriacaoVideoArte;
