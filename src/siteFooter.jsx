import React from "react";
import logo from '/src/assets/vitlogo.jpg';
function SiteFooter() {
  return (
    <>
      <footer className="site-footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src={logo} alt="VIT Logo" className="footer-logo" />
            <span className="footer-span">© 2026 SAE-VIT. All rights reserved.</span>
          </div>

          <div>
            <h3>Quick links</h3>
            <ul className="footer-links">
              <li> <a href="https://www.instagram.com/sae_vit/" target="_blank" rel="noopener noreferrer">
                Instagram
              </a></li>
              <li> <a href="https://www.youtube.com/@SAE_VIT" target="_blank" rel="noopener noreferrer">
                Youtube
              </a></li>
              <li> <a href="https://www.linkedin.com/company/society-of-automotive-engineers-vit-vellore-/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
                Linkedin
              </a></li>
            </ul>
          </div>

          <div>
            <h3>Contact us</h3>
            <ul className="footer-contact">
              <li>VIT Vellore, Tamil Nadu</li>
              <li>+91 90904 55545</li>
              <li>📧sae@vit.ac.in</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            Made with ❤️ by SAE-VIT
          </div>
        </div>
      </footer>
    </>
  );
}

export default SiteFooter;
