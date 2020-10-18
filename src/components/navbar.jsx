import React, { Component } from 'react';

//stateless functional component

const NavBar = (props) => {
            return(  
            <nav className="navbar navbar-dark bg-dark">
                <span className="navbar-brand mb-0 h1">Navbar <span className="badge badge-pill badge-secondary">{props.totalCounters}</span></span>
            </nav>      
        );
}

export default NavBar;