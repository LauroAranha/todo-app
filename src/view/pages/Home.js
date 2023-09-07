import './Home.css'

import Input from '../components/input/Input.js';
import Task from '../components/task/Task.js';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Home = () => {
    const [doneTaskList, setDoneTaskList] = useState([]);
    const [todoTaskList, setTodoTaskList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [shouldRefetch, setShouldRefetch] = useState(false)

    const sortTasks = (taskList) => {
        // Separate the tasks into two arrays without duplicates
        const newDoneTasks = [...doneTaskList];
        const newTodoTasks = [...todoTaskList];

        taskList.forEach((task) => {
            if (task.status === 'open') {
                if (!newTodoTasks.some((existingTask) => existingTask.id === task.id)) {
                    newTodoTasks.push(task);
                }
            } else {
                if (!newDoneTasks.some((existingTask) => existingTask.id === task.id)) {
                    newDoneTasks.push(task);
                }
            }
        });

        // Update the state with the new arrays
        setDoneTaskList(newDoneTasks);
        setTodoTaskList(newTodoTasks);
    }

    const handleTaskAdded = () => {
        setShouldRefetch(!shouldRefetch);
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('/tasks');
                sortTasks(response.data);
                setIsLoading(false);
            } catch (error) {
                console.log('error: ' + error);
            }
        }

        fetchData();
    }, [shouldRefetch]);

    return (
        <div>
            <div className="task-board">
                <div className='inner-task-board'>
                    <h1 className='app-title'>to-do list</h1>
                    <Input onTaskAdded={handleTaskAdded} />

                    <p className='todo-tasks'>completed tasks</p>
                    {isLoading ? (
                        <p>Loading...</p>
                    ) : (
                        doneTaskList.map((task) => {
                            const { id, title, status } = task;
                            return <Task key={`task-id-${id}`} title={title} status={status} />;
                        })
                    )}

                    <p className='todo-tasks'>to-do</p>
                    {isLoading ? (
                        <p>Loading...</p>
                    ) : (
                        todoTaskList ? todoTaskList.map((task) => {
                            const { id, title, status } = task;
                            return <Task key={id} id={id} title={title} status={status} />;
                        }) : <p>insert some tasks</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Home;
