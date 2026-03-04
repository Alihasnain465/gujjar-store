"use client";
import { useState } from "react";
import { addProduct } from "@/app/actions/product";

export default function AddProductPage() {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // --- Photo Select Karne Wala Function ---
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string); // Photo ko preview dikhane ke liye
      };
      reader.readAsDataURL(file);
    }
  };

  async function clientAction(formData: FormData) {
    if (!imagePreview) return alert("Pehle photo select karein!");
    
    setLoading(true);
    // Photo ka data bhi bhej rahe hain
    formData.append("image", imagePreview); 
    
    const result = await addProduct(formData);
    setLoading(false);

    if (result.success) {
      alert("Mubarak ho! Photo ke sath maal add ho gaya.");
      window.location.href = "/admin"; // Dashboard wapis bhej do
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex justify-center items-center">
      <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-md border">
        <h2 className="text-2xl font-black mb-6 text-center">NAYA MAAL ADD KAREIN</h2>
        
        <form action={clientAction} className="space-y-4">
          {/* --- Image Upload Box --- */}
          <div className="relative group cursor-pointer">
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleImageChange}
              className="absolute inset-0 opacity-0 cursor-pointer z-10"
              required
            />
            <div className="h-48 border-2 border-dashed border-gray-300 rounded-2xl flex flex-col items-center justify-center bg-gray-50 group-hover:border-blue-500 overflow-hidden">
              {imagePreview ? (
                <img src={imagePreview} className="w-full h-full object-cover" alt="preview" />
              ) : (
                <>
                  <span className="text-4xl">📸</span>
                  <p className="text-sm text-gray-400 mt-2 font-bold">Photo Select Karein</p>
                </>
              )}
            </div>
          </div>

          <input name="name" placeholder="Item Name" className="w-full p-4 border rounded-xl" required />
          <input name="price" type="number" placeholder="Price (RS)" className="w-full p-4 border rounded-xl" required />

          <button 
            disabled={loading}
            className="w-full bg-blue-600 text-white p-4 rounded-xl font-bold shadow-lg hover:bg-blue-700 transition"
          >
            {loading ? "UPLOADING..." : "SAVE PRODUCT"}
          </button>
        </form>
      </div>
    </div>
  );
}