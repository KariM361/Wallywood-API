import { Router } from 'express';
import { createRecord, deleteRecord, getRecord, getRecords, updateRecord } from '../Controllers/userController.js';
import { authenticateToken } from '../middleware/authenticateToken.js';
import { authorizeRole } from '../middleware/authorizeRole.js';

const router = Router();
router.get('/', getRecords);
router.get('/:slug', getRecord);
router.post('/', authenticateToken, authorizeRole('ADMIN'), createRecord);
router.put('/:id', authenticateToken, authorizeRole('ADMIN'), updateRecord);
router.delete('/:id', authenticateToken, authorizeRole('ADMIN'), deleteRecord);

export const genreRoutes = router;