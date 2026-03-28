import React from 'react';

const Alfa = () => {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-5">
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row">
        
        <div className="bg-blue-600 p-8 text-white flex flex-col items-center justify-center w-full md:w-1/3">
          <img 
            src="/images/foto-alfa.jpeg" 
            alt="Profil Alfa" 
            className="w-40 h-40 rounded-full border-4 border-white shadow-lg mb-4 object-cover"
          />
          <h2 className="text-2xl font-bold mb-1">Alfa Fatima</h2>
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
              Perkenalkan, nama saya adalah Alfa Fatima Saya merupakan mahasiswa di Universitas Brawijaya jurusan Teknologi Informasi. Alasan saya memilih jurusan ini karena saya memiliki ketertarikan terhadap dunia IT dan saya memiliki rasa keingintahuan yang tinggi, harapannya saya dapat menjaadi programmer proffesional yang dapat berguna dan bermanfaat bagi orang orng dilingkungan saya. Saat ini saya sedang mempelajari berbagai teknologi pengembangan web seperti React JS dan Tailwind CSS. Selain kuliah, saya memiliki hobi bermain game online yang masih selaras dengan perteknologian. Saya memiliki cita-cita untuk menjadi seorang Software Engineer yang ahli di bidang Frontend Development. Pengalaman saya yaitu mengerjakan project project mata kuliah, dan dalam waktu dekat ini saya akan menyelesaikan project based learning yang merupakan project program dari fakultas vokasi Universitas Brawijaya
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Alfa;