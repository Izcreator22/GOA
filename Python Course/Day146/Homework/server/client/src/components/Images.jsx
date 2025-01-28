import React, { useState, useEffect } from 'react';

function Images() {
    const [images, setImages] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/api/images')
            .then(res => res.json())
            .then(data => setImages(data))
    }, []);

    return (
        <div>
            <h2>Images</h2>
            {images.map(image => (
                <div key={image.id}>
                    <img src={image.url} alt={image.description} style={{ maxWidth: '100px' }} />
                    <p>{image.description}</p>
                </div>
            ))}
        </div>
    );
}
export default Images

