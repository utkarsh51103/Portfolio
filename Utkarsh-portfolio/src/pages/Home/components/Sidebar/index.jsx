import {motion} from 'framer-motion';
import { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import Contact from "../Contact";
import { useAppStore } from '../../../../store';

function index(props) {

    const [sidebaropen, setSidebaropen] = useState(false);
    const {open , setopen} = useAppStore();
    
      const variants = {
        open: {
          clipPath: "circle(1200px at 50px 50px)",
          transition: {
            type: "spring",
            stiffness: 20,
          },
        },
        closed: {
          clipPath: "circle(30px at 50px 50px)",
          transition: {
            type: "spring",
            stiffness: 400,
            damping: 40,
          },
        },
      };
      const links = [
        "Home",
        "About",
        "Skill",
        "Experience",
        "Project",
        "Contact Me",
      ];
    return (
        <div>
        <motion.div
        className="fixed top-0 left-0 z-50 h-screen w-[150px] md:w-[200px] lg:w-[250px] bg-[#111021]"
        animate={sidebaropen ? "open" : "closed"}
        variants={variants}
      >
        {sidebaropen && (
          <motion.div className="text-white absolute flex items-center justify-center h-full w-full">
            <div className="flex flex-col gap-4 w-[80%] text-xl font-light">
              {links.map((link, index) => (
                link === "Contact Me" ?
                <motion.div whileHover={{scale:1.1}} whileTap={{scale:0.9}} key={index} onClick={()=>setopen()} className='bg-gray-600 px-3 py-2 rounded-lg w-full flex justify-center'>
                  <a href={`#${link}`} key={link}>
                    {link}
                  </a>
                </motion.div>
                :
                <motion.div whileHover={{scale:1.1}} whileTap={{scale:0.9}} key={index} className='bg-gray-600 px-3 py-2 rounded-lg w-full flex justify-center'>
                  <a href={`#${link}`} key={link}>
                    {link}
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
        {
          <button
            className="fixed top-9 left-9 bg-[#111021]"
            onClick={() => setSidebaropen((prev) => !prev)}
          >
           {sidebaropen== true ? <IoClose className="text-2xl text-white"/>: <RxHamburgerMenu className="text-2xl text-white"/>}
          </button>
        }
      </motion.div>
      {open && (
        <div
          className="fixed cursor-pointer inset-0 bg-black/50 z-30"
          onClick={() => setopen()}
        ></div>
      )}
      <dialog
        open={open}
        className="fixed z-40 bg-gray-900 top-24 text-white h-[400px] w-[300px] rounded-xl p-5"
      >
        <div className="flex flex-col items-center justify-center gap-5 pt-5">
          <div className="font-extralight text-2xl text-white">
            Lets get in
            <span className="text-purple-600"> Touch</span>
          </div>
          <div
            className="absolute top-2 text-black rounded-full bg-white cursor-pointer right-2"
            onClick={() => setopen()}
          >
            <IoIosClose className="text-2xl" />
          </div>
          <Contact />
        </div>
      </dialog>
        </div>
    );
}

export default index;