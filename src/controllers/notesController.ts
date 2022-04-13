import express from 'express'
import { notes } from '../store/notes'

export const getAll = (req: express.Request, res: express.Response): void => {
  res.json(notes)
}

export const getById = (req: express.Request, res: express.Response): void => {
  try {
    const id: string = req.params.id
    res.send(notes[getIndexById(id)])
  } catch (e) {
    res.status(404).send('Note not found')
  }
}

const getIndexById = (id: string): number => {
  const idx = notes.findIndex(note => note.id === id)
  if (idx === -1) throw new Error('Note not found')
  return idx
}
