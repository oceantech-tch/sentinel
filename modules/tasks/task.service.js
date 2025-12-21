import Task from '../../models/task.model.js';
import AppError from '../../utils/appError.js';

export const createTask = async (userId, data) => {
  return await Task.create({
    ...data,
    owner: userId,
  });
};

export const getUserTasks = async (userId) => {
  return await Task.find({ owner: userId });
};

export const updateTask = async (userId, taskId, updates) => {
  const task = await Task.findOne({ _id: taskId, owner: userId });

  if (!task) {
    throw new AppError('Task not found', 404);
  }

  Object.assign(task, updates);
  await task.save();

  return task;
};

export const deleteTask = async (userId, taskId) => {
  const task = await Task.findOneAndDelete({
    _id: taskId,
    owner: userId,
  });

  if (!task) {
    throw new AppError('Task not found', 404);
  }
};