"use client";

import LinkButton from "@/_components/LinkButton";
import Image from "next/image";

export default function SearchResults({ products, setSearchQuery }) {
  if (!products || products.length === 0) {
    return (
      <div className="p-6 text-center text-gray-500 bg-white rounded-xl shadow-lg mt-2">
        No products found.
      </div>
    );
  }


  return (
    <div className="bg-white rounded-xl shadow-lg mt-2 max-h-[500px] overflow-y-auto z-50">
      {products.map((product) => (<>
      
        <LinkButton
          onClick={()=>setSearchQuery("")}
          href={`/products/${product.id}`}
          key={product.id}
          className="flex items-center gap-4 px-4 py-3 hover:bg-sky-50 transition-colors border-b  w-full relative"
        >

          <div className="relative w-16 h-16 flex-shrink-0">
            <Image
              src={product.image_cover || '/placeholder.png'}
              alt={product.title}
              fill
              sizes="64px"
              className="object-cover rounded-lg border"
              onError={(e) => {
                e.target.src = '/placeholder.png';
              }}
            />
          </div>

          <div className="flex flex-col">
            <span className="font-semibold text-gray-800 line-clamp-1">
              {product.title}
            </span>

            <div className="flex items-center gap-2">
              <span className="text-sky-600 font-bold">
                ${product.price.toFixed(2)}
              </span>
              {product.price_before && product.price_before > product.price && (
                <span className="text-gray-400 line-through text-sm">
                  ${product.price_before.toFixed(2)}
                </span>
              )}
            </div>
          </div>
        </LinkButton>
      
      </>
      ))}
    </div>
  );
}