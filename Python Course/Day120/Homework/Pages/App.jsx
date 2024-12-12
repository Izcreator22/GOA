import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import CityCenter from './pages/ShuaQalaqshi';
import Kerch from './pages/Kerchi';
import Georgian from './pages/Georgian';
import Footer from './components/Footer';

function App() {
  const navlist = [
    { path: "/", name: "Home" },
    { path: "/shua-qalaqshi", name: "Shua Qalaqshi" },
    { path: "/kerch", name: "Kerch" },
    { path: "/georgian", name: "Georgian Culture" },
];

  return (
    <div>
      <nav>
        <ul>
          {navlist.map((item, index) => (
            <li key={`_navlinks_${index}`}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shua-qalaqshi/*" element={<ShuaQalaqshi />} />
        <Route path="/kerchi/*" element={<Kerchi />} />
        <Route path="/georgian/*" element={<Georgian />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <br />
      <Footer />
    </div>
  )
}

export default App;