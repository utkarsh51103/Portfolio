import { useState, useEffect } from "react";
import { HERO_TEXT } from "../../../../utils/constants";
import { animate, motion, transform } from "motion/react";
import { Typewriter } from "react-simple-typewriter";
import HERO from "../../../../utils/HERO-bg.png";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useAppStore } from "../../../../store";

function Index(props) {
 
  const {setopen} = useAppStore();

  const words = ["Full Stack Developer", "MERN Stack Expert", "Creative Coder"];

  return (
    <div className="flex flex-col md:flex-row items-center justify-around gap-20">
      <div className="h-[50vh] flex-2 flex flex-col gap-5 items-start justify-center text-white md:mx-12 mx-2 mt-16">
        <motion.div
          whileInView={{ x: 0 }}
          initial={{ x: -200 }}
          transition={{ duration: 0.5, ease: "linear" }}
          className="text-[50px] lg:text-[70px] text-white font-audiowide"
        >
          Utkarsh Sharma
        </motion.div>
        <motion.div
          className="text-[40px] font-quantico text-purple-500"
          whileInView={{ x: 0 }}
          initial={{ x: -200 }}
          transition={{ duration: 1, ease: "linear" }}
        >
          <span className="text-white"> I am a </span>
          <Typewriter
            words={[
              "Full Stack Web Developer",
              "MERN Developer",
              "Competetive Coder",
            ]}
            loop={Infinity}
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={2000}
            className="text-purple-400"
          />
        </motion.div>
        <motion.div
          className="text-purple-500 font-quantico text-[16px] md:w-[50%]"
          whileInView={{ x: 0 }}
          initial={{ x: -200 }}
          transition={{ duration: 1.5, ease: "linear" }}
        >
          {HERO_TEXT}
        </motion.div>
        <div className="flex gap-5 mt-5 z-20">
          <motion.div
            className="h-12 bg-white/30 cursor-pointer ml-[140px] w-28 flex items-center justify-center rounded-lg text-white hover:bg-white/40 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <a
              href="https://drive.google.com/file/d/1DmC5ojW-3uWx07qjfJ9GncssUPAUVnsM/view?usp=sharing"
              target="_blank"
            >
              Resume
            </a>
          </motion.div>
          <motion.div
            className="h-12 bg-white/30 cursor-pointer w-28 flex items-center justify-center rounded-lg text-white hover:bg-white/40 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <div
              onClick={() => {
                setopen();
              }}
            >
              Contact Me
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="flex-2 text-white flex items-center justify-center md:pt-10 md:mr-16"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}
      >
        <DotLottieReact
          src="https://lottie.host/40b58a0c-cfb6-4fd1-aace-6ca6215a09af/oVvmbTZPMu.lottie"
          loop
          autoplay
          className="h-[300px] w-[500px]"
        />
      </motion.div>
    </div>
  );
}

export default Index;
