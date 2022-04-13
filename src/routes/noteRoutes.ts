import Router from 'express'
import { create, getAll, getById, removeById, update } from '../controllers/notesController'
import { noteSchema } from '../validators/noteSchema'
import { validateRequestSchema } from '../validators/validateRequestSchema'

const router = Router()

router.get('/notes', getAll)

router.get('/notes/:id', getById)

router.delete('/notes/:id', removeById)

router.patch('/notes/:id', noteSchema, validateRequestSchema, update)

router.post('/notes', noteSchema, validateRequestSchema, create)

export default router
