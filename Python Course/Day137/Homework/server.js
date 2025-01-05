// Task 1 (Shecvlili/Modified)
import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/connectDB.js";

dotenv.config()

const app = express()

const websiteData = {
    title: "Simple vebsaiti",
    description: "A simple website for demonstration purposes etc...",
    author: "Me",
    pageCount: 3
}

app.get('/data', (req, res) => {
    res.json(websiteData)
})

app.listen(process.env.PORT, (err) => {
    connectDB();
    if (err) {
        console.log('err', err)
    } else {
        console.log(`Server is running on http://localhost:${process.env.PORT}`)
    }
})

console.log("Server-side code running")