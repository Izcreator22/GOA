// Conditional Statements

// 1
function checkNumber(num) {
    if (num > 0) {
        console.log("The number is positive.");
    } else if (num < 0) {
        console.log("The number is negative.");
    } else {
        console.log("The number is zero.");
    }
}

// 2
function checkEvenOdd(num) {
    if (num % 2 === 0) {
        console.log("The number is even.");
    } else {
        console.log("The number is odd.");
    }
}

// 3
function checkLeapYear(year){
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
        console.log(year + " is a leap year");
    } else {
        console.log(year + " is not a leap year");
    }
}

// 4
function getLargerNumber(num1, num2){
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

// 5
function getSmallestNumber(num1, num2, num3){
    if (num1 < num2 && num1 < num3){
        return num1;
    } else if (num2 < num1 && num2 < num3) {
        return num2;
    } else {
        return num3;
    }
}

// 6
function isEmptyString(str){
    if (str.length === 0){
        console.log("The string is empty");
    } else {
        console.log("The string is not empty");
    }
}

// 7
function palindrome(){
    let string = ["afgasg", "aarhjue", "tjraeg"]
    string.reverse();
    console.log(string)
}
palindrome()

// 8
function convertToLetterGrade(grade){
    if (grade >= 90) {
        return 'A';
    } else if (grade >= 80) {
        return 'B';
    } else if (grade >= 70) {
        return 'C';
    } else if (grade >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

// 9
function isPrime(num){
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i < num; i++){
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}


//10
function celsiusToFahrenheit(celsius){
    let Fahrenheit = (celsius * 9/5) + 32;
    console.log(celsius + "°C is " + Fahrenheit + "°F");
}



// Objects

// 1
let person = {
    name: "Gela",
    age: 30,
    city: "Texas"
};

// 2
console.log("Name:", person.name);
console.log("Age:", person.age);

// 3
person.email = "gela.gipiani@gmail.com";
console.log("Email:", person.email);

// 4
let car = {
    make: "Toyota",
    model: "Camry",
    owner: {
        name: "Gela Shavadze",
        age: 35
    }
};

// 5
console.log("Owner's name:", car.owner.name);
console.log("Owner's age:", car.owner.age);

// 6
car.model = "Prius";
console.log("New model:", car.model);

// 7
car.yearManufactured = 2024;
car.calculateCarAge = function(){
    let currentYear = new Date().theFullYear();
    return currentYear - car.yearManufactured;
};

console.log("Car age:", car.calculateCarAge());

// 8
for (let key in person){
    if (person.hasOwnProperty(key)){
        console.log(key + ":" + person[key]);
    }
}



// While loops

// 1
let i = 1;
while (i <= 10){
    console.log(i);
    i++;
}

// 2
let I = 10;
while (I >= 1){
    console.log(I);
    I--;
}

// 3
function factorial(n){
    let result = 1;
    let k = n;
    while (k > 0) {
        result *= k;
        k--;
    }
    return result;
}

console.log(factorial(5));

// 4
function fibonacci(n){
    let a = 0, b = 1;
    let next;
    console.log(a);
    if (n > 0) console.log(b);
    while (true) {
        next = a + b;
        if (next > n) break;
        console.log(next);
        a = b;
        b = next;
    }
}

fibonacci(50);

// 5
function reverseNumber(n){
    let reversed = 0;
    while (n != 0){
        reversed = reversed * 10 + (n % 10);
        n = (n - (n % 10)) / 10;
    }
    return reversed;
}

console.log(reverseNumber(123));

// 6
function largestDigit(n){
    let maxDigit = 0;
    while (n != 0) {
        let digit = n % 10;
        if (digit > maxDigit){
            maxDigit = digit;
        }
        n = (n - (n % 10)) / 10;
    }
    return maxDigit;
}

console.log(largestDigit(4729));

// 7
function isPalindromeNumber(n){
    let original = n;
    let reversed = 0;
    while (n != 0){
        reversed = reversed * 10 + (n % 10);
        n = (n - (n % 10)) / 10;
    }
    return original === reversed;
}

console.log(isPalindromeNumber(121));
console.log(isPalindromeNumber(123));

// 8
function sumOfDigits(n){
    let sum = 0;
    while (n != 0){
        sum += n % 10;
        n = (n - (n % 10)) / 10;
    }
    return sum;
}

console.log(sumOfDigits(1234));

// 9
function isPrimeNumber(n){
    if (n <= 1) return false;
    let i = 2;
    while (i < n){
        if (n % i === 0) return false;
        i++;
    }
    return true;
}

console.log(isPrimeNumber(17));
console.log(isPrimeNumber(18));

// 10
function reverseString(str){
    let reversed = "";
    let i = str.length - 1;
    while (i >= 0){
        reversed += str[i];
        i--;
    }
    return reversed;
}

console.log(reverseString("hfsaouh"));



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



// Functions

// 1
function addNumbers(a, b){
    return a + b;
}

console.log(addNumbers(5, 3));

// 2
function multiplyNumbers(a, b){
    return a * b;
}

console.log(multiplyNumbers(4, 6));

// 3
function calculateRectangleArea(width, height){
    return width * height;
}

console.log(calculateRectangleArea(5, 7)); 

// 4
function calculateCircleCircumference(radius){
    const circumference = 2 * 3.14159 * radius;
    return circumference;
}

console.log(calculateCircleCircumference(10));

// 5
function isEven(number){
    return number % 2 === 0;
}

console.log(isEven(6));
console.log(isEven(5));

// 6
function findMax(a, b){
    return a > b ? a : b;
}

console.log(findMax(8, 3));

// 7
function reverseString(str){
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--){
        reversed += str[i];
    }
    return reversed;
}

console.log(reverseString("ahaiwhfri"));

// 8
function generateNumbersArray(n){
    let numbers = [];
    for (let i = 1; i <= n; i++){
        numbers[numbers.length] = i;
    }
    return numbers;
}

console.log(generateNumbersArray(5));

// 9
function sumArray(numbers){
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    return sum;
}

console.log(sumArray([1, 2, 3, 4, 5]));

// 10
function isPerfectNumber(number){
    if (number <= 1) {
        return false;
    }
    let sum = 0;
    for (let i = 1; i < number; i++){
        if (number % i === 0) {
            sum += i;
        }
    }
    return sum === number;
}

console.log(isPerfectNumber(6));
console.log(isPerfectNumber(28));
console.log(isPerfectNumber(12));
