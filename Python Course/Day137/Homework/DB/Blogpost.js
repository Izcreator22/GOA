// Task 4
import mongoose from "mongoose";

const BlogPostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
})

const BlogPost = mongoose.model('BlogPost', BlogPostSchema)

export default BlogPost


// Server(1,2,3) shecvlili
import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/connectDB.js";
import BlogPost from "./db/BlogPost.js";

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



app.get('/blogs', async (req, res) => {
    try{
    const blogs = await BlogPost.find()
        res.json({blogs})
    }
    catch(error){
        console.log(error)
        res.status(500).json({message : 'Error getting blogs', error})
    }
})

app.get('/blog/:id', async(req, res) => {
  const id = req.params.id
    try{
        const blog = await BlogPost.findById(id)
        res.json({blog})
    }
    catch(error){
      console.log(error)
       res.status(500).json({message : 'Error getting blog by ID', error})
    }
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
