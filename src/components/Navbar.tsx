"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleNav = (path: string) => {
    window.location.assign(path); 
  };

  const activeClass = (path: string) => 
    pathname === path ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-700";

  return (
    <nav className="bg-white border-b sticky top-0 z-[99999] w-full shadow-md">
      {/* Container ko flex-col kiya hai mobile ke liye taake cheezein adjust ho saken */}
      <div className="container mx-auto px-4 py-2 md:h-16 flex flex-col md:flex-row items-center justify-between gap-2">
        
        {/* 🏢 Logo */}
        <div onClick={() => handleNav('/')} className="cursor-pointer text-xl md:text-2xl font-black tracking-tighter text-black uppercase">
          GUJJAR <span className="text-blue-600">STORE</span>
        </div>

        {/* 🔗 Links - Ab ye mobile par bhi nazar aayenge */}
        <div className="flex items-center gap-3 md:gap-6 font-bold uppercase text-[10px] md:text-sm tracking-widest overflow-x-auto whitespace-nowrap pb-2 md:pb-0">
          <button onClick={() => handleNav('/')} className={`hover:text-blue-600 transition px-1 ${activeClass('/')}`}>
            Home
          </button>
          
          <button 
            onClick={() => handleNav('/products')}
            className={`hover:text-blue-600 transition px-1 cursor-pointer ${activeClass('/products')}`}
          >
            Products
          </button>

          <button onClick={() => handleNav('/about')} className={`hover:text-blue-600 transition px-1 ${activeClass('/about')}`}>
            About
          </button>

          <button onClick={() => handleNav('/contact')} className={`hover:text-blue-600 transition px-1 ${activeClass('/contact')}`}>
            Contact
          </button>
        </div>

        {/* 🔐 Admin Section */}
        <button 
          onClick={() => handleNav('/login')}
          className="bg-black text-white px-4 py-1.5 md:px-5 md:py-2 rounded-full text-[10px] md:text-xs font-black hover:bg-blue-600 transition-all"
        >
          ADMIN
        </button>
      </div>
    </nav>
  );
}