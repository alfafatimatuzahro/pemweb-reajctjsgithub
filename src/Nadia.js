import React from 'react';

const Nadia = () => {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-5">
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row">
        
        <div className="bg-blue-600 p-8 text-white flex flex-col items-center justify-center w-full md:w-1/3">
          <img 
            src="/images/foto-Nadia.jpg" 
            alt="Profil Nadia" 
            className="w-40 h-40 rounded-full border-4 border-white shadow-lg mb-4 object-cover"
          />
          <h2 className="text-2xl font-bold mb-1">Nadia Salwa Oktavia</h2>
          <p className="text-blue-200">Kelas: T2C</p>
          <p className="text-blue-200">Prodi: Teknologi Informasi</p>
          <p className="text-blue-200 mt-2 text-sm bg-blue-700 px-3 py-1 rounded-full">
            Domisili: Blitar
          </p>
        </div>

        <div className="p-8 w-full md:w-2/3">
          <h3 className="text-3xl font-extrabold text-gray-800 mb-4 border-b-4 border-blue-500 inline-block">
            Tentang Diri
          </h3>
          <div className="text-gray-600 leading-relaxed text-justify">
            <p>
              Saya Nadia Salwa Oktavia, mahasiswa Teknologi Informasi yang memiliki passion besar di industri kreatif digital.
                Selain mendalami pemrograman, saya senang mengeksplorasi sisi visual dan teknis dalam membangun sebuah platform web agar lebih interaktif. 
                Saya percaya bahwa belajar adalah proses tanpa henti, karena itu saya selalu berusaha meningkatkan skill diri agar siap memberikan kontribusi nyata di dunia kerja profesional nantinya
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Nadia;