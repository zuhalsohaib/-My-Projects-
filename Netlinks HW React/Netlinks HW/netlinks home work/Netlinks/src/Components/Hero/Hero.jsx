
function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <div className="badge">
          <span>●</span>
          20 years delivering from Kabul. Afghanistan’s enterprise technology
          partner
        </div>

        <h1>
          Enterprise Odoo,
          <br />
          custom software,
          <br />
          and AI,
          <br />
          <em>engineered in Afghanistan.</em>
        </h1>

        <p>
          Afghanistan-based since 2005. We built the 500,000-employee Odoo HR
          and payroll system for the national government, and Jobs.af, the
          country’s largest job-hunting platform. Senior teams in Kabul
          delivering for clients across Afghanistan, the GCC, India, and the US.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Book a 30-min discovery call ↗
          </button>

          <button className="secondary-btn">Explore services</button>
        </div>
      </div>

      <div className="hero-right">
        <img
          src="https://netlinks.af/illustrations/home-hero-1280.webp"
          alt=""
        />
      </div>
    </section>
  );
}

export default Hero;


