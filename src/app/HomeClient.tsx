"use client";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useStore } from "../store/useStore";
import { useRouter, useSearchParams } from "next/navigation";

export default function HomeClient() {
  const search = useStore((s) => s.search);
  const category = useStore((s) => s.category);
  const price = useStore((s) => s.price);
  const setSearch = useStore((s) => s.setSearch);
  const setCategory = useStore((s) => s.setCategory);
  const setPrice = useStore((s) => s.setPrice);
  const router = useRouter();
  const params = useSearchParams();

  // On mount, sync Zustand state from URL
  useEffect(() => {
    const urlSearch = params.get("search") || "";
    const urlCategory = params.get("category") || "all";
    const urlPrice = params.get("price") ? Number(params.get("price")) : 1000;
    setSearch(urlSearch);
    setCategory(urlCategory);
    setPrice(urlPrice);
    // eslint-disable-next-line
  }, []);

  // When state changes, update URL
  useEffect(() => {
    const q = new URLSearchParams();
    if (search) q.set("search", search);
    if (category !== "all") q.set("category", category);
    if (price !== 1000) q.set("price", String(price));
    router.replace("/?" + q.toString());
    // eslint-disable-next-line
  }, [search, category, price]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1 bg-gray-50">
        <Sidebar />
        <section className="flex-1 p-6">
          <h1 className="text-2xl font-bold mb-6 text-green-700">Product Listing</h1>
          <ProductGrid />
        </section>
      </main>
      <Footer />
    </div>
  );
} 