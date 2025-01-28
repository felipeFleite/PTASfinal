import express from 'express'
import controllerLivros from '../controllers/controllerLivros.js'

const router = express.Router()

router.get('/', controllerLivros.todosLivros)

router.get('/:id', controllerLivros.livroId)

router.post('/', controllerLivros.addLivro)

router.put('/:id', controllerLivros.attLivro)

router.delete('/:id', controllerLivros.delLivro)

export default router
