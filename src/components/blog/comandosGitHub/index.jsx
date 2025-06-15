// import { Container, SectionTitle, Table, Th, Td, CommandCell } from "@/styles/globalStyles";

// const GitCommands = () => {
//   return (
//     <Container>
//       <SectionTitle>Comandos Git</SectionTitle>
//       <Table>
//         <thead>
//           <tr>
//             <Th>Comando</Th>
//             <Th>Descrição</Th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <Td as={CommandCell}>git init</Td>
//             <Td>Inicializa um repositório Git local</Td>
//           </tr>
//           <tr>
//             <Td as={CommandCell}>git clone &lt;url&gt;</Td>
//             <Td>Clona um repositório remoto para o local</Td>
//           </tr>
//           <tr>
//             <Td as={CommandCell}>git status</Td>
//             <Td>Mostra o status dos arquivos (modificados, staged)</Td>
//           </tr>
//           <tr>
//             <Td as={CommandCell}>git add &lt;arquivo&gt;</Td>
//             <Td>Adiciona arquivos ao staging (preparar para commit)</Td>
//           </tr>
//           <tr>
//             <Td as={CommandCell}>git add .</Td>
//             <Td>Adiciona todos os arquivos modificados ao staging</Td>
//           </tr>
//           <tr>
//             <Td as={CommandCell}>git commit -m "mensagem"</Td>
//             <Td>Cria um commit com a mensagem informada</Td>
//           </tr>
//           <tr>
//             <Td as={CommandCell}>git log</Td>
//             <Td>Mostra o histórico de commits</Td>
//           </tr>
//           <tr>
//             <Td as={CommandCell}>git diff</Td>
//             <Td>Mostra as diferenças entre arquivos modificados</Td>
//           </tr>
//           <tr>
//             <Td as={CommandCell}>git branch</Td>
//             <Td>Lista as branches existentes</Td>
//           </tr>
//           <tr>
//             <Td as={CommandCell}>git branch &lt;nome&gt;</Td>
//             <Td>Cria uma nova branch</Td>
//           </tr>
//           <tr>
//             <Td as={CommandCell}>git checkout &lt;branch&gt;</Td>
//             <Td>Muda para a branch especificada</Td>
//           </tr>
//           <tr>
//             <Td as={CommandCell}>git checkout -b &lt;branch&gt;</Td>
//             <Td>Cria e muda para a nova branch</Td>
//           </tr>
//           <tr>
//             <Td as={CommandCell}>git merge &lt;branch&gt;</Td>
//             <Td>Junta a branch especificada na branch atual</Td>
//           </tr>
//           <tr>
//             <Td as={CommandCell}>git remote -v</Td>
//             <Td>Lista os repositórios remotos configurados</Td>
//           </tr>
//           <tr>
//             <Td as={CommandCell}>git remote add origin &lt;url&gt;</Td>
//             <Td>Adiciona um repositório remoto chamado "origin"</Td>
//           </tr>
//           <tr>
//             <Td as={CommandCell}>git remote remove origin</Td>
//             <Td>Remove o repositório remoto chamado "origin"</Td>
//           </tr>
//           <tr>
//             <Td as={CommandCell}>git pull</Td>
//             <Td>Puxa as atualizações do repositório remoto e faz merge</Td>
//           </tr>
//           <tr>
//             <Td as={CommandCell}>git push</Td>
//             <Td>Envia commits para o repositório remoto</Td>
//           </tr>
//           <tr>
//             <Td as={CommandCell}>git stash</Td>
//             <Td>Salva mudanças temporariamente para limpar o workspace</Td>
//           </tr>
//           <tr>
//             <Td as={CommandCell}>git stash pop</Td>
//             <Td>Restaura as mudanças salvas com git stash</Td>
//           </tr>
//           <tr>
//             <Td as={CommandCell}>git reset --hard</Td>
//             <Td>Desfaz todas as mudanças locais, retornando ao último commit</Td>
//           </tr>
//           <tr>
//             <Td as={CommandCell}>git fetch</Td>
//             <Td>Baixa atualizações do remoto sem fazer merge</Td>
//           </tr>
//         </tbody>
//       </Table>
//     </Container>
//   );
// };

// export default GitCommands;


import { Container, SectionTitle, Table, Th, Td, CommandCell } from "@/styles/globalStyles";

const GitCommands = () => {
  return (
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
  );
};

export default GitCommands;
