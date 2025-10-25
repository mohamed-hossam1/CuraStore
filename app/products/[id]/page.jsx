import { getProductFromServer, getProductsByCategoryFromServer } from '@/lib/services/productService';
import React from 'react'
import { redirect } from "next/navigation";
import ProductShow from '@/_components/ProductShow';


export const revalidate = 3600;


export default async function ProductPage({ params }) {
  const { id } = await params;
  let product, relatedProducts;
  try {
    product = await getProductFromServer(id);
    
    if (product?.category_id) {
      const allCategoryProducts = await getProductsByCategoryFromServer(product.category_id);
      relatedProducts = allCategoryProducts.filter(p => p.id !== product.id);
    }
  } catch (error) {
    redirect("/not-found");
  }

  return (
    <ProductShow 
      product={product} 
      relatedProducts={relatedProducts || []} 
    />
  );


}