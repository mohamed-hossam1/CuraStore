"use client";

import Link from 'next/link'
import React, { useState } from 'react'
import { ShoppingCart, User, Heart, Search} from 'lucide-react';
import SearchResults from './SearchResults';
import { useGetProducts } from '../hooks/useProducts';

export default function Navbar({initialData}) {
  const [searchQuery, setSearchQuery] = useState("");
  
  const isAuthenticated = false;
  const cartItemsCount = 999;

  const {data} = useGetProducts(initialData)
  const allProducts = data || []
  console.log(allProducts)

  const filteredProducts = allProducts.filter((p) =>{
    return p.title.toLowerCase().includes(searchQuery.toLowerCase())
    }
  );

  return (
    <div className="relative">
      <nav className="px-12 lg:px-20 xl:px-28 flex justify-between py-5 items-center bg-white text-gray-600 shadow-sm">
        <Link href="/" className="font-extrabold text-3xl text-sky-500 hover:text-sky-700 transform duration-300">
          MegaMart
        </Link>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="relative grow-1 min-w-44 mx-10 hidden sm:block"
        >
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-5 py-3 bg-sky-100 text-xl w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
          />
          <Search size={28} className="absolute top-3 right-4 text-sky-500" />
        </form>

        <div className="flex items-center gap-4">
          <Link href={isAuthenticated ? "/profile" : "/auth"} className="flex items-center hover:text-sky-500 transform duration-300">
            <User size={35} className="text-sky-500" />
            <span className="font-bold pl-2 hidden lg:inline">
              {isAuthenticated ? "Profile" : "Sign In"}
            </span>
          </Link>
          {
            isAuthenticated?
            <>
            <Link href="/cart" className="flex items-center hover:text-sky-500  pl-2 relative hover:scale-110 transform duration-300">
              <ShoppingCart size={35} className="text-sky-500" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full text-xs flex items-center justify-center font-bold">
                  {cartItemsCount}
                </span>
              )}
            </Link>

            <Link href="/wishlist" className="flex items-center hover:text-sky-500  pl-2 relative hover:scale-110 transform duration-300">
              <Heart size={35} className="text-sky-500" />
            </Link>
            </>
          :""
          }
        </div>
      </nav>

      {searchQuery && (
        <div className="absolute top-full left-0 right-0 z-50 px-12 lg:px-20 xl:px-28">
          <SearchResults products={filteredProducts} />
        </div>
      )}
    </div>
  );
}
