import React, { ReactNode } from 'react';

const CardDataStats = ({
  title,
  total,
  children,
}) => {
  return (
    <div className="rounded-xl py-6 px-7.5 shadow-xl  bg-[#24303F]">
      <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-gray-700">
        {children}
      </div>
      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-3xl font-bold text-white">
            {total}
          </h4>
          <span className="text-lg text-white/70">{title}</span>
        </div>
      </div>
    </div>
  );
};

export default CardDataStats;
