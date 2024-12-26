import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import PageLayout from './PageLayout';
import Pages from "./Pages";

function App() {
    return (
      <Router>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <h1>Info</h1>
          <Link to="/">Home</Link>
          <Link to="/pages">Pages</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages/*" element={<PageLayout />} />
          <Route path="/pages/:pageId" element={<Pages />} />
        </Routes>
      </Router>
    )
}
