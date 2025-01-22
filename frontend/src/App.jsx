import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Services from "./components/Services";

function App() {
  return (
    <>
  

    <div className="text-[#0ffbfd]">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills/>
      <Services/>
      <Contact />
    </div>
</>
  );
}

export default App;
