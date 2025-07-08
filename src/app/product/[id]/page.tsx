"use client";

import { products } from "../../../data/products";
import { notFound } from "next/navigation";
import { Star } from "lucide-react";
import { useStore } from "../../../store/useStore";
import { useState } from "react";

export default function ProductDetail({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === Number(params.id));
  const addToCart = useStore((s) => s.addToCart);
  const [qty, setQty] = useState(1);
  const [imgIdx, setImgIdx] = useState(0);

  if (!product) return notFound();

  return (
    <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 p-8">
      {/* Image Carousel */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="relative w-80 h-80 mb-4">
          <img src={product.images[imgIdx]} alt={product.title} className="w-full h-full object-contain rounded-xl bg-white shadow" />
          {product.images.length > 1 && (
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
              {product.images.map((_, i) => (
                <button
                  key={i}
                  className={`w-3 h-3 rounded-full ${i === imgIdx ? "bg-blue-700" : "bg-gray-300"}`}
                  onClick={() => setImgIdx(i)}
                  aria-label={`Show image ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      {/* Details Section */}
      <div className="flex-1 flex flex-col gap-4">
        <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
        <div className="text-blue-700 font-bold text-2xl mb-2">${product.price}</div>
        <div className="flex items-center mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={20} className={i < Math.round(product.rating) ? "fill-yellow-400 stroke-yellow-400" : "stroke-gray-300"} />
          ))}
        </div>
        <div className="mb-2 text-gray-600">Category: {product.category}</div>
        <p className="mb-4 text-gray-700">{product.description}</p>
        <div className="flex items-center gap-2 mb-4">
          <span>Qty:</span>
          <input type="number" min={1} value={qty} onChange={e => setQty(Number(e.target.value))} className="w-16 px-2 py-1 border rounded" />
        </div>
        <button
          className="bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-800 transition w-full md:w-auto"
          onClick={() => addToCart(product, qty)}
        >
          Add to Cart
        </button>
        {/* Reviews Section */}
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-2">Reviews</h2>
          {product.reviews.length === 0 ? (
            <div className="text-gray-500">No reviews yet.</div>
          ) : (
            <div className="flex flex-col gap-4">
              {product.reviews.map((review, i) => (
                <div key={i} className="bg-gray-100 rounded p-3">
                  <div className="font-semibold">{review.name}</div>
                  <div className="flex items-center gap-1 mb-1">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} size={14} className={j < review.rating ? "fill-yellow-400 stroke-yellow-400" : "stroke-gray-300"} />
                    ))}
                  </div>
                  <div className="text-gray-700 text-sm">{review.comment}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 