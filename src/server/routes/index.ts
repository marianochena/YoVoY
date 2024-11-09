import { Router } from 'express';
import authRoutes from './auth';
import tripRoutes from './trips';
import bookingRoutes from './bookings';
import userRoutes from './users';

const router = Router();

router.use('/auth', authRoutes);
router.use('/trips', tripRoutes);
router.use('/bookings', bookingRoutes);
router.use('/users', userRoutes);

export default router;