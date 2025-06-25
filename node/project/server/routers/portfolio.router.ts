import { Router } from 'express';
import { authMiddleware } from '../middleware/authMiddleware';
import { createPortfolioController, deletePortfolioCotroller, getPortfolioController, getPortfoliosByUserIdContoller, updatePortfolioController } from '../controllers/portfolio.controller';


const router = Router();

router.post('/createPortfolio', authMiddleware, createPortfolioController);
router.put('/updatePortfolio/:id', authMiddleware, updatePortfolioController);
router.get('/:id', getPortfolioController);
router.get('/portfoliosByUserId/:id', getPortfoliosByUserIdContoller);
router.delete('/:id',authMiddleware, deletePortfolioCotroller)


export default router;