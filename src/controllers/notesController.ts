import express from 'express'
import { notes } from '../store/notes'
import { ICreateNote, INote } from '../utils/interfaces'
import { Id } from '../utils/generator'
import { dateParser } from '../utils/dateParser'
import { STATUS } from '../utils/constants'
import moment from 'moment'

export const getAll = (req: express.Request, res: express.Response): void => {
  res.json(notes)
}

export const getById = (req: express.Request, res: express.Response): void => {
  try {
    const id: string = req.params.id
    res.send(notes[getIndexById(id)])
  } catch (e) {
    res.status(404).send(e)
  }
}

export const removeById = (req: express.Request, res: express.Response): void => {
  try {
    const id: string = req.params.id
    notes.splice(getIndexById(id), 1)
    res.send(204).send('No content')
  } catch (e) {
    res.status(404).send(e)
  }
}

export const update = (req: express.Request, res: express.Response): void => {
  try {
    const id: string = req.params.id
    const body: INote = req.body

    const note = updateNote({ id, ...body })
    notes[getIndexById(id)] = note

    res.json(note)
  } catch (e) {
    res.status(404).send(e)
  }
}

export const create = (req: express.Request, res: express.Response): void => {
  try {
    const body: INote = req.body

    const note = createNote(body)
    notes.push(note)

    res.status(201).json(note)
  } catch (e) {
    res.status(404).send(e)
  }
}

const getIndexById = (id: string): number => {
  const idx = notes.findIndex(note => note.id === id)
  if (idx === -1) throw new Error('Note not found')
  return idx
}


const createNote = (data: ICreateNote): INote => {
  return {
    id: Id(),
    ...data,
    created_at: moment().format('MMMM DD, YYYY'),
    status: STATUS.ACTIVE,
    dates: dateParser(data.content)
  }
}

const updateNote = (data: INote): INote => {
  return {
    ...data,
    dates: dateParser(data.content)
  }
}
