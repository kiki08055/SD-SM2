import { Barang } from "@/model/barang";

interface Props {
  history: Barang[];
}

export default function HistoryTable({
  history,
}: Props) {
  return (
    <div className="mt-8 bg-white rounded-2xl shadow-sm border p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold">
          Riwayat Barang Keluar
        </h3>

        <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
          {history.length} Riwayat
        </span>
      </div>

      {history.length === 0 ? (
        <div className="text-center py-10 text-slate-400">
          Belum ada transaksi.
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b text-left">
                <th className="pb-4">
                  Nama Barang
                </th>

                <th className="pb-4">
                  Jumlah
                </th>

                <th className="pb-4">
                  Harga
                </th>

                <th className="pb-4">
                  Status
                </th>

                <th className="pb-4">
                  Tanggal
                </th>
              </tr>
            </thead>

            <tbody>
              {history.map((item) => (
                <tr
                  key={item.id}
                  className="border-b hover:bg-slate-50"
                >
                  <td className="py-4 font-semibold">
                    {item.nama}
                  </td>

                  <td className="py-4">
                    {item.jumlah}
                  </td>

                  <td className="py-4">
                    Rp{" "}
                    {item.harga.toLocaleString()}
                  </td>

                  <td className="py-4">
                    <span className="bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full text-sm font-medium">
                      {item.status}
                    </span>
                  </td>

                  <td className="py-4 text-slate-500 text-sm">
                    {item.tanggal}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}