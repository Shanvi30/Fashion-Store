import React, { useState } from "react";
import "./Navbar.css";
import logoImage from '../assets/Logo.png';

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header>
      <div className="top-strip">
        <p>Welcome to Our Store Hiscraves</p>
        <div className="call">
          <i className="fa fa-phone"></i> Call Us: 1234567890
        </div>
      </div>

      <nav className="navbar">
        <div className="left">
          <i
            className="fa fa-bars menu-icon"
            onClick={() => setMobileOpen(!mobileOpen)}
          ></i>
        </div>

        <div className="center">
          <img src={logoImage} alt="Logo" className="logo-image"/>
          
        </div>

        <div className="right desktop-menu">
          <i className="fa fa-search"></i>
          <i className="fa fa-heart-o"></i>
          <i className="fa fa-shopping-bag"></i>
          <i className="fa fa-user-o"></i>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
