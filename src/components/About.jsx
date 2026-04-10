import React from "react";
import "./About.css";

const stats = [
  { label: "Projects Built",    value: "10+" },
  { label: "Technologies",      value: "15+" },
  { label: "Internship",        value: "1" },
  { label: "Graduating",        value: "2026" },
];

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">A little background on who I am</p>
        </div>

        <div className="about-grid">
          {/* Left — Card visual */}
          <div className="about-visual">
            <div className="about-card">
              <div className="about-card-inner">
                <div className="code-block">
                  <div className="code-dots">
                    <span /><span /><span />
                  </div>
                  <pre className="code-text">
{`const developer = {
  name: "karthik E",
  college: "Mailam Engineering",
  degree: "B.Tech IT",
  year: 2026,
  location: "Villupuram, TN",
  interests: [
    "Full Stack Dev",
    "AI Applications",
    "Open Source"
  ],
  goal: "Dream Fresher Job 🚀"
};`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Text */}
          <div className="about-text">
            <p>
              I'm a passionate <strong>B.Tech Information Technology</strong> student
              from <strong>Mailam Engineering College</strong>, graduating in 2026.
              I love crafting full-stack web applications and building AI-powered tools
              that solve real-world problems.
            </p>

            <p>
              My internship experience in <strong>Frontend Development</strong> and
              <strong> Java Full Stack</strong> has given me hands-on exposure to
              production workflows. I've built projects like an
              <strong> AI Resume Builder</strong> and <strong>AI Website Builder</strong>
              using the OpenAI API.
            </p>

            <p>
              I'm actively seeking fresher/entry-level roles in{" "}
              <strong>Chennai, Pondicherry, Villupuram, and Tindivanam</strong>.
              Let's build something amazing together!
            </p>

            {/* Stats */}
            <div className="about-stats">
              {stats.map((s) => (
                <div key={s.label} className="stat-card">
                  <span className="stat-value">{s.value}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>

            <a className="btn-primary" href="#contact">
              Let's Connect →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
