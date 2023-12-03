import React from "react";
import logo from "./../../assets/Logo.webp";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <a href="#" className="logo">
          <img src={logo} alt="ManageWise Logo" />
        </a>
        <ul className="navbar-list">
          <li className="navbar-item">
            <a href="#" className="navbar-link">
              Features
            </a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link">
              FAQ
            </a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link">
              Pricing
            </a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link">
              Testimonials
            </a>
          </li>
          <li className="navbar-item">
            <a href="#" className="buy-template-btn">
              Buy Template
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

