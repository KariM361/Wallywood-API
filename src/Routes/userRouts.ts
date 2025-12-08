import { Router } from 'express';
import { getRecords } from '../Controllers/userController.js';

const router = Router();
router.get('/', getRecords);

export const userRoutes = router;
