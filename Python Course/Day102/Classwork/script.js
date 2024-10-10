import { arr1 } from "./arrIndex.js"
import { arr2 } from "./arrIndex2.js"

import handleClick from "./data/funkExport.js"
import { handleOver } from "./data/funkExport.js"
import * as math from "./data/mathModule.js"


console.log("-----function---------")
console.log(handleClick("bro"), handleOver())
console.log("------files----------")
console.log(arr1, arr2)
console.log("---------Multiple-models-------------")
console.log(math.sum(3, 5))

/* 
{
    "type": "module",
    "scripts": {
        "dev": "node indexIteratorFunction.js"
    }
}
*/

export let arr1 = "pirveli file"


const handleCLick = (x) => {
    console.log("clicked", x)
}

export default (handleClick)



let arrMap = [1, 2, 3, 4, 5, 6].map((item, index) => (
    item % 2 == 1
))
console.log(arrMap)

let arrFilter = [1, 2, 3, 4, 5, 6].filter((item, index) => (
    item % 2 == 1
))
console.log(arrFilter)


const find = [4, 5, 1, 8, 2, 0].find(item => item >3)
console.log(find)
const findIndex = [4, 5, 1, 8, 2, 0].findIndex(item => item >3)
console.log(findIndex)
const arrJoin = [1, 3, 4, 5, 6, 7].join(" ")
console.log(arrJoin)

console.log("foo".repeat(3))

console.log("SoloLearn".indexOf("log"))
console.log("SoloLearn".indexOf("o", 1))

console.log("SoloLearn".startsWith("Solo", 0))
console.log("SoloLearn".endsWith("Solo", 4))
console.log("SoloLearn".includes("Lole"))
console.log("SoloLearn".includes("olo", 1))
console.log("SoloLearn".includes("olo", 2))
