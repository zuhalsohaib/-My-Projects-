
import "./WhatWeDo.css";

const SERVICES = [
  {
    idx: "01 / ERP",
    active: false,
    title: "Odoo ERP services.",
    body: "Odoo implementation, customization, integration, and migration from SAP, NetSuite, Dynamics, and QuickBooks. 50+ deployments, including a 500,000-employee HR and payroll engagement.",
    href: "/services/odoo-implementation/",
  },
  {
    idx: "02 / BUILD",
    active: true,
    title: "Custom software development.",
    body: "Enterprise web, mobile, and backend systems when shelf products don't fit. Senior-only squads, the team that builds also maintains.",
    href: "/services/custom-software-development/",
  },
  {
    idx: "03 / INTELLIGENCE",
    active: false,
    title: "AI & automation.",
    body: "Production AI agents grounded in your data, governed by your rules, observable end to end. Not demos.",
    href: "/services/agentic-ai-automation/",
  },
  {
    idx: "04 / PEOPLE",
    active: false,
    title: "IT staff augmentation.",
    body: "Senior engineers, architects, and DevOps embedded with your team. US-led delivery, direct-hire model, global bench in India and the UAE.",
    href: "/services/it-staff-augmentation/",
  },
  {
    idx: "05 / STRATEGY",
    active: false,
    title: "Digital transformation.",
    body: "Executive roadmap, enterprise architecture, build-vs-buy, and program delivery. Twenty years of pattern recognition you can execute.",
    href: "/services/digital-transformation/",
  },
  {
    idx: "06 / CLOUD",
    active: false,
    title: "Cloud & managed services.",
    body: "Managed Odoo hosting, cloud infrastructure, 24/7 monitoring, and ERP managed services on AWS, Azure, GCP, and private cloud.",
    href: "/services/cloud-managed-services/",
  },
];

const ArrowIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="13"
    height="13"
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

export default function WhatWeDo() {
  return (
    <section className="wwd">
      <div className="eyebrow">What we do</div>

      <div className="head-row">
        <h2>
          Six services. One
          <br />
          <em>accountable partner.</em>
        </h2>
        <p className="dek">
          One Afghanistan-based vendor for ERP, custom software, AI, staff
          augmentation, and cloud, so nothing falls between the seams.
        </p>
      </div>

      <div className="grid">
        {SERVICES.map((s) => (
          <a
            key={s.idx}
            className={`card${s.active ? " active" : ""}`}
            href={s.href}
          >
            <div className="card-top">
              <span className="idx">{s.idx}</span>
              <span className="go" aria-hidden="true">
                <ArrowIcon />
              </span>
            </div>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

