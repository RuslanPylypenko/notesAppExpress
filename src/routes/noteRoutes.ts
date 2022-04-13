import Router from 'express'
import { getAll, getById } from '../controllers/notesController'

const router = Router()

router.get('/notes', getAll)

router.get('/notes/:id', getById)

router.delete('/notes/:id', (req, res) => {
  console.log('remove note')
})

router.patch('/notes/:id', (req, res) => {
  console.log('update note')
})

router.post('/notes', (req, res) => {
  console.log('create note')
})

export default router
