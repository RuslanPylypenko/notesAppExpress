import {NoteRepository} from "../repositories/noteRepository";
import {CATEGORIES, STATUS} from "../helpers/constants";
import {ISummary} from "../helpers/interfaces";


export const getStats = (): ISummary[] => {
    const notes = NoteRepository.getAll();
    return CATEGORIES.map(category => ({
        category,
        active: notes.filter(note => note.category === category && note.status === STATUS.ACTIVE).length,
        archived: notes.filter(note => note.category === category && note.status === STATUS.ARCHIVED).length,
    }))
}