import React from "react";

export default function About() {
  return (
    <>
      <section id="about" className="about-section">
        <div className="about-decoration">♡</div>

        <div className="section-heading">
          <span>ABOUT ME</span>

          <h2>
            A Little About
            <strong>Me.</strong>
          </h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              I'm Zuhal Sohaib, a Front-End Developer. <br /> I have a mind full
              of ideas , a screen full of possibilities , and code that brings
              them together. <br /> I love turning creative ideas into clean,
              interactive, and meaningful web experiences. For me, <br /> every
              project is more than a website — it’s a chance to create, explore,
              and bring something <br />
              new to life. I’m just getting started — and there’s so much more
              to build.
            </p>

            <p className="about-highlight">
              I create. I code. I bring ideas to life.
            </p>

            <div className="contact-details">
              <a href="mailto:zuhal.sohaib12@gmail.com">
                <i className="fa-regular fa-envelope"></i>
                <span>zuhal.sohaib12@gmail.com</span>
              </a>

              <a href="https://wa.me/93731747949">
                <i className="fa-brands fa-whatsapp"></i>
                <span>Chat on Whats App</span>
              </a>
            </div>
          </div>
        </div>

        <div className="info">
          <div className="stat-card">
            <h3>60+</h3>
            <p>
              Projects Completed <br />
              Personal & Practice Projects
            </p>
          </div>

          <div className="stat-card">
            <h3>35+</h3>
            <p>Startups Supported</p>
          </div>

          <div className="stat-card">
            <h3>3+</h3>
            <p>Months of Experience</p>
          </div>

          <div className="stat-card">
            <h3>100%</h3>
            <p>Teacher Satisfaction Rate</p>
          </div>
        </div>
      </section>
    </>
  );
}
