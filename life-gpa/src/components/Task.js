import React from 'react';
import { connect } from 'react-redux'; 
import { openUpdateTask } from '../actions';


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

handleInput = e => {
    this.setState({
      
        ...this.state,
         [e.target.name]: e.target.value 
        
    });
}

    render() {
        if (this.props.updatingTask) return (
            <div>
                <form onSubmit={() => this.props.updateTask()}>
                    <input onChange={this.handleInput} type="text" name="task" placeholder={this.props.task.name} value={this.props.task.name} /> 
                    <input onChange={this.handleInput} type="text" name="category" placeholder={this.props.task.category} value={this.props.task.category} /> 
                    <button type="submit">submit</button>
                </form>
            </div>
        ) 
        else 
    return (
        <div>
            <p>Task: {this.props.task.name}</p>
            <p>Category: {this.props.task.category}</p> 
            {this.props.task.completed ?  <p>complete</p> :
                <p>incomplete</p>
            }
            <button onClick={() => this.props.toggleCompleted(this.props.task)}>I did this today!</button>
            <button onClick={() => {this.props.deleteTask(this.props.task)}}>delete</button> 
            <button onClick={() => this.props.openUpdateTask(this.props.task)}>edit</button>
        </div>
    )
    }
} 

const mapStateToProps = ({ error, updatingTask }) => ({
    error, 
    updatingTask
}); 


export default connect(mapStateToProps, { openUpdateTask })(Task); 