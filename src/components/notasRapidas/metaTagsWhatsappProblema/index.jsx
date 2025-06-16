// export default MetaTagsWhatsappProblema;
import { Container, SectionTitle, Problem, Solution, List } from "@/styles/globalStyles";
import CodeBlock from "@/components/codeBlock";

const MetaTagsWhatsappProblema = () => {

  return (
    <Container>
      <SectionTitle>
        <span role="img" aria-label="warning" style={{ marginRight: 8 }}>⚠️</span>
        Problema e Solução: Meta Tags e Compartilhamento no WhatsApp
      </SectionTitle>

      <Problem>
        <strong>🔹 Problema:</strong> Meta Tags e Compartilhamento no WhatsApp com <strong>useEffect</strong><br />
        Ao compartilhar a página no WhatsApp, a prévia (imagem, título, descrição) não aparecia corretamente.
        Isso porque as meta tags dinâmicas no <strong>React</strong> eram definidas dentro do componente usando <strong>useEffect</strong>, que só roda no cliente após renderização.
        O Next.js renderiza no cliente, então os robôs do WhatsApp não capturavam as informações no momento do acesso.
        <br /><br />
        <strong>Exemplo resumido do problema:</strong>
        <CodeBlock language="html">
          {`import { useEffect, useState } from 'react';
import Head from 'next/head';

const PageWithMetaUseEffect = () => {
  const [title, setTitle] = useState('Título padrão');
  const [description, setDescription] = useState('Descrição padrão do site');

  useEffect(() => {
    setTimeout(() => {
      setTitle('Título Atualizado via useEffect');
      setDescription('Descrição atualizada via useEffect após renderização.');
    }, 1000);
  }, []); 

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <main>
        <h1>{title}</h1>
        <p>{description}</p>
      </main>
    </>
  );
};

export default PageWithMetaUseEffect;`}

        </CodeBlock>
        <br />
        Além disso, o estado do menu hambúrguer, gerenciado via <strong>useEffect</strong> no componente, era redefinido a cada recriação, causando inconsistência.
      </Problem>

      <Solution>
        <strong>✅ Solução:</strong> Centralizar Estado Global no Context API<br />
        <List>
          <li>Gerar meta tags no SSR (Server-Side Rendering) para garantir que o WhatsApp capture as informações corretamente no link.</li>
          <li>Gerenciar o estado do menu hambúrguer globalmente via Context API, evitando reexecuções desnecessárias do <strong>useEffect</strong> e mantendo comportamento consistente entre páginas.</li>
        </List>

        <strong>Exemplo resumido da solução (sem <code>useEffect</code>):</strong>
        <CodeBlock language="html">
          {`import Head from 'next/head';

const PageWithMetaSSR = () => {
  const title = 'Título definido no servidor';
  const description = 'Descrição definida no servidor para SEO e preview correto.';

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <main>
        <h1>{title}</h1>
        <p>{description}</p>
      </main>
    </>
  );
};

export default PageWithMetaSSR;`}
        </CodeBlock>
        Isso garante que bots e redes sociais leiam as meta tags corretamente antes da página carregar no navegador.
      </Solution>
    </Container>
  );
};

export default MetaTagsWhatsappProblema;
