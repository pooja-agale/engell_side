import React from "react";
import { CheckCircle } from "lucide-react";


const levels = [
  {
    level: "N5",
    tag: "Beginner",
    description:
      "Understands some basic Japanese, common phrases, simple sentences, and slow conversations on familiar topics.",
    points: [
      "Basic Kana (Hiragana & Katakana)",
      "Around 80 Kanji",
      "About 600 words",
      "Simple sentences & slow conversations",
    ],
    cert: "JLPT N5 Certificate",
  },
  {
    level: "N4",
    tag: "Advanced Beginner",
    description:
      "Understands basic Japanese, can read simple sentences, and handle slow conversations on daily topics.",
    points: [
      "Around 230 Kanji",
      "About 1,250 words",
      "Simple reading ability",
      "Daily life conversations",
    ],
    cert: "JLPT N4 Certificate",
  },
  {
    level: "N3",
    tag: "Intermediate",
    description:
      "Understands Japanese used in everyday situations and can read materials on daily topics at near-natural speed.",
    points: [
      "Around 600 Kanji",
      "About 3,000 words",
      "Near-natural speed conversations",
      "Reading daily topic materials",
    ],
    cert: "JLPT N3 Certificate",
  },
  {
    level: "N2",
    tag: "Upper Intermediate",
    description:
      "Understands complex texts like newspapers and can follow conversations at near-natural speed.",
    points: [
      "Advanced grammar",
      "News & article reading",
      "Near-natural conversations",
      "Eligible for some jobs in Japan",
    ],
    cert: "JLPT N2 Certificate",
  },
  {
    level: "N1",
    tag: "Advanced",
    description:
      "Understands complex Japanese in a wide range of situations and is suitable for academic and technical work.",
    points: [
      "2000+ Kanji",
      "10,000+ words",
      "Natural-speed conversations",
      "Academic & technical Japanese",
    ],
    cert: "JLPT N1 Certificate",
  },
];


const JapaneseJLPT = () => {
  return (
    
      <div className="w-full bg-blue-300 py-20 px-4" id="japanese">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block mb-3 text-xs px-4 py-1 rounded-full bg-red-100 text-[#D33A3D] font-medium">
            日本語 · Nihongo
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-gray-900">
            Japanese Language <span className="text-[#D33A3D]">JLPT</span> Courses
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-500 max-w-2xl mx-auto">
            Prepare for the Japanese Language Proficiency Test (JLPT) jointly
            conducted by the Association of International Education Japan and
            the Japan Foundation, Tokyo.
          </p>
        </div>

        {/* About JLPT */}
        <div className="mt-10 max-w-4xl mx-auto bg-[#fff7f7] border border-red-200 rounded-2xl p-6">
          <h4 className="font-semibold text-gray-800 mb-2">About JLPT</h4>
          <p className="text-sm text-gray-600 leading-relaxed">
            The test is conducted worldwide and consists of 5 levels. The aim is
            to evaluate and certify the proficiency in Japanese Language of
            non-natives. All levels assess grammar, reading, vocabulary, and
            listening skills.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {["Grammar", "Reading", "Vocabulary", "Listening"].map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 bg-white border rounded-full text-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Levels */}
        <div className="mt-14 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {levels.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-semibold text-[#D33A3D]">
                    {item.level}
                  </h3>
                  <span className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-600">
                    {item.tag}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-4">{item.description}</p>

                <ul className="space-y-3">
                  {item.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <CheckCircle className="w-4 h-4 text-[#D33A3D] mt-0.5" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 bg-[#fff7f7] rounded-xl px-4 py-3 border border-red-200">
                <p className="text-xs text-gray-500">
                  International Certification
                </p>
                <p className="text-sm font-semibold text-gray-800">
                  {item.cert}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
  
  );
};

export default JapaneseJLPT;
