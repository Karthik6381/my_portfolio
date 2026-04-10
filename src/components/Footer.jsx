import React from "react";
import "./Footer.css";

const quickLinks = [
  { label: "Home",       href: "#home" },
  { label: "About",      href: "#about" },
  { label: "Skills",     href: "#skills" },
  { label: "Projects",   href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact",    href: "#contact" },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Karthik6381",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.34-.01 2.41-.01 2.74 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/web-karthi",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:karthike6381@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "https://twitter.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="footer">
      {/* Top wave */}
      <div className="footer-wave">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path
            d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
            fill="var(--bg-secondary)"
          />
        </svg>
      </div>

      <div className="footer-body">
        <div className="container">
          <div className="footer-grid">
            {/* Brand */}
            <div className="footer-brand">
              <div className="footer-logo">
                <span className="logo-bracket">&lt;</span>
                <span className="logo-name">HiDev</span>
                <span className="logo-bracket">/&gt;</span>
              </div>
              <p className="footer-tagline">
                B.Tech IT student passionate about full-stack development
                and AI-powered applications. Open to exciting fresher opportunities!
              </p>
              <div className="footer-socials">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="footer-social"
                    target={s.href.startsWith("http") ? "_blank" : "_self"}
                    rel="noreferrer"
                    aria-label={s.label}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-col">
              <h4 className="footer-col-title">Quick Links</h4>
              <ul className="footer-links">
                {quickLinks.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={(e) => {
                        e.preventDefault();
                        document.querySelector(l.href)?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      <span className="link-arrow">›</span> {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="footer-col">
              <h4 className="footer-col-title">Tech Stack</h4>
              <div className="footer-tags">
                {["React.js","Node.js","Java","Spring Boot","MySQL","MongoDB","Docker","OpenAI API","Git","Tailwind CSS"].map((t) => (
                  <span key={t} className="footer-tag">{t}</span>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="footer-col">
              <h4 className="footer-col-title">Open To Work</h4>
              <ul className="location-list">
                {["Chennai","Pondicherry","Villupuram","Tindivanam","Remote"].map((city) => (
                  <li key={city}>
                    <span className="loc-dot" />
                    {city}
                  </li>
                ))}
              </ul>
              <div className="footer-avail">
                <span className="avail-dot" />
                Available Now
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="footer-bottom">
            <p className="footer-copy">
              © {new Date().getFullYear()} <strong>karthik</strong>. Built with React.js & ❤️
            </p>
            <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
              ↑ Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}