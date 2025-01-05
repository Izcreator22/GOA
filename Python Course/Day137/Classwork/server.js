import express from "express"
import dotenv from "dotenv"
import { connectDB } from './db/connectDB.js'

dotenv.config()

const app = express()

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(process.env.PORT, (err) => {
    connectDB()
    console.log(`Server is running on http:localhost:${process.env.PORT}`)
})
console.log("Server-side code running")

