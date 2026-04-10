import React from "react";
import "./Skills.css";

const skillGroups = [
  {
    category: "Frontend",
    icon: "🎨",
    skills: [
      { name: "React.js",    level: 90 },
      { name: "JavaScript",  level: 88 },
      { name: "HTML & CSS",  level: 92 },
      { name: "Tailwind CSS",level: 85 },
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js",     level: 82 },
      { name: "Express.js",  level: 80 },
      { name: "Java",        level: 78 },
      { name: "Spring Boot", level: 70 },
    ],
  },
  {
    category: "Database",
    icon: "🗄️",
    skills: [
      { name: "MySQL",       level: 80 },
      { name: "MongoDB",     level: 75 },
    ],
  },
  {
    category: "Tools & Other",
    icon: "🔧",
    skills: [
      { name: "Git & GitHub",level: 85 },
      { name: "Docker",      level: 65 },
      { name: "OpenAI API",  level: 78 },
      { name: "REST APIs",   level: 88 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">My technical toolkit</p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.category}>
              <div className="skill-group-header">
                <span className="skill-icon">{group.icon}</span>
                <h3 className="skill-category">{group.category}</h3>
              </div>

              <div className="skill-list">
                {group.skills.map((skill) => (
                  <div className="skill-item" key={skill.name}>
                    <div className="skill-meta">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-pct">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-fill"
                        style={{ "--level": `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}