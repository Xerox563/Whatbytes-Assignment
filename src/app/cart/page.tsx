"use client";

import { useStore } from "../../store/useStore";

export default function CartPage() {
  const cart = useStore((s) => s.cart);
  const updateCartQuantity = useStore((s) => s.updateCartQuantity);
  const removeFromCart = useStore((s) => s.removeFromCart);

  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Cart</h1>
      {cart.length === 0 ? (
        <div className="text-gray-500 text-center py-16">Your cart is empty.</div>
      ) : (
        <div className="flex flex-col gap-6">
          {cart.map((item) => (
            <div key={item.product.id} className="flex items-center gap-6 bg-white rounded-xl shadow p-4">
              <img src={item.product.image} alt={item.product.title} className="w-20 h-20 object-contain rounded" />
              <div className="flex-1">
                <div className="font-semibold text-lg">{item.product.title}</div>
                <div className="text-gray-600">${item.product.price} x </div>
                <input
                  type="number"
                  min={1}
                  value={item.quantity}
                  onChange={e => updateCartQuantity(item.product.id, Number(e.target.value))}
                  className="w-16 px-2 py-1 border rounded ml-2"
                />
              </div>
              <div className="font-bold text-blue-700">${item.product.price * item.quantity}</div>
              <button
                className="text-red-500 hover:underline ml-4"
                onClick={() => removeFromCart(item.product.id)}
              >
                Remove
              </button>
            </div>
          ))}
          <div className="text-right mt-8 text-xl font-bold">
            Subtotal: <span className="text-blue-700">${subtotal}</span>
          </div>
        </div>
      )}
    </div>
  );
} 