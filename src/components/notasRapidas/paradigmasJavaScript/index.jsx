// export default ParadigmasJavaScript;
import { useEffect } from 'react';
import { Container, TitleDiv, Subtitle, Paragraph } from "@/styles/globalStyles";
import CodeBlock from '@/components/codeBlock';

const ParadigmasJavaScript = () => {


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
      <CodeBlock language="javascript">
        {`let total = 0;
for (let i = 1; i <= 5; i++) {
  total += i; // acumula o valor de i
}
console.log(total); // 15`}
      </CodeBlock>
      <Subtitle>2. Paradigma Orientado a Objetos (OO)</Subtitle>
      <Paragraph>
        Usa objetos e classes para organizar código, com encapsulamento, herança e polimorfismo.
        Em JavaScript, objetos são essenciais e há suporte a classes (desde ES6).
      </Paragraph>
      <CodeBlock language="javascript">
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
      </CodeBlock>
      <Subtitle>3. Paradigma Funcional</Subtitle>
      <Paragraph>
        Trata funções como valores de primeira classe, usa funções puras, imutabilidade e evita efeitos colaterais.
        JavaScript suporta funções anônimas, funções de ordem superior, closures e imutabilidade parcial.
      </Paragraph>
      <CodeBlock language="javascript">
        {`const numeros = [1, 2, 3, 4, 5];

// Função pura para somar dois números
const soma = (a, b) => a + b;

// Usando reduce para somar elementos do array sem modificar o array original
const total = numeros.reduce(soma, 0);

console.log(total); // 15`}
      </CodeBlock>
      <Paragraph>
        Resumo: JavaScript é uma linguagem multiparadigma, suportando imperativo, orientado a objetos e funcional,
        podendo usar qualquer um deles ou combiná-los conforme a necessidade.
      </Paragraph>
    </Container>
  );
};

export default ParadigmasJavaScript;
