'use strict';
const fs = require('node:fs');
const vm = require('node:vm');

const html = fs.readFileSync('index.html', 'utf8');
const scripts = [...html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)];
if (scripts.length === 0) throw new Error('Nenhum bloco JavaScript encontrado em index.html.');
for (const [index, match] of scripts.entries()) {
  new vm.Script(match[1], { filename: 'index.html:inline-script-' + (index + 1) });
}

JSON.parse(fs.readFileSync('manifest.webmanifest', 'utf8'));
JSON.parse(fs.readFileSync('capacitor.config.json', 'utf8'));
for (const file of ['icone.svg', 'icone-foreground.svg', 'sw.js', 'package.json']) {
  if (!fs.existsSync(file)) throw new Error('Arquivo obrigatório ausente: ' + file);
}
new vm.Script(fs.readFileSync('sw.js', 'utf8'), { filename: 'sw.js' });
console.log('Verificação concluída: JavaScript, service worker, manifest e arquivos essenciais.');
