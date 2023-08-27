import React from 'react'; // Import React
import PropTypes from 'prop-types';
import DeleteButton from '../button/deleteButton/DeleteButton.js';
import EditButton from '../button/editButton/EditButton.js';
import './Task.css';

const Task = ({ id, title }) => {
    return (
        <div id={id} className="task-container">
            <p className="task-title">{title}</p>
            <div className='button-container'>
                <EditButton />
                <DeleteButton />
            </div>
        </div>
    );
}

Task.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default Task;
