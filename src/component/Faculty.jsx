import React from "react";
import { Briefcase, GraduationCap } from "lucide-react";
import { Watermark } from "antd";

const faculty = [
  {
    name: "Dr. Aparna Sahasrabudhe",
    role: "Director & Senior Faculty",
    experience: "25+ years of teaching experience",
    education:
      "Ph.D. (SPPU), M.A. German (University of Pune), B.A. German, GDS Goethe-Institut, NET (UGC), Advanced Diploma in Japanese, JLPT N2",
    note:
      "Advanced teacher training in India & Germany. Paper presentations at national and international conferences.",
    
    image: "/photo(7).jpeg",

  },
  {
    name: "Ashwini Mahajan",
    role: "Faculty Member",
    experience: "20+ years of teaching experience",
    education:
      "B.Sc., B2 Goethe Institute, JLPT N2, Teacher’s Training Program in Japan, B2 Language Course in Germany",
    note:
      "Extensive international training in Germany and Japan for language teaching.",
    image: "/photo(6).jpeg",
  },
  {
    name: "Aarti Bapat",
    role: "Faculty Member",
    experience: "5+ years of teaching experience",
    education: "B.Com., B2 ÖSD Certified",
    note:
      "Specialized in German language training with a strong academic background.",
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
