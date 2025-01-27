import express from 'express'
import controllerLivros from '../controllers/controllerLivros.js'

const router = express.Router()

router.get('/', controllerLivros.todosItems)
router.get('/:id', controllerLivros.itemId)

export default router
