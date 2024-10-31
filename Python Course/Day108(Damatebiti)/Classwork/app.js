//
// __dirname       -current dir
// __filename      -current filename
// module          -მოდულები არიან ყველა ფოლდერი თუ ფაილი; commonJS

const { name1, name2, myFunc } = require("./app-module")

console.log(__dirname)
console.log(__filename)
console.log(module)

module.exports = {name1, name2, myFunc}


const os = require("os")

// userInfo
console.log(os.userInfo())

//
console.log(`compter uptime ${os.uptime()} seconds`)


const path = require("path")
// console.log(path)

// seperator 
const sep = path.sep
const path = require("path")
const {readFileSync, writeFileSync, mkdirSync} = require("fs")

const first = path.join(",/folder", "subfolder", "first.text")
const second = path.join("./folder", "subfolder", "second.text")

const firstText = readFileSync(first, "utf8")
const secondText = readFileSync(second, "utf8")
console.log(firstText)
console.log(secondText)

//             path, type whatever you want   
writeFileSync(first, "");
writeFileSync(second, "");

mkdirSync("")


console.log(first)
console.log(second)

const resolve = path.resolve(__dirname)