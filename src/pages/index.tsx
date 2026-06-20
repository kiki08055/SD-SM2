"use client";

import { useMemo, useState } from "react";

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
    if (
      !nama ||
      !jumlah ||
      !harga ||
      !satuan ||
      !lokasi
    ) {
      alert("Semua data harus diisi!");
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

    console.log(barangBaru);

    setQueue([...queue, barangBaru]);

    setNama("");
    setJumlah("");
    setHarga("");
    setSatuan("");
    setLokasi("");
  };

  const beliBarang = () => {
    if (!namaBeli || !jumlahBeli) return;

    let sisaBeli = Number(jumlahBeli);

    const updatedQueue = [...queue];

    const transaksiKeluar: Barang[] = [];

    for (
      let i = 0;
      i < updatedQueue.length;
      i++
    ) {
      const barang = updatedQueue[i];

      if (
        barang.nama.toLowerCase() !==
        namaBeli.toLowerCase()
      ) {
        continue;
      }

      if (barang.jumlah >= sisaBeli) {
        transaksiKeluar.push({
          ...barang,
          id: crypto.randomUUID(),
          jumlah: sisaBeli,
          status: "Keluar",
          tanggal:
            new Date().toLocaleString(),
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
          tanggal:
            new Date().toLocaleString(),
        });

        sisaBeli -= barang.jumlah;

        barang.jumlah = 0;
      }
    }

    const finalQueue = updatedQueue.filter(
      (barang) => barang.jumlah > 0
    );

    setQueue(finalQueue);

    setHistory([
      ...transaksiKeluar,
      ...history,
    ]);

    setNamaBeli("");
    setJumlahBeli("");

    if (sisaBeli > 0) {
      alert(
        `Stok tidak cukup. Sisa permintaan ${sisaBeli}`
      );
    }
  };

  const hapusBarang = (id: string) => {
    setQueue(
      queue.filter(
        (barang) => barang.id !== id
      )
    );
  };

  const totalBarang = useMemo(() => {
    return queue.reduce(
      (acc, item) => acc + item.jumlah,
      0
    );
  }, [queue]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 text-slate-800">
      <Navbar />

      <div className="max-w-7xl mx-auto p-6">
        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-2">
            Dashboard Gudang
          </h2>

          <p className="text-slate-500">
            Barang pertama masuk akan keluar
            lebih dulu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatsCard
            title="Total Batch"
            value={queue.length}
            color="text-blue-600"
          />

          <StatsCard
            title="Total Stok"
            value={totalBarang}
            color="text-emerald-500"
          />

          <StatsCard
            title="Riwayat Keluar"
            value={history.length}
            color="text-orange-500"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 items-start">
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

        <QueueList
          queue={queue}
          hapusBarang={hapusBarang}
        />

        <HistoryTable history={history} />
      </div>
    </main>
  );
}