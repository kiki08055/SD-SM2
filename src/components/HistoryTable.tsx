import { Barang } from "@/model/barang";

interface Props {
  history: Barang[];
}

export default function HistoryTable({
  history,
}: Props) {
  return (
    <div className="mt-8 rounded-3xl border border-gray-200 bg-white shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-100 px-8 py-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">
            Riwayat Barang Keluar
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Daftar transaksi barang yang telah keluar dari inventaris.
          </p>
        </div>

        <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
          {history.length} transaksi
        </span>
      </div>

      {history.length === 0 ? (
        <div className="flex h-48 items-center justify-center text-sm text-gray-400">
          Belum ada transaksi.
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr className="text-left text-sm text-gray-500">
                <th className="px-8 py-4 font-medium">
                  Nama Barang
                </th>

                <th className="px-8 py-4 font-medium">
                  Jumlah
                </th>

                <th className="px-8 py-4 font-medium">
                  Harga
                </th>

                <th className="px-8 py-4 font-medium">
                  Status
                </th>

                <th className="px-8 py-4 font-medium">
                  Tanggal
                </th>
              </tr>
            </thead>

            <tbody>
              {history.map((item) => (
                <tr
                  key={item.id}
                  className="border-t border-gray-100 transition hover:bg-gray-50"
                >
                  <td className="px-8 py-5">
                    <div className="font-medium text-gray-900">
                      {item.nama}
                    </div>
                  </td>

                  <td className="px-8 py-5 text-gray-700">
                    {item.jumlah}
                  </td>

                  <td className="px-8 py-5 text-gray-700">
                    Rp {item.harga.toLocaleString()}
                  </td>

                  <td className="px-8 py-5">
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
                      {item.status}
                    </span>
                  </td>

                  <td className="px-8 py-5 text-sm text-gray-500">
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