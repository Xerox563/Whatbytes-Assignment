"use client";
import { ShoppingCart, User } from "lucide-react";
import { useStore } from "../store/useStore";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "../../public/logo.png";

export default function Header() {
  const cart = useStore((s) => s.cart);
  const setSearch = useStore((s) => s.setSearch);
  const search = useStore((s) => s.search);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);
  const router = useRouter();

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      setSearch(value);
    }, 400);
  }

  return (
    <header className="bg-blue-700 text-white flex items-center justify-between px-8 py-4">
      <div className="font-bold text-2xl">
        <Image src={logo} width={40} height={25} alt="logo" />
      </div>
      <div className="flex-1 flex justify-center">
        <input
          type="text"
          placeholder="Search for products..."
          className="w-full max-w-md px-4 py-2 rounded-l-md text-black focus:outline-none"
          defaultValue={search}
          onChange={handleSearchChange}
        />
        <button className="bg-blue-800 px-4 py-2 rounded-r-md">
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </button>
      </div>
      <div className="flex items-center gap-6">
        <button className="relative" onClick={() => router.push("/cart") }>
          <ShoppingCart size={28} />
          <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full px-1.5">{cart.reduce((sum, item) => sum + item.quantity, 0)}</span>
        </button>
        <User size={28} />
      </div>
    </header>
  );
} 