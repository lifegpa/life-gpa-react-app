import React from 'react'; 
import { connect } from 'react-redux';
import { getGPA } from '../actions'; 
class GPAContainer extends React.Component {
    constructor() {
        super(); 
        this.state = {
            GPA: {
                weekly: 0,
                daily: 0,
                monthly: 0,
                allTime: 0
            }
        }
    }

    componentDidMount() {
        this.props.getGPA();
    }


    render() {
    return (
        <div>
         {this.props.daily}
         {this.props.weekly}
         {this.props.monthly}
         {this.props.allTime}
        </div>
    )
    }
} 


const mapStateToProps = ({ gpa }) => ({
    gpa
}); 

export default connect(mapStateToProps, { getGPA })(GPAContainer);  