import { Container, SectionTitle, Subtitle, Paragraph, List, Conclusion } from "@/styles/globalStyles";

const BlockchainNfts = () => {

  return (
    <Container>
      <SectionTitle>🛠️ Backend (Desenvolvimento de Blockchain e NFTs)</SectionTitle>
      <List>
        <li>Interação com Blockchain: criar, verificar e transferir NFTs, executar contratos inteligentes, registrar transações e consultar dados.</li>
        <li>Serviços de API: construir APIs que conectam frontend e blockchain, como consultar saldo, criar ou transferir tokens.</li>
        <li>Integração com Wallets: gerenciar carteiras digitais (ex: MetaMask) e garantir segurança nas transações.</li>
      </List>

      <SectionTitle>🎨 Frontend (Desenvolvimento de Blockchain e NFTs)</SectionTitle>
      <List>
        <li>Interface do Usuário: visual e acessível para interação com NFTs e blockchain.</li>
        <li>Exibição de NFTs: mostrar coleções do usuário ou mercado.</li>
        <li>Conexão com Carteiras: permitir conexão e transações (compra/venda).</li>
        <li>Interface para Criar NFTs: facilitar criação e listagem para venda.</li>
      </List>

      <Conclusion>
        Conclusão:
        <List>
          <li>Backend: lógica principal de interação com blockchain e NFTs (criar, transferir, verificar).</li>
          <li>Frontend: interface visual para usuários interagirem com NFTs e blockchain.</li>
        </List>
      </Conclusion>
    </Container>
  );
};

export default BlockchainNfts;
