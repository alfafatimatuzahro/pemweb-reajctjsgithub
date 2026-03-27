import React from 'react';

function App() {
  return (
    // Menggunakan class Tailwind: flex, justify-center, bg-slate-100, dll.
    <div className="flex justify-center items-center h-screen bg-slate-100">
      <div className="text-center p-10 bg-white shadow-xl rounded-lg">
        <h1 className="text-4xl font-bold text-blue-600 underline mb-4">
          Tailwind CSS Berhasil!
        </h1>
        <p className="text-gray-600">
          Jika Anda melihat teks biru besar dan background abu-abu terang, 
          artinya konfigurasi Anda sudah benar.
        </p>
      </div>
    </div>
  );
}

export default App;