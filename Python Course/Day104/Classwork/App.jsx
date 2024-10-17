import React from 'react'

const MovieList = () => {
  const movies = [
    { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
    { title: 'The Lord of the Rings: The Two Towers', year: 2002 },
    { title: 'The Lord of the Rings: The Return of the King', year: 2003 }
  ];

  return (
    <div>
      <h1>Favorite Movie Trilogy</h1>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            {movie.title} ({movie.year})
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MovieList