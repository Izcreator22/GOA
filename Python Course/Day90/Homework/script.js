const person = {
    firstName: "Ilia",
    lastName: "Dawson",
    age: 80
};

person.gender = "Male";
person.occupation = "Software Engineer";


const house = {
    houseName: "Skyscraper",
    address: "221B Baker Street, London."
};

Object.assign(person, house);

console.log(person);


const {firstName, lastName, age, gender, occupation, houseName, address} = person;

console.log(firstName);
console.log(address);


const colors = ["red", "black", "purple"];

const [color1, color2, color3] = colors;

console.log(color1);
console.log(color2);

