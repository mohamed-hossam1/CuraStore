export default function ProductCardSkeleton() {
  return (
    <div className="w-full bg-white rounded-2xl overflow-hidden shadow-lg">
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
  );
}
