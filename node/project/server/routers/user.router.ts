import { Router } from 'express';
import {registration, logout, login, refresh} from '../controllers/user.controller'

const router = Router();

router.post('/register', registration );
router.post('/logout', logout);
router.post('/login', login);
router.post('/refreshToken', refresh);

export default router;