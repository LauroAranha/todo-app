import express from 'express';

const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json({ name: 'hello world' });
});

export { routes as default };
