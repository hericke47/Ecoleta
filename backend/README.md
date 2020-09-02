<h1 align="center">
  🚀️ Back-end Ecoleta ♻️
</h1>

---

## :rocket: Sobre o Projeto

Ecoleta - é uma forma de conectar empresas e entidades de coleta de resíduos orgânicos e inorgânicos as pessoas que precisam descartar seus resíduos de maneira ecológica.

Este projeto de Back-end será desenvolvido em Node.js com TypeScript no formato RESTFull utilizando as metodologias.

---

## 👨‍💻️ Tecnogias utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)

### Dependências

  - [Express](https://expressjs.com/)
  - [Cors](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Controle_Acesso_CORS)
  - [knex](https://knexjs.org/)

### Banco de Dados

  - [sqlite3](https://sqlite.org/index.html)

### IDE

  - [Visual Studio Code](https://code.visualstudio.com/)

---

## 📦️ Como baixar o projeto

Para copiar o projeto, utilize os comandos:

```bash
  # Clonar o repositório
  ❯ git clone https://github.com/hericke47/Ecoleta.git

  # Entrar no diretório
  ❯ cd Ecoleta
  ❯ cd backend
```
Para instalar as dependências e iniciar o projeto, você pode utilizar o Yarn ou NPM:

**Utilizando yarn**

```bash
  # Instalar as dependências
  ❯ yarn

  # Iniciar o projeto
  ❯ yarn dev:server
```

**Utilizando npm**

*PS: Caso utilize o NPM, apaque o arquivo `yarn.lock` para ter todas as dependências instaladas da melhor forma.*

```bash
  # Instalar as dependências
  ❯ npm install

  # Iniciar o projeto
  ❯ npm dev:server
```
---
## 🚀️ Banco de dados

*PS: Caso o arquivo database.sqlite esteja, basta excluilo e rodar os comandos.*

```bash
  # Cria as migrations
  ❯ yarn knex:migrate

  # Cria o seed, de informações estaticas do backend
  ❯ yarn knex:seed
```
---

## ♻️ Como contribuir

1. Faça o `fork` deste repositório
2. Crie uma branch com sua feature:
   - `$ git checkout -b minha_feature`
3. Confirme sua branch:
   - `$ git commit -m "feature: Meu novo recurso"`
4. Envie sua branch:
   - `$ git push origin minha_feature`

---

