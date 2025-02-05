import { useState,useEffect} from "react";
import { HERO_TEXT } from "../../../../utils/constants";
import { motion } from "motion/react";
import { Typewriter } from "react-simple-typewriter";
import HERO from '../../../../utils/HERO.png';

function Index(props) {

  const words = ["Full Stack Developer", "MERN Stack Expert", "Creative Coder"];

  return (
    <div className="flex flex-col md:flex-row items-center justify-around gap-20">
      <div className="h-[50vh] flex-1 flex flex-col gap-2 items-start justify-center text-white mx-12 mt-5">
        <motion.div
          whileInView={{ x: 0 }}
          initial={{ x: -50 }}
          transition={{ duration: 0.5, ease: "linear" }}
          className="text-[50px] lg:text-[60px] font-thin"
        >
          Utkarsh Sharma
        </motion.div>
        <div className="text-2xl font-thin text-purple-500">
        <span className="text-white"> I am a{" "}</span> 
          <Typewriter
          words={['Full Stack Web Developer','MERN Stack Expert','Competetive Coder']}
          loop={Infinity}
          typeSpeed={50}
          deleteSpeed={50}
          delaySpeed={2000}
          />
        </div>
        <div className="text-white text-[13px] font-light md:w-[75%]">{HERO_TEXT}</div>
      </div>
      <div className="flex-1 text-white flex items-center justify-center md:pt-10 md:mr-32">
       <img src={HERO} height={400} width={200} className="rounded-xl"/>
      </div>
    </div>
  );
}

export default Index;
