import React from 'react'; 
import DailyGPA from './DailyGPA'; 
import OverallGPA from './OverallGPA'; 
import WeekGPA from './WeekGPA';


class GPAContainer extends React.Component {
    render() {
    return (
        <div>
            <DailyGPA /> 
            <WeekGPA /> 
            <OverallGPA /> 
        </div>
    )
    } 
}

export default GPAContainer; 