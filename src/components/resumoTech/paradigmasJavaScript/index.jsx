// import { Container, TitleDiv, Subtitle, Paragraph, CodeBlockF0F0F0, Keyword, String, Comment, Number, Function } from "@/styles/globalStyles";

// const ParadigmasJavaScript = () => {

//   return (
//     <Container>
//       <TitleDiv>
//         Paradigmas principais do JavaScript
//       </TitleDiv>

//       <Paragraph>
//         JavaScript tem três principais paradigmas de programação:
//       </Paragraph>

//       <Subtitle>1. Paradigma Imperativo</Subtitle>
//       <Paragraph>
//         O código é escrito como uma sequência de instruções que modificam o estado do programa.
//         Exemplo: uso de variáveis, loops, comandos sequenciais.
//       </Paragraph>
//       <CodeBlockF0F0F0>
//         <code>
//           <Keyword>let</Keyword> total = <Number>0</Number>;
//           <br />
//           <Keyword>for</Keyword> (<Keyword>let</Keyword> i = <Number>1</Number>; i &lt;= <Number>5</Number>; i++) &#123;
//           <br />
//           &nbsp;&nbsp;total += i; <Comment>// acumula o valor de i</Comment>
//           <br />
//           &#125;
//           <br />
//           <Function>console</Function>.log(total); <Comment>// 15</Comment>
//         </code>
//       </CodeBlockF0F0F0>

//       <Subtitle>2. Paradigma Orientado a Objetos (OO)</Subtitle>
//       <Paragraph>
//         Usa objetos e classes para organizar código, com encapsulamento, herança e polimorfismo.
//         Em JavaScript, objetos são essenciais e há suporte a classes (desde ES6).
//       </Paragraph>
//       <CodeBlockF0F0F0>
//         <code>
//           <Keyword>class</Keyword> Pessoa &#123;
//           <br />
//           &nbsp;&nbsp;<Keyword>constructor</Keyword>(nome, idade) &#123;
//           <br />
//           &nbsp;&nbsp;&nbsp;&nbsp;this.nome = nome;
//           <br />
//           &nbsp;&nbsp;&nbsp;&nbsp;this.idade = idade;
//           <br />
//           &nbsp;&nbsp;&#125;
//           <br />
//           <br />
//           &nbsp;&nbsp;apresentar() &#123;
//           <br />
//           &nbsp;&nbsp;&nbsp;&nbsp;<Function>console</Function>.log(
//           <String>{'`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`'}</String>);
//           <br />
//           &nbsp;&nbsp;&#125;
//           <br />
//           &#125;
//           <br />
//           <br />
//           <Keyword>const</Keyword> pessoa1 = <Keyword>new</Keyword> Pessoa(<String>"Ana"</String>, <Number>25</Number>);
//           <br />
//           pessoa1.apresentar(); <Comment>// Olá, meu nome é Ana e tenho 25 anos.</Comment>
//         </code>
//       </CodeBlockF0F0F0>

//       <Subtitle>3. Paradigma Funcional</Subtitle>
//       <Paragraph>
//         Trata funções como valores de primeira classe, usa funções puras, imutabilidade e evita efeitos colaterais.
//         JavaScript suporta funções anônimas, funções de ordem superior, closures e imutabilidade parcial.
//       </Paragraph>
//       <CodeBlockF0F0F0>
//         <code>
//           <Keyword>const</Keyword> numeros = [<Number>1</Number>, <Number>2</Number>, <Number>3</Number>, <Number>4</Number>, <Number>5</Number>];
//           <br />
//           <br />
//           <Comment>// Função pura para somar dois números</Comment>
//           <br />
//           <Keyword>const</Keyword> soma = (a, b) =&gt; a + b;
//           <br />
//           <br />
//           <Comment>// Usando reduce para somar elementos do array sem modificar o array original</Comment>
//           <br />
//           <Keyword>const</Keyword> total = numeros.reduce(soma, <Number>0</Number>);
//           <br />
//           <br />
//           <Function>console</Function>.log(total); <Comment>// 15</Comment>
//         </code>
//       </CodeBlockF0F0F0>

//       <Paragraph>
//         Resumo: JavaScript é uma linguagem multiparadigma, suportando imperativo, orientado a objetos e funcional,
//         podendo usar qualquer um deles ou combiná-los conforme a necessidade.
//       </Paragraph>
//     </Container>
//   );
// };

// export default ParadigmasJavaScript;
import { useEffect } from 'react';
import { Container, TitleDiv, Subtitle, Paragraph, CodeBlockF0F0F0 } from "@/styles/globalStyles";

import hljs from 'highlight.js'; // Importando o highlight.js
import 'highlight.js/styles/atom-one-dark.css'; // Estilo para colorir a sintaxe

const ParadigmasJavaScript = () => {

  useEffect(() => {
    hljs.highlightAll(); // Aplica o destaque de sintaxe a todos os blocos de código
  }, []);


  return (
    <Container>
      <TitleDiv>
        Paradigmas principais do JavaScript
      </TitleDiv>

      <Paragraph>
        JavaScript tem três principais paradigmas de programação:
      </Paragraph>

      <Subtitle>1. Paradigma Imperativo</Subtitle>
      <Paragraph>
        O código é escrito como uma sequência de instruções que modificam o estado do programa.
        Exemplo: uso de variáveis, loops, comandos sequenciais.
      </Paragraph>
      <pre>
        <code>
          {`let total = 0;
for (let i = 1; i <= 5; i++) {
  total += i; // acumula o valor de i
}
console.log(total); // 15`}</code>
      </pre>

      <Subtitle>2. Paradigma Orientado a Objetos (OO)</Subtitle>
      <Paragraph>
        Usa objetos e classes para organizar código, com encapsulamento, herança e polimorfismo.
        Em JavaScript, objetos são essenciais e há suporte a classes (desde ES6).
      </Paragraph>
      <pre>
        <code>
          {`class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    console.log(\`Olá, meu nome é \${this.nome} e tenho \${this.idade} anos.\`);
  }
}

const pessoa1 = new Pessoa("Ana", 25);
pessoa1.apresentar(); // Olá, meu nome é Ana e tenho 25 anos.`}
        </code>
      </pre>

      <Subtitle>3. Paradigma Funcional</Subtitle>
      <Paragraph>
        Trata funções como valores de primeira classe, usa funções puras, imutabilidade e evita efeitos colaterais.
        JavaScript suporta funções anônimas, funções de ordem superior, closures e imutabilidade parcial.
      </Paragraph>
      <pre>
        <code>
          {`const numeros = [1, 2, 3, 4, 5];

// Função pura para somar dois números
const soma = (a, b) => a + b;

// Usando reduce para somar elementos do array sem modificar o array original
const total = numeros.reduce(soma, 0);

console.log(total); // 15`}
        </code>
      </pre>
      <Paragraph>
        Resumo: JavaScript é uma linguagem multiparadigma, suportando imperativo, orientado a objetos e funcional,
        podendo usar qualquer um deles ou combiná-los conforme a necessidade.
      </Paragraph>
    </Container>
  );
};

export default ParadigmasJavaScript;
