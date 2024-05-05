// Task 1:
function shiftParagraphs() {
    const para1Text = document.getElementById('para1').textContent;
    const para2Text = document.getElementById('para2').textContent;
    const para3Text = document.getElementById('para3').textContent;

    document.getElementById('para1').textContent = para3Text;
    document.getElementById('para2').textContent = para1Text;
    document.getElementById('para3').textContent = para2Text;
}

// task 2:
let number = 10;

function subtractOne() {

    number -= 1;
    document.getElementById('number').textContent = number;
        }

function reset() {
    number = 10;
    document.getElementById('number').textContent = number;
        }

function addOne() {
    number += 1;
    document.getElementById('number').textContent = number;
        }

// Task 3:
function changeColor(color) {
    document.getElementById('para1').style.color = color;
    document.getElementById('para2').style.color = color;
    document.getElementById('para3').style.color = color;
}

// Task 4:
const carInfo = {
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    color: "Silver",
    engine: "V6",
    displayInfo: function(){
        console.log("This car is a " + this.color + " " + this.year + " " + this.brand + " " + this.model + " with a " + this.engine + " engine.");
    }
};

carInfo.displayInfo();

// Task 5:
const movie1 = {
    name: "The Shawshank Redemption",
    genre: "Drama",
    releaseYear: 1994
};

const movie2 = {
    name: "Inception",
    genre: "Sci-Fi",
    releaseYear: 2010
};

const movie3 = {
    name: "The Dark Knight",
    genre: "Action",
    releaseYear: 2008
};

// Task 6:
const calculator = {
    addition: function(num1, num2){
        console.log(num1 + num2);
    },

    subtraction: function(num1, num2){
        console.log(num1 - num2);
    },

    multiplication: function(num1, num2){
        console.log(num1 * num2);
    },

    division: function(num1, num2){
        console.log(num1 / num2);
    },

    quality: function(num1, num2){
        console.log(num1 === num2);
    }
};

calculator.addition(5, 3);
calculator.subtraction(10, 4);
calculator.multiplication(7, 2);
calculator.division(20, 5);
calculator.quality(5, 5);

