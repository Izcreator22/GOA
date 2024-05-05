function displayText(){
    const text = document.getElementById("textInput").value;
    const color = document.getElementById("colorInput").value;
    const displayParagraph = document.getElementById("displayParagraph").value;

    displayParagraph.textContent = text;
    displayParagraph.textContent = color;
}
