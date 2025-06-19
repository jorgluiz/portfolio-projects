import {
  Container,
  SectionTitle,
  Paragraph,
  List,
  Table,
  Th,
  Td,
  CommandCell
} from "@/styles/globalStyles";

import CodeBlock from "@/components/codeBlock";
import VoltarParaTopo from "@/components/backToTop";

const Versionamento = () => {

  return (
    <>
      <Container>
        <SectionTitle>Guia de Versionamento de Software para Apps</SectionTitle>

        <Paragraph>
          Versionar um software é como criar capítulos para um livro. Cada número de versão conta uma história sobre o que mudou, o que foi adicionado e o que foi corrigido. Isso é fundamental para que você, outros desenvolvedores e, principalmente, as lojas de aplicativos (como a Google Play Store) entendam a evolução do seu projeto.
        </Paragraph>

        {/* Seção sobre versionCode vs versionName */}
        <SectionTitle>Os Dois Números do Android: `versionCode` vs `versionName`</SectionTitle>
        <Paragraph>
          Como vimos, no mundo Android, você precisa gerenciar dois números de versão diferentes no arquivo <strong><code>android/app/build.gradle</code></strong>. É crucial entender a diferença:
        </Paragraph>
        <Table>
          <thead>
            <tr>
              <Th>Propriedade</Th>
              <Th>Para Quem?</Th>
              <Th>Regra Principal</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td as={CommandCell}>versionName "1.0"</Td>
              <Td>Para o <strong>Usuário</strong>. É o que aparece na Play Store.</Td>
              <Td>Texto livre. Pode ser "1.0.1", "2.0-beta", etc. Deve ser claro para o usuário.</Td>
            </tr>
            <tr>
              <Td as={CommandCell}>versionCode 1</Td>
              <Td>Para a <strong>Google Play Store</strong>. É o controle interno da loja.</Td>
              <Td>Deve ser um número <strong>inteiro</strong> e <strong>sempre crescente</strong> (1, 2, 3, 4...).</Td>
            </tr>
          </tbody>
        </Table>
        <br />

        {/* Seção sobre Versionamento Semântico (SemVer) */}
        <SectionTitle>O Padrão Universal: Versionamento Semântico (SemVer)</SectionTitle>
        <Paragraph>
          Para o <strong><code>versionName</code></strong> (e a versão no seu <code>package.json</code>), a melhor prática mundial é usar o Versionamento Semântico, ou "SemVer". O formato é <strong><code>MAJOR.MINOR.PATCH</code></strong>.
        </Paragraph>
        <Table>
          <thead>
            <tr>
              <Th>Componente</Th>
              <Th>Exemplo (em 1.2.3)</Th>
              <Th>Quando Incrementar?</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td as={CommandCell}>MAJOR</Td>
              <Td>O número <strong>1</strong></Td>
              <Td>Apenas quando você faz mudanças que quebram a compatibilidade. Ex: remove uma função importante ou muda completamente a interface.</Td>
            </tr>
            <tr>
              <Td as={CommandCell}>MINOR</Td>
              <Td>O número <strong>2</strong></Td>
              <Td>Quando você adiciona uma nova funcionalidade de forma compatível. Ex: adiciona uma nova tela, um novo botão, uma nova opção.</Td>
            </tr>
            <tr>
              <Td as={CommandCell}>PATCH</Td>
              <Td>O número <strong>3</strong></Td>
              <Td>Quando você faz correções de bugs que não quebram nada. Ex: corrige um crash, ajusta um texto, melhora a performance.</Td>
            </tr>
          </tbody>
        </Table>
        <br />

        {/* Seção sobre a evolução da versão */}
        <SectionTitle>Guia Prático: Como a Versão Evolui (de 1.9 para 2.0)</SectionTitle>
        <Paragraph>
          Aqui respondemos sua pergunta sobre "como chegar na 2.0 depois de 1.9". A lógica não é decimal, mas sim sequencial para cada parte.
        </Paragraph>
        <List>
          <li><strong>Lançamento inicial do seu app:</strong> <code>1.0.0</code></li>
          <li><strong>Você corrige um bug pequeno:</strong> A versão se torna <code>1.0.1</code> (incrementa o PATCH).</li>
          <li><strong>Você adiciona uma nova tela (nova feature):</strong> A versão se torna <code>1.1.0</code> (incrementa o MINOR e reseta o PATCH para 0).</li>
          <li><strong>Você corrige mais 2 bugs nessa nova tela:</strong> A versão passa por <code>1.1.1</code> e depois <code>1.1.2</code>.</li>
          <li><strong>Você continua adicionando features e corrigindo bugs:</strong> A versão pode chegar em <code>1.8.0</code>, <code>1.9.0</code>, etc.</li>
          <li><strong>Você adiciona mais uma feature depois da 1.9.0:</strong> A versão se torna <strong><code>1.10.0</code></strong>, depois <code>1.11.0</code>, e assim por diante. Não pula para 2.0!</li>
          <li><strong>Quando pular para 2.0.0?</strong> Apenas quando você fizer uma grande mudança que quebra a compatibilidade. Por exemplo, se você removesse a função de baixar vídeos e mudasse o foco do app, isso seria uma mudança MAJOR e justificaria a versão <code>2.0.0</code>.</li>
        </List>

        {/* Seção sobre onde aplicar as versões */}
        <SectionTitle>Onde Aplicar as Versões no Projeto</SectionTitle>
        <Paragraph>
          É uma boa prática manter as versões consistentes em dois lugares:
        </Paragraph>
        <List>
          <li>
            <strong>1. No `package.json` (para o projeto JavaScript):</strong>
            <CodeBlock language="json">{`"version": "1.0.0"`}</CodeBlock>
          </li>
          <li>
            <strong>2. No `android/app/build.gradle` (para a loja Android):</strong>
            <CodeBlock language="groovy">{`versionCode 1
versionName "1.0.0"`}</CodeBlock>
          </li>
        </List>

        {/* Seção sobre Git e Tags */}
        <SectionTitle>Integrando Versionamento com Git (Melhor Prática)</SectionTitle>
        <Paragraph>
          Para marcar permanentemente uma versão no histórico do seu projeto, use "tags" do Git. Depois de fazer o commit da sua nova versão, crie uma tag.
        </Paragraph>
        <Table>
          <thead>
            <tr>
              <Th>Comando</Th>
              <Th>Descrição</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td as={CommandCell}>git tag -a v1.0.0 -m "Lançamento da versão 1.0.0"</Td>
              <Td>Cria uma tag anotada (com mensagem) para a sua versão.</Td>
            </tr>
            <tr>
              <Td as={CommandCell}>git push origin v1.0.0</Td>
              <Td>Envia a tag para o repositório remoto (ex: GitHub), tornando-a visível para todos.</Td>
            </tr>
          </tbody>
        </Table>
      </Container>
      <VoltarParaTopo></VoltarParaTopo>
    </>
  );
};

export default Versionamento;
