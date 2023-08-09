const express = require('express')
const app = express()
const port = 3000

const cors = require('cors');

app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});

app.get('/produtos', (req, res) => {

    const produtos = [
        
        {
            urlImagem: "../images/basketball.png",
            nomeProduto: "Bola de Basquete",
            preco: "R$ 12,00"
        },
        {
            urlImagem: "../images/boksing-gloves.png",
            nomeProduto: "Placa",
            preco: "R$ 240,00"
        },
        {
            urlImagem: "../images/robo-lego.webp",
            nomeProduto: "Placa",
            preco: "R$ 240,00"
        },

    ]

  res.send(produtos)
})

app.listen(port, () => {
  console.log(`Servidor escutando na porta ${port}`)
})
