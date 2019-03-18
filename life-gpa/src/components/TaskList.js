import React from 'react';
import Task from './Task';


const TaskList = props => {
    return (
        <div>
            <p>This will map over tasks</p>
            <Task /> 
        </div>
    )
}

export default TaskList; 