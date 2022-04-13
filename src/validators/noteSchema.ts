import { body } from 'express-validator'
import { CATEGORIES } from '../utils/constants'

export const noteSchema = [
  body('name').notEmpty().withMessage('Name is required'),
  body('category').isIn(CATEGORIES).withMessage('Category is not correct'),
  body('content').notEmpty().withMessage('Content is required'),
]
