export interface Barang {
  id: string;
  nama: string;
  jumlah: number;
  satuan: string;
  harga: number;
  lokasi: string;
  status: "Masuk" | "Keluar";
  tanggal: string;
}