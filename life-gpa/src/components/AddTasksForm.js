import React from 'react'; 
import { connect } from 'react-redux'; 
import { addTask } from '../actions';
 
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
                [e.target.name]: e.target.value 
            }
        })
    }

    addTask = e => {
        e.preventDefault();
        this.props.addTask()
    }

    render() {
        return (
            <div>
            <p>Add a daily task that your GPA will be calculated from. You can give your tasks any category that makes sense to you!</p>
            <form onSubmit={this.addTask}>
                <input 
                type="text" 
                name="task"
                value={this.state.task.task}
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


export default connect(mapStateToProps, { addTask })(AddTaskForm); 