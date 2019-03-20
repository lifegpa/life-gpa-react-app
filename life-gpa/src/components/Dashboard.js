import React from 'react'; 
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import Loader from 'react-loader-spinner';
import { getData } from '../actions'; 

import TaskList from './TaskList';
import GPAContainer from './GPAContainer'; 
import Nav from './Nav';



class Dashboard extends React.Component {
    
    componentDidMount() {
       getData();
    }

    render() {
        if (this.props.gettingData) 
        return <Loader type="Audio" color="#C62727" height={100} width={100} />
        else return (
        <div>
            <Nav /> 
            <h1>Hi [name of user]!</h1> 
            <GPAContainer />  
            <TaskList /> 
        </div>
        )
    }
}


const mapStateToProps = ({ data }) => ({
    data
})

export default withRouter(connect(mapStateToProps, {getData})(Dashboard));