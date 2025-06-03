import { useEffect } from 'react';
import Head from "next/head";
import { useGlobalState } from "../../../context/GlobalStateContext";
import {
  Container,
  SectionTitle,
  Subtitle,
  Paragraph,
  CodeBlock,
  List,
  Link,
  CodeContainer,
  Title
} from "@/styles/globalStyles";
import styled from 'styled-components';

import { MainLayout } from "@/components/layout/mainLayout";
import SideBarLayout from "@/components/layout/sideBarLayout";
import HeaderLayout from "@/components/layout/headerLayout";
import MainContentLayout from "@/components/layout/contentLayout";
import Overlay from "@/components/overlay";

import hljs from 'highlight.js'; // Importando o highlight.js
import 'highlight.js/styles/atom-one-dark.css'; // Estilo para colorir a sintaxe

/* Responsividade da tabela */
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  overflow-x: auto;
  display: block;
  white-space: nowrap;
  margin-left: auto;
  margin-right: auto;
`;

const Th = styled.th`
  padding: 10px;
  text-align: center;
  border: 1px solid #ddd;
`;

const Td = styled.td`
  padding: 10px;
  text-align: center;
  border: 1px solid #ddd;
`;

const THead = styled.thead`
  background-color: #f4f4f4;
`;

const TBody = styled.tbody`
  background-color: #fff;
`;
const ProjectPotentialSEO = () => {
  const { isLoaded, isHamburguerOpen, setIsHamburguerOpen } = useGlobalState();

  const handleOverlayClick = () => setIsHamburguerOpen(false);

  useEffect(() => {
    hljs.highlightAll(); // Aplica o destaque de sintaxe a todos os blocos de código
  }, []);

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Projetos com Grande Potencial para SEO na Internet | Guia Completo</title>
        <meta
          name="description"
          content="Descubra os melhores projetos com alto potencial para SEO e geração de tráfego na internet. Aprenda como implementar essas ideias com HTML, CSS, e JavaScript, e aproveite as melhores práticas para aumentar sua visibilidade online."
        />
        <meta
          name="keywords"
          content="projetos SEO, cronômetro, calculadoras, conversores, gerador de senha, astrologia, sorteador, Detran, consultoria financeira"
        />
        <meta name="author" content="Jorge Luiz" />
      </Head>

      {!isLoaded ? null : (
        <>
          {isHamburguerOpen && <Overlay onClick={handleOverlayClick} />}
          <MainLayout>
            <SideBarLayout />
            <HeaderLayout />
            <MainContentLayout>
              <CodeContainer>
                <>
                  <Container>
                    <Paragraph>
                      O <strong>Google Ads</strong> é a plataforma de publicidade online do Google, que permite criar anúncios pagos para promover produtos, serviços ou websites. Através do Google Ads, os anunciantes podem segmentar seu público com base em palavras-chave, localizações geográficas, interesses e outros critérios. Os anúncios são exibidos nas páginas de resultados de pesquisa do Google, em sites parceiros e no YouTube, oferecendo uma forma eficiente de gerar tráfego pago e aumentar a visibilidade online.
                    </Paragraph>
                    <SectionTitle>
                      Projetos com Grande Potencial para SEO
                    </SectionTitle>

                    <Subtitle>Projetos com Maior Potencial de Engajamento</Subtitle>
                    <List>
                      <li>Cronômetro</li>
                      <li>Calculadoras</li>
                      <li>Conversores MP3</li>
                      <li>Frases de impacto sobre a vida</li>
                      <li>Lotofacil Sorteador</li>
                      <li>Astrologia / Zodíaco</li>
                      <li>Gerador de Senha</li>
                    </List>

                    <Subtitle>Projetos que Pagam Bem em CPC ( Custo por Clique )</Subtitle>
                    <List>
                      <li>Filmes online</li>
                      <li>Simulado Detran</li>
                      <li>Consultoria financeira pessoal</li>
                      <li>Como investir em ações com pouco dinheiro</li>
                      <li>Caça-palavras</li>
                      <li>Plano de emagrecimento</li>
                    </List>
                  </Container>

                  <Container>
                    <Subtitle>📌 Projeto: Se o objetivo é ganhar com tráfego e cliques (AdSense, SEO)</Subtitle>
                    <SectionTitle>✅ Use HTML + CSS + JS puro</SectionTitle>
                    <Paragraph>
                      <strong>Vantagens</strong>:
                    </Paragraph>
                    <List>
                      <li>⚡ Carrega rápido → melhor para SEO.</li>
                      <li>🕷️ Fácil para o Google indexar (sem renderização dinâmica).</li>
                      <li>📱  Leve e funciona bem em qualquer dispositivo.</li>
                      <li>💸 Mais fácil de hospedar gratuitamente (GitHub Pages, Netlify, etc).</li>
                    </List>

                    <Paragraph>
                      <strong>Ideal para</strong>:
                    </Paragraph>
                    <List>
                      <li>Landing pages</li>
                      <li>Blogs simples</li>
                      <li>Sites de frases, dicas, calculadoras</li>
                    </List>

                    <Subtitle>Criação de um Sitemap.xml</Subtitle>
                    <Paragraph>
                      Um arquivo sitemap.xml informa ao Google quais páginas existem no seu site, facilitando a indexação. Exemplo:
                    </Paragraph>
                    <pre>
                      <code className='javascript'>
                        {`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://seusite.com/</loc>
    <lastmod>2025-06-02</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`}
                      </code>
                    </pre>

                    <Subtitle>Como Configurar o Google Search Console</Subtitle>
                    <Paragraph>
                      Siga as etapas para adicionar seu site ao Google Search Console:
                    </Paragraph>
                    <List>
                      <li>Acesse <Link href="https://search.google.com/search-console/" target="_blank" rel="noreferrer">Google Search Console</Link></li>
                      <li>Adicione seu domínio ou URL</li>
                      <li>Verifique a propriedade (por HTML, DNS ou Google Analytics)</li>
                      <li>Envie o sitemap.xml se tiver</li>
                      <li>Use a opção {'"Inspecionar URL"'} e envie sua página inicial</li>
                      <li>Aguarde de 1 a 7 dias para a indexação aparecer no Google</li>
                    </List>

                    <Subtitle>Resumo dos Requisitos</Subtitle>
                    <List>
                      <li><strong>Site hospedado online</strong> ✅</li>
                      <li><strong>HTML com boa estrutura SEO</strong> ✅</li>
                      <li><strong>Search Console configurado</strong> ✅</li>
                      <li><strong>Sitemap.xml</strong> 🔁 Recomendado</li>
                      <li><strong>Robots.txt</strong> 🔁 Recomendado</li>
                      <li><strong>Backend</strong> ❌ Não precisa</li>
                    </List>
                  </Container>

                  <Container>
                    <Subtitle>📌 Agora, se seu objetivo for:</Subtitle>
                    <SectionTitle>
                      Criar uma aplicação mais interativa/dinâmica (tipo SPA, dashboard, SaaS) → Aí sim, use framework (React, Vue, etc.)
                    </SectionTitle>

                    <Paragraph>
                      <strong>Por quê?</strong>
                    </Paragraph>

                    <List>
                      <li>Melhor estrutura de componentes.</li>
                      <li>Facilita reuso de código.</li>
                      <li>Ideal para interfaces ricas, apps com lógica de estado, formulários, etc.</li>
                    </List>

                    <SectionTitle>🧲 Resumo direto:</SectionTitle>
                    <Table>
                      <THead>
                        <tr>
                          <Th>Objetivo</Th>
                          <Th>Recomendação</Th>
                        </tr>
                      </THead>
                      <TBody>
                        <tr>
                          <Td>SEO, Ads, projetos simples e rápidos</Td>
                          <Td>HTML + JS + CSS puro</Td>
                        </tr>
                        <tr>
                          <Td>Projeto interativo, escalável ou complexo</Td>
                          <Td>Framework (React, Vue)</Td>
                        </tr>
                      </TBody>
                    </Table>
                  </Container>

                  <Container>
                    <SectionTitle>
                      ✅ PASSO A PASSO para usar o Google Keyword Planner
                    </SectionTitle>

                    <Paragraph>
                      O <strong>Google Keyword Planner</strong> é uma ferramenta do Google Ads que ajuda a descobrir as palavras-chave mais pesquisadas no Google. Essa ferramenta é essencial para quem deseja otimizar o SEO do seu site ou criar campanhas de anúncios (Ads) com base nas palavras mais populares. Com ela, é possível encontrar termos relevantes para o seu nicho, entender o volume de buscas e a concorrência, e usar esses dados para melhorar o desempenho dos seus anúncios.
                    </Paragraph>

                    <Subtitle>1. Acesse:</Subtitle>
                    <Paragraph>
                      👉 <Link href="https://ads.google.com/intl/pt-BR/home/tools/keyword-planner/" target="_blank" rel="noreferrer">https://ads.google.com/intl/pt-BR/home/tools/keyword-planner/</Link>
                    </Paragraph>

                    <Subtitle>2. No menu que abrir, vá para:</Subtitle>
                    <List>
                      <li>Ferramentas {'>'} Planejamentos {'>'} Planejador de palavras-chave</li>
                      <li>Em seguida, clique em {'"Descobrir novas palavras-chave"'}</li>
                    </List>

                    <Subtitle>3. Agora escolha:</Subtitle>
                    <List>
                      <li>{'"Descubra novas palavras-chave"'}</li>
                    </List>

                    <Subtitle>4. Digite palavras ou frases que quer analisar</Subtitle>
                    <Paragraph>
                      Exemplo: frases curtas, contador de dias, teste de personalidade
                    </Paragraph>

                    <Subtitle>5. Clique em {'"Ver resultados"'}</Subtitle>

                    <SectionTitle>📊 O que você verá:</SectionTitle>
                    <List>
                      <li>A média de buscas mensais no Google</li>
                      <li>A concorrência (Alta, Média ou Baixa)</li>
                      <li>Sugestões de palavras-chave similares</li>
                      <li>Lances estimados por clique (útil para quem usa Ads, mas você pode ignorar por enquanto)</li>
                    </List>

                    <SectionTitle>💡 Dica:</SectionTitle>
                    <Paragraph>
                      Você pode filtrar por localização (ex: só Brasil) e por idioma (Português) no topo da tela de resultados.
                    </Paragraph>

                    <SectionTitle>🔑 Exemplo de Palavras-chave: {'"filme online"'}</SectionTitle>
                    <Table>
                      <THead>
                        <tr>
                          <Th>Palavra-chave</Th>
                          <Th>Média de pesquisas mensais</Th>
                          <Th>Mudança em três meses</Th>
                          <Th>Mudança YoY</Th>
                          <Th>Concorrência</Th>
                          <Th>Lance na parte superior da página (menores valores)</Th>
                          <Th>Lance na parte superior da página (maiores valores)</Th>
                        </tr>
                      </THead>
                      <TBody>
                        <tr>
                          <Td>melhor streaming de filmes</Td>
                          <Td>1 mil – 10 mil</Td>
                          <Td>+900%</Td>
                          <Td>0%</Td>
                          <Td>Alta</Td>
                          <Td>R$ 2,06</Td>
                          <Td>R$ 7,27</Td>
                        </tr>
                        <tr>
                          <Td>streaming de filmes</Td>
                          <Td>1 mil – 10 mil</Td>
                          <Td>0%</Td>
                          <Td>0%</Td>
                          <Td>Média</Td>
                          <Td>R$ 1,72</Td>
                          <Td>R$ 6,05</Td>
                        </tr>
                        <tr>
                          <Td>top gun maverick onde assistir streaming</Td>
                          <Td>10 – 100</Td>
                          <Td>0%</Td>
                          <Td>0%</Td>
                          <Td>Média</Td>
                          <Td>R$ 1,14</Td>
                          <Td>R$ 3,32</Td>
                        </tr>
                        <tr>
                          <Td>assistir nba</Td>
                          <Td>1 mil – 10 mil</Td>
                          <Td>0%</Td>
                          <Td>0%</Td>
                          <Td>Média</Td>
                          <Td>R$ 1,24</Td>
                          <Td>R$ 4,88</Td>
                        </tr>
                        <tr>
                          <Td>streaming gratuito</Td>
                          <Td>1 mil – 10 mil</Td>
                          <Td>0%</Td>
                          <Td>0%</Td>
                          <Td>Baixa</Td>
                          <Td>R$ 0,34</Td>
                          <Td>R$ 2,52</Td>
                        </tr>
                        <tr>
                          <Td>assistir top gun maverick</Td>
                          <Td>1 mil – 10 mil</Td>
                          <Td>0%</Td>
                          <Td>0%</Td>
                          <Td>Baixa</Td>
                          <Td>R$ 0,08</Td>
                          <Td>R$ 2,02</Td>
                        </tr>
                        <tr>
                          <Td>filmes grátis assistir</Td>
                          <Td>1 mil – 10 mil</Td>
                          <Td>0%</Td>
                          <Td>0%</Td>
                          <Td>Baixa</Td>
                          <Td>R$ 0,11</Td>
                          <Td>R$ 1,14</Td>
                        </tr>
                        <tr>
                          <Td>filmes grátis para assistir</Td>
                          <Td>10 mil – 100 mil</Td>
                          <Td>0%</Td>
                          <Td>0%</Td>
                          <Td>Baixa</Td>
                          <Td>R$ 0,11</Td>
                          <Td>R$ 1,14</Td>
                        </tr>
                        <tr>
                          <Td>assistir filmes online 2021 grátis</Td>
                          <Td>1 mil – 10 mil</Td>
                          <Td>0%</Td>
                          <Td>+∞</Td>
                          <Td>Baixa</Td>
                          <Td>R$ 0,11</Td>
                          <Td>R$ 0,92</Td>
                        </tr>
                        <tr>
                          <Td>tv aberta grátis</Td>
                          <Td>1 mil – 10 mil</Td>
                          <Td>0%</Td>
                          <Td>0%</Td>
                          <Td>Baixa</Td>
                          <Td>R$ 0,08</Td>
                          <Td>R$ 0,57</Td>
                        </tr>
                        <tr>
                          <Td>assistir coach carter</Td>
                          <Td>100 – 1 mil</Td>
                          <Td>+900%</Td>
                          <Td>+900%</Td>
                          <Td>Baixa</Td>
                          <Td>R$ 0,91</Td>
                          <Td>R$ 2,01</Td>
                        </tr>
                        <tr>
                          <Td>assistir rookie online</Td>
                          <Td>1 mil – 10 mil</Td>
                          <Td>0%</Td>
                          <Td>0%</Td>
                          <Td>Baixa</Td>
                          <Td>R$ 0,57</Td>
                          <Td>R$ 1,92</Td>
                        </tr>
                        <tr>
                          <Td>assistir top gun</Td>
                          <Td>1 mil – 10 mil</Td>
                          <Td>0%</Td>
                          <Td>0%</Td>
                          <Td>Baixa</Td>
                          <Td>R$ 0,91</Td>
                          <Td>R$ 3,15</Td>
                        </tr>
                      </TBody>
                    </Table>
                  </Container>

                  <Container>
                    <SectionTitle>Palavras-chave Negativas no Google Ads</SectionTitle>
                    <Paragraph>
                      As palavras-chave negativas são essenciais para refinar suas campanhas de Google Ads, ajudando a evitar que seus anúncios apareçam para termos irrelevantes.
                    </Paragraph>
                    <Paragraph>
                      Ao usar palavras-chave negativas, você pode se concentrar em alcançar os clientes mais relevantes e aumentar seu retorno sobre o investimento (ROI).
                    </Paragraph>

                    <SectionTitle>Exemplos de Palavras-chave Negativas</SectionTitle>

                    <Subtitle>Para uma loja de roupas femininas:</Subtitle>
                    <List>
                      <li><strong>{'"calças masculinas"'}</strong> (evita anúncios aparecendo em buscas por roupas masculinas)</li>
                      <li><strong>{'"camisetas infantis"'}</strong> (impede anúncios para roupas infantis)</li>
                      <li><strong>{'"roupas baratas"'}</strong> (exclui buscas relacionadas a preços baixos)</li>
                    </List>

                    <Subtitle>Para uma ótica:</Subtitle>
                    <List>
                      <li><strong>{'"lentes para câmeras"'}</strong> (não relevante para óticas)</li>
                      <li><strong>{'"óculos de grau grátis"'}</strong> (bloqueia buscas por promoções de óculos gratuitos)</li>
                    </List>

                    <Subtitle>Para um site de viagens:</Subtitle>
                    <List>
                      <li><strong>{'"desconto de última hora"'}</strong> (evita campanhas focadas em descontos)</li>
                      <li><strong>{'"viagens baratas"'}</strong> (filtra buscas por viagens de baixo custo)</li>
                      <li><strong>{'"hospedagem gratuita"'}</strong> (impede anúncios para hospedagem sem custo)</li>
                    </List>

                    <Paragraph>
                      Esses exemplos mostram como as palavras-chave negativas ajudam a direcionar seus anúncios apenas para o público relevante, evitando desperdício de orçamento com cliques irrelevantes.
                    </Paragraph>
                  </Container>

                  <Container>
                    <SectionTitle>
                      Links para Projetos Futuros
                    </SectionTitle>

                    <List>
                      <li>
                        <Link href="https://www.justwatch.com/?stage=UNDEFINED%" target="_blank" rel="noreferrer">
                          Página de Filmes - JustWatch
                        </Link>
                      </li>
                      <li>
                        <Link href="https://pobreflix.life/" target="_blank" rel="noreferrer">
                          Página de Filmes - pobreflix.life
                        </Link>
                      </li>
                      <li>
                        <Link href="https://api.razzlepuzzles.com/wordsearch?locale=pt" target="_blank" rel="noreferrer">
                          Página de caça palavra - razzlepuzzles
                        </Link>
                      </li>
                      <li>
                        <Link href="https://rachacuca.com.br/palavras/caca-palavras/animais/aves/" target="_blank" rel="noreferrer">
                          Página de caça palavra - rachacuca
                        </Link>
                      </li>
                    </List>
                  </Container>
                </>
              </CodeContainer>
            </MainContentLayout>
          </MainLayout>
        </>
      )}
    </>
  );
};

export default ProjectPotentialSEO;
