# Painel

Aplicativo Android para organizar pessoas, atividades e registros, com interface escura e armazenamento local.

## Recursos
- Painel com indicadores e atalhos.
- Cadastro, edição, pesquisa e exclusão de pessoas.
- Histórico de registros com data, horário, situação, duração, responsável, tipo e notas.
- Indicadores de concluídos, pendentes e ausências.
- Exportação e restauração de backup JSON.
- Banco local IndexedDB e funcionamento offline após o primeiro carregamento.
- Interface responsiva em tema escuro roxo/magenta.

## Android
O aplicativo usa Capacitor 6. O GitHub Actions gera o APK de depuração automaticamente quando os arquivos do app mudam. O fluxo cria os ícones Android nos tamanhos de launcher e configura as camadas de ícone adaptativo (Android 8 ou superior).

Antes da compilação, o workflow verifica a sintaxe do JavaScript incorporado, o service worker e os arquivos JSON essenciais.

## Dados e backups
Os registros permanecem no armazenamento local do aparelho. Exporte backups regularmente e guarde-os fora do aplicativo. Restaurar um backup substitui os dados existentes.
