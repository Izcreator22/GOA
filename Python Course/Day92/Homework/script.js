// 1
function getMax(numbers){
    return Math.max(numbers)
}

console.log(getMax(5, 8, 7, 2, 15))

// 2
function filterGreaterThanTen(numbers){
    return numbers.filter(num => num > 10)
}

console.log(filterGreaterThanTen([3, 7 , 8, 9, 4, 16]))

// 3
function highlightWord(word){
    const paragraph = document.getElementById("text")
    const highlightedText = paragraph.textContent.replace(word, `<mark>${word}</mark>`)
    paragraph.innerHTML = highlightedText
}

highlightWord("powerful")

// 4
function removeDuplicates(arr){
    return [new Set(arr)]
}

console.log(removeDuplicates([1, 2, 3, 4, 5, 2, 1, 6]))

// 5
function getMin(numbers){
    return Math.min(numbers)
}

console.log(getMin(5, 10, 4, 7, 8))

