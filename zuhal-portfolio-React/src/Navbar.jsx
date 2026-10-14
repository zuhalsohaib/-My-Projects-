import React from 'react';

export default function Navbar() {
  return (<>
<nav className="navbar">
      <div className="nav-container">
        <a href="#home" className="logo">
          <span>Z</span>

          <div className="logo-text">
            <strong>Zuhal</strong>
            <small>Portfolio</small>
          </div>
        </a>

        <div className="nav-links">
          <a href="#home" className="active">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        
        <div className="chat-buttons">
          <a href="mailto:zuhal.sohaib12@gmail.com" className="chat-email">
            <i className="fa-regular fa-envelope"></i>
            Email Me
          </a>

          <a
            href="https://github.com/zuhalsohaib"
            target="_blank"
            rel="noopener noreferrer"
            className="chat-github"
          >
            <i className="fa-brands fa-github"></i>
            GitHub
          </a>
        </div>
      </div>
    </nav>
  </>);
}
