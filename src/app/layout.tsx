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
        <CartProvider>
          
          <header className="border-b bg-white sticky top-0 z-50 shadow-sm">
            {/* Mobile par height 'auto' rakhi hai taake doosri line fit aa jaye */}
            <div className="container mx-auto px-4 min-h-[5rem] flex flex-col md:flex-row items-center justify-between py-2 md:py-0">
              
              <div className="flex items-center justify-between w-full md:w-auto">
                {/* Logo Section */}
                <Link href="/" className="text-xl md:text-2xl font-black tracking-tighter flex items-center gap-2">
                  <span className="bg-blue-600 text-white px-2 py-1 rounded-lg shadow-md">G</span>
                  GUJJAR<span className="text-blue-600">STORE</span>
                </Link>

                {/* Mobile Cart & Admin (Sirf mobile par nazar aayenge) */}
                <div className="flex items-center gap-3 md:hidden">
                   <CartStatus />
                   <Link href="/admin/login" className="bg-black text-white p-2 rounded-lg text-[10px] font-bold">ADMIN</Link>
                </div>
              </div>

              {/* Navigation Links - Ab ye mobile par bhi nazar aayenge aik line mein */}
              <nav className="flex items-center justify-center space-x-4 md:space-x-8 font-extrabold text-gray-600 uppercase text-[10px] md:text-xs tracking-widest mt-2 md:mt-0 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
                <Link href="/" className="hover:text-blue-600 transition-colors whitespace-nowrap">Home</Link>
                <Link href="/products" className="hover:text-blue-600 transition-colors whitespace-nowrap">Products</Link>
                <Link href="/about" className="hover:text-blue-600 transition-colors whitespace-nowrap">About Us</Link>
                <Link href="/contact" className="hover:text-blue-600 transition-colors whitespace-nowrap">Contact</Link>
              </nav>

              {/* Desktop Actions (Sirf laptop par nazar aayenge) */}
              <div className="hidden md:flex items-center gap-4">
                <CartStatus />
                <Link 
                  href="/admin/login" 
                  className="border-2 border-black px-6 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all shadow-sm"
                >
                  Admin Portal
                </Link>
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