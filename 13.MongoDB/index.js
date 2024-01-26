const express = require('express')
const familiaModel = require('./src/model/familia.model')
const app = express()
const port = 3000
app.use(express.json())





app.get('/', async function (req, res) {

  return res.status(200).json({
    data: await familiaModel.find({})
  })
})

app.post('/familias', async function(req, res) {
  
  
  const { name, idade, profissao } = req.body;


  if(!name || !idade || !profissao){
    return res.status(404).send('not found with this data')
  }


const response = await familiaModel.create({
  nome: name,
  idade: idade,
  profissao: profissao

})

  return res.status(200).json(response)

  res.status(200).json({
    data: 'teste'
  })
});


app.listen(port, () => console.log(`Servidor Operacional na Porta: ${port}!`))



