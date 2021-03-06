import { ICreateNote, INote } from '../helpers/interfaces'
import { notes } from '../store/notes'
import { Id } from '../helpers/generator'
import moment from 'moment'
import { STATUS } from '../helpers/constants'
import { dateParser } from '../helpers/dateParser'

export class NoteRepository {

  static getAll (): INote[] {
    return notes
  }

  static getById (id: string): INote {
    return notes[getIndexById(id)]
  }

  static remove (id: string): void {
    notes.splice(getIndexById(id), 1)
  }

  static update (data: INote): INote {
    return notes[getIndexById(data.id)] = {
      ...data,
      dates: dateParser(data.content)
    }
  }

  static create (data: ICreateNote): INote {
    const note = {
      id: Id(),
      ...data,
      created_at: moment().format('MMMM DD, YYYY'),
      status: STATUS.ACTIVE,
      dates: dateParser(data.content)
    }
    notes.push(note)

    return note
  }

}

const getIndexById = (id: string): number => {
  const idx = notes.findIndex(note => note.id === id)
  if (idx === -1) throw new Error('Note not found')
  return idx
}



