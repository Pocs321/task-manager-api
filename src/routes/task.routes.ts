import { Router } from 'express';
import { TaskController } from '../controllers/task.controller';

const taskRouter = Router();

taskRouter.get('/', TaskController.getAll);
taskRouter.get('/:id', TaskController.getById);
taskRouter.post('/', TaskController.create);
taskRouter.put('/:id', TaskController.update);
taskRouter.delete('/:id', TaskController.remove);

export { taskRouter };
