import React, { useRef, useState, useEffect } from "react";
import { Play } from "lucide-react";
import { Watermark } from "antd";

const videos = [
  {
    title: "Journey from Zero to JLPT N3",
    name: "Riya Patel",
    tag: "Japanese Language",
    video: "/Video(1).mp4",
  },
  {
    title: "How German Changed My Career",
    name: "Saurabh Joshi",
    tag: "German Language",
    video: "/Video(2).mp4",
  },
  {
    title: "From Beginner to B2 in One Year",
    name: "Prachi Kulkarni",
    tag: "German Language",
    video: "/Video(3).mp4",
  },
];

const VideoTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <Watermark content={"ENGELL"}>
      <div
        className="w-full bg-blue-300 py-20 px-4"
        content={"ENGELL"}
        id="videos"
      >
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex text-xs bg-orange-100 text-orange-600 px-4 py-1 rounded-full mb-4">
            Video Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold">
            Student Success Stories
          </h2>
          <p className="mt-4 text-gray-500">
            Hear directly from our students about their learning experience.
          </p>
        </div>

        {/* Cards */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((item, index) => (
            <VideoCard
              key={index}
              item={item}
              isActive={activeIndex === index}
              onPlay={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
     </Watermark>
  );
};

const VideoCard = ({ item, isActive, onPlay }) => {
  const videoRef = useRef(null);

  // 🔥 Jab dusra video play ho → ye wala auto pause
  useEffect(() => {
    if (!isActive && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isActive]);

  const handlePlay = () => {
    onPlay(); // pehle baaki videos band

    const video = videoRef.current;
    video.muted = false; // 🔊 SOUND FIX
    video.volume = 1;
    video.play();
  };

  return (
    <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">
      {/* VIDEO */}
      <div className="relative h-48 md:h-96 bg-black">
        <video
          ref={videoRef}
          src={item.video}
          className="w-full h-full object-cover"
          controls={isActive}
          playsInline
        />

        {!isActive && (
          <button
            onClick={handlePlay}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow">
              <Play className="w-6 h-6 text-orange-500 ml-1" />
            </div>
          </button>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-semibold text-gray-900">{item.title}</h3>
        <p className="text-sm text-gray-500 mb-3">{item.name}</p>
        <span className="inline-block text-xs bg-orange-100 text-orange-600 px-3 py-1 rounded-full">
          {item.tag}
        </span>
      </div>
    </div>
  );
};

export default VideoTestimonials;
