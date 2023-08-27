import express from 'express';
import database from './database.js'
import taskRoutes from '../routes/taskRoutes.js';

const app = express();

app.use(express.json());
app.use(taskRoutes);

database.sync(() => console.log(`Database connected: ${process.env.DB_NAME}`));

app.listen(process.env.SERVER_PORT, () => console.log(`Server started at port: ${process.env.SERVER_PORT}`));
