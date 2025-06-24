import { comparePassword, hashPassword } from '../utils/hash';
import { NextFunction, Request, Response } from "express";
import { createUser, findUserByEmail } from "../models/user.model";
import { generateToken } from "../utils/jwt";
import { removeToken, saveToken } from "../models/token.model";
import { ApiError } from '../middleware/errorHandler';

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

export const registration = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password, name } = req.body;


    if (!email || !password || !name) {
      throw new ApiError(400, 'Missing required fields')

    }

    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      throw new ApiError(409, 'User already exists')

    }


    const passwordHash = await hashPassword(password);
    const user = await createUser(email, passwordHash, name);
    const tokens = generateToken({ id: user.id, email: user.email });

    await saveToken(user.id, tokens.refreshToken);

    res.status(201).json({ user: { id: user.id, email: user.email }, ...tokens });
  } catch (error) {
    next(error);
  }
};

export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;

    const user = await findUserByEmail(email);
    const passwordIsCorrect = user && await comparePassword(password, user.password_hash);

    if (!user || !passwordIsCorrect) {
      throw new ApiError(401, 'Invalid credentials');
    }

    const tokens = generateToken({ id: user.id, email: user.email });
    await saveToken(user.id, tokens.refreshToken);

    res.status(200).json({ user: { id: user.id, email: user.email }, ...tokens });

  } catch (error) {
    next(error)
  }
};

export const logout = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { refreshToken } = req.body;
    if (!refreshToken) {
      throw new ApiError(400, 'Refresh token is required');
    }
    await removeToken(refreshToken);
    res.status(200).send();
  } catch (error) {
    next(error)
  }
};

export const activate = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Реалізація
  } catch (error) {
    res.status(500).json({ message: 'activation error', error });
  }
};

export const refresh = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Реалізація
  } catch (error) {
    res.status(500).json({ message: 'refresh error', error });
  }
};