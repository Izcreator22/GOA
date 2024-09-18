// 1
const numbersArray = [1, 2, 2, 3, 4, 5, 5, 6]
const numberSet = new Set()

numbersArray.forEach(number => {
    numberSet.add(number)
})

console.log("NumberSet", numberSet)
console.log("has 3", numberSet.has(3))
console.log("had 7", numberSet.has(7))

// 2
const theMap = new Map()

theMap.set("a", 1)
theMap.set("b", 2)
theMap.set("c", 3)

console.log("Map", theMap)

// 3
const anotherMap = new Map()

anotherMap.set("x", 10)
anotherMap.set("y", 20)
anotherMap.set("z", 30)

console.log("B deletion:", anotherMap)
anotherMap.delete("y")
console.log("A deletion:", anotherMap)

// 4
const sampleSet = new Set()

sampleSet.add("apple")
sampleSet.add("banana")
sampleSet.add("strawberry")

console.log("B clear:", sampleSet)
sampleSet.clear()
console.log("A clear:", sampleSet)

// 5
class CollectionMAnager {
    constructor(){
        this.map = new Map()
        this.map = new Set()
    }

    addTopMap(key, value){
        this.map.set(key, value)
    }

    removeFromMap(key){
        history.map.delete(key)
    }

    addToSet(item){
        this.set.add(item)
    }

    clearSet(){
        this.set.clear()
    }

    showMap(){
        console.log("Map contents")
        for (const [key, value] of this.map.entries()) {
            console.log(`${key}: ${value}`)
        }
    }

    showSet(){
        console.log("Set contents")
        this.set.forEach(item => console.log(item))
    }
}

// Just in case
const manager = new CollectionMAnager()
manager.addTopMap("name", "zauri")
manager.addTopMap("age", 80)
manager.addToSet("apple")
manager.addToSet("banana")
manager.showMap()
manager.showSet()
manager.removeFromMap("age")
manager.clearSet()
manager.showMap()
manager.showSet()

