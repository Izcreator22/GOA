// Constructor

let arrayConstructor = new Array(1, 2, 3, 4, 5);

console.log(arrayConstructor);

// Literal
let arrayLiteral = [5, 6, 7, 8, 9, 10];

console.log(arrayLiteral);


arrayConstructor[2] = 30;
arrayLiteral[2] = 80;

console.log(arrayConstructor);
console.log(arrayLiteral);


// Index

console.log(arrayConstructor[2]);
console.log(arrayLiteral[2]);

arrayConstructor.push(6);
arrayLiteral.push(11);

console.log(arrayConstructor);
console.log(array.Literal);


let removedFromConstructor = arrayConstructor.pop();
let removedFromLiteral = arrayLiteral.pop();

console.log(arrayConstructor);
console.log(arrayLiteral);
console.log(removedFromConstructor);
console.log(removedFromLiteral);



// 2
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
for (let i = 0; i < numbersArray.length; i++){
    sum += numbersArray[i];
}

console.log(sum);

// 3
let namesArray = ["Tamaza", "Sochika", "Tengo", "Baqari", "Durmishxani", "Gela", "Sveta", "Amirani", "Eqvtime", "Qaixosro"];
let nameToCount = "Tamaza";
let count = 0;

for (let i = 0; i < namesArray.length; i++){
    if (namesArray[i] == nameToCount){
        count++;
    }
}

console.log("The name" + nameToCount + "appears" + count + "times");  // ?

// 4
let numArray = [10, 15, 20, 25, 30, 35, 40, 45, 50, 55];

for (let i = 0; i < numArray.length; i++){
    if (numArray[i] % 2 == 0){
        console.log(numArray[i] + "is even");
    } else {
        console.log(numArray[i] + "is odd");
    }
}

// 5
let array1 = [1, 2, 3, 4, 5];
let array2 = [6, 7, 8, 9, 10];
let concatenatedArray = array1.concat(array2);
console.log(concatenatedArray);

// 6
let mainArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let evens = [];
let odds = [];
for (let i = 0; i < mainArray.length; i++){
    if (mainArray[i] % 2 == 0){
        evens.push(mainArray[i]);
    } else {
        odds.push(mainArray[i]);
    }
}
console.log(evens);
console.log(odds);

// 7
let names = ["Tamaza", "Sochika", "Tengo", "Baqari", "Durmishxani", "Gela", "Sveta", "Amirani", "Eqvtime", "Qaixosro"];
for (let i = 0; i < names.length; i += 2){
    console.log(i, ':', names[i]);
}

// 8
let numbers = [];
for (let i = 0; i <= 50; i++){
    numbers.push(i);
}
console.log(numbers);

// 9
let test_Array = [10, 20, 30, 40, 50];
let searchValue1 = 30;
let searchValue2 = 60;
let index1 = -1;
let index2 = -1;

// index of searchValue1
for (let i = 0; i < testArray.length; i++){
    if (testArray[i] == searchValue1){
        index1 = i;
        break;
    }
}
// index of searchValue2
for (let i = 0; i < testArray.length; i++){
    if (testArray[i] == searchValue2) {
        index2 = i;
        break;
    }
}

console.log("Index of" + searchValue1 + ":" + index1);
console.log("Index of" + searchValue2 + ":" + index2);

// 10
function getEvenNumbers(numbersArray){
    let evenNumbers = [];

    for (let i = 0; i < numbersArray.length; i++){
        if (numbersArray[i] % 2 == 0){
            evenNumbers.push(numbersArray[i])
        }
    }
    return evenNumbers;
}

let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenArray = getEvenNumbers(testArray);

console.log(evenArray);
