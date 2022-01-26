import React, { Component } from 'react';
//stateless Funtional components

const Navbar=({totalCounter})=>{
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                NavBar <span className="badge rounded-pill bg-secondary">{totalCounter}</span>
            </a>
        </nav>
    );
}
export default Navbar;
