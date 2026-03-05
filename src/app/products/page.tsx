import { prisma } from "@/lib/prisma";
import ProductCard from "@/components/ProductCard";
import { Suspense } from "react";

// ✅ Ye line sab se zaroori hai! 
// Iska matlab hai ke Next.js purana data save nahi karega aur har baar naya data fetch karega.
export const revalidate = 0; 
export const dynamic = 'force-dynamic';

// 1. Loading component
function LoadingIndicator() {
  return <div className="p-20 text-center text-xl animate-pulse text-blue-600 font-bold">Maal load ho raha hai...</div>;
}

// 2. Main Page Component
export default async function ProductsPage() {
  return (
    <Suspense fallback={<LoadingIndicator />}>
      <ProductList />
    </Suspense>
  );
}

// 3. Data fetching component
async function ProductList() {
  let products: any[] = [];
  let errorOccurred = false;

  try {
    // Database se taza tareen data mangwana
    products = await prisma.product.findMany({
      orderBy: { createdAt: 'desc' }, // Nayi products sab se upar aayengi
      take: 50, // Limit thodi barha di hai taake zyada maal nazar aaye
    });
  } catch (error) {
    console.error("Database connection issue:", error);
    errorOccurred = true;
  }

  return (
    <div className="min-h-screen bg-white py-10">
      <div className="container mx-auto px-4">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-blue-600 uppercase tracking-tight">
            Gujjar Store Products
          </h1>
          <div className="h-1 w-24 bg-blue-600 mx-auto mt-2 rounded-full"></div>
        </div>

        {/* Error Alert */}
        {errorOccurred ? (
          <div className="bg-red-50 text-red-700 p-6 rounded-xl mb-10 text-center border border-red-200">
            <h2 className="font-bold text-lg">⚠️ Connection Error</h2>
            <p>Database (Neon DB) se rabta nahi ho raha. Naya data nahi aa saka.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.length > 0 ? (
              products.map((item: any) => (
                <ProductCard key={item.id} data={item} />
              ))
            ) : (
              <div className="col-span-full text-center py-20 border-2 border-dashed rounded-3xl">
                <p className="text-gray-400 italic text-lg">Abhi koi products add nahi kiye gaye.</p>
                <p className="text-sm text-blue-500 mt-2">Admin panel se naya maal add karein.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}