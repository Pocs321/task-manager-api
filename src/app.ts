import express from 'express';
import cors from 'cors';
import { taskRouter } from './routes/task.routes';
import { healthRouter } from './routes/health.routes';
import { errorHandler } from './middleware/error-handler';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/health', healthRouter);
app.use('/api/tasks', taskRouter);

app.use(errorHandler);

export { app };
