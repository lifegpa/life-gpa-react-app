import React from 'react'; 
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import Loader from 'react-loader-spinner';

import { getData, toggleCompleted, deleteTask, getGPA, updateTask, submitTasks } from '../actions'; 

import './component-styles/dashboard.css'; 

import Footer from './Footer';
import TaskList from './TaskList';
import AddTasksForm from './AddTasksForm';
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

    componentDidUpdate() {
        console.log("something updated!");
    }


    toggleCompleted = id => {
        this.props.toggleCompleted(id);
    }

    deleteTask = id => {
        this.props.deleteTask(id);
        this.props.getData();
    }

    updateTask =  (e, task) => {
        e.preventDefault();
        console.log(this.props.updateTask);
        this.props.updateTask(task); 
        this.props.getData();
    }

    submitTasks = () => {
        this.props.submitTasks(this.props.data); 
    }

    render() {
        if (!this.props.data) 
        return <Loader type="Audio" color="#C62727" height={300} width={300} />
        else return (
        <div>
            <Nav /> 
            <h1>Welcome to LifeGPA</h1> 
            <GPAContainer />  
            <TaskList tasks={this.props.data} toggleCompleted={this.toggleCompleted} deleteTask={this.deleteTask} updateTask={this.updateTask} submitTasks={this.submitTasks} />
            <AddTasksForm />
            <Footer />
        </div>
        )
    }
}


const mapStateToProps = ({ data, tasks }) => ({
    data, 
    tasks
})

export default withRouter(connect(mapStateToProps, {getData, toggleCompleted, deleteTask, getGPA, updateTask, submitTasks })(Dashboard));