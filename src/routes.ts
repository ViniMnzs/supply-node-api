import {Router} from 'express';
import ScheduleController from './controllers/ScheduleController';

const routes = Router();

routes.get('/', ScheduleController.index);
routes.post('/create', ScheduleController.create);

export default routes;