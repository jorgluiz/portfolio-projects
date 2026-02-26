import Head from "next/head";
import { Container, SectionTitle, Table, Th, Td, CommandCell } from "@/styles/globalStyles";

const GitCommands = () => {
  return (
    <>
      <Head>
        {/* Primary Meta Tags Atualizados para "Comandos Git" */}
        <title>Guia de Comandos Git: Cheat Sheet Essencial para Devs</title>
        <meta
          name="description"
          content="Uma lista de referência rápida (cheat sheet) com os comandos Git mais importantes para o dia a dia, incluindo init, add, commit, branch, pull, push e reset."
        />
        <meta
          name="keywords"
          content="Git, Comandos Git, Cheat Sheet Git, git add, git commit, git branch, git pull, git push, git reset, git status, Controle de Versão, GitHub"
        />
        <meta name="author" content="Jorge Luiz" />

        {/* Open Graph / Facebook Atualizados */}
        <meta property="og:site_name" content="https://portfolio-projects-production.up.railway.app" />
        <meta property="og:type" content="website" />
        {/* URL mantida conforme o padrão anterior */}
        <meta property="og:url" content="https://portfolio-projects-production.up.railway.app/artigos-tecnicos/blog" />
        <meta property="og:title" content="Guia de Comandos Git: Cheat Sheet Essencial para Devs" />
        <meta property="og:description" content="Salve este guia de referência rápida com os comandos Git mais usados. Perfeito para consultas no dia a dia sobre branch, merge, reset e muito mais." />
        <meta property="og:image" content="https://portfolio-projects-production.up.railway.app/perfil.png" />

        {/* Twitter Atualizados */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://portfolio-projects-production.up.railway.app/artigos-tecnicos/blog" />
        <meta property="twitter:title" content="Guia de Comandos Git: Cheat Sheet Essencial para Devs" />
        <meta property="twitter:description" content="Procurando um cheat sheet de Git? Aqui está uma lista dos comandos essenciais que todo desenvolvedor precisa saber, de 'git init' a 'git reset'." />
        <meta property="twitter:image" content="https://portfolio-projects-production.up.railway.app/perfil.png" />
      </Head>

      <Container>
        <SectionTitle>Comandos Git</SectionTitle>

        {/* Seção de Inicialização e Status */}
        <SectionTitle>Inicialização e Status</SectionTitle>
        <Table>
          <thead>
            <tr>
              <Th>Comando</Th>
              <Th>Descrição</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td as={CommandCell}>git init</Td>
              <Td>Inicializa um repositório Git local</Td>
            </tr>
            <tr>
              <Td as={CommandCell}>git clone &lt;url&gt;</Td>
              <Td>Clona um repositório remoto para o local</Td>
            </tr>
            <tr>
              <Td as={CommandCell}>git status</Td>
              <Td>Mostra o status dos arquivos (modificados, staged)</Td>
            </tr>
          </tbody>
        </Table>

        {/* Seção de Adicionar e Commitar */}
        <SectionTitle>Adicionar e Commitar</SectionTitle>
        <Table>
          <thead>
            <tr>
              <Th>Comando</Th>
              <Th>Descrição</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td as={CommandCell}>git add &lt;arquivo&gt;</Td>
              <Td>Adiciona arquivos ao staging (preparar para commit)</Td>
            </tr>
            <tr>
              <Td as={CommandCell}>git add .</Td>
              <Td>Adiciona todos os arquivos modificados ao staging</Td>
            </tr>
            <tr>
              <Td as={CommandCell}>git commit -m "mensagem"</Td>
              <Td>Cria um commit com a mensagem informada</Td>
            </tr>
          </tbody>
        </Table>

        {/* Seção de Histórico e Diferenças */}
        <SectionTitle>Histórico e Diferenças</SectionTitle>
        <Table>
          <thead>
            <tr>
              <Th>Comando</Th>
              <Th>Descrição</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td as={CommandCell}>git log</Td>
              <Td>Mostra o histórico de commits</Td>
            </tr>
            <tr>
              <Td as={CommandCell}>git diff {'>'} {'"nome"'}.patch</Td>
              <Td>Mostra as diferenças entre arquivos modificados</Td>
            </tr>
          </tbody>
        </Table>

        {/* Seção de Branches */}
        <SectionTitle>Branches</SectionTitle>
        <Table>
          <thead>
            <tr>
              <Th>Comando</Th>
              <Th>Descrição</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td as={CommandCell}>git branch</Td>
              <Td>Lista as branches existentes</Td>
            </tr>
            <tr>
              <Td as={CommandCell}>git branch &lt;nome&gt;</Td>
              <Td>Cria uma nova branch</Td>
            </tr>
            <tr>
              <Td as={CommandCell}>git checkout &lt;branch&gt;</Td>
              <Td>Muda para a branch especificada</Td>
            </tr>
            <tr>
              <Td as={CommandCell}>git checkout -b &lt;branch&gt;</Td>
              <Td>Cria e muda para a nova branch</Td>
            </tr>
            <tr>
              <Td as={CommandCell}>git merge &lt;branch&gt;</Td>
              <Td>Junta a branch especificada na branch atual</Td>
            </tr>
          </tbody>
        </Table>

        {/* Seção de Repositórios Remotos */}
        <SectionTitle>Repositórios Remotos</SectionTitle>
        <Table>
          <thead>
            <tr>
              <Th>Comando</Th>
              <Th>Descrição</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td as={CommandCell}>git remote -v</Td>
              <Td>Lista os repositórios remotos configurados</Td>
            </tr>
            <tr>
              <Td as={CommandCell}>git remote add origin &lt;url&gt;</Td>
              <Td>Adiciona um repositório remoto chamado "origin"</Td>
            </tr>
            <tr>
              <Td as={CommandCell}>git remote remove origin</Td>
              <Td>Remove o repositório remoto chamado "origin"</Td>
            </tr>
          </tbody>
        </Table>

        {/* Seção de Sincronização com o Repositório Remoto */}
        <SectionTitle>Sincronização com o Repositório Remoto</SectionTitle>
        <Table>
          <thead>
            <tr>
              <Th>Comando</Th>
              <Th>Descrição</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td as={CommandCell}>git pull</Td>
              <Td>Puxa as atualizações do repositório remoto e faz merge</Td>
            </tr>
            <tr>
              <Td as={CommandCell}>git push</Td>
              <Td>Envia commits para o repositório remoto</Td>
            </tr>
          </tbody>
        </Table>

        {/* Seção de Armazenamento Temporário */}
        <SectionTitle>Armazenamento Temporário</SectionTitle>
        <Table>
          <thead>
            <tr>
              <Th>Comando</Th>
              <Th>Descrição</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td as={CommandCell}>git stash</Td>
              <Td>Salva mudanças temporariamente para limpar o workspace</Td>
            </tr>
            <tr>
              <Td as={CommandCell}>git stash pop</Td>
              <Td>Restaura as mudanças salvas com git stash</Td>
            </tr>
          </tbody>
        </Table>

        {/* Seção de Reversão de Mudanças */}
        <SectionTitle>Reverter Alterações</SectionTitle>
        <Table>
          <thead>
            <tr>
              <Th>Comando</Th>
              <Th>Descrição</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td as={CommandCell}>git reset --hard</Td>
              <Td>Desfaz todas as mudanças locais, retornando ao último commit</Td>
            </tr>
            <tr>
              <Td as={CommandCell}>git fetch</Td>
              <Td>Baixa atualizações do remoto sem fazer merge</Td>
            </tr>
          </tbody>
        </Table>

        {/* Seção de Desfazer Commits */}
        <SectionTitle>Desfazer Commits</SectionTitle>
        <Table>
          <thead>
            <tr>
              <Th>Comando</Th>
              <Th>Descrição</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td as={CommandCell}>git reset --soft HEAD~N</Td>
              <Td>Desfaz N commits, mantendo as mudanças no staging para ajustes</Td>
            </tr>
            <tr>
              <Td as={CommandCell}>git reset --mixed HEAD~N</Td>
              <Td>Desfaz N commits e mantém as mudanças no working directory, removendo do staging</Td>
            </tr>
            <tr>
              <Td as={CommandCell}>git reset --hard HEAD~N</Td>
              <Td>Desfaz N commits e descarta todas as mudanças feitas</Td>
            </tr>
            <tr>
              <Td as={CommandCell}>git push origin main --force</Td>
              <Td>Desfaz commits no repositório remoto, realizando um push forçado (atenção para não sobrescrever trabalho de outros)</Td>
            </tr>
            <tr>
              <Td as={CommandCell}>git reflog</Td>
              <Td>Lista todos os commits recentes, incluindo os desfeitos, permitindo restaurar um commit específico</Td>
            </tr>
            <tr>
              <Td as={CommandCell}>git reset --hard &lt;commit-hash&gt;</Td>
              <Td>Restaura um commit específico usando seu hash</Td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default GitCommands;
