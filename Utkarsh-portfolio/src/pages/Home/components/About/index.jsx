import React from "react";
import { ABOUT_TEXT } from "../../../../utils/constants";
import { motion } from "motion/react";
import ABOUT from '../../../../utils/About.png';
import {DotLottieReact} from '@lottiefiles/dotlottie-react';

function index() {
  return (
    <div className="text-white flex flex-col items-center justify-center mt-20">
      <div className="text-3xl font-thin border-b-[1px] border-white">
        About<span className="text-neutral-400"> Me</span>
      </div>
      <div className=" flex flex-col md:flex-row items-center justify-center mt-10">
        <motion.div
         whileInView={{ x: 0}}
         initial={{x:-200}}
         transition={{duration:1,ease:"linear"}}
         className="flex-1 flex h-[400px] w-[250px] lg:w-[250px] items-center justify-center">
         <DotLottieReact
          src='https://lottie.host/bbcd2017-63b2-45e6-b160-370896456611/6gXnoKyVWj.lottie'
          loop
          autoplay
         />
         </motion.div>
        <motion.div
            whileInView={{ x: 0}}
            initial={{x:200}}
            transition={{duration:1,ease:"linear"}}
        className="flex-1 mx-5 mt-10 w-[90%] xl:w-[80%]">
          <div className="ml-10 font-extralight">{ABOUT_TEXT}</div>
        </motion.div>
      </div>
    </div>
  );
}

export default index;
