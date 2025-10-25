"use client";

import React, { useState } from "react";
import ImageSlider from './ImageSlider';
import CardList from "./CardList";
import {useGetProduct, getProductsByCategory} from "../hooks/useProducts"

export default function ProductShow({ product:initialProduct, allCategoryProducts }) {

  const [isFavorite, setIsFavorite] = useState(false);
  
  const { data: product } = useGetProduct(initialProduct.id, initialProduct);
  const { data: ProductsByCategory } = getProductsByCategory(initialProduct.category_id, allCategoryProducts);
  const { title, description, price, price_before, images, category_id } = product;

  

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
                <p>${price?.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
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


      {/* <section className="py-20 bg-sky-50/80">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              What Our <span className="text-sky-600">Customers Say</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <div className="bg-white sticky top-8 p-8 rounded-3xl border-2 border-gray-200">
                <div className="text-center mb-8">
                  <div className="text-6xl font-bold mb-2">4.9</div>
                  <div className="flex justify-center space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (<i key={i} className="fa-solid fa-star text-yellow-400 text-xl"></i>))}
                  </div>
                  <p className="font-medium">Based on 2,847 reviews</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-medium w-6">5★</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-3">
                      <div className="bg-yellow-500 h-3 rounded-full w-[78%]"></div>
                    </div>
                    <span className="text-sm w-12">78%</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-medium w-6">4★</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-3">
                      <div className="bg-yellow-500 h-3 rounded-full w-[15%]"></div>
                    </div>
                    <span className="text-sm w-12">15%</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-medium w-6">3★</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-3">
                      <div className="bg-yellow-500 h-3 rounded-full w-[5%]"></div>
                    </div>
                    <span className="text-sm w-12">5%</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-medium w-6">2★</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-3">
                      <div className="bg-yellow-500 h-3 rounded-full w-[1.5%]"></div>
                    </div>
                    <span className="text-sm w-12">1.5%</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-medium w-6">1★</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-3">
                      <div className="bg-yellow-500 h-3 rounded-full w-[0.5%]"></div>
                    </div>
                    <span className="text-sm w-12">0.5%</span>
                  </div>
                </div>

              </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white p-8 rounded-2xl border-2 border-gray-200">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div>
                      <h4 className="font-bold text-lg">Marcus Chen</h4>
                      <div className="flex items-center mt-1 space-x-1">
                        <i className="fa-solid fa-star text-yellow-400 text-sm"></i>
                        <i className="fa-solid fa-star text-yellow-400 text-sm"></i>
                        <i className="fa-solid fa-star text-yellow-400 text-sm"></i>
                        <i className="fa-solid fa-star text-yellow-400 text-sm"></i>
                        <i className="fa-solid fa-star text-yellow-400 text-sm"></i>
                        <span className="text-sm ml-2">5.0</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-xs font-semibold">
                      Verified Purchase
                    </span>
                    <p className="text-sm mt-1">3 months ago</p>
                  </div>
                </div>
                <p className="leading-relaxed text-lg mb-4">
                  "The DJI Mavic 4 Pro has revolutionized my aerial photography
                  work. The 8K video quality is absolutely stunning, and the
                  40-minute flight time means I can capture entire shoots
                  without battery anxiety. Best investment I've made for my
                  business."
                </p>
              </div>


              <div className="text-center pt-8">
                <button className="bg-sky-500 cursor-pointer border-2 border-sky-500 hover:bg-white hover:text-sky-600 hover:border-sky-600 transition-colors duration-200 text-white px-8 py-3 rounded-full font-semibold">
                  Load More Reviews
                </button>
              </div>
            </div>
          </div>
        </div>
      </section> */}

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
                <CardList products={ProductsByCategory} category_id={category_id} exceptProduct={product.id} />
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}