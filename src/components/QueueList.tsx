import { Barang } from "@/model/barang";

interface Props {
  queue: Barang[];
  hapusBarang: (id: string) => void;
}

export default function QueueList({
  queue,
  hapusBarang,
}: Props) {
  return (
    <div className="mt-8 rounded-3xl border border-gray-200 bg-white shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-100 px-8 py-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">
            Daftar Stok
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Seluruh barang yang tersedia di gudang.
          </p>
        </div>

        <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
          {queue.length} batch
        </span>
      </div>

      {queue.length === 0 ? (
        <div className="flex h-56 items-center justify-center text-sm text-gray-400">
          Belum ada stok barang.
        </div>
      ) : (
        <div className="space-y-4 p-6">
          {queue.map((barang, index) => (
            <div
              key={barang.id}
              className="rounded-3xl border border-gray-200 bg-white p-6 transition hover:border-gray-300 hover:bg-gray-50"
            >
              <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                {/* Informasi Barang */}
                <div className="flex-1">
                  <div className="flex items-start gap-4">
                    {/* Nomor */}
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gray-100 text-sm font-semibold text-gray-700">
                      {index + 1}
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {barang.nama}
                      </h3>

                      <p className="mt-1 text-sm text-gray-500">
                        {barang.tanggal}
                      </p>
                    </div>
                  </div>

                  {/* Badge */}
                  <div className="mt-5 flex flex-wrap gap-3">
                    <span className="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700">
                      Stok: {barang.jumlah} {barang.satuan}
                    </span>

                    <span className="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700">
                      Rak: {barang.lokasi}
                    </span>

                    <span className="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700">
                      Rp {barang.harga.toLocaleString()} / {barang.satuan}
                    </span>

                    <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                      FIFO
                    </span>
                  </div>
                </div>

                {/* Action */}
                <button
                  onClick={() => hapusBarang(barang.id)}
                  className="rounded-2xl border border-red-200 px-5 py-3 text-sm font-medium text-red-600 transition hover:bg-red-50"
                >
                  Hapus
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}