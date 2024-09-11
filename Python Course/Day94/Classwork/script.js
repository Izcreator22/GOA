// 1
class Book {
    constructor(title, author, year){
      this.title = title;
      this.author = author;
      this.year = year;
    }
  
    getSummary() {
      return `${this.title} was written by ${this.author} in ${this.year}.`;
    }
  
    getAge() {
      const currentYear = new Date().getFullYear();
      return `${this.title} is ${currentYear - this.year} years old.`;
    }
}
  
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
  
console.log(book1.getSummary());
console.log(book1.getAge());

// 2
class Rectangle {
    constructor(width, height){
    this.width = width;
    this.height = height;
}

getArea() {
    return this.width * this.height;
}
  
getPerimeter() {
    return 2 * (this.width + this.height);
}
}
  
const rect = new Rectangle(10, 5);
  
console.log(`Area: ${rect.getArea()}`);
console.log(`Perimeter: ${rect.getPerimeter()}`);

// 3
class Employee {
    constructor(name, position, salary){
        this.name = name;
        this.position = position;
        this.salary = salary;
}
  
getBonus(percentage) {
    return `${this.name}'s bonus is ${this.salary * (percentage / 100)}.`;
    }
}
  
const employee1 = new Employee("jfhfdr", "hgrf", 50000);
  
console.log(employee1.getBonus(10));

