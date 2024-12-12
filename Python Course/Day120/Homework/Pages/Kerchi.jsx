import React from "react";
import { Routes, Route, Link, Outlet, useMatch } from "react-router-dom";

function Kerchi() {
    const match = useMatch("/kerchi/*")
    return(
        <div>
            <h1>Kerchi</h1>
            <ul>
                <li> <Link to={`${match.pathname}/history`}>History</Link> </li>
                <li> <Link to={`${match.pathname}/geography`}>Geography</Link> </li>
                <li> <Link to={`${match.pathname}/geography`}>Medieval Period</Link> </li>
                <li> <Link to={`${match.pathname}/geography`}>Cuisine</Link> </li>
            </ul>
            <Routes>
                <Route path="history" element={<p>Kerchi History</p>} />
                <Route path="geography" element={<p>Kerchi Geography</p>} />
                <Route path="geography" element={<p>Kerchi Medieval Period</p>} />
                <Route path="geography" element={<p>Kerchi Cuisine</p>} />
            </Routes>
            <Outlet />
        </div>
    )
}

export default Kerchi;