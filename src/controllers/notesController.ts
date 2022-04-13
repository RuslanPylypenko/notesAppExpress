import express from 'express'
import { ICreateNote, INote } from '../helpers/interfaces'
import { NoteRepository } from '../repositories/noteRepository'
import {getStats} from "../services/noteService";

export const index = (req: express.Request, res: express.Response): void => {
  res.json(NoteRepository.getAll())
}

export const getById = (req: express.Request, res: express.Response): void => {
  try {
    const id: string = req.params.id
    res.send(NoteRepository.getById(id))
  } catch (e) {
    res.status(404).send(e)
  }
}

export const removeById = (req: express.Request, res: express.Response): void => {
  try {
    const id: string = req.params.id
    NoteRepository.remove(id);
    res.send(204).send('No content')
  } catch (e) {
    res.status(404).send(e)
  }
}

export const update = (req: express.Request, res: express.Response): void => {
  try {
    const id: string = req.params.id
    const body: INote = req.body
    const note = NoteRepository.update({ id, ...body })
    res.json(note)
  } catch (e) {
    res.status(404).send(e)
  }
}

export const create = (req: express.Request, res: express.Response): void => {
  try {
    const body: ICreateNote = req.body
    const note = NoteRepository.create(body)
    res.status(201).json(note)
  } catch (e) {
    res.status(404).send(e)
  }
}

export const stats = (req: express.Request, res: express.Response): void =>{
  res.json(getStats())
}




