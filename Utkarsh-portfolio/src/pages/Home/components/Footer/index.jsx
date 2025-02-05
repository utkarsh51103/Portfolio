import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Logo from '../../../../utils/US.png'


function index() {
  return (
    <div className="w-full flex flex-col items-center justify-center text-purple-500 py-10">
    <div className="flex items-center justify-between">
      <div>
       <img src={Logo} className="h-[50px] w-[50px] mt- ml-20"/>
      </div>
      <div className="flex gap-5 ml-5 py-7 text-2xl">
        <div>
          <a href="https://linkedin.com/in/utkarsh-sharma-78a007259/">
            <FaLinkedin />
          </a>
        </div>
        <div>
          <a href="https://github.com/utkarsh51103">
            <FaGithub />
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/utkarsh511_/">
            <FaInstagram />
          </a>
        </div>
        <div>
          <a href="https://x.com/Utkarsh51103">
            <FaSquareXTwitter />
          </a>
        </div>
      </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center">
          <div className="font-thin text-purple-400 text-lg">Developed by-</div>
          <div className="text-white font-thin">Utkarsh Sharma</div>
        </div>
        <div className="text-sm font-extralight">&copy; All Rights Reserved</div>
      </div>
    </div>
  );
}

export default index;
