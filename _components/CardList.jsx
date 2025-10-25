"use client";

import React, { useRef } from "react";
import { AlertCircle, MoveLeft, MoveRight, Package } from "lucide-react";
import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import {getProductsByCategory} from "../hooks/useProducts"

function NextArrow({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="hidden md:flex items-center justify-center absolute -right-6 top-1/2 -translate-y-1/2 z-30 bg-slate-800 hover:bg-slate-950 text-white w-10 h-10 rounded-full cursor-pointer shadow-lg transition"
    >
      <MoveRight className="text-lg" />
    </div>
  );
}

function PrevArrow({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="hidden md:flex items-center justify-center absolute -left-6 top-1/2 -translate-y-1/2 z-30 bg-slate-800 hover:bg-slate-950 text-white w-10 h-10 rounded-full cursor-pointer shadow-lg transition"
    >
      <MoveLeft className="text-lg" />
    </div>
  );
}

export default function CardList({ products, category_id }) {
  const [isLoading, isError] = [false, false];
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const {data} = getProductsByCategory(category_id, products);


  


  if (!data || data.length === 0) {
    return (
      <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-20 xl:mx-28 mb-20">
        <div className="flex flex-col justify-center items-center py-16 px-6">
          <div className="bg-gray-100 rounded-full p-6 mb-6">
            <Package className="w-16 h-16 text-gray-400" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 text-center">
            There are no Products yet
          </h3>
          <p className="text-gray-500 text-center">
            Products will be added soon
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="">
      <div ref={prevRef}>
        <PrevArrow />
      </div>
      <div ref={nextRef}>
        <NextArrow />
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        loop={true}
        slidesPerView={5}
        spaceBetween={20}
        centeredSlides={false}
        breakpoints={{
          1700: { slidesPerView: 5 },
          1400: { slidesPerView: 4 },
          1100: { slidesPerView: 3 },
          680: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
      >
        {data.map((product) => (
          <SwiperSlide  key={product.id}>
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              description={product.description}
              price_before={product.price_before}
              price={product.price}
              stock={product.stock}
              image_cover={product.image_cover}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
