import { useState } from 'react'
import './Input.css'
import axios from 'axios';
import PropTypes from 'prop-types';


const Input = ({ onTaskAdded }) => {
    const [inputText, setInputText] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const addTask = async () => {
            try {
                await axios.post('/tasks', { title: inputText });
                setInputText('');
                onTaskAdded();
                console.debug('Added task successfully: ', { title: inputText })
            } catch (error) {
                console.log('error: ' + error);
            }
        }

        addTask();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input className="search-bar" type="text" id="search-bar" value={inputText} onChange={event => setInputText(event.target.value)} name="search-bar" required />
            <button type="submit" style={{ 'display': 'none' }} />
        </form>
    );
}

Input.propTypes = {
    onTaskAdded: PropTypes.boolean
}

export default Input;