import React from 'react'; 
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import { login } from '../actions';
import styled from 'styled-components'; 


const StyledInput = styled.input`
margin: 2%;
`; 

const LoginForm = styled.form`
display: flex;
flex-direction: column;
`;

const LoginH1 = styled.h1`
color: lightcyan; 
text-align: center;
`;

const LoginWrapperDiv = styled.div`
background-color: black; 
background-size: cover;
padding: 10%;
width: 80%;
height: 100%;
margin: 10%;
`; 

const LoginH3 = styled.h3`
padding-top: 15px;
color: lightcyan;
`;

const StyledButton = styled.button`
margin: 2%;
`;

class Login extends React.Component {
    state= { 
            credentials: {
            // name: '',
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

    login = e => {
        e.preventDefault();
        this.props
        .login(this.state.credentials) 
        .then(() => this.props.history.push('/protected'))
        .catch(err => console.log(err));
    }

    render() { 
        if (this.props.signingIn) 
        return <Loader type="Audio" color="#C62727" height={100} width={100} />
        else
        return (
        <LoginWrapperDiv>
            <LoginH1>Welcome Back to LifeGPA!</LoginH1>
            <LoginForm onSubmit={this.login}>
            {/* <input 
            type="text"
            name="name"
            value={this.state.credentials.name}
            placeholder="name"
            onChange={this.handleInput}
             />  */}
            <StyledInput 
            type="text"
            name="email"
            value={this.state.credentials.email}
            placeholder="email"
            onChange={this.handleInput}
             /> 
            <StyledInput 
            type="password"
            name="password"
            value={this.state.credentials.password}
            placeholder="password" 
            onChange={this.handleInput} /> 
            <StyledButton className={`btn btn-outline-light`} type="submit">Log in</StyledButton>
            </LoginForm> 
            <LoginH3>Not signed up yet?</LoginH3>
            <StyledButton className={`btn btn-outline-light`}><Link to="/signup">Sign up now</Link></StyledButton>
        </LoginWrapperDiv>
        )
    }
}

const mapStateToProps = ({ error, loggingIn }) => ({
    error, 
    loggingIn
}); 



export default connect(mapStateToProps, { login })(Login);  