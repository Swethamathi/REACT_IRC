import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">HOME</Link>
          </li>
          <li className="nav-item">
            <Link to="/Log" className="nav-link">LOGIN</Link>
          </li>
          <li className="nav-item">
            <Link to="/Register" className="nav-link">REGISTER</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
