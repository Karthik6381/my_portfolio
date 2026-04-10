import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }
    // Replace with your EmailJS / backend call
    setStatus("success");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    { icon: "📧", label: "Email", value: "karthikweb123@gmail.com", href: "mailto:karthikweb123@gmail.com" },
    { icon: "📍", label: "Location", value: "Villupuram, Tamil Nadu", href: "#" },
    { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/karthik", href: "https://www.linkedin.com/in/web-karthi" },
    { icon: "🐙", label: "GitHub", value: "github.com/Karthik6381", href: "https://github.com/Karthik6381" },
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            I'm actively looking for fresher opportunities — let's connect!
          </p>
        </div>

        <div className="contact-layout">
          {/* Left — Info */}
          <div className="contact-info">
            <p className="contact-intro">
              Whether you have a job opportunity, project collaboration, or just
              want to say hello — my inbox is always open! I'm currently seeking
              entry-level roles in Chennai, Pondicherry, Villupuram & Tindivanam.
            </p>

            <div className="info-cards">
              {contactInfo.map((c) => (
                <a className="info-card" key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : "_self"} rel="noreferrer">
                  <span className="info-icon">{c.icon}</span>
                  <div>
                    <div className="info-label">{c.label}</div>
                    <div className="info-value">{c.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="contact-avail">
              <span className="avail-dot" />
              <span>Available for immediate opportunities</span>
            </div>
          </div>

          {/* Right — Form */}
          <div className="contact-form-wrap">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Your Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Job Opportunity / Project Inquiry"
                  value={form.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell me about the opportunity or project..."
                  value={form.message}
                  onChange={handleChange}
                />
              </div>

              {status === "success" && (
                <div className="form-msg success">
                  ✅ Message sent! I'll get back to you soon.
                </div>
              )}
              {status === "error" && (
                <div className="form-msg error">
                  ❌ Please fill all required fields.
                </div>
              )}

              <button type="submit" className="btn-primary submit-btn">
                Send Message 🚀
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}