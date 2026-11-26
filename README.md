# Painel

Aplicativo Android e web para organizar pessoas, atividades e registros, com interface compacta e armazenamento local.

## Recursos
- Painel com indicadores e atalhos.
- Cadastro, edição, pesquisa e exclusão de pessoas.
- Histórico de registros com data, horário, situação, duração, responsável, tipo e notas.
- Indicadores de itens concluídos, pendentes e ausências.
- Backup e restauração em JSON.
- Banco local IndexedDB e funcionamento offline após o primeiro carregamento.
- Interface responsiva com navegação por ícones e tema escuro roxo/magenta.

## Android
O projeto usa Capacitor 6. O workflow do GitHub Actions gera um APK de depuração quando há alterações nos arquivos do aplicativo ou quando executado manualmente.

## Dados
Os registros permanecem no armazenamento local do aparelho. Faça backups regulares e guarde os arquivos em local seguro.

O aplicativo mantém o banco IndexedDB anterior para preservar registros já existentes durante a atualização.