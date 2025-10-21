"use client";

import { useState } from "react";
import Link from "next/link";

export default function ProductCard({ id,  image_cover, title, description, price_before, price, stock}) {
  const [isFavorite, setIsFavorite] = useState(false);

  const favorite = () => {
    setIsFavorite((prev) => !prev);
  };

  console.log(stock,price_before)

  return (
    <div className="min-w-66 w-full relative group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-gray-200/70 z-50">
      <div className="absolute w-full top-1/2 p-4 transition-all duration-500 group-hover:-translate-y-20 opacity-0 group-hover:opacity-100 z-40">
        <Link
          href={`/products/${id}`}
          className="block text-center w-full bg-white/90 text-gray-800 font-medium py-2 rounded-lg hover:bg-white cursor-pointer transition-colors"
        >
          Quick View
        </Link>
      </div>

      <Link href={`/products/${id}`} className="relative h-64 block">
        <div className="h-full w-full bg-gradient-to-br from-gray-50 to-gray-100 flex justify-center items-center">
          <img
            src={image_cover}
            alt={title}
            className="transition-all duration-700 w-60 h-auto group-hover:scale-110"
          />
        </div>

        {stock > 10 && (
          <span className="absolute top-4 left-4 bg-gradient-to-r from-sky-500 to-sky-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
            Hot
          </span>
        )}

        <button
          onClick={favorite}
          className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer ${
            isFavorite
              ? "bg-red-500 text-white scale-110"
              : "bg-white/90 hover:bg-white hover:scale-110"
          }`}
        >
          <svg
            className="w-5 h-5"
            fill={isFavorite ? "currentColor" : "none"}
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </Link>

      <div className="p-5 h-60 flex flex-col justify-around">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-gray-800">
              ${" "}
              {price.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>

            {price_before && (
              <span className="text-gray-400 line-through text-sm">
                ${" "}
                {price_before.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </span>
            )}
          </div>

          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-4 h-4 text-yellow-400 fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>

        <h3 className="text-lg font-bold text-gray-800 line-clamp-1 transition-colors">
          {title}
        </h3>

        <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
          {description}
        </p>

        <button className="w-full bg-neutral-300 text-black font-bold py-3 rounded-xl transition-all duration-500 transform hover:scale-105 shadow-lg hover:bg-neutral-950 hover:text-white cursor-pointer">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
