import { getProductsByCategoryFromServer } from "../lib/services/productService";
import Slider from "../_components/Slider";
import CardList from "../_components/CardList";
import SubTitle from "../_components/SubTitle";
import { getCategoriesFromServer } from "@/lib/services/categoryService";

export const revalidate = 3600;


export default async function Home() {
  const categories = await getCategoriesFromServer();
  const categoriesWithProducts = await Promise.all(
    categories.map(async (category) => ({
      ...category,
      products: await getProductsByCategoryFromServer(category.id)
    }))
  );

  return (
    <div>
      <Slider />

      {categoriesWithProducts.map(({ id, name, products }) => (
        <div key={id}>
          <SubTitle
            title1="Grab the best deal on"
            title2={name}
            link={`/category/${id}`}
          />
          <div className="mx-16 lg:mx-20 xl:mx-28 text-gray-600 relative mb-10">
            <div className="mb-16 last:mb-0">
              <div className="rounded-3xl shadow-inner bg-white/80 p-4 sm:p-6 border border-slate-100">
                <CardList products={products} category_id={id} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
