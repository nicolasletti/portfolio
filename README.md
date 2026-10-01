# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  # Portfólio

  Site pessoal de Nicolas Letti para apresentar sua trajetória, habilidades e
  projetos de desenvolvimento.

  ## MVP

  O primeiro MVP será uma página única com cinco áreas principais:

  - **Início**: apresentação breve e chamada para conhecer o trabalho.
  - **Sobre mim**: resumo da trajetória e dos interesses profissionais.
  - **Projetos**: seleção de trabalhos com descrição, tecnologias e links.
  - **Habilidades**: tecnologias e práticas conhecidas.
  - **Contato**: formas de entrar em contato e links profissionais.

  A implementação atual contém o cabeçalho e a seção inicial. As demais áreas
  estão documentadas como próximas etapas em [`docs/backlog.md`](docs/backlog.md).

  ## Tecnologias

  - React
  - TypeScript
  - Vite
  - CSS
  - ESLint

  ## Desenvolvimento

  Instale as dependências:

  ```bash
  npm install
  ```

  Inicie o servidor de desenvolvimento:

  ```bash
  npm run dev
  ```

  Valide o projeto antes de publicar:

  ```bash
  npm run lint
  npm run build
  ```

  ## Documentação do projeto

  - [Objetivo e ideia inicial](docs/objetivo.md)
  - [Conteúdo do MVP](docs/conteudo.md)
  - [Direção de design](docs/design.md)
  - [Decisões técnicas](docs/decisoes.md)
  - [Backlog](docs/backlog.md)

