import React, { useRef, useState, useEffect } from "react";
import { Play } from "lucide-react";
import { Watermark } from "antd";

const videos = [
  {
    title: "Experience interactive Foreign Language learning",
    name: "Prachi Bhong",
    tag: "German Language",
    video: "/Video(1).mp4",
  },
  {
    title: "From language learning to higher studies in Germany",
    name: "Abhaya Arak",
    tag: "German Language",
    video: "/Video(2).mp4",
  },
  {
    title: "Unlocking doors for future",
    name: "Pallavi Deshpande",
    tag: "German Language",
    video: "/Video(3).mp4",
  },
  {
    title: "German as a career option",
    name: "Meera Limaye",
    tag: "German Language",
    video: "/Video(4).mp4",
  },
 
  {
    title: "Language skills: real results",
    name: "Ambarish Kulkarni",
    tag: "German Language",
    video: "/Video(6).mp4",
  },
];


const VideoTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <Watermark content={"ENGELL"}>
      <div className="w-full bg-blue-300 py-20" id="videos">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 px-4">
          <span className="inline-flex text-xs bg-white text-[#9c2b2c] font-bold px-4 py-1 rounded-full mb-4">
            Video Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold">
            Student Success Stories
          </h2>
          <p className="mt-4 text-gray-600">
            Hear directly from our students about their learning experience.
          </p>
        </div>

        {/* FULL WIDTH HORIZONTAL SLIDER */}
        <div className="w-full overflow-hidden">
          <div className="flex w-full gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory faculty-scroll px-4">
            {videos.map((item, index) => (
              <div
                key={index}
                className="min-w-[280px] sm:min-w-[360px] md:min-w-[420px] snap-start"
              >
                <VideoCard
                  item={item}
                  isActive={activeIndex === index}
                  onPlay={() => setActiveIndex(index)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
  </Watermark>
  );
};

const VideoCard = ({ item, isActive, onPlay }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (!isActive && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isActive]);

  const handlePlay = () => {
    onPlay();
    const video = videoRef.current;
    video.muted = false;
    video.volume = 1;
    video.play();
  };

  return (
    <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">
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
            className="absolute inset-0 flex items-center justify-center bg-black/20"
          >
            <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow">
              <Play className="w-6 h-6 text-[#D33A3D] ml-1" />
            </div>
          </button>
        )}
      </div>

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
