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
    <div className="mt-8 bg-white rounded-2xl shadow-sm border p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold">
          Daftar Stok
        </h3>

        <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
          {queue.length} Batch
        </span>
      </div>

      {queue.length === 0 ? (
        <div className="text-center py-20 text-slate-400">
          Belum ada stok barang.
        </div>
      ) : (
        <div className="space-y-4">
          {queue.map((barang, index) => (
            <div
              key={barang.id}
              className="border rounded-2xl p-5 hover:shadow-md transition"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>

                    <div>
                      <h4 className="text-xl font-bold">
                        {barang.nama}
                      </h4>

                      <p className="text-slate-500 text-sm">
                        {barang.tanggal}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 flex-wrap mt-4">
                    <span className="bg-slate-100 px-4 py-2 rounded-full text-sm font-medium">
                      Stok: {barang.jumlah} {barang.satuan}
                    </span>

                    <span className="bg-slate-100 px-4 py-2 rounded-full text-sm font-medium">
                      Lokasi: {barang.lokasi}
                    </span>

                    <span className="bg-slate-100 px-4 py-2 rounded-full text-sm font-medium">
                      Harga: Rp{" "}
                      {barang.harga.toLocaleString()} / {barang.satuan}
                    </span>

                    <span className="bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium">
                      FIFO
                    </span>
                  </div>
                </div>

                <button
                  onClick={() =>
                    hapusBarang(barang.id)
                  }
                  className="bg-red-500 hover:bg-red-600 transition text-white px-5 py-3 rounded-xl font-semibold"
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