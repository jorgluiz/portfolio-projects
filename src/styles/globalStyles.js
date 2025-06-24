import styled, { createGlobalStyle, keyframes } from "styled-components";

// Global Styles
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scrollbar-gutter: stable; /* <- AQUI */
  }

  body {
    height: 100%;
    font-family: 'Arial', sans-serif;
    background-color: #f0f0f0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Containers e Layout
export const Container = styled.div`
  font-family: "Segoe UI", sans-serif;
  max-width: 900px;
  border-radius: 12px;
  padding: 15px;
  margin: 1rem auto;
  color: #222;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
  line-height: 1.6;
  background-color: #f9f9f9;
  animation: ${fadeIn} 0.8s ease-out;

   @media (max-width: 768px) {
    padding: 1.5rem 1rem; // Diminui o padding horizontal em telas pequenas
    margin: 1rem auto;
  }
`;


export const MainContent = styled.div`
  width: 950px;
  max-width: 950px;
  margin: 0 auto; /* Centraliza o container horizontalmente */
  padding: 20px 20px 0 20px;
  border: 1px solid #ccc;
`;

// Títulos
export const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const Subtitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-top: 24px;
  margin-bottom: 12px;
  border-bottom: 2px solid #ddd;
  padding-bottom: 6px;
`;

export const SubsectionTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 8px;
  border-bottom: 2px solid #ddd;
  padding-bottom: 4px;
`;

export const Title = styled.h3`
  color: #2980b9;
  text-align: center;
  cursor: pointer;
  font-size: 20px;
  padding-bottom: 12px;
  user-select: none;

  &.title-carousel, 
  &.title-stripe,
  &.title-portfolio,
  &.title-dataAnalysisTwitter,
  &.title-streamDolby,
  &.title-imageGenerator,
  &.title-playerVideoCustomizado,
  &.title-catalogo,
  &.title-ytformp3,
  &.title-ytformp4Cloud,
  &.title-ytformp4Location,
  &.title-ytAnalyseVideo,
  &.title-vendasCurso {
    line-height: 28px;
    margin-bottom: 20px;
  }
`;

export const TitleDiv = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
`;

// Textos e Parágrafos
export const Paragraph = styled.p`
  font-size: 16px;
  line-height: 28px;
  padding-bottom: 12px;
`;

export const Span = styled.span`
  font-size: 16px;
`;

export const Underline = styled.span`
  background-color:rgb(230, 230, 230);
`;


export const H2 = styled.h2`
  padding-bottom: 12px;
`;

export const H3 = styled.h3`
  padding-bottom: 12px;
`;

export const H4 = styled.h4``;

export const InfoWhatsapp = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const H3Whatsapp = styled.div`
  padding: 0 20px 0 20px;
`;

export const AWhatsapp = styled.a``;

// Listas
export const Ul = styled.ul`
  padding: 0 0 0 20px;
  line-height: 28px;
`;

export const Li = styled.li`
  font-size: 16px;
  padding-bottom: 12px;
`;

export const List = styled.ul`
  padding-left: 20px;
  margin-bottom: 12px;
`;

// Links
export const Link = styled.a`
  color: #0070f3;
`;

// Estilos para tabela
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

export const Th = styled.th`
  border: 1px solid #ccc;
  padding: 8px;
  background-color: #eaeaea;
  font-weight: 600;
  text-align: center;
`;

export const Td = styled.td`
  border: 1px solid #ccc;
  padding: 8px;
  text-align: center;
`;

export const ThTdStyle = styled.td`
  border: 1px solid #ddd;
  padding: 8px 0;
  text-align: left;
`;

export const ThStyle = styled.th`
  border: 1px solid #ddd;
  padding: 8px 0;
  text-align: left;
  background-color: #f2f2f2;
  font-weight: 700;
`;

export const CommandCell = styled.td`
  font-family: monospace;
  white-space: nowrap;
  width: 200px;
`;

// Utilitários e alertas
export const Check = styled.span`
  color: #2ecc71;
  font-size: 22px;
  margin-right: 8px;
`;

export const Conclusion = styled.p`
  margin-top: 32px;
  font-weight: 700;
  font-size: 18px;
  color: #333;
`;

export const Warning = styled.div`
  background-color: #fff3cd;
  border: 1px solid #ffeeba;
  padding: 12px 16px;
  border-radius: 8px;
  margin-bottom: 20px;
  color: #856404;
  font-weight: 600;
`;

export const Problem = styled.div`
  background-color: #fdecea;
  border-left: 6px solid #f44336;
  padding: 12px 16px;
  border-radius: 6px;
  margin-bottom: 20px;
  color: #611a15;
`;

export const Solution = styled.div`
  background-color: #e7f5e6;
  border-left: 6px solid #27ae60;
  padding: 12px 16px;
  border-radius: 6px;
  margin-bottom: 20px;
  color: #1e4620;
`;

// Código e sintaxe
export const CodeBlock = styled.pre`
  background-color: #1e1e1e;
  color: #f1f1f1;
  font-family: monospace;
  border-radius: 8px;
  white-space: pre-wrap;
  font-size: 14px;
  margin-bottom: 16px;
  overflow-x: auto;
`;

export const CodeBlockF0F0F0 = styled.pre`
  background-color: #f0f0f0;
  color: #333;
  padding: 10px;
  font-family: monospace;
  border-radius: 8px;
  white-space: pre-wrap;
  font-size: 14px;
  margin-bottom: 16px;
  overflow-x: auto;
`;

export const CodeSpanSelector = styled.span`
  color: #569cd6; /* blue (selectors) */
`;

export const CodeSpanValue = styled.span`
  color: #ce9178; /* orange (values) */
`;

export const CodeSpanImportant = styled.span`
  color: #d16969; /* red (important, keywords) */
  font-weight: 700;
`;

export const Keyword = styled.span`
  color: #0000ff; /* azul keywords */
`;

export const String = styled.span`
  color: #a31515; /* vermelho strings */
`;

export const Comment = styled.span`
  color: #008000; /* verde comentários */
  font-style: italic;
`;

export const Number = styled.span`
  color: #098658; /* verde número */
`;

export const Function = styled.span`
  color: #795e26; /* marrom função e nomes */
`;

// Outros
export const VideoYouTube = styled.div`
  & iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }

  @media (max-width: 750px) {
    & iframe {
      padding: 0 15px;
    }
  }
`;

export const ItemTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin: 20px 0 8px 0;
  border-bottom: 2px solid #ddd;
  padding-bottom: 4px;
`;

export const Label = styled.span`
  display: inline-block;
  background-color: #d1ecf1;
  color: #0c5460;
  font-weight: 600;
  font-size: 14px;
  padding: 4px 8px;
  border-radius: 6px;
  margin-bottom: 12px;
`;

export const Separator = styled.hr`
  border-top: 1px solid #ccc;
  margin: 20px 0;
`;

export const Bold = styled.span`
  font-weight: 600;
`;


// style BuildProject

export const ContainerBuildProject = styled.article`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #fefefe;
  max-width: 900px;
  margin: 24px auto;
  padding: 15px;
  border-radius: 14px;
  box-shadow: 0 4px 18px rgba(0,0,0,0.08);
  color: #2c3e50;
  line-height: 1.65;
`;

export const TitleBuildProject = styled.h1`
  font-size: 28px;
  font-weight: 800;
  margin-bottom: 24px;
  color: #34495e;
  text-align: center;
  letter-spacing: 0.05em;
`;

export const SectionTitleBuildProject = styled.h2`
  font-size: 22px;
  font-weight: 700;
  color: #2c3e50;
  margin-top: 32px;
  margin-bottom: 16px;
  border-bottom: 3px solid #3498db;
  padding-bottom: 6px;
`;

export const ParagraphBuildProject = styled.p`
  font-size: 16px;
  margin-bottom: 18px;
`;

export const ListBuildProject = styled.ol`
  padding-left: 24px;
  margin-bottom: 24px;
`;

export const ListItemBuildProject = styled.li`
  margin-bottom: 12px;
  font-weight: 500;
`;

export const StepNumberBuildProject = styled.span`
  display: inline-block;
  background-color: #3498db;
  color: white;
  font-weight: 700;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  margin-right: 12px;
  font-size: 16px;
  user-select: none;
`;

export const TableBuildProject = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 32px;
`;

export const ThBuildProject = styled.th`
  border-bottom: 2px solid #3498db;
  text-align: left;
  padding: 10px 14px;
  font-weight: 700;
  color: white;
  background-color: #3498db;
`;

export const TdBuildProject = styled.td`
  padding: 10px 14px;
  border-bottom: 1px solid #ddd;
  color: #555;
`;

export const CodeContainer = styled.div`
width: 100%;
`;

export const DividerWithText = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  color:rgb(44, 45, 46); /* Cor do texto */
  font-size: 25px;
  font-weight: 500;

  margin: 25px 0; /* Espaçamento vertical */

  /* A linha antes do texto */
  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid #374151; /* Cor da linha */
  }

  /* Espaçamento entre a linha e o texto */
  &::before {
    margin-right: 0.5em;
  }
  &::after {
    margin-left: 0.5em;
  }
`;

export const Diagram = styled.div`

  font-family: monospace;
  white-space: pre;
  background-color: #f9f9f9;
  padding: 1rem;
  overflow-x: auto;
  font-size: 20px;
`;

export const Wrapper = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 900px;
  padding: 15px;
  background-color: #f9f9f9;
`;

export const Code = styled.code`
  background-color: #e9ecef; /* Um cinza claro e suave */
  color: #c7254e;           /* Um tom de vermelho/rosa para o texto, comum para código */
  padding: 3px 6px;        /* Espaçamento interno para não ficar colado no texto */
  border-radius: 4px;      /* Bordas arredondadas */
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace; /* Fontes de código */
  font-size: 0.9em;          /* Um pouco menor que o texto ao redor */
`;