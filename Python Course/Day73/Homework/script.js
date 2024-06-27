//1 
let book = {
    title: "Don Quixote",
    author: "Cervantes",
    yearPublished: 1605
};

console.log(book);                                                                                                      

// 2
book.genre = "Psychological Fiction";
console.log(book);

// 3
delete book.yearPublished;
console.log(book);

// 4
console.log(book.title);

// 5
console.log("author" in book);
console.log("yearPublished" in book);

// 6
for (let key in book){
    console.log(key + ":" + book[key]);
}

// 7
let people = [
    {name: "Anzora", age: 50},
    {name: "Tamaza", age: 45},
    {name: "Sochika", age: 55}
];

console.log(people);

// 8
let length = Object.keys(book).length;
console.log(length);

// 9
let library = {
    name: "Library",
    address: {
        street: "221B Baker St",
        city: "London",
        zip: "12345"
    },
    books: [
        {title: "The Picture of Dorian Gray", author: "Oscar Wilde"},
        {title: "The Man Who Laughs", author: "Victor Hugo"}
    ]
};

console.log(library.address.city);
console.log(library.books[0].title);

// 10
let values = Object.values(book);
console.log(values);

// 11
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers);

// 12
numbers.push(11);
console.log(numbers);

// 13
let newNumbers = [0];
for (let i = 0; i < numbers.length; i++){
    newNumbers.push(numbers[i]);
}
numbers = newNumbers;

console.log(numbers);

// 14
numbers.pop();
console.log(numbers);

// 15
let new_Numbers = [];
for (let i = 1; i < numbers.length; i++){
    new_Numbers.push(numbers[i]);
}
numbers = new_Numbers;

console.log(numbers);

// 16
let lengthh = numbers.length;
console.log(length);

// 17
console.log(numbers[2]);

// 18
for (let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}

// 19
let doubledNumbers = [];
for (let i = 0; i < numbers.length; i++){
    doubledNumbers.push(numbers[i] * 2);
}

console.log(doubledNumbers);

// 20
let reversedNumbers = [];
for (let i = numbers.length - 1; i >= 0; i--){
    reversedNumbers.push(numbers[i]);
}

console.log(reversedNumbers);
