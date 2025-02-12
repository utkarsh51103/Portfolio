import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Technologies from "./components/Tech-Stack";
import Projects from "./components/Projects";
import Parallax from "./components/Parallax/Parallax";
import "./index.css";
import { motion } from "framer-motion";
import Sidebar from "./components/Sidebar";
import Footer from './components/Footer'

function index() {
  return (
    <div>
      <div>
        <div>
          <Sidebar />
        </div>
        <div>
          <Navbar />
        </div>
        <section id="Home" className="h-[120vh] md:h-[100vh] lg:h-[80vh]">
          <Hero />
        </section>
        <Parallax type="About" />
        <section id="About" className="h-[145vh] md:h-[100vh]">
          <About />
        </section>
        <div id="Skill" className="h-[100vh]">
          <Technologies />
        </div>
        <div id="Experience" className="pb-20">
          <Experience />
        </div>
        <Parallax type="" />
        <div id="Project" className="h-[70vh]" >
          <Projects />
        </div>
        <div>
         <Footer/>
        </div>
      </div>
    </div>
  );
}

export default index;
