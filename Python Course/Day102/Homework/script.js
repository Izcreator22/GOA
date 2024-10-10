// 1

// map()
const arrMap = [1, 2, 3, 4, 5, 6].map((item) => item * 2)
console.log(arrMap1)

const arrMap2 = [1, 2, 3, 4, 5, 6].map((item) => item % 2 == 1)
console.log(arrMap2)

// filter()
const arrFilter1 = [1, 2, 3, 4, 5, 6].filter((item) => item % 2 == 1)
console.log(arrFilter1)

const arrFilter2 = [1, 2, 3, 4, 5, 6].filter((item) => item > 3);
console.log(arrFilter2);

// find()
const find1 = [4, 5, 1, 8, 2, 0].find((item) => item > 3)
console.log(find1)

const find2 = [4, 5, 1, 8, 2, 0].find((item) => item % 2 == 0)
console.log(find2)

// findIndex()
const findIndex1 = [4, 5, 1, 8, 2, 0].findIndex((item) => item > 3)
console.log(findIndex1)

const findIndex2 = [4, 5, 1, 8, 2, 0].findIndex((item) => item == 8)
console.log(findIndex2)

// join()
const arrJoin1 = [1, 3, 4, 5, 6, 7].join(" ")
console.log(arrJoin1)

const arrJoin2 = ["a", "b", "g"].join(", ")
console.log(arrJoin2)

// repeat()
console.log("foo ".repeat(3))

console.log("hello".repeat(2))

// indexOf()
console.log("SoloLearn".indexOf("log"))

console.log("SoloLearn".indexOf("o", 4))

// startsWith() / endsWith()
console.log("SoloLearn".startsWith("Solo", 0))

console.log("SoloLearn".endsWith("Solo", 4))

// includes()
console.log("SoloLearn".includes("loLe")) //True

console.log(["a", "e"].includes("e")) //True

console.log("SoloLearn".includes("olo", 1)) //True

console.log("SoloLearn".includes("olo", 2)) //False

// 2
export const arr1 = [1, 2, 3]

export const arr2 = ["a", "b", "g"]

export const arr3 = [true, false, true]


