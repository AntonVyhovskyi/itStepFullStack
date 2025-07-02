import { Router } from 'express';
import { authMiddleware } from '../middleware/authMiddleware';
import { addProject, deleteProject, getProjectById, getProjectsByPortfolioId, updateProject } from '../controllers/project.controller';


const router = Router();

router.get('/:id', getProjectById)
router.get('/byPortfolioId/:id', getProjectsByPortfolioId)
router.post('/:id',authMiddleware, addProject)
router.patch('/:id',authMiddleware, updateProject)
router.delete('/:id',authMiddleware, deleteProject)


export default router;

