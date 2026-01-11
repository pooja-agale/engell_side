import React from "react";
import { FaUserGraduate, FaBookOpen } from "react-icons/fa";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { MdOutlineSchool } from "react-icons/md";
import { Watermark } from "antd";

const AboutSection = () => {
  return (
  <Watermark content={"ENGELL"}>
      <div className="w-full bg-blue-300 py-16 px-4" id="about">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div>
            <span className="text-xs font-semibold tracking-widest text-[#D33A3D] uppercase">
              About Us
            </span>

            <h2 className="mt-3 text-3xl sm:text-5xl font-serif font-semibold text-[#1f3a5f] leading-tight">
              Your Gateway to <br />{" "}
              <h2 className="md:text-5xl font-bold bg-gradient-to-r from-[#1f3a5f]   to-[#D33A3D] text-transparent bg-clip-text">
                Global Communication
              </h2>
            </h2>

            <p className="mt-6 text-gray-600 text-sm sm:text-base leading-relaxed max-w-xl">
              We, a group of well qualified and experienced teachers,
              established ENGELL Institute in 2003 specially to train students,
              professionals, and employees in industrial establishments in
              foreign languages — German and Japanese.
            </p>

            <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed max-w-xl">
              Our students can skillfully read, write, listen and converse in
              these languages, opening doors to international opportunities and
              cultural connections.
            </p>
          </div>

          {/* Right Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-b from-[#1f3a5f] to-[#D33A3D] text-white mb-4">
                <FaUserGraduate size={20} />
              </div>
              <h3 className="font-semibold text-gray-800">Expert Faculty</h3>
              <p className="mt-2 text-sm text-gray-500">
                Qualified and experienced teachers dedicated to your success
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-b from-[#1f3a5f] to-[#D33A3D] text-white mb-4">
                <MdOutlineSchool size={20} />
              </div>
              <h3 className="font-semibold text-gray-800">
                Skill-Based Learning
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Master reading, writing, listening and conversation skills
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-b from-[#1f3a5f] to-[#D33A3D] text-white mb-4">
                <HiOutlineBadgeCheck size={20} />
              </div>
              <h3 className="font-semibold text-gray-800">Certified Courses</h3>
              <p className="mt-2 text-sm text-gray-500">
                Prepare for internationally recognized certifications
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-b from-[#1f3a5f] to-[#D33A3D] text-white mb-4">
                <FaBookOpen size={20} />
              </div>
              <h3 className="font-semibold text-gray-800">
                Comprehensive Curriculum
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Structured learning from beginner to advanced levels
              </p>
            </div>
          </div>
        </div>
      </div>
    </Watermark>
  );
};

export default AboutSection;
