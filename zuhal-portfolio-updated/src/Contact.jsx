import React from 'react';

export default function Contact() {
  return (<>
<section id="contact" className="contact-section">
      <div className="contact-decoration contact-decoration-one">✦</div>

      <div className="contact-decoration contact-decoration-two">♡</div>

      <div className="contact-content">
        <span className="section-label"> LET'S CONNECT </span>

        <h2>
          Let's Create Something
          <span>Beautiful</span>
          Together.
        </h2>

        <p>
          Have a project, idea, or opportunity in mind? I'd love to hear about
          it and bring your ideas to life.
        </p>

        <a href="mailto:zuhal.sohaib12@gmail.com" className="contact-button">
          Say Hello
          <i className="fa-regular fa-paper-plane"></i>
        </a>
      </div>
    </section>
  </>);
}
