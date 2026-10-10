# Decisões

## React, TypeScript e Vite

O projeto usa React com TypeScript e Vite porque essa combinação atende à
construção de uma interface frontend componentizada, com desenvolvimento local
rápido e validação estática do código.

## Página única no MVP

As cinco áreas iniciais serão organizadas em uma única página. Isso reduz a
complexidade da primeira entrega e permite validar o conteúdo e a navegação
antes de criar páginas individuais para projetos.

## Componentes separados

O cabeçalho e a seção inicial foram separados em componentes próprios em
`src/components`. Novas áreas devem seguir essa organização quando tiverem
estrutura ou comportamento independente.

## Contato no rodapé

Em vez de uma seção de Contato com formulário, as informações de contato ficam
em um rodapé. Isso mantém a página enxuta e dispensa qualquer serviço externo.

## Projetos curados

A seção de projetos usa dados escritos em `src/data/projects.ts`, inspirados no
formato nome, impacto e stack. A API do GitHub apenas complementa (estrelas),
evitando que o limite de requisições ou uma falha de rede esvazie a seção.

## Escopo incremental

O MVP não inclui backend, banco de dados ou autenticação. O foco inicial é
apresentar conteúdo estático e links profissionais.
