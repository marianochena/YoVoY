import { Router } from 'express';
import { auth } from '../middleware/auth';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'Bookings route working' });
});

export default router;