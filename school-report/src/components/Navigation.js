import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav>
      <NavLink
        exact
        to='/'
        style={{ padding: '0 5px', textDecoration: 'none', color: 'black' }}
      >
        Home
      </NavLink>
      <NavLink
        to='/issues'
        style={{ padding: '0 5px', textDecoration: 'none', color: 'black' }}
      >
        Add Issue
      </NavLink>
      <NavLink
        to='/login'
        style={{ padding: '0 5px', textDecoration: 'none', color: 'black' }}
      >
        Login
      </NavLink>
      <NavLink
        to='/register'
        style={{ padding: '0 5px', textDecoration: 'none', color: 'black' }}
      >
        Register
      </NavLink>
    </nav>
  );
}
