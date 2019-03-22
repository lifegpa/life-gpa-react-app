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

    componentDidMount() {
        this.setState({name: '', category: ''})
    }

    handleInput = e => {
        e.preventDefault();
        this.setState({ 
            task: {
                ...this.state.task,
                [e.target.name]: e.target.value 
            }
        })
    }

    addTask = e => {
        this.props.addTask(this.state.task);
        this.props.getData(); 
    }

    render() {
        return (
            <div>
            
            <form className="add-task" onSubmit={this.addTask}>
            <h1>Add a Task to your Day!</h1>
            <p>Here you can add a task and its category to be put on your Task List. Each day, mark whether you completed each task and we'll do the grading for you!  That is unless your life go</p>
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
                <button className={`btn btn-primary`} type="submit">add task</button> 
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