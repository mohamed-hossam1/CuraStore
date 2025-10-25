import ProductCardSkeleton from "./ProductCardSkeleton";

export default function CardListSkeleton() {
  return (
    <div className="relative">
      <div className="hidden md:flex items-center justify-center absolute -left-6 top-1/2 -translate-y-1/2 z-30 bg-gray-300 w-10 h-10 rounded-full animate-pulse"></div>
      
      <div className="hidden md:flex items-center justify-center absolute -right-6 top-1/2 -translate-y-1/2 z-30 bg-gray-300 w-10 h-10 rounded-full animate-pulse"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5">
        {[...Array(5)].map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}