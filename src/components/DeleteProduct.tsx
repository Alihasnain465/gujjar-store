"use client";

import { useRouter } from "next/navigation";

export default function DeleteProduct({ id }: { id: string }) {
  const router = useRouter();

  const handleDelete = async () => {
    if (confirm("Hafiz bhai, kya aap waqai ye product delete karna chahte hain?")) {
      try {
        // ✅ Delete Request
        const res = await fetch(`/api/products?id=${id}`, {
          method: "DELETE",
        });

        if (res.ok) {
          alert("Product delete ho gayi!");
          
          // ✅ 1. Pehle router refresh karein (Server-side update ke liye)
          router.refresh(); 

          // ✅ 2. Phir window reload karein (Taki Dashboard ki products list refresh ho jaye)
          window.location.reload(); 
          
        } else {
          const errorData = await res.json();
          alert(`Masla aya: ${errorData.error || "Delete nahi ho saki"}`);
        }
      } catch (err) {
        console.error("Delete Error:", err);
        alert("Server se raabta nahi ho pa raha!");
      }
    }
  };

  return (
    <button 
      onClick={handleDelete}
      className="bg-white border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-5 py-2 rounded-full text-sm font-bold transition-all shadow-sm active:scale-95"
    >
      DELETE
    </button>
  );
}