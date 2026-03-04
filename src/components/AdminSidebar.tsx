import Link from "next/link";

export default function AdminSidebar() {
  return (
    <aside className="w-64 bg-black text-white min-h-screen p-6 hidden md:block border-r border-gray-800">
      <div className="mb-10 px-2">
        <h1 className="text-2xl font-black tracking-tighter italic">GUJJAR PANEL</h1>
        <p className="text-xs text-gray-500 mt-1 uppercase tracking-widest font-bold">Store Management</p>
      </div>

      <nav className="flex flex-col gap-2">
        <Link href="/admin" className="p-3 rounded-lg hover:bg-gray-900 transition flex items-center gap-3">
          <span>📊</span> Dashboard
        </Link>
        <Link href="/admin/add-product" className="p-3 rounded-lg hover:bg-gray-900 transition flex items-center gap-3">
          <span>➕</span> Add Product
        </Link>
        <div className="my-4 border-t border-gray-800"></div>
        <Link href="/" className="p-3 rounded-lg text-red-400 hover:bg-red-900/20 transition flex items-center gap-3">
          <span>🏠</span> Back to Store
        </Link>
      </nav>
    </aside>
  );
}