// // 'use client';
// import { useState } from 'react';

// export default function ExportButton() {
//   const [loading, setLoading] = useState(false);

//   async function exportToPDF() {
//     setLoading(true);
//     const html2pdf = (await import('html2pdf.js')).default;

//     const element = document.getElementById('guia-react-native');
//     element.style.color = "#000"; // força texto preto
//     element.querySelectorAll('*').forEach(el => {
//       el.style.opacity = "1"; // garante opacidade total
//     });

//     html2pdf(element, {
//       margin: 10,
//       filename: 'guia-react-native.pdf',
//       html2canvas: { scale: 3 },
//       jsPDF: { format: 'a4', orientation: 'portrait' },
//       pagebreak: { mode: 'auto' },
//     }).finally(() => {
//       setLoading(false);
//     });
//   }

//   return (
//     <button
//       onClick={exportToPDF}
//       disabled={loading}
//       style={{
//         padding: '10px 20px',
//         fontSize: '16px',
//         borderRadius: '4px',
//         cursor: 'pointer',
//       }}
//     >
//       {loading ? 'Gerando PDF...' : 'Exportar para PDF'}
//     </button>
//   );
// }
// ---------------------------------------------------------------
// 'use client';
// import { useState } from 'react';

// export default function ExportButton() {
//   const [loading, setLoading] = useState(false);

//   async function exportToPDF() {
//     setLoading(true);
//     const html2pdf = (await import('html2pdf.js')).default;

//     const element = document.getElementById('guia-react-native');

//     // Criando uma camada temporária para adicionar Capa + Rodapé
//     const cloned = element.cloneNode(true);
//     const wrapper = document.createElement('div');

//     // Adiciona a capa
//     const cover = `
//       <div style="font-family: Arial, sans-serif; text-align: center; padding: 100px 20px;">
//         <h1>Guia Fundamental do React Native</h1>
//         <h2>Conceitos Essenciais</h2>
//         <p style="margin-top: 40px; font-size: 18px">Autor: Jorge Luiz</p>
//         <p style="margin-top: 20px; font-size: 16px">Data: ${new Date().toLocaleDateString()}</p>
//         <div style="margin-top: 80px; font-size: 14px;">
//             Documento Exportado para PDF
//         </div>
//       </div>
//       <div style="page-break-after: always;"></div>
//     `;

//     wrapper.innerHTML = cover;
//     wrapper.appendChild(cloned);

//     html2pdf(wrapper, {
//       margin: 10,
//       filename: 'guia-react-native.pdf',
//       html2canvas: { scale: 2 },
//       jsPDF: {
//         format: 'a4',
//         orientation: 'portrait',
//       },
//       pagebreak: { mode: 'auto' },
//     }).then(() => {
//       setLoading(false);
//     });
//   }

//   return (
//     <button
//       onClick={exportToPDF}
//       disabled={loading}
//       style={{
//         padding: '10px 20px',
//         fontSize: '16px',
//         borderRadius: '4px',
//         cursor: 'pointer',
//       }}
//     >
//       {loading ? 'Gerando PDF...' : 'Exportar para PDF com Capa'}
//     </button>
//   );
// }
// ---------------------------------------------------------------------


// npm install jspdf jspdf-autotable

// 'use client';
// import { useState } from 'react';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable'; // Importante para o plugin 'html' funcionar melhor

// export default function ExportButton() {
//   const [loading, setLoading] = useState(false);

//   async function exportToPDF() {
//     setLoading(true);

//     const doc = new jsPDF({
//       orientation: 'portrait',
//       unit: 'px', // Usar pixels para facilitar o dimensionamento
//       format: 'a4',
//     });

//     // --- CAPA ---
//     doc.setFontSize(26);
//     doc.text('Guia Fundamental do React Native', doc.internal.pageSize.getWidth() / 2, 80, { align: 'center' });
//     doc.setFontSize(18);
//     doc.text('Conceitos Essenciais', doc.internal.pageSize.getWidth() / 2, 105, { align: 'center' });
//     doc.setFontSize(12);
//     doc.text(`Autor: Jorge Luiz`, doc.internal.pageSize.getWidth() / 2, 140, { align: 'center' });
//     doc.text(`Data: ${new Date().toLocaleDateString()}`, doc.internal.pageSize.getWidth() / 2, 160, { align: 'center' });
//     doc.text('Documento Exportado para PDF', doc.internal.pageSize.getWidth() / 2, 200, { align: 'center' });

//     // Adiciona uma nova página para o conteúdo
//     doc.addPage();

//     // --- CONTEÚDO ---
//     const element = document.getElementById('guia-react-native');

//     // Força a cor do texto para preto para garantir a renderização correta
//     const originalColors = [];
//     const allElements = [element, ...element.querySelectorAll('*')];
//     allElements.forEach((el) => {
//       originalColors.push(el.style.color);
//       el.style.color = '#000';
//       el.style.fontSize = '20px';
//     });

//     // Use o plugin 'html' para converter o elemento
//     await doc.html(element, {
//       callback: function (doc) {
//         // Restaura as cores originais após a captura
//         allElements.forEach((el, index) => {
//           el.style.color = originalColors[index];
//         });

//         doc.save('guia-react-native.pdf');
//         setLoading(false);
//       },
//       x: 15, // Margem esquerda
//       y: 15, // Margem superior
//       width: doc.internal.pageSize.getWidth() - 30, // Largura do conteúdo
//       windowWidth: element.offsetWidth, // Largura do elemento para cálculo do layout
//     });
//   }

//   return (
//     <button
//       onClick={exportToPDF}
//       disabled={loading}
//       style={{
//         padding: '10px 20px',
//         fontSize: '16px',
//         borderRadius: '4px',
//         cursor: 'pointer',
//       }}
//     >
//       {loading ? 'Gerando PDF Vetorial...' : 'Exportar com jsPDF (Vetorial)'}
//     </button>
//   );
// }

import { useState } from 'react';

export default function ExportButton() {
  const [loading, setLoading] = useState(false);

  async function exportToPDF() {
    setLoading(true);

    try {
      // PASSO 1: Preparar um documento HTML completo e autônomo

      // Pega o HTML apenas do conteúdo que nos interessa
      const contentElement = document.getElementById('guia-react-native');
      if (!contentElement) {
        throw new Error("Elemento '#guia-react-native' não encontrado.");
      }
      const contentHtml = contentElement.innerHTML;
      console.log(contentHtml);


      // Pega todas as tags de estilo (links de CSS e tags <style>) da página atual
      const styleTags = document.querySelectorAll('link[rel="stylesheet"], style');
      let styleHtml = '';
      styleTags.forEach(tag => {
        styleHtml += tag.outerHTML;
      });

      // Monta a string do HTML completo que será enviada para a API
      const fullHtml = `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
    <meta charset="UTF-g">
          ${styleHtml}
     <style>
        * {
        background: none !important;
      }
         body {
        background-color: none !important;
        color: #333333 !important;
      }
        h1, h2, h3, h4, h5, h6 {
        color: #0070f3 !important;
      }
      li {
      line-height: 1.5;
      }
    </style>
  </head>
  <body>
    ${contentHtml}
  </body>
  </html>
    `;

      // PASSO 2: Enviar o HTML completo para a API
      const response = await fetch('/api/generate-pdf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ htmlContent: fullHtml }), // Enviando o novo HTML
      });

      // PASSO 3: Verificar a resposta e processar o download
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Erro no servidor: ${errorData.message || 'Erro desconhecido'}`);
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'guia-react-native.pdf';
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);

    } catch (error) {
      console.error('Erro ao exportar para PDF:', error);
      alert(`Ocorreu um erro ao gerar o PDF:\n${error.message}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={exportToPDF}
      disabled={loading}
      style={{
        padding: '10px 20px',
        fontSize: '16px',
        // ... outros estilos
      }}
    >
      {loading ? 'Gerando PDF no Servidor...' : 'Exportar com Alta Qualidade'}
    </button>
  );
}