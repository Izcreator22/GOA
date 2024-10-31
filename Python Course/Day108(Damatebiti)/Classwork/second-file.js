const { name1, name2, myFunc } = require("./app")

const newFunction = () => {
    console.log("New function is running")
}

console.log(name1, name2);
console.log(myFunc("Some data"))
newFunction();
