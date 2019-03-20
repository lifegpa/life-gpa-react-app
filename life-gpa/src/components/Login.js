import React from 'react'; 
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import { login } from '../actions';


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
        <div>
            <h1>Welcome Back to LifeGPA!</h1>
            <form onSubmit={this.login}>
            {/* <input 
            type="text"
            name="name"
            value={this.state.credentials.name}
            placeholder="name"
            onChange={this.handleInput}
             />  */}
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
            <h3>Not signed up yet?</h3>
            <Link to="/signup">Sign up now</Link>
        </div>
        )
    }
}

const mapStateToProps = ({ error, loggingIn }) => ({
    error, 
    loggingIn
}); 



export default connect(mapStateToProps, { login })(Login);  