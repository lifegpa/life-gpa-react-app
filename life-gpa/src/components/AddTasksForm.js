import React from 'react'; 
import { connect } from 'react-redux'; 
import { addTask, getData } from '../actions';
 
class AddTaskForm extends React.Component {
    constructor() {
        super();
    this.state = { 
        task: {
        name: '',
        category: '',
        completed: false
        }
    }
}


    handleInput = e => {
        this.setState({ 
            task: {
                ...this.state.task,
                [e.target.name]: e.target.value 
            }
        })
    }

    addTask = e => {
        e.preventDefault();
        console.log("state.task", this.state.task);
        this.props.addTask(this.state.task);
        this.props.getData(); 
    }

    render() {
        return (
            <div>
            <p>Add a daily task that your GPA will be calculated from. You can give your tasks any category that makes sense to you!</p>
            <form onSubmit={this.addTask}>
                <input 
                type="text" 
                name="name"
                value={this.state.task.name}
                onChange={this.handleInput}
                placeholder="task"
                /> 
                <input 
                type="text" 
                name="category"
                value={this.state.task.category}
                placeholder="category"
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


export default connect(mapStateToProps, { addTask, getData })(AddTaskForm); 