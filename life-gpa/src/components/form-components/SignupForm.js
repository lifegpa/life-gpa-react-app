import React from "react";


class SignupForm extends React.Component {
    constructor() {
        super();
        this.state={
            username: '',
            email: '',
            password: ''
        }
    }

    handleInput = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleLogin = e => {

    }

    render() {
        <div>
            <h1>Sign up now!</h1>
            <form>
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
            <button type="submit">Log in</button>
            </form>
        </div>
    }
}

export default SignupForm;