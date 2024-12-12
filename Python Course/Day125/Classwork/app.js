const http = require("http")
const { readFileSync, read } = require("fs")

const html = readFileSync("./page/homepage.html")
const css = readFileSync("./index.css")

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.writeHead(200, { "Content-Type": "text/html" })
        res.end(html)
        res.end()
    } else if (req.url == "/index.css") {
        res.writeHead(200, { "Content-Type": "text/css" })
        res.write(css)
        res.end()
    }


    else if (req.url == "/book") {
        res.writeHead(200, { "Content-Type": "text/html" })
        res.end("book")
    } else {
        res.writeHead(404, { "Content-Type": "text/html" })
        res.end("404 page not found")
    }

    const PORT = 5000
    server.listen(PORT, () => {
        console.log(`app has connected to port: ${PORT}`)
    })




    const express = require("express")
    const app = express()
    const port = 4000

    app.get("/", (req, res) => {
        res.send("Goa is THE BEST")
    })

    app.listen(port, () => {
        console.log("`server listening on port ${port}`")
    })

