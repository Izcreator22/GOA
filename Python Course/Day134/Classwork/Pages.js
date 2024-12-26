import React from 'react';
import { Link, Outlet, Route, Routes} from 'react-router-dom';
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";

function Pages() {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <Link to="/pages/page1">Page 1</Link>
        <Link to="/pages/page2">Page 2</Link>
        <Link to="/pages/page3">Page 3</Link>
      </div>
      <Routes>
          <Route path="/page1" element={<PageOne />} />
          <Route path="/page2" element={<PageTwo />} />
          <Route path="/page3" element={<PageThree />} />
      </Routes>
     <Outlet />
    </>
  )
}

export default Pages;