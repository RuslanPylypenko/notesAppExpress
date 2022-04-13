import { body } from 'express-validator'
import { CATEGORIES, STATUS } from '../helpers/constants'

export const createNoteSchema = [
  body('name').notEmpty().withMessage('Name is required'),
  body('category').isIn(CATEGORIES).withMessage('Category is not correct'),
  body('content').notEmpty().withMessage('Content is required'),
  body('status').isIn([STATUS.ACTIVE, STATUS.ARCHIVED]),
]
