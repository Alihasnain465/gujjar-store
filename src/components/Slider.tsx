"use client";
import { useState, useEffect } from "react";
import { UserCheck } from "lucide-react"; // Icon ke liye

const slides = [
  {
    id: 1,
    title: "Premium Collection 2026",
    subtitle: "Quality products at your doorstep",
    bg: "bg-gradient-to-br from-blue-700 via-blue-900 to-black",
  },
  {
    id: 2,
    title: "Best Deals in Faisalabad",
    subtitle: "Exclusive discounts for our loyal customers",
    bg: "bg-gradient-to-br from-gray-800 via-gray-900 to-black",
  },
];

export default function Slider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[480px] w-full overflow-hidden rounded-[3rem] mt-6 shadow-2xl border-4 border-white">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 flex flex-col items-center justify-center text-white p-8 ${
            slide.bg
          } ${index === current ? "opacity-100 scale-100" : "opacity-0 scale-110"}`}
        >
          {/* ✅ Customer Welcome Message from Ali Hasnain */}
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 mb-6 animate-pulse">
            <UserCheck size={16} className="text-blue-400" />
            <span className="text-sm font-bold tracking-wide uppercase">
              <span className="text-blue-400">Ali Hasnain</span> Welcomes You
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 text-center leading-none italic uppercase tracking-tighter">
            {slide.title}
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-300 font-medium mb-10 text-center max-w-2xl opacity-90">
            {slide.subtitle}
          </p>

          <button className="group relative bg-blue-600 text-white px-12 py-5 rounded-[2rem] font-black hover:bg-white hover:text-black transition-all shadow-2xl active:scale-95 uppercase flex items-center gap-3">
            Start Shopping
            <div className="bg-white/20 p-1 rounded-full group-hover:bg-black/10 transition-colors">
               →
            </div>
          </button>
        </div>
      ))}
      
      {/* Visual Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <button 
            key={i} 
            onClick={() => setCurrent(i)}
            className={`h-3 rounded-full transition-all duration-500 ${i === current ? "w-12 bg-blue-500" : "w-3 bg-white/40 hover:bg-white/60"}`}
          />
        ))}
      </div>
    </div>
  );
}