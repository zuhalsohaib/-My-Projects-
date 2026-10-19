import { useEffect } from "react";
import "./style.css";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import BackToTop from "./BackToTop";

export default function App() {
  useEffect(() => {
    const navLinks = document.querySelectorAll(".nav-links a");
    const sections = document.querySelectorAll("section[id]");
    const updateActiveLink = () => {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 180;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + section.offsetHeight) current = section.id;
      });
      navLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === "#" + current));
    };
    window.addEventListener("scroll", updateActiveLink);
    const revealElements = document.querySelectorAll("section, .section-heading, .hero > *, .about-text > *, .stat-card, .skill-box, .project-item, .contact-content > *, .education-card, .education-skill, footer > *");
    revealElements.forEach((element) => element.classList.add("reveal"));
    const numberObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const finalText = el.dataset.final || el.textContent.trim();
        const match = finalText.match(/^(\\d+)(.*)$/);
        if (match) {
          const target = Number(match[1]);
          const suffix = match[2];
          const start = performance.now();
          const duration = 1300;
          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            el.textContent = `${Math.floor(target * (1 - Math.pow(1 - progress, 3)))}${suffix}`;
            if (progress < 1) requestAnimationFrame(tick); else el.textContent = finalText;
          };
          requestAnimationFrame(tick);
        }
        numberObserver.unobserve(el);
      });
    }, { threshold: 0.6 });
    document.querySelectorAll(".stat-card h3, .trusted strong").forEach((el) => { el.dataset.final = el.textContent.trim(); numberObserver.observe(el); });
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add("show"); observer.unobserve(entry.target); }
      });
    }, { threshold: 0.12 });
    revealElements.forEach((element) => observer.observe(element));
    const handleAnchorClick = (event) => {
      const link = event.target.closest('a[href^="#"]');
      if (!link) return;
      const target = document.querySelector(link.getAttribute("href"));
      if (target) { event.preventDefault(); target.scrollIntoView({ behavior: "smooth" }); }
    };
    document.addEventListener("click", handleAnchorClick);
    return () => { window.removeEventListener("scroll", updateActiveLink); document.removeEventListener("click", handleAnchorClick); observer.disconnect(); numberObserver.disconnect(); };
  }, []);
  return <><Navbar /><Home /><About /><Education /><Skills /><Projects /><Contact /><Footer /><BackToTop /></>;
}
