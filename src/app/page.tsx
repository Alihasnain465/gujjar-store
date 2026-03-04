import Slider from "@/components/Slider"; 
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col gap-20">
      {/* 1. Hero Slider */}
      <Slider />

      {/* 2. Welcome Section with Background */}
      <section className="relative py-24 bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070')" }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative container mx-auto px-4 text-center text-white">
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">GUJJAR STORE</h2>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto italic opacity-90">
            "Faisalabad ka behtareen kapra aur miyaari fashion ab aapki pohanch mein."
          </p>
          <div className="mt-10">
            <Link href="/products" className="bg-blue-600 hover:bg-white hover:text-blue-600 text-white px-10 py-4 rounded-full font-black transition-all shadow-2xl inline-block uppercase">
              Abhi Shopping Karein
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Categories Section (Mall ka Name & Backgrounds) */}
      <section className="container mx-auto px-4 py-10">
        <h3 className="text-3xl font-black mb-12 text-center uppercase tracking-widest">Hamari Collections</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Category 1 */}
          <Link href="/products?cat=shirts" className="group relative h-80 overflow-hidden rounded-[2rem] shadow-xl">
            <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1780" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Shirts" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
              <h4 className="text-white text-3xl font-black">PREMIUM SHIRTS</h4>
            </div>
          </Link>

          {/* Category 2 */}
          <Link href="/products?cat=jeans" className="group relative h-80 overflow-hidden rounded-[2rem] shadow-xl">
            <img src="https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1926" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Jeans" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
              <h4 className="text-white text-3xl font-black">CLASSIC JEANS</h4>
            </div>
          </Link>

          {/* Category 3 */}
          <Link href="/products?cat=unstitched" className="group relative h-80 overflow-hidden rounded-[2rem] shadow-xl">
            <img src="https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1884" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Fabric" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
              <h4 className="text-white text-3xl font-black">UNSTITCHED FABRIC</h4>
            </div>
          </Link>

        </div>
      </section>

      {/* 4. Why Us Section */}
      <section className="bg-gray-100 py-20 px-4">
        <div className="container mx-auto grid md:grid-cols-3 gap-10 text-center">
          <div>
            <div className="text-4xl mb-4">🚚</div>
            <h5 className="font-bold text-xl">Tez Delivery</h5>
            <p className="text-gray-500">Pure Pakistan mein fast home delivery.</p>
          </div>
          <div>
            <div className="text-4xl mb-4">⭐</div>
            <h5 className="font-bold text-xl">Best Quality</h5>
            <p className="text-gray-500">Miyaar par koi samjhota nahi.</p>
          </div>
          <div>
            <div className="text-4xl mb-4">💰</div>
            <h5 className="font-bold text-xl">Munasib Rate</h5>
            <p className="text-gray-500">Faisalabad ke wholesale rates.</p>
          </div>
        </div>
      </section>
    </main>
  );
}