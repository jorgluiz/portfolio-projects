import { Container, SectionTitle, Subtitle, Paragraph, List } from "@/styles/globalStyles";

const RenewGitConnection = () => {
  return (
    <Container>
      <SectionTitle>Como Renovar sua Conexão com o GitHub (Versão Resumida)</SectionTitle>
      <Paragraph>
        Este guia resolve problemas de autenticação forçando o Git a pedir um novo login e salvá-lo.
      </Paragraph>

      <Subtitle>Passo 1: Limpar a Senha Antiga</Subtitle>
      <Paragraph>
        Primeiro, apagamos o login antigo salvo no Windows para que ele possa ser substituído.
      </Paragraph>
      <List as="ol">
        <li>Abra o <strong>Gerenciador de Credenciais</strong> (pesquise no Menu Iniciar).</li>
        <li>Vá para <strong>Credenciais do Windows</strong>.</li>
        <li>Na lista, encontre <code>git:https://github.com</code> e clique em <strong>Remover</strong>.</li>
      </List>
      <Paragraph>
        <strong>Objetivo:</strong> Forçar o sistema a esquecer a senha antiga do GitHub.
      </Paragraph>

      <Subtitle>Passo 2: Configurar sua Identidade no Git</Subtitle>
      <Paragraph>
        Garantimos que seus futuros commits tenham a autoria correta. Abra um terminal e execute:
      </Paragraph>
      <Paragraph>
        Defina seu nome de usuário:
        <br />
        <code>git config --global user.name "Seu Nome de Usuário"</code>
      </Paragraph>
      <Paragraph>
        Defina seu e-mail de login do GitHub:
        <br />
        <code>git config --global user.email "seu-email@exemplo.com"</code>
      </Paragraph>
      <Paragraph>
        <strong>Objetivo:</strong> Identificar você como o autor das alterações.
      </Paragraph>

      <Subtitle>Passo 3: Fazer Login ao Enviar Alterações (git push)</Subtitle>
      <Paragraph>
        Ao tentar enviar suas alterações para o GitHub, o sistema pedirá o novo login.
      </Paragraph>
      <Paragraph>
        Faça um commit para ter algo para enviar:
        <br />
        <code>git commit -m "Atualizando arquivos"</code>
      </Paragraph>
      <Paragraph>
        Envie o commit para o GitHub:
        <br />
        <code>git push</code>
      </Paragraph>
      <Paragraph>
        Uma janela do navegador se abrirá pedindo para você entrar no GitHub. Faça o login e autorize. O Git salvará a nova credencial automaticamente.
        {'</- Paragraph>'}
      </Paragraph>
      <Paragraph>
        <strong>Objetivo:</strong> O comando <code>push</code> tenta se conectar ao GitHub. Como não há senha salva, ele pede um novo login, que fica salvo para as próximas vezes.
      </Paragraph>
    </Container>
  );
};

export default RenewGitConnection;