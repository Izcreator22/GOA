// Task 3
import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/connectDB.js";

dotenv.config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.post('/process-data', (req, res) => {
  const dataType = req.headers['content-type']
    let receivedData = {}
    if (dataType == 'application/json'){
        receivedData = req.body
        console.log('received json', receivedData)
    } else if(dataType == 'application/x-www-form-urlencoded'){
        receivedData = req.body
        console.log('received url-encoded', receivedData)
    }
  res.json({
    message: 'Data received and processed successfully.',
    data: receivedData,
    dataType : dataType
  })
})

// User Page
app.get('/user', (req, res) => {
    res.json({
        username: "testUser123",
        email: "testuser@example.com",
        memberSince: "2023-01-15"
    })
})

// Content Page
app.get('/content', (req, res) => {
    res.json({
        articles: [
            { title: "Article 1", body: "This is the first article." },
            { title: "Article 2", body: "Here is another article." }
        ]
    })
})

// Admin Page
app.get('/admin', (req, res) => {
    res.json({
        message: "Admin Dashboard",
        users: 50,
        totalPosts: 200,
    })
})


app.get('/data', (req, res) => {
    res.json( {
        title: "My Simple Website",
        description: "This is a sample website for demonstration purposes.",
        author: "AI Assistant",
        pageCount: 3
    })
})


app.listen(process.env.PORT, (err) => {
    connectDB()
    if (err){
        console.log('err' , err)
    } else {
        console.log(`Server is running on http://localhost:${process.env.PORT}`)
    }
})

console.log("Server-side code running")