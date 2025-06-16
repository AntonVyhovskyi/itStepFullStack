import { comparePassword, hashPassword } from '../utils/hash';
import { NextFunction, Request, Response } from "express";
import { createUser, findUserByEmail } from "../models/user.model";
import { generateToken } from "../utils/jwt";
import { removeToken, saveToken } from "../models/token.model";

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

export async function registration(req: Request, res: Response, next: NextFunction) {
  try {
    const { email, password, name } = req.body
    const passwordHash = await hashPassword(password)
    const user = await createUser(email, passwordHash, name)
    const tokens = generateToken({ id: user.id, email: user.email })
    await saveToken(user.id, tokens.refreshToken)
    res.status(201).json({ user: { id: user.id, email: user.email }, ...tokens })
  } catch (error) {
    res.status(500).json({ message: 'registration error', error })
  }
}

export async function login(req: Request, res: Response, next: NextFunction) {
  try {
    const { email, password } = req.body;

    const user = await findUserByEmail(email)
    if (!user) {
       res.status(400).json({ message: 'Invalid credentials' })
       return
    }
    const passwordIsCorrect = await comparePassword(password, user.password_hash)
    if (passwordIsCorrect) {
      const tokens = generateToken({ id: user.id, email: user.email })
      await saveToken(user.id, tokens.refreshToken)
      res.status(201).json({ user: { id: user.id, email: user.email }, ...tokens })
    } else {
      res.status(404).send('Невірний пароль')
    }
  } catch (error) {
    res.status(500).json({ message: 'login error', error })
  }
}

export async function logout(req: Request, res: Response, next: NextFunction) {
  try {
    const { refreshToken } = req.body
    await removeToken(refreshToken)
    res.status(200).send()
  } catch (error) {
    res.status(500).json({ message: 'token remove error', error })
  }
}

export async function activate(req: Request, res: Response, next: NextFunction) {
  try {

  } catch (error) {

  }
}

export async function refresh(req: Request, res: Response, next: NextFunction) {
  try {

  } catch (error) {

  }
}