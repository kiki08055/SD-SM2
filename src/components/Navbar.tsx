export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-blue-600">
            Stock Gudang
          </h1>

          <p className="text-sm text-slate-500">
            Sistem Gudang 
          </p>
        </div>

        <span className="bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold">
        </span>
      </div>
    </nav>
  );
}