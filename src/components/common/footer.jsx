import React from "react";
import { Link } from "react-router-dom";

import "./styles/footer.css";

const Footer = () => {
  const footerLink = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];
  const year = new Date().getFullYear;
  return (
    <React.Fragment>
      <div className="footer">
        <div className="footer-links">
          <ul className="footer-nav-link-list">
            {footerLink.map((link, index) => (
              <li className="footer-nav-link-item" key={index}>
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-credits">
          <div className="footer-credits-text">
            © {year} umar_d3v. All Rights Reserved.
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
