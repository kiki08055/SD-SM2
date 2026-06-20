interface Props {
  namaBeli: string;
  setNamaBeli: (value: string) => void;

  jumlahBeli: string;
  setJumlahBeli: (value: string) => void;

  beliBarang: () => void;
}

export default function BuyStockForm({
  namaBeli,
  setNamaBeli,
  jumlahBeli,
  setJumlahBeli,
  beliBarang,
}: Props) {
  return (
    <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900">
          Barang Keluar
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Catat barang yang keluar dari inventaris.
        </p>
      </div>

      <div className="space-y-5">
        {/* Nama Barang */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nama Barang
          </label>

          <input
            type="text"
            value={namaBeli}
            onChange={(e) =>
              setNamaBeli(e.target.value)
            }
            placeholder="Contoh: Indomie Goreng"
            className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition-all focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
          />
        </div>

        {/* Jumlah */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Jumlah Keluar
          </label>

          <input
            type="number"
            value={jumlahBeli}
            onChange={(e) =>
              setJumlahBeli(e.target.value)
            }
            placeholder="0"
            className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition-all focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
          />
        </div>

        {/* Button */}
        <button
          onClick={beliBarang}
          className="w-full rounded-2xl bg-gray-900 py-3.5 text-sm font-medium text-white transition hover:bg-black"
        >
          Proses Barang Keluar
        </button>
      </div>
    </div>
  );
}