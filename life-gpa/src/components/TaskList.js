import React from 'react';
import Task from './Task';
import AddTasksForm from './AddTasksForm';


const TaskList = props => {
    return (
        <div>
            <Task /> 
            <AddTasksForm />
        </div>
    )
}

export default TaskList; 