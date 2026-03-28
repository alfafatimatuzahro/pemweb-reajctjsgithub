import React from 'react';

const Dhea = () => {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-5">
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row">
        
        <div className="bg-blue-600 p-8 text-white flex flex-col items-center justify-center w-full md:w-1/3">
          <img 
            src="/images/foto-dhea.jpeg" 
            alt="Profil Dhea" 
            className="w-40 h-40 rounded-full border-4 border-white shadow-lg mb-4 object-cover"
          />
          <h2 className="text-2xl font-bold mb-1">Dhea Yolanda Saragih</h2>
          <p className="text-blue-200">Kelas: T2C</p>
          <p className="text-blue-200">Prodi: Teknologi Informasi</p>
          <p className="text-blue-200 mt-2 text-sm bg-blue-700 px-3 py-1 rounded-full">
            Domisili: Indonesia
          </p>
        </div>

        <div className="p-8 w-full md:w-2/3">
          <h3 className="text-3xl font-extrabold text-gray-800 mb-4 border-b-4 border-blue-500 inline-block">
            Tentang Diri
          </h3>
          <div className="text-gray-600 leading-relaxed text-justify">
            <p>
              Perkenalkan, nama saya adalah Dhea Yolanda Saragih. Saya merupakan mahasiswa dari kelas T2C program studi Teknologi Informasi. 
              Saya memiliki ketertarikan yang besar terhadap dunia IT serta perkembangan teknologi digital yang semakin pesat. 
              Saya juga memiliki rasa ingin tahu yang tinggi dan semangat untuk terus belajar hal-hal baru, khususnya dalam bidang pengembangan web dan pemrograman. 
              Harapan saya ke depan adalah dapat menjadi seorang profesional di bidang teknologi yang mampu menciptakan solusi yang bermanfaat bagi masyarakat. 
              Selain itu, saya juga senang mengeksplorasi hal-hal baru dan mengembangkan kemampuan diri agar dapat bersaing di dunia kerja.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dhea;