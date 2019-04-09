import React from 'react';
import {NavLink} from 'react-router-dom';
import './header.css';
const header = () => {
    return (
        <div className="topnav">
            <NavLink to="/home" exact= {true}  >Home</NavLink>
            <NavLink to="/users" >Users</NavLink>
            <NavLink to="/about">About</NavLink>
      </div>
    );
};

export default header;