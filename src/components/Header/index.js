import React from 'react';
import Link from 'gatsby-link';
import './index.css';

const Header = () => (
  <div className="header">
    <div className="header-content">
      <h1 className="header-title">
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          My Days Of Code
        </Link>
      </h1>
    </div>
    
  </div>
)

export default Header
