"use client";

import React from "react";
import { AlertCircle, Package } from "lucide-react";
import ProductCard from "./ProductCard";
import { useGetProducts } from '../hooks/useProducts';

export default function CardList({initialData}) {
  const {data, isLoading, isError, error} = useGetProducts(initialData)
  const Products = data || null;

  if (isLoading) {
    return (
      <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-20 xl:mx-28 mb-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 md:gap-8 lg:gap-10">
          {[...Array(7)].map((_, i) => (
            <div
              className="w-70 bg-white rounded-2xl overflow-hidden shadow-lg"
              key={i}
            >
              <div className="relative h-64 bg-gray-200 animate-pulse">
                <div className="absolute top-4 left-4 h-6 w-16 bg-gray-300 rounded-full"></div>
                <div className="absolute top-4 right-4 h-10 w-10 bg-gray-300 rounded-full"></div>
              </div>

              <div className="p-5 h-60 flex flex-col justify-around space-y-4">
                <div className="flex items-center justify-between">
                  <div className="h-8 w-1/3 bg-gray-300 rounded animate-pulse"></div>
                  <div className="h-4 w-1/4 bg-gray-300 rounded animate-pulse"></div>
                </div>

                <div className="h-6 w-4/5 bg-gray-200 rounded animate-pulse"></div>

                <div className="space-y-2">
                  <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse"></div>
                </div>

                <div className="h-12 w-full bg-gray-300 rounded-xl animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-20 xl:mx-28 mb-20">
        <div className="flex flex-col justify-center items-center py-16 px-6">
          <div className="bg-red-50 rounded-full p-6 mb-6">
            <AlertCircle className="w-16 h-16 text-red-500" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 text-center">
            There was an error loading the Products.
          </h3>
          <p className="text-gray-600 text-center mb-6 max-w-md">
            {error?.message ||
              "Sorry, an unexpected error occurred. Please try again later."}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
          >
            Try again
          </button>
        </div>
      </div>
    );
  }

  if (!Products || Products.length === 0) {
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
    <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-20 xl:mx-28 mb-20">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center justify-center justify-items-center gap-6">
        {data.map((product) => (
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
        ))}
      </div>
    </div>
  );
}
