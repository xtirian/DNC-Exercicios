# Board Task Back
Este projeto é o backend do exercicio de criar um Boad Tasks

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
A inserção deste script serve para rodar o projeto (como o npm start), mas o nodemon facilita o desenvolvimento do projeto pois ele atualiza automaticamente as autreçaões inseirdas no projeto sem precisarmos ficar reinicializando toda hora o projeto manualmente.

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

Depois de fazer esta configuração, já é possivel criar um arquivo ".env" e inserir as variaveis de ambiente

Para chamar uma variável de ambiente que está no arquivo **Dotenv**, vamos ao arquivo que queremos chamar e usar o seguinte comando.

```js
//este comando foi inserido no users.js
router.get("/", function (req, res, next) {
  console.log("var: ", process.env.TEST); //este comando é o responsável por processar a variavel de ambiente.
  res.send("respond with a resource ");
});

```