import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav>
      <NavLink exact to='/' style={{ padding: '0 5px' }}>
        Home
      </NavLink>
      <NavLink to='/issues' style={{ padding: '0 5px' }}>
        Issue Log
      </NavLink>
      <NavLink to='/login' style={{ padding: '0 5px' }}>
        Login
      </NavLink>
      <NavLink to='/register' style={{ padding: '0 5px' }}>
        Register
      </NavLink>
    </nav>
  );
}
