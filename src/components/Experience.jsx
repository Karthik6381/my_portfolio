import React from "react";
import "./Experience.css";

const experiences = [
  {
    role: "Frontend Development Intern",
    company: "Cognifyz",
    duration: "July 2025 – September 2025",
    location: "Chennai, Tamil Nadu",
    type: "Internship",
    description: [
      "Developed responsive UI components using React.js and Tailwind CSS.",
      "Collaborated with backend team to integrate REST APIs.",
      "Improved page load performance by 30% through code optimization.",
      "Participated in daily standups, sprint planning, and code reviews.",
    ],
    tech: ["React.js", "Tailwind CSS", "REST APIs", "Git"],
  },
  {
    role: "Java Full Stack Intern",
    company: "VEI Technologies",
    duration: "Jan 2024 – Mar 2024",
    location: "Tindivanam, Tamil Nadu",
    type: "Internship",
    description: [
      "Built RESTful APIs using Spring Boot and MySQL database.",
      "Integrated frontend React components with Java backend services.",
      "Implemented user authentication with JWT tokens.",
      "Wrote unit tests and performed API testing with Postman.",
    ],
    tech: ["Java", "Spring Boot", "MySQL", "React.js", "JWT"],
  },
];

const education = [
  {
    degree: "B.Tech – Information Technology",
    institution: "Mailam Engineering College",
    duration: "2022 – 2026",
    location: "Mailam, Tamil Nadu",
    grade: "CGPA: 8.2",
    icon: "🎓",
  },
  {
    degree: "Higher Secondary (12th Grade)",
    institution: "Walter Scudder Higher Secondary School",
    duration: "2020 – 2022",
    location: "Tamil Nadu",
    grade: "Score: 72%",
    icon: "📚",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Experience & Education</h2>
          <p className="section-subtitle">My professional journey</p>
        </div>

        <div className="exp-layout">
          {/* Left — Work */}
          <div className="exp-column">
            <h3 className="col-heading">
              <span>💼</span> Work Experience
            </h3>

            <div className="timeline">
              {experiences.map((e, i) => (
                <div className="timeline-item" key={i}>
                  <div className="timeline-dot" />
                  <div className="timeline-card">
                    <div className="tl-header">
                      <div>
                        <h4 className="tl-role">{e.role}</h4>
                        <p className="tl-company">{e.company}</p>
                      </div>
                      <span className="tl-type">{e.type}</span>
                    </div>
                    <div className="tl-meta">
                      <span>📅 {e.duration}</span>
                      <span>📍 {e.location}</span>
                    </div>
                    <ul className="tl-points">
                      {e.description.map((d, j) => (
                        <li key={j}>{d}</li>
                      ))}
                    </ul>
                    <div className="tl-tech">
                      {e.tech.map((t) => (
                        <span key={t} className="tech-tag">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Education */}
          <div className="exp-column">
            <h3 className="col-heading">
              <span>🎓</span> Education
            </h3>

            <div className="timeline">
              {education.map((e, i) => (
                <div className="timeline-item" key={i}>
                  <div className="timeline-dot" />
                  <div className="timeline-card">
                    <div className="tl-header">
                      <div>
                        <h4 className="tl-role">{e.degree}</h4>
                        <p className="tl-company">{e.institution}</p>
                      </div>
                      <span className="edu-icon">{e.icon}</span>
                    </div>
                    <div className="tl-meta">
                      <span>📅 {e.duration}</span>
                      <span>📍 {e.location}</span>
                    </div>
                    <div className="edu-grade">{e.grade}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}