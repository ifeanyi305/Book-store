// import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
      <nav className="navbar">
        <h1>Book store</h1>
        <ul>
          <li><Link to="/">Books</Link></li>
          <li><Link to="/categories">Categories</Link></li>
        </ul>
      </nav>
};

export default Navbar;