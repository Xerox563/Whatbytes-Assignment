"use client";

import { products } from "../data/products";
import { Star } from "lucide-react";
import { useStore } from "../store/useStore";
import Link from "next/link";
import Image from "next/image";

export default function ProductGrid() {
  const search = useStore((s) => s.search).toLowerCase();
  const category = useStore((s) => s.category);
  const price = useStore((s) => s.price);
  const addToCart = useStore((s) => s.addToCart);

  const filtered = products.filter((p) => {
    const matchesCategory =
      category === "all" || p.category.toLowerCase() === category;
    const matchesPrice = p.price <= price;
    const matchesSearch =
      p.title.toLowerCase().includes(search) ||
      p.description.toLowerCase().includes(search);
    return matchesCategory && matchesPrice && matchesSearch;
  });

  if (filtered.length === 0) {
    return (
      <div className="text-center text-gray-500 py-16 w-full">
        No products found.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filtered.map((product) => {
        const isRunningShoes = product.title === "Running Shoes";
        return (
          <div
            key={product.id}
            className={`bg-white rounded-xl shadow p-4 flex flex-col items-center ${
              isRunningShoes ? "border-2 border-green-600" : ""
            }`}
          >
            <Link
              href={`/product/${product.id}`}
              className="w-full flex flex-col items-center group"
              tabIndex={-1}
            >
              <Image
                src={product.image}
                alt={product.title}
                width={128}
                height={128}
                className="w-32 h-32 object-contain mb-4 group-hover:scale-105 transition"
              />
              <div
                className={`font-semibold text-lg mb-1 group-hover:text-blue-700 transition ${
                  isRunningShoes ? "text-green-600" : ""
                }`}
              >
                {product.title}
              </div>
              <div className="text-blue-700 font-bold mb-1">
                ${product.price}
              </div>
              <div className="flex items-center mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={
                      i < Math.round(product.rating)
                        ? "fill-yellow-400 stroke-yellow-400"
                        : "stroke-gray-300"
                    }
                  />
                ))}
              </div>
            </Link>
            <button
              className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition w-full mt-auto"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
}
