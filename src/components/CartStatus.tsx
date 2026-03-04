"use client";
import { useCart } from "@/context/CartContext";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function CartStatus() {
  const { cart } = useCart();
  
  return (
    <Link href="/cart" className="relative p-3 bg-gray-50 rounded-full hover:bg-blue-50 transition-all group">
      <ShoppingCart size={22} className="text-gray-700 group-hover:text-blue-600" />
      {cart && cart.length > 0 && (
        <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-bounce shadow-lg">
          {cart.length}
        </span>
      )}
    </Link>
  );
}