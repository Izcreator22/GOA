// copmponents/ActionMovies.jsx
import React from "react"
import Button from "./Button"

const ActionMovies = () => {
  const movies = [
    {title: "Mad Max: Fury Road", year: 2015, description: "An apocalyptic story set in a stark desert."},
    {title: "John Wick", year: 2014, description: "A retired hitman seeking vengeance."},
    {title: "Die Hard", year: 1988, description: "A cop tries to save hostages in a building."},
  ]

  return (
    <div style={{padding: "20px", maxWidth: "800px", margin: "auto"}}>
      <h2>Top Action Movies</h2>
      <ul>
        {movies.map((movie, index) => (
          <li key={index} style={{marginBottom: "20px"}}>
            <h3>{movie.title} ({movie.year})</h3>
            <p>{movie.description}</p>
            <Button text="Watch Trailer" color="red" onClick={() => alert(`Watching trailer for ${movie.title}`)}/>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ActionMovies

