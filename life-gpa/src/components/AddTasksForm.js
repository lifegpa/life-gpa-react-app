import React from 'react'; 
import { connect } from 'react-redux'; 


class AddTaskForm extends React.Component {
    constructor() {
        super();
    this.state = { 
        task: {
        task: '',
        category: '',
        completed: false
        }
    }
}


    handleInput = e => {
        this.setState({ 
            task: {
                ...this.state, 
                [e.target.name]: e.target.value 
            }
        })
    }

    addTask = () => {
        console.log("this is a task added")
    }

    render() {
        return (
            <div>
            <p>Add a daily task that your GPA will be calculated from. You can give your tasks any category that makes sense to you!</p>
            <form onSubmit={this.addTask}>
            <label>task</label>
                <input 
                type="text" 
                name="task"
                value={this.state.task.task}
                onChange={this.handleInput}
                placeholder="30 minutes of cardio"
                /> 
            <label>category</label>
                <input 
                type="text" 
                name="category"
                value={this.state.task.category}
                placeholder="fitness"
                onChange={this.handleInput}
                />
                <button type="submit">add task</button> 
            </form>
            </div>
        )
    }
}

const mapStateToProps = ({ error, addingTask }) => ({
    error, 
    addingTask
}); 


export default connect(mapStateToProps, {})(AddTaskForm); 