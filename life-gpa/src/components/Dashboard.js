import React from 'react'; 
import TaskList from './TaskList';
import OverallGPA from './OverallGPA';
import DailyGPA from './DailyGPA';


class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {

        }
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

export default Dashboard;