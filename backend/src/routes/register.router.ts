import { Router } from 'express';
import { RegisterUserController } from '../controllers/registerUser.controller';
const router = Router();

router.post('/register', RegisterUserController);

export default router;