# Board Task Back

## Tecnologias utilizadas

- Nodejs
- Express
- Swagger
- DotEnv
- Mongoose
- MongoDB
- Cors

## Iniciando este projeto

Usei o seguinte comando para gerar o projeto do zero:
```bash
 npx express-generator --no-view
```

Caso você clone o projeto do Github, utilize os seguintes comandos para realizar a instalação de dependências e iniciar o projeto.
```bash
$ npm install
$ npm run dev
```


## Configurando Projeto

### Script
Primeiro item adicionado foi o script
```json
"scripts": {
    "dev": "npx nodemon ./bin/www" 
  },
```
A inserção deste script serve para rodar o projeto (como o npm start), mas o nodemon facilita o desenvolvimento do projeto.

### Swagger
Realizo a instação do Swagger Fará a documentação automática da API
```bash
$ npm install swagger-autogen swagger-ui-express
```
### Mongoose
O Mongoose será a biblioteca que de fato faz a conexão com o banco de dados:
```bash
$ npm install mongoose mongoose-to-swagger
```

O Mongoose-to-swagger faz a tradução dos esquemas de bancos de dados pro swagger

### Cors
O Cors serve para evitar problemas de cors entre o frontend e o back end

```bash
$ npm install cors
```
Depois importamos o Cors no App.js

```js
const cors = require('cors');

//[...]

app.use(cors());
```


### Dotenv
Serve para usarmos o arquivo "*.env" que é um arquivo de variáveis de ambiente.

```bash
$ npm install dotenv
```
Para configura esta dependencia, vamos ao App.js

```js
const app = express();

require('dotenv').config();
```

Depois de fazer esta configuração, já é possivel criar um arquivo 
