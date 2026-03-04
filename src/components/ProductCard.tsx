"use client";
import Link from "next/link";
import { ShoppingCart, Eye } from "lucide-react"; // Eye icon add kiya
import { useCart } from "@/context/CartContext";

export default function ProductCard({ data }: { data: any }) {
  const { addToCart } = useCart();

  if (!data) return null;

  return (
    <div className="group relative">
      <div className="border rounded-[2rem] overflow-hidden shadow-sm bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-gray-100">
        
        {/* 📸 Image Section */}
        <Link href={`/products/${data.id}`}>
          <div className="h-64 bg-gray-50 overflow-hidden relative cursor-pointer">
            <img 
              src={data.image || "https://placehold.co/400"} 
              alt={data.name || "Product"}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Category Tag */}
            {data.category && (
              <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">
                {data.category}
              </span>
            )}
          </div>
        </Link>

        {/* 📝 Details Section */}
        <div className="p-6">
          <Link href={`/products/${data.id}`}>
            <h3 className="font-black text-xl text-black truncate group-hover:text-blue-600 transition-colors cursor-pointer">
              {data.name}
            </h3>
          </Link>
          
          <div className="flex items-center justify-between mt-3">
            <p className="text-blue-600 font-black text-lg">
              RS. {data.price?.toLocaleString()}
            </p>
          </div>

          {/* ✅ Buttons Section: Details + Add to Cart */}
          <div className="flex gap-2 mt-5">
            {/* View Details Button */}
            <Link 
              href={`/products/${data.id}`}
              className="flex-1 bg-gray-100 text-gray-700 py-4 rounded-2xl font-black text-[10px] flex items-center justify-center gap-2 hover:bg-gray-200 transition-all uppercase tracking-tighter"
            >
              <Eye size={14} />
              Details
            </Link>

            {/* Add to Cart Button */}
            <button 
              onClick={(e) => {
                e.preventDefault();
                addToCart(data);
              }}
              className="flex-[2] bg-black text-white py-4 rounded-2xl font-black text-[10px] flex items-center justify-center gap-2 hover:bg-blue-600 transition-all active:scale-95 shadow-lg shadow-gray-200 uppercase tracking-tighter"
            >
              <ShoppingCart size={14} />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}