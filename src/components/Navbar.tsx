"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  // Sab se pakka tareeka navigation ka
  const handleNav = (path: string) => {
    window.location.assign(path); // Ye page ko force reload karke wahan le jayega
  };

  const activeClass = (path: string) => 
    pathname === path ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-700";

  return (
    <nav className="bg-white border-b sticky top-0 z-[99999] w-full shadow-md pointer-events-auto">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between relative z-[100000]">
        
        {/* 🏢 Logo */}
        <div onClick={() => handleNav('/')} className="cursor-pointer text-2xl font-black tracking-tighter text-black uppercase">
          GUJJAR <span className="text-blue-600">STORE</span>
        </div>

        {/* 🔗 Desktop Links */}
        <div className="hidden md:flex items-center gap-6 font-bold uppercase text-sm tracking-widest">
          <button onClick={() => handleNav('/')} className={`hover:text-blue-600 transition p-2 ${activeClass('/')}`}>
            Home
          </button>
          
          <button 
            onClick={() => handleNav('/products')}
            className={`hover:text-blue-600 transition p-4 cursor-pointer font-bold uppercase text-sm ${activeClass('/products')}`}
            style={{ position: 'relative', zIndex: 100001 }}
          >
            Products
          </button>

          <button onClick={() => handleNav('/about')} className={`hover:text-blue-600 transition p-2 ${activeClass('/about')}`}>
            About
          </button>

          <button onClick={() => handleNav('/contact')} className={`hover:text-blue-600 transition p-2 ${activeClass('/contact')}`}>
            Contact
          </button>
        </div>

        {/* 🔐 Admin Section */}
        <button 
          onClick={() => handleNav('/login')}
          className="bg-black text-white px-5 py-2 rounded-full text-xs font-black hover:bg-blue-600 transition-all"
        >
          ADMIN LOGIN
        </button>
      </div>
    </nav>
  );
}