// import Head from "next/head";
// import { useGlobalState } from "../../../context/GlobalStateContext";
// import {
//   Container,
//   SectionTitle,
//   Subtitle,
//   Paragraph,
//   List,
//   ThTdStyle,
//   ThStyle
// } from "@/styles/globalStyles";

// import { MainLayout } from "@/components/layout/mainLayout";
// import SideBarLayout from "@/components/layout/sideBarLayout";
// import HeaderLayout from "@/components/layout/headerLayout";
// import MainContentLayout from "@/components/layout/contentLayout";
// import Overlay from "@/components/overlay";

// const NodeJsFrameworks = () => {
//   const { isLoaded, isHamburguerOpen, setIsHamburguerOpen } = useGlobalState();

//   const handleOverlayClick = () => setIsHamburguerOpen(false);


//   return (
//     <>
//       <Head>
//         <title>Frameworks Node.js além do Express | Guia Rápido</title>
//         <meta
//           name="description"
//           content="Conheça os principais frameworks Node.js alternativos ao Express, suas características e para que tipo de projeto são indicados."
//         />
//         {/* Open Graph e Twitter tags podem ser adicionadas aqui */}
//       </Head>

//       {!isLoaded ? null : (
//         <>
//           {isHamburguerOpen && <Overlay onClick={handleOverlayClick} />}
//           <MainLayout>
//             <SideBarLayout />
//             <HeaderLayout />
//             <MainContentLayout>
//               <div style={container}>
//                 <div style={sectionTitle}>
//                   Frameworks Node.js além do Express.js
//                 </div>

//                 <p style={paragraph}>
//                   O Express.js é o framework mais conhecido e usado para
//                   construir APIs e aplicações web com Node.js. Contudo, há
//                   outras opções, cada uma indicada para diferentes casos:
//                 </p>

//                 <div style={subtitle}>1. Fastify</div>
//                 <ul style={list}>
//                   <li>
//                     <strong>Foco:</strong> Performance
//                   </li>
//                   <li>Mais rápido que Express em benchmarks.</li>
//                   <li>Suporte nativo a JSON Schema para validação automática.</li>
//                   <li>Plugin system robusto.</li>
//                   <li>
//                     <em>Quando usar:</em> APIs REST de alta performance,
//                     microserviços.
//                   </li>
//                   <li>Similar ao Express, mas com foco em performance e validação.</li>
//                 </ul>

//                 <div style={subtitle}>2. NestJS</div>
//                 <ul style={list}>
//                   <li>
//                     <strong>Foco:</strong> Estrutura robusta e escalável
//                   </li>
//                   <li>Usa TypeScript por padrão.</li>
//                   <li>Arquitetura modular inspirada no Angular.</li>
//                   <li>Suporte a GraphQL, WebSockets, microservices.</li>
//                   <li>
//                     <em>Quando usar:</em> projetos grandes, enterprise, com equipes.
//                   </li>
//                   <li>
//                     Mais estruturado que Express, usa Express ou Fastify internamente.
//                   </li>
//                 </ul>

//                 <div style={subtitle}>3. Koa</div>
//                 <ul style={list}>
//                   <li>
//                     <strong>Criadores:</strong> mesmo time do Express
//                   </li>
//                   <li>Baseado totalmente em async/await.</li>
//                   <li>Middleware leve e composável.</li>
//                   <li>Sem funcionalidades integradas — tudo via plugins.</li>
//                   <li>
//                     <em>Quando usar:</em> projetos modernos que exigem controle
//                     preciso do fluxo.
//                   </li>
//                   <li>Mais minimalista e moderno que Express.</li>
//                 </ul>

//                 <div style={subtitle}>4. Hapi</div>
//                 <ul style={list}>
//                   <li>
//                     <strong>Foco:</strong> segurança, configuração e validação
//                   </li>
//                   <li>Plugins bem estruturados.</li>
//                   <li>Forte sistema de validação com Joi.</li>
//                   <li>Muito usado em ambientes corporativos.</li>
//                   <li>
//                     <em>Quando usar:</em> APIs REST seguras e bem validadas.
//                   </li>
//                   <li>Mais opinativo e robusto que Express.</li>
//                 </ul>

//                 <div style={subtitle}>5. Sails.js</div>
//                 <ul style={list}>
//                   <li>
//                     <strong>Foco:</strong> Aplicações web tipo MVC (similar Rails)
//                   </li>
//                   <li>Arquitetura MVC.</li>
//                   <li>WebSockets integrados.</li>
//                   <li>Suporte a ORM com Waterline.</li>
//                   <li>
//                     <em>Quando usar:</em> aplicações web em tempo real estilo
//                     monolito.
//                   </li>
//                   <li>Usa Express por baixo, mas mais estruturado.</li>
//                 </ul>

//                 <div style={subtitle}>6. AdonisJS</div>
//                 <ul style={list}>
//                   <li>
//                     <strong>Foco:</strong> Full-stack MVC, inspirado no Laravel
//                     (PHP)
//                   </li>
//                   <li>Suporte a autenticação, ORM, validação etc.</li>
//                   <li>Muito completo.</li>
//                   <li>
//                     <em>Quando usar:</em> projetos full-stack Node.js com foco em
//                     produtividade.
//                   </li>
//                   <li>
//                     Conceitos diferentes do Express — mais parecido com frameworks
//                     completos como Laravel ou Rails.
//                   </li>
//                 </ul>

//                 <div style={subtitle}>7. LoopBack</div>
//                 <ul style={list}>
//                   <li>
//                     <strong>Foco:</strong> APIs REST baseadas em modelos
//                   </li>
//                   <li>Criação automática de endpoints baseados em modelos.</li>
//                   <li>Ferramentas CLI para geração de código.</li>
//                   <li>
//                     <em>Quando usar:</em> APIs empresariais com foco em CRUD rápido.
//                   </li>
//                   <li>Mais abstrato e automatizado que Express.</li>
//                 </ul>

//                 <div style={subtitle}>Resumo prático</div>

//                 <table style={tableStyle}>
//                   <thead>
//                     <tr>
//                       <th style={thStyle}>Framework</th>
//                       <th style={thStyle}>Nível de Abstração</th>
//                       <th style={thStyle}>Foco Principal</th>
//                       <th style={thStyle}>Quando Usar</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr>
//                       <td style={thTdStyle}>Express</td>
//                       <td style={thTdStyle}>Baixo</td>
//                       <td style={thTdStyle}>Simplicidade e flexibilidade</td>
//                       <td style={thTdStyle}>Projetos pequenos e médios</td>
//                     </tr>
//                     <tr>
//                       <td style={thTdStyle}>Fastify</td>
//                       <td style={thTdStyle}>Baixo</td>
//                       <td style={thTdStyle}>Performance</td>
//                       <td style={thTdStyle}>APIs rápidas e leves</td>
//                     </tr>
//                     <tr>
//                       <td style={thTdStyle}>NestJS</td>
//                       <td style={thTdStyle}>Alto</td>
//                       <td style={thTdStyle}>Estrutura empresarial</td>
//                       <td style={thTdStyle}>Projetos grandes, escaláveis, com time grande</td>
//                     </tr>
//                     <tr>
//                       <td style={thTdStyle}>Koa</td>
//                       <td style={thTdStyle}>Médio</td>
//                       <td style={thTdStyle}>Modernidade (async/await)</td>
//                       <td style={thTdStyle}>Projetos modernos que buscam leveza e controle</td>
//                     </tr>
//                     <tr>
//                       <td style={thTdStyle}>Hapi</td>
//                       <td style={thTdStyle}>Médio</td>
//                       <td style={thTdStyle}>Segurança e validação</td>
//                       <td style={thTdStyle}>APIs com foco em regras de negócio e segurança robusta</td>
//                     </tr>
//                     <tr>
//                       <td style={thTdStyle}>Sails.js</td>
//                       <td style={thTdStyle}>Alto</td>
//                       <td style={thTdStyle}>Websockets, MVC</td>
//                       <td style={thTdStyle}>Aplicações web monolíticas com tempo real</td>
//                     </tr>
//                     <tr>
//                       <td style={thTdStyle}>AdonisJS</td>
//                       <td style={thTdStyle}>Alto</td>
//                       <td style={thTdStyle}>Full-stack MVC</td>
//                       <td style={thTdStyle}>Projetos completos como blogs, sistemas administrativos</td>
//                     </tr>
//                     <tr>
//                       <td style={thTdStyle}>LoopBack</td>
//                       <td style={thTdStyle}>Alto</td>
//                       <td style={thTdStyle}>Geração automática de APIs</td>
//                       <td style={thTdStyle}>Backend rápido para aplicações baseadas em modelo</td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//             </MainContentLayout>
//           </MainLayout>
//         </>
//       )}
//     </>
//   );
// };

// export default NodeJsFrameworks;

import Head from "next/head";
import { useGlobalState } from "../../../context/GlobalStateContext";
import {
  Container,
  SectionTitle,
  Subtitle,
  Paragraph,
  List,
  ThTdStyle,
  ThStyle
} from "@/styles/globalStyles";

import { MainLayout } from "@/components/layout/mainLayout";
import SideBarLayout from "@/components/layout/sideBarLayout";
import HeaderLayout from "@/components/layout/headerLayout";
import MainContentLayout from "@/components/layout/contentLayout";
import Overlay from "@/components/overlay";

const NodeJsFrameworks = () => {
  const { isLoaded, isHamburguerOpen, setIsHamburguerOpen } = useGlobalState();

  const handleOverlayClick = () => setIsHamburguerOpen(false);

  return (
    <>
      <Head>
        <title>Frameworks Node.js além do Express | Guia Rápido</title>
        <meta
          name="description"
          content="Conheça os principais frameworks Node.js alternativos ao Express, suas características e para que tipo de projeto são indicados."
        />
        {/* Open Graph e Twitter tags podem ser adicionadas aqui */}
      </Head>

      {!isLoaded ? null : (
        <>
          {isHamburguerOpen && <Overlay onClick={handleOverlayClick} />}
          <MainLayout>
            <SideBarLayout />
            <HeaderLayout />
            <MainContentLayout>
              <Container>
                <SectionTitle>
                  Frameworks Node.js além do Express.js
                </SectionTitle>

                <Paragraph>
                  O Express.js é o framework mais conhecido e usado para
                  construir APIs e aplicações web com Node.js. Contudo, há
                  outras opções, cada uma indicada para diferentes casos:
                </Paragraph>

                <Subtitle>1. Fastify</Subtitle>
                <List>
                  <li>
                    <strong>Foco:</strong> Performance
                  </li>
                  <li>Mais rápido que Express em benchmarks.</li>
                  <li>Suporte nativo a JSON Schema para validação automática.</li>
                  <li>Plugin system robusto.</li>
                  <li>
                    <em>Quando usar:</em> APIs REST de alta performance,
                    microserviços.
                  </li>
                  <li>Similar ao Express, mas com foco em performance e validação.</li>
                </List>

                <Subtitle>2. NestJS</Subtitle>
                <List>
                  <li>
                    <strong>Foco:</strong> Estrutura robusta e escalável
                  </li>
                  <li>Usa TypeScript por padrão.</li>
                  <li>Arquitetura modular inspirada no Angular.</li>
                  <li>Suporte a GraphQL, WebSockets, microservices.</li>
                  <li>
                    <em>Quando usar:</em> projetos grandes, enterprise, com equipes.
                  </li>
                  <li>
                    Mais estruturado que Express, usa Express ou Fastify internamente.
                  </li>
                </List>

                <Subtitle>3. Koa</Subtitle>
                <List>
                  <li>
                    <strong>Criadores:</strong> mesmo time do Express
                  </li>
                  <li>Baseado totalmente em async/await.</li>
                  <li>Middleware leve e composável.</li>
                  <li>Sem funcionalidades integradas — tudo via plugins.</li>
                  <li>
                    <em>Quando usar:</em> projetos modernos que exigem controle
                    preciso do fluxo.
                  </li>
                  <li>Mais minimalista e moderno que Express.</li>
                </List>

                <Subtitle>4. Hapi</Subtitle>
                <List>
                  <li>
                    <strong>Foco:</strong> segurança, configuração e validação
                  </li>
                  <li>Plugins bem estruturados.</li>
                  <li>Forte sistema de validação com Joi.</li>
                  <li>Muito usado em ambientes corporativos.</li>
                  <li>
                    <em>Quando usar:</em> APIs REST seguras e bem validadas.
                  </li>
                  <li>Mais opinativo e robusto que Express.</li>
                </List>

                <Subtitle>5. Sails.js</Subtitle>
                <List>
                  <li>
                    <strong>Foco:</strong> Aplicações web tipo MVC (similar Rails)
                  </li>
                  <li>Arquitetura MVC.</li>
                  <li>WebSockets integrados.</li>
                  <li>Suporte a ORM com Waterline.</li>
                  <li>
                    <em>Quando usar:</em> aplicações web em tempo real estilo
                    monolito.
                  </li>
                  <li>Usa Express por baixo, mas mais estruturado.</li>
                </List>

                <Subtitle>6. AdonisJS</Subtitle>
                <List>
                  <li>
                    <strong>Foco:</strong> Full-stack MVC, inspirado no Laravel
                    (PHP)
                  </li>
                  <li>Suporte a autenticação, ORM, validação etc.</li>
                  <li>Muito completo.</li>
                  <li>
                    <em>Quando usar:</em> projetos full-stack Node.js com foco em
                    produtividade.
                  </li>
                  <li>
                    Conceitos diferentes do Express — mais parecido com frameworks
                    completos como Laravel ou Rails.
                  </li>
                </List>

                <Subtitle>7. LoopBack</Subtitle>
                <List>
                  <li>
                    <strong>Foco:</strong> APIs REST baseadas em modelos
                  </li>
                  <li>Criação automática de endpoints baseados em modelos.</li>
                  <li>Ferramentas CLI para geração de código.</li>
                  <li>
                    <em>Quando usar:</em> APIs empresariais com foco em CRUD rápido.
                  </li>
                  <li>Mais abstrato e automatizado que Express.</li>
                </List>

                <Subtitle>Resumo prático</Subtitle>

                <table>
                  <thead>
                    <tr>
                      <ThStyle>Framework</ThStyle>
                      <ThStyle>Nível de Abstração</ThStyle>
                      <ThStyle>Foco Principal</ThStyle>
                      <ThStyle>Quando Usar</ThStyle>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <ThTdStyle>Express</ThTdStyle>
                      <ThTdStyle>Baixo</ThTdStyle>
                      <ThTdStyle>Simplicidade e flexibilidade</ThTdStyle>
                      <ThTdStyle>Projetos pequenos e médios</ThTdStyle>
                    </tr>
                    <tr>
                      <ThTdStyle>Fastify</ThTdStyle>
                      <ThTdStyle>Baixo</ThTdStyle>
                      <ThTdStyle>Performance</ThTdStyle>
                      <ThTdStyle>APIs rápidas e leves</ThTdStyle>
                    </tr>
                    <tr>
                      <ThTdStyle>NestJS</ThTdStyle>
                      <ThTdStyle>Alto</ThTdStyle>
                      <ThTdStyle>Estrutura empresarial</ThTdStyle>
                      <ThTdStyle>Projetos grandes, escaláveis, com time grande</ThTdStyle>
                    </tr>
                    <tr>
                      <ThTdStyle>Koa</ThTdStyle>
                      <ThTdStyle>Médio</ThTdStyle>
                      <ThTdStyle>Modernidade (async/await)</ThTdStyle>
                      <ThTdStyle>Projetos modernos que buscam leveza e controle</ThTdStyle>
                    </tr>
                    <tr>
                      <ThTdStyle>Hapi</ThTdStyle>
                      <ThTdStyle>Médio</ThTdStyle>
                      <ThTdStyle>Segurança e validação</ThTdStyle>
                      <ThTdStyle>APIs com foco em regras de negócio e segurança robusta</ThTdStyle>
                    </tr>
                    <tr>
                      <ThTdStyle>Sails.js</ThTdStyle>
                      <ThTdStyle>Alto</ThTdStyle>
                      <ThTdStyle>Websockets, MVC</ThTdStyle>
                      <ThTdStyle>Aplicações web monolíticas com tempo real</ThTdStyle>
                    </tr>
                    <tr>
                      <ThTdStyle>AdonisJS</ThTdStyle>
                      <ThTdStyle>Alto</ThTdStyle>
                      <ThTdStyle>Full-stack MVC</ThTdStyle>
                      <ThTdStyle>Projetos completos como blogs, sistemas administrativos</ThTdStyle>
                    </tr>
                    <tr>
                      <ThTdStyle>LoopBack</ThTdStyle>
                      <ThTdStyle>Alto</ThTdStyle>
                      <ThTdStyle>Geração automática de APIs</ThTdStyle>
                      <ThTdStyle>Backend rápido para aplicações baseadas em modelo</ThTdStyle>
                    </tr>
                  </tbody>
                </table>
              </Container>
            </MainContentLayout>
          </MainLayout>
        </>
      )}
    </>
  );
};

export default NodeJsFrameworks;
