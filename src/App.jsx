import React from 'react';
import './index.css'; // Memastikan file CSS di atas termuat

function App() {
  return (
    <div>
      {/* Navbar Section */}
      <nav className="navbar">
        <div className="navbar-container">
          
          {/* Sisi Kiri: Nama Toko */}
          <div className="brand-name">
            BAROKAH EKSPRES
          </div>
          
          {/* Sisi Kanan: Tombol Login */}
          <div>
            <button type="button" className="btn-login">
              Login
            </button>
          </div>

        </div>
      </nav>

      {/* Main Content Area (Kosong sesuai instruksi) */}
      <main className="main-content">
        {/* Belum ditambahkan konten lain */}
      </main>
    </div>
  );
}

export default App;