"use client";
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext<any>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<any[]>([]);

  // 1. Add to Cart Function
  const addToCart = (product: any) => {
    setCart((prev) => [...prev, product]);
    // Alert hata kar aap toast bhi laga sakte hain baad mein
    alert(`${product.name} cart mein add ho gaya!`);
  };

  // ✅ 2. Delete/Remove Function (Jo aapne manga tha)
  const removeFromCart = (id: any) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // ✅ 3. Clear Cart (Jab order complete ho jaye)
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);