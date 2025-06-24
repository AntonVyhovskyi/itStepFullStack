
import { Request, Response, NextFunction } from 'express'



export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(`[${new Date().toISOString()}] ERROR:`, err)

    const status = err.status || 500
    const message = err.message || 'Internal Server Error'

    res.status(status).json({
        success: false,
        message,
        ...(process.env.NODE_ENV !== 'production' && { stack: err.stack }),
    })
}

export class ApiError extends Error {
  status: number

  constructor(status: number, message: string) {
    super(message)
    this.status = status
  }
}