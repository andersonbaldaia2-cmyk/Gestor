# AutoGestor CFC

Aplicativo web instalável (PWA) para cadastro de alunos e controle de aulas de uma autoescola.

## Recursos
- Cadastro, edição, pesquisa e exclusão de alunos.
- Ficha individual com dados e histórico.
- Registro de aulas: agendada, realizada, falta, cancelada e reagendada.
- Contadores de presenças, faltas e aulas restantes.
- Armazenamento local com IndexedDB.
- Backup e restauração dos dados em arquivo JSON.
- Interface responsiva em português brasileiro e tema escuro minimalista.
- Suporte offline após o primeiro carregamento.

## Arquivos
- `index.html`: aplicativo completo (estrutura, aparência e funcionalidades).
- `sw.js`: cache e funcionamento offline.
- `manifest.webmanifest`: configuração para instalação como aplicativo.
- `icone.svg`: ícone do aplicativo.

## Publicação no GitHub Pages
1. Abra Settings → Pages.
2. Em Build and deployment, escolha Deploy from a branch.
3. Selecione a branch `main` e a pasta `/(root)` e salve.
4. Aguarde o GitHub publicar o endereço exibido na mesma página.

Se o repositório estiver privado e sua conta/plano não permitir Pages privado, altere a visibilidade do repositório para público em Settings → General → Danger Zone → Change repository visibility.

## Instalação no Android
Abra o endereço publicado no Chrome e escolha Instalar aplicativo ou Adicionar à tela inicial.

## Importante sobre os dados
Os cadastros ficam no armazenamento local do navegador/aparelho usando IndexedDB. Não são enviados ao GitHub. Fechar o aplicativo não apaga os dados. Limpar os dados do navegador, remover o armazenamento do site ou perder o aparelho pode apagar os registros locais. Faça backups regulares e guarde o arquivo em local seguro.

Todos os textos e telas do aplicativo estão em português brasileiro.