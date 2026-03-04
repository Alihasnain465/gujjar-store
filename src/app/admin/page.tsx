"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import DeleteProduct from "@/components/DeleteProduct";

export default function AdminDashboard() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState({ name: "", price: "" });

  // Data fetch karne ka function
  const fetchProducts = async () => {
    try {
      const res = await fetch("/api/products");
      if (res.ok) {
        const data = await res.json();
        setProducts(data);
      }
    } catch (e) {
      console.error("Data load nahi ho raha:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const startEdit = (p: any) => {
    setEditingId(p.id);
    setEditForm({ name: p.name, price: p.price });
  };

  // ✅ UPDATED: Quick Edit Handle Function
  const handleUpdate = async (id: string) => {
    try {
      const res = await fetch("/api/products", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          id, 
          name: editForm.name, 
          price: editForm.price // Backend par parseInt zaroori hai
        }),
      });

      if (res.ok) {
        setEditingId(null);
        await fetchProducts(); // List refresh
      } else {
        alert("Update fail ho gaya. API check karein.");
      }
    } catch (err) {
      console.error("Quick edit error:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex text-black">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r p-6 hidden md:block sticky top-0 h-screen">
        <h2 className="text-xl font-black mb-10 text-blue-600">GUJJAR ADMIN</h2>
        <nav className="space-y-4">
          <Link href="/admin" className="block p-3 bg-blue-50 text-blue-600 rounded-lg font-bold">Dashboard</Link>
          <Link href="/admin/add-product" className="block p-3 text-gray-600 hover:bg-gray-100 rounded-lg font-medium transition">Add Product</Link>
          <Link href="/" className="block p-3 text-red-500 font-medium hover:bg-red-50 rounded-lg mt-20 transition">Logout</Link>
        </nav>
      </div>

      <div className="flex-1 p-10 overflow-y-auto">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-black tracking-tight text-black">Welcome, Hafiz!</h1>
            <p className="text-gray-500 font-medium">Yahan se aap delete aur edit dono kar sakte hain.</p>
          </div>
          <Link href="/admin/add-product" className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-black transition-all shadow-lg">
            + New Product
          </Link>
        </header>

        <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-50 bg-gray-50/50 flex justify-between items-center">
            <h3 className="font-black text-lg uppercase tracking-wider">Inventory List</h3>
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">{products.length} Items</span>
          </div>
          
          <div className="divide-y divide-gray-50">
            {loading ? (
              <p className="p-10 text-center text-gray-400 animate-pulse font-bold">Checking Database...</p>
            ) : products.length === 0 ? (
              <p className="p-10 text-center text-gray-400 italic font-medium">Koi product nahi mili. Nayi add karein!</p>
            ) : (
              products.map((p) => (
                <div key={p.id} className="p-6 flex items-center justify-between hover:bg-gray-50/80 transition-all">
                  
                  {editingId === p.id ? (
                    <div className="flex flex-1 gap-4 items-center">
                      <input 
                        className="border-2 border-blue-600 p-2 rounded-lg font-bold flex-1 outline-none text-black"
                        value={editForm.name}
                        onChange={(e) => setEditForm({...editForm, name: e.target.value})}
                      />
                      <input 
                        type="number"
                        className="border-2 border-blue-600 p-2 rounded-lg font-bold w-32 outline-none text-black"
                        value={editForm.price}
                        onChange={(e) => setEditForm({...editForm, price: e.target.value})}
                      />
                      <button onClick={() => handleUpdate(p.id)} className="bg-green-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-green-700 transition">SAVE</button>
                      <button onClick={() => setEditingId(null)} className="text-gray-400 font-bold hover:text-red-500 transition">X</button>
                    </div>
                  ) : (
                    <>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-[10px] font-bold text-gray-400 border uppercase tracking-tighter text-center">No Img</div>
                        <div>
                          <p className="font-extrabold text-gray-900 text-lg">{p.name}</p>
                          <p className="text-blue-600 font-black">PKR {p.price}</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <button 
                          onClick={() => startEdit(p)}
                          className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-[10px] font-black hover:bg-blue-600 hover:text-white transition-all uppercase"
                        >
                          Quick Edit
                        </button>

                        <Link 
                          href={`/admin/edit-product/${p.id}`} 
                          className="bg-white border-2 border-orange-500 text-orange-500 px-4 py-2 rounded-full text-[10px] font-black hover:bg-orange-500 hover:text-white transition-all uppercase"
                        >
                          Full Edit
                        </Link>

                        <DeleteProduct id={String(p.id)} />
                      </div>
                    </>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}