"use client"
import LinkButton from "@/_components/LinkButton";
import React, { useEffect, useState } from 'react'
import { ArrowRight, ArrowLeft } from 'lucide-react';

export default function Slider() {
  const slides = [
    {
      bgcolor: "#212844",
      bgcolor2: "#3d4771a9",
      buColor: "#d3daf9",
      text: "SMART WEARABLE",
      text2: "UP to 80% OFF",
      buText: "Smart Watches",
      img: "https://i.postimg.cc/0Q1gyWD7/image.png",
      category: "68e93cbce2507605cbba84d2"
    },
    {
      bgcolor: "#212844",
      bgcolor2: "#3d4771a9",
      buColor: "#d3daf9",
      text: "SMART WEARABLE",
      text2: "UP to 80% OFF",
      buText: "Smart Watches",
      img: "https://i.postimg.cc/0Q1gyWD7/image.png",
      category: "68e93cbce2507605cbba84d2"
    },
    {
      bgcolor: "#212844",
      bgcolor2: "#3d4771a9",
      buColor: "#d3daf9",
      text: "SMART WEARABLE",
      text2: "UP to 80% OFF",
      buText: "Smart Watches",
      img: "https://i.postimg.cc/0Q1gyWD7/image.png",
      category: "68e93cbce2507605cbba84d2"
    },
  ];

  const [curSlide, setCurSlide] = useState(0);

  const sliderRight = () => {
    setCurSlide((prev) => (prev + 1) % slides.length);
  };

  const sliderLeft = () => {
    setCurSlide((prev) => (prev - 1 + slides.length) % slides.length);
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
      className="mx-16 lg:mx-20 xl:mx-28 items-center h-[500px] relative mb-40 select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <button
        className="w-24 h-24 rounded-full bg-sky-100 absolute top-1/2 -translate-y-1/2 -left-12 items-center justify-center transform duration-200 border-8 border-white cursor-pointer z-30 hidden sm:flex group"
        onClick={sliderLeft}
      >
      <ArrowLeft className="text-sky-500 group-hover:scale-130 transform-all duration-300" size={37}/>
      </button>

      <button
        className="w-24 h-24 rounded-full bg-sky-100 absolute top-1/2 -translate-y-1/2 -right-12 items-center justify-center transform duration-200 border-8 border-white cursor-pointer z-30 hidden sm:flex group"
        onClick={sliderRight}
      >
        <ArrowRight className="text-sky-500 group-hover:scale-130 transform-all duration-300" size={37}/>

        <i className="fa-solid fa-angle-right text-2xl text-sky-500 group-hover:scale-130 transform-all duration-300"></i>
      </button>

      <div className="h-full pt-4 relative rounded-2xl transform-all duration-200 overflow-hidden">
        {slides.map((slide, i) => (
          <div
            className={`absolute w-full h-full pb-10 rounded-2xl overflow-hidden z-10 transition-transform duration-700 ease-in-out`}
            key={i}
            style={{
              backgroundColor: slide.bgcolor,
              transform: `translateX(${100 * (i - curSlide)}%)`,
            }}
          >
            <div
              className={`absolute w-[750px] h-[750px] rounded-full -top-[115%] -right-7 -z-10`}
              style={{ backgroundColor: slide.bgcolor2 }}
            ></div>
            <div
              className={`absolute w-[800px] h-[800px] rounded-full -top-[116%] -right-12 bg-[#ffffff00] border-4 -z-10`}
              style={{ borderColor: slide.bgcolor2 }}
            ></div>

            <div className="flex justify-between h-full items-center text-white ">
              <div className="lg:flex flex-col m-32 gap-8 hidden mt-40">
                <span className="text-5xl xl:text-7xl font-extrabold">
                  {slide.text}
                </span>
                <span className="text-2xl xl:text-3xl font-bold">
                  {slide.text2}
                </span>
                <LinkButton
                  href={`/category/${slide.category}`}
                  className="hidden lg:block w-60 text-center relative text-2xl border-2 border-black rounded-xl px-5 py-3 font-bold text-black overflow-hidden lg:mb-10 z-[1] transition-all duration-500 ease-in-out hover:text-white bg-white before:content-[''] before:absolute before:left-0 before:top-0 before:w-1/2 before:h-full before:bg-black before:-translate-y-full before:transition-all before:duration-500 before:ease-in-out hover:before:translate-y-0 before:z-[-1] after:content-[''] after:absolute after:left-[50%] after:top-0 after:w-1/2 after:h-full after:bg-black after:translate-y-full after:transition-all after:duration-500 after:ease-in-out after:delay-[300ms] hover:after:translate-y-0 after:z-[-1]"
                >
                  {slide.buText}
                </LinkButton>
              </div>

              <div className="w-full flex flex-col items-center gap-6 lg:w-2/5 lg:mr-32 ">
                <img
                  src={slide.img}
                  alt={slide.text}
                  className="min-w-[250px] max-w-[290px] lg:max-w-fit lg:min-w-[300px] mx-auto"
                />
                <LinkButton
                  href={`/category/${slide.category}`}
                  className="lg:hidden relative text-2xl border-2 border-black rounded-xl px-5 py-3 font-bold text-black overflow-hidden lg:mb-10 z-[1] transition-all duration-500 ease-in-out hover:text-white bg-white before:content-[''] before:absolute before:left-0 before:top-0 before:w-1/2 before:h-full before:bg-black before:-translate-y-full before:transition-all before:duration-500 before:ease-in-out hover:before:translate-y-0 before:z-[-1] after:content-[''] after:absolute after:left-[50%] after:top-0 after:w-1/2 after:h-full after:bg-black after:translate-y-full after:transition-all after:duration-500 after:ease-in-out after:delay-[300ms] hover:after:translate-y-0 after:z-[-1]"
                >
                  {slide.buText}
                </LinkButton>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="dots absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3.5 z-40">
        {slides.map((_, i) => (
          <button
            className={`cursor-pointer min-w-5 h-5 border-2 rounded-full ${
              i === curSlide ? 'bg-sky-500' : 'bg-sky-100'
            }`}
            key={i}
            onClick={() => setCurSlide(i)}
          ></button>
        ))}
      </div>
    </section>
  );
}
