import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  // click event
  const {click, setClick} = useState(false);
  //click function toggle click true/false
  const handleClick = () => setClick(!click);
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* logo/title */}
        <Link to="/"  className="navbar-logo">
          TRVL <i className="fab fa-typo3"></i>  
        </Link>
        {/* hamburger menu */}
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fass fa-times" : "fas fa-bars"} />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
