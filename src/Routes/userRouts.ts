import { Router } from 'express';
import { getRecords } from '../Controllers/userController.js';

const router = Router();
routes.get('/', getRecords);
routes.get('/:id', getRecord);
routes.post('/', createRecord);
routes.put('/:id', updateRecord);
routes.delete('/:id', deleteRecord);

export const userRoutes = router;
