import jwt from 'jsonwebtoken';
import {JWT_ACCESS_SECRET, JWT_REFRESH_SECRET, ACCESS_TOKEN_EXPIRES_IN, REFRESH_TOKEN_EXPIRES_IN} from '../configs/jwt';

export const generateToken = (payload: object) => {
    const accessToken = jwt.sign(payload, JWT_ACCESS_SECRET, {expiresIn: ACCESS_TOKEN_EXPIRES_IN})
    const refreshToken = jwt.sign(payload, JWT_REFRESH_SECRET, {expiresIn: REFRESH_TOKEN_EXPIRES_IN})
    return {accessToken, refreshToken}
}

export const cookieOptionsForRefreshToken = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'strict' as const,
  maxAge: 30 * 24 * 60 * 60 * 1000,
};

export const verifyAccesToken = (token: string) => jwt.verify(token, JWT_ACCESS_SECRET)
export const verifyRefreshToken = (token: string) => jwt.verify(token, JWT_REFRESH_SECRET)