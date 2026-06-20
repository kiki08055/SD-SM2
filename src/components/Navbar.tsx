export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Brand */}
        <div className="flex flex-col">
          <h1 className="text-xl font-semibold tracking-tight text-gray-900">
            Stock Gudang
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Sistem Manajemen Inventaris
          </p>
        </div>

        {/* Status */}
        <div className="flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2">
          <div className="h-2 w-2 rounded-full bg-emerald-500" />

          <span className="text-sm font-medium text-emerald-700">
            Online
          </span>
        </div>
      </div>
    </nav>
  );
}