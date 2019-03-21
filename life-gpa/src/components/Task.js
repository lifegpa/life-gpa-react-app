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
            <div className="task">
                <form className="edit-form" onSubmit={(e) => {this.props.updateTask( e, this.state.task) 
                this.toggleUpdate()}}>
               
                    <input className="task-input" onChange={this.handleInput} type="text" name="name" placeholder={this.props.task.name} /> 
            
                    <input className="category-input" onChange={this.handleInput} type="text" name="category" placeholder={+ this.props.task.category}  /> 

                    <button className={`btn btn-success edit-submit`} type="submit">submit changes to task</button>
                </form>
            </div>
        ) 
        else 
    return (
        <div className="task">
            <div className="task-name"> <p>Task: </p><p>{this.props.task.name}</p></div> 
            <div className="category-name"><p>Category:</p><p>{this.props.task.category}</p></div> 
            <div className="grade-yourself-container">
            {this.props.task.completed ? <> <i className="success fas fa-calendar-check"></i> </> : <> <i class="failure fas fa-calendar-times"></i> </>
            } 
            <button  className={`btn btn-success`} onClick={() => this.props.toggleCompleted(this.props.task)}>I did this today!</button>
            </div>
            <div className="task-button-container">
            <button className={`btn btn-danger`} onClick={() => {this.props.deleteTask(this.props.task)}}>delete</button> 
            <button className={`btn btn-warning`} onClick={() => this.toggleUpdate()}>edit</button>
            </div>
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