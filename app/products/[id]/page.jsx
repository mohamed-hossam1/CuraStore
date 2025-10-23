import { getProductFromServer } from '@/lib/services/productService';
import React from 'react'
import { redirect } from "next/navigation";
import { notFound } from "next/navigation";
import ProductShow from '@/_components/ProductShow';

export default async function ProductPage({ params }) {
  const { id } = await params;
  let product
  try {
    product = await getProductFromServer(id);
  } catch (error) {
    redirect("/not-found");
  }

  console.log(product)
  return (
    <ProductShow product = {product}/>
  )
}
