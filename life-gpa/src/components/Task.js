import React from 'react';


class Task extends React.Component { 
    constructor() {
        super();
    // this.state = { 
    //     task: {
    //     name: this.props.task.name,
    //     category: this.props.task.category,
    //     completed: this.props.task.completed
    //     }
    // }
}
    render() {
    return (
        <div>
            <p>Task: {this.props.task.name}</p>
            <p>Category: {this.props.task.category}</p> 
            {this.props.task.completed ?  <p>complete</p> :
                <p>incomplete</p>
            }
            <button onClick={() => this.props.toggleCompleted(this.props.task)}>I did this today!</button>
            <button onClick={() => {this.props.deleteTask(this.props.task)}}>delete</button> 
            <button>edit</button>
        </div>
    )
    }
} 

export default Task; 