import React from "react";
import { CheckCircle } from "lucide-react";
import { Watermark } from "antd";

const levels = [
  {
    level: "N5",
    tag: "Basic",
    description: "The ability to understand some basic Japanese.",
    points: [
      "Hiragana & Katakana",
      "Basic grammar",
      "Elementary vocabulary",
      "Simple conversations",
    ],
    cert: "JLPT N5 Certificate",
  },
  {
    level: "N4",
    tag: "Elementary",
    description: "The ability to understand basic Japanese.",
    points: [
      "Basic Kanji (300)",
      "Everyday expressions",
      "Simple reading",
      "Basic listening",
    ],
    cert: "JLPT N4 Certificate",
  },
  {
    level: "N3",
    tag: "Intermediate",
    description:
      "The ability to understand Japanese used in everyday situations to a certain degree.",
    points: [
      "Intermediate Kanji (600)",
      "Complex grammar",
      "Natural conversations",
      "Reading comprehension",
    ],
    cert: "JLPT N3 Certificate",
  },
  {
    level: "N2",
    tag: "Intermediate",
    description:
      "The ability to understand Japanese used in everyday situations to a certain degree.",
    points: [
      "Intermediate Kanji (600)",
      "Complex grammar",
      "Natural conversations",
      "Reading comprehension",
    ],
    cert: "JLPT N3 Certificate",
  },
  {
    level: "N1",
    tag: "Intermediate",
    description:
      "The ability to understand Japanese used in everyday situations to a certain degree.",
    points: [
      "Intermediate Kanji (600)",
      "Complex grammar",
      "Natural conversations",
      "Reading comprehension",
    ],
    cert: "JLPT N3 Certificate",
  },
];

const JapaneseJLPT = () => {
  return (
    <Watermark content={"ENGELL"}>
      <div className="w-full bg-blue-300 py-20 px-4" id="japanese">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block mb-3 text-xs px-4 py-1 rounded-full bg-red-100 text-red-600 font-medium">
            日本語 · Nihongo
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-gray-900">
            Japanese Language <span className="text-red-600">JLPT</span> Courses
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
                  <h3 className="text-xl font-semibold text-red-600">
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
                      <CheckCircle className="w-4 h-4 text-red-500 mt-0.5" />
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
      {/* Header */}
    </Watermark>
  );
};

export default JapaneseJLPT;
