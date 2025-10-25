"use client";

import React, { useState } from "react";
import ImageSlider from './ImageSlider';
import CardList from "./CardList";


export default function ProductShow({ product, relatedProducts }) {

  const [isFavorite, setIsFavorite] = useState(false);
  
  const {title, description, price, images, category_id} = product
  

  return (
    <main>
      <section className="flex justify-center items-center pb-24 min-h-screen">
        <div className="mx-4 sm:mx-8 lg:mx-16 xl:mx-20 max-w-7xl w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <div className="rounded-3xl border-2 py-5 border-gray-400/30">
              <ImageSlider images={images}/>
            </div>

            <div className="space-y-8 px-4 lg:px-0">
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="bg-sky-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    New Arrival
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                  {title}
                </h1>

                <p className="text-lg sm:text-xl leading-relaxed text-gray-700">
                  {description}
                </p>
              </div>

              <div className="text-3xl sm:text-4xl font-bold text-sky-600">
                <p>${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
              </div>

              <div className="space-y-6">
                <div className="flex flex-col space-y-4">
                  <button className="bg-sky-500 cursor-pointer hover:scale-[1.03] transition-transform duration-200 text-white px-8 py-4 rounded-full text-lg font-bold flex items-center justify-center shadow-lg hover:shadow-xl">
                    <i className="fa-solid fa-shopping-cart mr-3"></i>Add to Cart
                  </button>
                  <button
                    className={`border-2 border-gray-300 hover:scale-[1.03] cursor-pointer px-8 py-3 rounded-full text-lg font-semibold flex items-center justify-center transition-all duration-500 ${
                      isFavorite
                        ? "bg-red-500 text-white border-red-500"
                        : "bg-white/90 hover:bg-white"
                    }`}
                    onClick={()=>setIsFavorite(!isFavorite)}
                  >
                    <svg
                      className="w-6 h-6 mr-3"
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
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section  className="py-20 bg-sky-50/80">
        <div className="mx-auto px-6 w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              related  <span className="text-sky-600">products</span>
            </h2>
            <p className="text-xl">
              Essential accessories and complementary products
            </p>
          </div>

          <div className="mx-16 lg:mx-20 xl:mx-28 text-gray-600 relative mb-10 ">
            <div className="mb-16 last:mb-0">
              <div className="rounded-3xl shadow-inner bg-white/80 p-4 sm:p-6 border border-slate-100">
                <CardList products={relatedProducts} category_id={category_id} />
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}