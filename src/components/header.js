import React from 'react';
import Link from 'gatsby-link';
import './header.scss';

const Header = () => (
  <div className="header">
    <div className="header-content">
      <h1 className="header-title">
        <Link
          to="/"
          style={{
            textDecoration: 'none',
          }}
        >
          Fyodor Loenko
        </Link>
      </h1>
      <h3 className="menu-home">
        <Link
          to="/"
          style={{
            textDecoration: 'none',
          }}
        >
          Home
        </Link>
      </h3>
      <h3 className="menu-about">
        <Link
          to="/about"
          style={{
            textDecoration: 'none',
          }}
        >
          About
        </Link>
      </h3>
      <h3 className="menu-code">
        <Link
          to="/code"
          style={{
            textDecoration: 'none',
          }}
        >
          Code
        </Link>
      </h3>
      <h3 className="menu-connect">
        <Link
          to="/connect"
          style={{
            textDecoration: 'none',
          }}
        >
          Connect
        </Link>
      </h3>
    </div>
    
  </div>
);

export default Header
