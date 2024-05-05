// Task 2:
const mainObject = {
    object1: {
        property1: "value1",
        property2: "value2:"
    },
    object2: {
        property3: "value3",
        property4: "value4"
    }
};

mainObject.object1.property1 = "new value";
mainObject.object2.property4 = "new value";

console.log(mainObject.object1);
console.log(mainObject.object2);
