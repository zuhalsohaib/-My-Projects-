
import industries from "./Industries";
import "./Industries.css";

function Industries() {
  return (
    <section className="industries-section">

      <div className="industries-container">

        {/* Label */}
        <div className="industries-label">
          INDUSTRIES
        </div>


        {/* Header */}
        <div className="industries-header">

          <h2>
            Pattern recognition
            <span>across verticals.</span>
          </h2>

          <p>
            Two decades of implementations means
            we've seen your problem before. Industry
            templates, compliance defaults, and
            playbooks included.
          </p>

        </div>


        {/* Industries */}
        <div className="industries-list">

          {industries.map((industry, index) => (

            <div
              className="industry-row"
              key={industry}
            >

              {/* Number */}
              <span className="industry-number">
                {index + 1}
              </span>


              {/* Title */}
              <span className="industry-title">
                {industry}
              </span>


              {/* Arrow */}
              <span className="industry-arrow">
                ↗
              </span>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Industries;