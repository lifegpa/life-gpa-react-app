import React from 'react';
import Task from './Task';
import AddTasksForm from './AddTasksForm'; 


const TaskList = props => {
    console.log("tasklist props", props.tasks);

    return (
        <div className="task-list">
            <h1>Task List</h1>
            <p>This is a list of your daily tasks to be graded. Each day, tell us if you did a task. Don't worry, everything is graded as Pass/Fail, so we won't judge you if by "exercise," you really just walked to the fridge to get another bowl of ice cream. <br></br> We work on the honor system around here.</p>
            <div className="tasks-container">
            {props.tasks.map(task => { return (
                <div>
                <Task key={task._id} task={task} toggleCompleted={props.toggleCompleted} deleteTask={props.deleteTask} updateTask={props.updateTask} /> 
                </div>
            )})}
            </div>
            <button className={`btn btn-primary`} onClick={() => { props.submitTasks()}}>Submit your tasks for grading!</button>
            
        </div>
    )
}

export default TaskList; 