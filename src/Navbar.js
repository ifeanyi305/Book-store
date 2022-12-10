import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const x = 'bookstore';
  return (
    <div>
      <nav className="navbar">
        <h1>{x}</h1>
        <ul>
          <li><Link to="/">Books</Link></li>
          <li><Link to="/categories">Categories</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
