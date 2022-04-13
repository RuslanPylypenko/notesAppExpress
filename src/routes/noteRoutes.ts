import Router from 'express'
import { create, getAll, getById, removeById, update } from '../controllers/notesController'

const router = Router()

router.get('/notes', getAll)

router.get('/notes/:id', getById)

router.delete('/notes/:id', removeById)

router.patch('/notes/:id', update)

router.post('/notes', create)

export default router
