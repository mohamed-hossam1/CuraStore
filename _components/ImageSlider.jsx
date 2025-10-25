"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function ImageSlider({ images }) {
  images = images || [];

  const [curSlide, setCurSlide] = useState(0);

  const sliderRight = () => {
    setCurSlide((prev) => (prev + 1) % images.length);
  };

  const sliderLeft = () => {
    setCurSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (images.length === 0) return;
    
    const interval = setInterval(() => {
      sliderRight();
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

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

  if (images.length === 0) {
    return (
      <div className="mx-6 items-center relative">
        <div className="relative h-[420px] mb-6 rounded-2xl overflow-hidden bg-gray-200 flex items-center justify-center">
          <p className="text-gray-500">No images available</p>
        </div>
      </div>
    );
  }

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
            key={i}
            className="absolute top-0 left-0 w-full h-full transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(${100 * (i - curSlide)}%)`,
            }}
          >
            <Image
              fill
              className="object-contain rounded-2xl"
              src={image}
              alt={`Image ${i + 1}`}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      <div className="flex gap-3 items-center justify-center flex-wrap">
        {images.map((image, i) => (
          <Image
            key={i}
            width={80}
            height={80}
            className={`cursor-pointer w-16 h-16 md:w-20 md:h-20 border-2 rounded-full object-cover transition-all duration-300 ${
              i === curSlide
                ? "border-sky-500 ring-2 ring-sky-300"
                : "border-gray-300 opacity-60 hover:opacity-100"
            }`}
            onClick={() => setCurSlide(i)}
            src={image}
            alt={`Thumbnail ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}