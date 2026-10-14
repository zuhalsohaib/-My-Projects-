import React from "react";
const skills = [
  {
    number: "01",
    icon: "</>",
    name: "HTML",
    description: "Clean & semantic website structure",
    level: "Advanced",
    percent: 100,
  },
  {
    number: "02",
    icon: "{ }",
    name: "CSS",
    description: "Beautiful and modern interfaces",
    level: "Advanced",
    percent: 100,
  },
  {
    number: "03",
    icon: "JS",
    name: "JavaScript",
    description: "Interactive and dynamic experiences",
    level: "Advanced",
    percent: 99,
  },
  {
    number: "04",
    icon: "✦",
    name: "Figma",
    description: "Modern UI/UX design and prototypes",
    level: "Advanced",
    percent: 100,
  },
  {
    number: "05",
    icon: "↔",
    name: "Responsive Design",
    description: "Websites that work perfectly on every screen",
    level: "Advanced",
    percent: 100,
  },

  {
    number: "07",
    icon: "R.JS",
    name: "React JS",
    description:
      "Building interactive and reusable user interfaces using React JS.",
    level: "Advanced",
    percent: 98,
  },
  {
    number: "08",
    icon: "T.CSS",
    name: "Tailwind CSS",
    description:
      "Creating modern, responsive, and beautiful website designs using Tailwind CSS.",
    level: "Advanced",
    percent: 100,
  },
];

export default function Skills() {
  return (
    <>
      <section id="skills" className="skills">
        <div className="skills-decoration skills-decoration-one"></div>
        <div className="skills-decoration skills-decoration-two"></div>
        <div className="skills-heading">
          <span>MY EXPERTISE</span>
          <h2>
            Skills That Bring Ideas
            <br />
            <b>To Life.</b>
          </h2>
          <p>
            I create modern, responsive and user-friendly digital experiences
            using powerful web technologies.
          </p>
        </div>
        <div className="skills-wrapper">
          {skills.map((skill) => (
            <div className="skill-box" key={skill.number}>
              <div className="skill-top">
                <div className="skill-icon">{skill.icon}</div>
                <span>{skill.number}</span>
              </div>
              <h3>{skill.name}</h3>
              <p>{skill.description}</p>
              <div className="skill-info">
                <span>{skill.level}</span>
                <strong>{skill.percent}%</strong>
              </div>
              <div className="progress">
                <span style={{ width: `${skill.percent}%` }}></span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
