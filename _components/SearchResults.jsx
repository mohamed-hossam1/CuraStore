"use client";

import Link from "next/link";

export default function SearchResults({ products }) {
  if (!products || products.length === 0) {
    return (
      <div className="p-6 text-center text-gray-500 bg-white ">
        No products found.
      </div>
    );
  }



  return (
    <div className="bg-white rounded-xl shadow-lg mt-2 max-h-[500px] overflow-y-auto">
      {products.map((product) => (
        <Link
          href={`/products/${product.id}`}
          key={product.id}
          className="flex items-center gap-4 px-4 py-3 hover:bg-sky-50 transition-colors border-b last:border-none"
        >
          <img
            src={product.image_cover}
            alt={product.title}
            className="w-16 h-16 object-cover rounded-lg border"
          />
          <div className="flex flex-col">
            <span className="font-semibold text-gray-800">
              {product.title}
            </span>

            <div className="flex items-center gap-2">
              <span className="text-sky-600 font-bold">
                ${product.price.toFixed(2)}
              </span>
              {product.price_before && (
                <span className="text-gray-400 line-through text-sm">
                  ${product.price_before.toFixed(2)}
                </span>
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
