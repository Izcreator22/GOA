// 1
class person {
    constructor(name, age){
        this.name = name
        this.age = age
    }

    greet(){
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`
    }
}


// 2
class Student extends Person {
    constructor(name, year, grade){
        super(name, age)
        this.grade = grade
    }

    study(){
        return `${this.name} is studying.`
    }
}


// 3
class Calculator {
    static add(a, b){
        return a + b
    }

    static subtract(a, b){
        return a - b
    }

    static multiply(a, b){
        return a * b
    }

    static divide(a, b){
        if (b != 0){
            return a/ b
        } else {
            return "Can't divide by zero"
        }
    }
}


// 4
class Car {
    constructor(make, model, year){
        this.make = make
        this.model = model
        this.year = year
    }

    startEngine(){
        console.log("Engine started")
    }

    stopEngine(){
        console.log("Engine stopped")
    }
}

const car1 = new Car("Toyota", "Daihatsu", "2022")
const car2 = new Car("BMW", "Gran Limousine", "2024")

car1.startEngine()
car2.stopEngine()


// 5
function Animal(name, breed, color, length){
    this,name = name
    this.breed = breed
    this.color = color
    this.length = length
}

Animal.prototype.bark = function(){
    return `${this.name} is barking`
}

Animal.prototype.decribe = function(){
    return `${this.name} is a ${this.length}cm long ${this.breed} with ${this.color} fur`
}

const dog = new Animal("Homie", "Dobermann", "Black", 100)

console.log(dog.bark())
console.log(dog.describe())
