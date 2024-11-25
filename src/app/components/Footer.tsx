import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'; // Importing icons from react-icons

function Footer() {
  return (
    <div className="bg-slate-300 relative py-10">
      <div className="container mx-auto px-6">
        {/* Text Section */}
        <div className="sm:text-start text-center sm:pt-10">
          <h1 className="text-slate-500 text-[12vw] sm:text-[50px] lg:text-[65px] sm:leading-[72px]">
            Get in touch
          </h1>
          <p className="text-black text-xl mt-4">
            Contact: <a href="#" className="font-bold text-blue-600">baiganousha@gmail.com</a>
          </p>
        </div>
        
        {/* Social Media Icons Section */}
        <div className="flex justify-center sm:justify-start space-x-6 mt-8">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} className="text-blue-700 hover:text-blue-500 transition-colors" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} className="text-pink-600 hover:text-pink-400 transition-colors" />
          </a>
          <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} className="text-gray-800 hover:text-gray-600 transition-colors" />
          </a>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-gray-700 mt-10">
          <p className="text-sm">
            Copyright © 2024. Develop & Designed by <span className="font-bold text-black">Anousha Baig</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
