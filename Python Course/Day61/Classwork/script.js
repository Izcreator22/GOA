// Task 1:
console.log(true && true);    
console.log(true && false); 
console.log(false && true);  
console.log(false && false); 

console.log(true || true); 
console.log(true || false); 
console.log(false || true); 
console.log(false || false);


// Task 3:
function canGetIceCream(weather){
    if (weather >= 30 || weather <= 0){
        console.log("You can eat ice cream")
    } else {
        console.log("You can't get ice cream")
    }
}

canGetIceCream(25);
canGetIceCream(35);
canGetIceCream(-5);
