import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Stats from "./Components/Stats/Stats";
import Partners from "./Components/Parteners/Parteners";
import WhatWeDo from "./Components/WhatWeDo/WhatWeDo";
import Odoo from "./components/ODOO ERP/Odoo";
import AI from "./components/AI/AI";
import Custom from "./components/Custom-Engineering/Custom";
import Industries from "./Components/Industries/Industries.jsx";
import Questions from "./Components/Questions/Questions.jsx";
import CTAFooter from "./Components/CTAFooter/CTAFooter.jsx";
import "./App.css";
import React from "react";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Partners />
      <WhatWeDo />
      <Odoo />
      <AI />
      <Custom />
      <Industries />
      <Questions />
      <CTAFooter />
    </>
  );
}

export default App;
