import React, { Component } from 'react';
import Dashboard from './components/Dashboard';
import {BrowserRouter as Router} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
       <h1>Life GPA</h1>
       <Dashboard /> 
      </div>
      </Router>
    );
  }
}

export default App;
