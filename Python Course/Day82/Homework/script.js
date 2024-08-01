function createElement(){
    const elementName = prompt("Enter the name of the element");

    if (elementName){
        const newElement = document.createElement(elementName);
        newElement.textContent = "This is a ${elementName} element.";
        newElement.className = "example";

        document.getElementById("container").appendChild(newElement);

        selectionExamples();
    }
}

function selectionExamples(){
    const container = document.getElementById("cont");
    console.log(container); // აბრუნებს ელემენტს მითითებული ID-ით.

    const elementsByClass = document.getElementsByClassName("example");
    console.log(elementsByClass); // აბრუნებს ყველა ელემენტს მითითებული კლასის სახელით.

    const divs = document.getElementsByTagName("div");
    console.log(divs); // აბრუნებს ყველა ელემენტს მითითებული ტეგის სახელით.

    const firstExample = document.querySelector(".example");
    console.log(firstExample); // აბრუნებს პირველ ელემენტს რომელიც ემთხვევა მითითებულ CSS სელექტორს.

    const allExamples = document.querySelectorAll(".example");
    console.log(allExamples); // აბრუნებს ყველა ელემენტს რომელიც ემთხვევა მითითებულ CSS სელექტორს.
}

