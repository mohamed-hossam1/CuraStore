"use client";

import React, { useEffect, useState } from 'react'

export default function ImageSlider({images}) {
  console.log(images)
  images = images || []
  
  const [curSlide, setCurSlide] = useState(0);

  const sliderRight = () => {
    setCurSlide((prev) => (prev + 1) % images.length);
  };

  const sliderLeft = () => {
    setCurSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      sliderRight();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  let startX = 0;
  let endX = 0;

  const handleTouchStart = (e) => {
    startX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    endX = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleMouseDown = (e) => {
    startX = e.clientX;
  };

  const handleMouseUp = (e) => {
    endX = e.clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const distance = endX - startX;
    if (Math.abs(distance) > 50) {
      if (distance > 0) {
        sliderLeft();
      } else {
        sliderRight();
      }
    }
  };

  return (
    <section
      className="mx-6 items-center relative"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <div className="relative md:h-[420px] mb-6 rounded-2xl overflow-hidden">
        {images.map((image, i) => (
          <div
            className="absolute top-0 left-0 w-full h-full transition-transform duration-700 ease-in-out"
            key={i}
            style={{
              transform: `translateX(${100 * (i - curSlide)}%)`,
            }}
          >
            <img
              className="w-full h-full object-contain rounded-2xl"
              src={image}
              alt={`Image ${i + 1}`}
            />
          </div>
        ))}
      </div>

      <div className="flex gap-3 items-center justify-center flex-wrap">
        {images.map((image, i) => (
          <img
            className={`cursor-pointer w-16 h-16 md:w-20 md:h-20 border-2 rounded-full object-cover transition-all duration-300 ${
              i === curSlide ? 'border-sky-500 ring-2 ring-sky-300' : 'border-gray-300 opacity-60 hover:opacity-100'
            }`}
            key={i}
            onClick={() => setCurSlide(i)}
            src={image}
            alt={`Thumbnail ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}