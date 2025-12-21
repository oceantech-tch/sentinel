import * as AuthService from './auth.service.js';

export const register = async (req, res, next) => {
  try {
    const user = await AuthService.registerUser(req.body);

    res.status(201).json({
      success: true,
      message: 'Registration successful. Please verify your email.',
      data: {
        id: user._id,
        email: user.email,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const result = await AuthService.loginUser(req.body);

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const verifyEmail = async (req, res, next) => {
  try {
    await AuthService.verifyEmail(req.params.token);

    res.status(200).json({
      success: true,
      message: 'Email verified successfully.',
    });
  } catch (error) {
    next(error);
  }
};