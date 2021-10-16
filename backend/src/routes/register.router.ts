import { Router } from 'express';
import * as RegisterUserController from '../controllers/registerUser.controller';
const router = Router();

router.post('/', RegisterUserController.createUser);

export default router;