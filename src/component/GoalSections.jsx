import React from "react";
import {
  GraduationCap,
  Briefcase,
  Hotel,
  Plane,
  Languages,
  Globe,
} from "lucide-react";
import { Watermark } from "antd";

const goals = [
  {
    icon: <GraduationCap />,
    title: "Engineering Students",
    desc: "Enhance your profile with international language skills for global engineering opportunities.",
  },
  {
    icon: <Briefcase />,
    title: "MNC Employees",
    desc: "Communicate effectively with international colleagues and clients in German or Japanese.",
  },
  {
    icon: <Hotel />,
    title: "Tourism & Hospitality",
    desc: "Professionals in tourism and hotel management seeking to serve international guests better.",
  },
  {
    icon: <Plane />,
    title: "Going Abroad",
    desc: "Those willing to go abroad on assignments, for higher studies, or immigration.",
  },
  {
    icon: <Languages />,
    title: "Translators & Interpreters",
    desc: "Aspiring to become professional translators and interpreters in German or Japanese.",
  },
  {
    icon: <Globe />,
    title: "Cultural Enthusiasts",
    desc: "Better cultural interaction with natives of Germany and Japan.",
  },
  {
    icon: <Globe />,
    title: "job opportunity",
    desc: "job opportunity for nurces, drivers , technicitions and skilled workers",
  },
];

const GoalsSection = () => {
  return (
     <Watermark content={"ENGELL"}>
      <div className="bg-blue-300 py-16 px-4" id="goals">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-orange-500 uppercase text-sm font-semibold">
            Who Should Learn
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Perfect For Your Goals
          </h2>

          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Whether you're a student, professional, or enthusiast, our courses
            are designed to meet your specific needs.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {goals.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-md transition"
              >
                <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-orange-500 text-white mb-4">
                  {item.icon}
                </div>

                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-500 text-sm mt-2">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="mt-14">
            <div className="bg-gradient-to-r from-indigo-700 to-orange-500 text-white rounded-xl py-8 px-6 max-w-4xl mx-auto">
              <h3 className="text-xl md:text-2xl font-semibold">
                Added Qualification for Better Opportunities
              </h3>
              <p className="text-sm mt-2 opacity-90">
                Learning German or Japanese adds a valuable credential to your
                resume, opening doors to better job opportunities in
                multinational companies.
              </p>
            </div>
          </div>
        </div>
      </div>
     </Watermark>
  );
};

export default GoalsSection;
