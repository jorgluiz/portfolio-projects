const ParadigmasJavaScript = () => {
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

  const title = {
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

  const codeBlock = {
    backgroundColor: "#f0f0f0",
    fontFamily: "'Consolas', monospace",
    fontSize: 14,
    borderRadius: 8,
    padding: 12,
    overflowX: "auto",
    marginBottom: 16,
    whiteSpace: "pre",
  };

  // Cores estilo VSCode para código JS
  const cKeyword = { color: "#0000ff" }; // azul keywords
  const cString = { color: "#a31515" }; // vermelho strings
  const cComment = { color: "#008000", fontStyle: "italic" }; // verde comentários
  const cNumber = { color: "#098658" }; // verde número
  const cFunction = { color: "#795e26" }; // marrom função e nomes

  return (
    <div style={container}>
      <div style={title}>Paradigmas principais do JavaScript</div>

      <p style={paragraph}>
        JavaScript tem três principais paradigmas de programação:
      </p>

      <div style={subtitle}>1. Paradigma Imperativo</div>
      <p style={paragraph}>
        O código é escrito como uma sequência de instruções que modificam o estado do programa.
        Exemplo: uso de variáveis, loops, comandos sequenciais.
      </p>
      <pre style={codeBlock}>
        <code>
          <span style={cKeyword}>let</span> total = <span style={cNumber}>0</span>;
          <br />
          <span style={cKeyword}>for</span> (<span style={cKeyword}>let</span> i = <span style={cNumber}>1</span>; i &lt;= <span style={cNumber}>5</span>; i++) &#123;
          <br />
          &nbsp;&nbsp;total += i; <span style={cComment}>// acumula o valor de i</span>
          <br />
          &#125;
          <br />
          <span style={cFunction}>console</span>.log(total); <span style={cComment}>// 15</span>
        </code>
      </pre>

      <div style={subtitle}>2. Paradigma Orientado a Objetos (OO)</div>
      <p style={paragraph}>
        Usa objetos e classes para organizar código, com encapsulamento, herança e polimorfismo.
        Em JavaScript, objetos são essenciais e há suporte a classes (desde ES6).
      </p>
      <pre style={codeBlock}>
        <code>
          <span style={cKeyword}>class</span> Pessoa &#123;
          <br />
          &nbsp;&nbsp;<span style={cKeyword}>constructor</span>(nome, idade) &#123;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;this.nome = nome;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;this.idade = idade;
          <br />
          &nbsp;&nbsp;&#125;
          <br />
          <br />
          &nbsp;&nbsp;apresentar() &#123;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span style={cFunction}>console</span>.log(
          <span style={cString}>{'`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`'}</span>);
          <br />
          &nbsp;&nbsp;&#125;
          <br />
          &#125;
          <br />
          <br />
          <span style={cKeyword}>const</span> pessoa1 = <span style={cKeyword}>new</span> Pessoa(<span style={cString}>"Ana"</span>, <span style={cNumber}>25</span>);
          <br />
          pessoa1.apresentar(); <span style={cComment}>// Olá, meu nome é Ana e tenho 25 anos.</span>
        </code>
      </pre>

      <div style={subtitle}>3. Paradigma Funcional</div>
      <p style={paragraph}>
        Trata funções como valores de primeira classe, usa funções puras, imutabilidade e evita efeitos colaterais.
        JavaScript suporta funções anônimas, funções de ordem superior, closures e imutabilidade parcial.
      </p>
      <pre style={codeBlock}>
        <code>
          <span style={cKeyword}>const</span> numeros = [<span style={cNumber}>1</span>, <span style={cNumber}>2</span>, <span style={cNumber}>3</span>, <span style={cNumber}>4</span>, <span style={cNumber}>5</span>];
          <br />
          <br />
          <span style={cComment}>// Função pura para somar dois números</span>
          <br />
          <span style={cKeyword}>const</span> soma = (a, b) =&gt; a + b;
          <br />
          <br />
          <span style={cComment}>// Usando reduce para somar elementos do array sem modificar o array original</span>
          <br />
          <span style={cKeyword}>const</span> total = numeros.reduce(soma, <span style={cNumber}>0</span>);
          <br />
          <br />
          <span style={cFunction}>console</span>.log(total); <span style={cComment}>// 15</span>
        </code>
      </pre>

      <p style={paragraph}>
        Resumo: JavaScript é uma linguagem multiparadigma, suportando imperativo, orientado a objetos e funcional,
        podendo usar qualquer um deles ou combiná-los conforme a necessidade.
      </p>
    </div>
  );
};

export default ParadigmasJavaScript;
