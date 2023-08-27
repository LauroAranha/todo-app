import express from 'express';
import taskController from '../controller/taskController.js';

const taskRoutes = express.Router();

taskRoutes.get('/tasks', taskController.findAll);
taskRoutes.post('/tasks', taskController.addTask)

export default taskRoutes;
