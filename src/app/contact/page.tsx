import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black text-gray-900 mb-4 tracking-tight uppercase italic">
            Get In <span className="text-blue-600">Touch</span>
          </h1>
          <p className="text-gray-500 font-medium max-w-md mx-auto">
            Koi sawal ho ya order ke baare mein maloomat chahiye ho, humse rabta karein.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          
          {/* Left Side: Contact Info Card */}
          <div className="md:col-span-1 space-y-4">
            <div className="bg-blue-600 p-8 rounded-[2rem] text-white shadow-xl shadow-blue-200">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-xl"><Phone size={20} /></div>
                  <p className="font-bold">+92 300 1234567</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-xl"><Mail size={20} /></div>
                  <p className="font-bold">info@gujjarstore.com</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-xl"><MapPin size={20} /></div>
                  <p className="font-bold">Faisalabad, Pakistan</p>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/20 text-xs font-medium opacity-80">
                Hum 24/7 online available hain.
              </div>
            </div>
          </div>

          {/* Right Side: Form Section */}
          <div className="md:col-span-2">
            <form className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-2xl shadow-gray-200/50 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-gray-400 ml-2">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="Hafiz..." 
                    className="w-full bg-gray-50 border-2 border-transparent focus:border-blue-600 focus:bg-white p-4 rounded-2xl outline-none transition-all font-bold text-black" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-gray-400 ml-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="email@example.com" 
                    className="w-full bg-gray-50 border-2 border-transparent focus:border-blue-600 focus:bg-white p-4 rounded-2xl outline-none transition-all font-bold text-black" 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-gray-400 ml-2">Message</label>
                <textarea 
                  placeholder="Apna masla ya sawal yahan likhein..." 
                  rows={5} 
                  className="w-full bg-gray-50 border-2 border-transparent focus:border-blue-600 focus:bg-white p-4 rounded-2xl outline-none transition-all font-bold text-black"
                ></textarea>
              </div>

              <button className="w-full bg-black text-white py-5 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-200 transition-all active:scale-[0.98]">
                SEND MESSAGE <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}