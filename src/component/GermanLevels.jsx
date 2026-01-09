import React from "react";
import { CheckCircle } from "lucide-react";
import { PiMedalThin } from "react-icons/pi";
import { Watermark } from "antd";

const levels = [
  {
    level: "A1",
    tag: "Beginner Level 1",
    points: [
      "Introduction to German language",
      "Read, write short simple sentences",
      "Basic grammar and pronunciation",
      "Vocabulary of 850–1000 words",
      "Communication in daily situations",
    ],
    exam: "Start Deutsch 1",
  },
  {
    level: "A2",
    tag: "Beginner Level 2",
    points: [
      "Read, write and listen to simple texts",
      "Construction of fairly complex sentences",
      "Additional vocabulary of 800 words",
      "Communication in everyday situations",
      "Write 10–15 sentences on topics",
    ],
    exam: "Goethe-Zertifikat A2",
  },
  {
    level: "B1",
    tag: "Intermediate",
    points: [
      "Detailed grammar study",
      "Short essay writing",
      "Drafting personal and official letters",
      "Additional vocabulary of 700–900 words",
      "Understanding finer details of texts",
    ],
    exam: "Goethe-Zertifikat B1",
  },
  {
    level: "B2",
    tag: "Upper Intermediate",
    points: [
      "Understanding complex texts",
      "Ability to participate in discussions",
      "Express spontaneously and fluently",
      "Advanced grammar mastery",
      "Professional communication skills",
    ],
    exam: "Goethe-Zertifikat B2",
  },
  {
    level: "C1",
    tag: "Advanced",
    points: [
      "Understanding longer, challenging texts",
      "Spontaneous and fluent expression",
      "Effective and flexible language use",
      "Clear, structured complex sentences",
      "Academic and professional proficiency",
    ],
    exam: "Goethe-Zertifikat C1",
  },
  {
    level: "C2",
    tag: "Advanced",
    points: [
      "Understand everything read or heard",
      "Summarize information effortlessly",
      "High fluency and accuracy",
      "Native-like expression capability",
      "Expert-level proficiency",
    ],
    exam: "Goethe-Zertifikat C2",
  },
];

const GermanLevels = () => {
  return (
    // <Watermark content={"ENGELL"}>
      <div className="w-full bg-blue-300 py-16 px-4" id="german">
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {levels.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-[#1f3a5f]">
                    {item.level}
                  </h3>
                  <span className="text-sm bg-gray-200 px-3 py-1 rounded-full text-gray-800 font-semibold">
                    {item.tag}
                  </span>
                </div>

                <ul className="space-y-3">
                  {item.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 bg-[#f7f6f2] rounded-xl px-4 py-3 flex items-center gap-2">
                <PiMedalThin className="text-yellow-500" size={23} />
                <div>
                  <p className="text-xs text-gray-500">International Exam</p>
                  <p className="text-sm font-semibold text-gray-800">
                    {item.exam}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

       
        <div className="mt-12 text-center">
          
          <p className="text-md text-gray-600 mt-1">
            preparation for international examination in German and Japanese 
          </p>
        </div>

      </div>
    // </Watermark>
  );
};

export default GermanLevels;
