import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills"
import Projects from "./components/Projects";
import Navbar from "./components/NavBar";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Interest from "./components/Interest";
import Achievements from "./components/Achievements";
import Particles from "./components/ParticleEffect";

function App() {
  return (
    <>
      <Particles />
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="timeline">
        <Timeline />
      </section>
      <section id="projects">
        <Projects />
        </section>
      <section id="achievements">
        <Achievements />
      </section>      <section id ="interest">
        <Interest />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </>
  );
}

export default App;
