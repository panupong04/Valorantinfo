import React from 'react';
import './Navber.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Navber() {
  return (
    <div className="Nevber">
      <nav className="navbar">
        <div className="logo">
          <img src="/logo.png" alt="Logo" />
        </div>
        <ul className="nav-list">
          <li><a href="Home">Home</a></li>
          <li><a href="Agent">Agent</a></li>
          <li><a href="Weapon">Weapon</a></li>
          <li><a href="Map">Map</a></li>
        </ul>
      </nav>
      {/* Your page content goes here */}
    </div>
  );
}

export default Navber;
