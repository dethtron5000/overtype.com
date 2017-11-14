import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = () => (
  <nav className="nav">
    <NavLink exact to="/">home</NavLink>
    <NavLink exact activeClassName="selected" to="/bio">bio</NavLink>
    <NavLink exact activeClassName="selected" to="/speaking">speaking</NavLink>
  </nav>
);

export default Nav;
