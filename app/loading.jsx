import CardListSkeleton from "@/_components/skeleton/CardListSkeleton";
import SubTitleSkeleton from "@/_components/skeleton/SubTitleSkeleton";
import Slider from "@/_components/Slider";
import React from "react";

export default function loading() {
  return (
    <>
      <Slider />
      <div className="min-h-screen bg-gray-50 py-8">
        {[...Array(3)].map((_, index) => (
          <div key={index}>
            <SubTitleSkeleton />
            <div className="mx-16 lg:mx-20 xl:mx-28 text-gray-600 relative mb-10">
              <div className="mb-16 last:mb-0">
                <div className="rounded-3xl shadow-inner bg-white/80 p-4 sm:p-6 border border-slate-100">
                  <CardListSkeleton />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
