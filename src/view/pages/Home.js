import './Home.css'

import Input from '../components/input/Input.js';
import Task from '../components/task/Task.js';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Home = () => {
    const [taskList, setTaskList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('/tasks');
                console.log(response.data);
                setTaskList(response.data);
                setIsLoading(false);
            } catch (error) {
                console.log('error: ' + error);
            }
        }

        fetchData();
    }, []);

    return (
        <div>
            <div className='header'>
                <h1 className='app-title'>TODO App</h1>
            </div>
            <div className="task-board">
                <Input />
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    taskList.map((task) => {
                        const { id, title } = task;
                        return <Task key={`task-id-${id}`} title={title} />;
                    })
                )}
            </div>
        </div>
    );
}

export default Home;
