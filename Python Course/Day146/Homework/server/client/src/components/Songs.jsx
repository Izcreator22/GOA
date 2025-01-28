import React, { useState, useEffect } from 'react';

function Songs() {
    const [songs, setSongs] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/api/songs')
            .then(res => res.json())
            .then(data => setSongs(data))
    }, []);

    return (
        <div>
            <h2>Songs</h2>
            <ul>
                {songs.map(song => (
                    <li key={song.id}>
                        {song.title} - {song.artist}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Songs
