const GitCommands = () => {
  const container = {
    fontFamily: 'Segoe UI, sans-serif',
    padding: '15px',
    maxWidth: '900px',
    margin: '0 auto 40px',
    color: '#222',
    backgroundColor: '#f9f9f9',
    borderRadius: '12px',
    boxShadow: '0 0 20px rgba(0,0,0,0.05)',
  };

  const sectionTitle = {
    fontSize: '24px',
    fontWeight: '700',
    marginBottom: '20px',
  };

  const table = {
    width: '100%',
    borderCollapse: 'collapse',
  };

  const th = {
    textAlign: 'left',
    borderBottom: '2px solid #ddd',
    padding: '8px',
    fontWeight: '600',
  };

  const td = {
    padding: '8px',
    borderBottom: '1px solid #eee',
    verticalAlign: 'top',
  };

  const commandCell = {
    fontFamily: 'monospace',
    whiteSpace: 'nowrap',
    width: '200px',
  };

  return (
    <div style={container}>
      <h2 style={sectionTitle}>Comandos Git</h2>
      <table style={table}>
        <thead>
          <tr>
            <th style={th}>Comando</th>
            <th style={th}>Descrição</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ ...td, ...commandCell }}>git init</td>
            <td style={td}>Inicializa um repositório Git local</td>
          </tr>
          <tr>
            <td style={{ ...td, ...commandCell }}>git clone &lt;url&gt;</td>
            <td style={td}>Clona um repositório remoto para o local</td>
          </tr>
          <tr>
            <td style={{ ...td, ...commandCell }}>git status</td>
            <td style={td}>Mostra o status dos arquivos (modificados, staged)</td>
          </tr>
          <tr>
            <td style={{ ...td, ...commandCell }}>git add &lt;arquivo&gt;</td>
            <td style={td}>Adiciona arquivos ao staging (preparar para commit)</td>
          </tr>
          <tr>
            <td style={{ ...td, ...commandCell }}>git add .</td>
            <td style={td}>Adiciona todos os arquivos modificados ao staging</td>
          </tr>
          <tr>
            <td style={{ ...td, ...commandCell }}>git commit -m "mensagem"</td>
            <td style={td}>Cria um commit com a mensagem informada</td>
          </tr>
          <tr>
            <td style={{ ...td, ...commandCell }}>git log</td>
            <td style={td}>Mostra o histórico de commits</td>
          </tr>
          <tr>
            <td style={{ ...td, ...commandCell }}>git diff</td>
            <td style={td}>Mostra as diferenças entre arquivos modificados</td>
          </tr>
          <tr>
            <td style={{ ...td, ...commandCell }}>git branch</td>
            <td style={td}>Lista as branches existentes</td>
          </tr>
          <tr>
            <td style={{ ...td, ...commandCell }}>git branch &lt;nome&gt;</td>
            <td style={td}>Cria uma nova branch</td>
          </tr>
          <tr>
            <td style={{ ...td, ...commandCell }}>git checkout &lt;branch&gt;</td>
            <td style={td}>Muda para a branch especificada</td>
          </tr>
          <tr>
            <td style={{ ...td, ...commandCell }}>git checkout -b &lt;branch&gt;</td>
            <td style={td}>Cria e muda para a nova branch</td>
          </tr>
          <tr>
            <td style={{ ...td, ...commandCell }}>git merge &lt;branch&gt;</td>
            <td style={td}>Junta a branch especificada na branch atual</td>
          </tr>
          <tr>
            <td style={{ ...td, ...commandCell }}>git remote -v</td>
            <td style={td}>Lista os repositórios remotos configurados</td>
          </tr>
          <tr>
            <td style={{ ...td, ...commandCell }}>git remote add origin &lt;url&gt;</td>
            <td style={td}>Adiciona um repositório remoto chamado "origin"</td>
          </tr>
          <tr>
            <td style={{ ...td, ...commandCell }}>git remote remove origin</td>
            <td style={td}>Remove o repositório remoto chamado "origin"</td>
          </tr>
          <tr>
            <td style={{ ...td, ...commandCell }}>git pull</td>
            <td style={td}>Puxa as atualizações do repositório remoto e faz merge</td>
          </tr>
          <tr>
            <td style={{ ...td, ...commandCell }}>git push</td>
            <td style={td}>Envia commits para o repositório remoto</td>
          </tr>
          <tr>
            <td style={{ ...td, ...commandCell }}>git stash</td>
            <td style={td}>Salva mudanças temporariamente para limpar o workspace</td>
          </tr>
          <tr>
            <td style={{ ...td, ...commandCell }}>git stash pop</td>
            <td style={td}>Restaura as mudanças salvas com git stash</td>
          </tr>
          <tr>
            <td style={{ ...td, ...commandCell }}>git reset --hard</td>
            <td style={td}>Desfaz todas as mudanças locais, retornando ao último commit</td>
          </tr>
          <tr>
            <td style={{ ...td, ...commandCell }}>git fetch</td>
            <td style={td}>Baixa atualizações do remoto sem fazer merge</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default GitCommands;
