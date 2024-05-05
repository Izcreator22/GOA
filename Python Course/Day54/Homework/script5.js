//Task 1:
// Information 'bout me
function infoJoin(firstName, lastName, age, residence, interest){
    const infoSentence = firstName + " " + lastName + " is " + age + " years old, living in " + residence + ". Interest/Hobby: " + interest;
    return infoSentence;
}

const info = infoJoin("Ilia", "Gratelle", 40, "Paris", "Coding")
console.log(info);

//Task 2:
// AgeCheck
function ageCheck(age){
    const message = age > 18 ? "Age is greater than 18" : (age < 18 ? "Age is less than 18" : "Age is eequal to 18");
    console.log(message);
}

ageCheck(20);
ageCheck(15);
ageCheck(18);

//Task 3:
// Displaying alert when button's clicked
function alerter(){
    alert("Clicked");
}

//Task 4:
// Changing paragraph's color
function colorChnage(){
    const paragraph = document.getElementById("paragraph");
    paragraph.style.color = "green";
}

//Task 5:
// Changing text color of paragraphs
document.getElementById("paragraph1").style.color = "green";
document.getElementById("paragraph2").style.color = "green";
document.getElementById("paragraph3").style.color = "green";
