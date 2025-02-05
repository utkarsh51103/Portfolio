import React, { useState } from "react";
import Navbar from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Technologies from "./components/Tech-Stack";
import Projects from "./components/Projects";
import { IoHome } from "react-icons/io5";
import { FaBusinessTime } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { FaDiagramProject } from "react-icons/fa6";
import { FcBusinessContact } from "react-icons/fc";
import { Tooltip } from "react-tooltip";
import { IoIosClose } from "react-icons/io";
import Contact from "./components/Contact";

function index() {          
  const [contactdialog, setcontactdialog] = useState(false);

  const scrollIntoSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="fixed top-32 right-0 flex flex-col h-[300px] w-[40px] lg:h-[400px] lg:w-[60px] bg-black/30 items-center justify-around text-white  rounded-md">
        <div data-tooltip-id="home-id">
          <IoHome
            className="text-2xl cursor-pointer"
            onClick={() => scrollIntoSection("home")}
          />
        </div>
        <div data-tooltip-id="experience-id">
          <FaBusinessTime
            className="text-2xl cursor-pointer"
            onClick={() => scrollIntoSection("experience")}
          />
        </div>
        <div data-tooltip-id="skill-id">
          <GiSkills
            className="text-2xl cursor-pointer"
            onClick={() => scrollIntoSection("skill")}
          />
        </div>
        <div data-tooltip-id="project-id">
          <FaDiagramProject
            className="text-2xl cursor-pointer"
            onClick={() => scrollIntoSection("project")}
          />
        </div>
        <div data-tooltip-id="contact-id">
          <FcBusinessContact
            className="text-2xl cursor-pointer"
            onClick={() => setcontactdialog(true)}
          />
        </div>
        <Tooltip className="text-md" id="home-id" content="Home" />
        <Tooltip id="experience-id" content="Experience" />
        <Tooltip id="skill-id" content="Skills" />
        <Tooltip id="project-id" content="Projects" />
        <Tooltip id="contact-id" content="Contact Us" />
      </div>
      <div id="home">
        <Hero />
      </div>
      <About />
      <div id="experience">
        <Experience />
      </div>
      <div id="skill">
        <Technologies />
      </div>
      <div id="project">
        <Projects />
      </div>
      {contactdialog && (
        <div
          className="fixed cursor-pointer inset-0 bg-black/50 z-30"
          onClick={() => setcontactdialog(false)}
        ></div>
      )}
      <dialog
        open={contactdialog}
        className="fixed z-40 bg-black top-24 text-white h-[400px] w-[300px] rounded-xl border border-white shadow-lg p-5"
      >
        <div className="flex flex-col items-center justify-center gap-5 pt-5">
          <div className="font-extralight text-2xl border-b-[1px] border-white text-white">
            Lets get in
            <span className="text-purple-600"> Touch</span>
          </div>
          <div
            className="absolute top-2 text-black rounded-full bg-white cursor-pointer right-2"
            onClick={() => setcontactdialog(false)}
          >
            <IoIosClose className="text-2xl" />
          </div>
        <Contact/>
        </div>
      </dialog>
      <Navbar />
    </div>
  );
}

export default index;
