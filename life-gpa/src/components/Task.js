import React from 'react';


const Task = props => {
    console.log("task props", props);
    return (
        <div>
            <p>Dummy Task!</p>
            <p>{props.task.name}</p>
            <p>{props.task.category}</p>
            <button>I did this today!</button>
            <button>delete</button> 
            <button>edit</button>
        </div>
    )
} 

export default Task; 