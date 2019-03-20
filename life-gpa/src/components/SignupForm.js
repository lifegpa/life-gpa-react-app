import React from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'; 
import { signUp } from '../actions';

class SignupForm extends React.Component {
    constructor() {
        super();
        this.state={
            name: '',
            email: '',
            password: ''
        }
    }

    handleInput = e => {
        this.setState({
            credentials: {
            ...this.state.credentials,
             [e.target.name]: e.target.value 
            }
        });
    }

    signUp = e => {
        e.preventDefault();
        this.props
        .signUp(this.state.credentials) 
        .then(() => this.props.history.push('/protected'))
        .catch(err => console.log(err));
    }

    render() {
        return (
        <div>
            <h1>Sign up for LifeGPA!</h1>
            <form onSubmit={this.signUp}>
            <input 
            type="text"
            name="name"
            placeholder="name"
            onChange={this.handleInput}
             /> 
            <input 
            type="text"
            name="email"
            placeholder="email"
            onChange={this.handleInput}
             /> 
            <input 
            type="password"
            name="password"
            placeholder="password" 
            onChange={this.handleInput} /> 
            <button type="submit">Start your journey</button>
            </form> 
            <h3>Already signed up?</h3>
            <Link to="/login">Log in</Link>
        </div>
        )
    }
}

const mapStateToProps = ({ error, signingUp }) => ({
    error, 
    signingUp
}); 



export default connect(mapStateToProps, { signUp })(SignupForm);  