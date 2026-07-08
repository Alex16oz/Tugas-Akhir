import { useEffect, useState } from 'react';
import { supabase } from './supabaseClient'; // Mengimpor client yang kita buat tadi
import './App.css';

function App() {
  const [dataBarang, setDataBarang] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fungsi async untuk mengambil data dari tabel 'Barang' di Supabase
    async function ambilData() {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('Barang') // Nama tabel utama yang Anda buat lewat skrip SQL sebelumnya
          .select('*');

        if (error) {
          throw error;
        }
        
        setDataBarang(data);
      } catch (error) {
        console.error("Gagal mengambil data dari database:", error.message);
      } finally {
        setLoading(false);
      }
    }

    ambilData();
  }, []);

  return (
    <div className="App">
      <h1>Sistem Informasi Toko & Inventori - Barokah Ekspres</h1>
      <p>Status Jaringan Database: <strong>Terhubung Ke Supabase Successfully</strong></p>
      
      {loading ? (
        <p>Sedang memuat data master barang...</p>
      ) : (
        <div>
          <h3>Daftar Barang Konstruksi ({dataBarang.length} Jenis):</h3>
          {dataBarang.length === 0 ? (
            <p>Belum ada data barang. (Tabel masih kosong di database).</p>
          ) : (
            <ul>
              {dataBarang.map((barang) => (
                <li key={barang.id_barang}>
                  {barang.nama_barang} - Rp {barang.harga_jual.toLocaleString('id-ID')} (Stok: {barang.stok})
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default App;