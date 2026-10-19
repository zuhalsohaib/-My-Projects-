import React from "react";

const education = [
  {
    title: "School Education",
    status: "Ongoing",
    description: "Completed education through Grade 10. My school education is ongoing.",
  },
  {
    title: "English Language Diploma",
    status: "A+ Grade",
    description: "Completed English language studies at Muslim English Language Institute and received an A+ diploma.",
  },
  {
    title: "Computer Certificate (CIT)",
    status: "A+ Grade",
    description: "Completed CIT at Kabul Center Course and received an A+ computer certificate.",
  },
];

const skills = ["HTML", "CSS", "JavaScript", "React JS", "Tailwind CSS", "Responsive Design", "UI/UX Design", "Figma"];

export default function Education() {
  return (
    <section id="education" className="education-section">
      <div className="section-heading">
        <span>MY LEARNING JOURNEY</span>
        <h2>Education &amp; <strong>Training.</strong></h2>
        <p>My education, certificates, and the skills I am developing.</p>
      </div>
      <div className="education-grid">
        {education.map((item, index) => (
          <article className="education-card reveal" key={item.title} style={{ transitionDelay: `${index * 120}ms` }}>
            <div className="education-icon">{index === 0 ? "✦" : index === 1 ? "A+" : "</>"}</div>
            <span className="education-status">{item.status}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
      <div className="education-skills">
        <h3>Technical &amp; Design Skills</h3>
        <div className="education-skill-list">
          {skills.map((skill, index) => (
            <span key={skill} className="education-skill reveal" style={{ transitionDelay: `${index * 70}ms` }}>{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
