import React from "react";
import "./Custom.css";
import customimage from "../../assets/images/3.webp";
export default function Custom() {
  return (
    <section className="custom-section">
      <div className="custom-content">
        <p className="small-title">03, Custom engineering</p>
        <h1>
          When nothing off-the-shelf <span>quite fits.</span>
        </h1>
        <p className="description">
          A senior product team, designers, PMs, engineers, embedded with yours.
          Prototype in weeks, ship in months, maintain what we build. No junior
          hand-offs.
        </p>
        <ul>
          <li>Senior-only squads, no ticket-shuffling to offshore pools</li>
          <li>
            Modern stacks: TypeScript, Python, PHP, Postgres, Kubernetes,
            serverless
          </li>
          <li>ISO 12207 + ISO 27001 certified delivery at the group level</li>
          <li>
            Compliance-ready from day one: SSO via SAML/OIDC, RBAC, audit logs,
            encryption
          </li>
        </ul>

        <button className="custom-button">Engineering philosophy</button>
      </div>
      <div className="custom-image">
        <img src={customimage} alt="" />
      </div>
    </section>
  );
}
