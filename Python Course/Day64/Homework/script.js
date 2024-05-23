// Task 1
let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));

let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;

console.log("Sum:" + sum);
console.log("Difference:" + difference);
console.log("Product:" + product);
console.log("Quotient:" + quotient);

// Task 2
let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");

alert("Welcome" + firstName + " " + lastName + "!");

// Task 3
function sumBetween(start, end){
    let sum = 0;
    for (let i = start; i <= end; i++){
        sum += i;
    }
    return sum;
}

// Task 4
function sumEvenBetween(start, end){
    let sum = 0;
    for (let i = start; i <= end; i++){
        if (i % 2 === 0){
            sum += i;
        }
    }
    return sum;
}
