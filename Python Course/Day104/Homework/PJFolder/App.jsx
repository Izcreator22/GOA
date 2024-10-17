import React, { useState } from "react"

const App = () => {
  const [count, setCount] = useState(0)

  const arrMovieNames = [
    "The Matrix",
    "Inception",
    "The Dark Knight",
    "Django Unchained",
    "Fight Club",
    "The Godfather",
    "Forrest Gump",
    "The Lord of the Rings",
    "Star Wars",
    "The Shawshank Redemption"
  ]

  const arrNav = ["Home", "About", "Movies", "Contact"]

  return (
    <div>
      <nav>
        <ul style={{display: "flex", listStyle: "none", gap: "10px"}}>
          {arrNav.map((navItem, index) => (
            <li key={index} style={{cursor: "pointer"}}>
              {navItem}
            </li>
          ))}
        </ul>
      </nav>

      <div style={{marginTop: "20px"}}>
        <h1>Counter: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)} style={{marginLeft: "10px"}}>Decrement</button>
      </div>

      <div style={{marginTop: "20px"}}>
        <h2>Favorite Movies</h2>
        <ul>
          {arrMovieNames.map((movie, index) => (
            <li key={index}>{movie}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App;