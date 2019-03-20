import React from 'react'; 
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import Loader from 'react-loader-spinner';
import { getData } from '../actions'; 

import TaskList from './TaskList';
import GPAContainer from './GPAContainer'; 
import Nav from './Nav';



class Dashboard extends React.Component {
    constructor() {
        super();
    }
    
    componentDidMount() {
        this.props.getData(); 
        console.log('component did mount props', this.props);
    }

    render() {
        if (this.props.gettingData) 
        return <Loader type="Audio" color="#C62727" height={100} width={100} />
        else return (
        <div>
            <Nav /> 
            <h1>Hi {this.props.user}!</h1> 
            <GPAContainer />  
            <TaskList  /> 
        </div>
        )
    }
}


const mapStateToProps = ({ data }) => ({
    data
})

export default withRouter(connect(mapStateToProps, {getData})(Dashboard));