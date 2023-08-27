import './Home.css'

import Input from '../controller/input/Input.js';
import Task from '../controller/task/Task.js';

const Home = () => {
    const mockTaskData = [
        {
            id: 1,
            title: 'Buy Groceries'
        },
        {
            id: 2,
            title: 'Finish Homework'
        },
        {
            id: 3,
            title: 'Exercise'
        },
        {
            id: 4,
            title: 'Call Mom'
        },
        {
            id: 5,
            title: 'Read a Book'
        }
    ];

    const fetchTasksData = mockTaskData;
    return (
        <div>
            <div className='header'>
                <h1 className='app-title'>TODO App</h1>
            </div>
            <div className="task-board">
                <Input />
                {fetchTasksData.map((task) => {
                    const { id, title } = task;
                    return <Task key={`task-id-${id}`} title={title} />
                })}
            </div>
        </div>
    );
}

export default Home;