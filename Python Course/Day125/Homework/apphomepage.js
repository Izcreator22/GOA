const http = require("http")
const fs = require("fs")
const path = require("path")

const PORT = 5000

const server = http.createServer((req, res) => {

    let filePath = path.join(__dirname, "page", req.url === "/" ? "homepage.html" : req.url)

    const extname = String(path.extname(filePath)).toLowerCase()
    let contentType = "text/html"

    switch (extname) {
        case '.js':
            contentType = "text/javascript"
            break;
        case '.css':
            contentType = "text/css"
            break;
        case '.json':
            contentType = "application/json"
            break;
        case '.png':
            contentType = "image/png"
            break;
        case '.jpg':
            contentType = "image/jpg"
            break;
}

    fs.readFile(filePath, (err, content) => {
        if (err) {
            if(err.code == "ENOENT"){
                res.writeHead(404, { "Content-Type": "text/html" })
                res.end("404 page not found")
            } else {
                res.writeHead(500)
                res.end(`Sorry, check with the site admin for error: ${err.code}.`)
            }
        } else {
            res.writeHead(200, { "Content-Type": contentType })
            res.end(content, "utf-8")
        }
    })
})


server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});