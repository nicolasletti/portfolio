# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Projeto

Portfólio pessoal de Nicolas Letti: página única em React 19 + TypeScript + Vite, sem backend, banco ou autenticação. Todo o conteúdo e a documentação estão em **português (pt-BR)** — mantenha textos de UI, `aria-label`s, comentários e docs nesse idioma.

## Comandos

```bash
npm run dev       # servidor de desenvolvimento (Vite)
npm run build     # tsc -b && vite build (type-check + bundle em dist/)
npm run lint      # eslint .
npm run preview   # serve o build de dist/
```

Não há framework de testes configurado. A validação antes de publicar é `npm run lint` + `npm run build`.

## Arquitetura

- `src/App.tsx` monta a página: link "pular para o conteúdo" + `Header` + `<main id="conteudo">` com `Hero`, `About`, `Projects`. A navegação é por âncoras (`scroll-padding-top` usa `--header-height`).
- Cada seção/componente fica em `src/components/<nome>/<nome>.tsx` com um `<nome>.css` ao lado, importado diretamente pelo componente (CSS puro, sem CSS-in-JS nem biblioteca de UI). Novas áreas com estrutura ou comportamento próprio devem seguir esse padrão.
- `src/data/profile.ts` é a fonte única dos dados pessoais (nome, curso, semestre, e-mail, GitHub, LinkedIn); `Hero` e `About` leem dele — não duplique esses textos nos componentes.
- `Projects` não tem lista estática: busca em runtime, na API pública do GitHub, os repositórios listados em `FEATURED_REPOSITORIES` (usuário em `GITHUB_USERNAME`), validando o formato com o type guard `isGitHubRepository` e cancelando com `AbortController`. Para destacar outro projeto, adicione o nome do repositório nessa constante.

### Tema claro/escuro

O tema é definido em três pontos que precisam continuar coerentes:

1. Script inline em `index.html` aplica `data-theme` em `<html>` antes da primeira pintura (usa `localStorage['theme']` ou `prefers-color-scheme`) para evitar flash.
2. `ThemeToggle` lê `document.documentElement.dataset.theme`, alterna o valor e persiste em `localStorage` (com `try/catch`).
3. `src/index.css` define as variáveis de design em `:root` e as sobrescreve em `:root[data-theme='dark']`. Os componentes devem usar essas variáveis (`--text`, `--bg`, `--surface`, `--accent`, ...), não cores fixas.

## Documentação e fluxo

- `docs/` guarda objetivo, conteúdo do MVP, direção de design, decisões técnicas e `backlog.md`. Ao concluir ou mudar algo relevante, atualize os arquivos correspondentes (principalmente o backlog e `decisoes.md`).
- `.github/agents/documentador-markdown.agent.md` define um agente que só edita Markdown (`README.md` e `docs/`) e não deve inventar funcionalidades — use-o como referência de tom ao escrever docs.
- O `README.md` descreve o projeto e os comandos; `docs/design.md` e `docs/backlog.md` indicam que a seção **Habilidades** e a seção **Contato** ainda não foram implementadas (e Habilidades ainda precisa entrar na navegação do `Header`).
- Convenção de commits do histórico: `feat: ...` (Conventional Commits em inglês); o trabalho acontece em branches `feat/*` a partir de `main`.

## Lint / TypeScript

ESLint usa flat config (`eslint.config.js`) com `typescript-eslint` recommended, `react-hooks` e `react-refresh` (Vite) apenas em `**/*.{ts,tsx}`; `dist` é ignorado. O build roda `tsc -b` com `tsconfig.app.json` / `tsconfig.node.json`, então erros de tipo quebram `npm run build`.
