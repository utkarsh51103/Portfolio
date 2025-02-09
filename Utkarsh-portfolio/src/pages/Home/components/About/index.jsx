import React from "react";
import { ABOUT_TEXT } from "../../../../utils/constants";
import { motion } from "motion/react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { CgWebsite } from "react-icons/cg";
import { FaFire } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";

function index() {
  // <div className="text-3xl font-thin border-b-[1px] border-white">
  //       About<span className="text-neutral-400"> Me</span>
  //     </div>
  return (
    <div className="text-white flex flex-col items-center justify-center mt-10">
      
      <div className=" flex flex-col md:flex-row items-center justify-center">
        <motion.div
          whileInView={{ x: 0 }}
          initial={{ x: -200 }}
          transition={{ duration: 1, ease: "linear" }}
          className="flex-1 flex h-[400px] w-[250px] lg:w-[250px] items-center justify-center"
        >
          <DotLottieReact
            src="https://lottie.host/bbcd2017-63b2-45e6-b160-370896456611/6gXnoKyVWj.lottie"
            loop
            autoplay
          />
        </motion.div>
        <motion.div
          whileInView={{ x: 0 }}
          initial={{ x: 200 }}
          transition={{ duration: 1, ease: "linear" }}
          className="flex-1 mx-5 mt-10 w-[90%] xl:w-[80%]"
        >
          <div className="ml-10 font-extralight">
            <div>{ABOUT_TEXT}</div>
            <div className="flex w-full items-center justify-center gap-5 mt-5">
              <motion.div
                className="flex flex-col gap-5 w-[50%] h-[250px] xl:h-[150px] bg-black/40 hover:bg-black/70 transition-all duration-300 z-20 rounded-lg p-5"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="font-bold text-xl flex items-center gap-3">
                  <CgWebsite className="text-blue-500" />
                  Web Devlopment
                </div>
                <div className="font-light">
                  Building modern and responsive websites using React.js and
                  Node.js
                </div>
              </motion.div>
              <motion.div
                className="flex flex-col gap-5 w-[50%] h-[250px] xl:h-[150px] bg-black/40 hover:bg-black/70 transition-all duration-300 z-20 rounded-lg p-5"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="font-bold text-xl flex items-center gap-3">
                  <FaFire className="text-red-500" />
                  Competetive Coding
                </div>
                <div className="font-light">
                  Particiapting in Challenging coding contest to test my
                  algorithmic & Problem solving skills
                </div>
              </motion.div>
            </div>
            <div className="flex w-full items-start justify-start gap-5 mt-5">
              <motion.div
                className="flex flex-col gap-5 w-[50%] h-[250px] xl:h-[150px] bg-black/40 hover:bg-black/70 transition-all duration-300 z-20 rounded-lg p-5"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="font-bold text-xl flex items-center gap-3">
                  <MdOutlineDesignServices className="text-yellow-500" />
                  UI/UX Designing
                </div>
                <div className="font-light">
                  Developing intercative user friendly designs to increase
                  engagement
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default index;
