// pages/api/generate-pdf.js
import puppeteer from 'puppeteer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Pega o HTML enviado pelo frontend
    const { htmlContent } = req.body;

    // Inicia o Puppeteer
    const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
    const page = await browser.newPage();

    // Define o conteúdo da página com o HTML recebido
    await page.setContent(htmlContent, { waitUntil: 'networkidle0' });

    // Gera o PDF com as opções desejadas
    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true, // Garante que os backgrounds sejam impressos
      margin: {
        top: '5mm',
        right: '5mm',
        bottom: '5mm',
        left: '5mm',
      },
    });

    await browser.close();

    // Envia o PDF de volta como resposta
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=guia-react-native.pdf');
    res.end(pdfBuffer);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to generate PDF', error: error.message });
  }
}