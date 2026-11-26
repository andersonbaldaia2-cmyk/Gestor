const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
const out = path.join(root, 'www');
fs.mkdirSync(out, { recursive: true });
for (const file of ['index.html', 'manifest.webmanifest', 'sw.js', 'icone.svg']) {
  const from = path.join(root, file);
  if (!fs.existsSync(from)) throw new Error('Arquivo obrigatório não encontrado: ' + file);
  fs.copyFileSync(from, path.join(out, file));
}
console.log('Arquivos do Painel preparados para Android.');