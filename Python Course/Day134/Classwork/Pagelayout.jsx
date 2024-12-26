// Pagelayout
import React from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

function PageLayout() {
    return (
      <>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <Link to="/pages/0">Page 1</Link>
          <Link to="/pages/1">Page 2</Link>
          <Link to="/pages/2">Page 3</Link>
        </div>
        <Outlet />
      </>
    )
}

// Pages
function Pages() {
  const { pageId } = useParams();
    const Info = [
        "",
        "",
        "",
        "",
    ]

    return (
      <div>
        {Info[pageId] ?
            <p>{Info[pageId]}</p> :
            <p>{Info[3]}</p>}
      </div>
    )
}
export { PageLayout, Pages }

