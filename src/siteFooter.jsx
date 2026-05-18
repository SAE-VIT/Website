// Footer.jsx

import "/src/index.css";
import logo from "/src/assets/vitlogo.png";

import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

function siteFooter() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column footer-brand">
          <img
            src={logo}
            alt="SAE-VIT Logo"
            className="footer-logo"
          />

          <p className="footer-tagline">
            Vellore Institute of Technology, Vellore Campus
          </p>
        </div>

        <div className="footer-column">
          <h3>Explore</h3>

          <a href="/">Home</a>
          <a href="/events">Events</a>
          <a href="/blogs">Blogs</a>
          <a href="/about">About</a>

        </div>

        <div className="footer-column">
          <h3>Domains</h3>

          <p>Design & Marketing</p>
          <p>Editorial</p>
          <p>Finance</p>
          <p>Events</p>
          <p>Outreach</p>
        </div>

        <div className="footer-column">
          <h3>Contact</h3>

          <a href="mailto:saevit@vit.ac.in"> saevit@vit.ac.in </a>
          <p>VIT Vellore</p>
          <p>Thiruvallam Road, Katpadi </p>
          <p>Tamil Nadu - 632014</p>

        </div>
      </div>

      <div className="footer-line"></div>

      <div className="footer-bottom">
        <div className="footer-socials">
          <a href="https://instagram.com" target="_blank"> <FaInstagram /> </a>
          <a href="https://linkedin.com" target="_blank"> <FaLinkedin /> </a>
          <a href="https://youtube.com" target="_blank"> <FaGithub /> </a>
        </div>

        <p>
          Made with ❤️ by SAE-VIT 
        </p>
      </div>
    </footer>
  );
}

export default siteFooter;