import { NextFunction, Request, Response } from "express";
import { ApiError } from '../middleware/errorHandler';
import projectModel from "../models/project.model";
import { getPortfolio } from "../models/portfolios.model";

export const getProjectById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        if (!id) {
            throw new ApiError(404, 'no id')
        }
        const result = await projectModel.getProjectById(Number(id))
        res.status(200).json(result)
    } catch (error) {
        next(error)
    }

}

export const getProjectsByPortfolioId = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        if (!id) {
            throw new ApiError(404, 'no id')
        }
        const result = await projectModel.getProjectsByPortfolioId(Number(id))
        res.status(200).json(result)
    } catch (error) {
        next(error)
    }
}
export const addProject = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { title, description } = req.body
        if (!title || !description) {
            throw new ApiError(400, 'bad request')
        }
        const user_id = res.locals.user.id;
        const portfolio_id = req.params.id;
        const portfolio = await getPortfolio(Number(portfolio_id))
        if (!portfolio) {
            throw new ApiError(404, 'dont find portfolio')
        }
        if (portfolio.user_id !== user_id) {
            throw new ApiError(403, 'forbidden')
        }
        const newProject = await projectModel.addProject({ ...req.body, portfolio_id })
        res.status(200).json(newProject)
    } catch (error) {
        next(error)
    }
}

export const updateProject = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user_id = res.locals.user.id;
        const project_id = req.params.id;
        const project = await projectModel.getProjectById(Number(project_id))
        if (!project) {
            throw new ApiError(404, 'dont find project')
        }
        const portfolio = await getPortfolio(project.portfolio_id)
        if (!portfolio) {
            throw new ApiError(404, 'dont find portfolio')
        }
        if (user_id !== portfolio.user_id) {
            throw new ApiError(403, 'forbidden')
        }
        const result = await projectModel.updateProject({ ...req.body, id: project_id })
        if (!result) {
            throw new ApiError(404, 'Project not updated');
        }

        res.status(200).json(result)
    } catch (error) {
        next(error)
    }
}

export const deleteProject = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user_id = res.locals.user.id;
        const project_id = req.params.id;
        const project = await projectModel.getProjectById(Number(project_id))
        if (!project) {
            throw new ApiError(404, 'dont find project')
        }
        const portfolio = await getPortfolio(project.portfolio_id)
        if (!portfolio) {
            throw new ApiError(404, 'dont find portfolio')
        }
        if (user_id !== portfolio.user_id) {
            throw new ApiError(403, 'forbidden')
        }
        const result = projectModel.deleteProject(Number(project_id))
        if (!result) {
            throw new ApiError(500, 'delete is not succes')
        }
        res.status(200).json({ message: 'succes' })
    } catch (error) {
        next(error)
    }
}