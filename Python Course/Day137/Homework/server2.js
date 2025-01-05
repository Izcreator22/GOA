// Task 2

import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/connectDB.js";

dotenv.config()

const app = express()

// User page
app.get('./user', (req, res) => {
    res.json({
        username: "User12343564",
        email: "ragacaragac@gmail.com",
        memberSInce: "2020-05-25"
    })
})


app.get('./content', (req, res) => {
    res.json({
        articles: [
            { title: "Article 1", body: "First Article" },
            { title: "Article 2", body: "Another/Second Article" }
        ]
    })
})


app.get('/admin', (req, res) => {
    res.json({
      message: "Admin Dashboard",
      users: 50,
      totalPosts: 200
    });
});


app.get('/data', (req, res) => {
    res.json( {
        title: "Simple vebsaiti",
        description: "Asample website for demonstration purposes",
        author: "Me",
        pageCount: 3
    })
})
app.listen(process.env.PORT, (err) => {
    connectDB()
    if (err){
        console.log(err)
    } else {
        console.log(`Server is running on http://localhost:${process.env.PORT}`)
    }
})

console.log("Server-side code running")

