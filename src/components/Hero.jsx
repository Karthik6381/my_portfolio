import React, { useEffect, useRef } from "react";
import "./Hero.css";

const ROLES = [
  "Full Stack Developer",
  "React.js Developer",
  "Java Spring Boot Dev",
  "AI Application Builder",
];

export default function Hero() {
  const roleRef = useRef(null);
  const indexRef = useRef(0);
  const charRef = useRef(0);
  const deletingRef = useRef(false);

  useEffect(() => {
    let timeout;

    const type = () => {
      const el = roleRef.current;
      if (!el) return;

      const current = ROLES[indexRef.current];
      const isDeleting = deletingRef.current;

      if (!isDeleting) {
        el.textContent = current.slice(0, charRef.current + 1);
        charRef.current++;
        if (charRef.current === current.length) {
          deletingRef.current = true;
          timeout = setTimeout(type, 1500);
          return;
        }
      } else {
        el.textContent = current.slice(0, charRef.current - 1);
        charRef.current--;
        if (charRef.current === 0) {
          deletingRef.current = false;
          indexRef.current = (indexRef.current + 1) % ROLES.length;
        }
      }

      timeout = setTimeout(type, isDeleting ? 60 : 100);
    };

    timeout = setTimeout(type, 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="home" className="hero">
      {/* Background Orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      <div className="container hero-container">
        {/* Left Content */}
        <div className="hero-content">
          <span className="hero-greeting">👋 Hello, I'm</span>

          <h1 className="hero-name">
            <span className="name-first">KARTHIK</span>
            <span className="name-last">  E</span>
          </h1>

          <div className="hero-role-wrap">
            <span className="role-prefix">I'm a </span>
            <span ref={roleRef} className="hero-role" />
            <span className="cursor">|</span>
          </div>

          <p className="hero-bio">
            B.Tech IT student passionate about building scalable web applications
            and AI-powered tools. From Villupuram, seeking exciting fresher opportunities
            in full-stack development.
          </p>

          <div className="hero-actions">
            <a className="btn-primary" href="#projects">
              View Projects →
            </a>
            <a className="btn-outline" href="#contact">
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="hero-socials">
            <a href="https://github.com/Karthik6381" target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.34-.01 2.41-.01 2.74 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/web-karthi" target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
            </a>
            <a href="mailto:karthikweb123@gmail.com" className="social-link" aria-label="Email">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>
            </a>
          </div>
        </div>

        {/* Right — Avatar Card */}
        <div className="hero-avatar-wrap">
          <div className="avatar-card">
            <div className="avatar-glow" />
            <div className="avatar-image">
              <img
    src="/karthi-profile-image.jpeg"
    alt="Profile"
    style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }}
  />            
                <circle cx="60" cy="60" r="60" fill="url(#grad)" opacity="0.15"/>
                <circle cx="60" cy="42" r="22" fill="url(#grad)"/>
                <ellipse cx="60" cy="95" rx="35" ry="22" fill="url(#grad)"/>
                <defs>
                  <linearGradient id="grad" x1="0" y1="0" x2="120" y2="120">
                    <stop offset="0%" stopColor="#7c5cbf"/>
                    <stop offset="100%" stopColor="#5c9abf"/>
                  </linearGradient>
                </defs>
            
            </div>
            <div className="avatar-badge badge-1">⚛️ React</div>
            <div className="avatar-badge badge-2">🌿 Node.js</div>
            <div className="avatar-badge badge-3">🤖 AI Dev</div>
            <div className="avatar-badge badge-4">☕ Java</div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="scroll-hint">
        <span>Scroll</span>
        <div className="scroll-dot" />
      </div>
    </section>
  );
}
