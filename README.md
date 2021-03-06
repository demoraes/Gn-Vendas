## Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [JQUERY](https://jquery.com/)


## 💻 Projeto

 <b>Gn Vendas</b> desafio feito durante processo seletivo da gerencianet, consiste em um sistema de gerenciamento de produtos, onde é possivel cadastrar, listar, deletar e gerar boleto de um produto cadastrado.


### ⚙ Como rodar o projeto na sua máquina

  O projeto é dividido em três partes, são eles:

    1 - Backend
    2 - Frontend

  <b>O Frontend precisa que o backend esteja rodando.</b>

### Pré-requisitos

  É necessario que você tenha as seguintes ferramentas instaladas em sua máquina:

   - <b>[Git](https://git-scm.com)</b>

   - <b>[Node.js](https://nodejs.org/en/)</b>

  Você pode usar um editor de código de sua preferência, mas eu endico o <b>[VSCode](https://code.visualstudio.com/)</b>

### 🧭 Rodando o Backend

```bash
# Clone este repositório
$ git clone https://github.com/demoraes/Gn-Vendas

# Acesse a pasta do projeto no terminal/cmd
$ cd gn-vendas

# Vá para a pasta Backend
$ cd backend

# Instale as dependências
$ npm install ou yarn

# Execute a aplicação em modo de desenvolvimento
$ yarn dev

# O servidor inciará na porta:3333 - acesse http://localhost:3333 
```


### 🧭 Rodando o Frontend

- Você precisara ter o apache e o php instalado para que seja possivel renderizar a pagina.
- Logo após a instalação desses serviços é necessario seguir os passos abaixo.
  - A pasta do projeto precisa estar necessariamente na pasta /var/www/html/, nesse caso o apache utiliza esse diretório, isso pode mudar se você estiver utilizando outro servidor web.
  - Mude o dono da pasta do projeto com o seguinte comando: chown -R www-data.www-data frontend

## 🤔 Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.








