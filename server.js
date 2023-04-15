// Importando as bibliotecas necessárias
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const routes = require('./routes')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(bodyParser.json())
app.use(routes)

const port = 8080;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}.
              http://localhost:8080
  `);
});