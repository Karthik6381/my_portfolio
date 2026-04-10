import React, { useState } from "react";
import "./Projects.css";

const projects = [
  {
    title: "AI Resume Builder",
    category: "AI",
    description:
      "A full-stack application that uses the OpenAI API to intelligently generate professional resumes based on user input. Features multiple templates, PDF export, and real-time preview.",
    tech: ["React.js", "Node.js", "OpenAI API", "MongoDB", "Tailwind CSS"],
    github: "https://github.com",
    demo: "#",
    icon: "📄",
    featured: true,
  },
  {
    title: "AI Website Builder",
    category: "AI",
    description:
      "An AI-powered tool where users describe their website and the app generates clean HTML/CSS code using the OpenAI API. Includes live preview and code download.",
    tech: ["React.js", "Express.js", "OpenAI API", "MySQL"],
    github: "https://github.com",
    demo: "#",
    icon: "🌐",
    featured: true,
  },
  {
    title: "Job Tracker Dashboard",
    category: "Full Stack",
    description:
      "A LinkedIn job scraping tool integrated with Apify to automatically track fresher jobs in target cities. Exports data to Excel with filters by location and company.",
    tech: ["Node.js", "Apify", "Excel (openpyxl)", "React.js"],
    github: "https://github.com",
    demo: "#",
    icon: "🎯",
    featured: false,
  },
  {
    title: "E-Commerce Platform",
    category: "Full Stack",
    description:
      "A complete e-commerce web application with product listings, cart, user auth, and payment integration. Built using Spring Boot REST API and React frontend.",
    tech: ["React.js", "Spring Boot", "MySQL", "Docker"],
    github: "https://github.com",
    demo: "#",
    icon: "🛒",
    featured: false,
  },
  {
    title: "Portfolio Website",
    category: "Frontend",
    description:
      "A modern, responsive personal portfolio website with dark/light theme, animations, and sections for projects, skills, and contact. (This site!)",
    tech: ["React.js", "CSS3", "Vite"],
    github: "https://github.com",
    demo: "#",
    icon: "💼",
    featured: false,
  },
  {
    title: "CI/CD Pipeline",
    category: "DevOps",
    description:
      "Automated CI/CD pipeline using GitHub Actions and Docker for a Node.js application, featuring build, test, and deploy stages.",
    tech: ["GitHub Actions", "Docker", "Node.js"],
    github: "https://github.com",
    demo: "#",
    icon: "⚙️",
    featured: false,
  },
];

const categories = ["All", "AI", "Full Stack", "Frontend", "DevOps"];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">Things I've built with passion</p>
        </div>

        {/* Filter Tabs */}
        <div className="project-filters">
          {categories.map((c) => (
            <button
              key={c}
              className={`filter-btn ${filter === c ? "active" : ""}`}
              onClick={() => setFilter(c)}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="projects-grid">
          {filtered.map((p) => (
            <div
              className={`project-card ${p.featured ? "featured" : ""}`}
              key={p.title}
            >
              {p.featured && <span className="featured-badge">⭐ Featured</span>}

              <div className="project-icon">{p.icon}</div>
              <h3 className="project-title">{p.title}</h3>
              <span className="project-category">{p.category}</span>
              <p className="project-desc">{p.description}</p>

              <div className="project-tech">
                {p.tech.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>

              <div className="project-links">
                <a href={p.github} target="_blank" rel="noreferrer" className="btn-outline proj-btn">
                  GitHub
                </a>
                <a href={p.demo} target="_blank" rel="noreferrer" className="btn-primary proj-btn">
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}