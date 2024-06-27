// For loops

// 1
for (let i = 1; i <= 10; i++){
    console.log(i);
}

// 2
for (let i = 2; i <= 20; i += 2){
    console.log(i);
}

// 3
let sum = 0;
for (let i = 1; i <= 100; i++){
    sum += i;
}
console.log("Sum:", sum);

// 4
for (let i = 5; i <= 50; i += 5){
    console.log(i);
}

// 5
for (let i = 10; i >= 1; i--){
    console.log(i);
}

// 6
let factorial = 1;
for (let i = 1; i <= 5; i++){
    factorial *= i;
}

console.log("Factorial of 5:", factorial);

// 7
let numbers = [1, 2, 3, 4, 5];
let arraySum = 0;
for (let i = 0; i < numbers.length; i++){
    arraySum += numbers[i];
}

console.log("Sum of array:", arraySum);

// 8
let array = [10, 5, 8, 20, 2];
let largestNumber = array[0];
for (let i = 1; i < array.length; i++){
    if (array[i] > largestNumber){
        largestNumber = array[i];
    }
}

console.log("Largest number:", largestNumber);

// 9
function countVowels(str){
    let vowels = "aeiou";
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        for (let index = 0; index < vowels.length; index++){
            if (char === vowels[index]) {
                count++;
                break;
            }
        }
    }
    return count;
}

let string = "hello world";

console.log("Number of vowels:", countVowels(string));

// 10
let arrayNumbers = [10, 20, 30, 40, 50];
let total = 0;
for (let i = 0; i < arrayNumbers.length; i++){
    total += arrayNumbers[i];
}

let average = total / arrayNumbers.length;

console.log("Average:", average);