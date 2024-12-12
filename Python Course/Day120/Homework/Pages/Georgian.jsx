import React from "react";
import { Routes, Route, Link, Outlet, useMatch } from "react-router-dom";

function Georgian() {
    const match = useMatch("/georgian/*")
  return (
    <div>
      <h1>Georgian Culture</h1>
      <ul>
        <li><Link to={`${match.pathname}/films`}>Georgian Movies</Link></li>
        <li><Link to={`${match.pathname}/tv-series`}>Georgian TV Series</Link></li>
        <li><Link to={`${match.pathname}/dance-styles`}>Georgian Dance Styles and Culture</Link></li>
      </ul>
         <Routes>
              <Route path="movies/*" element={<GeorgianFilms match={match}/>} />
              <Route path="tv-series/*" element={<GeorgianTVSeries match={match}/>} />
              <Route path="dance-styles/*" element={<GeorgianDanceStyles match={match} />} />
        </Routes>
        <Outlet />
    </div>
  )
}

function GeorgianMovies({match}) {
    return (
        <div>
            <h2>Georgian Movies</h2>
            <ul>
                <li><Link to={`${match.pathname}/classics`}>Classics</Link></li>
                <li><Link to={`${match.pathname}/modern`}>Modern</Link></li>
            </ul>
              <Routes>
                <Route path="classics" element={<p>Georgian Movie Classics</p>} />
                <Route path="modern" element={<p>Modern Georgian Movies</p>} />
            </Routes>
        </div>
    )
}

function GeorgianTVSeries({match}){
    return (
        <div>
            <h2>Georgian TV Series</h2>
            <ul>
                 <li><Link to={`${match.pathname}/drama`}>Drama</Link></li>
                <li><Link to={`${match.pathname}/comedy`}>Comedy</Link></li>
            </ul>
                <Routes>
                     <Route path="drama" element={<p>Georgian Drama TV Series</p>} />
                    <Route path="comedy" element={<p>Georgian Comedy TV Series</p>} />
            </Routes>
        </div>
    )
}

function GeorgianDanceStyles({match}) {
    return(
        <div>
            <h2>Georgian Dance Styles</h2>
            <ul>
                <li><Link to={`${match.pathname}/traditional`}>Traditional</Link></li>
                <li><Link to={`${match.pathname}/modern`}>Modern</Link></li>
            </ul>
                <Routes>
                    <Route path="traditional" element={<p>Traditional Georgian Dances</p>} />
                    <Route path="modern" element={<p>Modern Georgian Dances</p>} />
                </Routes>
        </div>
    )
}


export default Georgian;