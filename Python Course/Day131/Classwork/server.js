import React from 'js'

export default function MainFoodApp() {
    returjn (
        <div>
            
        </div>
    )
}

// 1
const express = require("express")
const app = express()
const PORT = 3000

app.get("/", (req, res) => {
  return res.status(200).send("Hello World!")
})

app.get("/book", (req, res) => {
  res.status(200).send("Hello book")
})

app.listen(PORT, () => {
  console.log(`server is running on port http://localhost:${PORT}`)
})
