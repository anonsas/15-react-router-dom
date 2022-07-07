import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="primary-nav">
      <ul>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/users">Users</NavLink>
      </ul>
    </nav>
  );
}

export default Navbar;
