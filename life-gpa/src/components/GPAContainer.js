import React from 'react'; 
import { connect } from 'react-redux';
import { getGPA } from '../actions'; 
class GPAContainer extends React.Component {
    constructor() {
        super(); 
        this.state = {
                weekly: 0,
                daily: 0,
                monthly: 0,
                allTime: 0
        }
    }

    componentDidMount() {
        this.props.getGPA();
        console.log("gpa props", this.props.getGPA());
    }


    render() {
        console.log("daily props",this.props.daily);
    return (
        <div className="gpa">
        <h1>LifeGPA</h1>
         <p>Daily Grade: {this.props.daily}%</p>
         <p>Weekly Grade: {this.props.weekly}%</p>
         <p>Monthly Grade: {this.props.monthly}%</p>
         <p>Total GPA: {this.props.allTime}%</p>
        </div>
    )
    }
} 


const mapStateToProps = ({ daily, weekly, monthly, allTime }) => ({
    daily,
    weekly,
    monthly,
    allTime
}); 

export default connect(mapStateToProps, { getGPA })(GPAContainer);  