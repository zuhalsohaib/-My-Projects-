import { useEffect } from "react";
import "./style.css";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
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
    const revealElements = document.querySelectorAll(".about-section, .skill-box, .project-item, .contact-section");
    revealElements.forEach((element) => element.classList.add("reveal"));
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
    return () => { window.removeEventListener("scroll", updateActiveLink); document.removeEventListener("click", handleAnchorClick); observer.disconnect(); };
  }, []);
  return <><Navbar /><Home /><About /><Skills /><Projects /><Contact /><Footer /><BackToTop /></>;
}
