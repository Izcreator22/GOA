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
