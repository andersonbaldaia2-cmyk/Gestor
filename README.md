# AutoGestor CFC

Aplicativo web instalável (PWA) para cadastro de alunos e controle de aulas de uma autoescola.

## Recursos
- Cadastro, edição, pesquisa e exclusão de alunos.
- Ficha individual com dados e histórico.
- Registro de aulas: agendada, realizada, falta, cancelada e reagendada.
- Contadores de presenças, faltas e aulas restantes.
- Armazenamento local com IndexedDB.
- Backup e restauração dos dados.
- Interface responsiva em português brasileiro e tema escuro.
- Suporte offline após o primeiro carregamento.

## Publicação
O projeto foi preparado para GitHub Pages. Em Settings → Pages, escolha Deploy from a branch, branch main e pasta /(root).

## Instalação no Android
Abra o endereço publicado no Chrome e escolha Instalar aplicativo ou Adicionar à tela inicial.

## Importante sobre os dados
Os cadastros ficam no armazenamento local do navegador/aparelho. Não são enviados ao GitHub. Faça backups regulares. Limpar os dados do navegador ou desinstalar o aplicativo pode apagar os registros locais.

## Arquivos
- index.html: estrutura da aplicação.
- styles.css: visual e responsividade.
- app.js: telas e funcionalidades.
- db.js: banco de dados local IndexedDB.
- sw.js: cache e funcionamento offline.
- manifest.webmanifest: configuração PWA.
- icone.svg, icone-192.png, icone-512.png: ícones.