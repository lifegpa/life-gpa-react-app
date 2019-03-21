import React from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'; 
import { signUp } from '../actions';
import styled from 'styled-components'; 

const SignUph1 = styled.h1`
color: lightcyan; 
text-align: center;
`; 

const SignUpWrapperDiv = styled.div`
background-color: black; 
background-size: cover;
padding: 10%;
width: 80%;
height: 100%;
margin: 10%;
`;

const SignUpForm = styled.form`
display: flex;
flex-direction: column;
`; 

const SignupH3 = styled.h3`
padding-top: 15px;
color: lightcyan;
`; 

const StyledButton = styled.button`
margin: 2%;
`;

const SignUpInput = styled.input`
margin: 2%;
`; 

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
        <SignUpWrapperDiv>
            <SignUph1>Sign up for LifeGPA!</SignUph1>
            <SignUpForm onSubmit={this.signUp}>
            <SignUpInput 
            type="text"
            name="name"
            placeholder="name"
            onChange={this.handleInput}
             /> 
            <SignUpInput 
            type="text"
            name="email"
            placeholder="email"
            onChange={this.handleInput}
             /> 
            <SignUpInput 
            type="password"
            name="password"
            placeholder="password" 
            onChange={this.handleInput} /> 
            <StyledButton className={`btn btn-outline-light`} type="submit">Start your journey</StyledButton>
            </SignUpForm> 
            <SignupH3>Already signed up?</SignupH3>
            <StyledButton className={`btn btn-outline-light`} ><Link className="login-link" to="/login">Log in</Link></StyledButton>
        </SignUpWrapperDiv>
        )
    }
}

const mapStateToProps = ({ error, signingUp }) => ({
    error, 
    signingUp
}); 



export default connect(mapStateToProps, { signUp })(SignupForm);  