import React from 'react'; 
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

import { getData } from '../actions'; 

import TaskList from './TaskList';
import OverallGPA from './OverallGPA';
import DailyGPA from './DailyGPA';



class Dashboard extends React.Component {
    
    componentDidMount() {
       getData();
    }

    render() {
        return (
        <div>
            <h1>Hi [name of user]!</h1> 
            <OverallGPA /> 
            <DailyGPA /> 
            <TaskList /> 
        </div>
        )
    }
}


const mapStateToProps = ({ data }) => ({
    data
})

export default withRouter(connect(mapStateToProps, {getData}))(Dashboard);