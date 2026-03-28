import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Alfa from './Alfa';
import Dhea from './Dhea'; // ✅ aktifkan

function App() {
  return (
    <Router>
      <div>
        <nav className="p-4 bg-gray-800 text-white flex gap-4 justify-center">
          <Link to="/alfa" className="hover:text-blue-300">Profil Alfa</Link>
          <Link to="/dhea" className="hover:text-blue-300">Profil Dhea</Link> {/* ✅ aktif */}
        </nav>

        <Routes>
          <Route path="/alfa" element={<Alfa />} />
          <Route path="/dhea" element={<Dhea />} /> {/* ✅ aktif */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;