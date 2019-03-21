import React from 'react';
import { connect } from 'react-redux'; 



class Task extends React.Component { 
    constructor() {
        super();
        console.log("task props", this.props);
        this.state = { 
            task: {
            name: "",
            category: "",
            completed: false
            }, 
            updatingTask: false
        }
    }

componentDidMount() {
    this.setState({ 
        task: {
        _id: this.props.task._id,
        name: this.props.task.name,
        category: this.props.task.category,
        completed: this.props.task.completed
        }, 
        updatingTask: false 
    })
}
componentDidUpdate() {
    console.log("CDM task", this.props.task.completed);
}
handleInput = e => {
    e.preventDefault();
    this.setState({
      
        ...this.state,
        task: {...this.state.task,
            [e.target.name]: e.target.value  }
        
    });
}

toggleUpdate = () => {
    this.setState({
        updatingTask: !this.state.updatingTask
    })
}

    render() {
        console.log("render", this.props.task.completed);
        if (this.state.updatingTask) return (
            <div>
                <form onSubmit={(e) => {this.props.updateTask( e, this.state.task) 
                this.toggleUpdate()}}>
                    <input onChange={this.handleInput} type="text" name="name" placeholder={this.props.task.name} /> 
                    <input onChange={this.handleInput} type="text" name="category" placeholder={this.props.task.category}  /> 
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
            <button onClick={() => this.toggleUpdate()}>edit</button>
        </div>
    )
    }
} 

const mapStateToProps = ({ error, updatingTask, data }) => ({
    error, 
    updatingTask, 
    data
}); 


export default connect(mapStateToProps, { })(Task); 