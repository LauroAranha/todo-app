import express from 'express';
import database from './database.js'
import routes from './routes.js'

const app = express();

app.use(express.json());
app.use(routes);

database.sync(() => console.log(`Databse connected: ${process.env.DB_NAME}`));

app.listen(process.env.SERVER_PORT, () => console.log(`Server started at port: ${process.env.SERVER_PORT}`));
