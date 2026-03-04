"use client";
import { useCart } from "@/context/CartContext";

export default function BillSummary() {
  const { cart } = useCart();

  // 🧮 Bill ki calculation
  const subtotal = cart.reduce((total: number, item: any) => total + item.price, 0);
  const delivery = subtotal > 0 ? 250 : 0; // Agar cart khali nahi toh 250 delivery
  const totalBill = subtotal + delivery;

  return (
    <div className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-200 shadow-sm">
      <h2 className="text-2xl font-black mb-6 italic uppercase tracking-tighter">
        Order <span className="text-blue-600">Summary</span>
      </h2>

      <div className="space-y-4">
        {/* Items Total */}
        <div className="flex justify-between text-gray-600 font-bold">
          <span>Items ({cart.length}):</span>
          <span>RS. {subtotal.toLocaleString()}</span>
        </div>

        {/* Delivery Charges */}
        <div className="flex justify-between text-gray-600 font-bold">
          <span>Delivery Charges:</span>
          <span>RS. {delivery}</span>
        </div>

        <hr className="border-gray-200 my-4" />

        {/* ✅ Final Total Bill */}
        <div className="flex justify-between text-black font-black text-2xl tracking-tighter">
          <span>Total Bill:</span>
          <span className="text-blue-600 font-black">
            RS. {totalBill.toLocaleString()}
          </span>
        </div>
      </div>

      {/* Checkout Button */}
      <button 
        disabled={cart.length === 0}
        className="w-full mt-8 bg-black text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl active:scale-95 disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        Proceed to Checkout
      </button>

      <p className="text-[10px] text-gray-400 mt-4 text-center font-bold uppercase tracking-widest">
        Official Bill of Gujjar Store
      </p>
    </div>
  );
}