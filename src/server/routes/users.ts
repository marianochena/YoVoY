import { Router } from 'express';
import { auth } from '../middleware/auth';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'Users route working' });
});

export default router;