export default function SubTitleSkeleton() {
  return (
    <div className='flex justify-between mx-16 lg:mx-20 xl:mx-28 text-gray-600 relative mb-10'>
      <div>
        <div className='h-9 w-80 bg-gray-300 rounded animate-pulse'></div>
      </div>
      <div>
        <div className='h-8 w-28 bg-gray-300 rounded animate-pulse'></div>
      </div>
      <div className='border-b-3 border-gray-300 w-full absolute bottom-[1px] -z-10'></div>
    </div>
  );
}