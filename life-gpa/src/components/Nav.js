import React from 'react'; 
import { NavLink } from 'react-router-dom';


const Nav = () => {
    return (
        <div>
            <nav>
              <button className={`btn btn-outline-light`}><NavLink exact to="/login">sign out</NavLink></button>
            </nav>
        </div>
    )
}

export default Nav; 