import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import SeahorseInfo from './SeahorseInfo';
import PageOne from "./PageOne";

function App() {
  return (
    <Router>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <h1>Seahorses</h1>
        <Link to="/">Home</Link>
        <Link to="/info">Info</Link>
        <Link to="/pages">Pages</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<SeahorseInfo />} />
        
        <Route path="/pages/*" element={<Pages />} />
        <Route path="/page" element={<PageOne />} />
      </Routes>
    </Router>
  )
}

export default App;