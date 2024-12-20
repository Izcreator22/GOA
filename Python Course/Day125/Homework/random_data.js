const fs = require("fs")

const words = ["Hello", "World", "JavaScript", "Node", "Server"]
const prepositions = ["on", "in", "at", "with", "above"]

const generateRandomPhrase = () => {
    const randomWord1 = words[Math.floor(Math.random() * words.length)]
    const randomWord2 = words[Math.floor(Math.random() * words.length)]
    const randomPreposition = prepositions[Math.floor(Math.random() * prepositions.length)]
    return `${randomWord1} ${randomPreposition} ${randomWord2}`
}

const data = []
for (let i = 0; i < 20; i++) {
    data.push(generateRandomPhrase())
}

fs.writeFileSync("random_data.txt", data.join("\n"))
console.log("random_data.js(txt) created successfully")
