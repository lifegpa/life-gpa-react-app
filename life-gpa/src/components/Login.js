import React from 'react'; 
import { connect } from 'react-redux';
import { login } from '../actions';


class Login extends React.Component {
    state= { 
            credentials: {
            name: '',
            email: '',
            password: ''
            }
        }

    handleInput = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    login = e => {
        e.preventDefault();
        this.props
        .login(this.state.credentials) 
        .then(() => this.props.history.push('/protected'))
        .catch(err => console.log(err));
    }

    render() { 
        return (
        <div>
            <h1>Welcome Back!</h1>
            <form>
            <input 
            type="text"
            name="name"
            value={this.state.credentials.name}
            placeholder="name"
            onChange={this.handleInput}
             /> 
            <input 
            type="text"
            name="email"
            value={this.state.credentials.email}
            placeholder="email"
            onChange={this.handleInput}
             /> 
            <input 
            type="password"
            name="password"
            value={this.state.credentials.password}
            placeholder="password" 
            onChange={this.handleInput} /> 
            <button type="submit">Log in</button>
            </form>
        </div>
        )
    }
}

const mapStateToProps = ({ error, loggingIn }) => ({
    error, 
    loggingIn
}); 



export default connect(mapStateToProps, { login })(Login);  