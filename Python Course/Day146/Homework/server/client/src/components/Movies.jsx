import React, { useState, useEffect } from 'react';

function Movies() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/api/movies')
            .then(res => res.json())
            .then(data => setMovies(data))
    }, []);

    return (
        <div>
            <h2>Movies</h2>
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>
                        {movie.title} ({movie.genre})
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Movies
