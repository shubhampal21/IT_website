import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  

  return (
    <nav className="navbar">
      {/* Hamburger Icon for Mobile */}
      <div className="hamburger" onClick={toggleMenu} aria-label="Toggle Menu">
        <div className={`bar ${isMenuOpen ? 'bar1' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'bar2' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'bar3' : ''}`}></div>
      </div>

      {/* Navbar Links */}
      <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/notice">Notice</Link></li>
        <li><Link to="/Time table">Time-Table</Link></li>


        <li className="dropdown">
          <button className="dropbtn">Academic</button>
          <div className="dropdown-content">
            <Link to="/academic/bsc-it">B.Sc. IT</Link>
            <Link to="/academic/msc-it">M.Sc. IT</Link>
          </div>
        </li>

        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/mentorPage">Mentor-menti</Link></li>
        <li><Link to="/alumniPage">Alumni</Link></li>


      </ul>

      

    </nav>
  );
}

export default Navbar;
