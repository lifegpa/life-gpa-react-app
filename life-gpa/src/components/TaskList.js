import React from 'react';
import Task from './Task';
import AddTasksForm from './AddTasksForm'; 


const TaskList = props => {
    console.log("tasklist props", props.tasks);

    return (
        <div>
            <h1>Tasks</h1>
            {props.tasks.map(task => { return (
                <div>
                <Task key={task._id} task={task} toggleCompleted={props.toggleCompleted} deleteTask={props.deleteTask} updateTask={props.updateTask} /> 
                </div>
            )})}
            <button onClick={() => { props.submitTasks()}}>Submit your tasks for grading!</button>
            <AddTasksForm />
        </div>
    )
}

export default TaskList; 