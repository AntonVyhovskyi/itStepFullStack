
import { comparePassword, hashPassword } from '../utils/hash';
import { NextFunction, Request, Response } from "express";
import { createUser, findUserByEmail } from "../models/user.model";
import { cookieOptionsForRefreshToken, generateToken, verifyRefreshToken } from "../utils/jwt";
import { findToken, removeToken, saveToken } from "../models/token.model";
import { ApiError } from '../middleware/errorHandler';
import { JwtPayload } from 'jsonwebtoken';



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
    const tokens = generateToken({ id: user.id, email: user.email, name: user.name });

    await saveToken(user.id, tokens.refreshToken);

    res
      .cookie('refreshToken', tokens.refreshToken, cookieOptionsForRefreshToken)
      .status(200)
      .json({ user: { id: user.id, email: user.email, name: user.name }, accessToken: tokens.accessToken });
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

    const tokens = generateToken({ id: user.id, email: user.email, name: user.name });
    await saveToken(user.id, tokens.refreshToken);

    res
      .cookie('refreshToken', tokens.refreshToken, cookieOptionsForRefreshToken)
      .status(200)
      .json({ user: { id: user.id, email: user.email, name: user.name }, accessToken: tokens.accessToken });

  } catch (error) {
    next(error)
  }
};

export const logout = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const refreshToken = req.cookies?.refreshToken;

    if (!refreshToken) {
      throw new ApiError(400, 'Refresh token is missing');
    }

    await removeToken(refreshToken);

    res
      .clearCookie('refreshToken', cookieOptionsForRefreshToken)
      .status(200)
      .send();
  } catch (error) {
    next(error);
  }
};



export const refresh = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const refreshToken = req.cookies?.refreshToken
    if (!refreshToken) {
      throw new ApiError(401, 'No refresh token provided');
    }
    const payload = verifyRefreshToken(refreshToken) as JwtPayload & { id: number, email: string };
    const savedToken = await findToken(refreshToken);
    if (!savedToken) {
      throw new ApiError(401, 'Unauthorized: token not found');
    }
    await removeToken(refreshToken);
    const newTokens = generateToken({ id: payload.id, email: payload.email });
    await saveToken(payload.id, newTokens.refreshToken);
    res
      .cookie('refreshToken', newTokens.refreshToken, cookieOptionsForRefreshToken)
      .status(200)
      .json({ accessToken: newTokens.accessToken });


  } catch (error) {
    // if (error instanceof jwt.TokenExpiredError) {
    //   return res.status(403).json({ message: 'Refresh token expired' });
    // }

    // if (error instanceof jwt.JsonWebTokenError) {
    //   return res.status(403).json({ message: 'Invalid refresh token' });
    // }
    next(error)
  }
};

