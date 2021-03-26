import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Button } from './Button';
import "../style/Navbar.css";
function Navbar() {
  // click event
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  //click function toggle click true/false
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  //function that displays button on screensize?
  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  //check on load
  useEffect(() => {
    showButton();
  }, []);
  //checks to show button on resize;
  window.addEventListener("resize", showButton);
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* logo/title */}
        <Link to="/"  className="navbar-logo" onClick={closeMobileMenu}>
          TRVL <i className="fab fa-typo3"></i>  
        </Link>
        {/* hamburger menu */}
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/stuff" className="nav-links" onClick={closeMobileMenu}>
              Stuff
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/mostuff" className="nav-links" onClick={closeMobileMenu}>
              Mo' Stuff
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
              Sign Up
            </Link>
          </li>
        </ul>
        {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
      </div>
    </nav>
  )
}

export default Navbar
