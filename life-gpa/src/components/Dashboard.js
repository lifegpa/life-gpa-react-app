import React from 'react'; 
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import Loader from 'react-loader-spinner';
import { getData, toggleCompleted, deleteTask, getGPA } from '../actions'; 

import TaskList from './TaskList';
import GPAContainer from './GPAContainer'; 
import Nav from './Nav';



class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {
            tasks: [], 
            gpa: {}
        }
    } 
    
    componentDidMount() {
        this.props.getData(); 
        
    }


    toggleCompleted = id => {
        this.props.toggleCompleted(id);
    }

    deleteTask = id => {
        this.props.deleteTask(id);
        this.props.getData();
    }

    updateTask = id => {
        this.props.updateTask(id); 
        this.props.getData();
    }

    render() {
        if (!this.props.data) 
        return <Loader type="Audio" color="#C62727" height={300} width={300} />
        else return (
        <div>
            <Nav /> 
            <h1>Hi {this.props.user}!</h1> 
            <GPAContainer gpa={this.props.gpa} />  
            <TaskList tasks={this.props.data} toggleCompleted={this.toggleCompleted} deleteTask={this.deleteTask} updateTask={this.updateTask} /> 
        </div>
        )
    }
}


const mapStateToProps = ({ data }) => ({
    data
})

export default withRouter(connect(mapStateToProps, {getData, toggleCompleted, deleteTask, getGPA })(Dashboard));