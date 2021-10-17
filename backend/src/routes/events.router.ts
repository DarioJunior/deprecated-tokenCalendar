import { Router } from 'express';
import * as eventsController from '../controllers/events.controller';
import { validadeBody } from '../middlewares/validateEventInfos.middleware';

const router = Router();

router.get('/:id', eventsController.getEvents);
router.post('/register/:id', validadeBody, eventsController.createEvent);
export default router;