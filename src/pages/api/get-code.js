// pages/api/get-code.js
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  // O caminho aponta para a pasta 'data', que é o lugar certo.
  const codeFilePath = path.join(process.cwd(), 'src', 'data', 'code', 'HomeScreen.txt');
  const code = fs.readFileSync(codeFilePath, 'utf-8');
  res.status(200).json({ code });
}