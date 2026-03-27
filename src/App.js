import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Alfa from './Alfa';
// Nanti anggota lain tinggal menambahkan import mereka di sini, misal: import Dhea from './Dhea';

function App() {
  return (
    <Router>
      <div>
        {/* Navigasi Sementara untuk kemudahan tes */}
        <nav className="p-4 bg-gray-800 text-white flex gap-4 justify-center">
          <Link to="/alfa" className="hover:text-blue-300">Profil Alfa</Link>
          {/* <Link to="/dhea" className="hover:text-blue-300">Profil Dhea</Link> */}
        </nav>

        {/* Rute URL */}
        <Routes>
          <Route path="/alfa" element={<Alfa />} />
          {/* <Route path="/dhea" element={<Dhea />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;