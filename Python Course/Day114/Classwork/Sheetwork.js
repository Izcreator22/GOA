const { mkdirSync, writeFileSync } = require("fs")

//                Path     "Type"     Error callback
for (let i = 1; i <= 50; i++) {
    const lvlFolder = `lvl${i}`
    const lvlPath = `./${lvlFolder}`

    try {
        mkdirSync(lvlPath, {recursive: true})
        console.log(`created directory: ${lvlPath}`)

        mkdirSync(`${lvlPath}/cw`, { recursive: true })
        mkdirSync(`${lvlPath}/hw`, { recursive: true })
        console.log(`sheiqmna cw and hw subdirectoriebi ${lvlPath} shignit`)
    } catch (err) {
        console.error(`Error creating directories: ${err}`)
    }
}



const fileMaker = (fileLength, isDelete) => {
    for (let index = 0; index < fileLength + 1; index++) {

        const fileName = `./level${index}`
            if (!isDelete) {
                mkdirSync(fileName, { recursive: true })
            } else {
                mkdirSync(fileName, { recursive: true })
            }
    }
}

const files = readdirSync("./", "utf-8", (err) => {
    if (err) throw err
})

console.log(files)

// TTP: HyperText Transfer Protocol
const http = require(http)

const server = http.createServer((req, res) => {
    res.end("hello group 5")
})

const PORT = 5000
server.listen(PORT, (err) => {
    if (err) throw err
    console.log(`server listen at http://localhost:${PORT}`)
})
