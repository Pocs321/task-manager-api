import { Request, Response, NextFunction } from 'express';
import { TaskService } from '../services/task.service';
import { createTaskSchema, updateTaskSchema } from '../utils/validation';

export const TaskController = {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 20;
      const tasks = await TaskService.getAll(page, limit);
      res.json({ data: tasks, error: null, message: 'Tasks retrieved' });
    } catch (error) {
      next(error);
    }
  },

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const task = await TaskService.getById(req.params.id);
      if (!task) {
        return res.status(404).json({ data: null, error: 'Not found', message: 'Task not found' });
      }
      res.json({ data: task, error: null, message: 'Task retrieved' });
    } catch (error) {
      next(error);
    }
  },

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const parsed = createTaskSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ data: null, error: parsed.error.errors, message: 'Validation failed' });
      }
      const task = await TaskService.create(parsed.data);
      res.status(201).json({ data: task, error: null, message: 'Task created' });
    } catch (error) {
      next(error);
    }
  },

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const parsed = updateTaskSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ data: null, error: parsed.error.errors, message: 'Validation failed' });
      }
      const task = await TaskService.update(req.params.id, parsed.data);
      if (!task) {
        return res.status(404).json({ data: null, error: 'Not found', message: 'Task not found' });
      }
      res.json({ data: task, error: null, message: 'Task updated' });
    } catch (error) {
      next(error);
    }
  },

  async remove(req: Request, res: Response, next: NextFunction) {
    try {
      const deleted = await TaskService.remove(req.params.id);
      if (!deleted) {
        return res.status(404).json({ data: null, error: 'Not found', message: 'Task not found' });
      }
      res.json({ data: null, error: null, message: 'Task deleted' });
    } catch (error) {
      next(error);
    }
  },
};
