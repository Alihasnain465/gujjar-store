"use client";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { Trash2, ShoppingBag, ArrowLeft } from "lucide-react";
import BillSummary from "@/components/BillSummary";

export default function CartPage() {
  const { cart, addToCart } = useCart(); // Yahan hum cart ka data le rahe hain

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 min-h-screen bg-white">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-12">
        <div>
          <h1 className="text-5xl font-black italic uppercase tracking-tighter text-black">
            Your <span className="text-blue-600">Cart</span>
          </h1>
          <p className="text-gray-400 font-bold mt-2 uppercase text-xs tracking-widest">
            {cart.length} Items Selected from Gujjar Store
          </p>
        </div>
        <Link href="/products" className="flex items-center gap-2 text-sm font-black hover:text-blue-600 transition-all uppercase tracking-tighter">
          <ArrowLeft size={18} /> Continue Shopping
        </Link>
      </div>

      {cart.length === 0 ? (
        /* --- Empty Cart State --- */
        <div className="text-center py-20 bg-gray-50 rounded-[3rem] border-2 border-dashed border-gray-200">
          <div className="flex justify-center mb-6">
            <ShoppingBag size={80} className="text-gray-200" />
          </div>
          <h2 className="text-2xl font-black text-gray-400 uppercase">Aapka Cart Khali Hai!</h2>
          <p className="text-gray-400 mb-8 mt-2 font-medium text-sm">Abhi shop par jayen aur behtreen products select karein.</p>
          <Link href="/products" className="bg-black text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl">
            Go to Shop
          </Link>
        </div>
      ) : (
        /* --- Cart Content Layout --- */
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Left: Items List */}
          <div className="lg:col-span-2 space-y-6">
            {cart.map((item: any, index: number) => (
              <div key={index} className="flex items-center gap-6 p-6 bg-white border border-gray-100 rounded-[2.5rem] hover:shadow-xl transition-all group">
                {/* Product Image Placeholder */}
                <div className="w-24 h-24 bg-gray-100 rounded-[1.5rem] flex items-center justify-center overflow-hidden">
                  <img src={item.image || "https://placehold.co/100"} alt={item.name} className="object-cover w-full h-full" />
                </div>

                {/* Info */}
                <div className="flex-1">
                  <h3 className="font-black text-xl text-gray-900 leading-tight uppercase tracking-tighter">{item.name}</h3>
                  <p className="text-blue-600 font-black text-lg">RS. {item.price.toLocaleString()}</p>
                </div>

                {/* Remove Button (For Now just an icon) */}
                <button className="p-4 bg-red-50 text-red-500 rounded-2xl hover:bg-red-500 hover:text-white transition-all">
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
          </div>

          {/* Right: Bill Section */}
          <div className="lg:col-span-1">
            <div className="sticky top-28">
               <BillSummary />
            </div>
          </div>

        </div>
      )}
    </div>
  );
}