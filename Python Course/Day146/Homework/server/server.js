const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const movies = [
    { id: 1, title: 'Movie 1', genre: 'Action' },
    { id: 2, title: 'Movie 2', genre: 'Adventure' },
    { id: 3, title: 'Movie 3', genre: 'Drama' }
]

const songs = [
    { id: 1, title: 'Song 1', artist: 'Artist 1' },
    { id: 2, title: 'Song 2', artist: 'Artist 2' },
    { id: 3, title: 'Song 3', artist: 'Artist 3' }
]

const images = [
    { id: 1, url: 'https://placek.com/200/300', description: 'K1' },
    { id: 2, url: 'https://placek.com/201/301', description: 'K2' },
    { id: 3, url: 'https://placek.com/202/302', description: 'K3' }
]


const users = [
  { id: 1, name: 'User 1', profilePic: 'https://placekitten.com/50/50'},
  { id: 2, name: 'User 2', profilePic: 'https://placekitten.com/51/51'},
  { id: 3, name: 'User 3', profilePic: 'https://placekitten.com/52/52'},
]

app.get('/api/movies', (req, res) => {
    res.json(movies);
})

app.get('/api/songs', (req, res) => {
    res.json(songs);
})

app.get('/api/images', (req, res) => {
    res.json(images);
})

app.get('/api/users', (req, res) => {
    res.json(users);
})


app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})

