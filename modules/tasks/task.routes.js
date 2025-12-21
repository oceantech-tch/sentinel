import express from 'express';
import {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} from './task.controller.js';

import { protect } from '../../middlewares/auth.middleware.js';
import { validate } from '../../middlewares/validate.middleware.js';
import { validateObjectId } from '../../middlewares/objectId.middleware.js';
import {
  createTaskSchema,
  updateTaskSchema,
} from './task.validation.js';

const router = express.Router();

router.use(protect);

router.post('/', validate(createTaskSchema), createTask);
router.get('/', getTasks);
router.patch(
    '/:id',
    validateObjectId('id'),
    validate(updateTaskSchema),
    updateTask
);
router.delete(
    '/:id',
    validateObjectId('id'),
    deleteTask
);

export default router;