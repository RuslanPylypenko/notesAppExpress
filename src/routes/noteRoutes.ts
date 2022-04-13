import Router from 'express'
import {create, index, getById, removeById, update, stats} from '../controllers/notesController'
import { createNoteSchema } from '../validators/createNoteSchema'
import { updateNoteSchema } from '../validators/updateNoteSchema'
import { validateRequestSchema } from '../validators/validateRequestSchema'

const router = Router()

router.get('/notes', index)

router.get('/notes/stats', stats)

router.get('/notes/:id', getById)

router.delete('/notes/:id', removeById)

router.patch('/notes/:id', updateNoteSchema, validateRequestSchema, update)

router.post('/notes', createNoteSchema, validateRequestSchema, create)

export default router
