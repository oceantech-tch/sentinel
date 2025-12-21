import mongoose from 'mongoose';
import AppError from '../utils/appError.js';

export const validateObjectId = (paramName) => {
  return (req, res, next) => {
    const id = req.params[paramName];

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return next(new AppError('Invalid ID format', 400));
    }

    next();
  };
};