import { body } from 'express-validator'
import { CATEGORIES, STATUS } from '../helpers/constants'

export const noteSchema = [
  body('name').notEmpty().withMessage('Name is required'),
  body('category').isIn(CATEGORIES).withMessage('Category is not correct'),
  body('content').notEmpty().withMessage('Content is required'),
  body('status').isIn([null,STATUS.ACTIVE, STATUS.ARCHIVED]),
]
