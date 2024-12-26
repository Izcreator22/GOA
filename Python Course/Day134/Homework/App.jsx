import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import PageLayout from "./PageLayout";
import TopicPage from "./TopicPage";

function App() {
    return (
        <Router>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <h1>Info</h1>
                <Link to="/">Home</Link>
                <Link to="/topics">Topics</Link>
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="topics" element={<PageLayout />} />
                <Route path="/topics/:topicId" element={<TopicPage />} />
            </Routes>
        </Router>
    )
}

export default App;