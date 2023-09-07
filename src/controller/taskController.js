// taskController.js
import taskModel from '../model/taskModel.js';

async function findAll(req, res) {
    try {
        const tasks = await taskModel.findAll();

        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching tasks' });
    }
}

function addTask(req, res) {
    const { title } = req.body;
    try {
        const tasks = taskModel.create({
            title: title
        });

        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while adding task' });
    }
}
    }
}

export default { findAll, addTask };
