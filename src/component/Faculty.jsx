import React from "react";
import { Briefcase, GraduationCap } from "lucide-react";
import { Watermark } from "antd";

const faculty = [
  {
    name: "Prof. Sunita Kulkarni",
    role: "German Language Expert",
    experience: "18+ years of experience",
    education: "M.A. German, Goethe-Zertifikat C2",
    note: "Specialized in Goethe Institute exam preparation",
    image: "/photo(6).jpeg",
  },
  {
    name: "Prof. Takeshi Yamamoto",
    role: "Japanese Language Expert",
    experience: "15+ years of experience",
    education: "M.A. Japanese Studies, JLPT N1 Certified",
    note: "Native speaker with expertise in JLPT preparation",
    image: "/photo(7).jpeg",
  },
  {
    name: "Prof. Anjali Deshpande",
    role: "Senior Language Instructor",
    experience: "12+ years of experience",
    education: "M.A. Linguistics, German B2 & Japanese N2",
    note: "Expert in teaching both German and Japanese",
    image: "/photo(9).jpeg",
  },
];

const Faculty = () => {
  return (
    <Watermark  content={"ENGELL"}>
      <div
        className="w-full bg-blue-300 py-20 px-4"
       
        id="faculty"
      >
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 text-xs bg-white px-4 py-1 rounded-full shadow-sm mb-4">
            Our Faculty
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-gray-900">
            Meet Our Expert Teachers
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-500">
            Learn from experienced professionals who are passionate about
            language education.
          </p>
        </div>

        {/* Cards */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {faculty.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border overflow-hidden"
            >
              {/* Image */}
              {/* Image */}
              <div className="w-full overflow-hidden flex justify-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-semibold text-gray-900">{item.name}</h3>
                <p className="text-sm text-orange-500 font-medium mb-4">
                  {item.role}
                </p>

                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-start gap-2">
                    <Briefcase className="w-4 h-4 text-orange-500 mt-0.5" />
                    <span>
                      <strong>Experience</strong> — {item.experience}
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <GraduationCap className="w-4 h-4 text-orange-500 mt-0.5" />
                    <span>
                      <strong>Education</strong> — {item.education}
                    </span>
                  </div>
                </div>

                <p className="mt-4 text-xs text-gray-500 italic">{item.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Watermark>
  );
};

export default Faculty;
