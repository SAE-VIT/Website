import React from "react";
import "./index.css";
import { NavLink } from "react-router-dom";
import logo from "./assets/sae-logo.png";
import GooeyNav from '/src/components/GooeyNav'

const navItems = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/blogs", label: "Blog" },
  { href: "/about", label: "About" },
];

function Navbar() {
  return (
      <nav className="navbar">
        <NavLink to="/" className="brand-link">
          <img className="brand-logo" src={logo} alt="SAE logo" />
        </NavLink>
        <div style={{ height: '50px'}}>
          <GooeyNav
            items={navItems}
            particleCount={15}
            particleDistances={[28, 6]}
            particleR={42}
            initialActiveIndex={0}
            animationTime={600}
            timeVariance={300}
            colors={[1, 2, 3, 4, 1, 2, 3, 4]}
          />
        </div>
        {/* <a target="_blank" href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRtsWDLpjvgVLZFCWHWDHMVSJlkHPZJccRvBZQQdsrWpWDJvbZhLKHqQZJFxLjxPdqVbNTG" className='nav-ele'>Contact us</a> */}
      </nav>
  );
}

export default Navbar;
