import React from 'react';
import PropTypes from 'prop-types';
import './Task.css';

const Task = ({ id, title, status }) => {
    const taskClass = status === 'open' ? 'todo-task' : 'completed-task';

    return (
        <div id={`task-id-${id}`} className={`task-container ${taskClass}`}>
            <p className="task-title">{title}</p>
            {status === 'open' && <div className='button-container'> <p className='edit-option'>edit</p> </div>}
        </div>
    );
}

Task.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    status: PropTypes.oneOf(['open', 'closed'])
}

export default Task;
