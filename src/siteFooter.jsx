import "/src/index.css";
import {
  FaEnvelope,
  FaExternalLinkAlt,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMediumM,
} from "react-icons/fa";

function SiteFooter() {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Events", href: "/events" },
    { label: "Blogs", href: "/blogs" },
    { label: "Team", href: "/about" },
  ];

  return (
    <footer className="site-footer">
      <div className="site-footer__content">
        <div className="site-footer__identity">
          <h2>Society of Automotive Engineers</h2>
          <p>Driven by Innovation. Fueled by Success.</p>

          <div className="site-footer__socials" aria-label="SAE-VIT social links">
            <a href="mailto:saevit@vit.ac.in" aria-label="Email SAE-VIT"><FaEnvelope /><span>saevit@vit.ac.in</span></a>
            <a href="https://github.com/SAE-VIT" target="_blank" rel="noopener noreferrer" aria-label="SAE-VIT on GitHub"><FaGithub /><span>SAE-VIT</span></a>
            <a href="https://instagram.com/sae_vit" target="_blank" rel="noopener noreferrer" aria-label="SAE-VIT on Instagram"><FaInstagram /><span>sae_vit</span></a>
            <a href="/blogs" aria-label="Read the SAE-VIT journal"><FaMediumM /><span>SAE-VIT Journal</span></a>
            <a href="https://www.linkedin.com/company/society-of-automotive-engineers-vit-vellore-/" target="_blank" rel="noopener noreferrer" aria-label="SAE-VIT on LinkedIn"><FaLinkedin /><span>SAE-VIT</span></a>
          </div>
        </div>

        <nav className="site-footer__nav" aria-label="Footer navigation">
          {quickLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}<FaExternalLinkAlt aria-hidden="true" />
            </a>
          ))}
        </nav>
      </div>

      <p className="site-footer__copyright">© {new Date().getFullYear()} SAE-VIT. All rights reserved.</p>
    </footer>
  );
}

export default SiteFooter;
