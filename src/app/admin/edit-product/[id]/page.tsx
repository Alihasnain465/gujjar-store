import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import Link from "next/link";

// Next.js 15 ke liye params ko await karna zaroori hai
export default async function FullEditPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  // 1. Database se product ka data uthana
  const product = await prisma.product.findUnique({
    where: { id: id },
  });

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Product nahi mili!</h1>
        <Link href="/admin" className="text-blue-600 underline mt-4">Wapas jayein</Link>
      </div>
    );
  }

  // 2. Server Action: Data Update karne ke liye
  async function updateProductAction(formData: FormData) {
    "use server";
    
    const name = formData.get("name") as string;
    const priceRaw = formData.get("price") as string;
    const description = formData.get("description") as string;

    // Price ko number mein badalna (taake error khatam ho jaye)
    const priceFormatted = parseInt(priceRaw);

    await prisma.product.update({
      where: { id: id },
      data: { 
        name: name, 
        price: priceFormatted, 
        description: description 
      },
    });

    redirect("/admin"); // Save hone ke baad wapas dashboard
  }

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-2xl mx-auto bg-white p-10 rounded-[2.5rem] shadow-2xl">
        <h1 className="text-3xl font-black mb-8 text-blue-600 uppercase italic">Edit Product Details</h1>
        
        <form action={updateProductAction} className="space-y-6">
          <div>
            <label className="block text-xs font-black uppercase text-gray-400 mb-2">Product Name</label>
            <input 
              name="name"
              defaultValue={product.name}
              className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-blue-600 outline-none font-bold text-black"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-black uppercase text-gray-400 mb-2">Price (PKR)</label>
            <input 
              name="price"
              type="number"
              defaultValue={product.price}
              className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-blue-600 outline-none font-bold text-black"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-black uppercase text-gray-400 mb-2">Description / Details</label>
            <textarea 
              name="description"
              defaultValue={product.description || ""}
              rows={5}
              className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-blue-600 outline-none font-bold text-black"
              placeholder="Product ke baare mein likhein..."
            />
          </div>

          <div className="flex gap-4 pt-4">
            <button 
              type="submit"
              className="flex-1 bg-blue-600 text-white font-black py-4 rounded-2xl hover:bg-black transition-all shadow-lg active:scale-95"
            >
              UPDATE NOW
            </button>
            <Link 
              href="/admin"
              className="flex-1 bg-gray-100 text-gray-500 font-black py-4 rounded-2xl hover:bg-gray-200 transition-all text-center flex items-center justify-center"
            >
              CANCEL
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}