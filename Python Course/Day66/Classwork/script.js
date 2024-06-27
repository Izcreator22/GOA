/* 
const car = {
    brand: "Mercedes Benz",
    model: "S Class",
    maxSpeed: 250,
    currentSpeed: 0,

    acceleration(){
        this.currentSpeed += 10;
        console.log(this.currentSpeed, 'KM/H');
    }
}

car.model = "G class"

delete car.acceleration

console.log(car) */

// Task
const car = {
    brand: "Mercedes Benz",
    model: "S Class",
    currentSpeed: 0,
    topSpeed: 250,

    // Acceleration 1 მეთოდი
    acceleration(){
        this.currentSpeed += 10;
        if (this.currentSpeed > this.topSpeed){
            this.currentSpeed = this.topSpeed;
            console.log("The car's at maximum speed");
        } else {
            console.log(this.currentSpeed, 'KM/H');
        }
    },

    // Decelerate 2 მეთოდი
    deceleration(){
        if (this.currentSpeed > 0){
            this.currentSpeed -= 10;
            if (this.currentSpeed < 0){
                this.currentSpeed = 0;
            }
            console.log(this.currentSpeed, 'KM/H');
        } else {
            console.log("Don't add anymore")
        }
    },

    // 3 მეთოდი printCurrentSpeed
    printCurrentSpeed(){
        console.log("current speed is: this.currentSpeed, KM/H");
    }
};

car.acceleration();
car.printCurrentSpeed();

car.acceleration();
car.printCurrentSpeed();

car.deceleration();
car.printCurrentSpeed();

car.deceleration();
car.printCurrentSpeed();

car.deceleration();
car.printCurrentSpeed();

delete car.model;

console.log(car);


function Account(firstname, lastname, email,){
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
}

const acc1 = new Account("Luka", "Tskhvaradze", "lcxvaradze@gmail.com");
const acc2 = new Account("Lika", "Jijvadze", "ljijvo@gmail.com");

console.log(acc1);



// Task 2
function Car(model, topSpeed){
    this.model = model;
    this.currentSpeed = 0;
    this.topSpeed = topSpeed;

    
    this.acceleration = function(){
        this.currentSpeed += 10;
        if (this.currentSpeed > this.topSpeed){
            this.currentSpeed = this.topSpeed;
            console.log("The car is at maximum speed.");
        } else {
            console.log(this.currentSpeed + " KM/H");
        }
    };

    
    this.deceleration = function(){
        if (this.currentSpeed > 0){
            this.currentSpeed -= 10;
            if (this.currentSpeed < 0){
                this.currentSpeed = 0;
            }
            console.log(this.currentSpeed + " KM/H");
        } else {
            console.log("Don't add anymore; the car is already stopped.");
        }
    };

    
    this.printInfo = function(){
        console.log("Model: " + this.model + ", Current Speed: " + this.currentSpeed + " KM/H, Top Speed: " + this.topSpeed + " KM/H");
    };
}


const car1 = new Car(250);
const car2 = new Car(240);
const car3 = new Car(220);
const car4 = new Car(230);
const car5 = new Car(320);


car1.acceleration();
car1.printInfo();

car2.acceleration();
car2.printInfo();

car3.deceleration();
car3.printInfo();

car4.acceleration();
car4.deceleration();
car4.printInfo();

car5.acceleration();
car5.deceleration();
car5.printInfo();


delete car1.model;
console.log(car1);
