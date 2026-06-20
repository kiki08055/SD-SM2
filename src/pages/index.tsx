"use client";

import { useMemo, useState } from "react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import StatsCard from "@/components/StatsCard";
import AddStockForm from "@/components/AddStockForm";
import BuyStockForm from "@/components/BuyStockForm";
import QueueList from "@/components/QueueList";
import HistoryTable from "@/components/HistoryTable";

import { Barang } from "@/model/barang";

export default function Home() {
  const [nama, setNama] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [harga, setHarga] = useState("");
  const [satuan, setSatuan] = useState("");
  const [lokasi, setLokasi] = useState("");

  const [namaBeli, setNamaBeli] = useState("");
  const [jumlahBeli, setJumlahBeli] = useState("");

  const [queue, setQueue] = useState<Barang[]>([]);
  const [history, setHistory] = useState<Barang[]>([]);

 const tambahStok = () => {
  if (!nama || !jumlah || !harga || !satuan || !lokasi) {
    toast.error("Semua data harus diisi!");
    return;
  }

  const barangBaru: Barang = {
    id: crypto.randomUUID(),
    nama,
    jumlah: Number(jumlah),
    satuan,
    lokasi,
    harga: Number(harga),
    status: "Masuk",
    tanggal: new Date().toLocaleString(),
  };

  setQueue([...queue, barangBaru]);

  setNama("");
  setJumlah("");
  setHarga("");
  setSatuan("");
  setLokasi("");

  toast.success("Stok berhasil ditambahkan");
};

  const beliBarang = () => {
  if (!namaBeli || !jumlahBeli) {
    toast.error("Nama dan jumlah wajib diisi");
    return;
  }

  let sisaBeli = Number(jumlahBeli);
  const updatedQueue = [...queue];
  const transaksiKeluar: Barang[] = [];

  for (let i = 0; i < updatedQueue.length; i++) {
    const barang = updatedQueue[i];

    if (
      barang.nama.toLowerCase() !== namaBeli.toLowerCase()
    ) {
      continue;
    }

    if (barang.jumlah >= sisaBeli) {
      transaksiKeluar.push({
        ...barang,
        id: crypto.randomUUID(),
        jumlah: sisaBeli,
        status: "Keluar",
        tanggal: new Date().toLocaleString(),
      });

      barang.jumlah -= sisaBeli;
      sisaBeli = 0;
      break;
    } else {
      transaksiKeluar.push({
        ...barang,
        id: crypto.randomUUID(),
        jumlah: barang.jumlah,
        status: "Keluar",
        tanggal: new Date().toLocaleString(),
      });

      sisaBeli -= barang.jumlah;
      barang.jumlah = 0;
    }
  }

  const finalQueue = updatedQueue.filter(
    (barang) => barang.jumlah > 0
  );

  setQueue(finalQueue);
  setHistory([...transaksiKeluar, ...history]);

  setNamaBeli("");
  setJumlahBeli("");

  if (sisaBeli > 0) {
    toast.warning(`Stok tidak cukup. Sisa permintaan ${sisaBeli}`);
    return;
  }

  toast.success("Barang berhasil dikeluarkan");
};

const hapusBarang = (id: string) => {
  setQueue(queue.filter((barang) => barang.id !== id));
  toast.success("Barang berhasil dihapus");
};

  const totalBarang = useMemo(() => {
    return queue.reduce(
      (acc, item) => acc + item.jumlah,
      0
    );
  }, [queue]);

  return (
  <main className="min-h-screen bg-gray-50 text-gray-900">
    <Navbar />

    <div className="mx-auto max-w-7xl px-6 py-10">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
          Dashboard Gudang
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Sistem inventory berbasis FIFO untuk mengelola stok barang masuk dan
          barang keluar.
        </p>
      </div>

      {/* Stats */}
      <div className="mb-10 grid gap-6 md:grid-cols-3">
        <StatsCard
          title="Total Batch"
          value={queue.length}
          color="text-gray-900"
        />

        <StatsCard
          title="Total Stok"
          value={totalBarang}
          color="text-gray-900"
        />

        <StatsCard
          title="Riwayat Keluar"
          value={history.length}
          color="text-gray-900"
        />
      </div>

      {/* Forms */}
      <div className="mb-10 grid items-start gap-6 lg:grid-cols-2">
        <AddStockForm
          nama={nama}
          setNama={setNama}
          jumlah={jumlah}
          setJumlah={setJumlah}
          harga={harga}
          setHarga={setHarga}
          satuan={satuan}
          setSatuan={setSatuan}
          lokasi={lokasi}
          setLokasi={setLokasi}
          tambahStok={tambahStok}
        />

        <BuyStockForm
          namaBeli={namaBeli}
          setNamaBeli={setNamaBeli}
          jumlahBeli={jumlahBeli}
          setJumlahBeli={setJumlahBeli}
          beliBarang={beliBarang}
        />
      </div>

      {/* Queue */}
      <div className="mb-10">
        <QueueList
          queue={queue}
          hapusBarang={hapusBarang}
        />
      </div>

      {/* History */}
      <HistoryTable history={history} />
    </div>
  </main>
);
}