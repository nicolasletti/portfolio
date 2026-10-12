# Direção de design

## Estrutura

Página única com navegação por âncoras. O cabeçalho tem links para `Sobre`,
`Skills`, `Projetos` e `Contato`; `Início` é o nome no canto. As áreas, em
ordem: Início (com foto), Sobre, Skills, Projetos e rodapé de contato.

## Identidade visual

- **Tema claro:** fundo bege `#fffdf2`, texto preto e verde-oliva `#5f6e33`
  como cor de destaque. Há tema escuro com os mesmos tons, alternado pelo botão
  do cabeçalho.
- **Tipografia:** Ubuntu para texto e títulos (com um trecho em itálico suave,
  como em "Sobre *mim*.") e Ubuntu Mono nos trechos de terminal.
- **Terminal só nos projetos:** o aspecto de terminal fica restrito ao painel
  "Prompt de Comando" da seção Projetos, preto nos dois temas. O restante do
  site mantém um visual claro e limpo.
- **Projetos:** carrossel com cartão de visualização à esquerda e o painel de
  terminal à direita (`type sobre.txt`, `type stack.txt` e `git clone` com botão
  de copiar). Os botões de repositório e demo ficam fora do terminal.
- Os tokens (cores, fontes, raios) ficam em `src/index.css`.

## Princípios

- Priorizar leitura rápida e hierarquia visual clara.
- Funcionar em telas grandes e pequenas.
- Usar HTML semântico e foco visível para navegação por teclado.
- Manter o conteúdo mais importante visível sem excesso de elementos
	decorativos.
- Usar chamadas para ação curtas e objetivas.

## Referência

A estrutura de seções numeradas (`· 01 · Sobre`) e o formato do carrossel de
projetos foram inspirados em um portfólio de referência, mantendo identidade e
conteúdo próprios.
