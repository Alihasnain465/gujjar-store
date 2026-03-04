export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* 🏔️ Hero Section */}
      <div className="bg-black py-24 text-white text-center px-4">
        <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter uppercase">
          OUR <span className="text-blue-600">STORY</span>
        </h1>
        <div className="h-1 w-24 bg-blue-600 mx-auto mb-8 rounded-full"></div>
        <p className="text-gray-400 text-lg md:text-2xl font-medium max-w-3xl mx-auto italic leading-relaxed">
          "Gujjar Store — Faisalabad ki matti se bana aik bharosa aur miyaar ka markaz."
        </p>
      </div>

      <div className="max-w-4xl mx-auto py-20 px-6">
        {/* 📦 Main Content - Centered for better look without image */}
        <div className="text-center space-y-10 mb-24">
          <span className="bg-blue-100 text-blue-700 px-6 py-2 rounded-full text-sm font-black uppercase tracking-widest">
            Since 2024
          </span>
          
          <h2 className="text-4xl md:text-6xl font-extrabold text-black leading-tight tracking-tight">
            Quality First <br /> <span className="text-blue-600 underline decoration-black underline-offset-8">Bharosa Hamesha</span>
          </h2>
          
          <div className="space-y-8 text-gray-600 text-xl leading-relaxed max-w-2xl mx-auto font-medium">
            <p>
              Humara maqsad apne customers ko behtareen quality ki products munasib qeemat par faraham karna hai. 
              Har product ko hum khud check karte hain taake aap tak sirf behtareen maal pahuche.
            </p>
            <p className="bg-gray-50 p-8 rounded-[2.5rem] border-l-8 border-blue-600 text-black font-bold shadow-sm">
              Faisalabad ki wholesale market ke direct rates aur premium quality ab sirf aik click ki doori par.
            </p>
          </div>
          
          {/* 🛡️ Trust Badges - Centered */}
          <div className="flex flex-wrap justify-center gap-12 pt-10">
            <div className="text-center group">
              <div className="text-4xl font-black text-blue-600 group-hover:scale-110 transition-transform">100%</div>
              <div className="text-sm text-gray-400 font-bold uppercase tracking-widest">Original</div>
            </div>
            <div className="hidden sm:block w-[1px] h-12 bg-gray-200"></div>
            <div className="text-center group">
              <div className="text-4xl font-black text-blue-600 group-hover:scale-110 transition-transform">Fast</div>
              <div className="text-sm text-gray-400 font-bold uppercase tracking-widest">Delivery</div>
            </div>
            <div className="hidden sm:block w-[1px] h-12 bg-gray-200"></div>
            <div className="text-center group">
              <div className="text-4xl font-black text-blue-600 group-hover:scale-110 transition-transform">24/7</div>
              <div className="text-sm text-gray-400 font-bold uppercase tracking-widest">Support</div>
            </div>
          </div>
        </div>

        {/* 🌟 Vision Section */}
        <div className="bg-blue-600 rounded-[3rem] p-16 text-center shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
          <h3 className="text-4xl font-black mb-8 text-white uppercase tracking-tighter">Hamara Vision</h3>
          <p className="text-white opacity-90 max-w-2xl mx-auto text-xl italic leading-relaxed">
            "Hum chahte hain ke Gujjar Store sirf aik dukaan nahi, balkay har ghar ka bharosa banay. 
            Miyar aesa ke aap khud hamare brand ambassador ban jayen."
          </p>
        </div>
      </div>
    </div>
  );
}