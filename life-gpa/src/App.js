import React, { Component } from 'react';

import PrivateRoute from './components/PrivateRoute';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Dashboard from './components/Dashboard';
import Login from './components/Login';
import TaskList from './components/TaskList';
import SignupForm from './components/SignupForm';



class App extends Component {
  render() {
    console.log(PrivateRoute); 
    return (
      <Router>
      <div className="App"> 
      <Route exact path="/" component={Login} />
      <Route path="/login" component={Login} /> 
      <Route path="/signup" component={SignupForm} />  
      <PrivateRoute exact path="/protected" component={Dashboard} />
      </div>
      </Router>
    );
  }
}

export default App;
