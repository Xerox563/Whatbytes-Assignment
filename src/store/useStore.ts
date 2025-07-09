import { create } from "zustand";
import { Product } from "../data/products";

interface CartItem {
  product: Product;
  quantity: number;
}

interface StoreState {
  search: string;
  category: string;
  price: number;
  cart: CartItem[];
  setSearch: (search: string) => void;
  setCategory: (category: string) => void;
  setPrice: (price: number) => void;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: number) => void;
  updateCartQuantity: (productId: number, quantity: number) => void;
}

function getInitialCart(): CartItem[] {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("cart");
    if (stored) return JSON.parse(stored);
  }
  return [];
}

export const useStore = create<StoreState>((set, get) => ({
  search: "",
  category: "all",
  price: 1000,
  cart: getInitialCart(),
  setSearch: (search) => set({ search }),
  setCategory: (category) => set({ category }),
  setPrice: (price) => set({ price }),
  addToCart: (product, quantity = 1) => {
    const cart = get().cart;
    const existing = cart.find((item) => item.product.id === product.id);
    if (existing) {
      set({
        cart: cart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        ),
      });
    } else {
      set({ cart: [...cart, { product, quantity }] });
    }
  },
  removeFromCart: (productId) => {
    set({ cart: get().cart.filter((item) => item.product.id !== productId) });
  },
  updateCartQuantity: (productId, quantity) => {
    set({
      cart: get().cart.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      ),
    });
  },
}));

// Persist cart to localStorage (outside the create function)
if (typeof window !== "undefined") {
  useStore.subscribe((state) => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  });
}
