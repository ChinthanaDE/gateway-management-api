import { check } from 'express-validator';
import validateResult from '../middlewares/validateFields.js';

const validateCreate = [
  check('uid')
    .exists()
    .withMessage('Peripheral device UID is required')
    .notEmpty()
    .withMessage('Peripheral device UID cannot be empty')
    .isNumeric()
    .withMessage('Peripheral device UID must be a number'),
  check('vendor')
    .exists()
    .withMessage('Peripheral device vendor is required')
    .notEmpty()
    .withMessage('Peripheral device vendor cannot be empty'),
  check('dateCreated')
    .optional({ nullable: true })
    .isDate()
    .withMessage('Invalid peripheral device creation date format. Use ISO date format'),
  check('status')
    .exists()
    .withMessage('Peripheral device status is required')
    .notEmpty()
    .withMessage('Peripheral device status cannot be empty')
    .isBoolean()
    .withMessage('Peripheral device status must be a boolean'),
  validateResult,
];

export { validateCreate };
