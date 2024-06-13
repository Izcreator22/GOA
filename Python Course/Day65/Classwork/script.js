/* for(let i = 0; i < 5; i++){
    console.log(i)
} */



/* for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i + " is even");
    } else {
        console.log(i + " is odd");
    }
} */


/* const correctPass = "Luka123"
let isCorrect = false;

while(isCorrect != true){
    const userInput = prompt("Please enter your password")
    console.log(userInput)
    if(userInput == correctPass){
        console.log("Successfully logined");
        isCorrect = true;
    } else{
        console.log("Please try again")
    }
} */


let correctPassword = "ilia1234"
let userPassword = "";

while (userPassword !== correctPassword){
    userPassword = prompt("Please enter your password:");
    if(userPassword === correctPassword){
        alert("Welcome");
    } else {
        alert("Incorrect password. Try again");
    }
}

