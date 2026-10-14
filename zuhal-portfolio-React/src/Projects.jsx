import React from "react";
const projects = [
  {
    number: "01",
    image: "/images/11.PNG",
    alt: "Mentors Cards Website",
    title: "Mentors Cards Website",
    description: "HTML, CSS, Figma, and Responsive Design",
    link: "https://my-projects-tan-mu.vercel.app/",
  },
  {
    number: "02",
    image: "/images/My figma 3.PNG",
    alt: "Skill Courses Cards",
    title: "Skill Courses Cards",
    description: "HTML, CSS, Figma, and Responsive Design",
    link: "https://my-projects-kpjd.vercel.app/",
  },
  {
    number: "03",
    image: "/images/oooo.PNG",
    alt: "Dream Home Website",
    title: "Dream Home",
    description: "HTML, CSS, and Responsive Design",
    link: "https://my-projects-n4nn.vercel.app/",
  },
  {
    number: "04",
    image: "/images/poo.PNG",
    alt: "Video Cards Website",
    title: "Video Cards",
    description: "HTML, CSS, and Responsive Design",
    link: "https://my-projects-cjlj.vercel.app/",
  },
];

export default function Projects() {
  return (
    <>
      <section id="projects" className="projects-section">
        <div className="section-heading">
          <span>MY WORK</span>
          <h2>
            Some Of My <strong>Projects.</strong>
          </h2>
          <p>
            A few projects where I turned ideas into real digital experiences.
          </p>
        </div>
        <div className="proj">
          {projects.map((project) => (
            <div className="project-item" key={project.number}>
              <div className="pic">
                <img src={project.image} alt={project.alt} />
                <div className="project-overlay">
                  <span>{project.number}</span>
                </div>
              </div>
              <div className="shadow">
                <div>
                  <span className="project-number">
                    PROJECT {project.number}
                  </span>
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-button"
                >
                  View Project{" "}
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
