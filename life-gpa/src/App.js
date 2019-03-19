import React, { Component } from 'react';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Route path="/login" component={Login} />
      <PrivateRoute exact path="/protected" component={Dashboard} />
      </div>
      </Router>
    );
  }
}

export default App;
