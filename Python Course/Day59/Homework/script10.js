// Task 1:
function performOperations(str, num){
    console.log(str + num);
    console.log(str - num);
    console.log(str * num);
    console.log(str / num);
}

performOperations("Hello", 5);

// Task 2:
function generateColoredParagraph(){
    const text = prompt("Enter text:");
    const color = prompt("Enter color:");
    const bgColor = prompt("Enter background color:");
    const paragraph = "<p style='color: " + color + "; background-color: " + bgColor + ";'>" + text + "</p>";
    document.body.innerHTML += paragraph;
}

generateColoredParagraph();

// Task 3:
function compareNumbers(num1, num2){
    console.log(num1 + ">" + num2 + ":", num1 > num2);
    console.log(num1 + ">=" + num2 + ":", num1 >= num2);
    console.log(num1 + "<" + num2 + ":", num1 < num2);
    console.log(num1 + "<=" + num2 + ":", num1 <= num2);
    console.log(num1 + "==" + num2 + ":", num1 == num2);
    console.log(num1 + "!==" + num2 + ":", num1 !== num2);
}

compareNumbers(5, 10);

// Task 4:
function parseElement(element){
    console.log("Parsing as integer:", parseInt(element));
    console.log("Parsing as float:", parseFloat(element));
}

parseElement("10");
parseElement("10.5");
parseElement("Hello");

// Task 5: Inline, Internal and External
//External
function changeColor(){
    document.getElementById("myButton").style.backgroundColor="green";
}

