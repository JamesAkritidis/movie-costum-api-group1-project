import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = () => {
    return (
        <div className= "navbar">
            {/* navbar logo and names for the links */}
            <div className='logo'><h1>Movies to watch</h1></div>

            
            <h3><NavLink className="navigation-link" to=''>Home</NavLink></h3>
            <h3><NavLink className="navigation-link" to='/singleca/ahmad'>Ahmad</NavLink></h3>
            <h3><NavLink className="navigation-link" to=''>Jans</NavLink></h3>
            <h3><NavLink className="navigation-link" to=''>Dimitris</NavLink></h3>
            <h3><NavLink className="navigation-link" to=''>All Movies</NavLink></h3>
        </div>
    )
}

export default NavBar
