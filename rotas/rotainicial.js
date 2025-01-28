import express from 'express'
import controllerLivros from '../controllers/controllerLivros.js'

const router = express.Router()

router.get('/', controllerLivros.todosLivros)

router.get('/:id', controllerLivros.livroId)

router.post('/', controllerLivros.addLivro)

router.put('/', controllerLivros.attLivro)

router.delete('/', controllerLivros.delLivro)

export default router
