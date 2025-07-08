"use client";

import { useStore } from "../store/useStore";

export default function Sidebar() {
  const category = useStore((s) => s.category);
  const setCategory = useStore((s) => s.setCategory);
  const price = useStore((s) => s.price);
  const setPrice = useStore((s) => s.setPrice);

  return (
    <aside className="w-64 bg-white rounded-xl shadow p-6 m-4 flex flex-col gap-8 h-fit">
      <div>
        <h2 className="font-bold text-lg mb-4 text-purple-600">Filters</h2>
        <div className="mb-6">
          <div className="font-semibold mb-2 text-purple-600">Category</div>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2 text-purple-600">
              <input
                type="radio"
                name="category"
                value="all"
                checked={category === "all"}
                onChange={() => setCategory("all")}
                className="accent-purple-600"
              />{" "}
              All
            </label>
            <label className="flex items-center gap-2 text-purple-600">
              <input
                type="radio"
                name="category"
                value="electronics"
                checked={category === "electronics"}
                onChange={() => setCategory("electronics")}
                className="accent-purple-600"
              />{" "}
              Electronics
            </label>
            <label className="flex items-center gap-2 text-purple-600">
              <input
                type="radio"
                name="category"
                value="clothing"
                checked={category === "clothing"}
                onChange={() => setCategory("clothing")}
                className="accent-purple-600"
              />{" "}
              Clothing
            </label>
            <label className="flex items-center gap-2 text-purple-600">
              <input
                type="radio"
                name="category"
                value="home"
                checked={category === "home"}
                onChange={() => setCategory("home")}
                className="accent-purple-600"
              />{" "}
              Home
            </label>
          </div>
        </div>
        <div className="mb-6">
          <div className="font-semibold mb-2 text-purple-600">Price</div>
          <input
            type="range"
            min="0"
            max="1000"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="w-full accent-purple-400"
          />
          <div className="flex justify-between text-xs mt-1 text-purple-600">
            <span>$0</span>
            <span>${price}</span>
          </div>
        </div>
        {/* Optional: Brand filter can be added here */}
      </div>
    </aside>
  );
}
