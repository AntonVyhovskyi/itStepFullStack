import { NextFunction, Request, Response } from "express";
import { ApiError } from '../middleware/errorHandler';
import skillModel from "../models/skill.model";
import { getPortfolio } from "../models/portfolios.model";


export const getSkillsByPortfolioId = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params
        const result = await skillModel.getAllByPortfolioId(Number(id))
        res.status(200).json(result)
    } catch (error) {
        next(error)
    }

}

export const addSkillInPortfolio = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { skillName } = req.body
        if (!skillName) {
            throw new ApiError(404, 'no skill name')
        }
        const { idPortfolio } = req.params
        const user_id = res.locals.user.id
        const portfolio = await getPortfolio(Number(idPortfolio))
        if (!portfolio) {
            throw new ApiError(404, 'Portfolio not found');
        }
        if (portfolio.user_id !== user_id) {
            throw new ApiError(403, 'forbidden')
        }

        const skill = await skillModel.addToPortfolio(Number(idPortfolio), skillName)

        res.status(200).json(skill)
    } catch (error) {
        next(error)
    }
}

export const deleteSkillFromPortfolio = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { skill_id } = req.body
        const user_id = res.locals.user.id
        const { idPortfolio } = req.params
        const portfolio = await getPortfolio(Number(idPortfolio))
        if (!portfolio) {
            throw new ApiError(404, 'Portfolio not found');
        }
        if (portfolio.user_id !== user_id) {
            throw new ApiError(403, 'forbidden')
        }
        await skillModel.removeFromPortfolio(Number(idPortfolio), skill_id)
        res.status(200).json({ message: 'deleted' })
    } catch (error) {
        next(error)
    }
}