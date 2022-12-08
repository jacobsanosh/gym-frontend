import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer__contaier">
      <footer className="footer">
        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
        </div>

        <ul className="menu">
          <li className="menu__item">
            <a className="menu__link" href="/">
              Home
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="/">
              About us
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="/">
              Contact us
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
