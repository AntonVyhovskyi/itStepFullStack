import { JwtPayload } from 'jsonwebtoken';
import { ApiError } from "./errorHandler";
import { verifyAccesToken } from '../utils/jwt';
import { NextFunction, Request, Response } from 'express';



export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) throw new ApiError(401, 'No access token provided');

    const token = authHeader.split(' ')[1];
    if (!token) throw new ApiError(401, 'Access token malformed');

    const payload = verifyAccesToken(token) as JwtPayload & { id: number; email: string };

    res.locals.user = payload;
    next();
  } catch (error) {
    next(new ApiError(401, 'Invalid or expired access token'));
  }
};