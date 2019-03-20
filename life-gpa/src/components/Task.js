import React from 'react';



const Task = props => {
    console.log("task props", props);
    return (
        <div>
            <p>Task: {props.task.name}</p>
            <p>Category: {props.task.category}</p> 
            {props.task.completed ?  <p>complete</p> :
                <p>incomplete</p>
            }
            <button>I did this today!</button>
            <button>delete</button> 
            <button>edit</button>
        </div>
    )
} 

export default Task; 