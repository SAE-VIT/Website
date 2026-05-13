import React from "react";
import logo from "./assets/sae-logo.png";

const quickLinks = ["Home", "About", "Events", "Blog"];

function SiteFooter() {
  return (
    <>
      <section className="newsletter-panel">
        <div className="newsletter-inner">
          <h2>Ready to Begin Your Journey?</h2>
          <p>
            Join our community of innovators, builders, and mobility enthusiasts.
          </p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" aria-label="Email address" />
            <button type="button">Become a member</button>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-brand-top">
              <img src={logo} alt="SAE logo" />
              <div>
                <strong>SAE VIT</strong>
                <span>Student Automotive Engineers</span>
              </div>
            </div>
            <p>
              Empowering the next generation of automotive and mobility leaders
              through innovation, collaboration, and hands-on learning.
            </p>
          </div>

          <div>
            <h3>Quick links</h3>
            <ul className="footer-links">
              {quickLinks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Contact us</h3>
            <ul className="footer-contact">
              <li>VIT Vellore, Tamil Nadu</li>
              <li>+91 00000 00000</li>
              <li>sae@vit.ac.in</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 SAE VIT. All rights reserved.</span>
          <div>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Cookie Policy</span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default SiteFooter;
