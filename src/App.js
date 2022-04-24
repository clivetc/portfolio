import React, { useEffect } from "react";
import "./App.css";
import data from "./assets/data";
import AOS from "aos";
import "aos/dist/aos.css";
import Card from "./assets/components/Card";
import Experience from "./assets/components/Experience";
import Skills from "./assets/components/Skills";
import Footer from "./assets/components/Footer";
import Contact from "./assets/components/Contact";
import Resume from "./assets/components/Resume";
import Projects from "./assets/components/Projects";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  });
  return (
    <div className="min-h-screen py-10 px-3 sm:px-5 bg-gray-100 ">
      <div data-aos="fade-down" data-aos-duration="800">
        <Card name={data.name} title={data.title} social={data.social} />
        <Resume/>
      </div>
      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
        <Skills skills={data.skills}/>
        <Experience experiences={data.experiences} />
        <Projects projects={data.projects}/>
        <Contact/>
        <Footer github={data.social.github} />
      </div>
    </div>
  );
}

export default App;
