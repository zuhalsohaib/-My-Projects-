import React from "react";
import aiImage from "../../assets/images/2.webp";
import "./AI.css";

export default function AI() {
  return (
    <section className="ai-section">
      <div className="ai-image">
        <img src={aiImage} alt="" />
      </div>
      <div className="ai-content">
        <p className="small-title">02, AI & Automation</p>
        <h1>
          Agents that don't just <br />
          chat,<span>they work.</span>{" "}
        </h1>

        <p className="description">
          Production AI agents that close tickets, reconcile invoices, and
          <br />
          answer procurement queries. Grounded, governed, <br /> observable, not
          demos.
        </p>
        <ul>
          <li>Retrieval-grounded agents with full citation and audit trai</li>
          <li>AI-powered ERP: intelligent automation inside Odoo workflows</li>
          <li>
            Human-in-the-loop controls for regulated and high-stakes processes
          </li>
          <li>Typical outcomes: 30%+ reduction in manual-task hours</li>
        </ul>
        <button className="ai-button">see how it works</button>
      </div>
    </section>
  );
}
