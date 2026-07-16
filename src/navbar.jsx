import React from "react";
import "./index.css";
import { NavLink, useLocation } from "react-router-dom";
import logo from "./assets/sae-logo.png";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/blogs", label: "Blog" },
  { href: "/about", label: "About" },
];

function Navbar() {
  const { pathname } = useLocation();

  return (
      <nav className="navbar">
        <NavLink to="/" className="brand-link">
          <img className="brand-logo" src={logo} alt="SAE logo" />
        </NavLink>
        <div className="gooey-nav-container">
          <nav aria-label="Primary navigation">
            <ul>
              {navItems.map((item) => (
                <li key={item.href} className={pathname === item.href ? "active" : ""}>
                  <NavLink to={item.href}>{item.label}</NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        {/* <a target="_blank" href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRtsWDLpjvgVLZFCWHWDHMVSJlkHPZJccRvBZQQdsrWpWDJvbZhLKHqQZJFxLjxPdqVbNTG" className='nav-ele'>Contact us</a> */}
      </nav>
  );
}

export default Navbar;
