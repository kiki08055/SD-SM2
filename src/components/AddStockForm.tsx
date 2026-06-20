interface Props {
  nama: string;
  setNama: (value: string) => void;

  jumlah: string;
  setJumlah: (value: string) => void;

  harga: string;
  setHarga: (value: string) => void;

  satuan: string;
  setSatuan: (value: string) => void;

  lokasi: string;
  setLokasi: (value: string) => void;

  tambahStok: () => void;
}

export default function AddStockForm({
  nama,
  setNama,
  jumlah,
  setJumlah,
  harga,
  setHarga,
  satuan,
  setSatuan,
  lokasi,
  setLokasi,
  tambahStok,
}: Props) {
  console.log("nama =", nama);
  console.log("jumlah =", jumlah);
  console.log("harga =", harga);
  return (
    <div className="bg-white rounded-2xl shadow-sm border p-6">
      <h3 className="text-2xl font-bold mb-5">
        Tambah Stok
      </h3>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Nama Barang"
          value={nama}
          onChange={(e) =>
            setNama(e.target.value)
          }
          className="w-full p-3 rounded-xl border outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="number"
          placeholder="Jumlah"
          value={jumlah}
          onChange={(e) =>
            setJumlah(e.target.value)
          }
          className="w-full p-3 rounded-xl border outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          value={satuan}
          onChange={(e) =>
            setSatuan(e.target.value)
          }
          className="w-full p-3 rounded-xl border outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">
            Pilih Satuan
          </option>
          <option value="PCS">
            PCS
          </option>
          <option value="PACK">
            PACK
          </option>
        </select>
        <input
          type="number"
          placeholder="Harga"
          value={harga}
          onChange={(e) =>
            setHarga(e.target.value)
          }
          className="w-full p-3 rounded-xl border outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Lokasi Rak (contoh: Rak A1)"
          value={lokasi}
          onChange={(e) =>
            setLokasi(e.target.value)
          }
          className="w-full p-3 rounded-xl border outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={tambahStok}
          className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-xl font-semibold"
        >
          Tambah Stok
        </button>
      </div>
    </div>
  );
}