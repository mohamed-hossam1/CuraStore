import React from 'react'

import LinkButton from "@/_components/LinkButton";
export default function SubTitle({title1, title2, link}) {
  return (
    <div className='flex justify-between mx-16 lg:mx-20 xl:mx-28 text-gray-600 relative mb-10'>
        <div>
            <h2 className='font-extrabold text-2xl md:text-3xl border-b-5 border-sky-500 pb-4'>{title1} <span className='text-sky-500/80'>{title2}</span> </h2>
        </div>
        <div>
            <LinkButton href={link} className='flex items-center group'>
                <span className='text-xl lg:text-2xl mr-3'>View All</span>
                <i className="fa-solid fa-angle-right text-2xl text-sky-500 group-hover:text-3xl transform-all duration-200"></i>
            </LinkButton>
        </div>
        <div className='border-b-3 border-gray-300  w-full absolute bottom-[1px] -z-10'></div>
    </div>
  )
}
