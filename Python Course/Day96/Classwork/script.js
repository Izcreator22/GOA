// 1
const person = new Map()

person.set("name", "Zauri")
person.set("surname", "Turmanidze")
person.set("age", 80)

console.log(person.get("name"))
console.log(person.get("surname"))
console.log(person.get("age"))


// 2
const repeatList = [1, 2, 3, 1, 2, 4, 3, 5]
const uniqueSet = new Set(repeatList)

const uniqueList = [...uniqueSet]
console.log(uniqueList)

