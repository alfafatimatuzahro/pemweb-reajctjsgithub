import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Alfa from './Alfa';
import Dhea from './Dhea'; 
import Nadia from './Nadia';// ✅ aktifkan

function App() {
  return (
    <Router>
      <div>
        <nav className="p-4 bg-gray-800 text-white flex gap-4 justify-center">
          <Link to="/alfa" className="hover:text-blue-300">Profil Alfa</Link>
          <Link to="/dhea" className="hover:text-blue-300">Profil Dhea</Link> 
          <Link to="/nadia" className="hover:text-blue-300">Profil Nadia</Link>
          {/* ✅ aktif */}
        </nav>

        <Routes>
          <Route path="/alfa" element={<Alfa />} />
          <Route path="/dhea" element={<Dhea />} />
          <Route path="/nadia" element={<Nadia />} /> {/* ✅ aktif */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;