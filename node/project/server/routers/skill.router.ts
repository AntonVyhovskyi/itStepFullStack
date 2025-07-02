import { Router } from 'express';
import { authMiddleware } from '../middleware/authMiddleware';
import { addSkillInPortfolio, deleteSkillFromPortfolio, getSkillsByPortfolioId } from '../controllers/skill,controler';

const router = Router();


router.post('/addSkill/:idPortfolio', authMiddleware, addSkillInPortfolio)
router.get('/getByPortfolioId/:id', getSkillsByPortfolioId)
router.delete('/deleteFromPortfolio/:idPortfolio',authMiddleware,  deleteSkillFromPortfolio)

export default router;
