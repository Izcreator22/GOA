
/* const p =  document.getElementById("just_p"); 

  setTimeout(function(){
    p.textContent = "Text has been changed:";
    p.style.color = "purple";
    p.style.backgroundColor = "black";
}, 3000); */

// DOM წარმოადგენს გვერდს ისე რომ პროგრამებს შეუძლია შეცვალონ დოცუმენტის სტრუქტურა სტილი და შინაარსი. მისი თითოეული "კვანძი "შეესაბამება ელემენტს და ატრიბუტს. ასევე მისი საშუალებით JS-ს შეუძლია html დოკუმენტების წვდომა და მანიპულირება.

// undefined


// getElementById
// getElementsByClassName
// getElementsByTagName
// querySelector
// querySelectorAll

// 1
const elementById = document.getElementById("myid");
console.log(elementById); // agricxavs paragrafis elements

// 2
const elementsByClassName = document.getElementsByClassName("myClass");
console.log(elementsByClassName); // agricxavs pragrafis elementis html koleqcias (HTMLCollection)

// 3
const elementsByTagName = document.getElementsByTagName("p");
console.log(elementsByTagName); // esec agricxavs paragrafis elementis html koleqcias

// 4
const queryElement = document.querySelector(".myClass");
console.log(queryElement); // agricxavs pirveli paragrafis elements klasit "myClass"

// 5
const queryAllElements = document.querySelectorAll(".myClass");
console.log(queryAllElements); // agricxavs paragrafis elementebis NodeList-s klasit "myClass"
