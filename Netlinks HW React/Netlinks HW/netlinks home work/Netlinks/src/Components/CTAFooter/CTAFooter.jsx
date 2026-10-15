// import instagram from "../../assets/Images/instagram.svg";
// import github from "../../assets/Images/github.svg";
// import youtube from "../../assets/Images/youtube.svg";
// import x from "../../assets/Images/x.svg";

// import footerData from "./CTAFooter";
// import "./CTAFooter.css";

// function CTAFooter() {
//           return (
//                     <section className="cta-footer">

//                               {/* =================================
//           CTA
//       ================================= */}

//                               <div className="cta-box">

//                                         <div className="cta-lines"></div>

//                                         <h2>
//                                                   Talk to a senior architect
//                                                   <br />
//                                                   <em>this week.</em>
//                                         </h2>

//                                         <p>
//                                                   30-minute call. Walk away with a phased plan and fixed-fee
//                                                   <br />
//                                                   scoping in 5 business days.
//                                         </p>

//                                         <button className="cta-button">
//                                                   Book a 30-min discovery call ↗
//                                         </button>

//                               </div>


//                               {/* =================================
//           FOOTER
//       ================================= */}

//                               <footer className="footer">

//                                         <div className="footer-container">


//                                                   {/* =================================
//               BRAND
//           ================================= */}

//                                                   <div className="footer-brand">

//                                                             <div className="logo">

//                                                                       <span className="logo-symbol">
//                                                                                 ◈
//                                                                       </span>

//                                                                       <span>
//                                                                                 net<span>links</span>
//                                                                       </span>

//                                                             </div>


//                                                             <p className="description">
//                                                                       A global technology partner for Odoo ERP
//                                                                       implementation, custom software
//                                                                       development, AI automation, and digital
//                                                                       transformation.
//                                                             </p>


//                                                             <p>
//                                                                       info@netlinks.af
//                                                             </p>

//                                                             <p>
//                                                                       077-302-0101
//                                                             </p>

//                                                             <p>
//                                                                       NETLINKS Plaza, Street 6, Lane 3, Shar-e-naw
//                                                             </p>

//                                                             <p>
//                                                                       Kabul, Afghanistan
//                                                             </p>


//                                                             {/* Social links */}
//                                                             {/* 
//                                                             <div className="socials">

//                                                                       <a href="#">𝕏</a>
//                                                                       <a href="#">◉</a>
//                                                                       <a href="#">◎</a>
//                                                                       <a href="#">▶</a>

//                                                             </div> */}

//                                                             <div className="socials">

//                                                                       <a href="#" aria-label="X">
//                                                                                 <img src="assets/images/x.svg" alt="X" />
//                                                                       </a>

//                                                                       <a href="#" aria-label="Instagram">
//                                                                                 <img src="assets/images/instagram.svg" alt="Instagram" />
//                                                                       </a>

//                                                                       <a href="#" aria-label="GitHub">
//                                                                                 <img src="a/images/github.svg" alt="GitHub" />
//                                                                       </a>

//                                                                       <a href="#" aria-label="YouTube">
//                                                                                 <img src="/images/youtube.svg" alt="YouTube" />
//                                                                       </a>

//                                                             </div>
//                                                   </div>


//                                                   {/* =================================
//               SOLUTIONS
//           ================================= */}

//                                                   <div className="footer-column">

//                                                             <h4>
//                                                                       SOLUTIONS
//                                                             </h4>

//                                                             {footerData.solutions.map((item) => (

//                                                                       <a href="#" key={item}>
//                                                                                 {item}
//                                                                       </a>

//                                                             ))}

//                                                   </div>


//                                                   {/* =================================
//               SERVICES
//           ================================= */}

//                                                   <div className="footer-column">

//                                                             <h4>
//                                                                       SERVICES
//                                                             </h4>

//                                                             {footerData.services.map((item) => (

//                                                                       <a href="#" key={item}>
//                                                                                 {item}
//                                                                       </a>

//                                                             ))}

//                                                   </div>


//                                                   {/* =================================
//               INDUSTRIES
//           ================================= */}

//                                                   <div className="footer-column">

//                                                             <h4>
//                                                                       INDUSTRIES
//                                                             </h4>

//                                                             {footerData.industries.map((item) => (

//                                                                       <a href="#" key={item}>
//                                                                                 {item}
//                                                                       </a>

//                                                             ))}

//                                                   </div>


//                                                   {/* =================================
//               COMPANY
//           ================================= */}

//                                                   <div className="footer-column">

//                                                             <h4>
//                                                                       COMPANY
//                                                             </h4>

//                                                             {footerData.company.map((item) => (

//                                                                       <a href="#" key={item}>
//                                                                                 {item}
//                                                                       </a>

//                                                             ))}

//                                                   </div>

//                                         </div>


//                                         {/* =================================
//             FOOTER BOTTOM
//         ================================= */}

//                                         <div className="footer-bottom">

//                                                   <span>
//                                                             © 2026 NETLINKS. All rights reserved.
//                                                   </span>

//                                                   <div className="footer-links">

//                                                             <a href="#">
//                                                                       Sitemap
//                                                             </a>

//                                                             <span>·</span>

//                                                             <a href="#">
//                                                                       Business ethics
//                                                             </a>

//                                                             <span>·</span>

//                                                             <a href="#">
//                                                                       Privacy policy
//                                                             </a>

//                                                             <span>·</span>

//                                                             <a href="#">
//                                                                       Terms of use
//                                                             </a>

//                                                             <span>·</span>

//                                                             <a href="#">
//                                                                       Dark mode
//                                                             </a>

//                                                   </div>

//                                         </div>

//                               </footer>

//                     </section>
//           );
// }

// export default CTAFooter;


import instagram from "../../assets/Images/instagram.svg";
import github from "../../assets/Images/github.svg";
import youtube from "../../assets/Images/youtube.svg";
import x from "../../assets/Images/x.svg";
import netlinksLogo from "../../assets/Images/netlinks-logo.png";

import footerData from "./CTAFooter";
import "./CTAFooter.css";

function CTAFooter() {
          return (
                    <section className="cta-footer">

                              {/* =================================
          CTA
      ================================= */}

                              <div className="cta-box">

                                        <div className="cta-lines"></div>

                                        <h2>
                                                  Talk to a senior architect
                                                  <br />
                                                  <em>this week.</em>
                                        </h2>

                                        <p>
                                                  30-minute call. Walk away with a phased plan and fixed-fee
                                                  <br />
                                                  scoping in 5 business days.
                                        </p>

                                        <button className="cta-button">
                                                  Book a 30-min discovery call ↗
                                        </button>

                              </div>


                              {/* =================================
          FOOTER
      ================================= */}

                              <footer className="footer">

                                        <div className="footer-container">


                                                  {/* =================================
              BRAND
          ================================= */}

                                                  <div className="footer-brand">

                                                            <div className="logo">
                                                                      <a href="/" aria-label="NETLINKS Home">
                                                                                <img
                                                                                          src={netlinksLogo}
                                                                                          alt="NETLINKS"
                                                                                          className="logo-image"
                                                                                />
                                                                      </a>

                                                                      <a href="/" className="logo-text">
                                                                                <span className="logo-net">net</span>
                                                                                <span className="logo-links">links</span>
                                                                      </a>
                                                            </div>


                                                            <p className="description">
                                                                      A global technology partner for Odoo ERP
                                                                      implementation, custom software
                                                                      development, AI automation, and digital
                                                                      transformation.
                                                            </p>


                                                            <p>
                                                                      info@netlinks.af
                                                            </p>

                                                            <p>
                                                                      077-302-0101
                                                            </p>

                                                            <p>
                                                                      NETLINKS Plaza, Street 6, Lane 3, Shar-e-naw
                                                            </p>

                                                            <p>
                                                                      Kabul, Afghanistan
                                                            </p>


                                                            {/* =================================
                SOCIAL LINKS
            ================================= */}

                                                            <div className="socials">

                                                                      <a href="#" aria-label="X">
                                                                                <img src={x} alt="X" />
                                                                      </a>

                                                                      <a href="#" aria-label="Instagram">
                                                                                <img src={instagram} alt="Instagram" />
                                                                      </a>

                                                                      <a href="#" aria-label="GitHub">
                                                                                <img src={github} alt="GitHub" />
                                                                      </a>

                                                                      <a href="#" aria-label="YouTube">
                                                                                <img src={youtube} alt="YouTube" />
                                                                      </a>

                                                            </div>

                                                  </div>


                                                  {/* =================================
              SOLUTIONS
          ================================= */}

                                                  <div className="footer-column">

                                                            <h4>
                                                                      SOLUTIONS
                                                            </h4>

                                                            {footerData.solutions.map((item) => (

                                                                      <a href="#" key={item}>
                                                                                {item}
                                                                      </a>

                                                            ))}

                                                  </div>


                                                  {/* =================================
              SERVICES
          ================================= */}

                                                  <div className="footer-column">

                                                            <h4>
                                                                      SERVICES
                                                            </h4>

                                                            {footerData.services.map((item) => (

                                                                      <a href="#" key={item}>
                                                                                {item}
                                                                      </a>

                                                            ))}

                                                  </div>


                                                  {/* =================================
              INDUSTRIES
          ================================= */}

                                                  <div className="footer-column">

                                                            <h4>
                                                                      INDUSTRIES
                                                            </h4>

                                                            {footerData.industries.map((item) => (

                                                                      <a href="#" key={item}>
                                                                                {item}
                                                                      </a>

                                                            ))}

                                                  </div>


                                                  {/* =================================
              COMPANY
          ================================= */}

                                                  <div className="footer-column">

                                                            <h4>
                                                                      COMPANY
                                                            </h4>

                                                            {footerData.company.map((item) => (

                                                                      <a href="#" key={item}>
                                                                                {item}
                                                                      </a>

                                                            ))}

                                                  </div>

                                        </div>


                                        {/* =================================
            FOOTER BOTTOM
        ================================= */}

                                        <div className="footer-bottom">

                                                  <span>
                                                            © 2026 NETLINKS. All rights reserved.
                                                  </span>

                                                  <div className="footer-links">

                                                            <a href="#">
                                                                      Sitemap
                                                            </a>

                                                            <span>·</span>

                                                            <a href="#">
                                                                      Business ethics
                                                            </a>

                                                            <span>·</span>

                                                            <a href="#">
                                                                      Privacy policy
                                                            </a>

                                                            <span>·</span>

                                                            <a href="#">
                                                                      Terms of use
                                                            </a>

                                                            <span>·</span>

                                                            <a href="#">
                                                                      Dark mode
                                                            </a>

                                                  </div>

                                        </div>

                              </footer>

                    </section >
          );
}

export default CTAFooter;