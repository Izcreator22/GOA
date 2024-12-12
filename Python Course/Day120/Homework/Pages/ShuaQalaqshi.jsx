import React from "react";
import { Routes, Route, Link, Outlet, useMatch } from "react-router-dom";

function CityCenter(){
    const match = useMatch("/shua-qalaqshi/*")
    return(
        <div>
            <h1>Shua Qalaqshi</h1>
            <ul>
                <li> <Link to={`${match.pathname}/history`}>History</Link> </li>
                <li> <Link to={`${match.pathname}/architecture`}>Seasons</Link> </li>
                <li> <Link to={`${match.pathname}/Humor`}>Humor</Link> </li>
            </ul>
            <Routes>
                <Route path="architecture" element={<p>History</p>} />
                <Route path="architecture" element={<p>Seasons</p>} />
                <Route path="architecture" element={<p>Humor</p>} />
            </Routes>
            <Outlet />
        </div>
    )
}

export default CityCenter;