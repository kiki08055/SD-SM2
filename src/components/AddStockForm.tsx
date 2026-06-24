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
  return (
    <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900">
          Tambah Stok
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Tambahkan data barang baru ke inventaris.
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
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            placeholder="Contoh: Indomie Goreng"
            className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition-all focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          />
        </div>

        {/* Jumlah + Satuan */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Jumlah
            </label>
            <input
              type="number"
              value={jumlah}
              onChange={(e) => setJumlah(e.target.value)}
              placeholder="0"
              className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition-all focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Satuan
            </label>
            <select
              value={satuan}
              onChange={(e) => setSatuan(e.target.value)}
              className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition-all focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            >
              <option value="">Pilih Satuan</option>
              <option value="PCS">PCS</option>
              <option value="PACK">PACK</option>
            </select>
          </div>
        </div>

        {/* Harga */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Harga
          </label>
          <input
            type="number"
            value={harga}
            onChange={(e) => setHarga(e.target.value)}
            placeholder="Rp 0"
            className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition-all focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          />
        </div>

        {/* Lokasi */}
        <div>
          {/* <label className="block text-sm font-medium text-gray-700 mb-2">
            Lokasi Rak
          </label> */}
         <div>
  <label className="block text-sm font-medium text-gray-700 mb-2">
    Lokasi Rak
  </label>
  <select
    value={lokasi}
    onChange={(e) => setLokasi(e.target.value)}
    className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition-all focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
  >
    <option value="">Pilih Rak</option>

    <optgroup label="Zona A">
      <option value="A1">Rak A1</option>
      <option value="A2">Rak A2</option>
      <option value="A3">Rak A3</option>
    </optgroup>

    <optgroup label="Zona B">
      <option value="B1">Rak B1</option>
      <option value="B2">Rak B2</option>
      <option value="B3">Rak B3</option>
    </optgroup>

    <optgroup label="Zona C">
      <option value="C1">Rak C1</option>
      <option value="C2">Rak C2</option>
      <option value="C3">Rak C3</option>
    </optgroup>
  </select>

  <p className="mt-2 text-xs text-gray-500">
    Pilih lokasi penyimpanan barang di gudang.
  </p>
</div>
        </div>

        {/* Button */}
        <button
          onClick={tambahStok}
          className="w-full rounded-2xl bg-gray-900 py-3.5 text-sm font-medium text-white transition hover:bg-black"
        >
          Tambah Stok
        </button>
      </div>
    </div>
  );
}