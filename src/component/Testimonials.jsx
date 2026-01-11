import React from "react";
import { Star, StarHalf } from "lucide-react";
import { Watermark } from "antd";

const reviews = [
  {
    name: "Nikhil Ekbote",
    role: "Application Engineer",
    company: "NMB Minebea GmbH, Darmstadt",
    review:
      "I studied German up to the B1 level at Engell Institute. The teachers encourage students to actively speak and participate, which helped me improve my confidence and pronunciation. This helped me during internship and job interviews.",
  },
  {
    name: "Rutuja Deshpande",
    role: "Service Experience Manager (Japanese Support)",
    company: "Teradata",
    review:
      "My journey with Engel Institute played an important role in shaping my professional path. Learning both Japanese and German here gave me confidence and clarity. I am grateful to Ashwini ma’am and Aparna ma’am for their support.",
  },
  {
    name: "Anshul Bhole",
    role: "Quality Planner",
    company: "BMW AG, München",
    review:
      "I completed my B1 German at Engell Institute before going to Germany. The certificate was accepted by universities, and I also passed the Goethe B1 exam after finishing this course.",
  },
  {
    name: "Shreya Kulkarni",
    role: "German Learner",
    company: "Engell Institute",
    review:
      "Engel Institut has excellent teachers and a very positive learning environment. The classes are structured and motivating, which helped me gain confidence in German.",
  },
  {
    name: "Prachi Bhong",
    role: "German Student (B2.2)",
    company: "Engell Institute",
    review:
      "The institute encourages group activities and structured exams which helped improve my confidence and communication skills. They also guide very well for Goethe exam preparation.",
  },
  {
    name: "Prasad Kharadkar",
    role: "BMW Supplier Quality Specialist",
    company: "NOMEA GmbH, Munich",
    review:
      "I started learning German in 2013 at Engel Institute. Aparna Ma’am’s dedication kept me motivated for years. I completed B1 in Sambhajinagar and later passed B2 in Germany.",
  },
];

const Testimonials = () => {
  const rating = 4.5; // Top average rating

  return (
    <Watermark content={"ENGELL"} gap={[300, 300]}>
    <div id="testimonials" className="w-full bg-blue-300 py-20 px-4">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-gray-900">
          What Our Students Say
        </h2>

        {/* Rating Stars */}
        <div className="flex items-center justify-center gap-2 mt-3">
          {[1, 2, 3, 4, 5].map((star, i) => {
            if (i + 1 <= Math.floor(rating)) {
              return (
                <Star
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-yellow-400"
                />
              );
            } else if (i + 1 === Math.ceil(rating) && rating % 1 !== 0) {
              return (
                <StarHalf
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-yellow-400"
                />
              );
            } else {
              return <Star key={i} className="w-5 h-5 text-gray-300" />;
            }
          })}
          <span className="text-sm text-gray-600">
            <strong>{rating}</strong> · 100+ Reviews
          </span>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="mt-14 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg border p-6 hover:shadow-xl transition"
          >
            {/* User Info */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-[#D33A3D] flex items-center justify-center text-white font-semibold text-lg">
                {item.name.charAt(0)}
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-800">
                  {item.name}
                </h4>
                <p className="text-xs text-gray-500">{item.role}</p>
                <p className="text-xs text-gray-400">{item.company}</p>
              </div>
            </div>

            {/* Review Stars */}
            <div className="flex gap-1 mb-3">
              {[1, 2, 3, 4, 5].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>

            {/* Review Text */}
            <p className="text-sm text-gray-600 leading-relaxed">
              {item.review}
            </p>

            <p className="text-xs text-gray-400 mt-4">{item.time}</p>
          </div>
        ))}
      </div>
    </div>
    </Watermark>
  );
};

export default Testimonials;
