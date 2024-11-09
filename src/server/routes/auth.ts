import { Router } from 'express';
import { register, login, getProfile } from '../controllers/auth';
import { auth } from '../middleware/auth';
import { validateRegister, validateLogin } from '../validators/auth';

const router = Router();

router.post('/register', validateRegister, register);
router.post('/login', validateLogin, login);
router.get('/profile', auth, getProfile);

export default router;