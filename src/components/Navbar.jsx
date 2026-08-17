import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div
      data-animation="default"
      className="navbar2_component w-nav"
      data-easing2="ease"
      fs-scrolldisable-element="smart-nav"
      data-easing="ease"
      data-collapse="medium"
      data-w-id="89d96280-8925-9485-da66-e88e821f2b35"
      role="banner"
      data-duration="400"
    >
      <div className="navbar2_container">
        <Link
          to="/"
          className={`navbar2_logo-link w-nav-brand ${isActive("/") ? "w--current" : ""}`}
        >
          <strong style={{ fontSize: '28px', color: '#1a1a1a', fontWeight: '500', whiteSpace: 'nowrap' }}>Ayush Dubey</strong>
        </Link>
        <style>{`
          .navbar2_menu.w--open {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: #ffffff;
            padding: 1rem;
            box-shadow: 0 10px 15px rgba(0,0,0,0.05);
            display: block !important;
          }
          .navbar2_menu.w--open .navbar2_link {
            display: block;
            padding: 1rem;
            color: #1a1a1a !important;
            text-align: center;
            border-bottom: 1px solid #eee;
            text-decoration: none;
          }
          .navbar2_menu.w--open .navbar2_link:last-child {
            border-bottom: none;
          }
        `}</style>
        <nav
          role="navigation"
          id="w-node-_89d96280-8925-9485-da66-e88e821f2b39-821f2b35"
          className={`navbar2_menu is-page-height-tablet w-nav-menu ${mobileMenuOpen ? "w--open" : ""
            }`}
        >
          <Link
            to="/consultation"
            className={`navbar2_link w-nav-link ${isActive("/consultation") ? "w--current" : ""
              }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Work With Me
          </Link>
          <Link
            to="/newsletter"
            className={`navbar2_link w-nav-link ${isActive("/newsletter") ? "w--current" : ""
              }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Newsletters
          </Link>
        </nav>
        <div
          id="w-node-_89d96280-8925-9485-da66-e88e821f2b4c-821f2b35"
          className="navbar2_button-wrapper"
        >
          <a
            href="mailto:contact@60daypublications.com"
            className="button is-nav-button w-button"
          >
            Let's Connect
          </a>
          <div
            className={`navbar2_menu-button w-nav-button ${mobileMenuOpen ? "w--open" : ""
              }`}
            onClick={toggleMobileMenu}
            role="button"
            tabIndex={0}
          >
            <div className="menu-icon2">
              <div className="menu-icon2_line-top"></div>
              <div className="menu-icon2_line-middle">
                <div className="menu-icon_line-middle-inner"></div>
              </div>
              <div className="menu-icon2_line-bottom"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
