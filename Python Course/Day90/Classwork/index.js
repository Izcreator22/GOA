let id = 0
let person = {
    [`name${id}`]: "davit",
    surname: "grdzelishvili",
    bro: () => this.name + 4
}

let newWayPerson = {
    [`name${++id}`]: ++id,
    [`name${++id}`]: ++id,
    [`name${++id}`]: ++id,
}

console.log(newWayPerson["name4"])
console.log(person.name0)

console.log("davita".charAt(2).toUpperCase() + "davita".slice(1))

const newObject = new Object.assign([], newWayPerson, person)
console.log()
console.log(newObject.name1)

// Array Destruction
let myArr = ["dato", "cotne", "shalva"]

let [name, name1, name2] = myArr

console.log()
console.log(name2)

let [x = 3, y = 4] = [2]

console.log(y)