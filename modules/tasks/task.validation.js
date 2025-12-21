import Joi from 'joi';

export const createTaskSchema = Joi.object({
  title: Joi.string().min(1).required(),
  description: Joi.string().allow('', null),
  completed: Joi.boolean(),
});

export const updateTaskSchema = Joi.object({
  title: Joi.string().min(1),
  description: Joi.string().allow('', null),
  completed: Joi.boolean(),
}).min(1); // prevent empty updates