import { Router } from 'express';
import * as loginUserController from '../controllers/loginUser.controller';
const router = Router();

router.post('/', loginUserController.loginUser)

export default router;