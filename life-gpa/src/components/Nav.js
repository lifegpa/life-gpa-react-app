import React from 'react'; 
import { NavLink } from 'react-router-dom';
import logo from './Logo-Component/logo.png'; 


const Nav = () => {
    return (
        <div>
            <nav>
                <img className="logo-img" src={logo} alt="lifeGPA" />
              <button className={`btn btn-outline-light`}><NavLink exact to="/login">sign out</NavLink></button>
            </nav>
        </div>
    )
}

export default Nav; 