import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { useState } from "react";
import Logo from "../../../../utils/US.png";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";



function index() {

  return (
    <div className="w-full text-white py-5 m-0 p-0">
        <div className="flex gap-5 justify-center py-7 text-3xl">
          <div>
            <a href="https://linkedin.com/in/utkarsh-sharma-78a007259/" target="_blank">
              <FaLinkedin className="text-blue-500"/>
            </a>
          </div>
          <div>
            <a href="https://github.com/utkarsh51103" target="_blank">
              <FaGithub />
            </a>
          </div>
          <div>
            <a href="https://wa.me/919770757784" target="_blank">
              <FaWhatsapp  className="text-green-500"/>
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/utkarsh511_/" target="_blank">
              <FaInstagram className="text-pink-600"/>
            </a>
          </div>
          <div className="p-1 bg-white rounded-full">
            <a href="https://x.com/Utkarsh51103" target="_blank">
              <FaSquareXTwitter className="text-black"/>
            </a>
          </div>
        </div>
    
    </div>
  );
}

export default index;
