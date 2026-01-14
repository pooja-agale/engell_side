import React, { useEffect, useRef } from "react";
import { Watermark } from "antd";

const photos = [
  "/photo(1).jpeg",
  "/photo(2).jpeg",
  "/photo(3).jpeg",
  "/photo(4).jpeg",
  "/photo(10).jpeg",
  "/photo(11).jpeg",
];

const PhotoGallary = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const scrollInterval = setInterval(() => {
      scrollAmount += 1;
      scrollContainer.scrollLeft = scrollAmount;

      // reset scroll for infinite effect
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
        scrollContainer.scrollLeft = 0;
      }
    }, 20); // speed control

    return () => clearInterval(scrollInterval);
  }, []);

  return (
     <Watermark content={"ENGELL"} gap={[300, 300]}>
      <div className="w-full py-10 bg-blue-300 " id="gallery">
        <p className="text-center  text-2xl md:text-4xl font-semibold mb-12">
          Photo Gallery
        </p>

        <div ref={scrollRef} className="flex gap-4 overflow-x-hidden">
          {[...photos, ...photos].map((src, index) => (
            <img
              key={index}
              src={src}
              alt="gallery"
              className="w-60 h-40 sm:w-72 sm:h-48 md:w-80 md:h-72
                       object-cover rounded-xl flex-shrink-0"
            />
          ))}
        </div>
      </div>
  </Watermark>
  );
};

export default PhotoGallary;
