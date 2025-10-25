import { getProductFromServer, getProductsByCategoryFromServer } from '@/lib/services/productService';
import React from 'react'
import { redirect } from "next/navigation";
import ProductShow from '@/_components/ProductShow';


export const revalidate = 3600;


export default async function ProductPage({ params }) {
  const { id } = await params;
  let product, allCategoryProducts;
  try {
    product = await getProductFromServer(id);
    
    if (product?.category_id) {
      allCategoryProducts = await getProductsByCategoryFromServer(product.category_id);
    }

  } catch (error) {
    redirect("/not-found");
  }

  console.log(product)

  return (
    <ProductShow 
      product={product} 
      allCategoryProducts={allCategoryProducts || []} 
    />
  );


}