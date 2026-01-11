import React from "react";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import { LuEarth } from "react-icons/lu";
import { LuUsers } from "react-icons/lu";
import { RiGraduationCapLine } from "react-icons/ri";


const HeroSection = () => {
  return (
    
      <div
        id="hero"
        className="relative min-h-screen w-full bg-blue-300 overflow-hidden flex items-center justify-center px-4"
      >
        

        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white shadow-sm rounded-full px-4 py-1 text-xs text-gray-600 mb-6">
            <span className="w-2 h-2 bg-[#D33A3D] rounded-full"></span>
            Since 2003 · Trusted by 4234+ Students
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-gray-900 leading-tight">
            Master <span className="  text-[#D33A3D] ">German </span>&{" "}
            <span className="text-[#D33A3D]">Japanese</span>
          </h1>

          {/* Description */}
          <p className="mt-4 max-w-2xl mx-auto text-sm md:text-lg text-bol">
            Unlock global opportunities with ENGELL Language Institute.
            Expert-led courses from beginner to advanced levels with
            internationally recognized certifications.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 mt-6">
            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-green-600 border shadow-md">
              <a
                href="https://www.whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
              </a>
            </div>
            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-blue-600 border shadow-md">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
            </div>
            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-pink-500 border shadow-md">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-5 flex items-center gap-4">
              <RiGraduationCapLine size={22} className="text-[#D33A3D]" />
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-800">20+</h3>
                <p className="text-sm text-gray-500">Years Experience</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-5 flex items-center gap-4">
              <LuUsers size={22} className="text-[#D33A3D]" />
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-800">4234+</h3>
                <p className="text-sm text-gray-500">Students Trained</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-5 flex items-center gap-4">
              <LuEarth size={22} className="text-[#D33A3D]" />
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-800">2</h3>
                <p className="text-sm text-gray-500">Languages Offered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default HeroSection;
