import React from 'react'; 
import { NavLink } from 'react-router-dom';


const Nav = () => {
    return (
        <div>
            <nav>
               <NavLink exact to="/login">sign out</NavLink>
            </nav>
        </div>
    )
}

export default Nav; 