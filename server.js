import express from 'express'
import rotainicial from './rotas/rotaLivros.js'
import mongoose from 'mongoose'

const app = express()
const PORT = 3000

mongoose.connect("mongodb://localhost:27017/livros").then(function() {
    console.log("Conectado ao Mongodb")
}).catch( err => {
  console.error("Erro ao conectar com banco de dados", err)
})

app.use(express.json())

app.use('/', rotainicial)

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})
