import Link from "next/link";
import "./globals.css";
import { Menu } from "lucide-react"; 
import { CartProvider } from "@/context/CartContext"; 
import CartStatus from "@/components/CartStatus";

export const metadata = {
  title: "Gujjar Store | Premium Collection",
  description: "Faisalabad's best online shopping destination",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white antialiased text-black">
        {/* ✅ Sab se bahar Provider taake Cart chale */}
        <CartProvider>
          
          <header className="border-b bg-white sticky top-0 z-50 shadow-sm">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
              
              {/* Logo Section */}
              <Link href="/" className="text-2xl font-black tracking-tighter flex items-center gap-2">
                <span className="bg-blue-600 text-white px-2 py-1 rounded-lg shadow-md">G</span>
                GUJJAR<span className="text-blue-600">STORE</span>
              </Link>

              {/* Navigation Links */}
              <nav className="hidden md:flex items-center space-x-8 font-extrabold text-gray-600 uppercase text-xs tracking-widest">
                <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
                <Link href="/products" className="hover:text-blue-600 transition-colors">Products</Link>
                <Link href="/about" className="hover:text-blue-600 transition-colors">About Us</Link>
                <Link href="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
              </nav>

              {/* Actions & Cart */}
              <div className="flex items-center gap-4">
                {/* ✅ Ye line maine fix kar di hai, error ab nahi aayega */}
                <CartStatus />

                <Link 
                  href="/admin/login" 
                  className="hidden sm:block border-2 border-black px-6 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all shadow-sm"
                >
                  Admin Portal
                </Link>
                <div className="md:hidden text-2xl cursor-pointer text-black">
                   <Menu size={28} />
                </div>
              </div>

            </div>
          </header>

          <main className="min-h-screen">
            {children}
          </main>

          {/* Footer Section */}
          <footer className="bg-gray-900 text-white py-12 mt-20">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-xl font-bold mb-4 italic uppercase tracking-tighter">
                Gujjar Shopping Mall
              </h2>
              <p className="text-gray-400 text-sm font-medium">
                © 2026 High-Quality Inventory. <br />
                <span className="text-blue-400">Designed by Ali Hasnain</span>
              </p>
            </div>
          </footer>

        </CartProvider>
      </body>
    </html>
  );
}