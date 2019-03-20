import React from 'react'; 
import DailyGPA from './DailyGPA'; 
import OverallGPA from './OverallGPA'; 


class GPAContainer extends React.Component {
    render() {
    return (
        <div>
            <DailyGPA /> 
            <OverallGPA /> 
        </div>
    )
    } 
}

export default GPAContainer; 