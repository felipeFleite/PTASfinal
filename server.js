import express from 'express'
import rotainicial from './rotas/rotainicial.js'

const app = express()
const PORT = 3000

app.use(express.json())

app.use('/', rotainicial)

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})
