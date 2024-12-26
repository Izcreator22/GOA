import React from "react";
import { Link, Outlet } from "react-router-dom";

function PageLayout() {
    return (
        <>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <Link to="/topics/0">Shua Qalaqshi</Link>
            <Link tp="/topics/1">Qerchi</Link>
            <Link to="/topics/3">Qartuli Filmebi</Link>
            <Link to="/topics/4">Qartuli TV serialebi</Link>
            <Link to="/topics/5">Qartuli cekva da stili</Link>
        </div>
        <Outlet />
        </>
    )
}

export default PageLayout;