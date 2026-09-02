import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <div className="fh-nav">
      <div className="fh-nav__inner">
        <Link to="/" className="fh-nav__logo" onClick={closeMenu}>
          Ayush Dubey<span>.</span>
        </Link>

        <nav className={`fh-nav__links ${mobileMenuOpen ? "is-open" : ""}`}>
          <Link
            to="/consultation"
            className={`fh-nav__link ${isActive("/consultation") ? "is-active" : ""}`}
            onClick={closeMenu}
          >
            Work with me
          </Link>
          <Link
            to="/newsletter"
            className={`fh-nav__link ${isActive("/newsletter") ? "is-active" : ""}`}
            onClick={closeMenu}
          >
            Newsletters
          </Link>
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <a
            href="https://wa.me/917307726842"
            target="_blank"
            rel="noopener noreferrer"
            className="fh-btn"
          >
            Let's Connect
          </a>
          <button
            type="button"
            className="fh-nav__menu-btn"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </div>
  );
}
