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
    <div className="bg-white rounded-2xl shadow-sm border p-6">
      <h3 className="text-2xl font-bold mb-5">
        Barang Keluar
      </h3>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Nama Barang"
          value={namaBeli}
          onChange={(e) =>
            setNamaBeli(e.target.value)
          }
          className="w-full p-3 rounded-xl border outline-none focus:ring-2 focus:ring-emerald-500"
        />

        <input
          type="number"
          placeholder="Jumlah Beli"
          value={jumlahBeli}
          onChange={(e) =>
            setJumlahBeli(e.target.value)
          }
          className="w-full p-3 rounded-xl border outline-none focus:ring-2 focus:ring-emerald-500"
        />

        <button
          onClick={beliBarang}
          className="w-full bg-emerald-500 hover:bg-emerald-600 transition text-white py-3 rounded-xl font-semibold"
        >
          Proses
        </button>
      </div>
    </div>
  );
}