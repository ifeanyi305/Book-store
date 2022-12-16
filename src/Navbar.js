import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegUser } from 'react-icons/fa';

const Navbar = () => {
  const x = 'Bookstore CMS';
  return (
    <div>
      <nav className="navbar">
        <ul>
          <a href="#Bookstore" className="header-title">{x}</a>
          <li><Link className="anchor" to="/">Books</Link></li>
          <li><Link className="anchor" to="/categories">Categories</Link></li>
        </ul>
        <div className="userDiv">
          <FaRegUser className="user" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
