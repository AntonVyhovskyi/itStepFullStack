import { NextFunction, Request, Response } from "express";
import { ApiError } from '../middleware/errorHandler';
import { createPortfolio, deletePortfolio, getPortfolio, getPortfoliosByUserId, IPortfolio, updatePortfolio } from "../models/portfolios.model";


export const createPortfolioController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { first_name, description, title } = req.body
        const user_id = res.locals.user.id
        if (!first_name || !description || !title || !user_id) {
            throw new ApiError(400, 'Missing required fields')
        }

        const portfolio = await createPortfolio({ ...req.body, user_id })
        res.status(201).json(portfolio)
    } catch (error) {
        next(error)

    }
}


export const updatePortfolioController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user_id = res.locals.user.id
        const { id } = req.params
        const updatedPort =  await updatePortfolio({ ...req.body, id, user_id })
        if (!updatedPort) {
            
            throw new ApiError(404, 'Portfolio not found or access denied');
        }
        res.status(200).json(updatedPort)
    } catch (error) {
        next(error)
    }
}


export const getPortfolioController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id}  = req.params
        const port = await getPortfolio(Number(id))
        if(!port) {
             throw new ApiError(404, 'Portfolio not found');
        }
        res.status(200).json(port)
    } catch (error) {
         next(error)
    }
}


export const getPortfoliosByUserIdContoller = async (req: Request, res: Response, next: NextFunction) => {
    try {
         const {id}  = req.params
         const ports = await getPortfoliosByUserId(Number(id))
         if(!ports) {
             throw new ApiError(404, 'Portfolio not found');
        }
         res.status(200).json(ports)
    } catch (error) {
         next(error)
    }
}


export const deletePortfolioCotroller = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params
        const user_id = res.locals.user.id
        const deleteResult = await deletePortfolio(Number(id), Number(user_id))
        if(!deleteResult) {
            throw new ApiError(404, 'Portfolio not found or no authorization or user is not correct'); 
        }
        res.status(200).json({succes: true})
    } catch (error) {
        next(error)
    }
}