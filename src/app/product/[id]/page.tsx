import { products } from "../../../data/products";
import { notFound } from "next/navigation";
import ProductDetailClient from "./ProductDetailClient";

export default function Page({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === Number(params.id));
  if (!product) return notFound();
  return <ProductDetailClient product={product} />;
} 