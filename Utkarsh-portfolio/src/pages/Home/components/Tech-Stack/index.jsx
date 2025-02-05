import React from "react";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { motion } from "motion/react";
import { FaGithub } from "react-icons/fa6";
import { FaPython } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import python from '../../../../utils/python.png';




function index() {
  return (
    <div className="flex flex-col items-center justify-center w-full text-white mt-20 ">
      <div className="text-3xl font-thin border-b-[1px] border-white">Tech Stack</div>
      <div className="flex flex-wrap items-center w-70% md:w-[60%] lg:w-[50%] justify-center gap-12 md:gap-16 lg:gap-20 my-10">
        <motion.div 
           whileHover={{ scale: 1.2}}
           initial={{y:10}}
           animate={{y:0}}
           transition={{duration:1,
            repeat:Infinity,
            repeatType:"reverse",
           }}
        >
          <TbBrandCpp className="text-[50px] md:text-[60px] text-blue-500" />
        </motion.div>
        
        <motion.div 
        whileHover={{ scale: 1.2}}
        initial={{y:10}}
        animate={{y:0}}
        transition={{duration:1.2,
         repeat:Infinity,
         repeatType:"reverse",
        }}
        >
          <FaNode className="text-[50px] md:text-[60px] text-green-500" />
        </motion.div>
        <motion.div 
        whileHover={{ scale: 1.2}}
        initial={{y:10}}
        animate={{y:0}}
        transition={{duration:1.2,
         repeat:Infinity,
         repeatType:"reverse",
        }}
        >
        <FaReact className="text-[50px] md:text-[60px] text-blue-400" />
        </motion.div>
        <motion.div 
        whileHover={{ scale: 1.2}}
        initial={{y:10}}
        animate={{y:0}}
        transition={{duration:0.7,
         repeat:Infinity,
         repeatType:"reverse",
        }}
        >
          <SiExpress className="text-[50px] md:text-[60px] text-gray-400" />
        </motion.div>
        <motion.div 
        whileHover={{ scale: 1.2}}
        initial={{y:10}}
        animate={{y:0}}
        transition={{duration:0.8,
         repeat:Infinity,
         repeatType:"reverse",
        }}
        >
          <SiMongodb className="text-[50px] md:text-[60px] text-green-400" />
        </motion.div>
        <motion.div 
           whileHover={{ scale: 1.2}}
           initial={{y:10}}
           animate={{y:0}}
           transition={{duration:1.1,
            repeat:Infinity,
            repeatType:"reverse",
           }}
        >
          <FaHtml5 className="text-[50px] md:text-[60px] text-orange-500" />
        </motion.div>
        <motion.div 
           whileHover={{ scale: 1.2}}
           initial={{y:10}}
           animate={{y:0}}
           transition={{duration:0.8,
            repeat:Infinity,
            repeatType:"reverse",
           }}
        >
          <FaCss3Alt className="text-[50px] md:text-[60px] text-blue-500" />
        </motion.div>
        <motion.div 
           whileHover={{ scale: 1.2}}
           initial={{y:10}}
           animate={{y:0}}
           transition={{duration:1.1,
            repeat:Infinity,
            repeatType:"reverse",
           }}
        >
          <IoLogoJavascript className="text-[50px] md:text-[60px] text-yellow-400" />
        </motion.div>
        <motion.div 
           whileHover={{ scale: 1.2}}
           initial={{y:10}}
           animate={{y:0}}
           transition={{duration:0.8,
            repeat:Infinity,
            repeatType:"reverse",
           }}
        >
          <FaGithub className="text-[50px] md:text-[60px] text-white" />
        </motion.div>
        <motion.div 
           whileHover={{ scale: 1.2}}
           initial={{y:10}}
           animate={{y:0}}
           transition={{duration:1.2,
            repeat:Infinity,
            repeatType:"reverse",
           }}
        >
          <img src={python} className="h-24"/>
        </motion.div>
        <motion.div 
           whileHover={{ scale: 1.2}}
           initial={{y:10}}
           animate={{y:0}}
           transition={{duration:0.8,
            repeat:Infinity,
            repeatType:"reverse",
           }}
        >
          <SiPostman className="text-[50px] md:text-[60px] text-orange-500" />
        </motion.div>
        <motion.div 
           whileHover={{ scale: 1.2}}
           initial={{y:10}}
           animate={{y:0}}
           transition={{duration:1.1,
            repeat:Infinity,
            repeatType:"reverse",
           }}
        >
          <FaWordpress className="text-[50px] md:text-[60px] text-blue-500" />
        </motion.div>
        <motion.div 
           whileHover={{ scale: 1.2}}
           initial={{y:10}}
           animate={{y:0}}
           transition={{duration:0.7,
            repeat:Infinity,
            repeatType:"reverse",
           }}
        >
          <SiRedux className="text-[50px] md:text-[60px] text-purple-400" />
        </motion.div>
      </div>
    </div>
  );
}

export default index;
