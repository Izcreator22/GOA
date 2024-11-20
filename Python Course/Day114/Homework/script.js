// 1
const { mkdirSync, writeFileSync } = require("fs")

for (let i = 1; i <= 10; i++) {
  const lvlFolder = `lvl${i}`
  const lvlPath = `./${lvlFolder}`

  try {
    mkdirSync(lvlPath, { recursive: true })
    console.log(`Created directory: ${lvlPath}`)

    mkdirSync(`${lvlPath}/cw`, { recursive: true })
    mkdirSync(`${lvlPath}/hw`, { recursive: true })
    console.log(`Created cw and hw subdirectories inside ${lvlPath}`)

    writeFileSync(`${lvlPath}/cw/cw.js`, "Goa Best")
    writeFileSync(`${lvlPath}/hw/hw.js`, "Goa Best")
    console.log(`Created cw.js and hw.js inside ${lvlPath} with content "Goa Best"`)

  } catch (err) {
    console.error(`Error creating directories or files: ${err}`)
  }
};

// ...
const fs = require("fs")
const moment = require(moment) // Timestamp
// 2
function deleteFoldersInRange(start, end) {
    for (let i = start; i <= end; i++) {
        const pathToDelete = `./lvl${i}`
        try {
            fs.rmSync(pathToDelete, { recursive: true, force: true })
            logEvent(`Deleted folder ${pathToDelete}`, "success")
        } catch (err) {
            logEvent(`Error deleting folder ${pathToDelete}: ${err.message}`, "error")
      }
    }
};

// 3
function logEvent(message, status) {
    const timestamp = moment().format("YYYY-MM-DD HH:mm:ss")
    const logEntry = `${timestamp} - ${status} - ${message}\n`
    fs.appendFileSync("log.txt", logEntry)
};

// 4
function searchTextInFiles(folderPath, searchText) {
    const files = []
    try {
        const items = fs.readdirSync(folderPath)
        for (const item of items) {
            const itemPath = `${folderPath}/${item}`
            if (fs.statSync(itemPath).isFile()) {
                const fileContent = fs.readFileSync(itemPath, "utf-8")
                if (fileContent.includes(searchText)) {
                    files.push(itemPath)
                }
            }
        }
    } catch (err) {
        console.error(`Error searching folder ${folderPath}: ${err.message}`)
        return []
    }
    return files
};

// 5
const express = require("express")
const fs = require("fs")
const moment = require("moment")
const path = require("path:")

const app = express();
const port = process.env.PORT || 3000

app.use(express.json())

app.get('/', (req, res) => {
    const now = moment().format("MMMM Do YYYY, h:mm:ss a")
    res.send(`Welcome to GOA! The current time is: ${now}`)
})

app.get("/data", (req, res) => {
    const filePath = path.join(__dirname, "script.json")

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error("Error reading data file:", err)
            return res.status(500).send("Error reading data")
        }
        res.json(JSON.parse(data))
    })
})

app.use((err, reg, res, next) => {
    console.error(err.stack)
    res.stats(500).send("Something broke")
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})

