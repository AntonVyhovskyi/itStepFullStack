import { Router } from 'express';
import {registration, logout, login} from '../controllers/user.controller'

const router = Router();

router.post('/register', registration );
router.post('/logout', logout);
router.post('/login', login);

export default router;