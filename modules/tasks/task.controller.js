import * as TaskService from './task.service.js';

export const createTask = async (req, res, next) => {
  try {
    const task = await TaskService.createTask(req.user.id, req.body);

    res.status(201).json({
      success: true,
      data: task,
    });
  } catch (error) {
    next(error);
  }
};

export const getTasks = async (req, res, next) => {
  try {
    const tasks = await TaskService.getUserTasks(req.user.id);

    res.status(200).json({
      success: true,
      data: tasks,
    });
  } catch (error) {
    next(error);
  }
};

export const updateTask = async (req, res, next) => {
  try {
    const task = await TaskService.updateTask(
      req.user.id,
      req.params.id,
      req.body
    );

    res.status(200).json({
      success: true,
      data: task,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteTask = async (req, res, next) => {
  try {
    await TaskService.deleteTask(req.user.id, req.params.id);

    res.status(204).end();
  } catch (error) {
    next(error);
  }
};