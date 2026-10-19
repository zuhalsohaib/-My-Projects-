import React from 'react';

export default function Home() {
  return (<>
<section id="home" className="home-section">
      <div className="home-decoration decoration-one"></div>
      <div className="home-decoration decoration-two"></div>

      <div className="main">
        <div className="picture">
          <div className="image-glow"></div>

          <img src="/images/download.webp" alt="Zuhal Sohaib" />
        </div>

        <div className="hero">
          <span className="hello-badge">
            <span className="hello-dot"></span>
            Available for creative projects
          </span>

          <h2>Hi, I'm Zuhal</h2>

          <h1>
            I Build Websites
            <br  />
            That Make Ideas
            <br  />
            <span>Come Alive.</span>
          </h1>

          <h3>Front-End Developer & Creative Designer</h3>

          <p>
            I create beautiful, responsive digital experiences that combine
            clean design and powerful functionality.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="primary-button">
              Book a Free Call
              <i className="fa-solid fa-arrow-right"></i>
            </a>

            <a href="#projects" className="secondary-button">
              See My Projects
              <i className="fa-solid fa-arrow-down"></i>
            </a>
          </div>

          <div className="trusted">
            <div className="trusted-avatars">
              <span>♡</span>
              <span>✦</span>
              <span>+</span>
            </div>

            <p>Trusted by <strong>30+</strong> Brands</p>
          </div>
        </div>
      </div>
    </section>
  </>);
}
