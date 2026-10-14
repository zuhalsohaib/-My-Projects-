import React from 'react';

export default function Footer() {
  return (<>
<footer>
      <p>
        © 2026 Zuhal Sohaib. Made with
        <span>♥</span> and creativity.
      </p>

      <div className="social-links">
        <a href="https://github.com/zuhalsohaib" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <i className="fa-brands fa-github"></i>
        </a>

        <a href="https://www.linkedin.com/in/zuhal-sohaib-b71130431/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <i className="fa-brands fa-linkedin-in"></i>
        </a>

        <a href="mailto:zuhal.sohaib12@gmail.com" aria-label="Email">
          <i className="fa-regular fa-envelope"></i>
        </a>
      </div>
    </footer>
  </>);
}
