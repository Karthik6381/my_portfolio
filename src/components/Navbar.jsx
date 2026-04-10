import React, { useState, useEffect } from "react";
import "./Navbar.css";

const navLinks = [
  { label: "Home",       href: "#home" },
  { label: "About",      href: "#about" },
  { label: "Skills",     href: "#skills" },
  { label: "Projects",   href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact",    href: "#contact" },
];

export default function Navbar({ darkMode, setDarkMode }) {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [active,    setActive]    = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLink = (href) => {
    setActive(href);
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        {/* Logo */}
        <a className="nav-logo" onClick={() => handleLink("#home")}>
          <span className="logo-bracket">&lt;</span>
          <span className="logo-name">HiDev</span>
          <span className="logo-bracket">/&gt;</span>
        </a>

        {/* Desktop Links */}
        <ul className="nav-links">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                className={`nav-link ${active === l.href ? "active" : ""}`}
                onClick={() => handleLink(l.href)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Controls */}
        <div className="nav-controls">
          {/* Dark/Light Toggle */}
          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          {/* Resume Download */}
          <a
            className="btn-primary nav-resume"
            href="C:\Users\acer\OneDrive\Desktop\website\portfolio\public\karthi.pdf"
            download="C:\Users\acer\OneDrive\Desktop\website\portfolio\public\karthi.pdf"
          >
            Resume ↓
          </a>

          {/* Hamburger */}
          <button
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {navLinks.map((l) => (
          <a
            key={l.href}
            className={`mobile-link ${active === l.href ? "active" : ""}`}
            onClick={() => handleLink(l.href)}
          >
            {l.label}
          </a>
        ))}
        <a className="btn-primary" href="#" download style={{ marginTop: 16 }}>
          Download Resume
        </a>
      </div>
    </nav>
  );
}
