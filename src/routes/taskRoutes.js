import express from 'express';
import taskController from '../controller/taskController.js';

const taskRoutes = express.Router();

taskRoutes.get('/tasks', taskController.findAll);
taskRoutes.post('/tasks', taskController.addTask);
taskRoutes.put('/tasks/:id', taskController.completeTask);

export default taskRoutes;
