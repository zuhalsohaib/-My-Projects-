import React from "react";
import "./Odoo.css";
import odooimage from "../../assets/images/1.webp";
export default function Odoo() {
  return (
    <section className="odoo-section">
      <div className="odoo-content">
        <p className="small-title">01, Odoo ERP</p>
        <h1>
          One platform. Every <br /> department.
          <span>
            Actually <br />
            integrated.
          </span>
        </h1>
        <p className="description">
          Certified Odoo partner, 50+ implementations, including a <br />
          500,000-employee HR and payroll engagement for a national <br />
          government with 1,000+ users. Finance, ops, sales, HR, and <br />
          manufacturing in one platform.
        </p>
        <ul>
          <li>
            50+ Odoo deployments delivered, including a 500,000-employee
            HR,payroll, and custom modules engagement
          </li>
          <li>
            Odoo migration from SAP, NetSuite, Microsoft Dynamics, QuickBooks,
            and legacy Odoo
          </li>
          <li>Upgrade-safe custom Odoo modules by senior Python engineers</li>
          <li>
            Enterprise Odoo for manufacturing, distribution, field service, and
            public sector
          </li>
        </ul>

        <button className="odoo-button">Explore Odoo services</button>
      </div>
      <div className="odoo-image">
        <img src={odooimage} alt="" />
      </div>
    </section>
  );
}
